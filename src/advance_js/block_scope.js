function loop() {
    for (var i = 0; i < 5; i++){  // if i use here var insated of let then give me error reference error
        console.log(i)
    }
    console.log("final",i)
}
loop()
    

//  global  variable 
// IIFE
// (function () {
    
// })();
//  this is another way to create a functin
// (function () {
    
// }())
//  this keyword
//  this is the object that the function is a property of means
// ==> this keyword gives methods acess to their object
const user = {
    name: "Ajay",
    sing: function () {
        return "lalal" + this.name;
    },
    singAgain: function () {
        return this.sing() + "!";
    },
}
let result = user.singAgain();
// console.log(result);

//  this keyword execute same code for multiple objects
function importantPerson() {
    console.log(this.name + "!!");
}
const name = "Sunny";
const obej1 = {
    name: "Cassy",
    importantPerson: importantPerson,
};
const obej2 = {
    name: "Jacob",
    importantPerson: importantPerson,
};
// importantPerson();
// obej1.importantPerson();

//  another example  first example  dynamic scope and lexical scope
const a = function () {
    console.log("a",this);
    const b = function () {
        console.log("b",this);
        const c = {
            hi: function () {
                console.log("c",this);
            }
        }
        c.hi();
    };
    b();
};
// a();  another second example code

const anotehrObj = {
    name: "Vineet",
    sing() {
        console.log("sing A", this);
        var anotherFunc = function () {
            console.log("another Function", this); // this keyword refer to window how gone solved this problem let see below 
        };
        anotherFunc();
    },

};

// anotehrObj.sing(); 
const fxiedAnotherFunc = {
    name: "Vineet Fixed",
    sing() {
        console.log("Sing Fnc Fixed", this);
        const fixAnotherFnc = () => { // arrow function have a lexical bind so that why not refering to window directly
            console.log("Arrow Function", this);
        };
        fixAnotherFnc();
    },
};
fxiedAnotherFunc.sing();
//  anothe way to solving 
const withoutArrowFunOb = {
    name: "Vineet Without",
    sing() {
        console.log("Without Arrow Func", this);
        var withoutArrowFnc = function () {
            console.log("with Arrow function used solving with using return", this);
        };
        return withoutArrowFnc.bind(this);
    },
};
withoutArrowFunOb.sing();
//  reference maintain solve 
const referObj = {
    name: "Vineet Maintain",
    sing:function() {
        console.log("sing refe", this);
        var self = this;
        var referFunc = function () {
            console.log("reference Func", self);
        };
        return referFunc;
    },
};

referObj.sing()();


