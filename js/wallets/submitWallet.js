import { Widget } from "../components/Widget.js";
import { saveWalletInStorage } from "./saveWalletInStorage.js";

export const submitWallet = (
  modalId,
  walletId,
  formData,
  isEventActive,
  form
) => {
  const { wallet, amount } = formData;

  // create error message

  const errMessage = document.createElement("p");
  errMessage.id = "error-message";
  errMessage.classList.add("error-message");

  if (!document.getElementById("error-message")) {
    form.append(errMessage);
  }

  // check form inputs
  if (wallet.value === "" || amount.value === "") {
    errMessage.textContent = "All fields should be completed!";
  } else if (amount.value < 0) {
    errMessage.textContent = "The amount should be bigger than 0";
  } else {
    const walletData = {
      id: walletId,
      title: wallet.value,
      amount: amount.value,
      iconSRC: "./icons/blue-wallet.svg",
    };

    console.log(walletData, "@wallet data");

    const newWallet = Widget(walletData);

    document.querySelector(".aside-components").innerHTML += newWallet;

    saveWalletInStorage(modalId, walletData, walletData.id, isEventActive);
  }
};
