module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().get((req, res) => {\n  res.json({\n    message: 'OK'\n  });\n}).post((req, res) => {\n  res.json({\n    message: 'Post'\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'application/json');\n  res.end(JSON.stringify({\n    message: 'hello'\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW5kZXguanM/YTM4YyJdLCJuYW1lcyI6WyJoYW5kbGVyIiwibmMiLCJnZXQiLCJyZXEiLCJyZXMiLCJqc29uIiwibWVzc2FnZSIsInBvc3QiLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLG1EQUFFLEdBQ2JDLEdBRFcsQ0FDUCxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNmQSxLQUFHLENBQUNDLElBQUosQ0FBUztBQUFDQyxXQUFPLEVBQUU7QUFBVixHQUFUO0FBQ0gsQ0FIVyxFQUlYQyxJQUpXLENBSU4sQ0FBQ0osR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDaEJBLEtBQUcsQ0FBQ0MsSUFBSixDQUFTO0FBQUNDLFdBQU8sRUFBRTtBQUFWLEdBQVQ7QUFDSCxDQU5XLENBQWhCO0FBUWUsZ0VBQUNILEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCQSxLQUFHLENBQUNJLFVBQUosR0FBaUIsR0FBakI7QUFDQUosS0FBRyxDQUFDSyxTQUFKLENBQWMsY0FBZCxFQUE4QixrQkFBOUI7QUFDQUwsS0FBRyxDQUFDTSxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVOLFdBQU8sRUFBRTtBQUFYLEdBQWYsQ0FBUjtBQUNELENBSkgiLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSAnbmV4dC1jb25uZWN0J1xuXG5jb25zdCBoYW5kbGVyID0gbmMoKVxuICAgIC5nZXQoKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIHJlcy5qc29uKHttZXNzYWdlOiAnT0snfSlcbiAgICB9KVxuICAgIC5wb3N0KChyZXEsIHJlcykgPT4ge1xuICAgICAgICByZXMuanNvbih7bWVzc2FnZTogJ1Bvc3QnfSlcbiAgICB9KVxuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMFxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ2hlbGxvJyB9KSlcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/index.js\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-connect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIj9lYTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-connect\n");

/***/ })

/******/ });