function square(num) {
  return num * num;
}

function cube(fn, num) {
  return fn(num) * num;
}

console.log(cube(square, 4));
