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
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        " and " +
        this.skills[this.skills.length - 1];
    let formattedSkills = skills ? "He knows" + skills : "";
    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}.${formattedSkills}`;
    return info;
  }
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "NODE", "EXPRESS", "MONGODB"];
    const idx = Math.floor(Math.random() * skills.length);
    return skills[idx];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return `${date}/${month}/${year} ${hours}:${minutes} ${hours <= 12 ? "AM" : "PM"}`;
  }
}

let person1 = new Person("Rajnish", "Gupta", 28, "Noida", "India");
let person2 = new Person("Raj", "Gupta", 30, "Ballia", "India");
let person3 = new Person("Raja", "Gupta", 29, "Delhi", "India");

person1.setScore = 1;
person1.setScore = 1;
person1.setSkill = "HTML";
person1.setSkill = "CSS";
person1.setSkill = "JS";

person2.setScore = 4;
person2.setScore = 4;
person2.setSkill = "NodeJS";
person2.setSkill = "MONGODB";
person2.setSkill = "EXPRESS";

console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person3.getFullName());

console.log(person1.getScore);
console.log(person2.getScore);
console.log(person3.getScore);

console.log(person1.getSkills);
console.log(person2.getSkills);
console.log(person3.getSkills);

console.log(person1.getPersonInfo());
console.log(person2.getPersonInfo());
console.log(person3.getPersonInfo());

console.log(Person.favoriteSkill());
console.log(Person.showDateTime());
