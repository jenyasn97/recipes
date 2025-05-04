<template>
  <div class="menu">
    <div class="logo">
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--emojione"
        preserveAspectRatio="xMidYMid meet">
        <g fill="#ff5a79">
          <path d="M28.3 32.2C29.6 24.3 16.8 11.5 6 21.9C-6 33.6 13.2 59 14 62c2.6-.8 34.4-1.6 36-18.2c1.3-15.4-17.2-17.4-21.7-11.6"></path>

          <path d="M59.2 3.6c-6.8-5.1-13.1 3.1-11.7 7c-3.3-2.9-13-.5-11.3 7.7c1.9 9.1 19.3 7.3 20.9 7.7c.4-1.5 9.3-16.9 2.1-22.4"></path>
        </g>
      </svg>
    </div>
    <el-menu :router="true" class="nav el-menu-vertical-demo">
      <el-menu-item :index="ROUTES_PATHS.HOME" :class="['item', isPathActive(ROUTES_PATHS.HOME) && 'active']">
        <el-icon :size="24"><Food /></el-icon>
      </el-menu-item>
      <el-menu-item :index="ROUTES_PATHS.CATEGORIES" :class="['item', isPathActive(ROUTES_PATHS.CATEGORIES) && 'active']">
        <el-icon :size="24"><Dish /></el-icon>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ROUTES_PATHS } from "@/constants";
import { useRoute } from "vue-router";
const route = useRoute();

function isPathActive(path) {
  return route.path === path;
}
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables.scss";
.menu {
  border-right: 1px solid variables.$border;
  height: 100%;
  min-height: 100vh;
  padding: 20px 5px 0px;
}

.nav {
  border: none;
}

.logo {
  padding: 0 15px 15px;
  border-bottom: 1px solid variables.$border;
}
.item {
  color: variables.$violet;
  &.active {
    color: variables.$pink;
  }
}
</style>
