// Variable-mutable
var

// Immutable
let

// Check for data type
typeof 12;

// Return integer
parseInt('33.5')
    33

    // Return decimal
parseFloat('33.5')
    33.5

    // String to number
Number('100')

// String-find position
str.charAt(2)

// Combine-assign new variable
str.concat('again and again')

// Find something in string
str.includes('find it')

// Starts and Ends with
str.startsWith() str.endsWith()

// Match a regular expression
str.match()

// Repeat
str.repeat()

// Grab part of a string
str.slice()

// SLice and trim space from a string
str.slice().trim()

// Upper and Lower case
str.toUpperCase str.toLowerCase

// Numbers-operators
2 + 2; // 4

2 - 2; // 0

2 / 2; // 1

2 * 10; // 20

5 % 2; // 1

10 % 2; // 0

8 % 2; // 0

2 ** 10; // 1024

var num = 2;

num++; // 2

++num; // 4

num; // 4

num--; // 4

num; // 3

--num; // 2

var someNum = 10;

var someOtherNum = -someNum;

someOtherNum; // -10

var strNum = '100';

var convertedNum = + strNum;

convertedNum; // 100

// Compound assignment operators

var name = 'Tiffany';

var sum = 0;

var gradeOne = 100;

var gradeTwo = 80;

sum += gradeOne; // 100

sum; // 100

sum += gradeTwo; // 180

sum *= gradeTwo; // 14400

// Order of operations

Paranthesis
Exponents
Multiplication //Or>
Division
Addition
Subtraction

// Conditionals

var age = 10;
var ageTwo = '12';

if (age === ageTwo) {
  console.log('They are equal');
}

if (age !== ageTwo) {
  console.log('Not equal');
}

if (age >= 25) {
  console.log('Old enough to rent a car');
}

if (age <= 10) {
  console.log('You can eat from the kid menu');
}

// If Else Conditional

var age = 30;

if (age <= 10) {
  console.log('You can eat from the kid menu');
} else {
  console.log('Adult menu time for you');
}

// Compound conditional

var age = 30;

if (age <= 10) {
  console.log("You can eat from the kid's menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 16 && age < 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are old enough to rent a car");
}

// Switch statement

var dataPoint = {};

switch (typeof dataPoint) {
  case "string":
    console.log("It's a string");
    break;
  case "number":
    console.log("It's a number");
    break;
  case "boolean":
    console.log("It's a boolean");
    break;
  default:
    console.log('No matches');
}

// 