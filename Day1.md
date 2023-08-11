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
document // return html document
```

```javascript
document.title // return title of the document
```

```javascript
document.body // return body
```

```javascript
document.body.children // return all of the child elements of the body
```

```javascript
document.getElementById("board") // return first element with an id="board"
document.querySelector("#board") // return first element with an id="board"
```

```javascript
document.getElementsByTagName("h1") // return all the h1 elements
document.querySelectorAll("h1") // return all the h1 elements
```

```javascript
document.getElementsByClassName("player") // return all the elements with class="player"
document.querySelectorAll(".player") // return all the elements with class="player"
```

## Values & Data Types ⚡
## Operators ⚡
## Expressions ⚡
## Arrays ⚡
## Objects ⚡
## Tic-Tac-Toe ⚡
## Quiz Project ⚡
