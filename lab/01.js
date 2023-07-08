var abc = 123;
console.log('abc', abc);

// camelCase -> lạc đà

// method, property
// Truy xuất đến các phần tử HTML*******
var elH1 = document.getElementById('title');
console.log('elH1', elH1);

// var elButton = document.getElementById('btn-change-title');
// console.log('elButton', elButton);

// Lấy nội dung từ một thẻ HTML*********
var contentH1 = elH1.innerText;
console.log('contentH1', contentH1);

// var contentButton = elButton.innerText;
// console.log('contentButton', contentButton);

// Gán nội dung vào một thẻ HTML***********
// elH1.innerText += ' Is very easy';
// elButton.innerText += " for H1";

// Truy xuất đến button change title
var elButton = document.getElementById('btn-change-title');
console.log('elButton', elButton);


// Đăng ký sự kiện cho một element thông qua phương thức addEventListener**********************
// anonymous function -> Hàm không tên
// addEventListener nhận vào 2 tham số:
// + Tham số thứ nhất: tên sự kiện cần đăng ký, ví dụ 'click'
// + Tham số thứ hai: là một hàm không tên thể hiện công việc cần làm khi sự kiện xảy ra.
elButton.addEventListener('click', function () {
    elH1.innerText += '01';
})








