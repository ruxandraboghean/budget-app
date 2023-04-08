import { createHistory } from "../createHistory.js";

export const saveExpenseInStorage = (expenseData, id) => {
  const isCreated = !!localStorage.getItem("expenses");

  if (!isCreated) {
    localStorage.setItem("expenses", JSON.stringify([expenseData]));
  } else {
    const expenses = JSON.parse(localStorage.getItem("expenses"));

    const modifiedExpenses = expenses.map((expense) => {
      if (expense.id === id) {
        return (expense = {
          ...expense,
          expenseName: expense.expenseName,
          expenseCategory: expense.expenseCategory,
          expenseAmount: expense.expenseAmount,
          expenseDate: expense.expenseDate,
          expenseWallet: expense.expenseWallet,
        });
      } else {
        return expense;
      }
    });
    console.log(modifiedExpenses, "@modifiedExpense");

    if (modifiedExpenses !== null) {
      localStorage.setItem("expenses", JSON.stringify(modifiedExpenses));
    } else {
      expenses.push(expenseData);
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    document.querySelector(".history-container").remove();

    createHistory();
  }
};
