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

/***/ "./src/bomb-in.js":
/*!************************!*\
  !*** ./src/bomb-in.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bombIn)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction bombIn() {\n  let c = 0;\n  let fild1 = document.querySelector('.fild');\n  for (let i = 0; i < fild1.children.length; i++) {\n    for (let j = 0; j < fild1.children[i].children.length; j++) {\n      let a = c + j;\n      fild1.children[i].children[j].className = 'not-button-bomb';\n      fild1.children[i].children[j].disabled = true;\n      for (let count in _index__WEBPACK_IMPORTED_MODULE_0__.mas) {\n        if (_index__WEBPACK_IMPORTED_MODULE_0__.mas[count] == a) {\n          fild1.children[i].children[j].textContent = 'x';\n          fild1.children[i].children[j].className = 'button-bomb';\n          fild1.children[i].children[j].disabled = true;\n        }\n      }\n    }\n    c += _index__WEBPACK_IMPORTED_MODULE_0__.numberOfRows;\n  }\n  return;\n}\n\n//# sourceURL=webpack://node_js_express/./src/bomb-in.js?");

/***/ }),

/***/ "./src/click-button.js":
/*!*****************************!*\
  !*** ./src/click-button.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickButton)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _fild_click__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fild-click */ \"./src/fild-click.js\");\n/* harmony import */ var _if_the_buttonIs_final__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./if-the-buttonIs-final */ \"./src/if-the-buttonIs-final.js\");\n/* harmony import */ var _open_left_to_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./open-left-to-number */ \"./src/open-left-to-number.js\");\n/* harmony import */ var _open_rite_to_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./open-rite-to-number */ \"./src/open-rite-to-number.js\");\n/* harmony import */ var _open_up_to_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./open-up-to-number */ \"./src/open-up-to-number.js\");\n/* harmony import */ var _open_doun_to_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open-doun-to-number */ \"./src/open-doun-to-number.js\");\n\n\n\n\n\n\n\n\n\n\nfunction clickButton() {\n  let but = this;\n  let c = 0;\n  let d = 0;\n  let fild1 = document.querySelector('.fild');\n  for (let i = 0; i < fild1.children.length; i++) {\n    for (let j = 0; j < fild1.children[i].children.length; j++) {\n      let a = c + j;\n      for (let count in _index__WEBPACK_IMPORTED_MODULE_0__.mas) {\n        if (_index__WEBPACK_IMPORTED_MODULE_0__.mas[count] == a) {\n          if (_index__WEBPACK_IMPORTED_MODULE_0__.numberClicks.textContent == 0) {\n            if (this == fild1.children[i].children[j]) {\n              console.log(_index__WEBPACK_IMPORTED_MODULE_0__.mas);\n              _index__WEBPACK_IMPORTED_MODULE_0__.mas.splice(count, 1, _index__WEBPACK_IMPORTED_MODULE_0__.mas[count] + 1);\n              function func() {\n                for (let count1 in _index__WEBPACK_IMPORTED_MODULE_0__.mas) {\n                  if (_index__WEBPACK_IMPORTED_MODULE_0__.mas[count1] == _index__WEBPACK_IMPORTED_MODULE_0__.mas[count]) {\n                    d++;\n                    if (d > 1) {\n                      _index__WEBPACK_IMPORTED_MODULE_0__.mas.splice(count, 1, _index__WEBPACK_IMPORTED_MODULE_0__.mas[count1] + 1);\n                      return func();\n                    }\n                  }\n                }\n              }\n              func();\n            }\n          }\n          /*fild1.children[i].children[j].textContent = 'x'*/\n        }\n      }\n    }\n\n    c += Number(_index__WEBPACK_IMPORTED_MODULE_0__.numberOfRows);\n  }\n  setTimeout(() => {\n    _index__WEBPACK_IMPORTED_MODULE_0__.numberClicks.textContent = Number(_index__WEBPACK_IMPORTED_MODULE_0__.numberClicks.innerHTML) + 1;\n    (0,_fild_click__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(but);\n    (0,_open_rite_to_number__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(but);\n    (0,_open_left_to_number__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(but);\n    (0,_open_up_to_number__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(but);\n    (0,_open_doun_to_number__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(but);\n    (0,_if_the_buttonIs_final__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n}\n\n//# sourceURL=webpack://node_js_express/./src/click-button.js?");

/***/ }),

/***/ "./src/fild-click.js":
/*!***************************!*\
  !*** ./src/fild-click.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fildClick)\n/* harmony export */ });\n/* harmony import */ var _switch_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch-case */ \"./src/switch-case.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _bomb_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bomb-in */ \"./src/bomb-in.js\");\n\n\n\n\nfunction fildClick(event) {\n  let c = 0;\n  let d = 0;\n  let fild1 = document.querySelector('.fild');\n  for (let i = 0; i < fild1.children.length; i++) {\n    for (let j = 0; j < fild1.children[i].children.length; j++) {\n      if (event == fild1.children[i].children[j]) {\n        if (event == fild1.children[i].children[fild1.children[i].children.length - 1]) {\n          let a = c + j;\n          for (let count in _index__WEBPACK_IMPORTED_MODULE_1__.mas) {\n            if (_index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a) {\n              event.textContent = 'x';\n              event.className = 'button-bomb';\n              event.disabled = true;\n              (0,_bomb_in__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n              return;\n            }\n            if (_index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - 1 || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + _index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows - 1) || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows + 1) || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - _index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows) {\n              d += 1;\n              (0,_switch_case__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(d, event);\n              event.textContent = d;\n              event.className = 'not-button-bomb';\n              event.disabled = true;\n            }\n          }\n        } else if (event == fild1.children[i].children[0]) {\n          let a = c + j;\n          for (let count in _index__WEBPACK_IMPORTED_MODULE_1__.mas) {\n            if (_index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a) {\n              event.textContent = 'x';\n              event.className = 'button-bomb';\n              event.disabled = true;\n              (0,_bomb_in__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n              return;\n            }\n            if (_index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + 1 || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows + 1) || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + _index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - _index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows - 1)) {\n              d += 1;\n              (0,_switch_case__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(d, event);\n              event.textContent = d;\n              event.className = 'not-button-bomb';\n              event.disabled = true;\n            }\n          }\n        } else if (event !== fild1.children[i].children[0] || event == fild1.children[i].children[fild1.children[i].children.length - 1]) {\n          let a = c + j;\n          for (let count in _index__WEBPACK_IMPORTED_MODULE_1__.mas) {\n            if (_index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a) {\n              event.textContent = 'x';\n              event.className = 'button-bomb';\n              event.disabled = true;\n              (0,_bomb_in__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n              return;\n            }\n            if (_index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + 1 || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - 1 || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows + 1) || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + _index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows - 1) || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows + 1) || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - _index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows - 1)) {\n              d += 1;\n              (0,_switch_case__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(d, event);\n              event.textContent = d;\n              event.className = 'not-button-bomb';\n              event.disabled = true;\n            }\n          }\n        }\n      }\n    }\n    c += Number(_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows);\n  }\n  event.className = 'not-button-bomb';\n  event.disabled = true;\n  return;\n}\n\n//# sourceURL=webpack://node_js_express/./src/fild-click.js?");

/***/ }),

/***/ "./src/if-the-buttonIs-final.js":
/*!**************************************!*\
  !*** ./src/if-the-buttonIs-final.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ifTheButtonIsFinal)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction ifTheButtonIsFinal() {\n  let b = 0;\n  let d = 0;\n  let fild1 = document.querySelector('.fild');\n  for (let i = 0; i < fild1.children.length; i++) {\n    for (let j = 0; j < fild1.children[i].children.length; j++) {\n      if (fild1.children[i].children[j].className == 'button-bomb') {\n        return;\n      } else if (fild1.children[i].children[j].className == 'not-button-bomb') {\n        d++;\n        if (Number(d) == _index__WEBPACK_IMPORTED_MODULE_0__.numberOfRows * _index__WEBPACK_IMPORTED_MODULE_0__.numberOfRows - Number(_index__WEBPACK_IMPORTED_MODULE_0__.numberOfBomb)) {\n          let restart = document.createElement('div');\n          restart.className = 'restart';\n          for (let h = 0; h < fild1.children.length; h++) {\n            for (let g = 0; g < fild1.children[h].children.length; g++) {\n              let e = b + g;\n              fild1.children[h].children[g].className = 'not-button-bomb';\n              fild1.children[h].children[g].disabled = true;\n              for (let count in _index__WEBPACK_IMPORTED_MODULE_0__.mas) {\n                if (_index__WEBPACK_IMPORTED_MODULE_0__.mas[count] == e) {\n                  fild1.children[h].children[g].textContent = 'x';\n                  fild1.children[h].children[g].className = 'button-bomb-heppi';\n                  fild1.children[h].children[g].disabled = true;\n                }\n              }\n            }\n            b += Number(_index__WEBPACK_IMPORTED_MODULE_0__.numberOfRows);\n          }\n          /* conteiner.appendChild(restart)*/\n          return;\n        }\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://node_js_express/./src/if-the-buttonIs-final.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mas\": () => (/* binding */ mas),\n/* harmony export */   \"numberClicks\": () => (/* binding */ numberClicks),\n/* harmony export */   \"numberOfBomb\": () => (/* binding */ numberOfBomb),\n/* harmony export */   \"numberOfRows\": () => (/* binding */ numberOfRows)\n/* harmony export */ });\n/* harmony import */ var _click_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click-button */ \"./src/click-button.js\");\n/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-game */ \"./src/start-game.js\");\n\n\nlet numberOfRows = 8;\nlet numberOfBomb = 10;\nlet arr = {\n  'easy': 8,\n  'difficult': 10,\n  'advanced': 12\n};\nlet body = document.querySelector('body');\nlet conteiner = document.createElement('div');\nconteiner.className = 'conteiner';\nbody.appendChild(conteiner);\nlet numberClicks = document.createElement('p');\nnumberClicks.textContent = 0;\nconteiner.appendChild(numberClicks);\nlet select = document.createElement('select');\nconteiner.appendChild(select);\nselect.id = 'select';\nlet selectSelector = document.querySelector('#select');\nfor (let value1 in arr) {\n  let option = document.createElement('option');\n  option.text = value1;\n  option.value = value1;\n  option.selected = true;\n  selectSelector.appendChild(option);\n}\nselectSelector.value = '';\nlet buttonRest = document.createElement('button');\nbuttonRest.textContent = String('RESTART');\nbuttonRest.addEventListener(\"click\", () => {\n  return mas = (0,_start_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fild, _click_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], numberOfRows, numberOfBomb);\n});\nconteiner.appendChild(buttonRest);\nlet fild = document.createElement('div');\nfild.className = 'fild';\nconteiner.appendChild(fild);\nselect.addEventListener('change', function () {\n  numberClicks.textContent = 0;\n  for (let i = 0; i < fild.children.length;) {\n    fild.removeChild(fild.children[i]);\n  }\n  this.selected = true;\n  numberOfRows = arr[this.value];\n  mas = (0,_start_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fild, _click_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], numberOfRows, numberOfBomb);\n});\nlet mas = (0,_start_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fild, _click_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], numberOfRows, numberOfBomb);\n\n//# sourceURL=webpack://node_js_express/./src/index.js?");

/***/ }),

/***/ "./src/open-doun-to-number.js":
/*!************************************!*\
  !*** ./src/open-doun-to-number.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openDounToNumber)\n/* harmony export */ });\n/* harmony import */ var _open_rite_to_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./open-rite-to-number */ \"./src/open-rite-to-number.js\");\n/* harmony import */ var _open_left_to_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./open-left-to-number */ \"./src/open-left-to-number.js\");\n\n\nfunction openDounToNumber(event) {\n  let fild1 = document.querySelector('.fild');\n  for (let i = 0; i < fild1.children.length; i++) {\n    for (let j = 0; j < fild1.children[i].children.length; j++) {\n      if (event == fild1.children[i].children[j]) {\n        if (fild1.children[i + 1] == undefined || event.textContent !== ' ' || fild1.children[i + 1].children[j].className !== 'button') {\n          return;\n        }\n        (0,_open_rite_to_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fild1.children[i + 1].children[j]);\n        (0,_open_left_to_number__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fild1.children[i + 1].children[j]);\n        event = fild1.children[i + 1].children[j];\n        return openDounToNumber(event);\n      }\n    }\n  }\n  return;\n}\n\n//# sourceURL=webpack://node_js_express/./src/open-doun-to-number.js?");

/***/ }),

/***/ "./src/open-left-to-number.js":
/*!************************************!*\
  !*** ./src/open-left-to-number.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openLeftToNumber)\n/* harmony export */ });\n/* harmony import */ var _open_up_fild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./open-up-fild */ \"./src/open-up-fild.js\");\n\nfunction openLeftToNumber(event) {\n  let fild1 = document.querySelector('.fild');\n  for (let i = 0; i < fild1.children.length; i++) {\n    for (let j = 0; j < fild1.children[i].children.length; j++) {\n      if (event.className == 'button-bomb') {\n        return;\n      } else if (event == fild1.children[i].children[j]) {\n        for (let h = i; h >= 0;) {\n          for (let g = j; g >= 0;) {\n            if (fild1.children[h].children[g] == undefined) {\n              console.log(fild1.children[h].children[g]);\n              if (fild1.children[h - 1].children[g] !== undefined) {\n                j = 0;\n                i = i - 1;\n              }\n              return;\n            } else {\n              if (fild1.children[h].children.length == g) {\n                console.log(fild1.children[h].children[g]);\n                j = 0;\n                i = i - 1;\n              } else {\n                fild1.children[h].children[g].className = 'not-button-bomb';\n                fild1.children[h].children[g].disabled = true;\n                debugger;\n                if ((0,_open_up_fild__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fild1.children[h].children[g]) > 0) {\n                  g--;\n                  return;\n                } else {\n                  if (fild1.children[h].children[g - 1] == undefined) {\n                    return;\n                  } else {\n                    g--;\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  return;\n}\n\n//# sourceURL=webpack://node_js_express/./src/open-left-to-number.js?");

/***/ }),

/***/ "./src/open-rite-to-number.js":
/*!************************************!*\
  !*** ./src/open-rite-to-number.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openRiteToNumber)\n/* harmony export */ });\n/* harmony import */ var _open_up_fild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./open-up-fild */ \"./src/open-up-fild.js\");\n\nfunction openRiteToNumber(event) {\n  let fild1 = document.querySelector('.fild');\n  for (let i = 0; i < fild1.children.length; i++) {\n    for (let j = 0; j < fild1.children[i].children.length; j++) {\n      if (event.className == 'button-bomb') {\n        return;\n      } else if (event == fild1.children[i].children[j]) {\n        for (let h = i; h < fild1.children.length;) {\n          for (let g = j; g < fild1.children[h].children.length;) {\n            if (fild1.children[h].children[g] == undefined) {\n              if (fild1.children[h + 1].children[g] !== undefined) {\n                j = 0;\n                i = i + 1;\n              }\n              return;\n            } else {\n              if (fild1.children[h].children.length == g) {\n                j = 0;\n                i = i + 1;\n              } else {\n                fild1.children[h].children[g].className = 'not-button-bomb';\n                fild1.children[h].children[g].disabled = true;\n                debugger;\n                if ((0,_open_up_fild__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fild1.children[h].children[g]) > 0) {\n                  g++;\n                  return;\n                } else {\n                  if (fild1.children[h].children[g + 1] == undefined) {\n                    return;\n                  } else {\n                    g++;\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  return;\n}\n\n//# sourceURL=webpack://node_js_express/./src/open-rite-to-number.js?");

/***/ }),

/***/ "./src/open-up-fild.js":
/*!*****************************!*\
  !*** ./src/open-up-fild.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openUpFild)\n/* harmony export */ });\n/* harmony import */ var _switch_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch-case */ \"./src/switch-case.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction openUpFild(event) {\n  debugger;\n  let c = 0;\n  let d = 0;\n  let fild1 = document.querySelector('.fild');\n  for (let i = 0; i < fild1.children.length; i++) {\n    for (let j = 0; j < fild1.children[i].children.length; j++) {\n      if (event == fild1.children[i].children[j]) {\n        if (event == fild1.children[i].children[fild1.children[i].children.length - 1]) {\n          let a = c + j;\n          for (let count in _index__WEBPACK_IMPORTED_MODULE_1__.mas) {\n            if (_index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - 1 || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + _index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows - 1) || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows + 1) || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - _index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows) {\n              d += 1;\n              (0,_switch_case__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(d, event);\n              event.textContent = d;\n              event.className = 'not-button-bomb';\n              event.disabled = true;\n            }\n          }\n        } else if (event == fild1.children[i].children[0]) {\n          let a = c + j;\n          for (let count in _index__WEBPACK_IMPORTED_MODULE_1__.mas) {\n            if (_index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + 1 || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows + 1) || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + _index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - _index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows - 1)) {\n              d += 1;\n              (0,_switch_case__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(d, event);\n              event.textContent = d;\n              event.className = 'not-button-bomb';\n              event.disabled = true;\n            }\n          }\n        } else if (event !== fild1.children[i].children[0] || event == fild1.children[i].children[fild1.children[i].children.length - 1]) {\n          let a = c + j;\n          for (let count in _index__WEBPACK_IMPORTED_MODULE_1__.mas) {\n            if (_index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + 1 || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - 1 || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows + 1) || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + _index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a + (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows - 1) || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows + 1) || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - _index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows || _index__WEBPACK_IMPORTED_MODULE_1__.mas[count] == a - (_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows - 1)) {\n              d += 1;\n              (0,_switch_case__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(d, event);\n              event.textContent = d;\n              event.className = 'not-button-bomb';\n              event.disabled = true;\n            }\n          }\n        }\n      }\n    }\n    c += Number(_index__WEBPACK_IMPORTED_MODULE_1__.numberOfRows);\n  }\n  return d;\n}\n\n//# sourceURL=webpack://node_js_express/./src/open-up-fild.js?");

/***/ }),

/***/ "./src/open-up-to-number.js":
/*!**********************************!*\
  !*** ./src/open-up-to-number.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openUpToNumber)\n/* harmony export */ });\n/* harmony import */ var _open_rite_to_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./open-rite-to-number */ \"./src/open-rite-to-number.js\");\n/* harmony import */ var _open_left_to_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./open-left-to-number */ \"./src/open-left-to-number.js\");\n\n\nfunction openUpToNumber(event) {\n  let fild1 = document.querySelector('.fild');\n  for (let i = 0; i < fild1.children.length; i++) {\n    for (let j = 0; j < fild1.children[i].children.length; j++) {\n      if (event == fild1.children[i].children[j]) {\n        if (fild1.children[i - 1] == undefined || event.textContent !== ' ' || fild1.children[i - 1].children[j].className !== 'button') {\n          return;\n        }\n        (0,_open_rite_to_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fild1.children[i - 1].children[j]);\n        (0,_open_left_to_number__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fild1.children[i - 1].children[j]);\n        event = fild1.children[i - 1].children[j];\n        return openUpToNumber(event);\n      }\n    }\n  }\n  return;\n}\n\n//# sourceURL=webpack://node_js_express/./src/open-up-to-number.js?");

/***/ }),

/***/ "./src/start-game.js":
/*!***************************!*\
  !*** ./src/start-game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\nfunction start(fild, clickButton, numberOfRows, numberOfBomb) {\n  const mas = [...Array(numberOfRows * numberOfRows).keys()].sort(() => Math.random() - 0.5).slice(0, Number(numberOfBomb));\n  if (fild.children.length > 0) {\n    for (let i = 0; i < fild.children.length;) {\n      fild.removeChild(fild.children[i]);\n    }\n  }\n  _index__WEBPACK_IMPORTED_MODULE_0__.numberClicks.textContent = 0;\n  for (let i = 0; i < Number(numberOfRows); i++) {\n    let rou = document.createElement('div');\n    rou.className = 'rou';\n    fild.appendChild(rou);\n    for (let j = 0; j < Number(numberOfRows); j++) {\n      let b = ' ';\n      let button = document.createElement('button');\n      button.className = 'button';\n      button.textContent = String(b);\n      button.addEventListener(\"click\", clickButton);\n      rou.appendChild(button);\n    }\n  }\n  return mas;\n}\n\n//# sourceURL=webpack://node_js_express/./src/start-game.js?");

/***/ }),

/***/ "./src/switch-case.js":
/*!****************************!*\
  !*** ./src/switch-case.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fild)\n/* harmony export */ });\nfunction fild(d, event) {\n  switch (d) {\n    case 1:\n      event.style = 'color: #000000';\n      break;\n    case 2:\n      event.style = 'color: #0019ff';\n      break;\n    case 3:\n      event.style = 'color: #ff9500';\n      break;\n    case 4:\n      event.style = 'color: #00ff23';\n      break;\n    case 5:\n      event.style = 'color: aqua';\n      break;\n    case 6:\n      event.style = 'color: #ff0000';\n      break;\n    case 7:\n      event.style = 'color: #00054f';\n      break;\n    case numberOfRows:\n      event.style = 'color: #4f0000';\n      break;\n    default:\n      console.log(\"Sorry, we are out of \" + d + \".\");\n  }\n}\n\n//# sourceURL=webpack://node_js_express/./src/switch-case.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;