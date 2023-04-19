import { toggleModal } from "../utils/toggleModal.js";
import { generateUniqueID } from "../utils/generateUniqueID.js";
import { renderWalletModal } from "./renderWalletModal.js";

export const addWallet = () => {
  const walletId = generateUniqueID();
  const modalId = "add-wallet";
  const wallets = JSON.parse(localStorage.getItem("wallets"));

  const addWalletButton = document.querySelector("#add-wallets-button");

  addWalletButton.addEventListener("click", () => {
    console.log("clicked");
    const isEventActive = true;
    const isCreated = !!document.querySelector(`#${modalId}`);

    if (!isCreated) {
      wallets?.forEach((wallet) => {
        if (walletId === wallet.id) {
          walletId = generateUniqueID();
        }
      });

      renderWalletModal(modalId, walletId, isEventActive);

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
