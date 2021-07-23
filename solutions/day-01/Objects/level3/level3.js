// Create an object literal called personAccount.
//It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense
//and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
  firstname: "John",
  lastname: "Doe",
  incomes: {
    job: 20,
    street: 40,
  },
  expenses: {
    house: 20,
    marriage: 50,
  },
  totalincome: function () {
    let total = 0;
    total = Object.values(personAccount.incomes).reduce(
      (acc, rec) => acc + rec
    );
    return console.log(total);
  },
  totalExpense: function () {
    let total = 0;
    total = Object.values(personAccount.expenses).reduce(
      (acc, rec) => acc + rec
    );
    return console.log(total);
  },
  accountInfo: function () {
    return console.log(personAccount.firstname, personAccount.lastname);
  },
  addIncome: function (name, cost) {
    personAccount.incomes[name] = cost;
    return console.log(personAccount.incomes);
  },
  addExpense: function (name, cost) {
    personAccount.expenses[name] = cost;
    return console.log(personAccount.expenses);
  },
  accountBalance: function () {
    let Balance;
    Balance =
      Object.values(personAccount.incomes).reduce((acc, rec) => acc + rec) -
      Object.values(personAccount.expenses).reduce((acc, rec) => acc + rec);
    return console.log(Balance);
  },
};
personAccount.totalincome();
personAccount.totalExpense();
personAccount.accountInfo();
personAccount.addIncome("Mint", 30);
personAccount.addExpense("Mint2", 40);
personAccount.accountBalance();
