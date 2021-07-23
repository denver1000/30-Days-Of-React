const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "React",
      "Node",
      "Express",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//Find the person who has many skills in the users object.
let manyskills = 0;
let name123;

Object.keys(users).forEach((key) => {
  if (manyskills < users[key].skills.length) {
    manyskills = users[key].skills.length;
    name123 = key;
  }
});
console.log(name123, manyskills);

//Count logged in users,count users having greater than equal to 50 points from the following object.
let loggedIn = 0;
Object.keys(users).forEach((key) => {
  if (users[key].isLoggedIn == true) {
    loggedIn = loggedIn + 1;
  }
});
console.log(loggedIn);

let morepoints = 0;
Object.keys(users).forEach((key) => {
  if (users[key].points >= 50) {
    morepoints = morepoints + 1;
  }
});
console.log(morepoints);

//Find people who are MERN stack developer from the users object

Object.keys(users).forEach((key) => {
  if (
    // A little bit slow I guess
    users[key].skills.indexOf("MongoDB") &&
    users[key].skills.indexOf("React") &&
    users[key].skills.indexOf("Node") &&
    users[key].skills.indexOf("Express") >= 0
  ) {
    console.log(key);
  }
});

//Set your name in the users object without modifying the original users object

let newUsers = Object.assign({}, users);
// Not sure what exactly he wants
newUsers.Denis = {
  email: "denis@denis.com",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "React", "Node", "Express"],
  age: 25,
  isLoggedIn: false,
  points: 40,
};
console.log(newUsers);

//Get all keys or properties of users object
console.log(Object.keys(newUsers));
//Get all the values of users object
console.log(Object.values(newUsers));
//Use the countries object to print a country name, capital, populations and languages.
//Countries object???
