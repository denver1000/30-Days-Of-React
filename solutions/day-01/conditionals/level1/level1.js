//1.Get user input using prompt(“Enter your age:”).
//If user is 18 or older , give feedback:'You are old enough to drive'
//but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("Enter your age");
age >= 18
  ? console.log("You are old enough to drive")
  : console.log(`You are left with ${18 - age} years to drive`);

//2. Compare the values of myAge and yourAge using if … else.
//Based on the comparison and log the result to console stating who is older (me or you).
//Use prompt(“Enter your age:”) to get the age as input.

let myAge = 15;
let yourAge = prompt("Enter your age");

switch (true) {
  case myAge > yourAge:
    console.log(`I am ${myAge - yourAge} years older than you`);
    break;
  case myAge < yourAge:
    console.log(`You are ${yourAge - myAge} years older than me`);
    break;
  case myAge == yourAge:
    console.log("We are both the same age");
    break;
  default:
    console.log("Not a number");
}

//3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways using if else and ternary operator.
let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt("Enter a number");
number % 2 == 0
  ? console.log(`${number} is even number`)
  : console.log(`${number} is an odd number`);
