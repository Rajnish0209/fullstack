function solveQuadEquation(a, b, c) {
  let xCorrdinate = {};
  xCorrdinate.x1 = ((-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a;
  xCorrdinate.x1 = ((-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a;
  return xCorrdinate;
}

console.log(solveQuadEquation(1, 4, 4));
