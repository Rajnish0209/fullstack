let user1 = {
  name: "rajnish",
  age: 26,
  subject: ["HTML", "CSS", "JS", "NODE"],
  score: [12, 10, 11, 14],
  location: "noida",
  country: "india",
  getInfo() {
    let allSkills = this.subject.slice(0, this.subject.length - 1).join(", ");
    let totalScore = this.score.reduce((acc, cur) => acc + cur, 0);
    return `${this.name} is ${this.age} year old. He lives in ${this.location}, ${this.country}. He knows ${allSkills} and ${this.allSkills[this.allSkills.length - 1]} and his total score is ${totalScore}`;
  },
};

console.log(user1.getInfo());
