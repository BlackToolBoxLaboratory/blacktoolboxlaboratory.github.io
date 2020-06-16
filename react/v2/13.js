(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);




var PackagesContaier = function PackagesContaier() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "d"], {
    exact: true,
    path: _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].PACKAGES_LIST
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Redirect */ "c"], {
    to: _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].PACKAGES_LIST_BASIC
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "d"], {
    exact: true,
    path: _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].PACKAGES_TABLE
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Redirect */ "c"], {
    to: _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].PACKAGES_TABLE_BASIC
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Switch */ "g"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "d"], {
    path: _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].PACKAGES_LIST,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, 41));
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "d"], {
    path: _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].PACKAGES_TABLE,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, 42));
    })
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PackagesContaier);

/***/ })

}]);