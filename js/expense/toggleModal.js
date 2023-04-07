export const toggleModal = (id) => {
  const modal = document.querySelector(`#${id}`);
  modal.classList.toggle("visible");
};
