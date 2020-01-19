var someUser = {
    name: 'Ryley'
}

function nameFormatter(user) { //Changes the object
    return user.name = 'Oops';
}

console.log(nameFormatter(someUser));

console.log(someUser);


// -------------------------------------------
var someName = 'Jordan';

function otherNameFormatter(name) { //Does not change the object value
    return name = 'Oops';
}

console.log(otherNameFormatter(someName));

console.log(someName);