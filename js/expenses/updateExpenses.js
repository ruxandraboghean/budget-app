import { createAside } from "../createAside.js";
import { createTotalCards } from "../createTotalCards.js";

export const updateExpenses = (action, expenseData, previousData) => {
  const categories = JSON.parse(localStorage.getItem("categories"));
  const wallets = JSON.parse(localStorage.getItem("wallets"));
  const totals = JSON.parse(localStorage.getItem("totals"));
  const expenses = JSON.parse(localStorage.getItem("expenses"));

  if (action === "add") {
    categories.map((category) => {
      if (category.title === expenseData.expenseCategory) {
        let amount = Number(category.amount);
        amount += Number(expenseData.expenseAmount);
        category.amount = amount;

        localStorage.setItem("categories", JSON.stringify(categories));
      }
    });

    wallets.map((wallet) => {
      if (wallet.title === expenseData.expenseWallet) {
        let amount = Number(wallet.amount);
        amount -= Number(expenseData.expenseAmount);
        wallet.amount = amount;

        localStorage.setItem("wallets", JSON.stringify(wallets));
      }
    });

    totals.map((total) => {
      if (total.title === "Total expenses") {
        let amount = Number(total.amount);
        amount += Number(expenseData.expenseAmount);
        total.amount = amount;
      }

      localStorage.setItem("totals", JSON.stringify(totals));
    });
  } else if (action === "delete") {
    categories.map((category) => {
      if (category.title === expenseData.expenseCategory) {
        let amount = Number(category.amount);
        amount -= Number(expenseData.expenseAmount);
        category.amount = amount;

        localStorage.setItem("categories", JSON.stringify(categories));
      }
    });

    wallets.map((wallet) => {
      if (wallet.title === expenseData.expenseWallet) {
        let amount = Number(wallet.amount);
        amount += Number(expenseData.expenseAmount);
        wallet.amount = amount;

        localStorage.setItem("wallets", JSON.stringify(wallets));
      }
    });

    totals.map((total) => {
      if (total.title === "Total expenses") {
        let amount = Number(total.amount);
        amount -= Number(expenseData.expenseAmount);
        total.amount = amount;
      }

      localStorage.setItem("totals", JSON.stringify(totals));
    });
  } else if (action === "edit") {
    categories.map((category) => {
      if (
        previousData.expenseCategory === expenseData.expenseCategory &&
        category.title === expenseData.expenseCategory
      ) {
        let amount = Number(category.amount);
        amount -= Number(previousData.expenseAmount);
        amount += Number(expenseData.expenseAmount);
        category.amount = amount;
      } else if (
        previousData.expenseCategory !== expenseData.expenseCategory &&
        category.title === expenseData.expenseCategory
      ) {
        let amount = Number(category.amount);
        amount += Number(expenseData.expenseAmount);
        category.amount = amount;
      } else if (category.title === previousData.expenseCategory) {
        category.amount -= previousData.expenseAmount;
      }
      localStorage.setItem("categories", JSON.stringify(categories));
    });

    wallets.map((wallet) => {
      if (wallet.title === expenseData.expenseWallet) {
        let amount = Number(wallet.amount);
        amount += Number(previousData.expenseAmount);
        amount -= Number(expenseData.expenseAmount);
        wallet.amount = amount;

        localStorage.setItem("wallets", JSON.stringify(wallets));
      }
    });

    totals.map((total) => {
      if (total.title === "Total expenses") {
        let amount = Number(total.amount);
        amount -= Number(previousData.expenseAmount);
        amount += Number(expenseData.expenseAmount);
        total.amount = amount;
      }

      localStorage.setItem("totals", JSON.stringify(totals));
    });

    expenses.map((expense) => {
      if (
        expense.id === expenseData.id &&
        previousData.expenseCategory !== expenseData.expenseCategory
      ) {
        const newCategory = categories.filter(
          (category) => category.title === expenseData.expenseCategory
        );

        const newCategoryIconSRC = newCategory[0].iconSRC;
        expense.iconSRC = newCategoryIconSRC;
        console.log(expense);
      }

      localStorage.setItem("expenses", JSON.stringify(expenses));
    });
  }

  document.querySelector(".aside-items").remove();
  document
    .querySelectorAll(".widget-item-total-card")
    .forEach((el) => el.remove());
  createAside();
  createTotalCards();
};
