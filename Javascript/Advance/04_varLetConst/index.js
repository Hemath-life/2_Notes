/*------------[  Notes  ]----------

    1. Yes , scope is a big issue in JS  
        _{} and Function

    2. what's the use of let ?
        _  You can use var variable before declaring  the var variable.
        _ if you don't want  that you can use let .
        _ if call let variable before declaring the let it gonna give error.
        _ the let scope inside the loop and conditions



  2. What's var ?
        _ var we can use eventhought the scope was over


*/

// console.log(name);
// var name = "Hemath "

// if (1) {
//     var lastName = "Kumar"
// }
// console.log(lastName);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

hem()

function hem() {
    // globel variable
  a = 10
 console.log(a);
}
console.log(a);