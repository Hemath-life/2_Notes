/* ---------------------------------------------------notes------------------------------------------------
1. arrow function some time don't have return key word.
     -  if your want to avoid return code your must write one line code that should be without cerybrases.
2.array.every function check each and "every element" as true based on 
   your condition if one array value fails enter output will be false.
3. callback function you can use where you don't want functions references.
-------------------------------------------------------------------------------------------------------------------*/

// // example 1
// function isEven(element) {
//     if (element % 2 == 0) return true
//     return false
// }
// console.log(isEven(3));

// // example 2
// function isEven(element) {
//     return element % 2 === 0
// }
// console.log(isEven(4));


// // example 3
// const isEven = (element) => {
//    return element % 2 === 0
// }
// console.log(isEven(4));


// //example 4
// var result=[1,2,3,4,5,4,3].every(isEven)
// console.log(result);

//example 5
// siding Reference on example 4 program you can write callback function
// var result=[1,2,3,4,5,4,3].every((element)=>{
//    return element % 2 === 0
// })
// console.log(result);

//example 5
// // siding Reference on example 4 program u can write callback function
// var result=[1,2,3,4,5,4,3].every((element)=> element % 2 === 0)
//  console.log(result);
 
 //example 6
 // siding Reference on example 4 program u can write callback function
var result=[1,2,3,4,5,4,3].every((element)=> (element % 2 === 0))
console.log(result);
