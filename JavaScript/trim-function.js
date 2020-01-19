// const str = '    good content    ';
// str.trim();

// let arr = ['ughhh', 'good', 'good one', 'ughhh'];
// const removeElements = arr => {
//     return arr.slice(1, -1)
// }

// console.log(removeElements([1, 2, 3]))


const removeFirstAndLast = arr => {
    if (arr.length >= 3) {
        return arr.slice(1, -1);
    } else {
        throw new Error ("You need at least 3 items in the array");
    }
}


console.log(removeFirstAndLast([1, 2, 3, 4, 5]));
console.log(removeFirstAndLast(['A', 'B', 'C', 'D']));
console.log(removeFirstAndLast([1, 2]));