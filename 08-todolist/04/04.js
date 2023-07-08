let elName = document.getElementById("name");
let elLevel = document.getElementById("level");
let elSave = document.getElementById("save");
let elList = document.getElementById("list");
let elDelete = document.getElementsByClassName("delete");
let elSearch = document.getElementById("search-name");
let idEdit = "";
let todos = JSON.parse(localStorage.getItem("TODOS"));

if (!todos) todos = [];

console.log('todos', todos);

createList(todos);
//Tạo lại sự kiện delete
//event là danh sách sự kiện của click chuột
elList.addEventListener("click", (event) => {
    const el = event.target;
    //Tạo sự kiện cho nút edit
    if (el.classList.contains("delete")) {
        todos = todos.filter(todo => {
            return todo.id !== el.dataset.id;
        })

        createList(todos);
        localStorage.setItem("TODOS", JSON.stringify(todos));
    }

    //Tạo sự kiện cho nút edit
    if (el.classList.contains("edit")) {
        let item = todos.find(item => item.id === el.dataset.id);
        idEdit = el.dataset.id;
        elName.value = item.name;
        elLevel.value = item.level;
    }

})

elSave.addEventListener("click", () => {

    if (elName.value) {
        let nameValue = elName.value.trim();
        let levelValue = elLevel.value;
        if (idEdit) {
            //edit
            const idx = todos.findIndex((item) => item.id === idEdit);
            todos[idx].name = nameValue;
            todos[idx].level = levelValue;
        } else {
            //add
            let newTodo = {
                id: makeId(5),
                name: nameValue,
                level: levelValue
            }
            todos.push(newTodo);
        }
        idEdit = "";
        localStorage.setItem("TODOS", JSON.stringify(todos));
        createList(todos);
    } else {
        alert("NAME EMPTY (REQUIRED)");
    }
    elName.value = "";
})

elSearch.addEventListener("input", () => {
    let searchValue = elSearch.value;

    let newTodo = todos.filter(todo => {
        let valueName = todo.name.toLowerCase();
        let valueSearch = searchValue.toLowerCase();
        return valueName.includes(valueSearch);
    })
    console.log('todos', todos);
    createList(newTodo);
})

function createList(items) {
    let html = "";
    items.forEach(item => {
        html +=
            `<li>
        <strong>ID:</strong>-${item.id}
        <strong>Name:</strong>-${item.name}
        <strong>level: </strong>${item.level}
        </li>
        <button class="delete" data-id="${item.id}">DELETE</button>
        <button class="edit" data-id="${item.id}">Edit</button>
            `
    });
    elList.innerHTML = html;

    //    for(let i = 0; i < elDelete.length;i++){
    //     elDelete[i].addEventListener("click", () => {
    //        todos = todos.filter(todo =>{
    //             return todo.id !== elDelete[i].dataset.id;
    //         })

    //         createList(todos);
    //         localStorage.setItem("TODOS", JSON.stringify(todos));
    //     })
    //    }

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