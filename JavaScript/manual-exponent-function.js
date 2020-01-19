//toThePowerOf(2, 3) => 8
//reduce

const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    return items.reduce(reducer);
}


console.log(toThePowerOf(2, 3));
console.log(toThePowerOf(12, 16));
console.log(toThePowerOf(10, 120));