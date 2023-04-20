import { AsideModal } from "../components/AsideModal.js";
import { generateUniqueID } from "../utils/generateUniqueID.js";
import { submitModalData } from "./submitModalData.js";

export const renderAsideModal = (modalId, isEventActive) => {
  const modalFragment = new DocumentFragment();

  const modalSection = document.createElement("section");

  modalSection.classList.add("modal");
  modalSection.classList.add("visible");
  modalSection.setAttribute("id", modalId);

  modalFragment.append(modalSection);
  document.body.appendChild(modalFragment);

  if (modalId === "add-wallet") {
    modalSection.innerHTML += AsideModal("form-add-wallet", "wallet");

    const walletForm = document.getElementById("form-add-wallet");

    const asideComponents =
      walletForm.getElementsByClassName("aside-components");
    asideComponents.id = "aside-components-wallets";

    walletForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = e.target.elements;

      submitModalData(
        modalId,
        data.wallet,
        data.amount,
        isEventActive,
        walletForm
      );

      e.target.reset();
    });
  } else if (modalId === "add-category") {
    modalSection.innerHTML += AsideModal("form-add-category", "category");

    const categoryForm = document.getElementById("form-add-category");

    const amountInput = categoryForm.querySelector("#amount");

    amountInput.value = "0";
    amountInput.disabled = true;


    categoryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = e.target.elements;
      submitModalData(
        modalId,
        data.category,
        data.amount,
        isEventActive,
        categoryForm
      );

      e.target.reset();
    });
  }
};
