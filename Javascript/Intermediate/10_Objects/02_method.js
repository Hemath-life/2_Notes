/*-------------------------------------------Notes----------------------------------------
1. Object method.
2. this is used to refer same object property.

---------------------------------------------------------------------------------------------*/
// example 1

var user = {
    firstName: 'Good',
    lastName: 'Bad',
    role: 'admin',
    loginNumber: 32,
    courseList: [],
    buyCourse: function (courseName) {
        console.log('This is user object function')
        this.courseList.push(courseName)
    },
    getCourseList: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`
    },
}
console.log(user.getCourseList());
user.buyCourse("React JS course");
user.buyCourse("Angular JS course");
console.log(user.getCourseList());