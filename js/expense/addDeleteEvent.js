import { deleteExpense } from "./deleteExpense.js";

export const addDeleteEvent = (deleteButton, expenseId) => {
  deleteButton.addEventListener("click", () => {
    deleteExpense(expenseId);
  });
};
