//  ES6

class Users {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}avjs`;
  }
  changeUser() {
    return this.userName;
  }
}
const firstUser = new Users("Raushan", "sraushsan123@gmail.com", "sdomebvank");
const secondtUser = new Users("Pablo", "sraushsan123@gmail.com", "sdomebvank");

console.log(firstUser.encryptPassword());
console.log(secondtUser.changeUser());

//  behind the scene

function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}acvvs`;
};
User.prototype.changeUserName = function () {
  return this.userName.toUpperCase();
};

const thirdUser = new User("pandey", "sraushsan123@gmail.com", "sdomebvank");
const fourUser = new User("Pablo", "sraushsan123@gmail.com", "sdomebvank");

console.log(thirdUser.encryptPassword());
console.log(fourUser.changeUserName());
