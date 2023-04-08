import { addDeleteEvent } from "./addDeleteEvent.js";
import { addEditEvent } from "./addEditEvent.js";

export const createExpenseAction = () => {
  const expenses = JSON.parse(localStorage.getItem("expenses"));

  expenses?.map((expense) => {
    const editButton = document.getElementById(`edit-${expense.id}`);
    const deleteButton = document.getElementById(`delete-${expense.id}`);

    addEditEvent(editButton, expense.id);
    addDeleteEvent(deleteButton, expense.id);
  });
};
