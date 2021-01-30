/*------------------------------------------------------------------------------------------
1. ƒ Object()
    - here the f means functional object or function objet.
2. new if you want to create object in function way you must use new keyword.
    - invoking the constrictor.
    - creating new unique object.
    - new copy of the entire object will create.
    - this seems to be regular call but new keyword  
3. prototype
        - adding the property on existing object using the prototype.
        - like injecting
        - new keyword finding the injecting all property and add on while creating object.
4. object we can say instances.
*/


// // example: 1
// // protoType or blue print
// // creating Objects via functional way .
// // ƒ Object()
// var User = function (firstName, courseCount,) {
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