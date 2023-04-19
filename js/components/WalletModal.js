export const WalletModal = (id) => {
  return `
      <form class="modal-content" id="form-add-wallet">
      <span class="icon-circle-xmark" id="close-modal"></span>
  
      <div class="modal-group">
              <label for="wallet">Wallet Name:</label>
              <input type="text" id="wallet" name="wallet">
          </div>
  
          <div class="modal-group">
              <label for="amount">Amount:</label>
              <input type="number" id="amount" name="amount">
          </div>
          
          <input type="submit" value="Add Wallet" class="log-wallet-button" id="${id}">
          </form>
    `;
};
