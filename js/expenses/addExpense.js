import { toggleModal } from "../utils/toggleModal.js";
import { renderModal } from "./renderModal.js";
import { generateUniqueID } from "../utils/generateUniqueID.js";

export const addExpense = () => {
  const expenseId = generateUniqueID();
  const modalId = "log-expense";
  const expenses = JSON.parse(localStorage.getItem("expenses"));

  const logExpenseButton = document.querySelector("#log-expense-button");


  logExpenseButton.addEventListener("click", () => {
    const isEventActive = true;
    const isCreated = !!document.querySelector(`#${modalId}`); // daca e null - false, daca exista e true

    if (!isCreated && expenses === null) {
      renderModal(modalId, expenseId, isEventActive);
      const closeButton = document.getElementById("close-modal");

      closeButton.addEventListener("click", () => {
        toggleModal(modalId);
        document.getElementById(modalId).remove();
      });
    } else {
      expenses?.forEach((expense) => {
        if (expenseId === expense.id) {
          expenseId = generateUniqueID();
        }
      });
      renderModal(modalId, expenseId, isEventActive);

      const closeButton = document.getElementById("close-modal");

      closeButton.addEventListener("click", () => {
        document.getElementById(modalId).remove();
      });
    }
  });
};
