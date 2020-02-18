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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./source/js/menu.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NvdXJjZS9qcy9tYWluLmpzPzA0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL21lbnUnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/js/main.js\n");

/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _readOnlyError(name) { throw new Error(\"\\\"\" + name + \"\\\" is read-only\"); }\n\nwindow.addEventListener('load', function () {\n  var buffer = null;\n  document.querySelector('body').addEventListener('click', function () {\n    console.log(e.target); // if (e.target.classList.contain('burger') || e.target.parentNode.classList.contain('burger')){\n\n    e.target.classList.contain('burger') ? buffer = (_readOnlyError(\"buffer\"), e.target) : false;\n    e.target.parentNode.classList.contain('burger') ? buffer = (_readOnlyError(\"buffer\"), e.target.parentNode) : false;\n    buffer.classList.add('hideBurger');\n\n    if (buffer.classList.contain('hideBurger')) {} //аходим меню и добаляем класс showMenu\n    // }\n\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvanMvbWVudS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NvdXJjZS9qcy9tZW51LmpzPzM5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xyXG4gIGNvbnN0IGJ1ZmZlciA9IG51bGxcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAvLyBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW4oJ2J1cmdlcicpIHx8IGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW4oJ2J1cmdlcicpKXtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW4oJ2J1cmdlcicpID8gYnVmZmVyID0gZS50YXJnZXQgOiBmYWxzZVxyXG4gICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWluKCdidXJnZXInKSA/IGJ1ZmZlciA9IGUudGFyZ2V0LnBhcmVudE5vZGUgOiBmYWxzZVxyXG4gICAgICBidWZmZXIuY2xhc3NMaXN0LmFkZCgnaGlkZUJ1cmdlcicpXHJcbiAgICAgIGlmKGJ1ZmZlci5jbGFzc0xpc3QuY29udGFpbignaGlkZUJ1cmdlcicpKXtcclxuICAgICAgICAvL9Cw0YXQvtC00LjQvCDQvNC10L3RjiDQuCDQtNC+0LHQsNC70Y/QtdC8INC60LvQsNGB0YEgc2hvd01lbnVcclxuICAgICAgfVxyXG4gICAgLy8gfVxyXG4gIH0pXHJcbn0pIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/js/menu.js\n");

/***/ })

/******/ });