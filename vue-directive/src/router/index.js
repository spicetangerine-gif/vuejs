import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/bind",
      name: "directiveBind",
      component: () => import("@/views/DirectiveBind.vue"),
    },
    {
      path: "/model",
      name: "directiveModel",
      component: () => import("@/views/DirectiveModel.vue"),
    },
    {
      path: "/on",
      name: "directiveOn",
      component: () => import("@/views/DirectiveOn.vue"),
    },
    {
      path: "/for",
      name: "directiveFor",
      component: () => import("@/views/DirectiveFor.vue"),
    },
  ],
});

export default router;
