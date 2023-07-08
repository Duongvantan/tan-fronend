let elBackground = document.getElementsByClassName("btn-background");
let elLineHeight = document.getElementById("slb-line-height");
let elTextAlign = document.getElementById("slb-text-align");
let elContent = document.getElementById("content");

let elIncrease = document.getElementById("btn-increase");
let elDecrease = document.getElementById("btn-decrease");
for(let i = 0; i < elBackground.length; i++ ){
    elBackground[i].addEventListener("click",  () => {
        elContent.style.backgroundColor = elBackground[i].dataset.value;
    })
}

let localFontSize = localStorage.getItem("fontSize");
if(localFontSize){
    console.log('localFontSize khác null');
    elContent.style.fontSize = localFontSize + "px";
}else {
    console.log('localFontSize bằng null');
}
elContent.style.fontSize = null + "px";
console.log('localFontSize', localFontSize);


elLineHeight.addEventListener("click", () => {
    elContent.style.lineHeight = elLineHeight.value;
});

elTextAlign.addEventListener("click", () => {
    elContent.style.textAlign = elTextAlign.value;
});
elIncrease.addEventListener("click", () => {
    let currentFontsize = window.getComputedStyle(elContent).fontSize;
    currentFontsize = parseFloat(currentFontsize);
    currentFontsize++
    elContent.style.fontSize = currentFontsize + "px";
    localStorage.setItem("fontSize", currentFontsize);
});

elDecrease.addEventListener("click", () => {
    let currentFontsize = window.getComputedStyle(elContent).fontSize;
    currentFontsize = parseFloat(currentFontsize);
    currentFontsize--
    elContent.style.fontSize = currentFontsize + "px";
    localStorage.setItem("fontSize", currentFontsize);
})

