import { categories } from "../../mockData/categories.js";
import { History } from "../components/History.js";
import { toggleModal } from "../utils/toggleModal.js";
import { saveExpenseInStorage } from "./saveExpenseInStorage.js";

export const submitExpense = (
  modalId,
  expenseId,
  formData,
  isEventActive,
  form
) => {
  const { expense, wallet, date, amount } = formData;

  // get total income

  const totals = Object.values(JSON.parse(localStorage.getItem("totals")));

  const filteredArray = totals.filter(
    (element) => element.title === "Total incomes"
  );

  const incomeValue = filteredArray.length > 0 ? filteredArray[0].amount : null;
  console.log(incomeValue, "income");

  // create error message

  const errMessage = document.createElement("p");
  errMessage.id = "error-message";
  errMessage.classList.add("error-message");

  if (!document.getElementById("error-message")) {
    form.append(errMessage);
  }

  // check form inputs
  if (
    expense.value === "" ||
    wallet.value === "" ||
    date.value === "" ||
    amount.value === ""
  ) {
    errMessage.textContent = "All fields should be completed!";
    console.log(errMessage);
  } else if (amount.value < 0) {
    errMessage.textContent = "The amount should be bigger than 0";
    console.log(errMessage);
  } else if (amount.value > incomeValue) {
    errMessage.textContent = "The amount should be in your budget";
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

    // toggleModal(modalId);
  }
};
