import { renderToString } from "@vue/server-renderer"
import {
  escapeInject,
  dangerouslySkipEscape,
  type PageContextBuiltIn,
} from "vite-plugin-ssr"
import { createApp } from "./main"

export async function render(pageContext: PageContextBuiltIn) {
  const { app } = await createApp(pageContext.urlPathname)

  const appHtml = await renderToString(app)

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb">
        <meta name="theme-color" content="#2563eb">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="noindex,nofollow">
        <title>make.new</title>
      </head>
      <body class="min-w-[320px]">
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
}
