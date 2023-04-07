export const updateCategoryExpense = (expenseData) => {
  const categories = JSON.parse(localStorage.getItem("categories"));
  const wallets = JSON.parse(localStorage.getItem("wallets"));

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
};
