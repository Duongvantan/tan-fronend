var input1 = document.getElementById('input1');

input1.addEventListener('change', function () {
  // xảy ra khi người dùng thay đổi giá trị của một input, và sau đó không còn focus vào ô input đó nữa
  console.log('change');
  console.log('value', input1.value);
})

input1.addEventListener('input', function () {
  // xảy ra ngày lập tức khi người dùng nhập giá trị vào input
  console.log('input');
  console.log('value', input1.value);
})

var inputRange = document.getElementById('input-range');
inputRange.addEventListener('input', function () {
  console.log(inputRange.value);
})

var checkbox = document.getElementById('checkbox');
// console.log(checkbox.checked);

checkbox.addEventListener('change', function () {
  console.log('checkbox change', checkbox.checked);
})