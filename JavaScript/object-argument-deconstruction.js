const user = {
    name: 'Ryley',
    email: 'email@devcamp.com'
}

const renderUser = ({ name, email }) => {
    console.log(`${name}: ${email}`);
}

renderUser(user);