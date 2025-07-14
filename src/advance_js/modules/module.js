//  what are modules
// global scope
//  module scope
//  function scope 
//  Block scope ---> let and const

// IIFE
//  Module pattern
var globleScretes = "Vinnet";
var fightModule = (function (globleScretes) {
    var harry = "Potter";
    var voldemort = "He who must not be named";
    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.lenght);
        var attack2 = Math.floor(Math.random() * char2.lenght);
        return attack1 > attack2 ? `${char1} Wins` : `${char2} Wins`;
    }
    globleScretes = "Ajay";
    console.log(fight(harry, voldemort,globleScretes));
    return { fight: fight };
})(globleScretes);

var fightModule1 = (function () {
    var harry = "Potter";
    var voldemort = "He who must not be named";
    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.lenght);
        var attack2 = Math.floor(Math.random() * char2.lenght);
        return attack1 > attack2 ? `${char1} Wins` : `${char2} Wins`;
    }
    globleScretes = "Ajay";
    console.log(fight(harry, voldemort,globleScretes));
    return { fight: fight };
})();

// fightModule.fight()

// var user = {};
// function signIn(user) {
//     var textField="hehehe"
// };
// function isHuman(user) {
    
// };
// //  tight cupling which means every things connected 

// var harry = "Potter";
// var voldemort = "He who must not be named";

// function fight(char1,char2) {
//     var attack1 = Math.floor(Math.random() * char1.lenght);
//     var attack2 = Math.floor(Math.random() * char2.lenght);
//     return attack1 > attack2 ? `${char1} Wins` : `${char2} Wins`;
// }

// fight(harry, voldemort);

// CommonJS and AMD

var module2 = require("module"); // .fight;
var module3 = require("module1");
function fight() { };

module.exports = { fight: fight };

//  AMD this AMD solutions and commonJS and UMD
define(["module2", "module3"], function (moduleImportOne, moduleImportTwo) {
    
    var module1 = moduleImportOne.fight // example fight;
    var module2 = moduleImportTwo;// test purpose;
    function dance() { };
   return { dance: dance };
})
