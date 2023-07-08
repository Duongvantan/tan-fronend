//==============JSON===================//
//1. Là 1 định dạng dữ liệu (chuỗi)
//2. JavaScript Object Notation
//3. JSON: Number, Object, Null, Array, Boolean

//Mã Hóa / Giải mã
//Encode / decode

//Stringify: từ Javasript type sang ===> JSON
//parse:     từ JSON sang JavaScript Type

// var json = '1';
var json = '["Javascript","PHP"]';
// var json = '{"Name":"Văn Tấn","age":27}'

var a = '"abc"';
console.log(JSON.parse(json));
console.log(JSON.stringify(true));
console.log(JSON.stringify(["javacript","PHP"]));


