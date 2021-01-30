/*------------------------------------------------------------------------------------------
1. Lexical scoping is a classical way of writing javascript .
*/


function init() {
    var firstName = "hemath"
    function syafirstName() {
        console.log(firstName)
    }
    syafirstName()
}

// console.log(firstName);
var nnn = init()
console.log(nnn);