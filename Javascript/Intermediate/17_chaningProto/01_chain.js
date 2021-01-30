/* -----------------------------------------notes---------------------------------------------
1. what's does New Keyword ?
    - The new keyword constructs and returns an object (instance) of a constructor function. 
    -The new keyword performs following four tasks: It creates new empty object e.g. obj = { }; 
    - It sets new empty object's invisible 'prototype' property to be the constructor function's visible and accessible 'prototype' property.
    - new Keyword is responsible for manage all the method and property combine two gether . why here using prototype 
     will add lot method all are going to manage by new Keyword
2. if i call this. first name but the variable name is firstnameeee  this is error but in javascript not error it's just a undefined.
3. Every property being ascend to you in javascript like length. if you wanna see look at the console  and try it.
4. in Javascript every thing is a object.
5. automatically the proto in your code .

*/




// // example: 1
// var User = function (firstName, courseCount,) {
// why we use this. this is the another way of creating Object
//     this.firstName = firstName,
//         this.courseCount = courseCount,
//         this.getCourseCount = function () {
//             console.log(`Course count is: ${this.courseCount}`)
//         }
// }
// User.prototype.getFirstname = function () {
//     console.log(`Your first name : ${this.firstNamee}`)
// }
// const hem = new User("Justin", 30)
// hem.getFirstname()





// example: 2
var User = function (firstName, courseCount,) {
    this.firstName = firstName,
        this.courseCount = courseCount,
        this.getCourseCount = function () {
            console.log(`Course count is: ${this.courseCount}`)
        }
}
User.prototype.getFirstname = function () {
    console.log(`Your first name : ${this.firstName}`)
}
const hem = new User("Justin", 30)

if (hem.hasOwnProperty("getCourseCount")) {
    hem.getFirstname()
}