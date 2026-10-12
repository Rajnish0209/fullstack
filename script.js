class PersonAccount {
  #balance = 0;
  #incomes = [];
  #expenses = [];
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  addIncome(obj) {
    this.#incomes.push(obj);
    this.#balance += obj.amount;
  }
  addExpense(obj) {
    if (this.#balance <= 0 || this.#balance - obj.amount < 0)
      console.log("insufficient balance");
    else {
      this.#expenses.push(obj);
      this.#balance -= obj.amount;
    }
  }
  totalIncome() {
    return this.#incomes.reduce((acc, ele) => acc + ele.amount, 0);
  }
  totalExpense() {
    return this.#expenses.reduce((acc, ele) => acc + ele.amount, 0);
  }
  accountInfo() {
    return `${this.firstName} ${this.lastName} have ${this.#balance} rupees`;
  }
  accountBalance() {
    return this.#balance;
  }
}

let p1 = new PersonAccount("rajnish", "gupta");
p1.addIncome({ amount: 1000, description: "freelance" });
p1.addIncome({ amount: 500, description: "trading" });
p1.addExpense({ amount: 500, description: "rent" });
p1.addExpense({ amount: 999, description: "cab" });
console.log(p1);
console.log(p1.totalIncome());
console.log(p1.totalExpense());
console.log(p1.accountInfo());
console.log(p1.accountBalance());
