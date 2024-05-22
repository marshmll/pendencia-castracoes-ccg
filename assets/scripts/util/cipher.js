function cipher(string = "") {
  let cipheredString = string.split("").sort().reverse().join("");

  return cipheredString;
}

function checkMatch(string, target) {
  let cipheredString = string.split("").sort().reverse().join("");

  return cipheredString === target;
}

let cipherUtil = Object.freeze({
  cipher,
  checkMatch,
});

export default cipherUtil; 
