JavaScript: The Hard Parts, v2
==============================

### 📋 Exercise

## Introduction ⚡

What to focus on in the workshop?
- Analytical problem solving.
- Technical communication.
- Engineering approach.
- Non-technical communication.
- JavaScript and programming experience.

---

## JavaScript Principles ⚡

Goes through the code line-by-line and runs/`executes` each line - known as the **thread of execution**.
<br />
Saves `data` like strings and arrays so we can use that data later - in its **memory**, We can even save code (`functions`).
<br />
**Execution context**
Created to run the code of a function - has 2 parts (we’ve already seen them!)
- Thread of execution
- Memory

![ThreadOfExecution&Memory](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/db60b01c-457c-4a4f-8006-4f5ee3f4e990)

**Call stack**
<br/>
- JavaScript keeps track of what function is currently running (where’s the thread of execution).
- Run a function - add to call stack
- Finish running the function - JS removes it from call stack
- Whatever is top of the call stack
- that’s the function we’re currently running

---

## Functions & Callbacks ⚡

```javascript
function tenSquared() {
  return 10 * 10;
}

function nineSquared() {
  return 9 * 9;
}

function eightSquared() {
  return 8 * 8;
}
```

#### 📍 What principle are we breaking?
**DRY** (Don’t Repeat Yourself).

We can generalize the function to make it reusable
- `Parameters` (placeholders) mean we don’t need to decide what data to run our functionality on until we run the function.
  - Then provide an actual value (`argument`) when we run the function.
- Higher order functions follow this same principle.
  - We may not want to decide exactly what some of our functionality is until we run our function.

```javascript
function squareNum(num) {
  return num * num;
}

squareNum(10); // 100
squareNum(9); // 81
squareNum(8); // 64
```

### Higher Order Functions

Takes in a function or passes out a function.
<br />
Just a term to describe these functions - any function that does it we call that - but there's nothing different about them inherently.

```javascript
function copyArrayAndMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myArray = [1,2,3];
const result = copyArrayAndMultiplyBy2(myArray);
```
![copyArrayAndMultiplyBy2](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/5e04d982-e762-43d5-aa75-3c3cb6e270e4)

```javascript
function copyArrayAndDivideBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndDivideBy2(myArray);
```
![copyArrayAndDivideBy2](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/782484f1-5184-44fb-bfe1-3765c81fc79f)


```javascript
function copyArrayAndAdd3(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 3);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndAdd3(myArray);
```

#### 📍 What principle are we breaking?
**DRY** (Don’t Repeat Yourself).

We can **generalize** the function to make it reusable, so we pass in our specific instruction only when we run `copyArrayAndManipulate`!

```javascript
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(num) { return num * 2;}
// function divideBy2(num) { return num / 2; }
// function add3(num) { return num + 3; }

const myArray = [1, 2, 3];
const result = copyArrayAndManipulate(myArray, multiplyBy2);
// const result = copyArrayAndManipulate(myArray, divideBy2);
// const result = copyArrayAndManipulate(myArray, add3);
```

![copyArrayAndManipulate](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/e3782f8f-21dd-48a7-abad-7d3775e716a2)

**Functions** in javascript = **first class objects**
<br />
They can co-exist with and can be treated like any other javascript object
1. `Assigned` to `variables` and `properties` of other objects.
2. `Passed` as `arguments` into functions.
3. `Returned` as `values` from functions.

#### 📍 Which is our Higher Order Function?
The outer function that takes in a function is our higher-order function.

#### 📍 Which is our Callback Function?
The function we insert is our callback function.

### ✨ Callbacks and Higher Order Functions simplify our code and keep it DRY
**Declarative readable code** <br />
`map`, `filter`, `reduce` - the most readable way to write code to work with data.

**Codesmith & pro interview prep** <br />
One of the most popular topics to test in interview both for Codesmith and mid/senior level job interviews.

**Asynchronous JavaScript** <br />
Callbacks are a core aspect of async JavaScript, and are under-the-hood of promises, `async`/`await`.

### ✨ Arrow Functions
a shorthand way to save functions.

```javascript
function multiplyBy2(input) { return input * 2; }
// We can convert it to:

const multiplyBy2 = (input) => { return input*2; }

const multiplyBy2 = (input) => input*2;

const multiplyBy2 = input => input*2;

const output = multiplyBy2(3); // 6
```
![Arrow](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/a53465be-2814-4b84-a40a-7140fe67c15f)

### 💡 We can even pass in multiplyBy2 directly without a name
But it’s still just the code of a function being passed into copyArrayAndManipulate.

```javascript
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

// const multiplyBy2 = input => input * 2;
// const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

const result = copyArrayAndManipulate([1, 2, 3], input => input*2);
```

### 🫧 Anonymous and arrow functions
- Improve immediate legibility of the code.
- But at least for our purposes here they are "**syntactic sugar**".
- Understanding how they’re working under-the-hood is vital to avoid confusion.

**Syntactic sugar** is a term for a more concise syntax that provides the same functionality for something that already exists. It aims to help make code shorter, therefore, easier to write. 

### ✨ Pair Programming

![PairProgramming](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/d75adaf1-f01f-4a16-8a8e-dd5c33e709f6)

---

## Closure ⚡

The closure is **a collection of all the variables in scope at the time of creation of the function**.
 
- Closure is the most esoteric of JavaScript concepts.
- Enables powerful pro-level functions like 'once' and 'memoize'.
- Many JavaScript design patterns including the module pattern use closure.
- Build iterators, handle partial application and maintain state in an asynchronous world.

### Functions with memories
- When our functions get called, we create a live store of data (local memory/variable environment/state) for that function's execution context.
- When the function finishes executing, its local memory is deleted (except the returned value).
<br />
But what if our functions could hold on to live data between executions?
- This would let our function definitions have an associated cache/persistent memory.
- But it all starts with us **returning a function from another function**.


### Nested Function Scope

```javascript
function outer (){
  let counter = 0;
  function incrementCounter (){
    counter++;
  }
  incrementCounter();
}
outer();
```

 ![CallingAFunctionInTheSameFunctionCall](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/3977d499-235b-4d60-9430-ac9c36cbec83)


### Retaining Function Memory

```javascript
function outer (){
  let counter = 0;
  function incrementCounter (){
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();
```

[**Photo Link**](https://excalidraw.com/#json=UpRVjUxCsVMiIiMq9dJOh,PbjD7jO_L6QH4bFTGz099g)
![CallingAFunctionOutsideIfTheFunctionCall](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/c2e4dfbb-f19c-467f-b755-b2d03e74a21d)

### The bond
When a function is defined, it gets a bond to the surrounding Local Memory ("Variable Environment") in which it has been defined.


### 🫧 The 'backpack'

- We return `incrementCounter`'s code (function definition) out of outer into global and give it a new name - `myNewFunction`
- We **maintain the bond to outer's live local memory** - it gets 'returned out' attached on the back of incrementCounter's function definition.
- So outer's local memory is now stored attached to `myNewFunction` - even though outer’s execution context is long gone.
- When we run `myNewFunction` in global, it will first look in its own local memory first (as we'd expect), but then in `myNewFunction`'s 'backpack';


### What can we call this 'backpack'?

- Closed over 'Variable Environment' (C.O.V.E.).
- Persistent Lexical Scope Referenced Data (P.L.S.R.D.).
- 'Backpack'.
- 'Closure'.
The 'backpack' (or 'closure') of live data is attached `incrementCounter` (then to `myNewFunction`) through a **hidden** property known as [[scope]] which persists when the inner function is returned out.


**Let’s run outer again**<br/>
```javascript
function outer (){
  let counter = 0;
  function incrementCounter (){
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

const anotherFunction = outer();
anotherFunction();
anotherFunction();
```

### ✨ Individual 'backpack's

If we run `outer` again and store the returned `incrementCounter` function definition in `anotherFunction`, this new `incrementCounter` function was created in a new execution context and therefore has a brand new independent 'backpack'.


```javascript
let c = 4;
const addX = x => n => n + x;
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);
```

is the equivalent to

```javascript
let c = 4;
function addX(x) {
  return function(n) {
     return n + x;
  }
}
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);
```

This [**article**](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8) is very important.

### Closure gives our functions persistent memories and entirely new toolkit for writing professional code

**Helper functions**: Everyday professional helper functions like 'once' and 'memoize'.
**Iterators and generators**: Which use lexical scoping and closure to achieve the most contemporary patterns for handling data in JavaScript.
**Module pattern**: Preserve state for the life of an application without polluting the global namespace.
**Asynchronous JavaScript**: Callbacks and Promises rely on closure to persist state in an asynchronous environment.

---

## Asynchronous JavaScript ⚡

**Asynchronicity** is the backbone of modern web development in JavaScript yet.
<br/>
JavaScript is:
- Single threaded (one command runs at a time).
- Synchronously executed (each line is run in order the code appears).
<br/>
So what if we have a task:
- Accessing Twitter’s server to get new tweets that takes a long time.
- Code we want to run using those tweets.
Challenge: We want to wait for the tweets to be stored in tweets so that they’re there to run displayTweets on - but no code can run in the meantime.

#### Slow function blocks further code running
```javascript
const tweets = getTweets("http://twitter.com/will/1");
// 350ms wait while a request is sent to Twitter HQ

displayTweets(tweets);

// more code to run
console.log("I want to runnnn!");
```

#### What if we try to delay a function directly using setTimeout?
`setTimeout` is a built in function - its first argument is the function to delay followed by **ms** to delay by.

```javascript
function printHello(){
  console.log("Hello");
}

setTimeout(printHello, 1000);
console.log("Me first!");
```
> In what order will our console logs appear?
1- Me first!
2- Hello **(after 100ms = 1s)**


#### So what about a delay of 0ms

```javascript
function printHello(){
  console.log("Hello");
}

setTimeout(printHello, 0);
console.log("Me first!");
```
> Now, in what order will our console logs occur?
1- Me first!
2- Hello 


### JavaScript is not enough - We need new pieces (some of which aren’t JavaScript at all)

Our core JavaScript engine has **3 main parts**:
- Thread of execution.
- Memory/variable environment.
- Call stack.
We need to add some new components:
- Web Browser APIs/Node background APIs.
- Promises.
- Event loop, Callback/Task queue and micro task queue.

---

## Promises ⚡

---

## Classes & Prototypes ⚡

---

## Coding Challenges ⚡

### Introduction

[**Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)
#### Solution 🥳
```javascript
const squareList = arr => arr.filter(e => (e*10) % 10 === 0 && e > 0)
                             .map(e => e*e);
```

### JavaScript Principles

[**Apply Functional Programming to Convert Strings to URL Slugs**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)
#### Solution 🥳
```javascript
function urlSlug(title) {
  return title.toLowerCase()
              .split(" ")
              .filter(s => s.length > 0)
              .join("-");
}
```

### Functions & Callbacks

**Question 1**
<br />
Implement a JavaScript function called mapAsync that takes an array and a callback function. The function should map each element of the array to a new value using the callback function asynchronously.
<br />
The final result should be returned as a Promise.
#### Solution 🥳
```javascript
async function mapAsync (arr, cb){
  const newArr = [];
  let tmp;
  for(let e of arr) {
    tmp = await cb(e);
    newArr.push(tmp);
  }
  return newArr;
}

const addTwo = e => e + 2; 

const a = [1, 2, 3];
const ans = await mapAsync(a, addTwo);
console.log(ans);
```

**Question 2**
<br />
Write a JavaScript function called sumRange that calculates the sum of all integers in a given range. The function should use recursion to handle the calculation and demonstrate understanding of the call stack.
#### Solution 🥳
```javascript
function sumRange (st, en){
  return st > en ? 0 : en + sumRange(st, --en);
}

const ans = sumRange(19, 20);
console.log(ans);
```
[**Photo Link**](https://excalidraw.com/#json=XbQ3lULpLF7J50-ieGSHH,Ts2t2PU3DCehYcFSeShNng)
![sumRange](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/8ab059b0-8a7b-4a0a-b074-e360f1073960)

### Closure

**Question 1**
<br />
Write a closure named createCounter that takes an initial value start and returns a function. The returned function, when invoked, should increment the counter by 1 and return the updated value.
#### Solution 🥳
```javascript
function createCounter (initialValue){
  const increment = () => ++initialValue;
  return increment;
}

const incrementCounter = createCounter(5);
incrementCounter(); // 6
incrementCounter(); // 7
incrementCounter(); // 8
```

**Question 2**
<br />
Write a closure named calculateAverage that takes an array of numbers, and returns a function. The returned function, when invoked, should calculate and return the average of the numbers in the array.
#### Solution 🥳
```javascript
const calculateAverage = nums => () => nums.reduce((total, element) => total + element) / nums.length;

const calcAvg = calculateAverage([1, 2, 3]);
calcAvg();
```

**Question 3**
<br />
Write a closure named powerOf that takes a base number returns a function. The returned function, when invoked with an exponent exp, should calculate and return the result of base raised to the power of exp.
#### Solution 🥳
```javascript
const powerOf = n => {
  return p => {
    if (p <= 1) {
      return p ? n : 1;
    }
    const ans = fastPow(Math.floor(p / 2));
    return ans * ans * (p % 2 ? n : 1);
  };
}

const power = powerOf(4);
console.log(power(5)); // 1024
console.log(power(2)); // 16
```

**Question 4**
<br />
Write a closure named compose that takes multiple functions as arguments and returns a new function. The returned function should apply the provided functions in reverse order, passing the result of each function as an argument to the next function.
#### Solution 🥳
```javascript
const compose = (...funcs) => arg => funcs.reduceRight((lastRes, func) => func(lastRes), arg);

const applyAllFuncsR = compose(n => n * 2, n => n - 3, n => n / 2, n => n + 5);
console.log(applyAllFuncsR(5));
```

### Asynchronous JavaScript

### Promises

### Classes & Prototypes
