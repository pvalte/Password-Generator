// Assignment code here

var getPasswordLength = function() {
  var passwordLength = 0;
  while (!passwordLength || passwordLength < 8 || passwordLength > 124) {
    passwordLength = window.prompt("Password Criteria: Please choose a password length from 8 to 128 characters");
    passwordLength = parseInt(passwordLength);
  }
  return passwordLength;
};

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
    validCharacters = validCharacters.concat(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
  }
  if (characterTypeResponse.includes('uppercase')) {
    validCharacters = validCharacters.concat(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
  }
  if (characterTypeResponse.includes('numeric')) {
    validCharacters = validCharacters.concat(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
  }
  if (characterTypeResponse.includes('special characters')) {
    validCharacters = validCharacters.concat(['!', '@', '#', '$', '%', '&', '*', '+', '-']);
  }
  return validCharacters;
};

var generatePassword = function() {
  //present a series of prompts for password criteria
  var passwordCriteria = window.prompt("Which criteria would you like to include in the password: Please enter one 1 for PASSWORD LENGTH, 2 for CHARACTER TYPE, or 3 for BOTH.");

  //Select which criteria to include in the password
  switch (parseInt(passwordCriteria)) {
      case 1:
          //Prompted for the length of the password, at least 8 characters and no more than 128 characters
          passwordLength = getPasswordLength();
          console.log(passwordLength);
          break;
      case 2:
          //WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
          validCharacters = getValidCharacters();
          console.log(validCharacters);
          break;
      case 3:
          //Prompted for the length of the password, at least 8 characters and no more than 128 characters
          passwordLength = getPasswordLength();
          validCharacters = getValidCharacters();
          console.log(passwordLength);
          console.log(validCharacters);
          break;
      default:
          return generatePassword();
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("you clicked the gen button!");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

