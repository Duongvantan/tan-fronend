var result = document.getElementById('result');
var length = document.getElementById('length');
var inputLength = document.getElementById('input-length');

var checkboxNumbers = document.getElementById('checkbox-numbers');
var checkboxLetters = document.getElementById('checkbox-letters');
var checkboxSymbols = document.getElementById('checkbox-symbols');

var btnGeneratePassword = document.getElementById('btn-generate')


var NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var SYMBOLS = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


inputLength.addEventListener('input', function() {
    console.log(inputLength.value);
    length.innerText = inputLength.value;
});

btnGeneratePassword.addEventListener('click', function() {;
    var includeLetters = checkboxLetters.checked
    var includeNumbers = checkboxNumbers.checked
    var includeSymbols = checkboxSymbols.checked

    var characterAmount = inputLength.value;
    var password = generatePassword(characterAmount, includeLetters, includeNumbers, includeSymbols)
    result.innerText = password;
});



function generatePassword(characterAmount, includeLetters, includeNumbers, includeSymbols) {
    var charCodes = [];

    if (includeNumbers) {
        charCodes = charCodes.concat(NUMBERS);
    }
    if (includeLetters) {
        charCodes = charCodes.concat(LETTERS);
    }
    if (includeSymbols) {
        charCodes = charCodes.concat(SYMBOLS);
    }
    var passwordCharacters = '';
    for (let i = 0; i < characterAmount; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters += characterCode;
    }
    return passwordCharacters;


}