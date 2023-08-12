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

----

## DOM ⚡
The **Document Object Model** connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory.
The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

```javascript
document
// return html document
```

```javascript
document.title
// return title of the document
```

```javascript
document.body
// return body
```

```javascript
document.body.children
// return all of the child elements of the body
```

```javascript
document.getElementById("board")
document.querySelector("#board")
// return first element with an id="board"
```

```javascript
document.getElementsByTagName("h1")
document.querySelectorAll("h1")
// return all the h1 elements
```

```javascript
document.getElementsByClassName("player")
document.querySelectorAll(".player")
// return all the elements with class="player"
```

```javascript
document.getElementsByClassName("player").length
document.querySelectorAll(".player").length
// return the number of elements with class="player"
```

```javascript
document.getElementById("p1-name").textContent
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
document.getElementsByTagName("p")
document.querySelectorAll("p")
```
2.
```javascript
document.getElementById("p1-symbol").textContent
document.querySelector("#p1-symbol").textContent
```
3.
```javascript
document.getElementsByClassName("square").length
document.querySelectorAll(".square").length
```
4.
```javascript
document.getElementsByTagName("h2")[0].textContent
document.querySelector("h2").textContent
```

---

```javascript
document.title = "My page"
// replace title
```

```javascript
document.getElementById("p1-name").textContent = "Mohammad"
// replace the text of the #p1-name element
```

```javascript
document.getElementById("p1-name").append(" & Abohasan")
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
document.getElementById("p1-name").textContent = "Mohammad"
document.getElementById("p2-name").textContent = "Aya"
```
2.
```javascript
document.getElementById("p1-symbol").textContent = "O"
document.getElementById("p2-symbol").textContent = "X"
```
3.
```javascript
document.getElementsByTagName("h2")[0].append(" and love")
```

---


## Values & Data Types ⚡
## Operators ⚡
## Expressions ⚡
## Arrays ⚡
## Objects ⚡
## Tic-Tac-Toe ⚡
## Quiz Project ⚡
