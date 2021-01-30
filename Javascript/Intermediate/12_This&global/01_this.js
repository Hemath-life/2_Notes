/*-------------------------------------------Notes---------------------------------------

1. what's this ?
    - for all regular function calls 'this' points to window object.
    - inside object only it represent the current object give.

****************************************************/

// example: 1 regular function
// console.log(this);
// function em() {
//      console.log(this);
// }
// em();



// // example: 2
// var user = {
//      firstName: 'hemath',
//      coruseCount: 4,
//      hem: function () {
//           console.log(this);
//      },
// };
// user.hem();



// example: 2
var user = {
     firstName: 'hemath',
     coruseCount: 4,
     hem: function () {
          console.log(this);
          //   regular function
          function inside() {
               console.log('inside function');
               console.log(this);
          }
          inside();
     },
};
user.hem();
