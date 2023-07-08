var abc = 123;
// tên của tôi -> MyName -> PascalCase
// my_name -> snake_case
// myName -> camelCase

// C# -> PascalCase
// Python -> Snake_Case
// camelCase -> lạc đà

// method, property
// truy xuất đến các phần tử html
var elH1 = document.getElementById('title');
console.log('elH1', elH1);
// lấy nội dung từ một thẻ html
var contentH1 = elH1.innerText;
console.log('contentH1', contentH1);
// gán nội dung vào một thẻ html
// elH1.innerText = 'abc';
// truy xuất đến button change title
var btnChangeTitle = document.getElementById('btn-change-title');
console.log('btnChangeTitle', btnChangeTitle);
// anonymous function -> hàm không tên
// đăng ký sự kiện cho một element thông qua phương thức addEventListener,
// addEventListener nhận vào 2 tham số
// + tham số thứ nhất: tên sự kiện cần đăng ký, ví dụ 'click'
// + tham số thứ hai: là một hàm không tên thể hiện công việc cần làm khi sự kiện xảy ra
btnChangeTitle.addEventListener('click', function () {
  // elH1.innerText = elH1.innerText + ' 01';
  elH1.innerText += ' 01';
});