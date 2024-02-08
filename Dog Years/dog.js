// My age
let myAge = 19;

// Early years in number
let earlyYears = 2;
earlyYears *= 10.5;

// Creating the laterYears variable
let laterYears = (myAge -= 2);

// calculating the number of dog years accounted for by my 4 later years
laterYears *= 4;

// calculating my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// console.log(`Early Years: ${earlyYears} and Later Years: ${laterYears}`)

// my name in lowercase
const myName = "David".toLocaleLowerCase();
console.log(myName);

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
