import { categories } from "../../mockData/categories.js";
import { wallets } from "../../mockData/wallets.js";
import { handleSubmit } from "./handleSubmit.js";

export const renderModal = (id) => {
  const modalFragment = new DocumentFragment();

  const modalSection = document.createElement("section");
  modalSection.classList.add("modal");
  modalSection.classList.add("visible");
  modalSection.setAttribute("id", id);

  modalSection.innerHTML += `
    <form class="modal-content" id="form-add-expense">
    <span class="icon-circle-xmark" id="close-modal"></span>

    <div class="modal-group">
            <label for="expense">Expense:</label>
            <input type="text" id="expense" name="expense">
        </div>
        <div class="modal-group">
            <label for="wallet">Wallet:</label>
            <select id="wallet" name="wallet">
              ${wallets
                .map(
                  (wallet) =>
                    `<option value="${wallet.title}">${wallet.title}</option>`
                )
                .join("")}
            </select>
        </div>
        <div class="modal-group">
            <label for="category">Category:</label>
            <select id="category" name="category">
              ${categories
                .map(
                  (category) =>
                    `<option value="${category.title}">${category.title}</option>`
                )
                .join("")}
            </select>
            <label for="date">Date:</label>
            <input type="date" id="date" name="date">
        </div>

        <div class="modal-group">
            <label for="amount">Amount:</label>
            <input type="number" id="amount" name="amount">
        </div>
        
        <input type="submit" value="Log Expense" class="log-expense-button" id="${id}">
        </form>
  `;

  modalFragment.append(modalSection);
  document.body.appendChild(modalFragment);

  const expenseForm = document.getElementById("form-add-expense");

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = e.target.elements;
    handleSubmit(id, data);

    e.target.reset();
  });
};
