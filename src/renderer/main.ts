import { createSSRApp } from "vue"
import { createRouter, createMemoryHistory } from "vue-router"
import { createHead } from "@vueuse/head"
import { routes } from "../routes"
import App from "@/App.vue"

import "../assets/main.css"
import "@fortawesome/fontawesome-free/css/fontawesome.min.css"
import "@fortawesome/fontawesome-free/css/solid.min.css"
import "@fortawesome/fontawesome-free/css/brands.min.css"

export async function createApp(path: string) {
  const app = createSSRApp(App)

  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })
  router.push(path)
  await router.isReady()
  app.use(router)

  const head = createHead()
  app.use(head)

  return { app, head }
}
