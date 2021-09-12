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

eval("function loadHeader() {\n  const page = document.querySelector('body');\n\n  const navContainer = document.createElement(\"nav\");\n  const navigationList = document.createElement(\"ul\");\n  const navHome = document.createElement('li');\n  const navMenu = document.createElement('li');\n  const navContact = document.createElement('li');\n  \n  navigationList.classList.add(\"navigation-list\");\n  page.prepend(navContainer);\n  navContainer.append(navigationList);\n\n  navHome.textContent = \"Home\";\n  navHome.classList.add('nav-home');\n  navMenu.textContent = \"Menu\";\n  navMenu.classList.add('nav-menu');\n  navContact.textContent = \"Contact\";\n  navContact.classList.add(\"nav-contact\");\n  \n  navigationList.append(navHome, navMenu, navContact);\n}\n\n\nfunction initialLoad() {\n  loadHeader();\n  // loadHome();\n}\n\ninitialLoad()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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