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
letAssignedVariable = "such efficient, amaze";
```


---

## Arrays ⚡
## Objects ⚡
## Tic-Tac-Toe ⚡
## Quiz Project ⚡
