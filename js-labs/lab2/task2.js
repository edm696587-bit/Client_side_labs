// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.
a = parseInt("258.90");
b = parseFloat("258.90");
console.log(a, b);

// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
num = 7.45678;
num = num.toFixed(2);
num2 = +num;
console.log(num, num2);

// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
console.log(isNaN("abc"));
console.log(isNaN(15));

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
console.log(0.1 + 0.2 == 0.3);
num = 0.1 + 0.2;
console.log(num.toFixed(1));
console.log(Number(num.toFixed(1)));
// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.
function pares(string) {
  if (isNaN(parseInt(string))) {
    return null;
  } else return parseInt(string);
}
console.log(pares("120a"));
console.log(pares("a120"));

// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).
function isFinit(value) {
  if (
    typeof value === "number" &&
    !isNaN(value) &&
    value !== Infinity &&
    value !== -Infinity
  )
    return true;
  else return false;
}
// console.log(isFinit(15))
// console.log(isFinit(12))
// console.log(isFinit(.02))
// num = 160
// console.log(isFinit(num))

// console.log(isFinit("sfdj"))
// console.log(isFinit(null))
// console.log(isFinit(NaN))
// console.log(isFinit(Infinity))

// 7. Remove leading and trailing spaces from the string "   hello world  ".

console.log("   hello world  ".trim());

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
console.log("javascript".slice(4));
console.log("javascript".substring(4));

// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).
function count_ch(string, ch) {
  var counter = 0;
  string = string.toLowerCase();
  ch = ch.toLowerCase();
  for (i = 0; i < string.length; i++) {
    if (string[i] === ch) {
      counter++;
    }
  }
  return counter;
}

console.log(count_ch("Banana Mania", "a"));
console.log(count_ch("Banana Mania", "n"));

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
function reversee(string) {
  gnirts = "";
  for (i = string.length - 1; i >= 0; i--) gnirts += string[i];
  return gnirts;
}

console.log(reversee("Moahmed reverse function"));

// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
function upperr(sting) {
  str = sting.toLowerCase();
  new_str = "";
  for (i = 0; i < str.length; i++) {
    if (i == 0) new_str += str[i].toUpperCase();
    else if (str[i] === " ") {
      new_str += str[i];
      new_str += str[i + 1].toUpperCase();
      i++;
    } else new_str += str[i];
  }
  return new_str;
}

console.log(upperr("hello there friend"));

// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
url = "https://example.com/path/to/page";
start = url.indexOf("//");
start += 2;
end = url.indexOf("/", start);
console.log(start, end);
console.log(url.slice(start, end));

// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
function indexof(str, ch) {
  for (i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      return i;
    }
  }
  return -1;
}
console.log(indexof("mohmaed", "e"));
console.log(indexof("eid", "i"));
// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
var s = "hello";
if (s.toUpperCase() === "HELLO") {
  console.log("match");
}
// answer ==> missing "()" in the toUpperCase function and the strict equality ===

// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
console.log(arr);
// 16. Remove the last element and store it. Remove the first element and store it.
console.log((last = arr.pop()));
console.log((first = arr.shift()));
console.log(arr, first, last);

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
arr1 = [10, 20, 30, 40, 50];
arr2 = [];
arr2 = arr1.slice(0, 3);
console.log(arr2);
// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 2, "a", "b");
console.log(arr3);
// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
arr0 = [10, 20, 30, 40, 50, 60];
arr0.slice(0, 3);
console.log(arr0);
arr0.splice(0, 3);
console.log(arr0);

// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
fresh = [];
fresh[7] = 10;
console.log(fresh);
// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
array1 = [10, 20, 30, 40, 50, 60, null, undefined, "asjfha_wuisfh"];

function compact(array) {
  arra = [];
  for (i = 0; i < array.length; i++) {
    if (array[i]) {
      arra.push(array[i]);
    }
  }
  return arra;
}

console.log(compact(array1));

// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .
function deepcopy(a) {
  clone = [];
  for (i = 0; i < a.length; i++) {
    clone[i] = a[i];
  }
  return clone;
}
arr5 = [1, 2, 3, 4, 5];
copy = deepcopy(arr5);

console.log(copy);

// 23. Map [1,2,3] to their squares using map.
a = [1, 2, 3];
a.map(function (num) {
  return num * num;
});
console.log(
  a.map(function (num) {
    return num * num;
  })
);

// 24. Filter [5,10,15,20] to keep values >= 12.
aa = [5, 10, 15, 20];

result = aa.filter(function (num) {
  return num >= 12;
});
console.log(result);

// 25. Reduce [2,4,6] to product.
f = [2, 4, 6];
resllt = f.reduce(function (num, acc) {
  return num * acc;
}, 1);
console.log(resllt);

// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.
f = [2, 4, 6];
resllt = f.reduce(function (num, acc) {
  return num + acc;
}, 0);
console.log(resllt);
// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
names = ["Ali", "Sara", "Kareem"];
initials = [];

for (i = 0; i < names.length; i++) {
  initials.push(names[i][0]);
}

console.log(initials);

// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.
function unique(a) {
  new_a = [];

  for (i = 0; i < a.length; i++) {
    if (new_a.indexOf(a[i]) === -1) {
      new_a.push(a[i]);
    }
  }

  return new_a;
}

console.log(unique([1, 2, 2, 3, 1, 4, 3]));

// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).
flatten1 = [1, [2, 3], [4], 5];
flat = flatten1.toString().split(",");
n_flat = [];
for (i = 0; i < flat.length; i++) {
  n_flat.push(Number(flat[i]));
}
console.log(n_flat);

// 31. Create object person with name and age; add a new property city after creation.
preson = { name: "Mohamed", age: 23 };
preson.city = "Cairo";
console.log(preson);

// 32. Access a property via bracket notation with a dynamic key variable.

console.log(preson["age"]);

// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).
function countKeys(obj) {
  count = 0;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

console.log(countKeys(preson));

// 39. List (as comments) 5 different values that coerce to false in ES5.

// ==> 0
// ==> false
// ==> null
// ==> ""
// ==> undefind

// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.
function safeToBoolean(value) {
  if (value === true || value === "true" || vlaue === 1 || vlaue === "1")
    return true;
  else return false;
}
console.log(safeToBoolean("true"));

// 41. Create a Date for Jan 1, 2025 00:00 local.
d = new Date(2025, 0, 1, 0, 0);
console.log(d.toString());
// 42. Get the current year from new Date().

year = d.getFullYear();

console.log(year);
// 43. Write function daysBetween(d1, d2) returning whole day difference ( ignoreDST intricacies; ms/(1000*60*60*24)).
function differenc(d1, d2) {
  ms = 1000 * 60 * 60 * 24;
  diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / ms);
}
d1 = new Date(2025, 0, 1);
d2 = new Date(2025, 0, 10);

console.log(differenc(d1, d2));

// 44. Generate a random integer 1..100.
rand = Math.floor(Math.random() * 100) + 1;
console.log(rand);

// 45. Round 4.567 to nearest integer, round down, and round up (three results).
x = 4.567;
console.log(Math.round(x));
console.log(Math.floor(x));
console.log(Math.ceil(x));
// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).
function randomIntArray(n, min, max) {
  output = [];
  for (i = 0; i < n; i++) {
    rand = Math.floor(Math.random() * max) + min;
    output.push(rand);
  }
  return output;
}

console.log(randomIntArray(5, 1, 200));

// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).

// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
