webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/janpaulhoga/code/jphoga/landing-page-boilerplate/src/pages/index.jsx\",\n    _this = undefined;\n\n\n\nvar notes = new Array(15).fill(1).map(function (e, i) {\n  return {\n    id: i,\n    title: \"Note: \".concat(i)\n  };\n});\n\nvar Page = function Page() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Notes\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, _this), notes.map(function (note) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/notes/[id]\",\n          as: \"/notes/\".concat(note.id),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n              children: note.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 24\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 21\n          }, _this)\n        }, note.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD8wZWQ3Il0sIm5hbWVzIjpbIm5vdGVzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZSIsImkiLCJpZCIsInRpdGxlIiwiUGFnZSIsIm5vdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVLEVBQVYsRUFBY0MsSUFBZCxDQUFtQixDQUFuQixFQUFzQkMsR0FBdEIsQ0FBMEIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVztBQUFDQyxNQUFFLEVBQUVELENBQUw7QUFBUUUsU0FBSyxrQkFBV0YsQ0FBWDtBQUFiLEdBQVg7QUFBQSxDQUExQixDQUFkOztBQUVBLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsc0JBQ1Q7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUtSLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUFNLElBQUk7QUFBQSwwQkFDWDtBQUFBLCtCQUNJLHFFQUFDLGdEQUFEO0FBQW9CLGNBQUksRUFBQyxhQUF6QjtBQUF1QyxZQUFFLG1CQUFZQSxJQUFJLENBQUNILEVBQWpCLENBQXpDO0FBQUEsaUNBQ0k7QUFBQSxtQ0FBRztBQUFBLHdCQUFTRyxJQUFJLENBQUNGO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFXRSxJQUFJLENBQUNILEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFkLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFM7QUFBQSxDQUFiOztLQUFNRSxJO0FBYVNBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3Qgbm90ZXMgPSBuZXcgQXJyYXkoMTUpLmZpbGwoMSkubWFwKChlLCBpKSA9PiAoe2lkOiBpLCB0aXRsZTogYE5vdGU6ICR7aX1gfSkpXG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGgxPk5vdGVzPC9oMT5cbiAgICAgICAge25vdGVzLm1hcChub3RlID0+IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtub3RlLmlkfSBocmVmPVwiL25vdGVzL1tpZF1cIiBhcz17YC9ub3Rlcy8ke25vdGUuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPjxzdHJvbmc+e25vdGUudGl0bGV9PC9zdHJvbmc+PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

})