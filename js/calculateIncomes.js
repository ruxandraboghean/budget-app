export const calculateIncomes = (income) => {
  const wallets = JSON.parse(localStorage.getItem("wallets"));
  let incomeAmount = Number(income.amount);

  wallets.forEach((wallet) => {
    incomeAmount += wallet.amount;
  });
  income.amount = incomeAmount;
  return income;
};
