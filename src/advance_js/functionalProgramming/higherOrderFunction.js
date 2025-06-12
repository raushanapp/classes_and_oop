// function example here
function lateLoginUsers() {
    let array = [];
    for (let i = 0; i < 100000000; i++){
        array.push(i);
    };
    return "Access granted to Users"
}
console.log(lateLoginUsers());

// function lateLogin() {
//     let array = [];
//     for (let i = 0; i < 100000000; i++){
//         array.push(i);
//     };
//     return "Access granted to Users"
// }
// console.log(lateLogin());

const giveAccessTo = (name) => "Access Granted To" + name;
function letLoggedIn(user) {
    let arrays = [];
    for (let i = 0; i < 100000000; i++){
        arrays.push(i);
    };
    return giveAccessTo(user);
};

function letAdminLogin() {
     let arrays = [];
    for (let i = 0; i < 100000000; i++){
        arrays.push(i);
    };
    return giveAccessTo(user);
}
//  higher order function

function authenticate(verify) {
    let arrays = [];
    for (let i = 0; i < verify; i++){
        arrays.push(i);
    };
   return giveAccessTo(person.name);
}

function sing(person) {
    return "la lal sing===" + person.name
}

function letPerson(person, fn) {
    if (person.level === "admin") return fn(person);
    else if (person.level === "user") return  fn(person);
}

let res = letPerson({ level: "user", name: "Ajay" }, sing);
// console.log(res);

// Exercise
// const multiplyBy = function (num1) {
//     return function (num2) {
//         return num1 * num2;
//     }
// }

//  we can use here arrow function 
const multiplyBy = (num1) => (num2) => num1 * num2;

    
const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);
multiplyByTwo(5);
multiplyByFive(10)


