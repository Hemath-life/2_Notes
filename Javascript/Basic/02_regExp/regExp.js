var name = " How are you  abc c ?"
var valid = /abc/
console.log(valid.test(name))

// Using special characters
var name = " How are you  abcccf ?"
var valid = /abc*f/
console.log(valid.test(name))