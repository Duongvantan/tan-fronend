/*****Phân tích bài tập.
bắt sự kiện click của button save
  lấy giá trị input name -> nameValue
  lấy giá trị input level (select) -> levelValue
  tạo ra một todo mới -> 'newTodo'
    {id: makeId(), name: nameValue, level: levelValue}
  thêm 'newTodo' vào mảng 'todos' -> js add item to array
  xử lý hiển thị lại danh sách lên giao diện
*/

let elBtn = document.getElementById("btn");
let elName = document.getElementById("name");
let elLevel = document.getElementById("level");
let inputSearch = document.getElementById("search");
let elTodos = document.getElementById("todo-list");
// const todos = [
//     {
//       id: makeId(5),
//       name: 'coding',
//       level: 3
//     },
//     {
//       id: makeId(5),
//       name: 'sleeping',
//       level: 1
//     },
//     {
//       id: makeId(5),
//       name: 'eating',
//       level: 2
//     }
//   ]
let todos = JSON.parse(localStorage.getItem('TODOS'));

console.log('todos', todos);

if (!todos) todos = [];

  setTodoList(todos);
//todo chỉ là tham số được truyền vào. 
//trong đây nó chỉ là mỗi phần tử trong mảng
//   todos.forEach((todo) =>{

//     html += `<li>
//     <strong>Id: </strong>${todo.id} - <strong>Name: </strong>${todo.name} - <strong>Level: </strong>${todo.level}
//   </li>`
//   })
//  console.log(html);
//  elTodos.innerHTML = html;





inputSearch.addEventListener("input", () =>{
  const searchValue = inputSearch.value.trim();
  const newTodoS = todos.filter((item) => {
    // const name = item.name.toLowercase();
    // const searchLowerCase = searchValue.toLowercase();
     return item.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  setTodoList(newTodoS);
});

//Nút để thêm 1 đối tượng.
elBtn.addEventListener("click",  () => {
if(elName.value){
  const nameValue = elName.value.trim();
  const levelValue = parseInt(elLevel.value);
  const newTodo = {
  id: makeId(5),
  name: nameValue,
  level: levelValue
}
  console.log(newTodo);

  todos.push(newTodo);
  setTodoList(todos);
  elName.value = "";
  localStorage.setItem('TODOS', JSON.stringify(todos));
}else {
  alert("Không được bỏ trống name");
}
  
  })

//Hàm tạo ra danh sách công việc trong html.
function setTodoList(items) {
    let html = "";
    items.forEach((item) =>{
      html += `<li>
      <strong>Id: </strong>${item.id} - <strong>Name: </strong>${item.name} - <strong>Level: </strong>${item.level}
      <button class = "btn-delete" data-id = "${item.id}">Delete</button>
    </li>`
    })
   elTodos.innerHTML = html;
   //Tạo nút delete 
   const btnDelete = document.getElementsByClassName("btn-delete");
   for(let i = 0;i < btnDelete.length; i++){
    btnDelete[i].addEventListener("click", function () {
      const todoId = btnDelete[i].dataset.id;
      console.log(todoId);
      // todos = todos.filter((item) => {
      //   return item.id !== todoId;
      // })
      for(let i = 0; i < todos.length; i++) {
        if(todos[i].id === todoId) {
            todos.splice(i, 1);
            break;
        }
    }
      setTodoList(todos);
      localStorage.setItem('TODOS', JSON.stringify(todos));
    })
   }
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



