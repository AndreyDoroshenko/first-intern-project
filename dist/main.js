/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Lato|Open+Sans|Oswald|Raleway|Roboto|Ubuntu&display=swap);\", \"\"]);\n// Module\nexports.push([module.i, \"body {\\n    padding: 0;\\n    margin: 0;\\n    background-color: whitesmoke;\\n    color: #919397;\\n    font-family: 'Ubuntu', sans-serif;\\n}\\n\\n:focus {\\n    outline: none;\\n}\\n\\n.main {\\n    min-width: 300px;\\n    max-width: 450px;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    align-content: space-between;\\n    padding: 16px;\\n    box-sizing: border-box;\\n    margin-left: auto;\\n    margin-right: auto;\\n}\\n\\n.header {\\n    width: 100%;\\n    text-align: center;\\n    font-weight: normal;\\n    margin: 0;\\n    font-size: 150%;\\n}\\n\\n.list {\\n    max-width: inherit;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    font-weight: 200;\\n}\\n\\n.list-line {\\n    display: flex;\\n    min-width: 280px;\\n    max-width: 440px;\\n    width: 100%;\\n    flex-direction: row;\\n    flex-wrap: nowrap;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 8px;\\n    margin-top: 16px;\\n    background-color: white;\\n    border-radius: 20px;\\n    transition: opacity 0.1s;\\n    box-shadow: 0 4px 10px #827272;\\n    box-sizing: border-box;\\n}\\n\\n.list_active > .list-line_completed,\\n.list_completed > .list-line_active {\\n    text-decoration: line-through;\\n    opacity: 30%;\\n}\\n\\n.list-line > .list-line__text {\\n    opacity: 100%;\\n}\\n\\n\\n.list-line__text {\\n    flex-grow: 1;\\n    text-align: left;\\n    font-size: 130%;\\n    margin-left: 8px;\\n    overflow: hidden;\\n    transition: opacity 0.6s;\\n}\\n\\n.list-line__delete-button {\\n    border-width: 1px;\\n    border-color: gray;\\n    background-color: whitesmoke;\\n    font-weight: 700;\\n    font-size: 90%;\\n    color: gray;\\n    padding: 8px 16px;\\n    height: 100%;\\n}\\n\\n.list-line__checkbox {\\n    display: flex;\\n    margin-left: 10px;\\n    flex-flow: row;\\n}\\n\\n.list-line__checkbox__check-mark {\\n    display: none;\\n}\\n\\n.list-line__checkbox__image {\\n    display: block;\\n    background-color: white;\\n    border-width: 2px;\\n    height: 20px;\\n    border-radius: 50%;\\n    width: 20px;\\n    box-shadow: 0 2px 5px #827272;\\n}\\n\\n.list-line__checkbox__check-mark:checked + .list-line__checkbox__image:before {\\n    display: inline-block;\\n    position: relative;\\n    left: 4px;\\n    bottom: 1px;\\n    content: '';\\n    width: 5px;\\n    height: 2px;\\n    border: none;\\n    border-radius: 1px;\\n    background: white;\\n    -webkit-transform: rotate(45deg);\\n    transform: rotate(45deg);\\n}\\n\\n.list-line__checkbox__check-mark:checked + .list-line__checkbox__image:after {\\n    display: inline-block;\\n    position: relative;\\n    bottom: 3px;\\n    left: 1px;\\n    content: '';\\n    width: 10px;\\n    height: 2px;\\n    background: white;\\n    border: none;\\n    border-radius: 1px;\\n    -webkit-transform: rotate(-45deg);\\n    transform: rotate(-45deg);\\n}\\n\\n.list-line__checkbox__check-mark:checked + .list-line__checkbox__image {\\n    background-color: green;\\n}\\n\\n.query {\\n   display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    position: static;\\n}\\n\\n.query_active > .query-background {\\n    position: fixed;\\n    min-height: 100% ;\\n    width: 100%;\\n    top: 0;\\n    background-color: black;\\n    opacity: 40%;\\n}\\n\\n.query_active > .query-window {\\n    display: flex;\\n    position: fixed;\\n    top: 0;\\n    margin-top: 200px;\\n    flex-direction: row;\\n    flex-wrap: nowrap;\\n    align-items: center;\\n    justify-content: space-between;\\n    background-color: whitesmoke;\\n    padding: 32px 24px;\\n    border: 2px solid #6c797f;\\n    border-radius: 10px;\\n    box-shadow: 0 0 5px #564646;\\n}\\n\\n.query_disabled {\\n    opacity: 0;\\n    display: none;\\n}\\n\\n.query-window__input {\\n    flex: 1 0 0;\\n    font-size: 100%;\\n    padding: 2px;\\n    border: 2px solid #6c797f;\\n    border-radius: 4px;\\n}\\n\\n.query-window__button {\\n    min-width: 80px;\\n    background-color: dodgerblue;\\n    color: white;\\n    font-size: 100%;\\n    margin-left: 16px;\\n    padding: 6px;\\n    border-radius: 5px;\\n    border: none;\\n\\n}\\n\\n.filter {\\n    display: flex;\\n    margin-top: 8px;\\n    border: 2px solid #6c797f;\\n    border-radius: 4px;\\n    flex-direction: row;\\n    flex-wrap: nowrap;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.filter__value {\\n    text-decoration: none;\\n    color: #6c797f;\\n    padding: 8px;\\n}\\n\\n.filter__value:target {\\n    margin: -2px;\\n    border: 2px solid dodgerblue;\\n    border-radius: 4px;\\n    color: dodgerblue;\\n}\\n\\n.add-new-button {\\n    position: fixed;\\n    bottom: 0;\\n    margin-bottom: 16px;\\n    width: 50px;\\n    height: 50px;\\n    padding: 5px 5px;\\n    border-radius: 50%;\\n    border-width: 0;\\n    font-size: 50px;\\n    font-weight: normal;\\n    line-height: 25px;\\n    background-color: dodgerblue;\\n    color: white;\\n}\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n// Подключение css\n //  Создание строки списка\n\nfunction createLine(id, lineText, isDone) {\n  const div = document.createElement('div');\n  div.id = 'list-' + id;\n  const input = document.createElement('input');\n  const label = document.createElement('label');\n  const snap = document.createElement('snap');\n  const text = document.createElement('div'); //  const button = document.createElement('button');\n\n  input.type = 'checkbox';\n  input.id = 'checkbox';\n  input.classList.add('list-line__checkbox__check-mark');\n  input.checked = isDone || false;\n  snap.classList.add('list-line__checkbox__image');\n  input.addEventListener('change', switchState(id));\n  label.classList.add('list-line__checkbox'); //  button.addEventListener('click', deleteLine(id));\n\n  text.classList.add('list-line__text'); //  button.classList.add('list-line__delete-button');\n\n  text.innerText = lineText; //  button.innerText = '\\u274C';\n\n  if (input.checked === true) {\n    div.classList.add('list-line');\n    div.classList.add('list-line_completed');\n  } else {\n    div.classList.add('list-line');\n    div.classList.add('list-line_active');\n  }\n\n  label.appendChild(input);\n  label.appendChild(snap);\n  div.appendChild(text);\n  div.appendChild(label); //  div.appendChild(button);\n\n  return div;\n} //  Обновление LocalStorage\n\n\nfunction updateData() {\n  const serialObj = JSON.stringify(todoList);\n  window.localStorage.setItem('List', serialObj);\n} // Получение данных из LocalStorage\n\n\nfunction getData() {\n  return JSON.parse(window.localStorage.getItem('List')) || [];\n} //  Удаление строки списка по нажатию кнопки\n\n/*  const deleteLine = (id) => () => {\n  const div = document.getElementById('list-' + id);\n  div.remove();\n  const deleted = todoList.findIndex((line) => line.id === id);\n  todoList.splice(deleted, 1);\n  updateData();\n}; */\n// Смена состояния строки списка\n\n\nconst switchState = id => () => {\n  const edited = todoList.find(line => line.id === id);\n\n  if (edited) {\n    edited.isDone = !edited.isDone;\n    updateData();\n  }\n\n  const line = document.getElementById('list-' + id);\n  const input = line.lastChild.firstChild;\n\n  if (input.checked === true) {\n    line.className = 'list-line ' + 'list-line_completed';\n  } else {\n    line.className = 'list-line ' + 'list-line_active';\n  }\n}; //  Добавление новой строки списка\n\n\nfunction addTodoItem() {\n  const newTodo = document.querySelector('.query-window__input');\n\n  if (newTodo.value.match(/\\w+/g)) {\n    todoList.push({\n      id: todoList[0] ? todoList[todoList.length - 1].id + 1 : 1,\n      text: newTodo.value,\n      isDone: false\n    });\n    const elem = createLine(todoList.length, newTodo.value, false);\n    updateData(false);\n    list.appendChild(elem);\n  }\n\n  const window = document.querySelector('.query');\n  window.classList.remove('query_active');\n  window.classList.add('query_disabled');\n  newTodo.value = '';\n}\n\nfunction showQueryWindow() {\n  const window = document.querySelector('.query');\n  window.classList.remove('query_disabled');\n  window.classList.add('query_active');\n}\n\nfunction cancelQueryWindow() {\n  const background = document.querySelector('.query');\n  background.classList.remove('query_active');\n  background.classList.add('query_disabled');\n} //  Установка фильтра на новое значение\n\n\nfunction setFilterTo(e) {\n  const activeFilter = e.target.name;\n  updateListByFilter(activeFilter);\n} //  Обновление списка в соответствии с установленым в фильтре значением\n\n\nfunction updateListByFilter(filter) {\n  switch (filter) {\n    case 'All':\n      {\n        const list = document.querySelector('.list');\n        const header = document.querySelector('h1');\n        header.innerHTML = filter + ' tasks';\n        list.className = 'list';\n        break;\n      }\n\n    case 'Completed':\n      {\n        const list = document.querySelector('.list');\n        const header = document.querySelector('h1');\n        header.innerHTML = filter + ' tasks';\n        list.classList.add('list');\n        list.classList.add('list_completed');\n        break;\n      }\n\n    case 'Active':\n      {\n        const list = document.querySelector('.list');\n        const header = document.querySelector('h1');\n        header.innerHTML = filter + ' tasks';\n        list.classList.add('list');\n        list.classList.add('list_active');\n        break;\n      }\n  }\n} //  Получение параметра из строки запросов в URL\n\n\nfunction getUrlParameter(name) {\n  name = name.replace(/[[]/, '\\\\[').replace(/[\\]]/, '\\\\]');\n  const regex = new RegExp('[\\\\?&]' + name + '=([^&#]*)');\n  const results = regex.exec(window.location.search);\n  return results === null ? '' : decodeURIComponent(results[1].replace(/\\+/g, ' '));\n}\n\n; // Добавление обработчика для кнопки добавления строки в список\n\nconst addNewTodoButton = document.querySelector('.add-new-button');\naddNewTodoButton.addEventListener('click', showQueryWindow);\nconst addTaskButton = document.querySelector('.query-window__button');\naddTaskButton.addEventListener('click', addTodoItem); //  Добавление обработчика для фильтра\n\nconst filter = document.querySelector('.filter');\nfilter.addEventListener('click', setFilterTo); //  Получение стартового значения для фильтра\n\nconst activeFilterByQuery = getUrlParameter('filter') || 'All';\nupdateListByFilter(activeFilterByQuery);\nconst cancelQueryButton = document.querySelector('.query-background');\ncancelQueryButton.addEventListener('click', cancelQueryWindow); // Заполнение списка данными из LocalStorage\n\nconst list = document.querySelector('.list');\nconst todoList = getData();\n\nif (todoList) {\n  todoList.forEach(line => {\n    const elem = createLine(line.id, line.text, line.isDone);\n    list.appendChild(elem);\n  });\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });