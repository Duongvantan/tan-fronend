//=============Fetch=================//
// Front-end: Xây dựng giao diện người dùng
// Back-end: Xây dựng logic + cơ sở dữ liệu

//API (URL) => Application Programing interface
//Cổng giao tiếp giữa các phần mềm.

//Back-end(OK) => API(URL) => Fetch => Json/XML
// JSON.parse => JavaScript types
//=> Render ra giao diện với HTML

let postAPI = "https://jsonplaceholder.typicode.com/posts";

fetch(postAPI)
.then((response)=> response.json())
//JSON.parse: JSON => JavaScript types
.then((res)=>{
    
    let ul = document.getElementById("comment-block");
    let html = res.map(function(item){
        return `<li>
        <h1>${item.title}</h1>
        <p>${item.body}</p>
        </li>`
    })
    ul.innerHTML = html.join("");
})
// .catch((err)=>{
//     console.log('Đường dẫn bị lỗi')
// })