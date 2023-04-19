import { addCategory } from "../categories/addCategory.js";
import { createAside } from "../createAside.js";
import { createTotalCards } from "../createTotalCards.js";
import { addWallet } from "../wallets/addWallet.js";

export const saveAsideDataInStorage = (
  modalId,
  data,
  isEventActive,
  storageArray
) => {
  const isCreated = !!localStorage.getItem(storageArray);

  if (!isCreated) {
    localStorage.setItem(`${storageArray}`, JSON.stringify([data]));
    document.getElementById(modalId).remove();
    document.querySelector(`#aside-components-${storageArray}`).remove();
  } else {
    const array = JSON.parse(localStorage.getItem(`${storageArray}`));

    if (isEventActive) {
      array.push(data);
      localStorage.setItem(`${storageArray}`, JSON.stringify(array));

      document.getElementById(modalId).remove();
      document.querySelector(`#aside-components-${storageArray}`).remove();

      document.querySelector(".aside-items").remove();
      document
        .querySelectorAll(".widget-item-total-card")
        .forEach((el) => el.remove());
    }
  }

  createAside();
  createTotalCards();
  addCategory();
  addWallet();
};
