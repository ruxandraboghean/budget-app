export const renderCategory = (category) => {
  return `
          <div class="component-history">
            <div class="widget-item">
              <img src="${category.iconSRC}" alt="ExpenseIcon"/>
              <div class="widget-item-info">
                  <h3 class="widget-title">${category.title}</h3>
                  <span class="widget-item-total">${category.amount}</span>
              </div>
            </div>
          </div>
      `;
};
