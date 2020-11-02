(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./src/components/applications/validator/Basic.jsx":
/*!*********************************************************!*\
  !*** ./src/components/applications/validator/Basic.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/plugins/btblab-prototype-languages.js */ \"./src/plugins/btblab-prototype-languages.js\");\n/* harmony import */ var _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/utils/functions.js */ \"./src/utils/functions.js\");\n/* harmony import */ var _src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/modules/pageLayout */ \"./src/modules/pageLayout/index.js\");\n/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./packageInfo.js */ \"./src/components/applications/validator/packageInfo.js\");\n\n\n\n\n\n\n\nvar Validator = function Validator() {\n  Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return {\n      languageSetting: state.language.languageSetting\n    };\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_4__[\"Page\"], {\n    id: \"btb-app-validator\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_4__[\"PageHead\"], {\n    title: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_2__[\"lang\"].translate('application.validator.name'),\n    clickBtn: _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"openLink\"],\n    linkList: _packageInfo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].linkList\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_4__[\"Section\"], {\n    head: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"\".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_2__[\"lang\"].translate('application.version_colon')).concat(_packageInfo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"\".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_2__[\"lang\"].translate('application.release_colon')).concat(_packageInfo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].updated))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_2__[\"lang\"].translate(_packageInfo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].description))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Validator);\n\n//# sourceURL=webpack:///./src/components/applications/validator/Basic.jsx?");

/***/ }),

/***/ "./src/components/applications/validator/packageInfo.js":
/*!**************************************************************!*\
  !*** ./src/components/applications/validator/packageInfo.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_definitions_applicationObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/assets/definitions/applicationObj */ \"./src/assets/definitions/applicationObj.js\");\n\nvar packageInfo = {\n  version: _src_assets_definitions_applicationObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validator.version,\n  updated: _src_assets_definitions_applicationObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validator.updated,\n  description: _src_assets_definitions_applicationObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validator.description,\n  linkList: [{\n    id: 'github',\n    fa: ['fab', 'github'],\n    url: _src_assets_definitions_applicationObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validator.link.github\n  }, {\n    id: 'npm',\n    fa: ['fab', 'npm'],\n    url: _src_assets_definitions_applicationObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validator.link.npm\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (packageInfo);\n\n//# sourceURL=webpack:///./src/components/applications/validator/packageInfo.js?");

/***/ }),

/***/ "./src/routes/applications/ValidatorContainer.jsx":
/*!********************************************************!*\
  !*** ./src/routes/applications/ValidatorContainer.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_applications_validator_Basic_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/components/applications/validator/Basic.jsx */ \"./src/components/applications/validator/Basic.jsx\");\n\n\n\nvar ValidatorContaier = function ValidatorContaier() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_applications_validator_Basic_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ValidatorContaier);\n\n//# sourceURL=webpack:///./src/routes/applications/ValidatorContainer.jsx?");

/***/ })

}]);