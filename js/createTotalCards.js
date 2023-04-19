import { totals } from "../mockData/totals.js";
import { calculateIncomes } from "./utils/calculateIncomes.js";
import { TotalCard } from "./components/TotalCard.js";
import { saveItemInLocalStorage } from "./utils/saveItemInLocalStorage.js";

export const createTotalCards = () => {
  const totalCards = document.getElementById("totals");

  saveItemInLocalStorage("totals", totals);

  const totalsLS = JSON.parse(localStorage.getItem("totals"));

   totalsLS
     .map((total) => {
       if (total.title === "Total incomes") {
         const updatedTotalIncome = calculateIncomes(total);
         total.amount = updatedTotalIncome.amount;
         console.log(updatedTotalIncome, "@total");
       }

       totalCards.innerHTML += TotalCard(total);
     })
     .join("");

   localStorage.setItem("totals", JSON.stringify(totalsLS));

  document
    .getElementById("Total expenses")
    .parentElement.classList.add("expenses-card");
};
