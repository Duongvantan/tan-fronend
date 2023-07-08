var elMin = document.getElementById('number-min');

var elMax = document.getElementById('number-max');

var elResult =document.getElementById('result-value');

var elBtn = document.getElementById('btn-click');

// var valueMin = elMin.value;
// var valueMax = elMax.value;
   

elBtn.addEventListener('click', function () {
    var valueMin = elMin.value;
        valueMin = Number(valueMin);

        
    var valueMax = elMax.value;
        valueMax =  Number(valueMax);

    var result = randomNumber(valueMin, valueMax);
    elResult.value = result;

})

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }