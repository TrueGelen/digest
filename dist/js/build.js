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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./source/js/menu.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _removePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removePlugin */ \"./source/js/removePlugin.js\");\n/* harmony import */ var _removePlugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_removePlugin__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scrollTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollTo */ \"./source/js/scrollTo.js\");\n/* harmony import */ var _scrollTo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scrollTo__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NvdXJjZS9qcy9tYWluLmpzPzA0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL21lbnUnXHJcbmltcG9ydCAnLi9yZW1vdmVQbHVnaW4nXHJcbmltcG9ydCAnLi9zY3JvbGxUbyciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/js/main.js\n");

/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', function () {\n  /* const buffer = null\r\n  document.querySelector('body').addEventListener('click', ()=>{\r\n    console.log(e.target)\r\n    // if (e.target.classList.contain('burger') || e.target.parentNode.classList.contain('burger')){\r\n      e.target.classList.contain('burger') ? buffer = e.target : false\r\n      e.target.parentNode.classList.contain('burger') ? buffer = e.target.parentNode : false\r\n      buffer.classList.add('hideBurger')\r\n      if(buffer.classList.contain('hideBurger')){\r\n        //аходим меню и добаляем класс showMenu\r\n      }\r\n    // }\r\n  }) */\n  var burgers = document.querySelectorAll('#burger');\n  var menu = document.querySelector('#menu');\n  var close = menu.querySelector('.menu__close');\n\n  function burgersController(toggle) {\n    if (toggle) {\n      for (var i = 0; i < burgers.length; i++) {\n        burger[i].style.opacity = 1;\n      }\n    } else {\n      for (var _i = 0; _i < burgers.length; _i++) {\n        burger[_i].style.opacity = 0;\n      }\n    }\n  }\n\n  for (var i = 0; i < burgers.length; i++) {\n    burgers[i].addEventListener('click', function () {\n      console.log(1);\n      burgersController(false);\n      menu.classList.remove('hideMenu');\n      menu.classList.add('showMenu');\n      close.classList.remove('hideClose');\n      close.classList.add('showClose');\n    });\n  }\n\n  close.addEventListener('click', function () {\n    console.log(2);\n    burgersController(true);\n    menu.classList.remove('showMenu');\n    menu.classList.add('hideMenu');\n    close.classList.remove('showClose');\n    close.classList.add('hideClose');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvanMvbWVudS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NvdXJjZS9qcy9tZW51LmpzPzM5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgLyogY29uc3QgYnVmZmVyID0gbnVsbFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgIC8vIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbignYnVyZ2VyJykgfHwgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbignYnVyZ2VyJykpe1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbignYnVyZ2VyJykgPyBidWZmZXIgPSBlLnRhcmdldCA6IGZhbHNlXHJcbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW4oJ2J1cmdlcicpID8gYnVmZmVyID0gZS50YXJnZXQucGFyZW50Tm9kZSA6IGZhbHNlXHJcbiAgICAgIGJ1ZmZlci5jbGFzc0xpc3QuYWRkKCdoaWRlQnVyZ2VyJylcclxuICAgICAgaWYoYnVmZmVyLmNsYXNzTGlzdC5jb250YWluKCdoaWRlQnVyZ2VyJykpe1xyXG4gICAgICAgIC8v0LDRhdC+0LTQuNC8INC80LXQvdGOINC4INC00L7QsdCw0LvRj9C10Lwg0LrQu9Cw0YHRgSBzaG93TWVudVxyXG4gICAgICB9XHJcbiAgICAvLyB9XHJcbiAgfSkgKi9cclxuXHJcbiAgY29uc3QgYnVyZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNidXJnZXInKVxyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpXHJcbiAgY29uc3QgY2xvc2UgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19jbG9zZScpXHJcblxyXG4gIGZ1bmN0aW9uIGJ1cmdlcnNDb250cm9sbGVyKHRvZ2dsZSkge1xyXG4gICAgaWYgKHRvZ2dsZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1cmdlcnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYnVyZ2VyW2ldLnN0eWxlLm9wYWNpdHkgPSAxXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1cmdlcnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYnVyZ2VyW2ldLnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXJnZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBidXJnZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygxKVxyXG4gICAgICBidXJnZXJzQ29udHJvbGxlcihmYWxzZSlcclxuXHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZU1lbnUnKVxyXG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3Nob3dNZW51JylcclxuXHJcbiAgICAgIGNsb3NlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVDbG9zZScpXHJcbiAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ3Nob3dDbG9zZScpXHJcbiAgICAgIFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coMilcclxuICAgIGJ1cmdlcnNDb250cm9sbGVyKHRydWUpXHJcblxyXG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93TWVudScpXHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGVNZW51JylcclxuXHJcbiAgICBjbG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Q2xvc2UnKVxyXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnaGlkZUNsb3NlJylcclxuICB9KVxyXG5cclxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/js/menu.js\n");

/***/ }),

/***/ "./source/js/removePlugin.js":
/*!***********************************!*\
  !*** ./source/js/removePlugin.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', function () {\n  var pageWrapper = document.querySelector('#page-wrapper');\n  var wrapper = document.querySelector('#wrapper');\n  var pluginStyles = document.querySelectorAll('link')[0];\n  var href = pluginStyles.href;\n  console.log(href);\n\n  function watcher() {\n    if (window.innerWidth > 768) {\n      pageWrapper.id = 'page-wrapper';\n      wrapper.id = 'wrapper';\n      pluginStyles.href = href; // pageWrapper.classList.remove('myPageWrapper')\n      // wrapper.classList.remove('myWrapper')\n    } else {\n      pageWrapper.id = '';\n      wrapper.id = '';\n      pluginStyles.href = ''; // pageWrapper.classList.add('myPageWrapper')\n      // wrapper.classList.add('myWrapper')\n    }\n  }\n\n  watcher();\n  window.addEventListener('resize', function () {\n    watcher();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvanMvcmVtb3ZlUGx1Z2luLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3JlbW92ZVBsdWdpbi5qcz8zNWM0Il0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLXdyYXBwZXInKVxyXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3JhcHBlcicpXHJcbiAgY29uc3QgcGx1Z2luU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGluaycpWzBdXHJcbiAgY29uc3QgaHJlZiA9IHBsdWdpblN0eWxlcy5ocmVmXHJcbiAgY29uc29sZS5sb2coaHJlZilcclxuICBmdW5jdGlvbiB3YXRjaGVyKCl7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCl7XHJcbiAgICAgIHBhZ2VXcmFwcGVyLmlkID0gJ3BhZ2Utd3JhcHBlcidcclxuICAgICAgd3JhcHBlci5pZCA9ICd3cmFwcGVyJ1xyXG4gICAgICBwbHVnaW5TdHlsZXMuaHJlZiA9IGhyZWZcclxuICAgICAgLy8gcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbXlQYWdlV3JhcHBlcicpXHJcbiAgICAgIC8vIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbXlXcmFwcGVyJylcclxuICAgIH1lbHNle1xyXG4gICAgICBwYWdlV3JhcHBlci5pZCA9ICcnXHJcbiAgICAgIHdyYXBwZXIuaWQgPSAnJ1xyXG4gICAgICBwbHVnaW5TdHlsZXMuaHJlZiA9ICcnXHJcbiAgICAgIC8vIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ215UGFnZVdyYXBwZXInKVxyXG4gICAgICAvLyB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ215V3JhcHBlcicpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3YXRjaGVyKClcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT57XHJcbiAgICB3YXRjaGVyKClcclxuICB9KVxyXG59KSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/js/removePlugin.js\n");

/***/ }),

/***/ "./source/js/scrollTo.js":
/*!*******************************!*\
  !*** ./source/js/scrollTo.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nwindow.addEventListener('load', function () {\n  //getting link elements\n  var navLinks = window.document.querySelectorAll('.page-wrapper .wrapper .menu .menu__items a');\n  var btn = window.document.querySelector('.page-wrapper .wrapper .uniq1 .link');\n  var links = [].concat(_toConsumableArray(navLinks), [btn]); //get id then get element to which we need to go and set listeners on click\n\n  links.forEach(function (item) {\n    var id = item.getAttribute('href').replace('#', '');\n    var elem = document.querySelector(\"#\".concat(id));\n    item.addEventListener('click', function (e) {\n      e.preventDefault();\n      elem.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"start\"\n      });\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvanMvc2Nyb2xsVG8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvc2Nyb2xsVG8uanM/Y2IwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Ly9nZXR0aW5nIGxpbmsgZWxlbWVudHNcclxuXHRjb25zdCBuYXZMaW5rcyA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZS13cmFwcGVyIC53cmFwcGVyIC5tZW51IC5tZW51X19pdGVtcyBhJylcclxuXHRjb25zdCBidG4gPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlciAud3JhcHBlciAudW5pcTEgLmxpbmsnKVxyXG5cdGNvbnN0IGxpbmtzID0gWy4uLm5hdkxpbmtzLCBidG5dXHJcblxyXG5cdC8vZ2V0IGlkIHRoZW4gZ2V0IGVsZW1lbnQgdG8gd2hpY2ggd2UgbmVlZCB0byBnbyBhbmQgc2V0IGxpc3RlbmVycyBvbiBjbGlja1xyXG5cdGxpbmtzLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRsZXQgaWQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpLnJlcGxhY2UoJyMnLCAnJylcclxuXHRcdGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YClcclxuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0ZWxlbS5zY3JvbGxJbnRvVmlldyh7XHJcblx0XHRcdFx0YmVoYXZpb3I6IFwic21vb3RoXCIsXHJcblx0XHRcdFx0YmxvY2s6IFwic3RhcnRcIlxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9KVxyXG59KSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/js/scrollTo.js\n");

/***/ })

/******/ });