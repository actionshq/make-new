FROM node:18.13.0-alpine as build
WORKDIR /app

COPY . .

RUN ["npx", "vite", "build"]

FROM nginx:1.23.3-alpine as app
WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist ./

FROM node:18.13.0-alpine as dev
WORKDIR /app

COPY . .

CMD ["npx", "vite"]
