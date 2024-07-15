// let myName = "Raushan  ";
// let lastName = "kumar   ";
// console.log(myName.length);

const { log } = require("console");

let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};
Object.prototype.raushan = function () {
  console.log(`Raushan  is paresent all objects`);
};

Array.prototype.heRaushan = function () {
  console.log(`Hey Raushan Power`);
};
// heroPower.raushan();

// myHero.raushan();
// myHero.heRaushan();
// heroPower.heRaushan();

// inheritance
const User = {
  userName: "Raushan",
  email: "sraushan890@gmail.com",
};

const Teacher = {
  makeVideos: true,
};
const TeachingSupport = {
  isAviable: false,
};

const TASupport = {
  makeAssignmemt: "Js Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
// Teacher.__proto__ = User;
Object.setPrototypeOf(TeachingSupport, Teacher);
// console.log(TeachingSupport.makeVideos);

let anotherUserName = "tink   ";

String.prototype.trueLength = function () {
  console.log(`is Correct length this ${this}`);
  console.log(`is true length ${this.trim().length}`);
};
anotherUserName.trueLength();

"Raushan".trueLength();
