export const saveItemInLocalStorage = (itemName, items) => {
  const isCreated = !!localStorage.getItem(`${itemName}`);

  if (!isCreated) {
    localStorage.setItem(`${itemName}`, JSON.stringify(items));
  }
};
