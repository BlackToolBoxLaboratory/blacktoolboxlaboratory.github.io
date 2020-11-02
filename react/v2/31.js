(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./src/components/packages/list/ExampleList.jsx":
/*!******************************************************!*\
  !*** ./src/components/packages/list/ExampleList.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _blacktoolbox_react_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blacktoolbox/react-list */ \"./node_modules/@blacktoolbox/react-list/esm/index.js\");\n/* harmony import */ var _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/plugins/btblab-prototype-languages.js */ \"./src/plugins/btblab-prototype-languages.js\");\n/* harmony import */ var _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/utils/functions.js */ \"./src/utils/functions.js\");\n/* harmony import */ var _src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/modules/pageLayout */ \"./src/modules/pageLayout/index.js\");\n/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./packageInfo.js */ \"./src/components/packages/list/packageInfo.js\");\n\n\n\n\n\n\n\nvar _listData = [{\n  id: 'b1',\n  title: 'Branch: 1',\n  children: [{\n    id: 'l11',\n    title: 'Leaf: 1-1'\n  }, {\n    id: 'b12',\n    title: 'Branch: 1-2',\n    children: [{\n      id: 'l121',\n      title: 'Leaf: 1-2-1'\n    }, {\n      id: 'l122',\n      title: 'Leaf: 1-2-2'\n    }]\n  }, {\n    id: 'l13',\n    title: 'Leaf: 1-3'\n  }]\n}, {\n  id: 'b2',\n  title: 'Branch: 2',\n  children: [{\n    id: 'l21',\n    title: 'Leaf: 2-1'\n  }, {\n    id: 'l22',\n    title: 'Leaf: 2-2'\n  }]\n}];\nvar preRender = \"<btb-react-list dataList={listData} />\";\nvar preListData = \"const listData = [\\n        { id: 'b1', title: 'Branch: 1', children: [\\n                { id: 'l11', title: 'Leaf: 1-1' },\\n                { id: 'b12', title: 'Branch: 1-2', children: [\\n                        { id: 'l121', title: 'Leaf: 1-2-1' },\\n                        { id: 'l122', title: 'Leaf: 1-2-2' }\\n                ]},\\n                { id: 'l13', title: 'Leaf: 1-3' }\\n        ]},\\n        { id: 'b2', title: 'Branch: 2', children: [\\n                { id: 'l21', title: 'Leaf: 2-1' },\\n                { id: 'l22', title: 'Leaf: 2-2' }\\n        ]}\\n]\";\n\nvar ExampleList = function ExampleList() {\n  Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return {\n      languageSetting: state.language.languageSetting\n    };\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Page\"], {\n    id: \"btb-pkg-list-example-list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"PageHead\"], {\n    title: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.list.example.list.title'),\n    clickBtn: _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_4__[\"openLink\"],\n    linkList: _packageInfo_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].linkList\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Section\"], {\n    head: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"\".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.version_colon')).concat(_packageInfo_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"\".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.release_colon')).concat(_packageInfo_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].updated))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.list.example.list.description'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Section\"], {\n    head: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.section.example')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    dataList: _listData\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Section\"], {\n    head: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.section.sourceCode')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", {\n    className: \"page_pre\"\n  }, preRender), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Block\"], {\n    title: \"listData\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", {\n    className: \"page_pre\"\n  }, preListData))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExampleList);\n\n//# sourceURL=webpack:///./src/components/packages/list/ExampleList.jsx?");

/***/ }),

/***/ "./src/components/packages/list/packageInfo.js":
/*!*****************************************************!*\
  !*** ./src/components/packages/list/packageInfo.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/assets/definitions/packageObj */ \"./src/assets/definitions/packageObj.js\");\n\nvar packageInfo = {\n  version: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list.version,\n  updated: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list.updated,\n  description: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list.description,\n  linkList: [{\n    id: 'github',\n    fa: ['fab', 'github'],\n    url: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list.link.github\n  }, {\n    id: 'npm',\n    fa: ['fab', 'npm'],\n    url: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list.link.npm\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (packageInfo);\n\n//# sourceURL=webpack:///./src/components/packages/list/packageInfo.js?");

/***/ }),

/***/ "./src/routes/packages/list/ExampleListContainer.jsx":
/*!***********************************************************!*\
  !*** ./src/routes/packages/list/ExampleListContainer.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_packages_list_ExampleList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/components/packages/list/ExampleList.jsx */ \"./src/components/packages/list/ExampleList.jsx\");\n\n\n\nvar ExampleListContaier = function ExampleListContaier() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_packages_list_ExampleList_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExampleListContaier);\n\n//# sourceURL=webpack:///./src/routes/packages/list/ExampleListContainer.jsx?");

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