import axios from "axios";
import { URL_AREAS, URL_CATEGORIES, URL_INGRIDIENTS } from "@/constants";

export const getAreas = async () => {
  const data = await axios.get(URL_AREAS);
  return data?.data?.meals;
};

export const getCategories = async () => {
  const data = await axios.get(URL_CATEGORIES);
  return data?.data?.meals;
};

export const getIngridients = async () => {
  const data = await axios.get(URL_INGRIDIENTS);
  return data?.data?.meals;
};
