import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/hook",
      name: "lifecycleHook",
      component: () => import("../views/LifecycleHook.vue"),
    },
    {
      path: "/watch",
      name: "watchtest",
      component: () => import("../views/WatchTest.vue"),
    },
    {
      path: "/OneComp",
      name: "OneComponent",
      component: () => import("../views/MultiComponentApp.vue"),
    },
  ],
});

export default router;
