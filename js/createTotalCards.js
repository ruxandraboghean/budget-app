import { totals } from "../mockData/totals.js";
import { calculateIncomes } from "./calculateIncomes.js";
import { TotalCard } from "./components/TotalCard.js";
import { saveItemInLocalStorage } from "./saveItemInLocalStorage.js";

export const createTotalCards = () => {
  const totalCards = document.getElementById("totals");

  saveItemInLocalStorage("totals", totals);

  const totalsLS = JSON.parse(localStorage.getItem("totals"));

  totalsLS
    .map((total) => {
      if (total.title === "Total incomes") {
        calculateIncomes(total);
      }

      totalCards.innerHTML += TotalCard(total);
    })
    .join("");

  document
    .getElementById("Total expenses")
    .parentElement.classList.add("expenses-card");
};
