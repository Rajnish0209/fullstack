const usersText = `
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  }`;

const usersObj = JSON.parse(usersText, (key, value) => {
  return { key, value };
});

console.log(usersObj);
