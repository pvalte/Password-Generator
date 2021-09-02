//Character Arrays
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacterArray = ['!', '@', '#', '$', '%', '&', '*', '+', '_'];

//Prompt for the length of the password, at least 8 characters and no more than 128 characters
var getPasswordLength = function() {
  var passwordLength = 0;
  while (!passwordLength || passwordLength < 8 || passwordLength > 124) {
    passwordLength = window.prompt("Password Criteria: Please choose a password length from 8 to 128 characters");
    passwordLength = parseInt(passwordLength);
  }
  return passwordLength;
};

//Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var getValidCharacters = function() {
  var validCharacters = [];
  var validCharacterSelection = false;
  while (!validCharacterSelection) {
    characterTypeResponse = window.prompt("Password Criteria: Please choose which character types to include in the password: LOWERCASE, UPPERCASE, NUMERIC, and/or SPECIAL CHARACTERS");
    characterTypeResponse = characterTypeResponse.toLowerCase();
    if (characterTypeResponse.includes('lowercase') || characterTypeResponse.includes('uppercase') || characterTypeResponse.includes('numeric') || characterTypeResponse.includes('special characters')) {
      validCharacterSelection = true;
    }
  }
  if (characterTypeResponse.includes('lowercase')) {
    validCharacters = validCharacters.concat(lowerCaseArray);
  }
  if (characterTypeResponse.includes('uppercase')) {
    validCharacters = validCharacters.concat(upperCaseArray);
  }
  if (characterTypeResponse.includes('numeric')) {
    validCharacters = validCharacters.concat(numericArray);
  }
  if (characterTypeResponse.includes('special characters')) {
    validCharacters = validCharacters.concat(specialCharacterArray);
  }
  return validCharacters;
};

var generatePassword = function() {
  //Default Criteria
  var passwordLength = 8;
  var validCharacters = lowerCaseArray;

  //Prompt for Password Criteria
  var passwordCriteria = window.prompt("Which criteria would you like to include in the generated password? Please enter one 1 for PASSWORD LENGTH, 2 for CHARACTER TYPE, or 3 for BOTH.");  
  switch (parseInt(passwordCriteria)) {
      case 1:
          passwordLength = getPasswordLength();
          break;
      case 2:
          validCharacters = getValidCharacters();
          break;
      case 3:
          passwordLength = getPasswordLength();
          validCharacters = getValidCharacters();
          break;
      default:
        //if answer is not valid, prompt again  
        return generatePassword();
  }

  var generatedPassword = "";
  for (i = 0; i < passwordLength; i++) {
    var randomCharacter = validCharacters[Math.floor(Math.random() * (validCharacters.length))];
    generatedPassword = generatedPassword + randomCharacter;
  }
  return generatedPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

