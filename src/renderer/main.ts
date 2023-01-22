import { createSSRApp } from "vue"
import { createRouter, createMemoryHistory, createWebHistory } from "vue-router"
import { routes } from "../routes"
import App from "@/App.vue"

import "../assets/main.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

export async function createApp(path: string) {
  const app = createSSRApp(App)
  const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  })
  router.push(path)
  await router.isReady()
  app.use(router)
  return { app }
}
