/*-------------------------------------------Notes---------------------------------------

1. while 
2. do-while : runs at lest once even the condition is fails.

****************************************************/



const myState = ['Tamil Nadu', 'Goa', 'Delhi', 1234, 'Rajasthan']
let i = 0

// example: 1
// while (i < myState.length) {
//     console.log(myState[i]);
//     i++
// }

// example: 2
do {
    console.log(myState[i]);
    i++
} while (i< myState.length)
