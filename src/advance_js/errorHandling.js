//  how to handle async and promisess
Promise.resolve("asyncfail").then((response) => {
    throw new Error("#1 Fail");
    return response;
}).then((res) => console.log(res))
    .catch((error) => { throw new Error("#2") })
    .then((resp) => console.log(resp.message))
    .catch((error) => console.log("fanl Error", error));

//  handle async await
(async function() {
    try {
        await Promise.reject("!OOpse");
    } catch (error) {
        console.log(error);
    }
    console.log("is This still good") 
})();

//  Extending Errror

class AuthenticationError extends Error{
    constructor(message) {
        super(message);
        this.name = "authenticationError";
        this.favouriteSanck = "Apple";
    }
};
// throw new authenticationError("Oopse!!!");
const err = new AuthenticationError("Oopse!!!");
// console.log(err.favouriteSanck)

class DatabaseError extends Error{
    constructor(message) {
        super(message);
        this.name = "authenticationError";
        this.favouriteSanck = "Apple";
    }
}

class PermissionError extends Error{
    constructor(message) {
        super(message);
        this.name = "authenticationError";
        this.favouriteSanck = "Apple";
    }
}

const a = new PermissionError("Permission!!!");
console.log(a instanceof PermissionError)