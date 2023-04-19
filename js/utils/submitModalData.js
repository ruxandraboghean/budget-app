import { Widget } from "../components/Widget.js";
import { saveAsideDataInStorage } from "./saveAsideDataInStorage.js";

export const submitModalData = (
  modalId,
  title,
  amount,
  isEventActive,
  form
) => {
  // create error message

  const errMessage = document.createElement("p");
  errMessage.id = "error-message";
  errMessage.classList.add("error-message");

  if (!document.getElementById("error-message")) {
    form.append(errMessage);
  }

  // check form inputs
  if (title.value === "" || amount.value === "") {
    errMessage.textContent = "All fields should be completed!";
  } else if (amount.value < 0) {
    errMessage.textContent = "The amount should be bigger than 0";
  } else if (modalId === "add-wallet") {
    const data = {
      title: title.value,
      amount: amount.value,
      iconSRC: "./icons/blue-wallet.svg",
    };

    const newWidget = Widget(data);

    document.querySelector("#aside-components-wallets").innerHTML += newWidget;

    saveAsideDataInStorage(modalId, data, isEventActive, "wallets");
  } else if (modalId === "add-category") {
    const data = {
      title: title.value,
      amount: amount.value,
      iconSRC: "./icons/home.svg",
    };

    const newWidget = Widget(data);

    document.querySelector("#aside-components-categories").innerHTML +=
      newWidget;

    saveAsideDataInStorage(modalId, data, isEventActive, "categories");
  }
};
