const list = document.querySelector(".lst");
const btn = document.querySelector(".btn");
const input = document.querySelector(".ipt");
const deleteItem = (e) => {
  list.removeChild(e.target);
};
const addItem = () => {
  const value = input.value;
  const newLi = document.createElement("li");
  newLi.textContent = value;
  newLi.addEventListener("click", deleteItem);
  input.textContent = "";
  list.appendChild(newLi);
};
btn.addEventListener("click", () => addItem());
