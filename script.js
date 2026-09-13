const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Ireland",
  "Japan",
  "Kenya",
];

const newArr1 = [];
const newArr2 = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].indexOf("land") != -1) {
    newArr1.push(countries[i]);
  } else {
    newArr2.push(countries[i]);
  }
}

console.log(newArr1);
console.log(newArr2);
