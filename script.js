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
    let allSkills = this.skills.slice(0, this.skills.length - 1).join(", ");
    return `${this.name} is ${this.age} old. He lives in ${this.city}, ${this.country}. He knows ${allSkills} and ${this.skills[this.skills.length - 1]}. His total score is ${this.score}.`;
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
  static dateAndTime() {
    let now = new Date();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? "AM" : "PM";
    return `${date}/${month}/${year} ${hours}:${minutes} ${ampm}`;
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
user1.setSkill = "JS";

console.log(user1.getInfo());
console.log(user1.getScore);
console.log(user1.getSkills);
