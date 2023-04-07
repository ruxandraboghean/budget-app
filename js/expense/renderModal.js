import { categories } from "../../mockData/categories.js";
import { handleSubmit } from "./handleSubmit.js";

export const renderModal = (id) => {
  const modalFragment = new DocumentFragment();

  const modalSection = document.createElement("section");
  modalSection.classList.add("modal");
  modalSection.classList.add("visible");
  modalSection.setAttribute("id", "log-expense");

  modalSection.innerHTML += `
    <form class="modal-content" id="form-add-expense">
    <span class="icon-circle-xmark" id="close-modal"></span>

    <div class="modal-group">
            <label for="expense">Expense:</label>
            <input type="text" id="expense" name="expense"><br><br>
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
            </select><br><br>
        </div>
        <div class="modal-group">
            <label for="amount">Amount:</label>
            <input type="number" id="amount" name="amount"><br><br>
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
    handleSubmit(data);

    e.target.reset();
  });
};
