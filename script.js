class Person {
  constructor(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
  }
  getInfo() {
    return `${this.name}`;
  }
  role() {
    return "person";
  }
}

class Student extends Person {
  constructor(name, age, city, country, cls, courses, scores) {
    super(name, age, city, country);
    this.cls = cls;
    this.courses = courses;
    this.scores = scores;
  }
  role() {
    return "student";
  }
}

class Teacher extends Person {
  constructor(name, age, city, country, subjects) {
    super(name, age, city, country);
    this.subjects = subjects;
  }
  // role() {
  //   return "teacher";
  // }
}

let p1 = new Person("ram", 33, "ballia", "india");

let s1 = new Student(
  "rajnish",
  28,
  "noida",
  "india",
  "mca",
  ["hml", "css", "js"],
  [12, 13, 14],
);

let t1 = new Teacher("raja", 30, "delhi", "india", ["dbms", "c++"]);

console.log(p1.role());
console.log(s1.role());
console.log(t1.role());
