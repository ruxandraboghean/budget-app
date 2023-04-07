export const renderHistoryItem = (expense) => {
  return `
        <div class="component-history">
          <div class="widget-item">
            <img src="${expense.iconSRC}" alt="ExpenseIcon"/>
            <div class="widget-item-info">
                <h3 class="widget-title">${expense.expenseName}</h3>
                <span class="widget-item-total">${expense.date}</span>
            </div>
          </div>
          <div class="actions">
            <span> ${expense.expenseAmount} </span>
              <span class="icon-pen-square"></span>
              <span class="icon-trash"></span>
          </div>
        </div>
    `;
};
