export const toggleModal = (id) => {
  const modal = document.querySelector(`#${id}`);

  console.log(id, modal, "modal");

  modal.classList.toggle("visible");
};
