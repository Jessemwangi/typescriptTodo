/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nconst input = document.querySelector(\"#myTodo\");\nconst btn = document.querySelector(\"#addTodo\");\nconst ul = document.querySelector(\"#repos-list\");\nconst closeT = document.getElementsByClassName(\"close\");\nlet todoList = [];\nlet li;\nlet textNode;\ntodoList = localStorage.getItem(\"todos\")\n    ? JSON.parse(localStorage.getItem(\"todos\"))\n    : todoList;\nconsole.log(todoList);\nconst addTodo = (e) => {\n    e.preventDefault();\n    const newTodo = {\n        id: todoList.length > 0 ? Math.max(...todoList.map(todo => todo.id)) + 1 : 1,\n        todo: input.value,\n        isdone: false,\n    };\n    if (newTodo.todo === \"\") {\n        alert(\"You must add a new todo!\");\n        return;\n    }\n    else {\n        todoList = [...todoList, newTodo];\n        localStorage.setItem(\"todos\", JSON.stringify(todoList));\n        input.value = \"\";\n        input.focus();\n        renderdata();\n    }\n    console.log(newTodo);\n};\nconst renderdata = () => {\n    ul.innerHTML = \"\";\n    todoList.forEach((elem) => {\n        li = document.createElement(\"li\");\n        //   li.addEventListener('click', handleDone)\n        textNode = document.createTextNode(elem.todo);\n        if (elem.isdone == true) {\n            li.classList.add(\"checked\");\n        }\n        li.addEventListener('click', (e) => handleDone(e, elem.id));\n        li.appendChild(textNode);\n        ul.appendChild(li); //span start\n        let span = document.createElement(\"SPAN\");\n        span.setAttribute('id', elem.id.toString());\n        span.className = \"close\";\n        span.addEventListener(\"click\", () => handleDeleteTodo(elem.id));\n        li.appendChild(span); //span ends\n    });\n};\nconst handleDone = (e, id) => {\n    e.preventDefault();\n    let index = todoList.findIndex(item => item.id == id);\n    todoList[index] = { ...todoList[index], isdone: !todoList[index].isdone };\n    localStorage.setItem(\"todos\", JSON.stringify(todoList));\n    renderdata();\n};\nconst handleDeleteTodo = (id) => {\n    // todoList.splice(\n    //   id - 1,\n    //   1\n    // );\n    todoList = todoList.filter((todo) => todo.id !== id);\n    ul.innerHTML = \"\";\n    localStorage.setItem(\"todos\", JSON.stringify(todoList));\n    renderdata();\n};\nif (todoList.length > 0) {\n    renderdata();\n}\nbtn.addEventListener(\"click\", addTodo);\n\n\n//# sourceURL=webpack://todovanillavs/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;