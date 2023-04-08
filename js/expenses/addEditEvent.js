import { editExpense } from "./editExpense.js";

export const addEditEvent = (editButton, expenseId) => {
  editButton.addEventListener("click", () => {
    editExpense(expenseId);
  });
};
