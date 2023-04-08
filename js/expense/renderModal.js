import { categories } from "../../mockData/categories.js";
import { wallets } from "../../mockData/wallets.js";
import { ExpenseModal } from "../components/ExpenseModal.js";
import { submitExpense } from "./submitExpense.js";

export const renderModal = (id) => {
  const modalFragment = new DocumentFragment();

  const modalSection = document.createElement("section");
  modalSection.classList.add("modal");
  modalSection.classList.add("visible");
  modalSection.setAttribute("id", id);

  modalSection.innerHTML += ExpenseModal(id, wallets, categories);

  modalFragment.append(modalSection);
  document.body.appendChild(modalFragment);

  const expenseForm = document.getElementById("form-add-expense");

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = e.target.elements;
    submitExpense(id, data);

    e.target.reset();
  });
};
