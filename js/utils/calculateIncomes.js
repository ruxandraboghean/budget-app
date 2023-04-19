export const calculateIncomes = (income) => {
  const wallets = JSON.parse(localStorage.getItem("wallets"));
  let incomeAmount = 0;

  if (Number(income.amount) === 0) {
    incomeAmount += Number(income.amount);
  } 
  wallets.forEach((wallet) => {
    incomeAmount += wallet.amount;
  });
  income.amount = incomeAmount;

  return income;
};
