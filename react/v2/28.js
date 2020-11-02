(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./src/components/applications/facebookSDK/APIs.jsx":
/*!**********************************************************!*\
  !*** ./src/components/applications/facebookSDK/APIs.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/plugins/btblab-prototype-languages.js */ \"./src/plugins/btblab-prototype-languages.js\");\n/* harmony import */ var _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/utils/functions.js */ \"./src/utils/functions.js\");\n/* harmony import */ var _src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/modules/pageLayout */ \"./src/modules/pageLayout/index.js\");\n/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./packageInfo.js */ \"./src/components/applications/facebookSDK/packageInfo.js\");\n\n\n\n\n\n\n\nvar APIs = function APIs() {\n  Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return {\n      languageSetting: state.language.languageSetting\n    };\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_4__[\"Page\"], {\n    id: \"btb-app-fb-sdk-apis\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_4__[\"PageHead\"], {\n    title: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_2__[\"lang\"].translate('application.facebookSDK.apis.name'),\n    clickBtn: _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"openLink\"],\n    linkList: _packageInfo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].linkList\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_4__[\"Section\"], {\n    head: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"\".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_2__[\"lang\"].translate('application.version_colon')).concat(_packageInfo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"\".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_2__[\"lang\"].translate('application.release_colon')).concat(_packageInfo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].updated))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_2__[\"lang\"].translate('application.facebookSDK.apis.description'))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (APIs);\n\n//# sourceURL=webpack:///./src/components/applications/facebookSDK/APIs.jsx?");

/***/ }),

/***/ "./src/components/applications/facebookSDK/packageInfo.js":
/*!****************************************************************!*\
  !*** ./src/components/applications/facebookSDK/packageInfo.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/assets/definitions/packageObj */ \"./src/assets/definitions/packageObj.js\");\n\nvar packageInfo = {\n  version: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].facebookSDK.version,\n  updated: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].facebookSDK.updated,\n  description: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].facebookSDK.description,\n  linkList: [{\n    id: 'github',\n    fa: ['fab', 'github'],\n    url: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].facebookSDK.link.github\n  }, {\n    id: 'npm',\n    fa: ['fab', 'npm'],\n    url: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].facebookSDK.link.npm\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (packageInfo);\n\n//# sourceURL=webpack:///./src/components/applications/facebookSDK/packageInfo.js?");

/***/ }),

/***/ "./src/routes/applications/facebookSDK/APIsContainer.jsx":
/*!***************************************************************!*\
  !*** ./src/routes/applications/facebookSDK/APIsContainer.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_applications_facebookSDK_APIs_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/components/applications/facebookSDK/APIs.jsx */ \"./src/components/applications/facebookSDK/APIs.jsx\");\n\n\n\nvar APIsContaier = function APIsContaier() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_applications_facebookSDK_APIs_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (APIsContaier);\n\n//# sourceURL=webpack:///./src/routes/applications/facebookSDK/APIsContainer.jsx?");

/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/*! exports provided: openLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openLink\", function() { return openLink; });\nvar openLink = function openLink(link) {\n  window.open(link.url);\n};\n\n\n\n//# sourceURL=webpack:///./src/utils/functions.js?");

/***/ })

}]);