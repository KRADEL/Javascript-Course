// FUNCTION DECLERATION
// function fullName(fName, lName) {
//     console.log(`${fName} ${lName}`)
// }

// fullName('Ryley', 'Arnold');


// FUNCTION EXPRESSION(ANONYMOUS)
// fullName = function (fName, lName) {
//     console.log(`${fName} ${lName}`)
// }

// fullName('Ryley', 'Arnold');


// ARROW FUNCTION
helloWorld = () => { console.log("Hi There"); }
helloWorld();

// Single argument arrow with a function
firstName = firstName => { console.log(firstName.toUpperCase()); }
firstName('Jordan');

// Multiple argument arrow
fullName = (fName, lName) => {
    console.log(`${fName} ${lName}`);    
}
fullName('Ryley', 'Arnold');