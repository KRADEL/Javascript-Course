// ONLY WORKS FOR SHALLOW OBJECTS
// WILL NOT WORK FOR DEEP/NESTED OBJECTS
// FOR DEEP OBJECTS USE the Lodash library

const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            return false;
        }
    }

    return true;
};


const obj1 = {
    name: 'Ryley',
    age: 25,
    favorites: {
        food: 'Pizza'
    }
}

const obj2 = {
    name: 'Ryley',
    age: 25,
    favorites: {
        food: 'Pizza'
    }
}


console.log(isEqual(obj1, obj2));