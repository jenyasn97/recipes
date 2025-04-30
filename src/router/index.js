import { createRouter, createWebHistory } from "vue-router";
import { ROUTES_PATHS } from "../constants";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: ROUTES_PATHS.CATEGORIES,
      name: "categories",
      component: () => import("../pages/Categories.vue"),
    },
  ],
});

export default router;
