import { History } from "./components/History.js";

export const createHistory = () => {
  const historyFragment = new DocumentFragment();
  const main = document.querySelector("main");

  const historyContent = document.createElement("div");
  historyContent.classList.add("history-container");

  const isCreated = !!JSON.parse(localStorage.getItem("expenses"));

  if (isCreated) {
    const historyData = JSON.parse(localStorage.getItem("expenses"));

    Object.values(historyData).map((history) => {
      historyContent.innerHTML += History(history);
    });
  }

  historyFragment.append(historyContent);
  main.appendChild(historyFragment);
};
