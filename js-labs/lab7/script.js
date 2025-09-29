// 1- Write a function that greets a user, using a default parameter for the name.
function greets(name = "EId") {
  console.log("hello ", name);
}
greets();
// 2- Write a function that calculates the total price with a default tax rate parameter.
function total_price(price, tax = 0.12) {
  return price + price * tax;
}
let x = total_price(50);
console.log(x);
// 3- Write a function that creates a user object, using a default role parameter.
function add_user(name, role = "admin") {
  return { name, role };
}
console.log(add_user("EId"));

// 4- Write a function that multiplies any number of arguments using the rest operator.

function multiply(...args) {
  return args.reduce((acc, result) => acc * result, 1);
}
console.log(multiply(1, 2, 3, 4));

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function multiply_first(first, ...args) {
  return first * args.reduce((acc, sum) => acc + sum, 0);
}
console.log(multiply_first(2, 4, 2, 4));

// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function return_arr(...args) {
  return args;
}
console.log(return_arr("fawzy", "EId", "Ali"));
// 7- Create a new array by combining two arrays using the spread operator.
let arr = [1, 2, 3];
let arr2 = [2, 4, 6];
function combine(arr, arr2) {
  return [...arr, ...arr2];
}
console.log(combine(arr, arr2));
// 8- Copy an array using the spread operator.
let arr3 = [...arr2];
console.log(arr3);

// 9- Merge two objects into one using the spread operator.
let ob1 = {
  name: "eid",
};
let ob2 = {
  age: 23,
};
let ob3 = { ...ob1, ...ob2 };
console.log(ob3);
// 10- Update a property in an object using the spread operator to create a new object.
ob4 = { ...ob2, age: 24 };

// 11- Destructure an array to get the first and second elements into variables.
let arr4 = [1, 2, 3, 4];
let a, b;
[a, b] = arr;
console.log(a, b);

// 12- Destructure an array to get the first element and the rest into another array.
let c, arr5;
[c, ...arr5] = arr4;
console.log(c, arr5);
// 13- Destructure an object to extract two properties into variables.

let obj = {
  name: "eid",
  age: 23,
};
let name, age;
({ name, age } = obj);
console.log(name, age);

// 14- Destructure an object and rename the extracted properties.
let new_name, new_age;
({ name: new_name, age: new_age } = obj);
console.log(new_name, new_age);

// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.

function display({ name, last_name }) {
  console.log(name, last_name);
}
display({ name: "eid", last_name: "Nada" });
