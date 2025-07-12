//  how async works in javascripts 
//  call stack
console.log("1 ====>>");
setTimeout(() => { console.log("2 ===>>") }, 1000);
console.log("3 ====>>>");

//  Call Stack

setTimeout()
 setInterval()
//  WEB API


//  Callback QUEUE

//  Event Loop

//  Promise
//  before promise we have callback function

el.addEventListener("click", submitForm);

//  callback pyramid of doom
movePlayer(100, "Left", function () {
    movePlayer(400, "Left", function () {
        movePlayer(10, "Right", function () {
            movePlayer(300, "Left", function () {
                
            })
        })
    })
})

//  other way handle promises
grabTweets("twitter/ajay", (error, ajay) => {
    if (error) throw error;
    displayTweets(ajay);
    grabTweets("twitter/Vineet", (error, vineet) => {
        if (error) throw error;
        displayTweets(vineet);
        grabTweets("twitter/madhvi", (error, madhvi) => {
            if (error) throw error;
            displayTweets(madhvi);
        })
    })
})
//  Promise create
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("stuff worked")
    }
    else reject("boked")
}).then((res) => console.log(res)).catch((error) => console.log(error));

// Callback Queue  Task Queue
setTimeout(() => console.log("1, is the loneliest number"), 0);
setTimeout(() => console.log("2, Can be as bad as one"), 10);

//  2  Job Queue --> MicroTask Queue
Promise.resolve("hi").then((res) => console.log("2, ===>>>", res));
// 3 
console.log("3", "is a crowd");



//  let say have 3 promise
//  parallel
//  squencial
// race
//  Promis parallel squence and race
const promisify = (item, delay) => new Promise((resolve) => setTimeout(() => resolve(item), delay));
const a = () => promisify("A", 100);
const b = () => promisify("B", 5000);
const c = () => promisify("C", 3000);

async function parallel() { // Promise resolve all them at the same time  
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `Parallel is Done ${output1}, ${output2} ,${output3}`;
}
// parallel().then(console.log)
async function race() { // race means which one have resolve first return them to first 
    const promises = [a(), b(), c()];
    const outPut1 = await Promise.race(promises);
    return `Race is done ${outPut1}`;

}
// race().then(console.log);
//  Squence

async function squence() {
    const outPut1 = await a();
    const outPut2 = await b();
    const outPut3 = await c();
     return `Squence is Done ${outPut1}, ${outPut2} ,${outPut3}`;
}

// squence().then(console.log);
//  allSetelled()
const promiseOne = new Promise((resolve, reject) => setTimeout(() => resolve, 3000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(() => reject, 3000));
// Promise.all([promiseOne.promiseTwo]).then((data) => console.log(data)).catch((e)=>console.log("SomeThing failed,",e));
Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data)).catch((e) => console.log("SomeThing failed,", e));

//  Threads Concurrency and Parallelism
`Concurrency                                Concurrency + parallelism
(Single-Core-CPU)
                                           (Multi-Core-CPU)
                                           `