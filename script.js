const person = {
  firstName: "Rajnish",
  lastName: "Gupta",
  age: 26,
  location: "Noida",
  skills: ["HTML", "CSS", "JS", "React", "Node"],
  isMarried: false,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  "phone number": "+917703018388",
  title: "teacher",
};
person.country = "India";
person.getPersonInfo = function () {
  let fullName = this.getFullName();
  let skills = this.skills.slice(0, this.skills.length - 1).join(", ");
  return `${fullName} is a ${this.title}. \nHe lives in ${this.location}. \nHe ${this.title} ${skills} and ${this.skills[this.skills.length - 1]}`;
};

console.log(person.hasOwnProperty("age"));
