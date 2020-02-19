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

eval("window.addEventListener('load', function () {\n  /* const buffer = null\r\n  document.querySelector('body').addEventListener('click', ()=>{\r\n    console.log(e.target)\r\n    // if (e.target.classList.contain('burger') || e.target.parentNode.classList.contain('burger')){\r\n      e.target.classList.contain('burger') ? buffer = e.target : false\r\n      e.target.parentNode.classList.contain('burger') ? buffer = e.target.parentNode : false\r\n      buffer.classList.add('hideBurger')\r\n      if(buffer.classList.contain('hideBurger')){\r\n        //аходим меню и добаляем класс showMenu\r\n      }\r\n    // }\r\n  }) */\n  var burgers = document.querySelectorAll('#burger');\n  var menu = document.querySelector('#menu');\n  var close = menu.querySelector('.menu__close');\n\n  function burgersController(toggle) {\n    if (toggle) {\n      for (var i = 0; i < burgers.length; i++) {\n        burger[i].style.opacity = 1;\n      }\n    } else {\n      for (var _i = 0; _i < burgers.length; _i++) {\n        burger[_i].style.opacity = 0;\n      }\n    }\n  }\n\n  for (var i = 0; i < burgers.length; i++) {\n    burgers[i].addEventListener('click', function () {\n      console.log(1);\n      burgersController(false);\n      menu.classList.remove('hideMenu');\n      menu.classList.add('showMenu');\n      close.classList.remove('hideClose');\n      close.classList.add('showClose');\n    });\n  }\n\n  close.addEventListener('click', function () {\n    console.log(2);\n    burgersController(true);\n    menu.classList.remove('showMenu');\n    menu.classList.add('hideMenu');\n    close.classList.remove('showClose');\n    close.classList.add('hideClose');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvanMvbWVudS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NvdXJjZS9qcy9tZW51LmpzPzM5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgLyogY29uc3QgYnVmZmVyID0gbnVsbFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgIC8vIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbignYnVyZ2VyJykgfHwgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbignYnVyZ2VyJykpe1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbignYnVyZ2VyJykgPyBidWZmZXIgPSBlLnRhcmdldCA6IGZhbHNlXHJcbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW4oJ2J1cmdlcicpID8gYnVmZmVyID0gZS50YXJnZXQucGFyZW50Tm9kZSA6IGZhbHNlXHJcbiAgICAgIGJ1ZmZlci5jbGFzc0xpc3QuYWRkKCdoaWRlQnVyZ2VyJylcclxuICAgICAgaWYoYnVmZmVyLmNsYXNzTGlzdC5jb250YWluKCdoaWRlQnVyZ2VyJykpe1xyXG4gICAgICAgIC8v0LDRhdC+0LTQuNC8INC80LXQvdGOINC4INC00L7QsdCw0LvRj9C10Lwg0LrQu9Cw0YHRgSBzaG93TWVudVxyXG4gICAgICB9XHJcbiAgICAvLyB9XHJcbiAgfSkgKi9cclxuXHJcbiAgY29uc3QgYnVyZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNidXJnZXInKVxyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpXHJcbiAgY29uc3QgY2xvc2UgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19jbG9zZScpXHJcblxyXG4gIGZ1bmN0aW9uIGJ1cmdlcnNDb250cm9sbGVyKHRvZ2dsZSkge1xyXG4gICAgaWYgKHRvZ2dsZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1cmdlcnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYnVyZ2VyW2ldLnN0eWxlLm9wYWNpdHkgPSAxXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1cmdlcnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYnVyZ2VyW2ldLnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXJnZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBidXJnZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygxKVxyXG4gICAgICBidXJnZXJzQ29udHJvbGxlcihmYWxzZSlcclxuXHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZU1lbnUnKVxyXG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3Nob3dNZW51JylcclxuXHJcbiAgICAgIGNsb3NlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVDbG9zZScpXHJcbiAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ3Nob3dDbG9zZScpXHJcbiAgICAgIFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coMilcclxuICAgIGJ1cmdlcnNDb250cm9sbGVyKHRydWUpXHJcblxyXG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93TWVudScpXHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGVNZW51JylcclxuXHJcbiAgICBjbG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Q2xvc2UnKVxyXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnaGlkZUNsb3NlJylcclxuICB9KVxyXG5cclxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/js/menu.js\n");

/***/ })

/******/ });