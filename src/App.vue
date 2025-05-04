<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from "vue";
import { useRootStore } from "./stores/root";

const rootStore = useRootStore();
onMounted(() => {
  rootStore.getAries();
  rootStore.getCategories();
  rootStore.getIngridients();
});
</script>

<style lang="scss" scoped></style>
