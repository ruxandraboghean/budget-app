export const History = (expense) => {
  return `
    <div class="component-history" id="${expense.id}">
        <div class="widget-item">
            <img src="${expense.iconSRC}" alt="ExpenseIcon"/>
            <div class="widget-item-info">
                <h3 class="widget-title">${expense.expenseName}</h3>
                <span class="widget-item-total">${expense.expenseDate}</span>
            </div>
        </div>
        <div class="actions">
            <span> ${expense.expenseAmount} LEI </span>
            <span class="icon-pen-square"  id="edit-${expense.id}"></span>
            <span class="icon-trash" id="delete-${expense.id}"></span>
        </div>
    </div>  
  `;
};
