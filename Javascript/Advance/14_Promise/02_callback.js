/* -----------------------------------notes-------------------------------------
1 . callback function. which gonna send as a parameters and which runs later on
if some trigger happened.
2. when make callback nested it'll lead to the call back held and hard to understand
for the programer.

*/

/* ------------------------------Problem:---------------------------------
   1. login user using email and password . then your get  user videos
*/

/*----------------------------------
         1. answer
*/

// // 1.1.normal sync style code here can't use
// console.log("Start");
// function loginUser(email, password) {
//  assume here getting data form either  server or  database.
//      setTimeout(() => {
//           return "login success";
//      }, 1500);
// }
// const user = loginUser("hemath@gmail.com", 12345);
// console.log(user);
// console.log("Finish");

// // 1.2.async style code here can't use
function loginUser(email, password, callback) {
     //  assume here getting data form either  server or  database.
     setTimeout(() => {
          callback({
               Status: "login success",
               Email: email,
               Password: password
          });
     }, 100);
}

function getUserVideos(email, callback) {
     //  assume here getting data form either  server or  database it'll take time.
     setTimeout(() => {
          callback(["Birthday", "Family"]);
     }, 100);
}

function videoDetails(email, callback) {
     //  assume here getting data form either  server or  database it'll take time.
     setTimeout(() => {
          callback({
               Birthday: "Birthday party,2gb",
               Family: "family party,5gb"
          });
     }, 100);
}

const user = loginUser("hemath@gmail.com", 12345, user => {
     console.table(user);
     getUserVideos(user.Email, data => {
          console.table(data);
          videoDetails(data[0], details => {
               console.table(details);
          });
     });
});