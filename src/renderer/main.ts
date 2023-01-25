import { createSSRApp } from "vue"
import { createRouter, createMemoryHistory } from "vue-router"
import { routes } from "../routes"
import App from "@/App.vue"

import "../assets/main.css"
import "@fortawesome/fontawesome-free/css/fontawesome.min.css"
import "@fortawesome/fontawesome-free/css/solid.min.css"

export async function createApp(path: string) {
  const app = createSSRApp(App)
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })
  router.push(path)
  await router.isReady()
  app.use(router)
  return { app }
}
