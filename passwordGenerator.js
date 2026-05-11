const charArr = [];
let password = [];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lettersSmall = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const lettersBig = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  ",",
  ".",
  "?",
  "/",
];

const newPwdBtn = document.getElementById("newPwdBtn");
const pwd = document.getElementById("pwd");

function rndIdx() {
  // * Random Index zwischen 0-3 wird erzeugt

  const rndIdx = Math.floor(Math.random() * 4);
  return rndIdx;
}

function setIdx() {
  // * vier random Indices werden erzeugt mit der rndIdx()-Funktion. Jeder Index ist anders!

  let fiRndIdx = rndIdx();
  let sRndIdx;
  let tRndIdx;
  let foRndIdx;

  // * wenn der 2-Index geleich 1-Index, probiere es noch mal...
  do {
    sRndIdx = rndIdx();
  } while (sRndIdx === fiRndIdx);

  // * wenn der 3-Index geleich 1-Index, oder 2-Index, probiere es noch mal...
  do {
    tRndIdx = rndIdx();
  } while (tRndIdx === fiRndIdx || tRndIdx === sRndIdx);

  // * wenn der 4-Index geleich 1-Index, oder 2-Index, oder 3-Index, probiere es noch mal...
  do {
    foRndIdx = rndIdx();
  } while (
    foRndIdx === fiRndIdx ||
    foRndIdx === sRndIdx ||
    foRndIdx === tRndIdx
  );

  // * Das Charakter-Array wird befüllt
  charArr[fiRndIdx] = nums;
  charArr[sRndIdx] = lettersSmall;
  charArr[tRndIdx] = lettersBig;
  charArr[foRndIdx] = specialChar;
}

setIdx();

function createPassword() {
  // * Zufällige Länge des Passworts 10-14 Zeichen
  const rndLength = Math.floor(Math.random() * 5) + 10;
  password.length = rndLength;
  let includesNum;
  let includesSmallLetter;
  let includesBigLetter;
  let includesSpecialChar;

  function createRandom() {
    includesNum = false;
    includesSmallLetter = false;
    includesBigLetter = false;
    includesSpecialChar = false;
    password = [];

    // * Ein zufälliges Passwort mit random Länge wird erzeugt
    for (let i = 0; i < rndLength; i++) {
      const rndNr1 = Math.floor(Math.random() * charArr.length);

      const tempLength = charArr[rndNr1].length;

      const rndNr2 = Math.floor(Math.random() * tempLength);

      // * Für jede Position wird ein zufälliges Zeichen erzuegt und in password eingefügt
      password.push(charArr[rndNr1][rndNr2]);

      // * Eine Validierung wird durchgeführt, ob jeweilige Zeichen enthalten sind
      // ! Es wird vordefiniert, dass ein gültiges Passwort alle Zeichenarten enhalten muss
      if (nums.includes(password[i])) {
        includesNum = true;
      } else if (lettersSmall.includes(password[i])) {
        includesSmallLetter = true;
      } else if (lettersBig.includes(password[i])) {
        includesBigLetter = true;
      } else {
        includesSpecialChar = true;
      }
    }

    const validPassword = checkPassword();
    return validPassword;
  }

  const validPassword = createRandom();

  function checkPassword() {
    console.log("Checking password!");
    if (
      // * Wenn das Passwort alle Zeichenarten enthält, ist dies gültig.
      includesNum &&
      includesSmallLetter &&
      includesBigLetter &&
      includesSpecialChar
    ) {
      console.log("Password save!");
      const textPassword = password.join("");
      return textPassword;
    } else {
      // * Wenn das Passwort nicht alle Zeichenarten enthält, ist dies ungültig.
      console.log("Password not save! Creating new password.");
      // * ein neues Random Passwort wird erzuegt
      return createRandom();
    }
  }
  return validPassword;
}

newPwdBtn.addEventListener("click", () => {
  const myNewPassword = createPassword();
  console.log(myNewPassword);
  pwd.type = "text";
  pwd.value = myNewPassword;
});
