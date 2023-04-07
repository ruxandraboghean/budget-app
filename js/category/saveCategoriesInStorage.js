import { categories } from "../../mockData/categories.js";

export const saveCategoriesInStorage = () => {
  const isCreated = !!localStorage.getItem("categories");

  if (!isCreated) {
    localStorage.setItem("categories", JSON.stringify(categories));
  }
};
