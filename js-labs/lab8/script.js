// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.
import { greet } from "./utils.js";
greet("Eido");

// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
function promisee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  }).then(() => {
    console.log("Task completed!");
    // console.log(message);
  });
}
promisee();

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
function waitAndGreet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello from sync");
    }, 1000);
  });
}
async function try_async() {
  try {
    let message = await waitAndGreet();
    console.log(message);
  } catch (error) {
    console.error("Error: ", error);
  }
}
try_async();
// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.
async function get_data() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log("Data:", data.name, data.email);
  } catch (error) {
    console.error("Error:", error);
  }
}
get_data();

// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.
async function fetch_3() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log("Data:", data.slice(0, 3));
  } catch (error) {
    console.error("Error:", error);
  }
}
fetch_3();

// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
function timer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
async function looPP() {
  for (let i = 1; i < 4; i++) {
    await timer();
    console.log(i);
  }
}

looPP();

// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
function parse_json(data) {
  try {
    let parsedData = JSON.parse(data);
    console.log("Parsed Data:", parsedData);
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
  }
}

parse_json('{"name": "Edio"}');

parse_json("{name: Eido}");

// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
async function fetch_data() {
  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/todos"
    );
    let data = await response.json();
    let loaded = data.filter((todo) => todo.completed).length;
    console.log("Counter:", loaded);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetch_data();

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
import { DataFetcher } from "./utils.js";

let fetcher = new DataFetcher();
fetcher.getUser(1).then((user) => console.log("User Data:", user));
