let count = 0;

function divide(a, b) {
  if (b === 0) {
    count++;
    throw `${count} Division by zero is now allowed`;
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.log(err);
  try {
    console.log(divide(10, 0));
  } catch (err) {
    console.log(err);
    try {
      console.log(divide(10, 0));
    } catch (err) {
      console.log(err);
      try {
        console.log(divide(10, 0));
      } catch (err) {
        console.log(err);
      }
    }
  }
} finally {
  console.log("run");
}
