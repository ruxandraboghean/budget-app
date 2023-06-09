import { toggleModal } from "../utils/toggleModal.js";
import { renderAsideModal } from "../utils/renderAsideModal.js";

export const addWallet = () => {
  const modalId = "add-wallet";

  const addWalletButton = document.querySelector("#add-wallets-button");

  addWalletButton.addEventListener("click", () => {
    console.log("clicked");
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
