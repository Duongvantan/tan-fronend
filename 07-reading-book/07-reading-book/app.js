var elContent = document.getElementById('content');
var btnIncrease = document.getElementById('btn-increase');
var btnDecrease = document.getElementById('btn-decrease');
var slbTextAlign = document.getElementById('slb-text-align');
var btnBackground = document.getElementsByClassName('btn-background');
// var arrColor = ['green', 'yellow', 'red', 'white'];

var localFontSize = localStorage.getItem('fontSize'); // null, 1/"1"/[1]
var localTextAlign = localStorage.getItem('textAlign');
document.addEventListener('mousemove', () => {
  console.log('di chuen cho]uot ne');
});

/*
truthy: 1, "1", [] -> khi đưa vào if tự động chuyển sang true
falsy: null undefined 0 NaN "" false -> khi đưa vào if tự động chuyển sang giá trị false
kiểm tra 1 giá trị là truthy hay falsy bằng cách nghịch đảo giá trị đó 2 lần
nếu trả về false -> falsy
nếu trả về true -> truthy
*/

console.log('!!""', !!'');

// toán tử 3 ngôi, biểu thức điều kiện
var x = '123';
var y = x ? 1 : 0;
// if (x) {
//   y = 1;
// } else {
//   y = 0;
// }

// a = "1";
// if (a) {
//   console.log('truthy');
// } else {
//   console.log('falsy');
// }

if (localFontSize) {
  console.log('localFontSize khac null');
  elContent.style.fontSize = localFontSize;
} else {
  console.log('localFontSize null');
}
if (localTextAlign) elContent.style.textAlign = localTextAlign;

// var isChecked = false;
// // isChecked === false
// // !isChecked
// if (!isChecked) {
//   // lam viec gi do
// }

for (let i = 0; i < btnBackground.length; i++) {
  btnBackground[i].addEventListener('click', function () {
    elContent.style.background = btnBackground[i].dataset.value;
  });
}

slbTextAlign.addEventListener('change', () => {
  var value = slbTextAlign.value;
  elContent.style.textAlign = value;
  localStorage.setItem('textAlign', value);
});

btnIncrease.addEventListener('click', function () {
  var currentFontSize = window.getComputedStyle(elContent).getPropertyValue('font-size');
  currentFontSize = parseInt(currentFontSize);
  currentFontSize++;
  elContent.style.fontSize = currentFontSize + 'px';
  localStorage.setItem('fontSize', currentFontSize + 'px');
});

btnDecrease.addEventListener('click', function () {
  var currentFontSize = window.getComputedStyle(elContent).getPropertyValue('font-size');
  currentFontSize = parseInt(currentFontSize);
  currentFontSize--;
  elContent.style.fontSize = currentFontSize + 'px';
  localStorage.setItem('fontSize', currentFontSize + 'px');
});
