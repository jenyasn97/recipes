<template>
  <AppLayout>
    <template #title> Рецепты </template>
    <template #controls>
      <RouterLink :to="getRecipePath(`new`)">
        <AppButton text="Добавить рецепты"></AppButton>
      </RouterLink>
    </template>
    <template #inner>
      <div class="wrapper">
        <el-table :data="recipes">
          <el-table-column prop="idMeal" label="Id" />
          <el-table-column label="Image">
            <template #default="scope">
              <RouterLink :to="getRecipePath(scope.row.idMeal)">
                <img class="image" :src="scope?.row?.strMealThumb" :alt="scope?.row?.strMeal" />
              </RouterLink>
            </template>
          </el-table-column>
          <el-table-column prop="strMeal" label="Name" />
          <el-table-column prop="strArea" label="Area" />
          <el-table-column prop="strCategory" label="Category" />
          <el-table-column label="Tags"
            ><template #default="scope">
              <template v-if="scope?.row?.strTags"
                ><el-tag type="primary" class="tag" v-for="(tag, key) in scope.row.strTags.split(',')" :key="key">{{ tag }}</el-tag></template
              >
            </template></el-table-column
          >
        </el-table>
      </div>
    </template>
  </AppLayout>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import { ROUTES_PATHS } from "@/constants";
import AppLayout from "@/layouts/AppLayout.vue";
import { RecipeService } from "@/services";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const recipes = ref();

async function fetchRecipes() {
  try {
    recipes.value = await RecipeService.getRecipesByLetter();
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

function getRecipePath(id) {
  return `${ROUTES_PATHS.RECIPE.split(":")[0]}${id}`;
}

onMounted(() => {
  fetchRecipes();
});
</script>

<style lang="scss" scoped>
.tag {
  margin: 2px 3px;
}
.image {
  width: 70px;
  height: 70px;
}
</style>
