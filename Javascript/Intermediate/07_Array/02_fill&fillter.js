/* -------------------------------------------notes------------------------------------------
1. fill function.  syntax: fill(value, place(optional start place to finish place))
        - fill is a function comes to fill every array value to given fill value.
        - you can specify where you want to add via index but index start with 1.
2. filter function. syntax : filter(callback)
        return every validation
------------------------------------------------------------------------------------------------------*/

// // example 1
// var testArray = [2, 4, 3, 4, 5, 32, 3, ]
// console.log(testArray.fill('h', 1, 5));

// example 2
const myNumber = [23, 22, 1, 2, 55, 64, 75, 2, 1, 6, 9];
const result = myNumber.filter(num => num > 50);
const lessThen = myNumber.filter(num => num < 55);



console.log(result);
console.log(lessThen());
