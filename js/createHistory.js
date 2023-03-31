import { createHistoryComponent } from "../components/createHistoryComponent.js";
import { history } from "../mockData/history.js";

export const createHistory = () => {
  const historyFragment = new DocumentFragment();
  const historyTitle = document.createElement("h2");
  historyTitle.textContent = "History";
  historyTitle.classList.add("title");

  historyFragment.appendChild(historyTitle);

  history.forEach((h) => {
    const historyContainer = createHistoryComponent(h);

    historyFragment.appendChild(historyContainer);
  });

  const main = document.querySelector("main");
  main.classList.add("content");
  main.appendChild(historyFragment);
};
