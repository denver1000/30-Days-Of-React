//The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] -

//- Find the range of the ages(max minus min) -
//Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//Sort the array and find the min and max age
//Dunno what they min by "find" since after sort min and max is first and last element
console.log(ages.sort());
console.log(ages[0]);
console.log(ages[ages.length - 1]);
//Find the median age(one middle item or two middle items divided by two)
console.log("Median");
console.log(ages[Math.floor(ages.length / 2)]);
console.log(ages[Math.floor(ages.length / 2) - 1]);
if (ages.length % 2 === 0) {
  console.log(
    (ages[Math.floor(ages.length / 2)] +
      ages[Math.floor(ages.length / 2) - 1]) /
      2
  );
} else {
  ages[Math.floor(ages.length / 2)] / 2;
}
//Find the average age(all items divided by number of items)
