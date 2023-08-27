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

```

**Question 2**
<br />
Write a JavaScript function called sumRange that calculates the sum of all integers in a given range. The function should use recursion to handle the calculation and demonstrate understanding of the call stack.
#### Solution 🥳
```javascript

```

### Closure

### Promises

### Classes & Prototypes
