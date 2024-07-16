class User {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    console.log(`UserName is ${this.userName}`);
  }
}
class Teacher extends User {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added ${this.userName}`);
  }
}

const testUser = new Teacher("Pablo Panedy", "pablo@gamail.com", "pablo12324");
testUser.addCourse();

const testUser2 = new User("Pablo G");
testUser2.logMe();
console.log(testUser === testUser2);
console.log(testUser instanceof User);
