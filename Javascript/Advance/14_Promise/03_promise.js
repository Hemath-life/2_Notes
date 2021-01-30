/* ------------------------------Nots:---------------------------------
1. promise is a object in javascript it work like callback .
which perform async operation which gonna give us either resolve or reject
*/

/* ------------------------------Problem:---------------------------------
   1. login user using email and password . then your get  user videos.
   what else if the login failure .

 for this problem we have two solution call back and promise
   1. example call back.
   2. example promise.
*/

// // example 1:
// function loginUser(email, password, onSuccess, onFailure) {
//      UserLogin = true;
//      //  assume here getting data form either  server or  database.
//      setTimeout(() => {
//           if (UserLogin) onSuccess({ Status: "login success", Email: email, Password: password });
//           else onFailure("check your input data");
//      }, 100);
// }
// const user = loginUser(
//      "g@mail.come",
//      "12345",
//      data => {
//           console.log("login success", data);
//      },
//      err => {
//           console.log("login err", err);
//      }
// );

// example 2:
UserLogin = 1;
const user = new Promise((resolve, reject) => {
    //  assume here getting data form either  server or  database.
    setTimeout(() => {
        if (UserLogin) resolve('login success')
        else reject('error')
    })
})


user.then(data => {
    console.table(data);
}).catch(err => {
    console.table(err);
})