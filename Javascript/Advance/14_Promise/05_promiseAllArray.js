/* -----------------------------------notes-------------------------------------
1. all promise must return resolve or reject itell then promise. all wiate for each 
fucntion retun then print result in array.

*/



const youtube = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('found match video on Youtube')
    }, 1100);
})

const facebook = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('found match video on Facebook')
    }, 100);
})

const Instagram = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('found match video on Instagram')
    }, 2100);
})

const Twitter = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Finned match video on Twitter')
        // reject("I god Problem on a Twitter ")
    }, 100);
})

Promise.all([youtube, Instagram, facebook, Twitter]).then(result => {
    console.table(result);
}).catch(err => {
    console.log(err)
})