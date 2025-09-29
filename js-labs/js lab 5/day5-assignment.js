
// 1. Predict (in comments) the output order of this code, then run to verify.
// console.log(a());
// var b = function(){ return 'B'; };
// function a(){ return 'A'; }
// console.log(b());

// ==> the output order will be A then B 
//    After verifying, explain (one short line) why a works before definition and b does not.
// ==> as a is a functoin Declaration which are a hiosted functions otherwise b as it an expression function 
 
// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).
function sum(a,b){
    return a + b;
}
let add = function(a,b){
    return a + b;
}
console.log(sum(3,4));
console.log(add(3,4));

// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
var factorial = function fact(n){
   if (n <= 1){
    return 1;
   }
   return n * fact(n - 1);   }

console.log(factorial(5)); 
// ==> console.log(fact(5)); // will out an error as fact is not defined globally


// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
function showInfo(){
      console.log("number of args is : " + arguments.length); 
      for (let i =0 ; i<arguments.length;i++){
         console.log(arguments[i]);
      }
}
showInfo();
showInfo(1,2);
showInfo(1,2,3,4,5);


// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
function mutate(x,y){
   console.log("befor");
   console.log(arguments[0],arguments[1]);
   x = 5;
   y =  10;
   console.log("after");
   
   console.log(arguments[0],arguments[1]);

}
mutate(10,5);


// Advanced track

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
function sumall(){
   let sum = 0;
   for (let i =0 ; i<arguments.length;i++){
      sum += arguments[i];
      

   }
return sum;
}

console.log(sumall(2,5,3));
console.log(sumall());

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.
function sumAll(){

 
  return Array.prototype.reduce.call(arguments, function(acc, val) {
    return acc + val;
  }, 0);
}
console.log(sumAll(2,5,3));

// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a','+b else 'too many'.
function describeValue() {
  if (arguments.length === 0) {
    return "none";

  }
   else if (arguments.length === 1) {
    return "one:" + arguments[0];
  }
   else if (arguments.length === 2) {
    return "two:" + arguments[0] + "," + arguments[1];
  }
   else {return "too many";}
}
console.log(describeValue(3));
// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.

let funcs = [
  function(x) { return x + 2; },function(x) { return x * 3; },function(x) { return x - 5; } ];

let start = 10;

for (let i = 0; i < funcs.length; i++) {
  start = funcs[i](start);
}

console.log(start); 
// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.
function makeMultiplier(factor){
   return function(n){
      return factor * n

   }
}
let double = makeMultiplier(2);
let triple = makeMultiplier(3);
console.log(double(7));
console.log(triple(7));


// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.

function once(fn){
   let check = false
   return function(strin){     
      if (!check){
         check = true 
         return fn(strin)
      }
   }
}

let one_time = once(function(strin){
   console.log(strin);
})
one_time("hello")


// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.
// ==> i tryed but it's not work 
// console.log("bouons");

// function once(fn){
//    let check = false
//    let result;   
//    return function(strin){ 
      
//       if (!check){
//          check = true 
//        result = fn.call(this,strin)
//        return result 
//       }
//       return result 


//    }
// }
// let one_time = once(function(strin){
//    console.log(strin);
// })
// one_time("hello")
// one_time("hi")




// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
function makeAdder(start){
   let total = start ;
   return function(n){
      total += n
      return total;
   }
}
let m1 = makeAdder(2)
console.log(m1(10));
console.log(m1(3));

let m2 = makeAdder(4)
console.log(m2(6));
console.log(m2(10));
// 15.(bouns) Implement memoize1(fn). Show it caches slowSquare(9) twice (timing optional comment).


// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
let User = {name : "Eid",
   sayhi: function(){
      console.log("Hi " + this.name);
   }
}

User.sayhi()
var f = User.sayhi;
f()
// ==> as f hold say hold the function not the result so it's can not access User name (this)

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
let User2 = {
   name:"sara"
}
User.sayhi.call(User2)

console.log("second way");
User2.hay = User.sayhi;
User2.hay()

//f.call(User2)
// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.
let greeter = {
   greet: function(greeting,sign){
      console.log(greeting + " " + this.name + sign);
   }
}

let user3 = {name : "Ali"}
greeter.greet.apply(user3,["Hello","!"]);



// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
let greetLara = greeter.greet.bind({ name: "Lara" });
greetLara("Hello","!!");   
greetLara("Hi","@");      



// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).

let sayHello = greeter.greet.bind(user3,"Hello")
sayHello("??")
// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.
function slicee(){
   let reversed_arg = Array.prototype.slice.call(arguments);
   reversed_arg = reversed_arg.slice().reverse()
   console.log(reversed_arg); 
}
slicee(1,2,3,4,5)
// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
let Arr = [5, 2, 11, 7];
console.log( Math.max.apply(null, Arr)); 
console.log("with loop");
let max = 0
for (let i = 1; i < Arr.length; i++) {
  if (Arr[i] > max) {
    max = Arr[i];
  }
}
console.log(max);
// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.
console.log(Math.max.call(null, 5, 2, 11, 7)); 
// ==> apply is better as it's easier no need for type all numbers as max does not deal with array

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.
let myname = "Mohamed"
let myage = 23;
const templat = `User: ${myname} Age: ${myage + 1}`;

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.
let title = "this is  MY title";
let body = "a body for multi line temp";

const temp = "title: " + title + "\n" + "Body: " + body;

console.log(temp);
// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
if (1){
   var i = 5 ;
   let j = 10;
   console.log(i);
   console.log(j);
}
console.log(i);
// console.log(j);
// ==> error j is undefined as it decleared by let wich is block scpoe 

// 28. Write code that tries to log x before let x = 5;.
//console.log(x);
//let x = 5;
// ==> referenceError: Cannot access 'x' before initialization as let not hiosted 

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
const a = [ 1 , 2 , 3];


a.push(4);
console.log(a); 

// a = [10,20]; 
// ==>   TypeError: Assignment to constant variable.


// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].
const square = (n)=>{
    return n*n
}
console.log(square(5));
let inl_square = (n) => n*n

console.log(inl_square(10));

const m_square = a.map(n => n * n);
console.log(m_square);

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).
const timer = {
  count: 0,
  classicId: null,
  arrowId: null,

  startClassic: function () {
    this.classicId = setInterval(function () {
      console.log("Classic: "+ this.count);}, 500);
  },

  startArrow: function () {
    this.arrowId = setInterval(() => {this.count += 5 ; 
   console.log("Arrow: "+ this.count);}, 1000);
  },

  stop: function () {
    clearInterval(this.classicId);
    clearInterval(this.arrowId);
    console.log("Stopped");
  }
};

// timer.startClassic();
// timer.startArrow();

// setTimeout(() => timer.stop(), 4000);

// the output will be like/Classic: undefined/ Arrow: 5 /Classic: undefined/ Classic: undefined /Arrow: 10 as the classical can not see this 


// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.

const return_o = () =>  ({ v:10 } );
console.log(return_o());


// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).
const user = {
  name: "Eid",
  sayhi:  ()=> {
    console.log("Hi " + this.name); 
  }
};

user.sayhi() // ==> Hi undefined
// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).
// function greet(name){ return 'Hi '  '+name+'!' ;}
   const greet = (name) => 'Hi '  +name + '!' ;
   console.log(greet("Mohamed"));

// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
let add5 = (n) => n +5; 
let times3 = (n) => n *3; 
let minus1 = (n) => n -1 ; 

const fns_array = [add5,times3,minus1] 
function runPipeline(n , fnsarray )
{   for(let i = 0 ;i<fnsarray.length ; i ++){
   n = fnsarray[i](n)

   }
   console.log(n);
}
runPipeline(5,fns_array )

// 36. (write answers BEFORE running):
    var obj = { n: 1, inc: function(){ this.n++; return this.n; } };
    var inc = obj.inc;
    console.log(obj.inc());  //2 simple function increase ot's arg by 1
    console.log(inc());   // error inc is not defiend as it's a function for the object not a global function  <= that's my ans
//    Explain both lines 

// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.

// let arr_count = []

// for(let i =0 ; i<1000 ; i++){
//    arr_count.push((counter_i = i))
// }
// console.log(arr_count);
// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.
function safeFirst(){
   if (arguments.length === 0){
      return undefined;
   }
   else {
      let args_array = Array.prototype.slice.call(arguments);
      return args_array;
   }
}
console.log(safeFirst());
console.log(safeFirst(1,2,3));

// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();

// 40. Write 2 things that were new or tricky today (comment).

// ==> 1- arrow function and how it's deal with this
// ==> 2-  call, bind , apply and the difference between them 

 

