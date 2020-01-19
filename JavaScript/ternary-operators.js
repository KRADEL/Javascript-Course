// function ageVerification(age) {
//     if (age > 25) {
//         console.log('can rent a car');
//     } else {
//         console.log('is not old enough');
//     }
//     let answer = age > 25 ? 'can rent a car' : "can't rent a car";
//     console.log(answer);
// }


// ageVerification(55)

 let response = user ? user.admin ? "showing admin controls..." : "you need to be an admin" : "you need to be logged in";
 console.log(response);

function adminControl(user) {
    if (user) {
        if (user.admin) {
            console.log('showing admin controls');
        } else {
            console.log('you need to be an admin');
        }
    } else {
        console.log('you need to be logged in');
    }
}

let userOne = {
    name: 'Jordan',
    admin: 'True'
}

adminControls(userOne);

let userTwo = {
    name: 'Ryley',
    admin: 'False'
}

adminControls(userTwo);

let userThree = null

adminControls(userThree);