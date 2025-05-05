import { ROUTES_PATHS } from "@/constants";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: "home",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: ROUTES_PATHS.CATEGORIES,
      name: "categories",
      component: () => import("@/pages/Categories.vue"),
    },

    {
      path: ROUTES_PATHS.RECIPE,
      name: "recipe",
      component: () => import("@/pages/Recipe.vue"),
    },
  ],
});

export default router;
