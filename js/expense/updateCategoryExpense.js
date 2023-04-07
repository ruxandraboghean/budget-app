import { categories } from "../../mockData/categories.js";

export const updateCategoryExpense = (expenseData) => {
  const categorySearched = categories.find(
    (categorySearched) => categorySearched.title === expenseData.expenseCategory
  );

  if (categorySearched) {
    categorySearched.amount = expenseData.expenseAmount;
  }

  console.log(categories);
};
