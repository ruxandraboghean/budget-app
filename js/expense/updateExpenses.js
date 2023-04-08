export const updateExpenses = (expenseData) => {
  const categories = JSON.parse(localStorage.getItem("categories"));
  const wallets = JSON.parse(localStorage.getItem("wallets"));
  const totals = JSON.parse(localStorage.getItem("totals"));

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
};
