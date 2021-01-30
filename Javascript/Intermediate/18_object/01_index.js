/*------------------------------------------------------------------------------------------
1. object creation we have lot of types 

*/


// example:1
var User = {
    name: "",
    ge: function
        () {
        console.log("object one");
    }
}
var hitesh = Object.create(User)
hitesh.ge()
