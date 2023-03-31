import { createBudgetComponent } from "../components/createBudgetComponent.js";
import { totals } from "../mockData/totals.js";

export const createTotalCard = () => {
  const totalsFragment = new DocumentFragment();
  const totalCard = document.createElement("div");
  totalCard.classList.add("total-card");

  totals.forEach((h) => {
    const historyContainer = createBudgetComponent(h);
    totalCard.appendChild(historyContainer);
    totalsFragment.appendChild(totalCard);
  });

  const main = document.querySelector("main");
  main.classList.add("content");
  main.appendChild(totalsFragment);
};
