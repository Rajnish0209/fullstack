function userIdGeneratedByUser() {
  let char = "0123456789abcdefghiklmnopqrstuvwxyz";
  let numberOfChar = prompt("Enter number of character");
  let numberOfId = prompt("Enter number of id you want to generate");
  if (numberOfChar <= 0 || numberOfId <= 0) {
    return "Invalid input";
  }
  let arr = [];
  for (let i = 0; i < numberOfId; i++) {
    let id = "";
    for (let j = 0; j < numberOfChar; j++) {
      id += char[Math.floor(Math.random() * char.length)];
    }
    arr[i] = id;
  }
  return arr;
}

console.log(userIdGeneratedByUser());
