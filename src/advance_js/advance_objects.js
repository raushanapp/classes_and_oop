// refernce type
var object1 = { value: 10 };
var object2 = object1;  // object1===object2 is true 
var object3 = { value: 10 }; // but object3===object1 is flase value because refernce value is not same
// context vs Scope
function b() { // as soon as create function create a scope 
    let a = "scope variable";
};
//  this is keyword means when using this keyword looking into which we have so that this point to directly point to the  main window 
//  it has to be what object or function inside this keyword;
const object4 = {
    a: function () {
        console.log(this);
    }
}
// instatiation
class Player{
    constructor(name, type) {
        this.name = name;
        this.type = type;
    };
    introduce() {
        console.log(`I'M a ${this.name},I M a${this.type}`);
    }
};
class Wizard extends Player{
    constructor(name,type,) {
        super(name, type);
    };
    play() {
        console.log(`WEEEEE I'M a ${this.type}`);
    }
};
const wizard = new Wizard("Vinnet", "Devops Engineer");
