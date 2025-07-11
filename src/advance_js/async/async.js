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