import axios from "axios";
import { URL_RECIPES_BY_LETTER, URL_RECIPES_BY_ID } from "../../constants";

export const getRecipesByLetter = async () => {
  const data = await axios.get(URL_RECIPES_BY_LETTER);
  return data?.data?.meals;
};

export const getRecipesById = async (id) => {
  const data = await axios.get(`${URL_RECIPES_BY_ID}${id}`);
  return data?.data?.meals[0];
};
