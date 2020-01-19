// Fetch only brings the promise back(promise object), you have to tell js what to do with the object
// Use fetch in the console***
console.log('Starting Fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts')
console.log('After Fetch call');
console.log(postsPromise);
console.log('After program has run');

postsPromise
    .then(data => data.json())
    .then(data => {
        data.posts.forEach((item) => {
            console.log(item.title);
        });
    })
    .catch((err) => {
        console.log(err);
    });