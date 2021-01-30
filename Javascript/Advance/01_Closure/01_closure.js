/* -----------------------------------notes-------------------------------------

1. The reference is available in outside the parent function won't be delete
    example: init()() closure.
2. init()()()() curring which is same closure

*/
// // example:1
// function init() {
//     var firsName = 'hitesh';
//     console.log("init running");
//     function sayFirstName() {
//         console.log(firsName);
//     }
//     return sayFirstName
// }
// var value = init()()
// var value = init()
// console.log(value);
// value()



// // example:2
// function doAddition(x) {
//     return function (y) {
//         return x + y
//     }
// }
// var add = doAddition(4)
// console.log(add(5));
// // closer
// console.log(doAddition(4)(5));


// example: 2
// function doAddition(x) {
//     return function (y) {
//         return x + y
//     }
// }
// var add = doAddition(4)
// console.log(add(5));
// // closer
// console.log(doAddition(4)(5));