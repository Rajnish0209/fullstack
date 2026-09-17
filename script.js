function capitalizeArray(arr) {
  let cArray = [];
  for (let items of arr) {
    cArray.push(items.toUpperCase());
  }

  return cArray;
}

console.log(capitalizeArray(["a", "b", "C"]));
