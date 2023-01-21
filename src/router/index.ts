import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/Index.vue"),
    },
    {
      path: "/:actionName",
      name: "action",
      component: () => import("../views/Action.vue"),
      props: (route) => ({ actionName: route.params.actionName }),
    },
    {
      path: "/404",
      name: "404",
      component: () => import("../views/404.vue"),
    },
  ],
});

export default router;
