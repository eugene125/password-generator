var generateBtn = document.querySelector("#generate");

var allowUppercase;
var allowLowercase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;

var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowercaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "|", "\\", "}", "{", "]", "[", '"', "'", ":", ";", "/", "?", ".", ">", ",", "<", "`", "~"];
var mergedArray = [];

function userInteraction() {
  function userCharacterCount () {
    passwordCharacterCount = parseInt(prompt("Choose a value between 8 and 128 for your password"))

    while (passwordCharacterCount < 8 || passwordCharacterCount > 128) {
      passwordCharacterCount = parseInt (prompt("Invalid Number: Please choose between 8 and 128"))
    }
  }
  function uppercase() {
    allowUppercase = confirm("Would you like to add uppercase characters?")

    if (allowUppercase === true) {
      mergedArray.push (...uppercaseChars)
    }
  }
  function lowercase() {
    allowLowercase = confirm("Would you like to add lowercase characters?")

    if (allowLowercase === true) {
      mergedArray.push (...lowercaseChars)
    }
  }
  function numbers() {
    allowNumbers = confirm("Would you like to add numbers?")

    if (allowNumbers === true) {
      mergedArray.push (...number)
    }
  }
  function specials() {
    allowSpecials = confirm("Would you like to add special characters?")

    if (allowSpecials === true) {
      mergedArray.push (...specialCharacters)
    }
  }
userCharacterCount();
uppercase();
lowercase();
numbers();
specials();

}

function randomPassword() {
  userInteraction();
  console.log(mergedArray);
  password = "";
  for (let index = 0; index < passwordCharacterCount; index++) {
    var randomSelector = Math.floor(Math.random()* (mergedArray.length-1))
    password += mergedArray[randomSelector];
  }
  return password;
}

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = randomPassword();
  console.log(password)
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
}