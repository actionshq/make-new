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
        <link rel="manifest" href="/manifest.webmanifest">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="noindex,nofollow">
        <script>if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/sw.js', { scope: '/' })})}</script>
        <title>make.new</title>
      </head>
      <body class="min-w-[320px]">
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
}
