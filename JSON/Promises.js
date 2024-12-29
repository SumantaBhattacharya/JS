/* 
v8 engine is designed in c++ is single threaded system for JS 

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
|     fn                   |
|    [ Global Context ]    |
+--------------------------+
           |
+--------------------------------------------+
|   Web APIs-External Components:            | Web API - Browser DOM ✓ | Node - DOM API  ✗ 
|                                            |
|  - DOM API                                 | This is the Document Object Model API, which allows JavaScript to interact with the HTML and XML structure of a document.
|  - setTimeout-->[Register callstack]       |
|  - setInternal                             |
|  - fetch[[Micro task/priority queue]CB,CB] |
|  ...                                       |
+--------------------------------------------+
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

reponse = fetch('something)
Data:----------------->response             
onfulfilled[fn]    Web Browser/node
onRejection[fn]   network request---✓or---❌

  Promises object represents the eventual complition (or failure ) of an asynchronous operation and its resulting value.
  Promises is a solution to callback help.
  Promises is an object
    file access is not done directly through program it requires kernal access.
    A promise has three states
    1. pending: initial state,neither fulfilled nor rejected
    2. fulfilled: meaning that the operation was completed successfully, and the promise has a resulting value.
    3. rejected: meaning that the operation failed

    resonse - then
    error - catch

    remember error handling in java try catch finally in JS then catch finally

    asynic await>>promise chains>>callback hell

    Synchronous in javascript synchronous means the code runs in a particular sequence of instructions given in the programme Each instruction waits for the previous instruction to complete its execution 
    Asynchronous in javascript due to Synchronous programming, something important Instructions get blocked due to some previous instructions, which cause a delay in the ui. Asynchronous code execution allows to execute next instruction immediately, and doesn't block the flow of the code
    Asynchronous code execution is also known as Asynchronous I/O.
    callback is an argument to a function
   
    */
// fetch("http://google.com").then().catch.finally()
// Promise - ES-6 - In JavaScript, the Promise is a built-in object introduced in ECMAScript 6 (ES6) to handle asynchronous operations more effectively. 
// then-resolve
// creation
const Promise_1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async operation is completed");
        resolve()
    },1000)
})

Promise_1.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async operation2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async operation2 resolved");
})

const Promise_3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Sumanta Bhattacharya",email:"sumanta2004@gmail.com"})
    },1000)
});

Promise_3.then(function(user){
    console.log(user);
});

const Promise_4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"sumanta2004@gmail.com",password:88374})
        }else{
            reject("ERROR 404")
        }
    },1000)
})

const userName = Promise_4.then((user) => {//callback hell
    console.log(user);
    return user.password
}).then((pass)=>{
    console.log(pass);
}).catch(function(err){
    console.log(err);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})

const Promise_5 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true;
        if(!error){//the Date object, the day of the month starts from 1
            resolve({name:"sumanta",DOB: new Date(2004, 9, 11)})// Months are zero-based, so 9 represents October
        }else{
            reject("JS went wrong")
        }
    },1000)
})

async function consumedPromise5(){
    try{
        const response = await Promise_5
        console.log(response);
    }catch(err){
        console.log(err);
    }
}

consumedPromise5();
//Promise_5 it is an object

async function getAllUsers(){
    try{
        const response = await fetch("https://api.github.com/users/SumantaBhattacharya");
        const data = await response.json();
        console.log(data);
    }catch(e){
        // e.printStackTrace();
        console.log("Error:"+ e);
    }
};

getAllUsers();
//https://api.github.com/users/SumantaBhattacharya

fetch("https://api.github.com/users/SumantaBhattacharya").then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

// api(Data) - protocol | send & recieve requests

// fetch api - 1 feb 2022
// when we request through promise an error came 404 it will be found on response

// js is a prototype bases language
// object - collection of properties and methods

/*OOPS
 -Constructor
 -Prototype
 -Classes
 -Instances(new,this)
 -Abstraction-Detail hide eg,fetch
 -Encapsulation-wrap up
 -Inheritance
 -Polymorphism  
*/

const Promise_6 = new Promise(function(resolve, reject){
    
});

