import { toggleModal } from "../utils/toggleModal.js";
import { renderModal } from "./renderModal.js";
import { generateUniqueID } from "../utils/generateUniqueID.js";

export const addExpense = () => {
  const expenseId = generateUniqueID();
  const modalId = "log-expense";
  const expenses = JSON.parse(localStorage.getItem("expenses"));

  const logExpenseButton = document.querySelector(".log-expense-button");

  logExpenseButton.addEventListener("click", () => {
    const isCreated = !!document.querySelector(`#${modalId}`);

    if (!isCreated) {
      expenses?.forEach((expense) => {
        if (expenseId === expense.id) {
          expenseId = generateUniqueID();
        }
      });

      renderModal(modalId, expenseId);

      const closeButton = document.getElementById("close-modal");

      closeButton.addEventListener("click", () => {
        toggleModal(modalId);
        document.getElementById(modalId).remove();
      });
    } else {
      toggleModal(modalId);
    }
  });
};
