import { createRouter, createWebHistory } from "vue-router";
import MainContent from "@/views/MainContent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainContent,
    },
    {
      path: "/list",
      name: "bookList",
      component: () => import("../views/book/BookList.vue"),
    },
    {
      path: "/info",
      name: "bookInfo",
      component: () => import("../views/book/BookInfo.vue"),
    },
    {
      path: "/form",
      name: "bookForm",
      component: () => import("../views/book/BookForm.vue"),
    },
  ],
});

export default router;
