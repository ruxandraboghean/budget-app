export const saveExpenseInStorage = (expenseData) => {
  const isCreated = !!localStorage.getItem("expenses");

  if (!isCreated) {
    localStorage.setItem("expenses", JSON.stringify([expenseData]));
  } else {
    const expenses = JSON.parse(localStorage.getItem("expenses"));

    expenses.push(expenseData);

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
};
