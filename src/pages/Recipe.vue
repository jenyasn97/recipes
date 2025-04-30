<template>
  <AppLayout>
    <template #title> {{ isCreatingMode ? "Новый рецепт" : recipeUpdated.strMeal }} </template>
    <template #controls>
      <AppButton text="Сохранить"></AppButton>
    </template>
    <template #inner>{{ recipeUpdated }}</template>
  </AppLayout>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import { RecipeService } from "@/services";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const recipeId = route?.params?.id;
const recipe = ref(RecipeService.getEmptyRecipe());
const recipeUpdated = ref(RecipeService.getEmptyRecipe());
const isCreatingMode = ref(true);

async function fetchRecipe() {
  try {
    const data = await RecipeService.getRecipesById(recipeId);
    recipe.value = data;
    recipeUpdated.value = data;
    isCreatingMode.value = false;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  if (parseInt(recipeId)) {
    fetchRecipe();
  }
});
</script>

<style lang="scss" scoped></style>
