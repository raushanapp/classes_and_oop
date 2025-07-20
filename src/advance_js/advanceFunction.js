function first() {
    var greet = "Hi";
    const second=()=> {
        alert(greet);
    }
    return second;
}
var newFnc = first();
newFnc();
// Closure ---> a function ran. the function executed. It's never going to execute again.
// But it's going remember that there are references to those variables.
//  so the child scope always has access to the parent scope.

//  Currying
const multiply = (a, b) => a * b;
const curriedMultiplye = (a) => (b) => a * b;
curriedMultiplye(3)(4);

//  Compose function run through right to left;

const compose = (f, g) => (a) => (f(g(a))); // first run this function (5) then second one g function means sum function a take paramere six then retuen 8
// f function 8 as parameter then call again sum function return 10 answers is Ten; 
const sum = (sum) => sum + 2;
compose(sum, sum)(6);

// Avoiding side effects functional purity, means Determinstic what ever take the input always retrun the same value or things that is call function purity 
// example 

var a = 4;
function newSum() {
    a = 8;
    //  this is called global violations because we are effect the funciton world and also global world
}

// ---> New Array;

const array = [1, 2, 6, 10, 12];
const doubled = [];
const newArray = array.forEach((item) => {doubled.push(item * 2)});
// console.log(doubled);
//  map filter reducer;
//  Map
const mapArray = array.map((num) => num * 2);
// console.log(mapArray);
//  filter 
const filterArray = array.filter((num) => num > 5); // 6,10,12;

// reduce accumulator means what happen inside of reudce body accumulator remember all thing  and accumulator have default value called zero
const reduceArray = array.reduce((accumulator, num) => accumulator + num,0);
console.log(reduceArray)
