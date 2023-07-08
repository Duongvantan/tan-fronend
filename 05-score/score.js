var elHome = document.getElementById("score-home");
var elListHome = document.getElementsByClassName("btn-home");
console.log('elListHome', elListHome);
var elAway = document.getElementById("score-away");
var elListAway = document.getElementsByClassName("btn-away");
var elClock = document.getElementById("clock");
var elStart = document.getElementById("btn-start");


//Chú ý dùng let thí thực hiện được. Dùng var không thực hiện được

for(let i = 0; i < elListHome.length; i++){
    elListHome[i].addEventListener("click", function () {
        console.log('i', i);//i=3  var
                            //i=0 let
                            //i=1 let
                            //i=2 let        
        let value = parseInt(elListHome[i].innerText);
        // var oldValue = parseInt(elHome.innerText);
        // oldValue += value;
        // elHome.innerText = setTwoDigit(oldValue);
        getValue(value, elHome);
    })
}

for(let i = 0; i < elListAway.length; i++){
    elListAway[i].addEventListener("click", function () {
        var value = parseInt(elListAway[i].innerText);
        // var oldValue = parseInt(elAway.innerText);
        // oldValue += value;
        // elAway.innerText = setTwoDigit(oldValue);
        getValue(value, elAway);
    })
}

elStart.addEventListener("click", function () {
    setTime();
})

function getValue(value, element) {
    var oldValue = parseInt(element.innerText);
    oldValue += value;
    element.innerText = setTwoDigit(oldValue);
}

function setTwoDigit(number) {
    if(number < 10) number = "0" + number;
    return number;
}

    var sec = 0;
    var min = 0;
    var pause;
function setTime() {
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
    }
    if(min == 90){
        min = 0
        clearTimeout(pause);
    }
    elClock.innerText = setTwoDigit(min) + ":" + setTwoDigit(sec);
    pause = setTimeout("setTime()",1000);
}


