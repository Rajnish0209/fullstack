// let user1 = {
//   name: "rajnish",
//   age: 28,
//   subject: ["HTML", "CSS", "JS", "NODE"],
//   score: [12, 10, 11, 14],
//   location: "noida",
//   country: "india",
//   getInfo() {
//     let allSkills = this.subject.slice(0, this.subject.length - 1).join(", ");
//     let totalScore = this.score.reduce((acc, cur) => acc + cur, 0);
//     return `${this.name} is ${this.age} year old. He lives in ${this.location}, ${this.country}. He knows ${allSkills} and ${this.subject[this.subject.length - 1]} and his total score is ${totalScore}.`;
//   },
// };
// let user2 = {
//   name: "raja",
//   age: 29,
//   subject: ["HTML", "CSS", "JS", "NODE"],
//   score: [12, 15, 11, 14],
//   location: "noida",
//   country: "india",
//   getInfo() {
//     let allSkills = this.subject.slice(0, this.subject.length - 1).join(", ");
//     let totalScore = this.score.reduce((acc, cur) => acc + cur, 0);
//     return `${this.name} is ${this.age} year old. He lives in ${this.location}, ${this.country}. He knows ${allSkills} and ${this.subject[this.subject.length - 1]} and his total score is ${totalScore}.`;
//   },
// };
// let user3 = {
//   name: "raj",
//   age: 30,
//   subject: ["HTML", "CSS", "JS", "NODE"],
//   score: [12, 10, 17, 14],
//   location: "noida",
//   country: "india",
//   getInfo() {
//     let allSkills = this.subject.slice(0, this.subject.length - 1).join(", ");
//     let totalScore = this.score.reduce((acc, cur) => acc + cur, 0);
//     return `${this.name} is ${this.age} year old. He lives in ${this.location}, ${this.country}. He knows ${allSkills} and ${this.subject[this.subject.length - 1]} and his total score is ${totalScore}.`;
//   },
// };
// console.log(user1.getInfo());
// console.log(user2.getInfo());
// console.log(user3.getInfo());

class User {
  constructor(name, age, subjects, scores, location, country) {
    this.name = name;
    this.age = age;
    this.subjects = subjects;
    this.scores = scores;
    this.location = location;
    this.country = country;
  }
  getInfo() {
    let allSkills = this.subjects.slice(0, this.subjects.length - 1).join(", ");
    let totalScore = this.scores.reduce((acc, cur) => acc + cur, 0);
    return `${this.name} is ${this.age} year old. He lives in ${this.location}, ${this.country}. He knows ${allSkills} and ${this.subjects[this.subjects.length - 1]} and his total score is ${totalScore}.`;
  }
}

let user1 = new User(
  "rajnish",
  28,
  ["HTML", "CSS", "JS", "NODE"],
  [10, 10, 10, 11],
  "noida",
  "india",
);
User.prototype.getInfo = function () {
  return 1;
};

let user2 = new User(
  "raja",
  30,
  ["HTML", "CSS", "JS", "NODE"],
  [10, 10, 10, 11],
  "noida",
  "india",
);
console.log(user1.getInfo());
console.log(user2.getInfo());
