let a = 1;
let b = 2;
function print() {
  console.log(a, b);
  if (true) {
    let a = 6;
    let b = 9;
    console.log(a, b);
  }
  console.log(a, b);
}

print();
