export const AsideModal = (formId, name) => {
  return `
      <form class="modal-content" id="${formId}">
      <span class="icon-circle-xmark" id="close-modal"></span>
  
      <div class="modal-group" id="title">
              <label for="${name}">${
    name.substring(1, 0).toUpperCase() + name.slice(1)
  } Name:</label>
              <input type="text" id="${name}" name="${name}">
          </div>
  
          <div class="modal-group" id="amount-group">
              <label for="amount">Amount:</label>
              <input type="number" id="amount" name="amount">
          </div>
          
          <input type="submit" value="Add ${name}" class="log-${name}-button">
          </form>
    `;
};
