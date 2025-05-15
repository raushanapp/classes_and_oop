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