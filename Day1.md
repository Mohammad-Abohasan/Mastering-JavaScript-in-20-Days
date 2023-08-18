Day 01
======

## Introduction ⚡

#### 📍 What is JavaScript?
**JavaScript** is a **dynamic** programming language, lets us modify websites and make them **interactive**.

```javascript
let js = {
    name: "JavaScript",
    abbreviation: "JS",
    isAwseome: true,
    officialSpec: "ECMAScript",
    birthYear: 1995,
    creator: "Brendan Eich"
};

if(js.isAwseome) {
    shout("hell yes JS!");
}
```

#### JavaScript was written by **Brendan Eich** in May 1995 in just **10 days**.
![WTH](https://miro.medium.com/v2/resize:fit:640/1*KXWuSh_4SycAyPbkYPmtsg.gif)
> yes 10 days.

----

#### 📍 Why do we need JavaScript?
> _"HTML & CSS & JS: BFFs (Best Friends Forever)!"_

**HTML** is the **noun** - the subject that the sentence is all about, **CSS** is the **adjective**, dressing up that noun to make it more attractive, and **JavaScript** is the **verb** - the interactions and animations on the website.

----

#### 📍 ~~How~~ Where do we write JavaScript?
- The browser's JS console.
- Local text file in editor, e.g. **TextEdit**, [**VS Code**](https://code.visualstudio.com/).
- Online playground e.g. [**CodePen**](https://codepen.io/), [**CodeSendbox**](https://codesandbox.io/).

---

## DOM ⚡
The **Document Object Model** connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory.
The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

```javascript
document;
// return html document
```

```javascript
document.title;
// return title of the document
```

```javascript
document.body;
// return body
```

```javascript
document.body.children;
// return all of the child elements of the body
```

```javascript
document.getElementById("board");
document.querySelector("#board");
// return first element with an id="board"
```

```javascript
document.getElementsByTagName("h1");
document.querySelectorAll("h1");
// return all the h1 elements
```

```javascript
document.getElementsByClassName("player");
document.querySelectorAll(".player");
// return all the elements with class="player"
```

```javascript
document.getElementsByClassName("player").length;
document.querySelectorAll(".player").length;
// return the number of elements with class="player"
```

```javascript
document.getElementById("p1-name").textContent;
// return text inside the element with an id="p1-name"
```

---

### 📋 Exercise
| Type commands in the console to retrieve |
| ------------- |
| 1. all the **p** elements |
| 2. the text "**X**" |
| 3. the **number of squares in the board** |
| 4. the text "**A game you know**" |

1.
```javascript
document.getElementsByTagName("p");
document.querySelectorAll("p");
```
2.
```javascript
document.getElementById("p1-symbol").textContent;
document.querySelector("#p1-symbol").textContent;
```
3.
```javascript
document.getElementsByClassName("square").length;
document.querySelectorAll(".square").length;
```
4.
```javascript
document.getElementsByTagName("h2")[0].textContent;
document.querySelector("h2").textContent;
```

---

```javascript
document.title = "My page";
// replace title
```

```javascript
document.getElementById("p1-name").textContent = "Mohammad";
// replace the text of the #p1-name element
```

```javascript
document.getElementById("p1-name").append(" & Abohasan");
// add to the end of the element's current text
```

---

### 📋 Exercise
| Type commands in the console to |
| ------------- |
| 1. **Change** the player names to **you & neighbor** |
| 2. **Swap** the **player symbols** |
| 3. **Change** subtitle to "A game you know **and love**" |

1.
```javascript
document.getElementById("p1-name").textContent = "Mohammad";
document.getElementById("p2-name").textContent = "Aya";
```
2.
```javascript
document.getElementById("p1-symbol").textContent = "O";
document.getElementById("p2-symbol").textContent = "X";
```
3.
```javascript
document.getElementsByTagName("h2")[0].append(" and love");
```

---

## Values & Data Types ⚡
- Double quotation → (") 
- Single quotation → (')
- Backtick → (`)

📍 "42" vs. 42 are these the same thing? 
**No**, they are not the same thing

`typeof`: operator tells you the type of a value

```javascript
typeof "42";
// return string

typeof 42;
//return number
```

JS has two kinds of data:
- Primitive types (e.g. strings, numbers)
  - `string`
  - `number`
  - `boolean`
  - `undefined`
  - `null`
  - `symbol`
  - `bigint`
- Objects (e.g. document & friends)

| Value | Type |
| ----- | ---- |
| `false` | `boolean` |
| `"true"` | `string` |
| `document.title` | `string` |
| `"Mohammad".length` | `number` |
| `undefined` | `undefined` |
| `null` | null (`object`) |

```javascript
"aya"[0];
// 'a'
```

```javascript
"aya".indexOf("y");
// 1
```

```javascript
"aya".indexOf("a");
// 0
```

```javascript
"aya".lastIndexOf("a");
// 2
```

```javascript
"aya".lastIndexOf("r");
// -1
```

```javascript
"aya".includes("ya");
// true
```

```javascript
"aya".startsWith("ay");
// true
```

📍 At what **index** does this **substring begin**?
```javascript
"mohammad".indexOf("hamm");
// 2

"mohammad".indexOf("hamz");
// -1
```

Concatenate strings together
```javascript
"Mohammad" + " Abohasan";
// "Mohammad Abohasan"
```

```javascript
"MoHaMMaD".toLowerCase();
// "mohammad"
```

### 📋 Exercise
| Use our new string superpowers to |
| ------------- |
| 1. Add your last name in the players listing |
| 2. Retrieve the first "T" in the page title |
| 3. Answer whether the page title contians the string "JavaScript" |
| 4. Capitalize the heading "Tic Tac Toe |

1.
```javascript
document.getElementById("p1-name").append(" Abohasan");
document.getElementById("p2-name").append(" Abohasan");
```

2.
```javascript
// document.title ==> 'JavaScripTacToe'
document.title[document.title.indexOf("T")];
// document.title.indexOf("T") ==> 9
```

3.
```javascript
document.title.includes("JavaScript");
```

4.
```javascript
document.querySelector("h1").textContent = document.querySelector("h1").textContent.toUpperCase();

document.querySelector("header h1").style.textTransform = "uppercase";
```

> Remember ✨ MDN ✨ is your friend!

---

## Operators ⚡

| Snippet | Operator |
| ----- | ---- |
| "Aya" + "!" | `+` |
| typeof "aya" | `typeof` |

[MDN-**Operators**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

| Strict | Result | Loosey-goosey | Result |
| ----- | ---- | ----- | ---- |
| `1 === 1` | `true` | `1 == 1` | `true` |
| `"1" === "1"` | `true` | `"1" == "1"` | `true` |
| `1 === "1"` | `false` | `1 == "1"` | `true` |

> You should almost always use the **strict** version

[MDN-**Nullish coalescing operator (??)**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

```javascript
null ?? "aya";
// "aya"

"mohammad" ?? "aya";
// "mohammad"
```

---

## Expressions ⚡
🎈 Examples:
- `4 / 2 * 10`
- `"Mohammad" + "Abohasan"`
- `5 > 4 !== 3 > 4` 

```javascript
"Mohammad Abohasan".includes("Abo" + "hasan");
// true
```

[MDN-**Expressions**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

### Variables

This is one way we can create a variable
```javascript
let remember = "14 Aug. 23";
```
`let`: is a special keyword that lets us declare a variable.

![Ideclarebankruptcy](https://media.tenor.com/HQspuvhxSbIAAAAC/the-office-steve-carell.gif)
```javascript
let bankruptcy;
// bankruptcy = undefined
```
![nullVsUndefined](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/78aa062c-14a3-4453-808e-2a6b40144357)


```javascript
// Declaring
let myDeclaredVariable;
// Assigning
myDeclaredVariable = "so value, much wow";

// Declaring & assigning at once
let AssignedVariable = "such efficient, amaze";

// Declaring & assigning forever
let myUnchangeableVariable = "Never gonna give you up";
```

![ConstLetVar](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/37913f8f-65e5-498c-af2a-0717527142c7)

### 📋 Exercise
| Use our new string superpowers to |
| ------------- |
| 1. Your name |
| 2. The combined age of your parents |
| 3. The #board element on the page |

1.
```javascript
const myName = "Mohammad Abohasan";
```

2.
```javascript
let combinedMyParentsAge = 48 + 45;
```

3.
```javascript
let boardEl = document.getElementById("board");
```

### Variables ~~contain~~ point to values

📍 What happens when this code runs?
```javascript
let answerToLife = ((4 + 1) * 2 * 4) + 2;
let scrub = "guy that thinks he's fly";
let busta = scrub;
scrub = "guy that can't get no love from me";
```
![EvalCode](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/62b72ca4-7450-4a56-8ff2-db607f55e1e6)

### Statements vs. Expressions
An expression "**asks**" JavaScript for a value
```javascript
myAssignedVariable
6 + 4
document.getElementById("board")
```

A statement "**tells**" JavaScript to do something (e.g. declare/assign a variable)
```javascript
let ten = 6 + 4;
myDeclaredVariable = "new value";
let board = document.getElementById("board");
```

---

## Arrays ⚡

```javascript
let synonyms = ["plethora", "array", "cornucopia"];
```
![synonyms](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjcwemVybzV3Nmc3ZWV5ZTZkMmE4dXh2ZWl2ZmVkNGF4c3ozMDRrbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QfGYYVrbay6kssMrYn/giphy.gif)

💡 **Like** strings, arrays have a length, and each value has an index
```javascript
synonyms.length;
// 3

synonyms[1];
// "plethora"

synonyms.indexOf("cornucopia");
// 2
```

Also **like** strings, we can check if an array contains a certain value
```javascript
synonyms.includes("plethora");
// true

synonyms.includes("variety");
// false
```

**Unlike** strings, we can modify arrays
```javascript
synonyms[1] = "variety";
// synonyms ==> ["plethora", "variety", "cornucopia"]

let lastItem = synonyms.pop();
// lastItem ==> "cornucopia", synonyms ==> ["plethora", "variety"]

synonyms.push("multitude");
// synonyms ==> ["plethora", "variety", "multitude"]
```

💡 Arrays can hold any type of items, or mix and match! 
```javascript
let mixedArray = ["Mohammad", 21, "Abohasan", true, document];
```

💡 Arrays can do lots of useful tricks!
```javascript
["c", "a", "d", "b"].sort();
// ["a", "b", "c", "d"]

[100, 50, 2].sort();
// [100, 2, 50]

["lions", "tigers", "bears oh my!"].join(" & ");
// "lions & tigers & bears oh my!"

[1, 2, 3].concat([4, 5, 6]);
// [1, 2, 3, 4, 5, 6]

let arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr ==> [1, 2, 3, [4, 5, 6]]
```

> Remember ✨ **MDN** ✨ is your friend!

| Mutable | Immutable |
| ------- | --------- |
| "Mutable" data can be edited | "Immutable" data always stays the same |
| (e.g. Arrays) | (e.g. strings & other primitives) | 
| `let abcArray = ["a", "b", "c"];` <br />`abcArray[1] = "d";` <br />// abcArray ==>  ["a", "d", "c"] | `let abcString = "abc";` <br />`abcString[1] = "d";` <br />// abcString ==> "abc" |

💡 Some actions "**mutate**" an array (e.g. `oldArray.push(newValue)`) .. aka change the array **in-place**

Other actions do **not mutate** the original array, but instead **create a new copy** (e.g. `oldArray.concat(otherArray)`)

```javascript
let numbers1 = [1, 2, 3];
let result1 = numbers1.push(4);
// numbers1 ==> [1, 2, 3, 4]

let numbers2 = [1, 2, 3];
let result2 = numbers2.concat([4]);
// numbers1 ==> [1, 2, 3]
```

💡 Variables themselves can also be (im)mutable
```javascript
let letVariable = "original value";
letVariable = "new value";
// letVariable ==> "new value"

const constVariable = "original value";
constVariable = "new Value";
// TypeError: invalid assignment to const
```

🫧 **immutable variable** with **mutable value**
```javascript
const operands = [4, 6];
const sum = operands[0] + operands[1];
// sum = 10

operands[0] = 5;
// operands ==> [5, 6]
const newSum = operands[0] + operands[1];
// newSum = 11
```
![operandsArray](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/96775121-7834-482a-8185-13a0a3bc24c1)

🌟 Using **immutable** **data** & **variables** is usually **best**.

```javascript
let array1 = [1, 2, 3]; 
let array2 = array1;

array2[1] = 15;
// array1 ==> [1, 15, 3]
// array2 ==> [1, 15, 3]
```
![image](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/15c57eee-d798-46e3-ac7c-7711cbe46ee9)

```javascript
let array1 = [1, 2, 3]; 
let array2 = [...array1];

array2[1] = 15;
// array1 ==> [1, 2, 3]
// array2 ==> [1, 15, 3]
```
![image](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/31890c9e-80d4-43f8-b0cc-346c33131cc9)

---

## Objects ⚡
Objects collect multiple values together to describe more complex data.
Similar to how we can point at different values using variables in our code, objects let us point at related values using properties in the object.

We saw an object earlier:
```javascript
const js = {
    name: "JavaScript",
    abbreviation: "JS",
    isAwseome: true,
    officialSpec: "ECMAScript",
    birthYear: 1995,
    creator: "Brendan Eich"
};
```

Getting property values:
```javascript
js.name
// "JavaScript"
js["isAwesome"]
// true
```

Using property values:
```javascript
js.name.startsWith("Java");
// true
let age = 2023 - js.birthYear;
// age ==> 28
```

Setting property values:
```javascript
const indecisive = {
    lunch: "sandwich"
};

indecisive.lunch = "tacos";
indecisive.snack = "chips";
/*
  indecisive ==> {
    lunch: "tacos",
    snack = "chips"
  };
*/
```

💡 `object` is **mutable**
![objectIsMutable](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/658c9480-51e5-4d5d-a79d-3afb581b4358)


💡 to make it **immutable**
<br />
`Object.freeze()`

```javascript
const indecisive = {
    lunch: "sandwich"
};

Object.freeze(indecisive);

indecisive.lunch = "tacos";
indecisive.snack = "chips";
// no change
/*
  indecisive ==> {
    lunch: "sandwich"
  };
*/ 
```

### 📋 Exercise
Create an object representing you!
Add properties for facts important to you, e.g.: 

```javascript
const mohammad = {
  fname: "Mohammad",
  lname: "Abohasan",
  birthYear: 2002,
  pet: null,
  languages: ["English", "Turkish", "Arabic"],
  country: "Palestine",
  gpa: 93,
  age: function () {
    console.log(2023 - this.birthYear);
  }
};
```

```javascript
mohammad.age();
// 21
```

💡 `this` in a method lets us reference other properties on the object
```javascript
mohammad.speak = function () {
  console.log(`Hi my name is ${this.fname} ${this.lname}`);
};

mohammad.speak();
// Hi my name is Mohammad Abohasan
```

🧨 But be careful with `this`!
<br />
![DANGER](https://c.tenor.com/7tgvcDTOfMQAAAAC/tenor.gif)
<br />
Its behavior is complicated & can be tricky

### Nested objects
```javascript
const menu = {
    lunch: {
        appetizer: "salad",
        main: "spaghetti",
        dessert: "tiramisu"
    },
    dinner: {
        appetizer: "samosa",
        main: "saag paneer",
        dessert: "gulab jamun"
    }
};

const tiramisu = menu.lunch.dessert;
// tiramisu ==> "tiramisu"
```

### Objects in Arrays & Objects
```javascript
const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];

const spiceGirls = {
    albums: ["Spice", "Spiceworld", "Forever"],
    motto: "Girl Power",
    members: spices
};
```

### 📋 Exercise
| From the spiceGirls object, how can we retrieve |
| ------------- |
| 1. "Girl Power" |
| 2. The object representing Ginger Spice |
| 3. "Spiceworld" |
| 4. "Victoria" |

1.
```javascript
spiceGirls.motto;
```

2.
```javascript
spices[1];
spiceGirls.members[1];
```

3.
```javascript
spiceGirls.albums[1];
```

4.
```javascript
spices[4].name;
spiceGirls.members[4].name;
```

---

## Tic-Tac-Toe ⚡

```javascript
const players = [
  {
    name: "Mohammad",
    symbol: "O"
  }, {
    name: "Aya",
    symbol: "X"
  }
];

document.getElementById("p1-name").textContent = players[0].name;
document.getElementById("p1-symbol").textContent = players[0].symbol;

document.getElementById("p2-name").textContent = players[1].name;
document.getElementById("p2-symbol").textContent = players[1].symbol;

const board = document.querySelectorAll(".square");
board[0].textContent = players[1].symbol;
// ..
// ..
// ..
```
![MohammadWins](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/5fd6bd0d-d14b-4286-bbcf-09a4919c8444)

---

## Quiz Project ⚡

### 🔒 [Quiz-1](https://anjana.dev/javascript-first-steps/2-jsquiz-fancy.html)

![Quiz-1-result](https://github.com/Mohammad-Abohasan/Mastering-JavaScript-in-20-Days/assets/74917940/4976b8b6-6f6d-44ef-a255-16f54d109324)

### 🔒 [Quiz-2](https://anjana.dev/javascript-first-steps/2-jsquiz-starter.html)
```javascript
// TODO 1: Declare & assign variables pointing to the corresponding element(s)
// statement should be the "statement" div
// optionButtons should be all the elements within the "options" div
// explanation should be the "explanation" div
const statement = document.getElementById("statement");
const optionButtons = document.getElementById("options").children;
const explanation = document.getElementById("explanation");

// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation
let fact = {
    statement: "Arrays in JS are editable values",
    answer: true,
    explanation: "In JavaScript arrays are mutable values, meaning they can be edited"
};

// TODO 3: Set the text of the statement element to the fact's statement
statement.textContent = fact.statement;
```

---
---

```javascript
// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
// disable(button) should set the button element's attribute "disabled" to the value ""
// enable(button) should remove the attribute "disabled" from the button element
const enable = function (btnEl) {
  btnEl.disabled = false;
}
const disable = function (btnEl) {
  btnEl.disabled = true;
}

// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer
const isCorrect = function (guess) {
  return guess == fact.answer;
}

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
// TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element


// TODO 7: Within the event handler function, 
// Use a for loop to disable all the option buttons


// TODO 8: Within the event handler function,
// Get the guessed value from the clicked button
// Use a conditional to compare the guess to the fact's answer
// and add the "correct"/"incorrect" class as appropriate

```

---

## Functions ⚡
values **are** things.
<br />
variables **point to** things.
<br />
functions **do** things.
<br />

**parameters** are the inputs a function expects.
```javascript
// declaring (creating) a function
function add3(x, y, z) {
    console.log("My parameters are named x, y, z");
    console.log("I received the arguments", x, y, z);
    return x + y + z;
}

// calling (using) a function
const sum = add3(4, 5, 6);
// My parameters are named x, y, z
// I received the arguments 4 5 6
// sum ==> 15
```
**arguments** are the actual values the function is called with.
<br />

Parameters should be named like variables, and behave like variables within the function body.

#### JS is pretty "loosey-goosey" about missing/extra arguments
![NoArgsHere](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDlnNnRxM2FyZzdoc3NyZXEwMzZrZmdlejZ6aDluNnN5cTZ1emJyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMrKFVsJgFUOYQE/giphy.gif)

A `return` statement specifies the function's output value
<br />
Some functions don't `return` anything
```javascript
function sayHello(name) {
    console.log("Oh hi, " + name + "!");
}

sayHello("Mohammad");
// Oh hi, Mohammad!

const hm = sayHello("Aya");
// Oh hi, Aya!
// hm ==> undefined
```

### 📋 Exercise
| In the console, declare the following functions |
| ------------- |
| 1. `multiply`: given 2 numbers, return their product |
| 2. `yell`: given a lowercase string, log it in all caps to the console |
| 3. `longerThan`: given 2 arrays, return whether the first is longer than the second |

1.
```javascript
function multiply (x, y) {
  return x * y;
}

multiply(5, 3);
// 15
```

2.
```javascript
function yell (s) {
  console.log(s.toUpperCase());
}

yell("aya");
// AYA
```

3.
```javascript
function longerThan (a, b) {
  return a.length > b.length;
}

longerThan([1, 2, 3], [1, 4]);
// true
longerThan([1, 2, 3], [1, 4, 3]);
// false 
```

### Arrow functions
![ArrowFunctions](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWJvd3ZpNTd6ZzY2ZWR3MXcydHFkcDNmY2gwNGU1bXZtaW1iZWEyciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12M3HgyA9ge4z6/giphy.gif)

The `=>` "fat arrow" lets us create an unnamed function without much code.
```javascript
(x, y) => x + y
```
aka an **arrow function**

```javascript
const add = (x, y) => x + y;
```
is equivalent to
```javascript
function add(x, y) {
    return x + y;
}
```

```javascript
const square = x => x*x; 
```
is equivalent to
```javascript
function square(x) {
    return x*x;
}
```

### 📋 Exercise
| In the console, declare the following functions using arrow functions |
| ------------- |
| 1. `divide`: given 2 numbers, return the first divided by the second |
| 2. `whisper`: given an uppercase string, log it in all lowercase to the console |
| 3. `shorterThan`: given 2 arrays, return whether the first is shorter than the second |

1.
const divide = (x, y) => x / y;

divide(15, 5);
// 3
```

2.
```javascript
const whisper = s => s.toLowerCase();

whisper("AYA");
```

3.
```javascript
const shorterThan = (a, b) => a.length < b.length;

shorterThan([1, 2, 3], [1, 4]);
// false
shorterThan([1, 2], [1, 4, 3]);
// true
```

### Scope
In JS it doesn't just matter **what** variables we declare 
It also matters **where** we declare them
**Scope** determines where variables are "in play"
```javascript
function declareBankruptcy() {
    let bankruptcy = true;
}

declareBankruptcy();
// undefined

console.log(bankruptcy);
// ReferenceError: bankruptcy is not defined
```

Scopes are **nested** within the program
The widest scope is the **global** scope
Each function gets its own new scope within the scope where it was declared

```javascript
let planet = "Jupiter";

function scopeOut() {
    let planet = "Mars";
    console.log("Inner planet:", planet);
}

scopeOut();
// Inner planet: Mars

console.log("Outer planet:", planet);
// Outer planet: Jupiter
```

Within each scope, you can access variables declared in a **wider** scope (e.g. global scope)
But **not** those declared in a narrower scope (e.g. function scope)

```javascript
let globalVariable = "I live in global scope";

function narrowerScope() {
    console.log(globalVariable);
    let localVariable = "I live in the function scope";
}

narrowerScope();
// I live in global scope

console.log(localVariable);
// ReferenceError: localVariable is not defined
```

```javascript
let feeling = "free";

function trap() {
    feeling = "boxedIn";
}

trap();

console.log(feeling);
// boxedIn
```

---

## Events & Handlers ⚡
Let's make our web page **interactive**!


---

## Conditionals ⚡


---

## Map & Filter ⚡


---

## Doggos Quiz Game ⚡


---

## Data Fetching & Promises ⚡


---

## Destructuring Data ⚡


---

## Async ⚡


---

## Modules ⚡


---

## Wrapping Up ⚡


---

## Coding Challenges ⚡

### Introduction

[**Compound Assignment With Augmented Multiplication**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)
#### Solution 🥳
```javascript
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```

### DOM

[**Concatenating Strings with the Plus Equals Operator**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)
#### Solution 🥳
```javascript
let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";
```

[**Use Bracket Notation to Find the Nth-to-Last Character in a String**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object)
#### Solution 🥳
```javascript
let dog = {
  name: "Spot",
  numLegs: 4
};

console.log(dog.name);
console.log(dog.numLegs);
```

### Values & Data Types - Operators - Expressions

[**SECTION'S EXERCISES**](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week1%20-%20javascript-from-first-steps-to-professional/day%202/tasks.md)
#### Solution 🥳
1-
```javascript
let a = 0;
let b = "0";
let c = false;
let d = "false";

console.log(a == b);
// true (0 == "0" ==> same value - loosey goosey)
console.log(b === c);
// false
// ("0" === false ==> same value but not same data type)
console.log(!!d);
// true
// d ==> "false"
// !d ==> false cuz the variable is not empty or false
// !!d ==> true
```
2-
```javascript
console.log(4 + 5 * "7");
// 39
// 1st (5 * "7" ==> 35).
// 2nd (4 + 35 ==> 39).
```
3-
```javascript
let result = 5 + 2 * 3 - 1;
// 10
// 1st (2 * 3 ==> 6).
// 2nd (5 + 6 ==> 11).
// 3rd (11 - 1 ==> 10).
```
4-
```javascript
let x = 10;
let y = '10';

console.log(x == y);
// true
// 10 == '10' ==> same value - loosey goosey
console.log(x === y);
// false
// 10 === '10' ==> same value but not same data type
```
5-
```javascript
let num = "15";
let isPositive = true;
let result = (num > 10 && isPositive) || num < 0;

console.log(result);
// true
// 1st num > 10 ==> "15" > 10 ==> true.
// 2nd isPositive ==> true.
// 3rd true && true ==> true.
// The rest of the statement is ignored.
```

### Arrays

[**Copy Array Items Using slice()**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)
#### Solution 🥳
```javascript
function forecast(arr) {
  return arr.slice(2, 4);
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```
[**Combine Arrays with the Spread Operator**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)
#### Solution 🥳
```javascript
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());
```

### Objects

[**Profile Lookup**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)
#### Solution 🥳
```javascript
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for(let i = 0; i < contacts.length; i++) {
    if(name === contacts[i].firstName) {
      return contacts[i][prop] ? contacts[i][prop] : "No such property";
    }
  }

  return "No such contact";
}

lookUpProfile("Akira", "likes");
```

### Quiz Project

[**Write Reusable JavaScript with Functions**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)
#### Solution 🥳
```javascript
function reusableFunction () {
  console.log("Hi World");
}

reusableFunction();
```
[**Understanding Undefined Value returned from a Function**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function)
#### Solution 🥳
```javascript
let sum = 0;

function addThree () {
  sum = sum + 3;
}

function addFive () {
  sum = sum + 5;
}

addThree();
addFive();
```
[**Return a Value from a Function with Return**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)
#### Solution 🥳
```javascript
function timesFive (n) {
  return n * 5;
}
```
