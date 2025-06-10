"use strict"
function marry(person1, person2) {
    console.log("arguments", arguments)
    console.log(Array.from(arguments))
}

marry("Ajay", "Vineet")

function marry2(...args) {
    console.log("args", args)
    console.log(Array.from(args))
}

marry("Ajay","Vineet")
marry2("Ajay", "Rohan")

//  this arguments and many execution context 
//  is Called variable environment
//  let say i have created two functions

function two() {
    var isValid; // undefined
}
function one() {
    var isValid = true  // local environmrnt and variable env
    two(); // new EC
}

var isValid = false;
one();
//  this is called Execution stack 
//  two(); => undefined;
//  one() =>  true
//  global()=> false;

//  reference some where have memory heap
function magic() {
    return x = 1, [], {}; // javascript expression left to right 
};

console.log(magic())

//  Scope chain
//  all these function have global lexical environment
//  all these function have some link is called scope chain, scope chain link these are have access to all function access
//  all these function have own variable environment 
//  is called  scope and static scope;
//  In javascript our lexical scope (available data + variables where the function was defined)
//  determines our available variables. Not where the function is called (dynamic scope)

var x = "x";

function findName() {
    console.log(x)
    var b = "b";
    return printName();
};

function printName() {
    var c = "c";
    return "Ajay Vineet";
};

function sayName() {
    var a = "a";
    return findName();
};

let ans = sayName();
console.log(ans);

//  rin lexical 

function sayNames() {
    var a = "a";
    return function findName() {
        var b = "b";
        // console.log(c)
        return function printName() {
            var c = "c";
            return "Vineet Ajay DevOp"
        }
    }
};

let res = sayNames()()()
console.log(res)

//  function Lexical Environment above example is called all lexical environment
//  Lexical Environment === [[Scope]]

//  exercie

function werid() {
    // height = 50; // i have to declear var or let const because if we are top our use strict getting reference error height is define that why javascrit behave some time werid
    var height=50 // now error gone as soon as declear as variable
    return height;

}

let w = werid();
// console.log(w)

//  let creating a anothe example for 

var heyhey = function doodle() {
    //  do some thing
    //  doodle function acces only here not global excuetion context
    return "heyhey";
}

let d = heyhey() // give me result like this heyhey
// console.log(d);
//  if directly call doodle then getting error reference error  doodle is not defined
doodle()

// Function Are Objects 
//  three way of invok a function 
//  first 
function one() {
    return 1;
};
//  second way;
one();
const obj = {
    //  ES6 way 
    twos() {
        return 2
    },
    two: function () {
        return 2;
    }
}
obj.two()
//  three 
function three() {
    return 3;
};

three.call();

//  another way 
const four = new Function("num", "return num");
four(4);
//  Function are first class citizens in JS
// 1
var stuff = function () { };
// 2
function a(fn) {
    fn();
};
a(function () { console.log("Hi There") });
//  3

function b() {
    return function c() { console.log("Bye!") };
}
b()();

//  careful initialize function inside the loop
function inittest(){}
for (let i = 0; i < 5; i++){
    // function inittest() { };  // insated of initial inside loop move to out side loop because every time loop runs first initalize then execute the function till i value is 5 then stop 
    inittest()
}