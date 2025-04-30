<template>
  <AppLayout>
    <template #title> Категории </template>
    <template #controls>
      <AppButton text="Добавить категорию"></AppButton>
    </template>
    <template #inner></template>
  </AppLayout>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import AppLayout from "@/layouts/AppLayout.vue";
</script>

<style lang="scss" scoped></style>
