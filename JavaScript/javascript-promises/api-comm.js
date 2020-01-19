let sleepyGreeting = new Promise((resolve, reject) => {
    setTimeout (() => {
        resolve('Hello...')
    }, 2000);

    setTimeout(() => {
        reject(Error('Too sleepy...'))
    }, 2000);
});

sleepyGreeting
    .then(data => { //Data is whatever happens when the promise returns...Then is mapped to resolve
        console.log(data);
    })
    .catch(err => { //Catch is mapped to reject
        console.error(err);
    });