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
    let formattedSkills = skills ? "He knows " + skills : "";
    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}.${formattedSkills}`;
    return info;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, city, country, cls, rollNo) {
    super(firstName, lastName, age, city, country);
    this.cls = cls;
    this.rollNo = rollNo;
  }
}

let stu1 = new Student("Rajnish", "Gupta", 28, "Noida", "India", 12, 26);
stu1.setScore = 4;
stu1.setScore = 4;
stu1.setSkill = "HTML";
stu1.setSkill = "CSS";
stu1.setSkill = "JS";
console.log(stu1.getStudentInfo());
