let todos = [
  {
    id: 'TKN6hNGUKLku',
    name: 'sleeping edit',
    level: 1,
  },
  {
    id: '0pFCb91IAXG3',
    name: 'eating',
    level: 3,
  },
  {
    id: 'B40IcbJE6hvt',
    name: 'todo new',
    level: 2,
  },
  {
    id: '2x67mzguYqBb',
    name: 'todo 2',
    level: 1,
  },
  {
    id: '3UkoQlHEqC7n',
    name: 'todo 3',
    level: 1,
  },
  {
    id: 'VWWvjAThAjE6',
    name: 'todo 4',
    level: 2,
  },
  {
    id: 'HBuU2Kf37zlo',
    name: 'todo 5',
    level: 3,
  },
  {
    id: 'vlFusc6SqTVv',
    name: 'todo 6',
    level: 1,
  },
  {
    id: 'QQJXS7MLlY2S',
    name: 'coding',
    level: 3,
  },
  {
    id: 'l2KRHVXmFva2',
    name: 'dfdfg',
    level: 1,
  },
];

let idEdit = '';
const elTodos = document.getElementById('todos');
const inputName = document.getElementById('name');
const inputLevel = document.getElementById('level');
const btnSave = document.getElementById('btn-save');
const slbSortBy = document.getElementById('sort-by');
const slbSortDir = document.getElementById('sort-dir');
const slbFilterLevel = document.getElementById('filter-level');
let sortBy = 'name';
let sortDir = 'asc'; // asc -> tăng dần, desc -> giảm dần

slbFilterLevel.addEventListener('change', () => {
  const level = parseInt(slbFilterLevel.value);
  if (isNaN(level)) {
    renderTodos(todos);
  } else {
    const newTodos = todos.filter((item) => item.level === level);
    renderTodos(newTodos);
  }
  
});

slbSortBy.addEventListener('change', () => {
  sortBy = slbSortBy.value;
  const sortedTodos = sortItems(todos, sortBy, sortDir);
  renderTodos(sortedTodos);
});

slbSortDir.addEventListener('change', () => {
  sortDir = slbSortDir.value;
  const sortedTodos = sortItems(todos, sortBy, sortDir);
  renderTodos(sortedTodos);
});

btnSave.addEventListener('click', function () {
  const nameValue = inputName.value.trim();
  const levelValue = parseInt(inputLevel.value);
  if (idEdit === '') {
    const newTodo = {
      id: makeId(),
      name: nameValue,
      level: levelValue,
    };
    todos.push(newTodo);
  } else {
    const idx = todos.findIndex((item) => item.id === idEdit);
    todos[idx].name = nameValue;
    todos[idx].level = levelValue;
    idEdit = '';
  }
  inputName.value = '';
  renderTodos(todos);
});

elTodos.addEventListener('click', (event) => {
  const el = event.target;
  if (el.classList.contains('btn-delete')) {
    const id = el.dataset.id;
  }

  if (el.classList.contains('btn-edit')) {
    const id = el.dataset.id;
    const foundTodo = todos.find((item) => item.id === id);
    inputName.value = foundTodo.name;
    inputLevel.value = foundTodo.level;
    idEdit = id;
  }
});

renderTodos(todos);

function sortItems(items, sortBy, sortDir) {
  if (sortDir === 'asc') {
    // tang dan
    if (sortBy === 'name') {
      // sap xep theo name
    }

    if (sortBy === 'level') {
      // sap xep theo level
    }
  } else {
    // giam dan
    if (sortBy === 'name') {
      // sap xep theo name
    }

    if (sortBy === 'level') {
      // sap xep theo level
    }
  }

  return items;
}

function renderTodos(items) {
  let html = '';
  items.forEach((item) => {
    let levelColor = '';
    let levelText = '';

    switch (item.level) {
      case 1:
        levelColor = 'secondary';
        levelText = 'Thấp';
        break;
      case 2:
        levelColor = 'info';
        levelText = 'Bình thường';
        break;
      case 3:
        levelColor = 'danger';
        levelText = 'Cao';
        break;
    }

    html += `
    <li class="item mb-1">
      <div class="d-flex align-items-center justify-content-between">
        <span role="button">${item.name}</span>
        <span class="badge bg-${levelColor}">${levelText}</span>
        <div class="action">
          <button class="btn btn-sm btn-primary btn-edit" data-id="${item.id}">
            Sửa
          </button>
          <button class="btn btn-sm btn-danger btn-delete" data-id="${item.id}">
            Delete
          </button>
        </div>
      </div>
    </li>`;
  });
  elTodos.innerHTML = html;
}

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
