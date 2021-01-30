/*-------------------------------------------Notes---------------------------------------

1. for in and for of.
    - one wll use majorly in array one will majorly in object.
    - for of for array .
    - for in for object - it's gonna gives us to keys..

****************************************************/
// const names = ['facebook','twitter','you']
// // example: 1
// for (const  n of names){
//     console.log(n);
// }

// // // example: 2
// const symbol = {
//      yt: 'Youtube',
//      ig: 'instagrame',
//      fb: 'facebook',
// };
// for (const n in symbol) {
//      console.log(n);
// }

// // example: 3
const symbol = {
     yt: 'Youtube',
     ig: 'instagrame',
     fb: 'facebook',
};
for (const n in symbol) {
     console.log(`key is:${n} value is: ${symbol[n]}`);
}
