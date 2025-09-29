// function taskOne(callback) {
//   setTimeout(() => {
//     console.log("Task One complete");
//     callback();
//   }, 1000);
// }

// function taskTwo(callback) {
//   setTimeout(() => {
//     console.log("Task Two complete");
//     callback();
//   }, 2000);
// }

// function taskThree(callback) {
//   setTimeout(() => {
//     console.log("Task Three complete");
//     callback();
//   }, 1000);
// }

// // Nested callbacks (callback hell)
// taskOne(() => {
//   taskTwo(() => {
//     taskThree(() => {
//       console.log("All tasks done (with callbacks)");
//     });
//   });
// });

// function a(){
//   setTimeout(() => {
//     console.log("Function a is done");
//   }, 1000);
// }
// function b(){
//   setTimeout(() => {
//     console.log("Function b is done");
//   }, 5000);
// }
// function c(){
//   setTimeout(() => {
//     console.log("Function c is done");
//   }, 1000);
//   console.log("Out of set of timeout");
// }

// a();
// b();
// c();

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

function taskOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task One complete");
      resolve("Result from Task One");
      // reject("Error in Task One");
    }, 5000);
  });
}

function taskTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task Two complete");
      resolve("Result from Task Two");
    }, 2000);
  });
}

function taskThree() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task Three complete");
      resolve("Result from Task Three");
    }, 1000);
  });
}

// Chaining promises
// taskOne()
//   .then((result) => {
//     console.log(result);
//     return taskTwo();
//   })
//   .then((result) => {
//     console.log(result);
//     return taskThree();
//   })
//   .then((result) => {
//     console.log(result);
//     console.log("All tasks done (with Promises)");
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// taskOne()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     // console.error("Error:", error);
//     throw new Error(error);
//   });

//example 2
function getData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ id: 1, message: "Data fetched successfully" });
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 2000);
  });
}

async function handleData() {
  try {
    let data = await getData(true);
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

handleData();

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log("Data:", data[0].id, data[0].title);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();

let myObj = { name: "Omar", age: 30, city: "Cairo" };
console.log("myObj", myObj);
let myObjStr = JSON.stringify(myObj);
console.log("myObjStr", myObjStr);
let myObjParsed = JSON.parse(myObjStr);
console.log("myObjParsed", myObjParsed);
