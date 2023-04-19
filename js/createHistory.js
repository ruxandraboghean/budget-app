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

  if (historyContent.childNodes.length === 0) {
    historyContent.classList.add("empty-history");
    const emptyData = document.createElement("img");
    const emptyDataMessage = document.createElement("p");
    emptyDataMessage.textContent = "Nothing in history...";
    emptyData.setAttribute("src", "../icons/empty-folder.png");
    emptyData.classList.add("empty-folder");
    historyContent.append(emptyData, emptyDataMessage);
  } 

  historyFragment.append(historyContent);
  main.appendChild(historyFragment);
};
