class Person {
  constructor(firstName, lastName, age, city, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.skills = [];
    this.age = age;
    this.city = city;
    this.country = country;
    this.score = 0;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score = score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
}

let person1 = new Person("Rajnish", "Gupta", 28, "Noida", "India");
let person2 = new Person("Raj", "Gupta", 30, "Ballia", "India");

person1.setScore = 1;
person1.setSkill = "HTML";
person1.setSkill = "CSS";
person1.setSkill = "JS";

person2.setScore = 4;
person2.setSkill = "NodeJS";
person2.setSkill = "MONGODB";
person2.setSkill = "EXPRESS";

console.log(person1.getFullName());
console.log(person2.getFullName());

console.log(person1.getScore);
console.log(person1.getSkills);

console.log(person2.getScore);
console.log(person2.getSkills);
