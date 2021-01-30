/**                 notes
1 . spread and REST operator syntax same but it changes where you are you used.
2. Spread operator 
    _ example : 1
    _ example:2
        - convert the array to the acceptable value for the function
        _ take array value and spread it
*/



// // example :1
// var name = [10, 1, 20, 31, 22, 14, 15, 17]
// var fullName = [...name]
// console.log(fullName);
// var name = {
//     name: "Hemath",
//     fullName: "Kumar"
// }
// var fullName = {
//     ...name
// }
// console.log(fullName);



// // example:2
// function sumOne(a, b) {
//     return a + b
// }
// var a = [1, 3]
// console.log(sumOne(...a));


// example:3
function sumOne(a, b, ...arg) {
    sum = a + b
    console.log((arg));
    for (const val of arg) {
        sum += val
    }
    return sum
}
a = [1, 1, 5, 5, 5,]
console.log(sumOne(...a));