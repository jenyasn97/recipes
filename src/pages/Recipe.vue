<template>
  <AppLayout>
    <template #title> {{ isCreatingMode ? "Новый рецепт" : recipeUpdated.strMeal }} </template>
    <template #controls>
      <AppButton text="Сохранить"></AppButton>
    </template>
    <template #inner>
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <div class="label">Title</div>
            <el-input v-model="recipeUpdated.strMeal" placeholder="Title" />
          </div>
          <div class="col">
            <div class="label">Area</div>
            <el-select v-model="recipeUpdated.strArea" placeholder="Area">
              <el-option v-for="item in areas" :key="item.strArea" :label="item.strArea" :value="item.strArea" />
            </el-select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="label">Category</div>
            <el-select v-model="recipeUpdated.strCategory" placeholder="Category">
              <el-option v-for="item in categories" :key="item.strCategory" :label="item.strCategory" :value="item.strCategory" />
            </el-select>
          </div>
        </div>

        <div class="ingridients">
          <div class="subtitle">Ingridients</div>
          <div class="row align-items-flex-end" v-for="(ingridient, idx) in recipeIngridients" :key="`${ingridient.title}-${idx}`">
            <div class="col col-small bm-2">{{ idx + 1 }}</div>
            <div class="col">
              <div class="label">Measure</div>
              <el-input v-model="recipeIngridients[idx].measure" placeholder="Measure" />
            </div>
            <div class="col">
              <div class="label">Title</div>
              <el-input v-model="recipeIngridients[idx].title" placeholder="Title" />
            </div>
            <div class="col col-small bm-2"><AppButton circle icon="Delete" @click="() => removeIngridient(idx)"></AppButton></div>
          </div>
          <AppButton text="Add ingridient" @click="addIngridient"></AppButton>
        </div>
        <div class="row">
          <div class="col">
            <div class="subtitle">Instruction</div>
            <el-mention v-model="recipeUpdated.strInstructions" type="textarea" placeholder="Instructions" :autosize="{ minRows: 2, maxRows: 5 }" />
          </div>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import { RecipeService, CommonService } from "@/services";
import { useRootStore } from "@/stores/root";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const rootStore = useRootStore();
const recipeId = route?.params?.id;
const recipe = ref(RecipeService.getEmptyRecipe());
const recipeUpdated = ref(RecipeService.getEmptyRecipe());
const isCreatingMode = ref(true);
const recipeIngridients = ref([CommonService.getEmptyIngridient()]);

const areas = computed(() => {
  return rootStore.areas;
});
const categories = computed(() => {
  return rootStore.categories;
});

const normalizeRecipeIngridients = () => {
  const normalizedIngridients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe.value[`strIngredient${i}`]) {
      const ingr = {
        title: recipe.value[`strIngredient${i}`],
        measure: recipe.value[`strMeasure${i}`],
      };
      normalizedIngridients.push(ingr);
    }
  }
  recipeIngridients.value = normalizedIngridients;
};

async function fetchRecipe() {
  try {
    const data = await RecipeService.getRecipesById(recipeId);
    recipe.value = { ...data };
    recipeUpdated.value = { ...data };
    isCreatingMode.value = false;
  } catch (error) {
    console.log(error);
  }
}

function addIngridient() {
  recipeIngridients.value.push(CommonService.getEmptyIngridient());
}

function removeIngridient(idx) {
  recipeIngridients.value.splice(idx, 1);
}

onMounted(async () => {
  if (parseInt(recipeId)) {
    await fetchRecipe();
    normalizeRecipeIngridients();
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/variables.scss";

.bm-2 {
  margin-bottom: 5px;
}

.ingridients {
  padding-bottom: 16px;
}
</style>
