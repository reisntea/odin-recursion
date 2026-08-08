// Turns the string to an array using the split function, then reverses the array, and then joins it back together into a string
function reverseString (string) {
  return string.split("").reverse().join("");
}

export { reverseString };