// constructor() {
//     this.handleClick = handleClick.bind(this);
// }

const userOne = {
    firstName: 'Ryley',
    lastName: 'Arnold'
}

const userTwo = {
    firstName: 'Jordan',
    lastName: 'Arnold'
}

// cannot use an arrow function b/c arrow function changes the scope of this keyword(this will only look into the fullName variable)
const fullName = function() {
    return `${this.lastName}, ${this.firstName}`;
}

const ryley = fullName.bind(userOne);
const jordan = fullName.bind(userTwo);

console.log(ryley());
console.log(jordan());