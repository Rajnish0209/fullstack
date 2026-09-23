const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const A = new Set(a);
const B = new Set(b);

const AUnionB = new Set();

for (let item of A) {
  if (B.has(item)) AUnionB.add(item);
}

console.log(AUnionB);
