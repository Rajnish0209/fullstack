let person1 = {
  firstName: "rajnish",
  lastName: "gupta",
  getInfo: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
let person2 = {
  firstName: "raja",
  lastName: "gupta",
  getInfo: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
let person3 = {
  firstName: "raj",
  lastName: "gupta",
  getInfo: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person1, person2, person3);

console.log(person1.getInfo(), person2.getInfo(), person3.getInfo());

// class Person {
//   constructor(firstName, lastName) {
//     console.log(this);
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// let person1 = new Person("rajnish", "gupta");
// console.log(person1);
