import { ExpenseModal } from "../components/ExpenseModal.js";
import { generateUniqueID } from "../utils/generateUniqueID.js";
import { submitExpense } from "./submitExpense.js";

export const renderModal = (modalId, expenseId, isEventActive) => {
  const modalFragment = new DocumentFragment();

  const categories = JSON.parse(localStorage.getItem("categories"));
  const wallets = JSON.parse(localStorage.getItem("wallets"));

  const modalSection = document.createElement("section");
  modalSection.classList.add("modal");
  modalSection.classList.add("visible");
  modalSection.setAttribute("id", modalId);

  modalSection.innerHTML += ExpenseModal(expenseId, wallets, categories);

  modalFragment.append(modalSection);
  document.body.appendChild(modalFragment);

  const expenseForm = document.getElementById("form-add-expense");

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = e.target.elements;
    submitExpense(modalId, expenseId, data, isEventActive, expenseForm);

    e.target.reset();
    expenseId = generateUniqueID();
  });
};
