"use strict"; //treat all JS code as a newer version
console.log("sumanta");
console.table([]); // to write multiple variable names in a statement to get output
const name = "sumanta";
const myname = new String("suman-ta");

console.log("name: " + myname); // strings are immutable
console.log(myname[0]);
console.log(myname.__proto__.String);
console.log(myname.__proto__);
console.log(typeof "myname");

console.log(myname.length); //TypeError: myname.length is not a function

// Convert the string to uppercase and print the result
console.log(myname.toUpperCase());
// Convert the string to lowercase and print the result
console.log(myname.toLowerCase());

// Find the index of the character 'n' in the string
console.log(myname.indexOf("n"));
console.log(myname.lastIndexOf("a")); //it starts searching from the end of the string rather than the beginning.
console.log(myname.lastIndexOf("an"));
console.log(myname.lastIndexOf("an"));

console.log(myname.charAt(2));

console.log(myname.substring(0, 5)); // it can take only positive values
console.log(myname.slice(0, 5)); // does the same thing but it can take nagative values
console.log(myname.slice(0, -1)); // from 0 to length-1 i.e. 8-1

const newString = "  Bhattacharya.  ";
console.log(newString);
console.log(newString.trim()); // it removes the spaces
console.log(newString.trimStart()); // it works on white space characters plus line terminating
console.log(newString.trimEnd());

console.log(myname.includes("-")); // it checks whether the word is present in the variable or not
// Accessing the last character using length
const lastCharIndex = myname.length - 1;
console.log("Last character: " + myname[lastCharIndex]);

const url = "https://sumanta.com//sumanta%20bhattacharya"; // %20 is the white space between name and title
console.log(url.replace("%20", " "));
console.log(url.split("//")); // it coveerted into array

const balance_ = 404;
console.log(balance_);
console.log(typeof balance_);

const balance = new Number(404);
console.log(balance);
console.log(typeof balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.9686;
console.log(otherNumber);
console.log(otherNumber.toPrecision(2));

const otherNumber2 = 10000000;
console.log(otherNumber2.toLocaleString());
console.log(otherNumber2.toLocaleString("en-In"));
console.log(otherNumber2.toLocaleString("en-US"));

console.log(
  otherNumber2.toLocaleString("en-US", { style: "currency", currency: "USD" })
);
console.log(
  otherNumber2.toLocaleString("en-In", { style: "currency", currency: "INR" })
);
console.log(
  otherNumber2.toLocaleString("en-GB", { style: "currency", currency: "EUR" })
);

console.log(Math);
console.log(typeof Math);
console.log(Math.abs(-4)); // nagative values converted into positive '+'
console.log(Math.floor(4.7)); // it does consider the decimal value(which is lower value) opposite of cein method
console.log(Math.ceil(4.1)); // if even the decimanis greater than 0 then it directly converts it to the next number
console.log(Math.min(-4, 6, 7, 98));
console.log(Math.max(-4, 6, 7, 98));
console.log(Math.pow(5, 4)); // it does the work of exponent
console.log(Math.random()); // it fluctuates between 0 to 1
console.log(Math.random() * 10 + 1); //When you multiply the result by a specific number, you can obtain a random number within a desired range.
console.log(Math.floor(Math.random() * 6) + 1); // to bring it to the lowest number removing the decimals
console.log(Math.PI); // +1 assures that the result will come from 1 - 10 but not zero
console.log(Math.E); //compount interest

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // min ka niche bhe na aye or 10 se jayda he ho

let x = -10;
let absoluteValue = Math.abs(x);
console.log(absoluteValue); // Output: 10

// crow is a framecrow uses django for web development

/* JavaScript is primarily an interpreted language, which means that the code is executed line by line by an interpreter. 
In the case of JavaScript, it is usually executed by the JavaScript engine in web browsers or server-side environments.
 Modern JavaScript engines, like V8 in Chrome or SpiderMonkey in Firefox, often use just-in-time (JIT) compilation to improve performance.
JIT compilation involves translating JavaScript code into machine code just before it is executed, combining elements of interpretation and compilation. 

prefer not to use var
because of issue in block scope and functional scope 

HTML
CSS
JS
Tainwind CSS
React JS
Epress and Node JS
typescript
java DSA

alert(6 -7 ) // we are using node.js not browser

NaN = Not a number

console.log("1" + 2 + 3); // output:- 123
console.log(1 + 2 + "3"); // output:- 33
console.log(+true); output: 1

console.log(null == 0); // output:- false
console.log(null > 0); // output:- false
console.log(null >= 0); // output:- true here the null is treated as 0 

// Declaring boolean variables
let isTrue = true;
let isFalse = false;

// Using boolean values in conditions
if (isTrue) {
  console.log("This block will be executed because isTrue is true.");
} else {
  console.log("This block will not be executed.");
}

if (!isFalse) {
  console.log("This block will be executed because isFalse is false (negated with !).");
} else {
  console.log("This block will not be executed.");
}

big int example 
const bigNumber = 8837494355n

const myFunction = function(){
    console.log("Hello World!");
}
there are two types of memeory
Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "DARKEST TALKS"

let userSuman{
    email = "user@example.com"
}

userSumanB = userSuman;

console.log([userSuman.email,userSumanB.email]); //output:user@example.com
____________________________________________________________________________
let userSuman{
    email = "user@example.com"
}

userSumanB = userSuman;
userSumanB.email = "userSuman@example.com"
console.log([userSuman.email,userSumanB.email]); //output:userSuman@example.com

// In heap, the memory is assigned to the value not the variable. a function stores in heaps memory which is a non primitive datatype or reference data type.
// In Stack, the memory is assigned tort the variable.

const name="sumanta";
const age = 17;
console.log("Hello! viewers my name is " + name + " and im" + age + " years old" + "and... I welcome you to this chat");
or same thing but you will choose the more convinient one for you!
console.log('Hello! viewer my name is ${name} and im ${age} year old and... I welcome you to this chat'); 

const name = "sumanta"; // another way is
const myname = new String('sumanta');

undefined

This is the result of the line console.log(myname.__proto__.String);
, indicating that direct access to __proto__ to get the String constructor is not recommended and returns undefined.

Date
Javascript Date objects represents a single moment in time in a platform independent format.
Date objects encapsulates an integral number that represents milliseconds
 since the midnight at the beginning of january 1, 1970, UT(the epoch).*/

let myDate = new Date();
let datetype = typeof myDate;
console.log(`type of Date is ${datetype}`);
console.log(myDate); //
console.log(myDate.toString());
console.log(myDate.getTime()); //The number 1644782728755 represents the number of milliseconds that have passed since the Unix Epoch (January 1, 1970, 00:00:00 UTC) until the time the myDate object was created.
console.log(myDate.toTimeString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
const locale = myDate.toLocaleString();
console.log(`hello ${locale}`);
let ISOS = myDate.toISOString();
console.log(`Time Zone ${ISOS}`); //string  interpolation
console.log(myDate.getFullYear());
console.log(myDate.getMonth()); // Output: 1 (assuming it's February when you run the code) 0 to 1
console.log(myDate.getDay()); // Output: 4 (assuming it's Thursday when you run the code)
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getTimezoneOffset());
console.log(myDate.toJSON());

myDate.toLocaleString("default", {
  weekday: "long",
  timeZone: "Europe/Berlin", // Replace with the specific time zone you want
});

const month = myDate.getMonth() + 1; // Adding 1 to get the actual month
console.log(month); // Output: 2 (assuming it's February when you run the code)

const day = myDate.getDay() + 1; // Adding 1 to get the actual day of the week
console.log(day); // Output: 5 (assuming it's Thursday when you run the code)

let myCreatedDate = new Date(2023, 0, 23, 5, 3); // it is can be in this format also "2023-01-14 or 01-14-2023" DD-MM-YYYY or YYYY-MM-DD
console.log(myCreatedDate.toDateString()); // Output: 6 (assuming it's);
console.log(myCreatedDate.toLocaleString());

let D = Date.now();
console.log(`Date: ${D}`); //getTime()

console.log(Date.now() / 1000);
console.log(Math.floor(Date.now() / 1000));

const arr = new Array(79, 98, 96, 68, 96);
console.log(arr); // [ 79, 98, 96, 68, 96 ]
console.log(arr[0]); // 79
console.log(arr[0][2]); // check this in chatgpt
arr.push(98);
console.log(arr); // [ 79, 98, 96, 68, 96, 98 ]
console.log(arr.length); // 6
console.log(typeof arr); // object
arr.pop();
console.log(arr); // [ 79, 98, 96, 68, 96 ]
arr.unshift(99);
console.log(arr); // [ 99, 79, 98, 96, 68, 96 ]
arr.shift();
console.log(arr); // [ 79, 98, 96, 68, 96 ]
console.log(arr.includes(96)); // true
console.log(arr.indexOf(96)); // 2
const lindex = arr.lastIndexOf(96); //);
console.log(`lindex: ${lindex}`);

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(`element ${element}`);
}

const myn1 = arr.slice(1, 3);
console.log("-" + arr); // original array79,98,96,68,96
console.log(myn1); // [ 98, 96 ]

const myn2 = arr.splice(1, 3);
console.log("--" + arr); // origina-l array79,96
console.log(myn2); // [ 98, 96, 68 ]
console.log("--" + arr);
// const newArr = arr.join();// converted array to string
// console.log(newArr);
const result = arr.join(", "); //The argument passed to the join method (in this case, ', ') is used as the separator between the elements.
console.log(result); //In JavaScript, there is no built-in join method for arrays. However, the join method is available for strings. If you are referring to the join method in the context of arrays, it is used to concatenate the elements of an array into a single string.
//If no separator is specified, the default is a comma (,). The join method does not modify the original array; it returns a new string representing the joined elements.

const marvel_heroes = ["Thor", "Ironman", "Spiderman", "Hulk"];
const dc_heroes = ["Superman", "Flash", "Batman", "Joker"];
marvel_heroes.push("Hawkeye");
console.log(marvel_heroes);
marvel_heroes.sort();
console.log(marvel_heroes);
// marvel_heroes.push(dc_heroes);// array inside array, it took as a ssingle element
// console.log(marvel_heroes);
// console.log(marvel_heroes[5][1]);
const all_heroes = marvel_heroes.concat(dc_heroes); //
console.log(all_heroes); // concat does the same thing as push but not take it as a single element it merges into the same array not add another array inside an existing array

const al_heroes = [...marvel_heroes, ...dc_heroes]; // spread operator
console.log(al_heroes); // it does the same thing as concat but it can concat multiple variable at a time more efficient in time and energy

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
console.log(another_array.flat(Infinity)); // it merges all the element into a single array

console.log(Array.isArray("Sumanta"));
console.log(Array.from("Sumanta")); // converted the string into array

let array_1 = 12;
let array_2 = 1;
let array_3 = 2;
const array_4 = [array_1, array_2, array_3];
console.log(array_4);

console.log(Array.of(array_1, array_2, array_3));

/*Declaring an object has two ways
1.litral- creates multiple instances, it doesnt create singleton
2.constructor-singleton
*/

// object litral

const mySym = Symbol("key1");

const person = {
  Iname: "Sumanta",
  [mySym]: "mykey1",
  fullName: "Sumanta Bhattacharya",
  age: 19,
  cpga: 8.2,
  isPass: true,
  LoginDays: ["Monday", "Saturday"],
};

console.log(person);
console.log(person.Iname);
console.log(person["Iname"]);
console.log(person["fullName"]);
console.log(person[mySym]);
console.log(typeof person[mySym]);

person.age = 20;
console.log(person.age);
//Object.freeze(person);// the freeze doesnt allow to make changes in person

person.greetings = function () {
  console.log("hello JS user");
};
person.greetings_ = function () {
  console.log(`hello JS user, ${this.Iname}`); //string interpolation
};
console.log(person.greetings());
console.log(person.greetings_());
// person.age = 21;  // TypeError: Cannot assign to read-only property 'age' of object '#<Object>'
// console.log(person.age);

//2.constructor-singleton
const tinderUser = new Object(); // singleton object
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isloggedIn = false;
console.log(tinderUser);

const regularUser = {
  email: "sammy@example.com",
  IDname: {
    userfullname: {
      // objects does'nt remember the order of objects
      firstName: "John",
      lastName: "Smith",
    },
  },
};

console.log(regularUser);
console.log(regularUser.IDname.userfullname);
console.log(regularUser.IDname.userfullname.firstName); // Output: John
console.log(regularUser.IDname.userfullname.lastName); // Output: Smith

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
// const obj_ = obj1 + obj2;
// console.log(obj_);You cannot directly concatenate objects using the + operator like you would with strings. Objects cannot be added in the same way as primitive types.
const obj5 = { obj1, obj2 };
console.log(obj5);
// const obj3 = obj1.concat(obj2)
// console.log(obj3);In JavaScript, the concat method is primarily used with arrays, not objects. If you are trying to concatenate two objects, you should use other approaches, such as the spread operator
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const obj6 = Object.assign({}, obj1, obj2);
console.log("yup", obj6);
//console.log("yup"+obj6);// we cannot concatenate objects using the + operator like you would with strings.
console.log("yup " + JSON.stringify(obj6));

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
const ENtries = Object.entries(tinderUser);
console.log(`ENtries: ${ENtries}`);
console.log(tinderUser.hasOwnProperty("id"));

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh",
};

const { courseInstructor } = course;
console.log(courseInstructor);

const { courseName: Totorial } = course; // amother name i.e totorian given to courseName
console.log(Totorial);

// {
//   "my_name": Sumanta_Bhattacharya,
//   "course_Name": BCA,
//   "price": "free"
// }

// [//json - javascript object notation
//   {},
//   {},
//   {}
// ]

function sayMynAME() {
  console.log("S");
  console.log("U");
  console.log("M");
  console.log("O");
  console.log("N");
  console.log("T");
  console.log("A");
}

sayMynAME();

function addTwoNumbers(number1 = 1, number2 = 2) {
  // default-parameters
  console.log(number1 + number2);
}
addTwoNumbers(9, 1); //arguments

function addTwoNumber(num1, num2) {
  const add = num1 + num2;
  return add; //after return no statements are taken
}

let result_1 = addTwoNumber(9, 6);
console.log(result_1);

function loginUserMessage(username) {
  if (username === undefined) {
    //!username
    console.log("username is undefined");
    return;
  }
  return `${username} just logged in`;
}
let logged = loginUserMessage("sumanta2004@gmail.com"); //by default it is undefined
console.log(logged);

function calculateCartPrice(num_, ...num1) {
  // rest operator. depend on its useses its name vary rest to spread operator
  return num1; // converted function to array
}
console.log(calculateCartPrice(60, 70, 80, 2000)); // 60 <-- num_

const user = {
  user_namingis: "Sumanta.B",
  price: 199,
};

handleObject({
  user_namingis: "Suman",
  price: 195,
}); //more efficient

function handleObject(anyObject) {
  console.log(
    `user name is ${anyObject.user_namingis} and price is ${anyObject.price}`
  );
}

handleObject(user);

const myyNewArray = [200, 500, 900, 807];
function returnSecondValue(getArray) {
  return getArray[0];
}
console.log(returnSecondValue(myyNewArray)); // instead of making it a variable we can directly pass [200,500,900,807]

//2015-arrow functions// Declaration of arrow function
// const chai= (num1,num2) => {
// return num1 + num2;// explicit return
// }
// const result = chai(1,2);
// console.log(result);

// implicit return
// const chai= (num1,num2) => (num1+num2)// or cover with curly braces from inside
// console.log(chai(5,5,))

/*
Differences

Binding of this:

Function Declaration:
In regular functions, the value of this is dynamically bound based on how the function is called. It depends on whether the function is called as a method of an object, as a standalone function, etc.
Arrow Function:
Arrow functions do not have their own this context. They inherit the this value from the enclosing scope at the time of their creation. This behavior can be beneficial in certain situations, especially when dealing with callbacks or functions within functions.

*Implicit Return:

Function Declaration:
Requires an explicit return statement to return a value.
Arrow Function:
If the arrow function consists of a single expression, the return statement is implicit, and curly braces are not required.

Syntax:
*/

(function chai() {
  //named iify
  let privateVariable = "I'm private!";
  console.log(privateVariable);
  // Other code within the IIFE
})(); // here the semiclon is madatory

((name) => {
  // unnamed iify
  console.log(`hey, whatsup! bro ${name}`);
})("jaby");

((name) => console.log(`yo, whatsup! bro ${name}`))("jaby");

const value = ((name) => 500)();
console.log(value);

const value_ = ((name) => console.log(`yo, whatsup! bro ${name}`))("jimmy");

// Imediately Invoked Function Expression (IIFE)
//The primary reason for using IIFE is to create a new scope for the enclosed code.
//IIFE helps in avoiding variable name conflicts by encapsulating code within its own scope.
//Variables declared inside an IIFE are not accessible from the outside, preventing unintended global variable pollution.
// Avoiding Global Scope Pollution:
// By wrapping code inside an IIFE, you minimize the number of variables exposed in the global scope, reducing the risk of naming conflicts with other scripts or libraries.
// Function Expression for Immediate Execution:
// IIFE is often used to execute a function immediately after its creation. This is useful for performing one-time setup tasks or initializing variables.

/*
DOM-Document Object Model
<ol type="a" >
<li></li>
</ol>
<ol type="B" >
<li></li>
</ol>
<ol reversed >
<li></li>
</ol>
<ol type="i" >//romen number
<li></li>
</ol>

*/
// console.log(tinderUser.includes("id"));objects do not have an includes method by default.
// ineuron
// structured query language
// internet service provider(ISP like Airtel,Jio)
// Domain name System (DNS)
//T-SQL
//PL/SQL
//JET SQL
// JOBS
// Data base administrator
// SQL sever manager
// Big Data engineer
//QA testers

// <script> tag is ideally written inside <body> tag, at the end.
//      JS IS case sensitive
//      dollar is applicable
//      variable name cannot start with numerical value
//      var: Variable can be re-declared and updated. A global scope Variable.
//      let: Variable cannot be re-declared but can be updated. A block scope variable.
//      const: Variable cannot be  re-declared or updated. A block scope variable.

//      Data types in JS
//      7 primitives data types in JS
//      Number,String,Boolean,Undefined,Null-object(collection of values),Biglnt,Symbol.
//      example of Biglnt,Symbol.
//      let x = BigInt("88374");
//      let x = Symbol("hello")*both are string
//      typeof variable_name

//      key-value like dictionary in python

//      const variable_name{
//         name=Sumanta,
//         age=19,
//         cpga: 8.2,
//         isPass= true,
//      };

//      /*to update*/`
//      variable_name["age"] = variable_name["age"] + 1; /*20*/
//      variable_name["name"] = Sumanta Bhattacharya;

//      variable_name.name; /*in console.*/
//      console.log(variable_name[age]);
//      or
//      variable_name["name"]; /*in console.*/
//      console.log(variable_name.age; /*more efficient*/

//      console.log(typeof variable_name["name"]);
//      console.log(typeof variable_name.name);
//      console.log(typeof variable_name);

//      const object value can be updatable

//      // Print the value of multiplication between age variable and cpga variable
//         const multiplicationResult = variable_name.age ** variable_name.cpga; Exponencial i.e 18 * 8 times
//         console.log(multiplicationResult);

//         unary operator/post increment operator
//         a++ eg a=a+1
//         a--
//         pre-increment operator
//         ++a
//         --a

//         unique operators:basically it checks more strictly
//         Equal to & type ===
//         Not equal & type !==

//         In JS, if we comapre "5" and 5 one is integer and one is srtring then it will return as true implying that a string and integer value are same but in this kind of case's('==' it check the val;ues), we use === to get output false('===' check's the datatype).

//         logical operators
//         &&
//         ||
//         ! eg- !(6 === 6) output false

//         Ternary operator
//         condition ? true output: false output
//         age > 18? "adult": "not adult";
//         age >= 18 ? console.log("adult") : console.log("not adult");

//         in switch case statement, we can have multiple cases at a time

//         alert("hello!");
//         promt("hello!");

//         let name = promt("hello!");
//         console.log(name)

//       Who created Deno js and node.js?
//        Deno (software) - Wikipedia
//        Ryan Dahl

/*
 *No, JavaScript does not support negative indexing directly for accessing elements in arrays or strings. Unlike some other programming languages, such as Python, where negative indexing allows you to access elements from the end of the array or string, JavaScript uses positive indices starting from 0.
 
The "use strict"; directive in JavaScript is used to enable strict mode. When strict mode is enabled, the JavaScript interpreter enforces a set of stricter parsing and error-handling rules. It helps catch common coding errors and prevents the use of certain error-prone features.

npm install jsdom
Node.js does not have a DOM (Document Object Model) like web browsers, so the document object is not defined.

If you are working with Node.js and want to manipulate the DOM, you'll need to use a library that simulates the DOM in a Node.js environment. One popular choice is the jsdom library. You can install it using npm:
Keep in mind that using a library to simulate the DOM in Node.js is mainly useful for testing or situations where you need DOM-related functionality outside a browser environment.

If you are working on the client-side (in a browser environment), make sure your JavaScript code is included in an HTML file and is executed in a browser environment where the document object is defined.


The toLocaleString method in JavaScript is used for formatting numbers based on the user's locale. 
In the Indian number system, the thousands separator is represented by a comma, and the lakhs separator is represented by two commas. So, the number 10000000 is formatted as '1,00,00,000'.

If you are not seeing a difference in formatting between the two calls, it could be due to the default locale on your system already being set to a locale where the comma is used as a thousands separator.

In JavaScript, the Math.E property represents the mathematical constant "e," which is approximately equal to 2.71828. "e" is the base of the natural logarithm and has various applications in mathematics and science.
This value is useful in mathematical computations, particularly in contexts where exponential growth or decay is involved. For example, when calculating compound interest or solving differential equations.

  while loops are generally used when the number of iterations is not known in advance,
  and the loop continues as long as a condition is true.
  for loops are often used when the number of iterations is known beforehand.
  for(i-1;i<=2;!++){
    statement;
  }
  while(){
    statement;
    i++;
  }
  in the ending of do while loop we have to use a semicolon in the end
  Do{
    statement;
    i++;
  }while();

  */

/*
javascript execution context
Global Execution Context - this
Functional/function execution context
Eval Execution context

Global Execution / Environment Context
Memory Creation Phase-variables,etc get allocated in the memory  
Execution Phase all the operations are performed in execution phase

Global Execution Context:

The global execution context is the default or outermost execution context in JavaScript.
 It represents the entire script or program.
 It includes the global object (e.g., window in browsers),
  the this keyword, and references to all global variables and functions.
Memory Creation Phase:

During the creation phase of the global execution context, memory space is allocated for variables and function declarations.
 This process is known as hoisting. Variables are initialized with undefined, and functions are stored in their entirety.
Execution Phase:

After the memory creation phase, the JavaScript engine proceeds to the execution phase.
 It executes the code line by line, and assignments are made to variables, functions are called,
  and other operations take place.
Functional/Function Execution Context:

When a function is called, a new execution context is created for that function.
 This includes its own set of variables (local scope), arguments, and a reference to the outer lexical environment (closure).
  The function's execution context follows the same memory creation and execution phases as the global context.
this in Execution Context:

The value of this in an execution context depends on how the function is called.
 In the global context, this refers to the global object (e.g., window in browsers).
  In a function, it depends on whether the function is a method, a regular function, or an arrow function.
Eval Execution Context:

The eval function in JavaScript is used to evaluate a string as if it were JavaScript code.
 When eval is used, it creates a new execution context. However,
  using eval is generally discouraged due to security and performance reasons.

javascript is single threaded

New Variable Environment (NVE)
// falsy values
// false,0,-0,BigInt 0n,null,undefined,NaN-0 / 0;
// truethy values
// "0","false"," ",[],{},function(){}
*/

// const global = 23AB error

const global = {}; // globar[key]// it give sthe value
if (Object.keys(global).length === 0) {
  //false==0 = true, false == "" true, 0 == "" true
  console.log("T");
} else {
  console.log("F");
}

// Nullish Coalescing Operator(??):null,undefined
let val1;
val1 = 5 ?? 10; // If val1 is null or undefined, set it to 5; otherwise, keep its current value.
let val_1_1 = null ?? 56; // Since the left operand is null, set val_1_1 to 56.
let val_113 = undefined ?? 88; // Since the left operand is undefined, set val_113 to 88.

console.log(val1); // Output: 5
console.log(val_1_1); // Output: 56
console.log(val_113); // Output: 88

// ternary operator
// condition ? true: false
const iceteaprice = 100;
iceteaprice >= 80
  ? console.log("greater than 80")
  : console.log("less than \n 80");
const isPriceEqual =
  iceteaprice === 100 ? true : console.log("greater than \t 80"); //escape character length = 1
console.log(isPriceEqual); // Output: true

// print all even numbers from 0 to 100
const n = 100;
const numberArray = [];
for (let i = 0; i <= n; i++) {
  console.log(i);
  numberArray.push(i);
}

console.log(numberArray);

console.log(JSON.stringify(numberArray));
//JSON.stringify() is a method in JavaScript that converts a JavaScript object or value to a JSON string. It's commonly used to serialize objects or arrays into a string representation that can be easily transmitted or stored.

// print all even numbers from 0 to 100
const evenNumbers = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
    evenNumbers.push(i);
  } else {
    continue;
  }
}
console.log(JSON.stringify(evenNumbers));

// create a game where you start with any random game number.Ask the user to keep guessing the game number until the uer enters correct values
const twentyfive = 25;
const Random_1 = Math.floor(Math.random() * 25) + 1;
if (twentyfive === Random_1) {
  console.log("yes", Random_1);
} else {
  console.log("no", Random_1); //yes 25
}

for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

let arr_superHeroes = ["Superman", "Batman", "Flash"];
let i = 0;
while (i < arr_superHeroes.length) {
  console.log(`superheroes are ${arr_superHeroes[i]}`);
  i++;
}

// let arr_superHeroes = ["Superman", "Batman", "Flash"];
// let i = 0;

// while (i < arr_superHeroes.length) {
//   console.log(`Superheroes are ${arr_superHeroes[i]}`);
//   i++;
// }

let i_indiex = 1;
do {
  console.log(`${i_indiex} are numbers`);
  i_indiex++;
} while (i_indiex <= 2);

// loop in JS
const arrVar = new Array(1, 2.6, 7);
for (let val of arrVar) {
  console.log(val);
} //arrays,stconst arrVar = new Array(1,2.6,7);
const greetings_string_ = new String("Hello Brother and Sisters");
for (let val of greetings_string_) {
  console.log(val);
} //arrays,stringsrings

//Maps

const map = new Map(); //act like set no duplicate values
map.set("IN", "India"); // it maintains the order of elements
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("FR", "France");

console.log(map);

for (let key of map) {
  console.log(key); // it coverts them into array
}

// for (let key in map){// map are not iterable in this way,multiple times
//   console.log(key);// it coverts them into array
// }

for (let [key, value] of map) {
  console.log(key, ":-", value);
} // objectss are not iterable

let myObject_MO = {
  mySirname: "Bhattacharya",
  fatherID: 9977,
  favShow: "Anime",
};
// loop in JS
for (let key in myObject_MO) {
  console.log(`${key} :- ${myObject_MO[key]}`);
}

const programming = ["C", "Python", "Java", "HTML", "CSS", "Javascript"];

for (const key in programming) {
  console.log(`${key} "->" ${programming[key]}`); //it returns the indexes of the array
}

programming.forEach(function (item) {
  console.log(item);
});

programming.forEach((item, index, arr) => {
  console.log("languages", item, index, arr);
});

function printMe(i) {
  console.log("l", i);
}

programming.forEach(printMe);

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileExtension: ".js",
  },
  {
    languageName: "HTML",
    languageFileExtension: ".html",
  },
  {
    languageName: "CSS",
    languageFileExtension: ".css",
  },
];

myCoding.forEach((item, index, arr) => {
  // it doesny return anyvalue out of the loop
  console.log(
    "sumanta from this side" + item.languageFileExtension,
    index,
    arr.length
  );
});

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNums = myNums.filter((num) => {
  return num > 4; // explicit return {}
});

console.log(filteredNums);

let newNumbers = myNums.filter((num) => num > 4); //implicit return
console.log(newNumbers);

const NewerArray = [];
newNumbers.forEach((num) => {
  if (num > 4) {
    NewerArray.push(num);
  }
});

const newNum_s = myNums.map((num) => num + 10);
console.log(newNum_s);

let k = [];
let newNumbers_ = myNums.filter((num) => {
  if (num >= 0) {
    let okay = num + 10;
    k.push(okay);
    console.log(okay);
  }
});

console.log(k);

const againNewer_numbers = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(againNewer_numbers);

let my_fav_numbers = [1, 2, 3, 4, 5, 6];
const my_total = my_fav_numbers.reduce((accumulator, currentValue) => {
  console.log(`acc: ${accumulator} and currval: ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log(my_total);

//node JAVAS.js
// classes and objects
// callback and promises and asynic wait
// api calls
// vineo is the server to use to upload and stream videos,nodejs and react native app for small online cllass

/**
 * Async
 * JavaScript 
 * 1) Synchronous - Single Threaded 
 * It is a default javascript behavior 
 * Execution Context
 * execute one line at a time comman behaviour of interpreted language
 * each operation waits for the last one to complete before executing
 * Blocking code and           Non blocking code
 * block the flow of program | Does not block execution
 * Read file Sync -node js   | Read file Asynic
 * JS Engine is made up of memory heap and call Stack
 * _________________________________________________________               ___________________________________________________
 * [                                                      ]               |  DOM API                                         |
 * [   Meomory             call Stack                     ]               |  Set TimeOut --------------[Register callstack]  |
 * [   [ ]                 [ [fn]     ]---------call-------------]-------------->|  Set internal                  ^          |
 * [   [ ]                 [ [fn]     ]                    ]               |  fetch()                             |          |
 * [   [ ]                 [ [Global] ]                   ]               |    ^                                  |          |
   [                          ^                           ]               |    |                                  |          |
* _________________________________________________________               ----------------------------------------------------
                              |                                                |                                  |
        Add to call stack     |---------------------------------High Priority[ [CB] [CB] ]                        |
                              _______[ [CB] [CB] ] task Queue <----------------------------------------------------
or v8 engine is designed in c++ is single threaded system for JS 

  +----------------------+
  |                      |
  |   JavaScript Engine  |
  |                      |
  +----------------------+
             |
+--------------------------+
|    Memory Heap           | This is where memory allocation happens, and objects are stored.
|                          |
+--------------------------+
             |
+--------------------------+
|   Call Stack             | It keeps track of the execution of functions. When a function is called, a new frame is pushed onto the stack, and when the function completes, the frame is popped off.
|                          |
|    [ Global Context ]    |
+--------------------------+
             |
+--------------------------------------+
|   Web APIs-External Components:      | Web API - Browser DOM ✓ | Node - DOM API  ✗ 
|                                      |
|  - DOM API                           | This is the Document Object Model API, which allows JavaScript to interact with the HTML and XML structure of a document.
|  - setTimeout-->[Register callstack] |
|  - setInternal                       |
|  - fetch                             |
|  ...                                 |
+--------------------------------------+
             |
+--------------------------+ 
|   Callback Queue         | Task queue/Promise queue/High priority queue-The task queue is a queue data structure referring to the queue that holds tasks scheduled to be executed. It includes both macro tasks and micro tasks.
|                          | Tasks in the queue typically come from asynchronous operations such as setTimeout, network requests (fetch), or other Web APIs.
|                          | Once a task is completed, its associated callback function is placed in the task queue.
|                          | In summary, while these terms are often used interchangeably,
|  - High Priority Tasks   | Promise Queue / Microtask Queue:This is a subset of the task queue. Promises generate micro tasks.
|  - Normal Tasks          | Micro tasks are executed before the next rendering, ensuring that they are prioritized over macro tasks.
+--------------------------+
             |
+--------------------------+ 
|                          | Callbacks are commonly used in asynchronous operations like handling user input, making network requests, or executing code after a timeout. to manage the flow of execution. 
|   Event Loop             | Callback functions are passed as arguments to higher-order functions, which then execute the callback at an appropriate time.
|   Keeps checking         | When dealing with asynchronous operations, the callback functions are often placed in the callback queue after the asynchronous task is completed. The event loop then picks up these callbacks and executes them.
|                          | In summary, a callback in JavaScript is a function that is passed as an argument to another function and is executed later, typically after the completion of an asynchronous operation. 
|   Callback Queue         |
|   and moves tasks to     |
|   the Call Stack         |
+--------------------------+

illustration the components of a JavaScript environment, particularly the JavaScript engine, call stack, memory heap, and interactions with external components like the DOM API and tasks (such as timeouts and asynchronous operations). Let me clarify and add some details:

JavaScript Engine Components:

Memory Heap: This is where memory allocation happens, and objects are stored.
Call Stack: It keeps track of the execution of functions. When a function is called, a new frame is pushed onto the stack, and when the function completes, the frame is popped off.
External Components:

DOM API: This is the Document Object Model API, which allows JavaScript to interact with the HTML and XML structure of a document.
Task Queue: It contains tasks that are scheduled to be executed. Callbacks (CB) from asynchronous operations like setTimeout, fetch, etc., are placed here after their execution.
Execution Flow:

Functions are added to the call stack when they are called.
Asynchronous tasks, like setTimeout or network requests, are delegated to external APIs (e.g., Web APIs).
When these tasks are completed, their associated callbacks are placed in the task queue.
The event loop constantly checks the task queue and moves eligible callbacks to the call stack when the call stack is empty.
Task Priority:

High Priority Tasks: These are typically tasks with higher priority, often related to user interactions or critical operations.
Normal Priority Tasks: Standard asynchronous tasks.
*/

/*
classes and objects
Prototype in JS
A Javascript object is an entity having state and behavier (properties and methods).
JS objects have a special property called prototype
We can set protype using __ptoto__ 
if object and prototype have same methods, then objects method will be used

Yes, JavaScript has a prototypal inheritance model,
 which means that objects can inherit properties and methods from other objects through a prototype chain.
  Each object in JavaScript has an internal link to another object called its prototype.
  If a property or method is not found on an object, JavaScript looks for it in the object's prototype, and so on,
  creating a chain until it reaches the top-level prototype,
 which is typically Object.prototype.

 overview of how prototypal inheritance works in JavaScript:

Object Creation:

Objects can be created using object literals, constructors, or the Object.create() method.
Prototype Chain:

Each object in JavaScript has a prototype link, which points to another object.
When you access a property or method on an object, JavaScript checks if that property or method exists on the object itself. If not, it looks up the prototype chain.
prototype Property:

Constructor functions in JavaScript have a prototype property, which is an object. Objects created with the constructor inherit properties and methods from this prototype object.
__proto__ Property (deprecated):

Each object has a __proto__ property that points to its prototype. However, it is now considered legacy, and the recommended way to access the prototype is by using the Object.getPrototypeOf() method.
*/

const student = {
  fullname: "Sumanta Bhattacharya",
  marks: 69.8,
  printmarks: function () {
    console.log(this.marks);
  },
};

student.printmarks(); // prototypoe itself a object
console.log(typeof student); // all the methods are defined inside of the prototype. object inherits prototype

const employee = {
  calcTax() {
    const message = "tax rate is 10%";
    console.log(message);
    return message;
  },
  calcTaxation: function () {
    console.log("Taxation rate is 10%");
  },
};

employee.calcTax();
employee.calcTaxation();

const KaranArjun = {
  salary: 10000,
  role: "Manager",
  department: "Sales",
  calcTax() {
    //override
    const message = "tax rate is 20%";
    //console.log(message); //if object and prototype have same methods, then objects method will be used
    return message;
  },
};
// __proto__ used to set a prototype|const KaranArjun = Object.create(employee);
KaranArjun.__proto__ = employee; // proto is basically inherit!. Inside arrow function we dont have the access of this method
console.log(KaranArjun.role); // Output: Manager
const KA = `Hamare karan arjun ayange ${KaranArjun.calcTax()}`; // prototype is a reference to a object
console.log(KA); // every object has prototype
// __proto__ property is not recommended for modern JavaScript development due to various reasons, including potential performance concerns and issues related to the standardization of the language.

// A more modern and recommended way to set the prototype is to use Object.create():
// const KaranArjun = Object.create(employee);
// This achieves the same result but is considered a more idiomatic and safer approach.
// Classes in JS
// class is a program-code template for creating objects
// Those objects will have some state (variables) and somer behaviour(functions) inside it.
// class Myclass{
//   constructor(){...}
//   myMethod(){...}
// }

// let myObj = new Myclass();

function regularFunction() {
  console.log(this); // 'this' is dynamically determined
}

const arrowFunction = () => {
  console.log(this); // 'this' is inherited from the lexical scope
};

regularFunction.call({ name: "Regular" }); // 'this' is explicitly set
arrowFunction.call({ name: "Arrow" }); // 'this' is ignored, uses lexical({}) scope

class ToyotaCar {
  constructor(Category, milage) {
    console.log("creating new object");
    this.Category = Category;
    this.milage = milage;
  }

  companyowner = "hitesh"; //properties inside the class by using equal sign (=) instead of colon (:).
  customerCount = 8;
  patent = true;

  start() {
    console.log("Engine started");
  }
  stop() {
    console.log("Engine stopped"); //The correct syntax for defining a method in a class is without the use of the colon (:) and the function keyword.
  }

  setBrand(brand) {
    this.Toyota = brand;
    return brand; // Return the assigned value
  }
}
console.log(typeof ToyotaCar);
console.log(ToyotaCar);
// console.log(ToyotaCar.start());
//create an instance of ToyotaCar and then access the property on that instance:
let fortuner = new ToyotaCar("supercar", 12); //class_name fortuner is the class name|fortuner is an instance of the toyota class
console.log(fortuner);
console.log(fortuner.Category); //supercar
console.log(typeof fortuner); // fortuner basically inherioteting the charactersticks of the parent class i.e. ToyotaCar
fortuner.start(); // Output: "Engine started"
console.log(Object.getOwnPropertyNames(fortuner)); // Get properties and methods of the instance (fortuner)
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(fortuner)));
console.log(fortuner.constructor);
console.log("start" in fortuner); // Output: true to check
console.log("stop" in fortuner); // Output: true
console.log(fortuner.patent); // true
console.log(fortuner.setBrand("yamaha"));
fortuner.setBrand("Hero");
console.log(fortuner.Toyota); // Output: "yamaha"

const Fr = (fortuner.brand = "lexus");
console.log(Fr);

// Difference between classses and objects
// An object is an instance of a class.
// Arrays arev objects in JS
// type of objects are object in js
// A class is a blueprint or a template for creating objects.
// classes are function in JS

// type of objects are object in js but classes are function in JS true or false?
// The statement "classes are functions in JavaScript" is mostly true
// Classes provide a cleaner way to create constructor functions and manage prototypes.
// A class declaration defines a constructor function and its associated methods

// classes in JS
// Constructor() method is:
// automatically invoked by new
// initializes object

// class Myclass{
//   constructor(){...}
//   MyMethod(){...}
// }

//Inheritance in JS
// Inheritance is passing down for properties and methods from parent class to child class
// class Parent{
// }
// class Child extends Parent{

// }// if child and parent have same method, then child method will override the parent method that means child's method will be used.[Method Overriding]

function sum(a, b) {
  console.log(a + b);
}
function plus(a, b, sumCallback) {
  //Call back is a function pass as an argument to another function
  sumCallback(a, b);
}
plus(10, 20, sum); //here sum is callback

const calc = (a, b, callback) => {
  callback(a, b);
};
calc(1, 2, (a, b) => {
  console.log(a + b);
});

// Call back hell nested callback stacked below one another, forming a pyramid structure.
// Pyramid of Doom. This style of programming becomes difficult to understand and manage

function getid(id) {
  console.log("data", id);
}

getid(44);

function gettingData(getdata, gotdata) {
  console.log("Sumanta Bhattacharya");
  setTimeout(() => {
    console.log("sumanta2004@gmail.com", getdata);
    if (gotdata) {
      gotdata();
    }
  }, 1000);
}
// call back hell
gettingData(1, () => {
  //we cannot direct pass here gotdata() after , so we are creating function
  console.log("getting data2 ....");
  gettingData(2, () => {
    console.log("getting data2 ....");
    gettingData(3);
  });
});

function UserData(username, loginCount, isLoggedin) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedin = isLoggedin;
}

const user1 = new UserData("sumanta2004@gmail.com", 1, true);
console.log(user1);

function createUser_(username, score) {
  this.username = username;
  this.score = score;
}

createUser_.prototype.increment = function () {
  //here we are creating a methods printMe
  this.score++;
};

createUser_.prototype.printMe = function () {
  console.log(`price ${this.score}`);
};

const chai = new createUser_("chai", 25);
const tea = new createUser_("tea", 100);

chai.printMe();

let myAcademia = [
  "deku",
  "Uraraka",
  "Mirio Togata",
  "Tamaki Amajiki",
  "Nejire Hado",
];

let heroPower = {
  deku: "One for All",
  Uraraka: "float",
  "Mirio Togata": "intangibility", // Fixed typo and added quotes for the key with spaces
  "Tamaki Amajiki": "Manifest",
  "Nejire Hado": "beam",

  getdekuPower: function () {
    console.log(`deku power is ${this.deku}`);
  },
};

// heroPower.prototype
Object.prototype.sumanta = function () {
  console.log("sumanta is present in all object");
};
heroPower.sumanta();
myAcademia.sumanta();

Array.prototype.heySumanta = function () {
  console.log("hello from sumanta");
};

myAcademia.heySumanta();
//heroPower.heySumanta();

//Inheritance

const user_ = {
  name: "chai",
  email: "chai@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingAssistant = {
  isAwailable: false,
};

const TASupport = {
  makeAssignment: "js time",
  fullTime: true,
  __proto__: TeachingAssistant,
};

Teacher.__proto__ = user_;

Object.setPrototypeOf(Teacher, user_);

let myNaming = "Suresh Bhattacharya         "; //console.log(myNaming.truelength());
let myNamings = "Sureta Bhattacharya                  ";
// console.log(myNaming.trim().length);
String.prototype.truelength = function () {
  // console.log(`Variable name: ${myNaming}`);
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};

myNaming.truelength();
myNamings.truelength();

"sumanta".truelength();

//If a key contains spaces or special characters, or if it starts with a number, you need to use quotes (either single or double) around the key.
/*
 * Here's what's happens behind the scenes when the new keyword is used
 * A new object is created. Can you keyword initiates the creation of a new javascript object
 * A prototype is linked: the newly created object gets linked to the prototype property of the constructor function.
 * This means. that it has access to properties and methods defined on the constructors prototype
 * The constructor is called: the constructor function is called when the specified arguments.
 *  And this is bound to. the newly created object. If no explicit return value is specified from the constructor.
 *  Javascript assumes this The newly created object to be intended. returned value.
 * The new object is written after the constructor function has been called.
 * If it doesn't return in non-primitive value, for example, object array function, Etc. The newly created object is returned
 *
 *
 */

/*
tailwind css
tailwind is a revolutionary framework of css

https://github.com/asynchronousJavascriptor/level2.git
*/

/*
 * 
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

setTimeout(function(){
  console.log("hey");
},2000)
// event loop conects main stack and side stack

// then,catch,callbacks,async await

// fetch()
 */

/**
 * fetch API
 * The Fetch API provides an interface for fetching (sending/reciving) resources
 * it uses requests and response objects
 * the fetch() method is used to fetcha resource (data)
 * let promise = fetch(url,[options])
 */

const url_AC = "https://randomuser.me/api/";
let promise = fetch(url_AC);
console.log(promise);

const url_ACo = "https://randomuser.me/api/";

const getFacts = async () => {
  console.log("Getting data....");
  try {
    let response = await fetch(url_ACo);
    console.log(response);//json formatAJAJ Asynchronous js and json
    console.log(response.status);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Call the getFacts function
getFacts();

const url_ACol = "https://randomuser.me/api/";

const getFact = async () => {
  console.log("Getting data....");
  try {
    let response = await fetch(url_ACol);
    console.log(response); // This will log the Response object
    console.log(response.status); // Log the HTTP status code
    let data = await response.json(); // Parse the response as JSON
    console.log(data); // Log the parsed JSON data
    console.log(data.results[0]); // Access the first result object in the data array
    console.log(data.results[0].text); // Access the first result object in the data array
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Call the getFact function
getFact();


// Understanding Terms
// AJAS is a Asynchronous JS & XML
// JSON is js object Notation
// json() is a aynchoronous method: returns a second promise that resoves with the result of 
// parsing the response body text as JSON. (Input is JSON, output is JS object)

function gettingAC_facts (){
  fetch(url_ACol.then((res)=>{
    return res.json();

  })).then((data)=>{
    console.log(data);
    //facPara.innerText = data[2].text;
  });
}

// Requests and Response
// HTTP Verbs
// Response Status Code
// HTTP responsible headers also contain details about the response, such as content type , HTTP status code etc

//delete request and patch request 
