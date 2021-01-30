/* ------------------------------Problem:---------------------------------
1. login user using email and password.Then your get  user video list and check 
    videos details list.what else if the login failure.

/*---------------------------------------------------------------------------
         1. answer
*/

function loginUser(email, password) {
     return new Promise((resolve, reject) => {
          //  assume here getting data form either  server or  database.
          setTimeout(() => {
               if (email == 'admin' && password == 'admin') {
                    resolve({
                         Status: 1,
                         Email: email,
                         Password: password
                    });
               } else {
                    reject('Check your email and password')
               }
          }, 100);
     })
}


function getUserVideos(status) {
     return new Promise((resolve, reject) => {
          //  assume here getting data form either  server or  database it'll take time.
          setTimeout(() => {
               if (status == 1) {
                    resolve(["1", "2"]);
               } else {
                    reject("Your status code is Wrong")
               }
          }, 100);
     })
}

function videoDetails(name) {
     return new Promise((resolve, reject) => {
          //  assume here getting data form either  server or  database it'll take time.
          setTimeout(() => {
               if (name == 1) {
                    resolve({
                         name: 'Birthday party',
                         size: '20 gb',
                         data: '12/01/2019'
                    })
               } else if (name == 2) {
                    resolve({
                         name: 'Sorts day',
                         size: '100 gb',
                         data: '10/03/2020'
                    })
               } else {
                    reject('status code is wrong')
               }
          }, 100);
     })
}


email = 'admin'
password = 'admin'


loginUser(email, password)
.then(data => { getUserVideos(data.Status)
.then(name => {videoDetails(name[1])
.then(details => {console.table(details); })
.catch(err => {console.table(`video name not match${err}`);})})
.catch(err => {console.table(`check Your status code ${err}`);})})
.catch(err => {console.table(`login err ${err}`);})


