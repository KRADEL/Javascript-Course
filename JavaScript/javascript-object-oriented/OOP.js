class Instructor {
    constructor({ name }) {
        this.name = name;
    }
}

const ryley = new Instructor({ name: 'Ryley Arnold' });
console.log(ryley.name)

class Account {
    constructor({username, password}) {
        this.username = username;
        this.password = password;
    }
}

const user = new Account({username: 'KRADEL', password: 'secret'});
console.log(user);