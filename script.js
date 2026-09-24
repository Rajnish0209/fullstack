const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(arr) {
  let arrayOfObject = [];
  for (let [name, skills, scores] of arr) {
    arrayOfObject.push({ name: name, skills: skills, scores: scores });
  }
  return arrayOfObject;
}

console.log(convertArrayToObject(students));
