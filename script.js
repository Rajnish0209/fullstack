class Person {
  constructor(firstName, lastName, age, city, country, ...skills) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.skills = skills;
    this.age = age;
    this.city = city;
    this.country = country;
  }
  getFullInfo() {
    return `${this.firstName} ${this.lastName} is ${this.age} old. Lived in ${this.city}, ${this.country}. Having skills ${this.skills.slice(0, this.skills.length - 1).join(", ")} and ${this.skills[this.skills.length - 1]}.`;
  }
}

let person1 = new Person(
  "rajnish",
  "gupta",
  ["html", "css"],
  28,
  "noida",
  "india",
);

let person2 = new Person(
  "raja",
  "gupta",
  ["html", "css"],
  30,
  "ballia",
  "india",
);
person1.getFullInfo = function () {
  return "hello";
};
console.log(person1.getFullInfo());
console.log(person2.getFullInfo());
