const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTamplate = (todo) => {
  const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
    `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTamplate(todo);
    addForm.reset();
  }
});

// delete todos

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// const filterTodos = (text) => {
//   Array.from(list.children)
//     .filter((todo) => !todo.textContent.includes(text))
//     .forEach((todo) => todo.classList.add("filtered"));
// };

// keyup event

search.addEventListener("keyup", () => {
  const text = search.value.trim();
  filterTodos(text);
});
