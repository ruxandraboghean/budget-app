import { toggleModal } from "../utils/toggleModal.js";
import { renderModal } from "./renderModal.js";
import { generateUniqueID } from "../utils/generateUniqueID.js";

export const addExpense = () => {
  const id = generateUniqueID();
  console.log(id);

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
