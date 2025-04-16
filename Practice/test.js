// Giving a String. reverse each word in the sentence

// var str = "saare jaha se acha hindustaan hamara";
// const stri = str.split("")
// console.log(str);//strings are immutable
// console.log(stri);

let str = "saare jaha se acha hindustaan hamara";
let reversedWords = str.split(" ").map(function (word) {
  return word.split("").reverse().join("");
});
let reversedString = reversedWords.join(" ");
console.log(reversedString);

let str_ = "MAM";

let reversedWords_ = [];
str_.split(" ").forEach(function (word) {
  let reversedWord = word.split("").reverse().join("");
  reversedWords_.push(reversedWord);
});

let reversedString_ = reversedWords_.join(" ");
console.log(reversedString_);
/**Purpose: forEach is used for iterating over the elements of an array.
Return value: forEach does not return a new array. 
map:
Purpose: map is used for creating a new array by applying a function to each element of an existing array.
Return value: map returns a new array with the results of calling a provided function on every element in the array. It does not modify the original array.
 */

// how to check if an object is array or not
const checkArray = function (e) {
  if (Array.isArray(e)) {
    console.log("it is an array");
  } else {
    console.log("it is an object");
  }
};
checkArray([]);

// How to empty an array in JavaScript?
// do not reset it to a new array, and do not loop through to pop each element

const array = new Array(2, 4, 6, 8, 10);
for (let i = array.length; i >= 0; i--) {
  array.pop();
}
console.log(array); // Output: []

const arr = new Array(2, 4, 6, 8, 10);
for (let i = 0; i < array.length; i++) {
  array.pop();
}
console.log(array); // Output: []

let array_ = [1, 2, 3, 4, 5];
// Set the length of the array to 0 to empty it
array_.length = 0;
console.log(array_); // Output: []

const arr_ = new Array(2, 4, 6, 8, 10);
for (let i = 0; i < array.length; i++) {
  array.shift();
}
console.log(array); // Output: []

// how would you check if a number is an integer
const isInteger = function (n) {
  return n % 1 === 0;
};
console.log(isInteger(1)); // true
console.log(isInteger(1.1)); // false

const isInt = function (n) {
  if (Number.isInteger(n)) {
    console.log(`Integer ${n}`);
  } else {
    console.log(`not a Integer ${n}`);
  }
};

isInt(44);
isInt(5.5);

const isInte = function (n) {
  return Number.isInteger(n);
};

const num = isInte(4);
console.log(num);
const num1 = isInte(9.5);
console.log(num1);

// given a array [1,2,3,4,5] convert this array to [1,2,3,4,5,1,2,3,4,5]
const array_1 = [1, 2, 3, 4, 5];
const newArray = array_1.concat(array_1);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

const _arr = [1, 2, 3, 4, 5];
const _arr_ = [1, 2, 3, 4, 5];
const _arra_ = [..._arr, ..._arr_];
console.log(_arra_);

function duplicate(arr) {
  return arr.concat(arr);
}
const duplicate_ = duplicate([1, 2, 3, 4, 5]);
console.log(duplicate_);

// write a javaScript function that reverse a number
function reverse_a_number(n) {
  // Convert the number to a string, reverse it, and convert it back to a number
  const reversedNumber = parseInt(String(n).split("").reverse().join("")); // we are converting it to a string to apply these split method
  return reversedNumber;
}

console.log(reverse_a_number(89)); // Output: 98

function reverseKaro(num) {
  return Number(num.toString().split("").reverse().join(""));
}
const rever = reverseKaro(89);
console.log(rever);

function reverseKaro_(number) {
  let rev = 0;
  while (number > 0) {
    //0!>0
    let rem = number % 10; // 1234 % 10 = 4, 123 % 10 = 3, 12 % 10= 2 , 1% 10 = 1
    rev = rev * 10 + rem; //0*10+4= 4, 4*10+3=43, 43*10+2=432, 432*10+1=4321
    number = Math.floor(number / 10); //1234/10 = 123.4, 123/10 = 12.3, 12/10 = 1.2 , 1 / 10= 0.1
  }
  return rev;
}
console.log(reverseKaro_(1234));
// any more than 1 digit number divided by 10 remainder always is the last digit
// num = 1234,rev = 0 + rem = 4 = 4 ,  num = 123, rev= 4 + rem = 3

// Write a JavaScript function that takes an array of numbers and returns the sum of all the numbers.
function sum_of_all_numbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    //console.log(sum);
  }
  return sum;
}
const arr_2 = sum_of_all_numbers([1, 2, 3, 4, 5]);
//sum_of_all_numbers([1,2,3,4,5])
console.log(arr_2);

// Write a JavaScript function that takes an array of numbers and returns the average of all the numbers.
const arr_3 = [1, 2, 3, 4, 5];
function all_num(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const element = all_num(arr_3);
const avg = element / arr_3.length;
console.log(avg);

// write a palindrome function that checks whether a passes string is palindrome or not
function StringPal(params) {
  let palin = params.split("").reverse().join("");
  if (palin === params) {
    console.log(`It is a palindrome ${params}`);
  } else {
    console.log("It is not palindrome");
  }
  // palin === params ? true : false
  // return palin === params
}
StringPal("mom");

// 8- Write a JavaScript function that returns a passes string with letters in alphabetical order
// basicall sort the string in alphabetical order

const name_ = "sumanta";
const name1 = name_.split("").sort().join("");
console.log(name1);

function StringAlphabetical(str) {
  return str.split("").sort().join("");
}
console.log(StringAlphabetical("Bhattacharya"));

// write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function capitalize(firstLetter) {
  return firstLetter
    .split(" ")
    .map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(" ");
}
console.log(capitalize("Hello! brother how are you?"));

// const upp = capitalize("Hello! rother how are you?")
// console.log(upp);

function capitalize_A(str) {
  var allwords = str.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return allwords.join(" ");
}

const capitalize_ = capitalize_A("heloo brother how are you doing?");
console.log(capitalize_);

function capitalize_AL(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join(" ");
}

const capitalize_ALP = capitalize_AL("yo hello brother how are you doing?");
console.log(capitalize_ALP);

(function capitalize_ALPHA(str) {
  console.log(
    str
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.substring(1);
      })
      .join(" ")
  );
})("yo bro hello brother how are you doing? ");

let str_String = "saare jaha se acha hindustaan hamara hamara";
const rever_aS = function reversing(rever) {
  return rever
    .split(" ")
    .map((str) => {
      return str.split("").reverse().join("");
    })
    .join(" ");
};
console.log(rever_aS(str_String));

// 11. write a javascript function to get a number occurences of each letter in specified string

function occ(str) {
  let = occurences = {};
  str.split("").forEach(function (elem) {
    if (occurences.hasOwnProperty(elem) === false) {
      occurences[elem] = 1;
    } else {
      occurences[elem]++;
    }
  });
  return occurences;
}
console.log(occ("apple"));

// write a program to know how many letters are in the sentence
function total(sen) {
  sum = 0;
  const spliting = sen.split("").map((i) => {
    sum = sum + i.length;
  });
  console.log(sum);
}
total("sumanta Bhattacharya");

// Write a JavaScript function that accepts a string as a parameter and returns the number of words in the string.
function words_(str) {
  const trimmer = str.trim();
  return trimmer.split(" ").length;
}

console.log(words_("sumanta Bhattacharya this is my name")); // Output: 2

// Write a JavaScript function that accepts a string as a parameter and returns the number of characters in the string.
function words(str) {
  return str.split("").length;
}
console.log(words("sumanta bhattacharya"));

// loop an arrat and add all the members of it
function add_all_members(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(add_all_members([1, 2, 3, 4, 5, 5]));

let arra = [1, 2, 3, 4, 5, 5];
var sum = 0;
arra.forEach(function (elem) {
  sum = sum + elem;
});
console.log(`=>${sum}`);

// In an array of numbers only add the duplicate numbers number for example [1,2,3,4,4,5,5] it is an array output shoud be 18 like this

// in an array of elements donrt add the duplicate numbers
const array_of_numbers = [1, 2, 3, 4, 4, 5, 5, 6];

function array_of_num() {
  let uniqueSet = new Set();
  let sum = 0;

  for (let i = 0; i < array_of_numbers.length; i++) {
    const currentNum = array_of_numbers[i];

    // Check if the number is not in the set (not a duplicate)
    if (!uniqueSet.has(currentNum)) {
      // if only it is unique to enter in the uniqueset
      uniqueSet.add(currentNum);
      sum += currentNum;
    }
  }

  return sum;
}

const result = array_of_num();
console.log(result); // Output: 21 (1 + 2 + 3 + 4 + 5 + 6)

// Check for Duplicates:

// javascript
// Copy code
// if (!uniqueSet.has(currentNum)) {
// We use the has method of the Set (uniqueSet) to check if the current element (currentNum) is already present in the Set.
// The ! operator is used to negate the condition, so the code inside the if block executes only when the current element is not present in the Set (i.e., it's unique).
// Update Set and Sum for Unique Elements:

// javascript
// Copy code
// uniqueSet.add(currentNum);
// sum += currentNum;
// If the current element is unique (not present in the Set), we:
// Add the current element (currentNum) to the uniqueSet using uniqueSet.add(currentNum). This marks the element as encountered.
// Update the sum by adding the current element to it (sum += currentNum). This keeps track of the sum of unique elements.

// In an mixed array only add the numbers

const arraying = new Array("sumanta", 12, true, 4, 67.8);
function adding(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum = sum + arr[i];
    }
  }
  return sum;
}
const array_ing = adding(arraying);
console.log(`-> ${array_ing}`);

const arr_Marray = ["sumanta", 12, true, 4, 67.8];
let sum_1 = 0;
arr_Marray.forEach((elem) => {
  if (typeof elem === "number") {
    sum_1 = sum_1 + elem;
  }
});
console.log(sum_1); // Output: 83.8 (12 + 4 + 67.8)

// loop an array of objects and remove all objects which dont have gender's value male
var arr_4 = [
  {
    name: "sumanta",
    age: 12,
    gender: "male",
  },
  {
    name: "suman",
    age: 22,
    gender: "male",
  },
  {
    name: "anita",
    age: 46,
    gender: "female",
  },
  {
    name: "Supriya",
    age: 4,
    gender: "female",
  },
];
function remove_male(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male") {
      sum += arr[i].age;
    }
  }
  return sum;
}
const rm = remove_male(arr_4);
console.log(rm);

let arr_5 = [
  {
    name: "Anya",
    age: 12,
    gender: "female",
  },
  {
    name: "Vardhana",
    age: 46,
    gender: "female",
  },
  {
    name: "Sumanta",
    age: 41,
    gender: "male",
  },
  {
    name: "Subhasis",
    age: 49,
    gender: "male",
  },
];

let newarr = arr_5.filter((elem) => {
  // it creates a new array
  return elem.gender === "male";
});

console.log(newarr);

let arr_6 = [
  {
    name: "Anya Bhattacharya",
    age: 12,
    gender: "female",
  },
  {
    name: "Vardhana",
    age: 46,
    gender: "female",
  },
  {
    name: "Sumanta",
    age: 41,
    gender: "male",
  },
  {
    name: "Sudip ",
    age: 49,
    gender: "male",
  },
  {
    name: "Anita ",
    age: 57,
    gender: "female",
  },
];

function count(arr) {
  for (let index = arr.length - 1; index >= 0; index--) {
    if (arr[index].gender === "male") {
      arr.pop();
    }
  }
  return arr.length; // Return the modified array length
}

const C_C = count(arr_6);
console.log(C_C); // Output: 3

//splice(3,1)

let arr_7 = [
  {
    name: "Anya Bhattacharya",
    age: 12,
    gender: "female",
  },
  {
    name: "Stri",
    age: 33,
    gender: "female",
  },
  {
    name: "Samanta",
    age: 41,
    gender: "male",
  },
  {
    name: "Samantara ",
    age: 49,
    gender: "male",
  },
  {
    name: "Anita Banarjee ",
    age: 37,
    gender: "female",
  },
];

var count_1 = 0;
arr_7.forEach(function (elem) {
  if (elem.gender !== "male") {
    count_1++;
  }
});

for (let i = 0; i < count_1; i++) {
  for (let j = 0; j < arr_7.length; j++) {
    if (arr_7[j].gender !== "male") {
      arr_7.splice(j, 1);
      break;
    }
  }
}

console.log(`arr_7 ${JSON.stringify(arr_7)}`);

const arr_8 = [
  { gender: "male", name: "John" },
  { gender: "female", name: "Alice" },
  { gender: "male", name: "Bob" },
  // ... other objects
];

const filteredArr = arr_8.filter((elem) => elem.gender === "male");

console.log(filteredArr);

// write a java script function to clone an array

function clone(arr) {
  return [...arr];
}
let cloning = clone([1, 2, 3, 4]);
console.log(cloning);

function cloneArr() {
  let arr = [];
  arr.push(1, 2, 3, 4, 5);
  return arr;
}
console.log(cloneArr());

const newning_array = [1, 2, 3, 4, 6];
function cloneArra() {
  let arr = [];
  arr.push(...newning_array); //[...newning_array] if we want array inside array
  return arr;
}

console.log(cloneArra());

function cloningArray(arr) {
  let newarraying = [];
  arr.forEach(function (e) {
    newarraying.push(e);
  });
  return newarraying;
}

let abcd = [1, 2, 3, 4, 5, 6, 7];
console.log(cloningArray(abcd));

const arr_9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function map_arr(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i]);
  }
  return newarr;
}

console.log(map_arr(arr_9));

//The function map_arr in your code is not cloning the array arr_9. Instead, it is creating a new array (newarr) and copying each element from arr_9 into the new array. This process is similar to creating a shallow copy of the array.

function cloner(arr) {
  arr.map(() => {
    return arr; // map;s create a new array
  });
}
console.log(clone([2, 3, 4, 5, 6]));
//11. write a js(javascript) function which accepts an argument and returns the type Note : There are six possible values that typeof returns object ,boolean,function,number,string and undefined.
function typeOf(arg) {
  return typeof arg;
}
console.log(typeOf(123));
console.log(typeOf(true));
console.log(typeOf(undefined));
console.log(typeOf(function () {}));
// Arrow function
console.log(typeOf(() => {}));

//44. Write a javascript function to get the last element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// Define the last function
function last(arr, n) {
  return arr.splice(4);
}
const originalArray = [1, 2, 3, 4, 5];
const result_ = last(originalArray);
console.log(result_);

function last_(arr, n) {
  return arr.slice(-n);
}
const originalArray_ = [1, 2, 3, 4, 5];
const result_r = last_(originalArray_, 2);

console.log(result_r);

function retrive(arr, n = 2) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log("hamse nhe hoga");
  }
}
const ret = retrive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

function retriveal(arr, n = 2) {
  const result = [];

  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      result.push(arr[i]);
    }
  } else {
    console.log("hamse nahi hoga");
  }

  return result;
}

const retr = retriveal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
console.log(retr);

// sync and async
// js is not asynchoronous i.e js is asyncchronous
// js is a single threaded system made in c++
// setTimeout
// setInterval
// Promise
// fetch
// axios
// XMLHttpRequest

// setTimeout(callback,timeinmilleseconds);

setTimeout(function () {
  console.log("hey");
}, 2000);
// event loop conects main stack and side stack

// then,catch,callbacks,async await

// fetch()

var ans_scs = new Promise((res, rej) => {
  if (true) {
    return res();
  } else {
    return rej();
  }
});

ans_scs
  .then(function () {
    console.log("resolved");
  })
  .catch(function () {
    console.log("rejected");
  });

// user will ask for a number between 0 to 9 and if the number is below 5 resove if not reject
// promise is a constructor function
var ans = new Promise((res, rej) => {
  let matha = Math.floor(Math.random() * 10);
  if (matha < 5) {
    console.log(matha); // Log the generated number if it's less than 5
    res(); // Resolve the Promise
  } else {
    rej(); // Reject the Promise
  }
});

ans
  .then(function () {
    console.log("below");
  })
  .catch(function () {
    console.log("above");
  });


// sbase phale ghar par ao
// gate kholo or gate galao
// khana pakao aur khana khao
// aram karo
// so jao 

var answer_scs = new Promise((res, rej) => {
  return res("sbase phale ghar par ao")
});

var p2 = answer_scs.then(function (data) {
  console.log(data);
  return new Promise(function(res, rej) {
    return res("gate kholo or gate galao")
  })
})

var p3 = p2.then(function(data){
  console.log(data);
  return new Promise(function(res,rej){
    return res("khana pakao aur khana khao")
  })
})

var p4 =  p3.then(function(data){
  console.log(data);
  return new Promise(function(res,rej){
    return res("aram karo aur so jao")
  })
});

p4.then(function(data){
  console.log(data);
});

// async await

// Define the abcd function
function abcd_scs() {
  fetch("https://randomuser.me/api/")
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
    })
    .catch(function (error) {
      console.error('Error fetching data:', error);
    });
}

// Call the abcd function
abcd_scs();
async function shreyansh(data) {
  try {
    let raw = await fetch("https://randomuser.me/api/");
    let ans_by_scs = await raw.json();// if we dont use await that mean row will go to main stack not side stack.by await  we mean until the data comesthen run the following code
    console.log(ans_by_scs);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the abcd function
shreyansh();

// 5 use cases of promise
// using node js
// fetch
// settimeout
// setinterval

// processing asynchronous and synchronous simultyaniously is called concurrency
// parallelism: processors and their cores 
// throttling: multiple events performing at a time 

const url_ACol = "https://randomuser.me/api/";
const factPara = document.querySelector("#fact");

const getFact = async () => {
    console.log("Getting data....");
    try {
        let response = await fetch(url_ACol);
        console.log(response); // This will log the Response object
        console.log(response.status); // Log the HTTP status code
        let data = await response.json(); // Parse the response as JSON
        console.log(data); // Log the parsed JSON data
        console.log(data.results[0]); // Access the first result object in the data array
        console.log(data.results[0].text); // Access the first result object's first name
        factPara.innerText = `Random User Name: ${data.results[0].name.first} ${data.results[0].name.last}`;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const btn = document.querySelector("#btn");
btn.addEventListener("click", getFact);

// Understanding Terms
// AJAS is a Asynchronous JS & XML
// JSON is js object Notation
// json() is a aynchoronous method: returns a second promise that resoves with the result of 
// parsing the response body text as JSON. (Input is JSON, output is JS object)

const Favorite_Movie = "Avengers: Endgame";

let guess = prompt("Guess my favorite movie: ");

while ((guess !== Favorite_Movie && (guess != "quit"))) {
  /*
  The user is prompted to guess the favorite movie again
  The prompt function displays a dialog box that prompts the user for input
  The entered value is stored in the variable guess
  The prompt function returns the value entered by the user
  The loop continues until the user guesses the correct movie or types "quit"
  The condition checks if the guess is not equal to the favorite movie and if the guess is not "quit"
  If either condition is true, the loop continues
  If the user types "quit", the loop will also exit
  because the condition will be false*/

  console.log("Wrong guess! Try again: "); // The console.log function is used to display a message in the console
  guess = prompt("Wrong guess! Try again: ");
}

if (guess === Favorite_Movie) {
  alert("Correct! My favorite movie is " + Favorite_Movie + ".");
}else{
  console.log("You quit the game.");
  
}
// The above code is a simple guessing game where the user is prompted to guess the favorite movie.
