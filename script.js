let personAccount = {
  firstName: "Rajnish",
  lastName: "Gupta",
  balance: 0,
  incomes: 0,
  expenses: 0,
  totalIncome: function () {
    return this.incomes;
  },
  totalExpense: function () {
    return this.expenses;
  },
  accountInfo: function () {
    return `Name = ${this.firstName} ${this.lastName}\nTotal balance ${this.balance}`;
  },
  addIncome: function (amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      return "invalid income";
    }
  },
  addExpense: function (amount) {
    if (amount > 0) {
      this.balance -= amount;
    } else {
      return "invalid expense";
    }
  },
  accountBalance: function () {
    return this.balance;
  },
};

console.log(personAccount);
