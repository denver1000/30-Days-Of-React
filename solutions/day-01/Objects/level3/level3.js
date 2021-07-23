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

let users = [
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

//Imagine you are getting the above users collection from a MongoDB database.
//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
//b. Create a function called signIn which allows user to sign in to the application

function signUp(newuserid, newusername, newuserpassword, newuseremail) {
  let exists = false;
  Object.keys(users).forEach((key) => {
    if (users[key]._id == newuserid) {
      return (exists = true);
    }
  });
  if (exists == false) {
    users.push({
      _id: `${newuserid}`,
      username: `${newusername}`,
      email: `${newuseremail}`,
      password: `${newuserpassword}`,
      createdAt: Date.now(),
      isLoggedIn: false,
    });
    console.log(users);
  } else {
    return console.log("Nope");
  }
}

function signIn(username, password) {
  Object.keys(users).forEach((key) => {
    if (users[key].username == username && users[key].password == password) {
      users[key].isLoggedIn = true;
      console.log(users[key]);
    }
  });
}
signUp("ghde123rc", "Gets", "233", "gets@lol.ru");
signIn("Gets", "233");
