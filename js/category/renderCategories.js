import { asideItems } from "../../mockData/asideItems";

export const renderCategories = () => {
  return `
    <div class="aside-item">
      ${asideItems.map((item) => {
        ` <h2 class="aside-header">
           ${item}
          <button> + </button>
        </h2>`;
      })}
    </div>
  `;
};
