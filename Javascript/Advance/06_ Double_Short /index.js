/*-----------------------------notes-----------------------

1. !! used for convert falsy value to true or false
 1.  double shorts
 2. to convert falsy value to false value  
    _ depones on the  our logic the falsy value will change false or true 
    _ falsy is not a false and not a true
    _ falsy is 0 or null
    _ to convert exact "boolen" we can use 
*/


const name = "Hemath"
const full = null

if (name) {
    console.log(`Im good ${name}`);
}

if (!!full) {
    console.log(`Im good ${full}`);
}

const age = 1
// const hasAge = new Boolean("age")
// const hasAge = Boolean("age")
const hasAge = !!age

console.log(hasAge);