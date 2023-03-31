import { createBudgetComponent } from "../components/createBudgetComponent.js";
import { categories } from "../mockData/categories.js";
import { wallets } from "../mockData/wallets.js";

export const createAside = () => {
  const walletFragment = new DocumentFragment();
  const walletTitle = document.createElement("h2");
  walletTitle.textContent = "Wallets";
  walletTitle.classList.add("header");

  walletFragment.appendChild(walletTitle);

  const categoryFragment = new DocumentFragment();
  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = "Categories";
  categoryTitle.classList.add("header");

  categoryFragment.appendChild(categoryTitle);

  wallets.forEach((wallet) => {
    const walletContainer = createBudgetComponent(wallet);

    walletFragment.appendChild(walletContainer);
  });

  categories.forEach((category) => {
    const categoryContainer = createBudgetComponent(category);

    categoryFragment.appendChild(categoryContainer);
  });

  const aside = document.querySelector("aside");
  aside.classList.add("aside");
  aside.appendChild(walletFragment);
  aside.appendChild(categoryFragment);
};
