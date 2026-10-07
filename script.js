class User {
  constructor(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
    this.balance = 0;
  }
  getInfo() {
    return `${this.name} is ${this.age} old. He lives in ${this.city}, ${this.country}.`;
  }
}

let user1 = new User("Rajnish", 28, "Noida", "India");

let user2 = new User("Raja", 30, "Noida", "India");

console.log(user1.getInfo());
console.log(user2.getInfo());

console.log(user1.balance);
console.log(user2.balance);
