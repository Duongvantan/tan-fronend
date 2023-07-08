// truy xuất đến button decrease -> document.getElementById();
var btnDecrease = document.getElementById('btn-decrease');
var btnIncrease = document.getElementById('btn-increase');
var btnReset = document.getElementById('btn-reset');
var btnSave = document.getElementById('btn-save');
var elSavedNumber = document.getElementById('saved-number');
var elH2 = document.getElementById('number');

// optimize
btnDecrease.addEventListener('click', function () {
  // var contentH2 = elH2.innerText;
  // contentH2 = parseInt(contentH2);
  // contentH2 -= 1;
  // elH2.innerText = contentH2;
  setNewValue('decrease');
});

btnIncrease.addEventListener('click', function () {
  setNewValue('increase');
});

btnReset.addEventListener('click', function () {
  setNewValue('reset');
});

btnSave.addEventListener('click', function () {
  elSavedNumber.innerText += elH2.innerText + '|';
  elH2.innerText = 0;
});

function setNewValue(type = 'increase') {
  var contentH2 = elH2.innerText;
  contentH2 = parseInt(contentH2);
  switch (type) {
    case 'increase':
      contentH2 += 1;
      break;
    case 'decrease':
      contentH2 -= 1;
      break;
    case 'reset':
      contentH2 = 0;
      break;
  }
  elH2.innerText = contentH2;
}

// đăng ký sự kiện click cho button decrease
// lấy được giá trị hiện tại của h2.number
// truy xuất được đến thẻ h2.number -> đặt id cho h2.number
// lấy nội dung hiện tại trong thẻ h2 -> innerText
// giảm giá trị lấy được xuống 1 đơn vị
// hiển thị lại giá trị mới lên giao diện (h2.number) -> innerText

// 'abc' - 'xyz' -> abcxyz
