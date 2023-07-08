var lstBtnHome = document.getElementsByClassName('btn-home');
var boxScoreHome = document.getElementById('box-score-home');
var lstBtnAway = document.getElementsByClassName('btn-away');
var boxScoreAway = document.getElementById('box-score-away');

for (let i = 0; i < lstBtnHome.length; i++) {
  lstBtnHome[i].addEventListener('click', function () {
    
    var value = parseInt(lstBtnHome[i].innerText);
    setScore(value, boxScoreHome);
  });
}
for (let i = 0; i < lstBtnAway.length; i++) {
  lstBtnAway[i].addEventListener('click', function () {
    var value = parseInt(lstBtnAway[i].innerText);
    setScore(value, boxScoreAway);
  });
}

function setScore(value, element) {
  var oldValue = parseInt(element.innerText);
  oldValue += value;
  if (oldValue < 10) oldValue = '0' + oldValue;
  element.innerText = oldValue;
}
