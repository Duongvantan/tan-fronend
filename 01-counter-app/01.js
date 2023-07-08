//Truy xuất đến các phần tử HTML

var number = document.getElementById('number');
var savedNumber = document.getElementById('saved-number');
var btnDecrease = document.getElementById('btn-decrease');
var btnReset = document.getElementById('btn-reset');
var btnIncrease = document.getElementById('btn-increase');
var btnSave = document.getElementById('btn-save');

btnDecrease.addEventListener('click', function () {
    // var contentH2 = number.innerText;
    // contentH2 = parseInt(contentH2);
    // contentH2 --;
    // number.innerText = contentH2;
    setNewValue('decrease');
})

btnReset.addEventListener('click', function () {
    // var contentH2 = number.innerText;
    // contentH2 = parseInt(contentH2);
    // contentH2 = 0;
    // number.innerText = contentH2;
    setNewValue('reset');
})

btnIncrease.addEventListener('click', function () {
    // var contentH2 = number.innerText;
    // contentH2 = parseInt(contentH2);
    // contentH2 ++;
    // number.innerText = contentH2;
    setNewValue('increase');
})

function setNewValue(type) {
    var contentH2 = number.innerText;
        contentH2 = parseInt(contentH2);

    switch (type) {
        case 'increase':
            contentH2 ++;
            break;
        case 'decrease':
            contentH2 --;
            break;
        case 'reset':
            contentH2  = 0;
            break;
        
        default:
            break;
    }
    number.innerText = contentH2;
}

btnSave.addEventListener('click', function () {
    savedNumber.innerText = 'SAVE NUMBERS: ' + number.innerText + ' |';
})

// Truy xuất đến button decrease
// Đăng ký sự kiện click cho button decrease
// Truy xuất đến thẻ H2 (đặt id cho thẻ h2)
// lấy nội dung hiện tại cho thẻ H2 -> innerText.
// Giảm giá trị lấy được xuống 1 đơn vị
// Hiển thị lại giá trị mới lên giao diện -> innerText