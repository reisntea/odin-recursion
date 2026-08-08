// Splits the string into an array of its characters and then checks if that character is a letter
// If it is a letter it then checks if it's capitalized and returns the letter capitalized if appropriate
// If the char isn't a letter it's returned as is
function caesarCipher (string, shift) {
  return string.split("")
    .map(char => {
      if (isLetter(char.toLowerCase())) {
        if (isUpperCase(char)) {
          return shiftLetter(char.toLowerCase(), shift).toUpperCase();
        } else {
          return shiftLetter(char, shift)
        }
      } else {
        return char;
      }
    })
    .join("");
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function shiftLetter (char, shift) {
  if (alphabet.indexOf(char) + shift > 25) shift = shift - 26;
  return alphabet[alphabet.indexOf(char) + shift];
}

function isLetter (char) {
  return alphabet.includes(char);
}

function isUpperCase (char) {
  return char === char.toUpperCase();
}

export { caesarCipher };