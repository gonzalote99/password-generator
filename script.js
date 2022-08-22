var generateBtn = document.querySelector("#generate");

var pwdCriteria = {
  pwdLength: 0,

  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
  "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]


}
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector('#password');
 passwordText.value = password;   
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var result = "";
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;
  
  passwordLength = 0;
  pwdCriteria.pwdLength = 0;
  result = "";

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("password length? 8 and 128");
  
    if (passwordLength === null) {
      return "secure password";
    }
    else {
      if(!isFinite(passwordLength)) {
        alert("dont enter number");
        return "secure password";
      }
      else {
        if(passwordLength < 8 && passwordLength > 128 ) {
          alert("password between 8 and 128");
          return "secure password";
        }
        else {
          showPrompts();

          while(pwdCriteria.pwdLength < passwordLength ) {
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("select at least one criteria");
              showPrompts();
            } else {
              if (lowerCase === true && pwdCriteria.pwdLength < passwordLength) {
                var lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random() * 26)];
                result = result + lc;
                pwdCriteria.pwdLength++;
              }
              if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
                var sc = pwdCriteria.pwdCharacter[Math.floor(Math.random() * 32)];
                result = result + sc;
                pwdCriteria.pwdLength++;
              }
              if (upperCase === true && pwdCriteria.pwdLength < passwordLength) {
                var uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random() * 26)];
                result = result.uc;
                pwdCriteria.pwdLength++;
              }
              if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
                var num = pwdCriteria.pwdNumber[Math.floor(Math.random () * 10)];
                result = result + num;
                pwdCriteria.pwdLength++;
                 
              }


            }
          }
        }
      }
    }
    return result;

    function showPrompts() {
      lowerCase = confirm("want lowerCase?");
      upperCase = confirm("want upperCase?");
      numbers = confirm("want numbers?");
      specialChar = confirm("want specialChar?");
    }
  
}


}
