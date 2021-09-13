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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n  const content = document.querySelector(\"#content\");\n  const contactContainer = document.createElement('main');\n\n  const title = document.createElement('h2');\n  const email = document.createElement('p');\n  const phone = document.createElement('p');\n\n  title.textContent = \"Contact Us\";\n  email.textContent = \"Email: customer@thespot.com\"\n  phone.textContent = \"Phone: 413-445-7688\";\n\n  contactContainer.append(title, email, phone)\n\n  content.append(contactContainer);\n\n  \n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu),\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nconst menu = {\n  \"burger\": {\n    img: '../dist/images/burger.jpg',\n    name: 'Loaded Burger',\n    price: '$12.99'\n  },\n  \"bonein\": {\n    img: '../dist/images/bonein.jpeg',\n    name: '8-Piece Tradition Wings',\n    price: '$7.99'\n  },\n  \"boneout\": {\n    img: '../dist/images/boneless.jpeg',\n    name: '8-Piece Boneless Wings',\n    price: '$7.99'\n  },\n  \"fries\": {\n    img: '../dist/images/french-fries.jpg',\n    name: 'Fries',\n    price: '$4.99'\n  }\n}\n\nconst home = {\n  title: 'The Spot',\n  description: `The Spot, opened it's doors in 2011, in West springfield, MA. Now it spans over 600 locations across the United States, and Canada. It's founder, xXxFalconSniperDestroyerxXx used to have a favorite restaurant that shut down, it was considered \"The Spot\" with his boys. That gave him the idea, why not create a spot for everyone? That is when he decided to open his own franchise, naming it \"The Spot\".`,\n  img: '../dist/images/the-spot.jpg'\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/data.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\nfunction loadHome() {\n  const content = document.querySelector(\"#content\");\n  const homeContainer = document.createElement('main');\n  const storeName = document.createElement('h1');\n  const storeImg = document.createElement('img');\n  const storeDisc = document.createElement('p');\n  storeName.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.home.title;\n  storeImg.src = _data__WEBPACK_IMPORTED_MODULE_0__.home.img;\n  storeImg.alt = \"First location that opened\";\n  storeDisc.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.home.description;\n  content.append(homeContainer);\n  homeContainer.append(storeName, storeImg, storeDisc);\n  homeContainer.classList.add('home');\n  \n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\nfunction loadMenu() {\n  const content = document.querySelector(\"#content\");\n  const menuContainer = document.createElement('main');\n  content.append(menuContainer);\n  menuContainer.classList.add('menu');\n\n  for (let item in _data__WEBPACK_IMPORTED_MODULE_0__.menu) {\n    const img = _data__WEBPACK_IMPORTED_MODULE_0__.menu[item].img;\n    const name = _data__WEBPACK_IMPORTED_MODULE_0__.menu[item].name;\n    const price = _data__WEBPACK_IMPORTED_MODULE_0__.menu[item].price;\n\n    const food = MenuItem(img, name, price);\n    menuContainer.append(food)\n  }\n\n\n\n}\n\nconst MenuItem = (img, name, price) => {\n  const menuPage = document.querySelector('.menu');\n  const itemContainer = document.createElement('div');\n\n  // menuPage.append(itemContainer);\n\n  const ItemImg = document.createElement('img');\n  ItemImg.src = img;\n  const ItemName = document.createElement('h3');\n  ItemName.textContent = name;\n  const ItemPrice = document.createElement('p');\n  ItemPrice.textContent = price;\n  itemContainer.append(ItemImg, ItemName, ItemPrice)\n\n  return itemContainer\n    \n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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