import { categories } from "../../mockData/categories.js";
import { renderHistoryItem } from "../renderHistoryItem.js";
import { saveExpenseInStorage } from "./saveExpenseInStorage.js";
import { updateCategoryExpense } from "./updateCategoryExpense.js";

export const handleSubmit = (formData) => {
  const { expense, category, amount } = formData;

  const expenseData = {
    expenseName: expense.value,
    expenseCategory: category.value,
    expenseAmount: amount.value,
    date: new Date().getFullYear(),
  };

  const categorySearched = categories.find(
    (categorySearched) => categorySearched.title === expenseData.expenseCategory
  );
  if (categorySearched) {
    expenseData.iconSRC = categorySearched.iconSRC;
  } else {
    expenseData.iconSRC = "";
  }

  const newExpense = renderHistoryItem(expenseData);

  document.querySelector(".history-container").innerHTML += newExpense;

  saveExpenseInStorage(expenseData);
  updateCategoryExpense(expenseData);
};
