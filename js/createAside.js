import { renderWidgets } from "./category/renderWidgets.js";
import { renderWidget } from "./category/renderWidget.js";
import { saveCategoriesInStorage } from "./category/saveCategoriesInStorage.js";
import { saveWalletsInStorage } from "./wallet/saveWalletsInStorage.js";

const asideItems = ["Wallets", "Categories"];

export const createAside = () => {
  const asideFragment = new DocumentFragment();

  const aside = document.querySelector("aside");

  const asideContent = document.createElement("div");
  asideContent.classList.add("aside-items");
  asideContent.innerHTML += renderWidgets(asideItems);
  asideFragment.append(asideContent);

  const items = asideContent.getElementsByClassName("aside-item");
  const walletAside = items[0];
  const categoryAside = items[1];

  const walletsWrapper = document.createElement("div");
  walletsWrapper.classList.add("aside-components");

  const categoriesWrapper = document.createElement("div");
  categoriesWrapper.classList.add("aside-components");

  saveCategoriesInStorage();
  saveWalletsInStorage();

  const categories = JSON.parse(localStorage.getItem("categories"));
  const wallets = JSON.parse(localStorage.getItem("wallets"));

  walletsWrapper.innerHTML += wallets
    .map((wallet) => renderWidget(wallet))
    .join("");

  categoriesWrapper.innerHTML += categories
    .map((category) => renderWidget(category))
    .join("");

  walletAside.append(walletsWrapper);
  categoryAside.append(categoriesWrapper);

  console.log(walletAside);

  aside.appendChild(asideFragment);
};
