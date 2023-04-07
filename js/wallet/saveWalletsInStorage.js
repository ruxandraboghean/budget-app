import { wallets } from "../../mockData/wallets.js";

export const saveWalletsInStorage = () => {
  const isCreated = !!localStorage.getItem("wallets");

  if (!isCreated) {
    localStorage.setItem("wallets", JSON.stringify(wallets));
  }
};
