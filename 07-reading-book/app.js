var elListColor = document.getElementsByClassName("btn");
// console.log(elListColor);
var elLineHeight = document.getElementById("slb-line-height");

var elTextAlign = document.getElementById("slb-text-align")
var elIncrease = document.getElementById("increase");
var elDecrease = document.getElementById("decrease");
var elContent = document.getElementById("content");

var localFontSize = localStorage.getItem("fontsize");
var localTextAlign = localStorage.getItem("Text Align");

document.addEventListener("mousemove", () => {
    console.log('di chuyển chuột');
});

/*
truthy: 1,"1", [] => khi đưa vào if tự động chuyển sang true
falsy: null  undefined 0 NaN "" false => khi đưa vào if tự động chuyển sang giá trị false
kiểm tra 1 giá trị là truthy hay falsy bằng cách nghich đảo giá trị đó 2 lần:
nếu trả về giá trị false => falsy
nếu trả về true => truthy
*/

console.log('!!""', !!"");

//Toán tử 3 ngôi, biểu thức điều kiện
var x = '123';
var y = x ? 1:0;
// if(x){
//     y=1;
// }else{
//     y=0;
// }

// a="1";
// if(a){
//     console.log('truthy');
// }else{
//     console.log('falsy');
// }
    

if(localFontSize){
    console.log('localFontSize khác null');
    elContent.style.fontSize = localFontSize;
}else{
    console.log('localFontsize null');
}

if(localTextAlign){
    elContent.style.textAlign = localTextAlign;
}else{
    console.log('localTextAlign là null');
}

for(let i = 0; i < elListColor.length; i++ ){
    elListColor[i].addEventListener("click", function () {
    //    var color = ["yellow", "green", "red", "white"];
        // elContent.style.backgroundColor = color[i];
        elContent.style.backgroundColor = elListColor[i].dataset.value;
        localStorage.setItem("Background", elListColor[i].dataset.value)
    })
}

elLineHeight.addEventListener("change", function () {
    var line = elLineHeight.value;
    elContent.style.lineHeight = line;
    localStorage.setItem("Line height", line)
})

elTextAlign.addEventListener("change", function () {
    var content = elTextAlign.value;
    elContent.style.textAlign = content;
    localStorage.setItem("Text Align", content);
})
// var x = window.getComputedStyle(document.getElementById("content")).fontSize;
// x = parseInt(x);
elIncrease.addEventListener("click", function () {
    var x = window.getComputedStyle(elContent).fontSize;
    x = parseInt(x);
   x++;
//    console.log(x);

   elContent.style.fontSize = x + "px";
   localStorage.setItem("fontsize", x + "px");
})
elDecrease.addEventListener("click", function () {
    var x = window.getComputedStyle(elContent).fontSize;
    x = parseInt(x);
    x--;
 //    console.log(x);
    elContent.style.fontSize = x + "px";
    localStorage.setItem("fontsize", x + "px");
 })