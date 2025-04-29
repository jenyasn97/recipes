import axios from "axios";
import { URL_RECIPES_BY_LETTER } from "../../constants";

export const getRecipesByLetter = async () => {
  console.log(URL_RECIPES_BY_LETTER);
  const data = await axios.get(URL_RECIPES_BY_LETTER);
  return data;
};
