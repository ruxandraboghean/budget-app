import { createHistory } from "../createHistory.js";
import { updateExpenses } from "./updateExpenses.js";

export const deleteExpense = (id) => {
  const expenses = JSON.parse(localStorage.getItem("expenses"));

  console.log(expenses);

  const filteredExpenses = expenses.filter((expense) => expense.id !== id);

  console.log(filteredExpenses);

  localStorage.setItem("expenses", JSON.stringify(filteredExpenses));
  updateExpenses();

  document.querySelector(".history-container").remove();

  createHistory();
};
