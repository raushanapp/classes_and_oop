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