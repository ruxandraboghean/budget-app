export const ExpenseModal = (id, wallets, categories) => {
  return `
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
};
