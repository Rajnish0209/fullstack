class User {
  constructor(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
    this.score = 0;
    this.skills = [];
  }
  getInfo() {
    return `${this.name} is ${this.age} old. He lives in ${this.city}, ${this.country}.`;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
}

let user1 = new User("Rajnish", 28, "Noida", "India");

let user2 = new User("Raja", 30, "Noida", "India");

console.log(user1.getInfo());
console.log(user1.getScore);
console.log(user1.getSkills);

user1.setScore = 10;
user1.setScore = 10;

user1.setSkill = "HTML";
user1.setSkill = "CSS";

console.log(user1.getInfo());
console.log(user1.getScore);
console.log(user1.getSkills);
