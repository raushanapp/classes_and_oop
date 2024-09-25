function woohooo() {
  console.log("woohoo");
}

woohooo.yell = "ahhhhhhhh";
// this below written code example is under the hood of javascripts engine
// const specialObject = {
//     yell: "ahhhhhhhh",
//     name: "woohoo",
//     ():console.log("woohooo")
// }
//  Function are first class citizens in JS
//1
var satff = function () {};
// 2
function a(fn) {
  fn();
}
a(function () {
  console.log("Hi there");
});

// 3 can return the function and pass as argument
function b() {
  return function c() {
    console.log("Bve");
  };
}
var d = b();
d();
//  higher order function , function , simple function
function letAdamLogin() {
  let array = [];
  for (let i = 0; i < 100000000; i++) {
    array.push(i);
  }
  return "Access granted to Adam";
}
function letEvaLogin() {
  let array = [];
  for (let i = 0; i < 100000000; i++) {
    array.push(i);
  }
  return "Access granted to Eva";
}
letAdamLogin();
letEvaLogin();
//  generic function
const giveAccessTo = (name) => "Access Granted to " + name;

function authenticate(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}

// function letUserLogin(user) {
//   // ++ we now tell  what DATA to use
//   let array = [];
//   for (let i = 0; i < 100000000; i++) {
//     array.push(i);
//   }
//   return giveAccessTo(user);
// }
// function letAdminLogin(user) {
//   let array = [];
//   for (let i = 0; i < 500000000; i++) {
//     array.push(i);
//   }
//   return giveAccessTo(user);
// }
function sing(person) {
  return "lal lal lal" + person.name;
}
function letPerson(person, fn) {
  // ++  tell it what data to user + function to authenticate
  if (person.level === "admin") {
    return fn(person);
  } else if (person.level === "user") {
    return fn(person);
  }
}
let res = letPerson({ level: "admin", name: "Ajay" }, authenticate);
letPerson({ level: "admin", name: "Ajay" }, sing);
console.log(res);

const multiplyBy = (num1) => (num2) => num1 * num2;
// let multiplyByTwo = multiplyBy(2);
// multiplyByTwo(6);
multiplyBy(2)(6);
//  this end of higher order function
