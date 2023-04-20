import { createHistory } from "../createHistory.js";
import { createExpenseAction } from "./createExpenseAction.js";
import { updateExpenses } from "./updateExpenses.js";

export const deleteExpense = (id) => {
  const expenses = JSON.parse(localStorage.getItem("expenses"));

  const filteredExpenses = expenses.filter((expense) => expense.id !== id);

  let expenseToBeDeleted = {};

  expenses.forEach((expense) => {
    if (expense.id === id) {
      expenseToBeDeleted = expense;
    }
  });

  updateExpenses("delete", expenseToBeDeleted);

  localStorage.setItem("expenses", JSON.stringify(filteredExpenses));

  document.querySelector(".history-container").remove();

  createHistory();
  createExpenseAction();
};
