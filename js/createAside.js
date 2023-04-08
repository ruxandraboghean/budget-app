import { Widgets } from "./components/Widgets.js";
import { Widget } from "./components/Widget.js";

const asideItems = ["Wallets", "Categories"];

export const createAside = () => {
  const asideFragment = new DocumentFragment();

  const aside = document.querySelector("aside");

  const asideContent = document.createElement("div");

  asideContent.classList.add("aside-items");
  asideContent.innerHTML += Widgets(asideItems);
  asideFragment.append(asideContent);

  const items = asideContent.getElementsByClassName("aside-item");
  const walletAside = items[0];
  const categoryAside = items[1];

  const walletsWrapper = document.createElement("div");
  walletsWrapper.classList.add("aside-components");

  const categoriesWrapper = document.createElement("div");
  categoriesWrapper.classList.add("aside-components");

  const categoriesLS = JSON.parse(localStorage.getItem("categories"));
  const walletsLS = JSON.parse(localStorage.getItem("wallets"));

  walletsWrapper.innerHTML += walletsLS
    .map((wallet) => Widget(wallet))
    .join("");

  categoriesWrapper.innerHTML += categoriesLS
    .map((category) => Widget(category))
    .join("");

  walletAside.append(walletsWrapper);
  categoryAside.append(categoriesWrapper);

  aside.appendChild(asideFragment);
};
