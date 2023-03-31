export const createBudgetComponent = (component) => {
  const { title, amount, iconSRC } = component;

  const componentContainer = document.createElement("div");
  const componentInfoContainer = document.createElement("div");
  const componentTitle = document.createElement("h3");
  const componentDescription = document.createElement("span");
  const componentIcon = document.createElement("img");

  componentTitle.textContent = `${title}`;
  componentDescription.textContent = `${amount} LEI`;
  componentIcon.setAttribute("src", `${iconSRC}`);

  componentContainer.classList.add("component");
  componentInfoContainer.classList.add("component-info");
  componentTitle.classList.add("title");
  componentDescription.classList.add("total-item");

  componentContainer.appendChild(componentIcon);
  componentInfoContainer.appendChild(componentTitle);
  componentInfoContainer.appendChild(componentDescription);
  componentContainer.appendChild(componentInfoContainer);

  return componentContainer;
};
