export const renderWidget = (item) => {
  return `
      <div class="aside-components-item">
        <img src="${item.iconSRC}" alt="ExpenseIcon"/>
        <div class="widget-item-info">
            <h3 class="widget-title">${item.title}</h3>
            <span class="widget-item-total">${item.amount} LEI</span>
        </div>
    </div>
  `;
};
