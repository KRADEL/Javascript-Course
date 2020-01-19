const getAverage = arr => {

    const reducer = (total, currentValue) => total + currentValue
    const sum = arr.reduce(reducer);

    return sum / arr.length;
}

getAverage([1, 2, 3, 4, 5]);

console.log(getAverage([1, 2, 3, 4, 5]))