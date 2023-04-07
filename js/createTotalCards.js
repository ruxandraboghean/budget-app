import { totals } from "../mockData/totals.js";
import { TotalCard } from "./components/TotalCard.js";

export const createTotalCards = () => {
  const totalCards = document.getElementById("totals");

  totals
    .map((total) => {
      totalCards.innerHTML += TotalCard(total);
    })
    .join("");
};
