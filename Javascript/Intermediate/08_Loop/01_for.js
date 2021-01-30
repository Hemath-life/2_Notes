/*-------------------------------------------Notes---------------------------------------
1. for is used wanna do couple of things repetitively.
2. continue it gonna leave after continue keyword and start from loop.
3. break it gonna get-out from the loop  break keyword.
4. let scope is over automatically clear up the memory.
5. every {} inside the break and continue keyword will work.

****************************************************/



// // example 1
// for (let i = 1; i <= 10; i = i + 1) {
//     console.log(i);
// }


// // example 2
// const myState = ['Tamilnadu', 'Goa', 'Delhi', 1234, 'Rajasthan']
// for (let i = 0; i < myState.length; i++) {
//     console.log(myState[i]);
//     console.log(i);
// }


// // example 3
// const myState = ['Tamilnadu', 'Goa', 'Delhi', 1234, 'Rajasthan']
// for (let i = 0; i < myState.length; i++) {
//     if (typeof myState[i] !== "string") continue;
//     console.log(myState[i]);
// }



// example 4
// const myState = ['Tamil Nadu', 'Goa', 'Delhi', 1234, 'Rajasthan']
// for (let i = 0; i < myState.length; i++) {
//     if (typeof myState[i] !== "string") break;
//     console.log(myState[i]);
// }