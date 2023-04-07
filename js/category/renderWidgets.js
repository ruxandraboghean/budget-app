export const renderWidgets = (items) => {
  return `
      ${items
        .map((item) => {
          return ` 
          <div class="aside-item">
              <div class="aside-header">
                <span> ${item} </span>
                <span class="icon-add"></span>
              </div>
          </div>
        `;
        })
        .join("")}
  `;
};
