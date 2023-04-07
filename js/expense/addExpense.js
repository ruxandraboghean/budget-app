import { toggleModal } from "./toggleModal.js";
import { renderModal } from "./renderModal.js";

export const addExpense = () => {
  const id = "log-expense";

  const logExpenseButton = document.querySelector(".log-expense-button");

  logExpenseButton.addEventListener("click", () => {
    const isCreated = !!document.querySelector(`#${id}`);

    if (!isCreated) {
      renderModal(id);

      const closeButton = document.getElementById("close-modal");

      closeButton.addEventListener("click", () => {
        toggleModal(id);
      });
    } else {
      toggleModal(id);
    }
  });
};
