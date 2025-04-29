<template>
  <div class="root">
    <div class="menuInner"><AppMenu /></div>
    <main></main>
  </div>
</template>

<script setup>
import AppMenu from "@/components/AppMenu.vue";
</script>

<style lang="scss" scoped>
.menuInner {
  width: 70px;
}
</style>
