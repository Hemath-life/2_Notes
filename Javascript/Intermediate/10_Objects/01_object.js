/*-------------------------------------------Notes-----------------------------------------------
1. Objects as a key value pairs are called properties.
    - flexibly to work.
    - optimized compare to array.
2. console.table(user) o show output in table.
---------------------------------------------------------------------------------------------*/

// example 1
var user = {
    firstName: 'Good',
    lastName: 'Bad',
    role: 'admin',
    loginNumber: 32,
}
console.log(user);
console.log(user['firstName']);
console.log(user.firstName)

user.loginNumber = 55;
console.table(user)
