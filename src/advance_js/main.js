//  hosting
console.log("======= 1=====");
sing();
//  this is called function expression
var sing2 = function () {
  console.log(OOOOHHHHH);
};
//  this is called function decleartion
function sing() {
  console.log("LAlalalall");
}
//  duringhosting
//  going to
one = undefined;
var one = 1;
var one = 2;
console.log(one);
//  function
//  hostion a()=undefined
a();
function a() {
  console.log("hi");
}
function a() {
  console.log("Bye!");
}
//  another quest related hosting
var favouriteFood = undefined;
var foodThoughts = undefined;

var favouriteFood = "Dal Roti";
var foodThoughts = function () {
  var favouriteFood = undefined;
  console.log("Original favourites food: " + favouriteFood);
  favouriteFood = "sushi"; // insdide function same name variable not define then javascripts engine to global excutions state
  console.log("New favourites Food :" + favouriteFood);
};
foodThoughts();
//  Function Expression
var canada = function () {
  console.log("Cold");
};
//  Function Declaration
function india() {
  console.log(arguments); // {} empty object
  console.log("warm");
}
//  Function  Invocation/call/Execution
canada();
india();

function marry(person1, person2) {
  console.log("arguments", argurments); // {0:pablo,1:pandey}
  console.log(Array.from(arguments)); // ["pablo","pandey"]
  return `${person1} is now marry to ${person2}`;
}
marry("pablo", "pandey");
function marry2(...args) {
  console.log("arguments", args); // {0:pablo,1:pandey}
  console.log(Array.from(arguments)); // ["pablo","pandey"]
  return `${args[0]} is now marry to ${args[1]}`;
}
marry2("pablo", "pandey");
// argurments // it dengers to use as global context  only use to during function creation time

// variable environment

function two() {
  var isValid; // this remain undefined
}

function one() {
  var isValid = true; // Local environment
  two(); // new EC
}
var isValid = false;
one();

//  below this called stack
//  two() -- undefined
//  one() -- true
//  global()  -- false

// <=== scope chain ===>
var x = "x";
function findName() {
  var b = "b";
  return printName();
}
function printName() {
  var c = "c";
  return "Raushan Kumar";
}

function sayMyName() {
  var a = "a";
  return findName();
}

sayMyName();
// sayMyName
// x
//  global EC
//  global lexical environment

//  same thing but rin by lexical

function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    return function printName() {
      var c = "c";
      console.log(a); // scope chain
      return "Raushan Kumar";
    };
  };
}
//  global scope outer scope can access any things else
sayMyName()()(); // Function lexical environment

//  Lexical Environment===[[scope]]

// exerice
//  this is called leak of varibale and goes define to the global variable
//  and if want not weird behave use use strict

function weird() {
  height = 40;
  return height;
}
weird();

var heyhey = function doodble() {
  //  do something
  doodble(); // this write way to call
  return "hey hey";
};
heyhey();
doodble(); // this given refernce error this different EC and different environment

//  function scope
//  vs
//  block scope

// IIFE
(function () {})();

//  this
//  1 gives methods acess to their  object
//  2 execute same code the multiple object
const obj = {
  name: "veronic",
  // sing: function () {
  //   return "lallalala" + this.name;
  // },
  sing() {
    return "lallalala" + this.name;
  },
  singAgain() {
    return this.sing() + "!";
  },
};
obj.singAgain();
//  exerice function test
const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};
a();

const objTest = {
  name: "Raushan",
  sing() {
    console.log("a", this);
    var anotherFunc = function () {
      console.log("B", this);
    };
    anotherFunc();
  },
};
const objTest4 = {
  name: "Raushan",
  sing() {
    console.log("a", this);
    var anotherFunc = function () {
      console.log("B", this);
    };
    //  to resolve this keyword to not referring windows and refer to object where i decelar
    return anotherFunc.bind(this);
  },
};
objTest.sing()();
const objTest2 = {
  name: "Raushan",
  sing() {
    console.log("a", this);
    var self = this;
    var anotherFunc = function () {
      console.log("B", self);
    };
    //  to resolve this keyword to not referring windows and refer to object where i decelar
    return anotherFunc;
  },
};

objTest2.sing();
