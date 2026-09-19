let personAccount = {
  firstName: "Rajnish",
  lastName: "Gupta",
  incomes: [
    { description: "salary", amount: 4000 },
    { description: "freelancer", amount: 800 },
  ],
  expenses: [
    { description: "rent", amount: 1200 },
    { description: "groceries", amount: 450 },
  ],
  totalIncome: function () {
    return this.incomes.reduce((sum, income) => sum + income.amount, 0);
  },
  totalExpense: function () {
    return this.expenses.reduce((sum, expenses) => sum + expenses.amount, 0);
  },
  accountInfo: function () {
    return `Name = ${this.firstName} ${this.lastName}\nTotal income ${this.totalIncome()}\nTotal expense ${this.totalExpense()}\nTotal balance ${this.accountBalance()}`;
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description: description, amount: amount });
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description: description, amount: amount });
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

personAccount.addExpense("cab", 500);
console.log(personAccount.accountInfo());
