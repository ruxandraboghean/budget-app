import { toggleModal } from "../utils/toggleModal.js";
import { renderModal } from "./renderModal.js";

export const editExpense = (expenseId) => {
  const modalId = "log-expense";
  console.log(modalId, "modalId");
  const expenses = JSON.parse(localStorage.getItem("expenses"));

  expenses.forEach((expense) => {
    if (expense.id === expenseId) {
      renderModal(modalId, expenseId);
      toggleModal(modalId);
      bindData(expense);

      const closeButton = document.getElementById("close-modal");

      closeButton.addEventListener("click", () => {
        toggleModal(modalId);
        document.getElementById(modalId).remove();
      });
    }
  });
  toggleModal(modalId);
};

function bindData(expense) {
  const expenseField = document.getElementById("expense");
  const walletField = document.getElementById("wallet");
  const categoryField = document.getElementById("category");
  const dateField = document.getElementById("date");
  const amountField = document.getElementById("amount");
  expenseField.value = expense.expenseName;
  walletField.value = expense.expenseWallet;
  categoryField.value = expense.expenseCategory;
  dateField.value = expense.expenseDate;
  amountField.value = expense.expenseAmount;
}
