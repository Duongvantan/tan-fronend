//white
//rgb(0,0,0)
//#ffffff->  0->9, a->f
//goị hàm random -> index ngẫu nhiên
//lấy ra được ks tự


var elColor = document.getElementById('color-text');
var elBtn = document.getElementById('btn');
var elBox = document.getElementById('color-box');
// console.log('elBtn', elBtn);



elBtn.addEventListener('click', function () {
    var letterColor= "abcdef0123456789";
    var color = "";

    for(var i = 0; i < 6; i++){
        color += letterColor[Math.floor(Math.random()*(letterColor.length))];
    }
    elColor.innerText = "#" + color;
    elBox.style.backgroundColor = "#" + color;
    localStorage.setItem("Code Color: ", elColor.innerText);
})

//max = Letter.lenght -1