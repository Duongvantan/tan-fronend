let elTodos = document.getElementById("todo-list");
let elSave  = document.getElementById("btn");
let elLevel = document.getElementById("level");
let elName  = document.getElementById("name");
let elSearch = document.getElementById("search");
let todos = JSON.parse(localStorage.getItem('TODOS'));

if(!todos) todos = [];

setWord(todos);

elSave.addEventListener("click", () => {
    if(elName.value){
    let nameValue = elName.value.trim();
    let levelValue = elLevel.value;
    levelValue = parseFloat(levelValue);
    let newTodo = {
        id: makeId(5),
        name: nameValue,
        level: levelValue
    };
    todos.push(newTodo);
    setWord(todos);
    elName.value = "";
    console.log('todos', todos);
    
    localStorage.setItem("TODOS", JSON.stringify(todos))
    } else {
        alert("Không được bỏ trống name");
    }
});

elSearch.addEventListener("input",() => {
    let searchValue = elSearch.value.trim();
    const newTodos = todos.filter(item => {
        
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    setWord(newTodos);
})

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


function setWord(items) {
    let html="";
    items.forEach(item => {
    html += `<li>
    <strong>Id: </strong> ${item.id}- 
    <strong>Name:</strong> ${item.name}- <strong>Level: </strong> ${item.level}
    <button class="btn-delete" data-id = "${item.id}">Delete</button>
    </li>`
});
    elTodos.innerHTML = html;

    const elDelete = document.getElementsByClassName("btn-delete");
    for(let i = 0; i < elDelete.length; i++){
        elDelete[i].addEventListener("click", () => {
            let idTodo = elDelete[i].dataset.id;
            todos = todos.filter( item => {
                return item.id !== idTodo;
            })
            console.log('todos', todos);
            
            setWord(todos);
            localStorage.setItem("TODOS", JSON.stringify(todos))
        })
    }
}