/*------------------------------------------------------------------------------------------
1. ƒ Object()
    - here the f means functional object or function objet.
2. new if you want to create object in function way you must use new keyword.
    - invoking the constrictor.
    - creating new unique object.
    - new copy of the entire object will create.
    - this seems to be regular call but new keyword  saYS THAT'S FOR OBJECT.
    - with out new the entire code look like normal function  call and the function  inside this will look window object or global vairable
3. prototype
        - adding the property on existing object using the prototype.
        - like injecting
        - new keyword finding the injecting all property and add on while creating object.
4. object we can say instances.
5. what's does New Keyword ?
    - The new keyword constructs and returns an object (instance) of a constructor function. 
    -The new keyword performs following four tasks: It creates new empty object e.g. obj = { }; 
    - It sets new empty object's invisible 'prototype' property to be the constructor function's visible and accessible 'prototype' property.
    - new Keyword is responsible for manage all the method and property combine two gether . why here using prototype 
     will add lot method all are going to manage by new Keyword
*/


// // example: 1
// // protoType or blue print
// // creating Objects via functional way .
// // ƒ Object()
// var User = function (firstName, courseCount,) {
// this.firstName this is one of the way of creating Object
//     this.firstName = firstName,
//         this.courseCount = courseCount,
//         this.getCourseCount = function () {
//             console.log(`Course count is: ${this.courseCount}`)
//         }
// }
// var hem = new User('Hemath', 2)
// // here if you not specify the new keyword  (User function)there this keyword represents the  global object
// // new specify this not regular function call
// // console.log(hem);

// example: 2
// adding the property on existing object.
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
hem.getFirstname()