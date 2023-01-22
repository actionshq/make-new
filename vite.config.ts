/* eslint-env node */
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import ssr from "vite-plugin-ssr/plugin"

export default defineConfig({
  plugins: [vue(), ssr({ prerender: true })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
