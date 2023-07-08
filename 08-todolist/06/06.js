
let elTodoList = document.getElementById("todo-list");
let elSave = document.getElementById("save");
let elName = document.getElementById("name");
let elLevel = document.getElementById("level");
let elSearch = document.getElementById("search");
let IdEdit = "";

let todos = JSON.parse(localStorage.getItem("TODOS"));

if (!todos) todos = [];
console.log('todos', todos);


// todos = [...];
//  todos = [
//     {
//         id: makeId(5),
//         name: 'sleeping edit',
//         level: 1,
//     },
//     {
//         id: makeId(5),
//         name: 'eating',
//         level: 3,
//     },
//     {
//         id: makeId(5),
//         name: 'todo new',
//         level: 2,
//     },
//     {
//         id: makeId(5),
//         name: 'todo 2',
//         level: 1,
//     },
//     {
//         id: makeId(5),
//         name: 'todo 3',
//         level: 1,
//     },
//     {
//         id: makeId(5),
//         name: 'todo 4',
//         level: 2,
//     },
//     {
//         id: makeId(5),
//         name: 'todo 5',
//         level: 3,
//     },
//     {
//         id: makeId(5),
//         name: 'todo 6',
//         level: 1,
//     },
//     {
//         id: makeId(5),
//         name: 'coding',
//         level: 3,
//     },
//     {
//         id: makeId(5),
//         name: 'dfdfg',
//         level: 1,
//     },
// ];

setListTodo(todos);

elTodoList.addEventListener("click", (event) => {
    let el = event.target;
    if (el.classList.contains("delete")) {
        todos = todos.filter(todo => {
            return todo.id !== el.dataset.id;
        })
        localStorage.setItem("TODOS", JSON.stringify(todos));
        setListTodo(todos);
    }

    if (el.classList.contains("edit")) {
        let todo = todos.find(todo => {
            return todo.id === el.dataset.id;
        })
        IdEdit = el.dataset.id;
        elName.value = todo.name;
        elLevel.value = todo.level;
    }
})

elSave.addEventListener("click", () => {
    let nameValue = elName.value.trim();
    let levelValue = parseFloat(elLevel.value);
    if (nameValue) {
        if (IdEdit) {
            let indexEdit = todos.findIndex(todo => {
                return todo.id === IdEdit;
            })
            todos[indexEdit].name = nameValue;
            todos[indexEdit].level = levelValue;
            IdEdit = "";
        } else {
            let newTodo = {
                id: makeId(5),
                name: nameValue,
                level: levelValue
            }
            todos.push(newTodo);
        }

        localStorage.setItem("TODOS", JSON.stringify(todos));
        setListTodo(todos);
        elName.value = "";
    } else {
        alert("Không được để trống");
    }
})

elSearch.addEventListener("input", () => {
    let searchValue = elSearch.value;
    let newTodo = todos.filter(todo => {
        return todo.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    setListTodo(newTodo);
})

function setListTodo(items) {
    let html = "";
    items.forEach(item => {
        html +=
            `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.level}</td>
    <td>
        <button type="button" class="delete" data-id=${item.id}>Delete</button>
        <button type="button" class="edit" data-id=${item.id}>Edit</button>
    </td>
</tr>`
    })
    elTodoList.innerHTML = html;
}

function makeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}