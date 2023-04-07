import { createWidget } from "../components/createWidget.js";
import { categories } from "../mockData/categories.js";
import { walletInputs } from "../mockData/walletInputs.js";
import { wallets } from "../mockData/wallets.js";
import { createForm } from "./createForm.js";

export const createAside = () => {
  const walletFragment = new DocumentFragment();
  const walletTitle = document.createElement("h2");

  const addButton1 = document.createElement("button");
  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton1.textContent = "+";

  addButton.addEventListener("click", () => {
    createForm(walletInputs, onSubmit());
  });

  walletTitle.textContent = "Wallets";
  walletTitle.classList.add("aside-header");
  walletTitle.appendChild(addButton1);

  walletFragment.appendChild(walletTitle);

  const categoryFragment = new DocumentFragment();
  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = "Categories";
  categoryTitle.classList.add("aside-header");
  categoryTitle.appendChild(addButton);

  categoryFragment.appendChild(categoryTitle);

  wallets.forEach((wallet) => {
    const walletContainer = createWidget(wallet);
    walletFragment.appendChild(walletContainer);
  });

  categories.forEach((category) => {
    const categoryContainer = createWidget(category);

    categoryFragment.appendChild(categoryContainer);
  });

  const aside = document.querySelector("aside");
  aside.classList.add("aside");
  aside.appendChild(walletFragment);
  aside.appendChild(categoryFragment);
};
