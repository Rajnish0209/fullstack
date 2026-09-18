function isPrime(num) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % 2 == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    return "prime";
  } else {
    return "not prime";
  }
}

console.log(isPrime(4));
