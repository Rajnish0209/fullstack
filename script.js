function randomHexaNumberGenerator() {
  let char = "0123456789abcdefghijklmnopqrstuvwxyz";
  let randomHex = "";
  for (let i = 0; i < 7; i++) {
    randomHex += char[Math.floor(Math.random() * char.length)];
  }
  return randomHex;
}

console.log(randomHexaNumberGenerator());
