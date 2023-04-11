FROM node:19.9.0-alpine as build
WORKDIR /app

COPY . .

RUN ["npx", "vite", "build"]

FROM node:19.9.0-alpine as dev
WORKDIR /app

COPY . .

CMD ["npx", "vite"]

FROM nginx:1.24.0-alpine as app
WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/configfile.template
COPY --from=build /app/dist ./

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
