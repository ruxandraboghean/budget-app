export const createHistoryComponent = (component) => {
  const { title, amount, date, iconSRC } = component;

  const componentContainer = document.createElement("div");
  const componentInfoWrapper = document.createElement("div");
  const componentInfoContainer = document.createElement("div");
  const componentActionsWrapper = document.createElement("div");

  const componentTitle = document.createElement("h3");
  const componentDate = document.createElement("span");
  const componentDescription = document.createElement("span");
  const componentIcon = document.createElement("img");
  const editBtn = document.createElement("img");
  const removeBtn = document.createElement("img");

  componentTitle.textContent = `${title}`;
  componentDescription.textContent = `${amount} LEI`;
  componentDate.textContent = `${date}`;
  componentIcon.setAttribute("src", `${iconSRC}`);
  editBtn.setAttribute("src", "./icons/edit.png");
  removeBtn.setAttribute("src", "./icons/trash.png");

  componentContainer.classList.add("component-history");
  componentInfoWrapper.classList.add("component");
  componentInfoContainer.classList.add("component-info");
  componentActionsWrapper.classList.add("actions");
  componentTitle.classList.add("title");
  componentDate.classList.add("total-item");
  editBtn.classList.add("edit-btn");
  removeBtn.classList.add("remove-btn");

  componentInfoContainer.appendChild(componentTitle);
  componentInfoContainer.appendChild(componentDate);

  componentInfoWrapper.appendChild(componentIcon);
  componentInfoWrapper.appendChild(componentInfoContainer);
  componentContainer.appendChild(componentInfoWrapper);

  componentActionsWrapper.appendChild(componentDescription);
  componentActionsWrapper.appendChild(editBtn);
  componentActionsWrapper.appendChild(removeBtn);
  componentContainer.appendChild(componentActionsWrapper);

  return componentContainer;
};
