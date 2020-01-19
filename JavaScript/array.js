var generatedArray = new Array('Altuve', 'Correa', 'Spring');
generatedArray;


var literalArray = [1, 2, 3, 'Altuve', 'Correa', 'Spring'];

literalArray;

console.log(literalArray.length);


var mixedArray = ['Hi', 1, ['y', 'o', 'u'], { name: 'Ryley' }, function greeting() { console.log('Hey There'); }];

mixedArray;


console.log(literalArray[3]);

var playerName = literalArray[4];
console.log(playerName);


console.log(mixedArray[2][1]);

console.log(mixedArray[3].name);

mixedArray[4]();


var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

console.log(arr.length);

// Remove at the end of the array
arr.pop();

arr.push('Baggwell');

var elementPopped = arr.pop();

// Remove and insert at the beginning of the array

arr.shift();

arr.unshift('Kyle');

console.log(arr);
console.log(elementPopped);

// Remove anywhere in the array first argument = index, second argument = how many items
var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.splice(2, 1);
console.log(arr);

// Find the index of an element
var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');

arr.splice(foundElement, 1); // Returns ['Correa'] as a one element array. To call functions on it you must specify the index of your element
console.log(arr);

arr.splice(1, 2);

console.log(foundElement);
console.log(arr);