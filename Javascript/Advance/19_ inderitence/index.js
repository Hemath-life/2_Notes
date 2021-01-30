class Admin {
          constructor(name, email) {
                    this.name = name
                    this.email = email
          }
          static getUserInfo(email) {
                    return `name ${this.name} email ${this.email}`
          }
          get(email) {
                    return `name ${this.name} email ${this.email}`
          }
}



class SubAdmin extends Admin {
          constructor(name, email) {
                    super(name, email);
          }
          getSubAdmin() {
                    super.get()
                    return ` I'm Sub Admin `
          }
}


const user = new SubAdmin("Justin", "Justin@gmail.com")
console.log(user.getSubAdmin());
