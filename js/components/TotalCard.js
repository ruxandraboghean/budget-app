export const TotalCard = (item) => {
  return `
    <div class="widget-item-total-card">
        <img src="${item.iconSRC}">
        <div class="widget-item-info" id="${item.title}">
            <h3 class="widget-title">${item.title}</h3>
            <span class="widget-item-total">${item.amount} LEI</span>
        </div>
    </div>
    `;
};
