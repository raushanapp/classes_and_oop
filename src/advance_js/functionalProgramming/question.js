//  funcrion 
//  Amazon shopping 
const user = {
    name: "Ajay",
    active: true,
    cart: [],
    purchases: [],
};

//  Implement the cart features
//  1. Add item to carts
// 2. Add 3% tax to item in cart
// 3. Buy item : cart ===>  purchases
//  4. Empty cart

//  Bouns :
//  Accept refunds.
//  Track user History.

//  no have the side effects that is called pure function return a function 
//  pure function 
//  functional programming one word called Idempotence

function notGood(num) {
    return Math.random(num)
}
function smaeThings(arg) {
    return arg
}
notGood(5);
smaeThings("Hello");
// ==> Imperative and declerative
//  Immutability
const obj = { name: "Ajay" };
function clone(obj) {
    return { ...obj }; // this is pure 
};

//  create a copay not mutating a object 
function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = "Vineet";
    return obj2;
}

console.log(obj, updateName(obj));

//  HOF
const hof = (fun) => fun(5);
hof(function (x) { return x });
// closure

const closure = () => {
    const count = 0;
    return function increment() {
        count++;
        return count;
    };
}
const increment = closure();
increment(); // 1 we can use data hiding and do not mutate the data
increment(); // 2
//  currying ;
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(4)(5); // the answser should be 20; 
const curriedMultiplyBy5 = curriedMultiply(5);
// 10 years later
curriedMultiplyBy5(4)
curriedMultiplyBy5(4)
curriedMultiplyBy5(4)

//  Partial Application  a procces of producening a function a smaller number of function
const partMultiply = (a, b, c) => a * b * c;
const partialMultiplyBy = multiply.bind(null, 5);
partialMultiplyBy(4, 10); // 200

//  Dynamic Programming 
//  Memoization ~~~~ Caching;
function addTo80(n){
    return n;
}
function memoizedAddTo80() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log("Long time's")
            cache[n] = n + 80;
            return cache[n];
        };
    };
};

const memoized = memoizedAddTo80();
console.log(memoized(5));
console.log(memoized(6));

//  Compose
const compose = (f, g) => (data) => f(g(data)); // right to lfet
const pipe = (f, g) => (data) => g(f(data)); // left to right
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyByAndAbsolute = compose(multiplyBy3, makePositive);
multiplyByAndAbsolute(-50); // 150
const pipeMultiplyBy4 = pipe(multiply, makePositive);
console.log(pipeMultiplyBy4(-60));
//  Pipe

//  f1(fn2(fn3(-50)));
compose(f1, Float32Array, f3)(-50); // this compse do like this go right to left 
pipe(f3, f2, f1)(-50); // left to right

//  arity it simply means number of argument take function 

