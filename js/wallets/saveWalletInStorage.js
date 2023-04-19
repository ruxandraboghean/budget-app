import { createAside } from "../createAside.js";
import { createTotalCards } from "../createTotalCards.js";

export const saveWalletInStorage = (modalId, walletData, id, isEventActive) => {
  const isCreated = !!localStorage.getItem("wallets");

  if (!isCreated) {
    localStorage.setItem("wallets", JSON.stringify([walletData]));
    document.getElementById(modalId).remove();
    document.querySelector(".aside-components").remove();
  } else {
    const wallets = JSON.parse(localStorage.getItem("wallets"));

    if (isEventActive) {
      wallets.push(walletData);
      localStorage.setItem("wallets", JSON.stringify(wallets));

      document.getElementById(modalId).remove();
      document.querySelector(".aside-components").remove();
      document.querySelector(".aside-items").remove();
      document
        .querySelectorAll(".widget-item-total-card")
        .forEach((el) => el.remove());
    }
  }

  createAside();
  createTotalCards();
};
