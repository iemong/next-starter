webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");

var _jsxFileName = "/Users/irie-shinnosuke/Documents/study/next-starter/next/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 20px;\n    color: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Home = function Home() {
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if ('hasStorageAccess' in document) {
      var promise = document.hasStorageAccess();
      promise.then(function (hasAccess) {
        console.log(hasAccess);
      }, function (reason) {
        console.log(reason);
      });
    }
  }, []);
  return __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Hello, world!");
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
var Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.abfb1eaccc7eb9dd56e3.hot-update.js.map