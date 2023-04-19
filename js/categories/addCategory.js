import { toggleModal } from "../utils/toggleModal.js";
import { renderAsideModal } from "../utils/renderAsideModal.js";

export const addCategory = () => {
  const modalId = "add-category";
  const addcategoryButton = document.querySelector("#add-categories-button");

  addcategoryButton.addEventListener("click", () => {
    const isEventActive = true;
    const isCreated = !!document.querySelector(`#${modalId}`);

    if (!isCreated) {
      renderAsideModal(modalId, isEventActive);

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
