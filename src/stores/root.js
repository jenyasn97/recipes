import { ref } from "vue";
import { defineStore } from "pinia";
import { CommonService } from "@/services/";

export const useRootStore = defineStore("root", () => {
  const areas = ref(null);
  const categories = ref(null);
  const ingridients = ref(null);

  async function getAries() {
    const data = await CommonService.getAreas();
    areas.value = data;
  }

  async function getIngridients() {
    const data = await CommonService.getIngridients();
    ingridients.value = data;
  }

  async function getCategories() {
    const data = await CommonService.getCategories();
    categories.value = data;
  }

  return { areas, categories, ingridients, getAries, getIngridients, getCategories };
});
