// const http = require("http");
// const { request, get } = require("https");
const { get } = require("https");

// const req = request("https://www.google.com", (res) => {
//   res.on("data", (chuck) => {
//     console.log(`Data Chunk is ${chuck}`);
//   });
//   res.on("end", () => {
//     console.log("No more Data");
//   });
// });
get("https://www.google.com", (res) => {
  res.on("data", (chuck) => {
    console.log(`Data Chunk is ${chuck}`);
  });
  res.on("end", () => {
    console.log("No more Data");
  });
});
// req.end();
