// // example: 1
// // if you wanna destructors this
// var color = ["#25454", "#95849"]
// var [red, blue] = color;
// console.log(`red: ${red} blue: ${blue}`);



// // example: 2
// var color = {
//     // red: "#25454",
//     blue: "#95849"
// }
// var { red: good = "no value", blue } = color;
// console.log(`red: ${good} blue: ${blue}`);



// // example: 3
// var color = [
//     red = {
//         hvalue: "#25454",
//         rgb: "10,1,2",
//         addi: {
//             utf: "kjhdfskfhas"
//         }
//     },
//     blue = {
//         hvalue: "#25454",
//         rgb: "12,43,13",
//     }
// ]
// var [{ hvalue, rgb } = { utf }, { hvalue, rgb }] = color;
// console.table(`red: ${hvalue + " " + rgb} blue: ${hvalue + " " + rgb}`);


var name = [
    person1 = {
        name: "charli",
        age: 12,
        num: [5, 3, 10, 22]
    },
    person2 = {
        name: "arun",
        nickname: {
            home: "hello",
            collage: "buddy"
        },
        age: 30,
        num: [5, 3, 10, 22]
    }
]

var [{ num: [a1, a2, a3] }, { nickname: { home: jusitn } },] = name
console.table(a2)
// console.table(nickname)  err
// console.table(home)  err
console.table(jusitn)
// console.log(num) err
