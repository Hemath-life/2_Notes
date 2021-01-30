/* ------------------------ [ notes ] ---------------------------------
1. class like a blue print
          - if you not create constructor it create own constructor it self.
          - in class we don't need to specify the (var,let,const) keywords while creating the variable      =  [ :) ]
2. private variables getter and setters
          - getter is allows to get variable data using functions , getting data
          - setting the data
          -  #courseList = []; which means private variable  you can't access directly but you can access via class members                    =  [ :) ]


*/

class User {
          // u can declear like this 1
          // name = ""
          // email = ""
          constructor(name, email) {
                    // directly u cn create name email here as well

                    this.name = name;
                    this.email = email
          }
          #courseList = [];
          // create a function 
          getInfo() {
                    return { name: this.name, email: this.email }
          }
          enrollCourse(name) {
                    return this.courseList.push(name)
          }
          getCourseList() {
                    return this.courseList;
          }
          login() {
                    return "You are logged in"
          }  
}

module.exports = User