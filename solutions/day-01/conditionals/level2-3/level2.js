//1.Write a code which can give grades to students according to theirs scores
let score = 43;
switch (true) {
  case score <= 49:
    console.log("F");
    break;
  case score <= 59:
    console.log("D");
    break;
  case score <= 69:
    console.log("C");
    break;
  case score <= 89:
    console.log("B");
    break;
  case score <= 100:
    console.log("A");
    break;
}
//2. Check if the season is Autumn, Winter, Spring or Summer.
let month = prompt("Enter month").toLowerCase();
console.log(month);
switch (true) {
  case month == "september" || "november" || "october":
    console.log("Autumn");
    break;
  case month == "december" || "january" || "february":
    console.log("Winter");
    break;
  case month == "march" || "april" || "may":
    console.log("Spring");
    break;
  case month == "june" || "july" || "august":
    console.log("Spring");
    break;
  default:
    console.log("not a month");
    break;
}
//3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("Enter day").toLowerCase();
console.log(day);
switch (true) {
  case day === "saturday" || "sunday":
    console.log(`${day} is a weekend`);
    break;
  case day === "monday" || "tuesday" || "wednesday" || "thursday" || "friday":
    console.log(`${day} is a workday`);
    break;
  default:
    console.log("not a day");
    break;
}
