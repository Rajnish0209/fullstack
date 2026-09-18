const { use } = require("react");

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

function manySkills(obj) {
  let keys = Object.keys(obj);
  let maxLength = obj[`${keys[0]}`].skills.length;
  let idx = 0;
  for (let i = 1; i < keys.length; i++) {
    if (maxLength < obj[`${keys[i]}`].skills.length) {
      maxLength = obj[`${keys[i]}`].skills.length;
      idx = i;
    }
  }
  return keys[idx];
}

function count(obj) {
  let keys = Object.keys(obj);
  let count = 0;
  for (let i = 0; i < keys.length; i++) {
    if (obj[`${keys[i]}`].points >= 50) count++;
  }
  return count;
}

function getAllKeys(obj) {
  return Object.keys(obj);
}
function getAllValues(obj) {
  return Object.values(obj);
}

function mernDeveloper(obj) {
  let keys = Object.keys(obj);
  let mernDeveloper = [];
  for (let i = 0; i < keys.length; i++) {
    let skill = obj[`${keys[i]}`].skills;
    if (
      skill.indexOf("MongoDB") !== -1 &&
      skill.indexOf("Express") !== -1 &&
      skill.indexOf("React") !== -1 &&
      skill.indexOf("Node") !== -1
    ) {
      mernDeveloper.push(keys[i]);
    }
  }
  return mernDeveloper;
}

function addUser(obj, name, email, skills, age, isLoggedIN, points) {
  obj[`${name}`] = {
    email: email,
    skills: skills,
    age: age,
    isLoggedIN: isLoggedIN,
    points: points,
  };
}

addUser(
  users,
  "rajnish",
  "rajnishkumargupta331@gmail.com",
  ["html", "css", "js"],
  26,
  false,
  60,
);

console.log(users);
