/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\nconst page = document.querySelector('body');\n\nconst navContainer = document.createElement(\"nav\");\nconst navigationList = document.createElement(\"ul\");\nconst navHome = document.createElement('li');\nconst navMenu = document.createElement('li');\nconst navContact = document.createElement('li');\n\nnavigationList.classList.add(\"navigation-list\");\n\npage.prepend(navContainer);\nnavContainer.append(navigationList);\n\nnavHome.textContent = \"Home\";\nnavHome.classList.add('nav-home');\nnavMenu.textContent = \"Menu\";\nnavMenu.classList.add('nav-menu');\nnavContact.textContent = \"Contact\";\nnavContact.classList.add(\"nav-contact\");\n\nnavigationList.append(navHome, navMenu, navContact);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;