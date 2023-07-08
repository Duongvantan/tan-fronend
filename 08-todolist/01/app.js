//1 todo: id, name, level (1,2,3 -> small, medium,high)
//id -> chuỗi ngẫu nhiên có 12 ký tự A-Za-z0-9 ->js random String
//crawling -> cào dữ liệu.

//***Chú ý Sự lưu cùng một ô nhớ của "ARR".Khác tên nhưng là 1 đối tượng.
// const a = [1,2,3,4,"tan","dat","phuc"];
// let b = a;
// b[0] = "Duong";
// console.log('a', a);
// console.log('b', b);

// const c = {name: 'tan', 'price-self': 'infinity', age: 27};
// let d = c;
// d['name'] = 'Lan';
// d['price-self'] = 'lovely';
// d.age = 26;
// console.log('d', d);
// console.log('c', c);

// let str = "Seadong";
// let str1 = "";
// str[0] = "T";
// str1 = str[0];
// console.log('str', str);
// console.log('str1',str1 );


/*****Phân tích bài tập.
bắt sự kiện click của button save
  lấy giá trị input name -> nameValue
  lấy giá trị input level (select) -> levelValue
  tạo ra một todo mới -> 'newTodo'
    {id: makeId(), name: nameValue, level: levelValue}
  thêm 'newTodo' vào mảng 'todos' -> js add item to array
  xử lý hiển thị lại danh sách lên giao diện
*/

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
if (!todos) todos = [];

let elTodos = document.getElementById("todo-list");

//****Sự khác nhau của forEach và for.
//***forEach là duyệt toàn mảng cho đến cuối.
//***Còn for là duyệt tới đâu của mảng cũng được.
  // for (let i = 0; i < todos.length; i++) {
  //   console.log(todos[i]);
  // }
  // todos.forEach((xyz) => {
  //   console.log(xyz);
  // });

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


var elBtn = document.getElementById("btn");
var elName = document.getElementById("name");
var elLevel = document.getElementById("level");
var inputSearch = document.getElementById("search");


inputSearch.addEventListener("input", () =>{
  const searchValue = inputSearch.value.trim();
  const newTodoS = todos.filter((item) => {
    // const name = item.name.toLowercase();
    // const searchLowerCase = searchValue.toLowercase();
    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  setTodoList(newTodoS);
});


elBtn.addEventListener("click",  () => {
if(elName.value){
  //trim() cắt bỏ khoảng trống 2 bên.
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
function setTodoList(items) {
    let html = "";
    items.forEach((item) =>{
      html += `<li>
      <strong>Id: </strong>${item.id} - <strong>Name: </strong>${item.name} - <strong>Level: </strong>${item.level}
      <button class = "btn-delete" data-id = "${item.id}">Delete</button>
    </li>`
    })
   elTodos.innerHTML = html;
   const btnDelete = document.getElementsByClassName("btn-delete");
   for(let i = 0;i < btnDelete.length; i++){
    btnDelete[i].addEventListener("click", function () {
      const todoId = btnDelete[i].dataset.id;
      console.log(todoId);
      todos = todos.filter((item) => {
        return item.id !== todoId;
      })
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

// const ages = [32, 33, 16, 40];
// const result = ages.filter(age =>{
//   console.log('filter', age);
  
// });


// const result = ages.map(age =>{
//     console.log('map', age);
    
//   });

// const result = ages.forEach(age =>{
//   console.log('forEach', age);
// });