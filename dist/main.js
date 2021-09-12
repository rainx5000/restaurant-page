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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n  const content = document.querySelector(\"#content\");\n  const contactContainer = document.createElement('main');\n  const test = document.createElement('p');\n  test.textContent = 'This is contact';\n  content.append(contactContainer);\n  contactContainer.append(test);\n  \n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n  const content = document.querySelector(\"#content\");\n  const homeContainer = document.createElement('main');\n  const test = document.createElement('p');\n  test.textContent = 'This is home';\n  content.append(homeContainer);\n  homeContainer.append(test);\n  homeContainer.classList.add('home');\n  \n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction loadHeader() {\n  const content = document.querySelector('#content');\n\n  const navContainer = document.createElement(\"nav\");\n  const navigationList = document.createElement(\"ul\");\n  const navHome = document.createElement('li');\n  const navMenu = document.createElement('li');\n  const navContact = document.createElement('li');\n  \n  navigationList.classList.add(\"navigation-list\");\n  content.prepend(navContainer);\n  navContainer.append(navigationList);\n\n  navHome.textContent = \"Home\";\n  navHome.classList.add('nav-home');\n  navMenu.textContent = \"Menu\";\n  navMenu.classList.add('nav-menu');\n  navContact.textContent = \"Contact\";\n  navContact.classList.add(\"nav-contact\");\n  \n  navigationList.append(navHome, navMenu, navContact);\n}\n\nfunction initialLoad() {\n  loadHeader();\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n  tabHandler();\n  isActive(document.querySelector('.nav-home'));\n}\n\nfunction clearContent () {\n  const content = document.querySelector('#content');\n  content.removeChild(content.lastChild);\n}\n\nfunction tabHandler () {\n  const nav = document.querySelector('.navigation-list');\n  nav.addEventListener('click', (e) => {\n    const tab = e.target.textContent.toLowerCase()\n    loadPage(tab);\n    isActive(e.target);\n  })\n}\n\nfunction loadPage(tab) {\n  clearContent();\n  switch(tab) {\n    case 'menu':\n      (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n      break;\n    case 'home':\n      (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n      break;\n    case 'contact':\n      (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact)();\n      break;\n  }\n}\n\nfunction isActive(tabElement) {\n  const nav = document.querySelector('.navigation-list');\n  Array.from(nav.children).forEach(tab => tab.classList.remove('active'));\n  tabElement.classList.add('active');\n}\n\ninitialLoad()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n  const content = document.querySelector(\"#content\");\n  const menuContainer = document.createElement('main');\n  const test = document.createElement('p');\n  test.textContent = 'This is menu';\n  content.append(menuContainer);\n  menuContainer.append(test);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;