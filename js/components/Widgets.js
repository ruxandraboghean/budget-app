export const Widgets = (items) => {
  return `
    ${items
      .map((item) => {
        return ` 
        <div class="aside-item">
            <div class="aside-header">
                <span> ${item} </span>
                <span class="icon-add" id="add-${item.toLowerCase()}-button" title="add-${item.toLowerCase()}"></span>
            </div>
        </div>
        `;
      })
      .join("")}
    `;
};
