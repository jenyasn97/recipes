<template>
  <AppLayout>
    <template #title> Рецепты </template>
    <template #controls>
      <AppButton text="Добавить рецепты"></AppButton>
    </template>
    <template #inner> {{ recipes }} </template>
  </AppLayout>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import { RecipeService } from "@/services";
import { onMounted, ref } from "vue";

const recipes = ref();

async function fetchRecipes() {
  try {
    recipes.value = await RecipeService.getRecipesByLetter();
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

onMounted(() => {
  fetchRecipes();
});
</script>

<style lang="scss" scoped></style>
