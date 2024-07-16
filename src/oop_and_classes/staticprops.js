class User {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    console.log(`User is ${this.userName}`);
  }
  static createId() {
    return `123456`;
  }
}
const id = new User("Pabalo");
// console.log(id.createId());

class Student extends User {
  constructor(userName, email) {
    super(userName);
    this.email = email;
  }
}

const pandey = new Student("pbalo", "pablo@123");
pandey.logMe();
