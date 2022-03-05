// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
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

// Add event listener to generate button
generateBtn.addEventListener("click", userInteraction);

// Ask the user how many characters they want
function userInteraction() {
  function userCharacterCount () {
    let passwordCharacterCount = parseInt(prompt("Choose a value between 8 and 128 for your password"))

    while (passwordCharacterCount < 8 || passwordCharacterCount > 128) {
      passwordCharacterCount = parseInt (prompt("Invalid Number: Please choose between 8 and 128"))
    }
  }
  function allowUppercase() {
    let allowUppercase = confirm("Would you like to add uppercase characters?")
    console.log(allowUppercase)

    if (allowUppercase === true) {
      mergedArray.push (...uppercaseChars)
      console.log(mergedArray);
    }
  }
  function allowLowercase() {
    let allowLowerCase = confirm("Would you like to add lowercase characters?")
    console.log(allowLowercase)

    if (allowLowercase === true) {
      mergedArray.push (...lowercaseChars)
      console.log(mergedArray);
    }
  }
  function allowNumbers() {
    let allowNumbers = confirm("Would you like to add numbers?")
    console.log(allowNumbers)

    if (allowNumbers === true) {
      mergedArray.push (...number)
      console.log(mergedArray);
    }
  }
  function allowSpecials() {
    let allowNumbers = confirm("Would you like to add numbers?")
    console.log(allowSpecials)

    if (allowSpecials === true) {
      mergedArray.push (...specialCharacters)
      console.log(mergedArray);
    }
  }
}

  // Add the random 

   // If the user chooses yes, store the array containing uppercase letters
   // If the user selects no, move to the next prompt





          // function generatePassword(){
          //   var finalResult = ""

          //   // HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.

          //   return finalResult;
          // }

          // // Write password to the #password input
          // function writePassword() {

          //   // ask the questions first
          //   askAboutUppercase();




          //   var password = generatePassword();
          //   var passwordText = document.querySelector("#password");
          //   passwordText.value = password;
          // }

          // // Add event listener to generate button
          // generateBtn.addEventListener("click", writePassword);