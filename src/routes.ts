import type { RouteRecordRaw } from "vue-router"

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    component: () => import("./pages/index/index.page.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("./renderer/_error.page.vue"),
  },
  {
    path: "/:actionName",
    name: "action",
    component: () => import("./pages/action/index.page.vue"),
    props: (route) => ({ actionName: route.params.actionName }),
  },
]
