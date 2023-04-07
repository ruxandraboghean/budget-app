import { totals } from "../mockData/totals.js";
import { TotalCard } from "./components/TotalCard.js";
import { saveItemInLocalStorage } from "./saveItemInLocalStorage.js";

export const createTotalCards = () => {
  const totalCards = document.getElementById("totals");

  saveItemInLocalStorage("totals", totals);

  const totalsLS = JSON.parse(localStorage.getItem("totals"));

  console.log(totalsLS, "@totalsLS");
  totalsLS
    .map((total) => {
      totalCards.innerHTML += TotalCard(total);
    })
    .join("");
};
