/* -----------------------------------notes-------------------------------------
1. Object should be have minimum one function.
    - Some property add to object . in js everything is object .
    - some property attached the method inside the object.
        here you can find "bind"
2. Bind

3. Bellow the method 
    - here bind the comes.

4. "this" give reference to the object property.
    - inside the hem object 'this' represent  not hem but the dj to achive thise here use: bind:.
    - bind  gives the reference.


*/

const hem = {
    firstName: 'Hemath',
    lastName: "Justin",
    role: "Admin",
    getInfo: function () {
        console.log(`
        first name is ${this.firstName}  
        last name is ${this.lastName}     
        role is ${this.role} 
                `);
    }
}

const dj = {
    firstName: "Good morning",
    lastName: "Dj",
    role: 'Admis'
}

// var djInfo = hem.getInfo.bind(dj);
// console.log(djInfo);
// console.log(hem.getInfo);

var djInfo = hem.getInfo.bind(dj)(); // this give reference.
var djInfo = hem.getInfo.call(dj)// directly call that.