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
let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log("Long time's")
        cache[n] = n + 80;
        return cache[n];
    };
};
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));

