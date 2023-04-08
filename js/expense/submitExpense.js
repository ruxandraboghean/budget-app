import { categories } from "../../mockData/categories.js";
import { History } from "../components/History.js";
import { saveExpenseInStorage } from "./saveExpenseInStorage.js";
import { updateExpenses } from "./updateExpenses.js";

export const submitExpense = (id, formData) => {
  const { expense, wallet, date, amount } = formData;

  const expenseData = {
    id: id,
    expenseName: expense.value,
    expenseWallet: wallet.value,
    expenseCategory: category.value,
    expenseAmount: amount.value,
    expenseDate: date.value,
  };

  const categorySearched = categories.find(
    (categorySearched) => categorySearched.title === expenseData.expenseCategory
  );
  if (categorySearched) {
    expenseData.iconSRC = categorySearched.iconSRC;
  } else {
    expenseData.iconSRC = "";
  }

  const newExpense = History(expenseData);

  document.querySelector(".history-container").innerHTML += newExpense;

  saveExpenseInStorage(expenseData);
  updateExpenses(expenseData);
};
