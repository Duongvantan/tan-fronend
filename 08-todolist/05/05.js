let elName = document.getElementById("name");
let elLevel = document.getElementById("level");
let elSave = document.getElementById("save");
let elList = document.getElementById("list");
let indexID = "";
let elSearch = document.getElementById("search");
let todos = JSON.parse(localStorage.getItem("TODOS"));

if (!todos) todos = [];

setListTodos(todos);

elSave.addEventListener("click", () => {
    if (elName.value) {
        let nameValue = elName.value.trim();
        let levelValue = elLevel.value;
        if (indexID) {
            let index = todos.findIndex(todo => {
                return todo.id === indexID;
            })
            todos[index].name = nameValue;
            todos[index].level = levelValue;
        } else {
            let newTodo = {
                id: makeId(5),
                name: nameValue,
                level: levelValue
            }
            todos.push(newTodo);
        }
        indexID = "";
        setListTodos(todos);
        localStorage.setItem("TODOS", JSON.stringify(todos));
        elName.value = "";
    } else {
        alert("THÔNG TIN NAME BỊ RỖNG");
    }
});

elList.addEventListener("click", (event) => {
    let el = event.target;

    //Tạo sự kiện cho nút delete
    if (el.classList.contains("btn-delete")) {
        todos = todos.filter(todo => {
            return todo.id !== el.dataset.id;
        })
        setListTodos(todos);
        localStorage.setItem("TODOS", JSON.stringify(todos));
    }

    //Tạo sự kiện cho nút edit
    if (el.classList.contains("btn-edit")) {
        let todo = todos.find(todo => {
            return todo.id === el.dataset.id;
        })
        indexID = el.dataset.id;
        elName.value = todo.name;
        elLevel.value = todo.level;
    }
})

elSearch.addEventListener("input", () => {
    let searchValue = elSearch.value;
    let newTodo = todos.filter(todo => {
        return todo.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    setListTodos(newTodo)
})

function setListTodos(items) {
    let html = "";
    items.forEach(item => {
        html += `<li>
        <strong>id: </strong>-${item.id}
        <strong>name: </strong>-${item.name}
        <strong>level: </strong>-${item.level}
        </li>
        <button class="btn-delete" data-id=${item.id}>DELETE</button>
        <button class="btn-edit" data-id=${item.id}>EDIT</button>
    `
    });

    elList.innerHTML = html;
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

