<template>
  <AppLayout>
    <template #title> Категории </template>
    <template #inner>
      <el-table :data="categories" style="width: 100%">
        <el-table-column prop="strCategory" label="Category" />
      </el-table>
    </template>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { computed } from "vue";
const rootStore = useRootStore();

const categories = computed(() => {
  return rootStore.categories;
});
</script>

<style lang="scss" scoped></style>
