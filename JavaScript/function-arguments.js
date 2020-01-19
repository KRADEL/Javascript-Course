// Function arguments/paramaters

function fullName(firstName, lastName) { //Must pass parameters to the arguments
    return lastName.toUpperCase() + ", " + firstName.toUpperCase();
}

console.log(fullName('ryley', 'arnold'));

// ---------------------------------------------------------
function sample(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}

console.log(sample()) //Does not throw an error, but does not actually work!!!


// --------------------------------------------------------
function fullNameTwo(firstName, lastName, language) {
    var language = language || 'English'; //  || = Or
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullNameTwo('ryley', 'arnold'));