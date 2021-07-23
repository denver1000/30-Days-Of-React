//1. Create an empty object called dog
//2. Print the the dog object on the console
let dog = {};
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Skippy";
dog.legs = 4;
dog.color = "Blue";
dog.age = "21";
dog.bark = function () {
  return "Woof Woof";
};

//Get name, legs, color, age and bark value from the dog object
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());
//Set new properties the dog object: breed, getDogInfo
dog.breed = "0";
dog.getDogInfo = function () {
  return console.log(
    dog.name,
    dog.legs,
    dog.color,
    dog.age,
    dog.bark(),
    dog.breed
  );
};
dog.getDogInfo();
