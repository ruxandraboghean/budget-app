import { History } from "../components/History.js";
import { saveExpenseInStorage } from "./saveExpenseInStorage.js";

export const submitExpense = (
  modalId,
  expenseId,
  formData,
  isEventActive,
  form
) => {
  const { expense, wallet, date, amount } = formData;

  const categories = JSON.parse(localStorage.getItem("categories"));
  const wallets = JSON.parse(localStorage.getItem("wallets"));

  // get total income

  const totals = Object.values(JSON.parse(localStorage.getItem("totals")));

  const filteredArray = totals.filter(
    (element) => element.title === "Total incomes"
  );

  const incomeValue = filteredArray.length > 0 ? filteredArray[0].amount : null;

  // create error message

  const errMessage = document.createElement("p");
  errMessage.id = "error-message";
  errMessage.classList.add("error-message");

  if (!document.getElementById("error-message")) {
    form.append(errMessage);
  }

  const selectedWallet = wallets.filter(
    (walletItem) => walletItem.title === wallet.value
  );

  const selectedWalletValue = Number(selectedWallet[0].amount);

  // check form inputs
  if (
    expense.value === "" ||
    wallet.value === "" ||
    date.value === "" ||
    amount.value === ""
  ) {
    errMessage.textContent = "All fields should be completed!";
    return errMessage;
  } else if (amount.value < 0) {
    errMessage.textContent = "The amount should be bigger than 0";
    return errMessage;
  } else if (amount.value > selectedWalletValue) {
    errMessage.textContent =
      "Check your budget! You may want to change the wallet";
    return errMessage;
  } else {
    const expenseData = {
      id: expenseId,
      expenseName: expense.value,
      expenseWallet: wallet.value,
      expenseCategory: category.value,
      expenseAmount: amount.value,
      expenseDate: date.value,
    };

    const categorySearched = categories.find(
      (categorySearched) =>
        categorySearched.title === expenseData.expenseCategory
    );
    if (categorySearched) {
      expenseData.iconSRC = categorySearched.iconSRC;
    } else {
      expenseData.iconSRC = "";
    }

    const newExpense = History(expenseData);

    document.querySelector(".history-container").innerHTML += newExpense;

    saveExpenseInStorage(modalId, expenseData, expenseData.id, isEventActive);
  }
};
