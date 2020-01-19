// // Declartation
// function greeting() {
//     return 'Hi There';
// }

// // Expression
// var greetingTwo = function() {
//     return 'Hi There Again';
// };

// console.log(greeting());
// console.log(greetingTwo());

var age = 3;

function buildMenuTwo() { //Declarations must be placed outside of code block {}
    return "Another Kid's Menu";
}

if (age <= 10) {
    var buildMenu = function() { //Expressions can be used inside the code block {}
        return "Kid's Menu";
    };

    console.log(buildMenu());
    console.log(buildMenuTwo());
}