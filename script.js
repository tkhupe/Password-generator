// Assignment code here

let lenghtInput = document.querySelector("#password-length");
let containUpper = document.querySelector("#contains-uppercase");
let containLower = document.querySelector("#contains-lowercase");
let containNumber = document.querySelector("#contains-number");
let containSymbol = document.querySelector("#contains-symbols");


var generatePassword = function () {
  const passwordLength = lenghtInput.value;
 let characters ="";
//  let characters = []
 let  symbols = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  symb: "!@#$%^&*(){}[]=<>/,."
 }
 let characterList ="";
 if (containUpper.checked ==true ){
  characterList += symbols.uppercase;
 }
 if (containLower.checked ==true ){
  characterList += symbols.lowercase;
 }
 if (containNumber.checked ==true ){
  characterList += symbols.number;
 }
 if (containSymbol.checked ==true ){
  characterList += symbols.symb;
 }

    for (i = passwordLength ;  i > 0; i--) {
      let character = characterList[(Math.floor(Math.random() * characterList.length))];
      characters +=character;
      // characters.push(character)

    }
    return characters;
    // return characters.join("");
  }




// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
let step=0;// Write password to the #password input
function writePassword() {
  if(lenghtInput.value < 8 || lenghtInput.value > 128) {
    alert("Must enter between 8 and 128 characters and must contain at least an uppercase, a lowercase, a number, or a symbol")
    return;
  }
  
 if (containUpper.checked !==true && containLower.checked !==true && containNumber.checked !==true && containSymbol.checked !==true) {
  alert("Must enter between 8 and 128 characters and must contain at least an uppercase, a lowercase, a number, or a symbol")
    return;
 }
  // if(containUpper.checked ==false)

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);

  // document.querySelector("#generate").innerHTML = "CLICK!";
  generateBtn.innerHTML = "CLICK!";


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



