//  call function
function a() {
  console.log("Hey");
}
a.call();
const wizard = {
  name: "Ajay Karkede",
  health: 50,
  heal(a, b) {
    return (this.health += a + b);
  },
};
const archer = {
  name: "Robin Hood",
  health: 30,
};
// console.log("1", archer);
wizard.heal.call(archer, 40, 30); // call take parameters, parameters  comma sperated
// console.log("2", archer);
wizard.heal.apply(archer, [10, 55,]); // apply take array of parameters  this is only difference between  call and apply;
// console.log("3", archer);
let healArcher = wizard.heal.bind(archer, 100, 25); // take just like call  parameter and retrun as function not call imdiatelly call so you call later when ever you need that
healArcher();
// console.log("4", archer);
//  Note ===> call and apply useful for browroning methods from objects  and bind useful calling a function later like certain context

// function currying
function multiply(a, b) {
  return a * b;
}

// let multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(6));
// let multiplyByTen = multiply.bind(this, 10);
// console.log(multiplyByTen(5));

//  function currying 

function multipleByTwo(a, b) {
  return a * b;
}

let two = multipleByTwo.bind(this, 2);
console.log(two(4));
// let ten = multipleByTen.bind(this, 10);
// console.log(ten(5));

//  exerice 
var b = {
  name: "Nitin",
  say() { console.log("B", this) },
};

var c = {
  name: "Anand",
  say() { return function () { console.log("c", this) } },
};

var d = {
  name: "Ajay",
  say() { return () => console.log("D", this) },
};

d.say()();
