import { WalletModal } from "../components/WalletModal.js";
import { generateUniqueID } from "../utils/generateUniqueID.js";
import { submitWallet } from "./submitWallet.js";

export const renderWalletModal = (modalId, walletId, isEventActive) => {
  const modalFragment = new DocumentFragment();

  const modalSection = document.createElement("section");

  modalSection.classList.add("modal");
  modalSection.classList.add("visible");
  modalSection.setAttribute("id", modalId);

  modalSection.innerHTML += WalletModal(walletId);

  modalFragment.append(modalSection);
  document.body.appendChild(modalFragment);

  const walletForm = document.getElementById("form-add-wallet");

  walletForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = e.target.elements;
    submitWallet(modalId, walletId, data, isEventActive, walletForm);

    e.target.reset();
    walletId = generateUniqueID();
  });
};
