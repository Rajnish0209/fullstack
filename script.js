const rectangle = {
  length: 20,
  width: 10,
};

// const calculateParameter = (rect) => {
//   return 2 * (rect.length + rect.width);
// };

const calculateParameter = ({ length, width }) => {
  return 2 * (length + width);
};

console.log(calculateParameter(rectangle));

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 25,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

// const getPersonInfo = (person) => {
//   const skills = person.skills;
//   const languages = person.languages;
//   const skillsFormate = skills.slice(0, -1).join(", ");
//   const langusagesFormate = languages.slice(0, -1).join(", ");

//   let info = `${person.firstName} ${person.lastName} lives in ${person.country}. He is ${person.age} years old. He is a ${person.job}. He teaches ${skillsFormate} and ${skills[skills.length - 1]}. He speaks ${langusagesFormate} and a little bit of ${languages[languages.length - 1]}`;
//   return info;
// };

const getPersonInfo = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  const skill = skills;
  const language = languages;
  const skillsFormate = skills.slice(0, -1).join(", ");
  const langusagesFormate = languages.slice(0, -1).join(", ");

  let info = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is a ${job}. He teaches ${skillsFormate} and ${skill[skill.length - 1]}. He speaks ${langusagesFormate} and a little bit of ${language[language.length - 1]}`;
  return info;
};

console.log(getPersonInfo(person));
