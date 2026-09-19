const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function idGenerator() {
  let char = "123456789abcdefghijklmnopqrstuvwxyz";
  let randChar = "";
  for (let i = 0; i < 6; i++) {
    randChar += char[Math.floor(Math.random() * char.length)];
  }
  return randChar;
}

function nowDateAndTime() {
  let now = new Date();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  return `${date}/${month}/${year} ${hour}:${minute} ${ampm}`;
}

function signUp(obj, username, email, password) {
  let user = {
    _id: idGenerator(),
    username: username,
    email: email,
    password: password,
    createdAt: nowDateAndTime(),
    isLoggedIn: false,
  };
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].username === username || obj[i].email === email) {
      return "user exists";
      break;
    }
  }
  obj.push(user);
  return "sign up successful";
}

function signIn() {}
