import { createHistory } from "../createHistory.js";
import { createExpenseAction } from "./createExpenseAction.js";
import { updateExpenses } from "./updateExpenses.js";

export const saveExpenseInStorage = (
  modalId,
  expenseData,
  id,
  isEventActive
) => {
  const isCreated = !!localStorage.getItem("expenses");

  if (!isCreated) {
    localStorage.setItem("expenses", JSON.stringify([expenseData]));
    updateExpenses("add", expenseData);
    document.getElementById(modalId).remove();
    document.querySelector(".history-container").remove();
    createHistory();
    createExpenseAction();
  } else {
    const expenses = JSON.parse(localStorage.getItem("expenses"));

    if (isEventActive) {
      expenses.push(expenseData);
      localStorage.setItem("expenses", JSON.stringify(expenses));

      updateExpenses("add", expenseData);

      document.getElementById(modalId).remove();
      document.querySelector(".history-container").remove();

      createHistory();
    } else {
      let previousData = [];

      const modifiedExpenses = expenses.map((expense) => {
        if (expense.id === id) {
          previousData = expense;

          return (expense = {
            ...expense,
            expenseName: expenseData.expenseName,
            expenseCategory: expenseData.expenseCategory,
            expenseAmount: expenseData.expenseAmount,
            expenseDate: expenseData.expenseDate,
            expenseWallet: expenseData.expenseWallet,
          });
        } else {
          return expense;
        }
      });
      localStorage.setItem("expenses", JSON.stringify(modifiedExpenses));
      updateExpenses("edit", expenseData, previousData);
      document.getElementById(modalId).remove();
    }

    document.querySelector(".history-container").remove();
    createHistory();
    createExpenseAction();
  }
};
