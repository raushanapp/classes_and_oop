// BigInt
// Nullish Coalescing Operator ?? 


//  Optinal chanining Operator ?.
//  Optional chanining means if you dealing whith objects or nested objects and try to accessing nested object
//  but nested objects properties is missing but you try to access then given you undefined because theser properties is not avialbe in your objects so handling undefined
const userDetails = {
    user:{
        name: "Ajay",
        age: 28,
        gender:female
    }
}
const vineet = userDetails.user.age; // sppouse  here some missing properties here but try to access but there is no properites this types
//  before optinal channing we are doing like this
//  before ES20
if (userDetails.user && userDetails.user.age) {
    return userDetails.user.age;
} else {
    return undefined
}
//  now just checking like this 
const age = userDetails?.user?.age; // like this 

//  Promise.allSettled
// GlobalThis  // globalThis is access able inito the node evnvironment also 
//  ES2021 Features

let ztm = "ztm is best for best";
ztm.replaceAll('best', "worst");

// ES2022
//  .at() method array using 