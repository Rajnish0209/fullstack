let num = -10;

switch (true) {
  case num > 0:
  case num == 0:
    console.log("positive");
    break;
  case num < 0:
    console.log("negative");
    break;
  default:
    console.log("invalid number");
    break;
}
