//Prompt for the length of the password, at least 8 characters and no more than 128 characters
var getPasswordLength = function() {
  var passwordLength = 0;
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Password Criteria: Please choose a password length from 8 to 128 characters");
    passwordLength = parseInt(passwordLength);
  }
  return passwordLength;
};

//Character Types
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
//Source: https://owasp.org/www-community/password-special-characters

//Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var getValidCharacters = function() {
  var validCharacters = "";
  characterTypeResponse = window.prompt("Password Criteria: Please choose which character types to include in the password: LOWERCASE, UPPERCASE, NUMERIC, and/or SPECIAL CHARACTERS");
  characterTypeResponse = characterTypeResponse.toLowerCase();

  if (characterTypeResponse.includes('lowercase')) {
    validCharacters = validCharacters + lowerCase;
  }
  if (characterTypeResponse.includes('uppercase')) {
    validCharacters = validCharacters + upperCase;
  }
  if (characterTypeResponse.includes('numeric')) {
    validCharacters = validCharacters + numeric;
  }
  if (characterTypeResponse.includes('special characters')) {
    validCharacters = validCharacters + specialCharacters;
  }
  if (!validCharacters) {
    return getValidCharacters();
  }
  return validCharacters;
};

var generatePassword = function() {
  //Default Criteria
  var passwordLength = 8;
  var validCharacters = lowerCase;

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

  //Create password to fit criteria
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

