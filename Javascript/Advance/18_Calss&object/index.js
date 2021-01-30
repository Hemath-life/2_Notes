// import User from "./calss"
const User = require("./calss")

const Hemath = new User("Hemath", "Jusitn")

console.log(Hemath.getInfo())

Hemath.enrollCourse("Hemath")
Hemath.enrollCourse("angular")
Hemath.enrollCourse("god thth")
console.table(Hemath.getCourseList());
