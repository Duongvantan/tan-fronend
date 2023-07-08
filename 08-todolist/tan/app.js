
let elName = document.getElementById('name');
let elLevel = document.getElementById('level');
let elSave = document.getElementById('btn-save');
let elCancel = document.getElementById('cancel');
let elListTodo = document.getElementById('todos');
let elDelete = document.getElementById('btn-delete');
let elSearch = document.getElementById('search');
let elFilterLevel = document.getElementById('filter-level');
let elSortBy = document.getElementById('sort-by');
let elSortDir = document.getElementById('sort-dir');
let elAll = document.getElementById("status-all");
let elCompleted = document.getElementById("status-completed");
let elIncompleted = document.getElementById("status-incompleted");
let idEdit = '';

//=========GET TODOS FROM LOCCALSTOGARE========//
let todos = JSON.parse(localStorage.getItem("TODOS"));

if(!todos) todos = [];
console.log('todos', todos);

createList(todos);

//=================DELETE WITH EDIT With Status===========//
elListTodo.addEventListener('click', (e) => {
  let el = e.target;
  if (el.classList.contains('btn-delete')) {
    todos = todos.filter((todo) => {
      return todo.id !== el.dataset.id;
    });
    localStorage.setItem("TODOS",JSON.stringify(todos));
    createList(todos);
  }

  if (el.classList.contains('btn-edit')) {
    let todo = todos.find((todo) => {
      return todo.id === el.dataset.id;
    });
    idEdit = el.dataset.id;
    elName.value = todo.name;
    elLevel.value = todo.level;
  }

  if (el.classList.contains("todo-name")) {
      let idStatus = e.target.dataset.id;
      let indexStatus = todos.findIndex(todo =>{
        return todo.id === idStatus;
      })
      let status = todos[indexStatus].isCompleted;

      status ? todos[indexStatus].isCompleted=false :
      todos[indexStatus].isCompleted = true;
      localStorage.setItem("TODOS",JSON.stringify(todos));
      createList(todos);

  }
  
});

//================SAVE=================//
elSave.addEventListener('click', () => {
  let nameValue = elName.value.trim();
  let levelValue = parseFloat(elLevel.value);
  if (nameValue) {
    if (idEdit) {
      let indexEdit = todos.findIndex((todo) => {
        return todo.id === idEdit;
      });
      todos[indexEdit].name = nameValue;
      todos[indexEdit].level = levelValue;
      idEdit = '';
    } else {
      let newTodo = {
        id: makeId(5),
        name: nameValue,
        level: levelValue,
        isCompleted: false,
      };
      todos.push(newTodo);
    }
    localStorage.setItem("TODOS",JSON.stringify(todos))
    createList(todos);
    elName.value = '';
  } else {
    alert('Không được bỏ trống');
  }
});

//===============Cancel==============//
elCancel.addEventListener('click', () => {
  elName.value = '';
});

//===============Search==============//
elSearch.addEventListener('input', () => {
  let searchValue = elSearch.value.trim();
  let newTodo = todos.filter((todo) => {
    return todo.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  createList(newTodo, searchValue);
  //================Create HIGH LIGHT==============//
//   let todoName = document.getElementsByClassName('todo-name');
//   console.log('todoName', todoName);
//   if (searchValue) {
//     for (let i = 0; i < todoName.length; i++) {
//       let nameContent = todoName[i].innerText;
      
//       //sleeping edit

//       let index = nameContent.indexOf(searchValue);
//       if (index >= 0) {
//         // '' + 'mark' + 'e' + 'mark' + 'ating' = '<mark>e</mark>ating'
//         nameContent =
//           nameContent.substring(0, index) +
//           '<mark>' +
//           nameContent.substring(index, index + searchValue.length) +
//           '</mark>' +
//           nameContent.substring(index + searchValue.length);
//         todoName[i].innerHTML = nameContent;
//       }
//     }
//   }
});

//================Filter by level==============//
elFilterLevel.addEventListener('change', () => {
  let level = parseInt(elFilterLevel.value);
  console.log('elFilterLevel.value', level);
  console.log(!!level);

  if (level) {
    let newTodo = todos.filter((todo) => {
      return todo.level === level;
    });
    createList(newTodo);
  } else {
    createList(todos);
  }
});

//===============SORT===============//

// if(sortBy)
let sortBy = 'name';
let sortDir = 'asc';

elSortBy.addEventListener('change', () => {
  sortBy = elSortBy.value;
  let newTodo = sortList(todos, sortBy, sortDir);
  createList(newTodo);
});

elSortDir.addEventListener('change', () => {
  sortDir = elSortDir.value;
  let newTodo = sortList(todos, sortBy, sortDir);
  createList(newTodo);
});

function sortList(items, by, dir) {
  const copyItems = [...items]
  copyItems.sort((a, b) => {
    let valueA = a[by];
    let valueB = b[by];

    if (by === 'name') {
      valueA = valueA.toUpperCase();
      valueB = valueB.toUpperCase();
    }

    // if (valueA > valueB) return 1;
    // if (valueA < valueB) return -1;
    if (dir === 'asc') {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA > valueB ? -1 : 1;
    }
  });

  return copyItems;
}

elAll.addEventListener("click",()=>{
  createList(todos);
  console.log('todos', todos);
})

elCompleted.addEventListener("click",()=>{
  let newTodo = todos.filter(todo =>{
    return todo.isCompleted === true;
  })
  createList(newTodo);
})

elIncompleted.addEventListener("click",()=>{
  let newTodo = todos.filter(todo =>{
    return todo.isCompleted === false;
  })
  createList(newTodo);
})


function createList(items, searchValue = '') {
  let html = '';
  items.forEach((item) => {
    let completed = item.isCompleted ? 'completed' : '';
    let todoName = item.name;

    if (searchValue !== '') {
        //eat
        // <mark>e</mark>ating
        const regex = new RegExp(searchValue, 'gim');
        todoName = todoName.replace(regex, (match) => {
            return `<mark>${match}</mark>`;
        })
    }
    let levelColor = '';
    let levelText = '';
    switch (item.level) {
      case 1:
        levelColor = 'secondary';
        levelText = 'Thấp';
        break;
      case 2:
        levelColor = 'info';
        levelText = 'Bình Thường';
        break;
      case 3:
        levelColor = 'danger';
        levelText = 'Cao';
        break;
    }
    html += `
        <li class="item mb-1">
              <div class="d-flex align-items-center justify-content-between">
                <span role="button" class="todo-name ${completed}" data-id=${item.id}>${todoName}</span>
                <span class="badge bg-${levelColor}">${levelText}</span>
                <div class="action">
                  <button class="btn btn-sm btn-primary btn-edit" data-id=${item.id}>
                    Sửa
                  </button>
                  <button class="btn btn-sm btn-danger btn-delete" data-id=${item.id}>
                    Xóa
                  </button>
                </div>
              </div>
            </li>`;
  });
  elListTodo.innerHTML = html;
}

function makeId(length) {
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
