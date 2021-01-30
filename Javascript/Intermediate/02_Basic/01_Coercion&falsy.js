/*---------------------------------------------------notes---------------------------------------
1. falsy values are: any variable or any other values are falsy. it's gonna treated as a false.
    -  null_ empty
    - nan- not a number.
    - undefined _undefined that
    - '  '
    - ""
    - 0
2. truthy values are everything apart from falsy values.
3. Coercion -- it gonna convert '1' and 1 convert to 11. and it doesn't care about it datatype it see only the value.
*/


// example 1
// var a=""
// if (a) console.log('Good Job')
// else console.log('Bad Job');


// example 2
var a="sting"
if (a) console.log('Good Job')
else console.log('Bad Job');


// example 3
var a="1"
if (a=1) console.log('Good Job')
else console.log('Bad Job');

