import { createApp } from "./main"

export async function render() {
  const { app } = await createApp(window.location.pathname)
  app.mount("#app")
}

export const clientRouting = true
