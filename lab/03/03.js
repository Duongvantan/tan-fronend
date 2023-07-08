/*
document.getElementById('box) -> 1 phần tử html
document.getElementsByClassName -> danh sách các phần tử html (array)
document.getElementsByTagName('img') -> danh sách các phần tử html 
*/
// selector: div, #id, .class, #box h3 span
// querySelector trả về 1 phần tử html
var box = document.querySelector('#box');
var span = document.querySelector('span') // -> 1 thẻ span đầu tiên trong trang
var spanAbc = document.querySelector('.abc');
var spanXyz = document.querySelector('#box h3 span');
console.log('box', box);
console.log('span', span);
console.log('spanAbc', spanAbc);
console.log('spanXyz', spanXyz);
// querySelectorAll luôn luôn trả về một danh sách các phần tử html
var boxAll = document.querySelectorAll('#box');
var spanAll = document.querySelectorAll('span');
var spanAbcAll = document.querySelectorAll('.abc');
var spanXyzAll = document.querySelectorAll('#box h3 span');
console.log('boxAll', boxAll);
console.log('spanAll', spanAll);
console.log('spanAbcAll', spanAbcAll);
console.log('spanXyzAll', spanXyzAll);