// Scope
//  Root Scope (Window)
var fun = 5; // this is called naming conflict
function funFunction() {
    // child scope
    fun = "haahahah";
    console.log(fun);
}
function funerFunction() {
    fun = "ooohhhhaaaa";
    console.log(fun);
}
function funestFunction() {
    fun = "AHAHAHAHA";
    console.log(fun);
}
function funVaribale() {
    console.log("Window",fun)
}

//  ternariy operator
// condition ? exp : exp1;
//  example 
function isUservalid(bool) {
    return bool;
}
var anser = isUservalid(true) ? "may you eneter" : "Access Denied";
var automatedAnswer = "Your accounts # is" + isUservalid(true) ? "1234" : "Not available";
function conditon() {
    if (isUservalid(true)) {
        return "May you enter";
    } else {
        return "Access Denied"
    }
}
//  Switch statement if you are using multiple if else if else many time then used switch case
function moveCommand(direction) {
    var whatHappen;
    switch (direction) {
        case "forward": {
            whatHappen = "you encounter a monster";
            break;
        }case "back": {
            whatHappen = "you are arrived Home";
            break;
        } case "right": {
            whatHappen = "you found a river";
            break;
        } case "left": {
            whatHappen = "you run into a troll";
            break;
        } default: {
            whatHappen = "Please enter a valid direction";
        }
    }
    return whatHappen;
}
var ans = moveCommand("back");
// console.log("game Board", ans);
// ES6 and JS 
//  Destructuring

const obj = {
    name: "Ajay",
    age: 29,
    gender:"male",
}

const obj2 = obj;// you can not do like this is const can not re-assign again given syntax error is can not assign 
const { name, age, genere } = obj; // user any where of your in this file  this is detructure 
//  Object properties or dynamic properties assign
const names = "Jhon snow";

const objeName = {
    [name]: "hello",
    [1+2]:"hihi",
}



const a = "Simon";
const b = true;
const c = {};

const newWay = {
    a: a,
    b: b,
    c:c,
}
//  if properties and value are same do like this
const way = { a, b, c };
//  Template String;
//  before template string we are doing like this
const greeting = "Hello" + name + "you seem to be doing some things" + b;
const nameSa = "Sally";
const ages = 34;
const pet ="Dog"
const greetingBest = `Hello ${nameSa} you seem to be ${ages - 10}. What`;
//  default arguments

function greet(name = "", age = 30, pet = "Cat") {
    return `Hello ${name} you seem to be ${age-5}.Waht a lovely ${cat}`
}
greet("Vineet", 29, "Monkey");
// Symbol 
let symbol1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo")
sym2 === sym3;

//  arrow function 
const add = (a, b) => a + b;
