function SetUserName(userName) {
  //  complex db call
  this.userName = userName;
  console.log("called");
}

function createUser(userName, email, password) {
  SetUserName.call(this, userName);
  this.email = email;
  this.password = password;
}

const newUser = new createUser("Raushan", "sraushan", "paswword123");
console.log(newUser);
