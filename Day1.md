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

## Coding Challenges

[First-Challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)
#### Solution 🥳
```javascript
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```

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

## Coding Challenges

[First-Challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)
#### Solution 🥳
```javascript
let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";
```

[Second-Challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object)
#### Solution 🥳
```javascript
let dog = {
  name: "Spot",
  numLegs: 4
};

console.log(dog.name);
console.log(dog.numLegs);
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
## Quiz Project ⚡
