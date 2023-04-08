import { createAside } from "./js/createAside.js";
import { createHistory } from "./js/createHistory.js";
import { createTotalCards } from "./js/createTotalCards.js";
import { wallets } from "./mockData/wallets.js";
import { categories } from "./mockData/categories.js";
import { saveItemInLocalStorage } from "./js/utils/saveItemInLocalStorage.js";
import { createExpenseAction } from "./js/expense/createExpenseAction.js";
import { addExpense } from "./js/expense/addExpense.js";

saveItemInLocalStorage("categories", categories);
saveItemInLocalStorage("wallets", wallets);
createAside();
createTotalCards();
createHistory();
createExpenseAction();
addExpense();
