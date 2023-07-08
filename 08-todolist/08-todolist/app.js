// 1 todo: id, name, level (1,2,3 -> small, medium, high)
// id -> chuỗi ngẫu nhiên có 12 ký tự A-Za-z0-9 -> js random string
// crawling -> cào dữ liệu
const todos = [
  {
    id: makeId(),
    name: 'coding',
    level: 3,
  },
  {
    id: makeId(),
    name: 'sleeping',
    level: 1,
  },
  {
    id: makeId(),
    name: 'eating',
    level: 2,
  },
];

const elTodos = document.getElementById('todo-list');
const btnSave = document.getElementById('btn-save');
const inputName = document.getElementById('name');
const inputLevel = document.getElementById('level');

renderTodos(todos);

btnSave.addEventListener('click', function () {
  const nameValue = inputName.value.trim();
  
  if (nameValue) {
    const levelValue = parseInt(inputLevel.value);
    const newTodo = {
      id: makeId(),
      name: nameValue,
      level: levelValue,
    };
    todos.push(newTodo);
    renderTodos(todos);
    inputName.value = '';
  } else {
    alert('vui long nhap ten cong viec');
  }
});

function makeId(length = 12) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters[Math.floor(Math.random() * charactersLength)];
    counter += 1;
  }
  return result;
}

function renderTodos(items) {
  let html = '';
  items.forEach((item) => {
    html += `
    <li>
      <strong>Id: </strong>${item.id} -
      <strong>Name: </strong>${item.name} -
      <strong>Level: </strong>${item.level}
    </li>`;
  });
  elTodos.innerHTML = html;
}
