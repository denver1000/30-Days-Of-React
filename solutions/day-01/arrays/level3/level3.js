//1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] -

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
//Find the average age(all items divided by number of items).
//Dunno how to solve it withoud reduce/etc
const sum = ages.reduce((acc, cur) => acc + cur) / ages.length;
console.log(sum);
//- Find the range of the ages(max minus min) -
console.log(ages[ages.length - 1] - ages[0]);
//Compare the value of (min - average) and (max - average), use abs() method
const minaverage = Math.abs(ages[0] - sum);
const maxaverage = Math.abs(ages[ages.length - 1] - sum);
console.log(minaverage, maxaverage);
minaverage > maxaverage && minaverage != maxaverage
  ? console.log("minaverage is bigger")
  : console.log("maxaverage is equal");

//2.Find the middle country(ies) in the countries array
//3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
console.log(countries.length);
console.log(countries);
if (countries.length % 2 === 0) {
  let arr1 = countries.slice(0, countries.length / 2);
  let arr2 = countries.slice(countries.length / 2, countries.length);
  console.log(arr1, arr2);
} else {
  let arr1 = countries.slice(0, countries.length / 2 + 1);
  let arr2 = countries.slice(countries.length / 2 + 1, countries.length);
  console.log(arr1, arr2);
}
