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
Saves `data` like strings and arrays so we can use that data later - in its **memory**.
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
