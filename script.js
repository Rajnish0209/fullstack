function shuffleArray(arr) {
  let shuffleArray = [];
  while (arr.length != 0) {
    let rand = Math.floor(Math.random() * arr.length);
    shuffleArray.push(...arr.splice(rand, 1));
  }
  return shuffleArray;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));
