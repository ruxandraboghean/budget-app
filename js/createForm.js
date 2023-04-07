// export const createForm = (data, onSubmit) => {
//   const formFragment = new DocumentFragment();

//   const form = document.createElement("form");
//   data.forEach((input) => {
//     const { id, name, label, placeholder } = input;

//     const inputElement = document.createElement("input");
//     inputElement.id = id;
//     inputElement.name = name;
//     inputElement.placeholder = placeholder;

//     const labelElement = document.createElement("label");
//     labelElement.textContent = label;
//     labelElement.for = id;

//     form.append(inputElement, labelElement);
//   });

//   const submitBtn = document.createElement("button");
//   submitBtn.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("submited");
//   });
//   submitBtn.textContent = "Add Wallet";
//   form.append(submitBtn);
//   console.log(form);

//   const formContainer = document.createElement("dialog");
//   formContainer.classList.add("form-modal");
//   formContainer.append(form);
//   document.body.append(formContainer);
// };
