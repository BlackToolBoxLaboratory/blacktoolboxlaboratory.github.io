(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./src/components/packages/list/ExampleMenu.jsx":
/*!******************************************************!*\
  !*** ./src/components/packages/list/ExampleMenu.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _blacktoolbox_react_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blacktoolbox/react-list */ \"./node_modules/@blacktoolbox/react-list/esm/index.js\");\n/* harmony import */ var _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/plugins/btblab-prototype-languages.js */ \"./src/plugins/btblab-prototype-languages.js\");\n/* harmony import */ var _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/utils/functions.js */ \"./src/utils/functions.js\");\n/* harmony import */ var _src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/modules/pageLayout */ \"./src/modules/pageLayout/index.js\");\n/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./packageInfo.js */ \"./src/components/packages/list/packageInfo.js\");\n\n\n\n\n\n\n\nvar _menuData = [{\n  id: 'f1',\n  title: 'Folder: 1',\n  children: [{\n    id: 't11',\n    title: 'Menu: 1-1'\n  }, {\n    id: 't12',\n    title: 'Menu: 1-2'\n  }]\n}, {\n  id: 'f2',\n  title: 'Folder: 2',\n  defaultCollapsed: true,\n  children: [{\n    id: 't21',\n    title: 'Menu: 2-1'\n  }, {\n    id: 't22',\n    title: 'Menu: 2-2'\n  }, {\n    id: 't23',\n    title: 'Menu: 2-3'\n  }]\n}];\nvar preRender = \"<btb-react-list dataList={menuData} />\";\nvar preListData = \"const menuData = [\\n        { id: 'f1', title: 'Folder: 1', children: [\\n                { id: 't11', title: 'Menu: 1-1' },\\n                { id: 't12', title: 'Menu: 1-2' }\\n        ]},\\n        { id: 'f2', title: 'Folder: 2', defaultCollapsed: true, children: [\\n                { id: 't21', title: 'Menu: 2-1' },\\n                { id: 't22', title: 'Menu: 2-2' },\\n                { id: 't23', title: 'Menu: 2-3' }\\n        ]}\\n]\";\n\nvar ExampleMenu = function ExampleMenu() {\n  Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return {\n      languageSetting: state.language.languageSetting\n    };\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Page\"], {\n    id: \"btb-pkg-list-example-menu\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"PageHead\"], {\n    title: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.list.example.menu.title'),\n    clickBtn: _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_4__[\"openLink\"],\n    linkList: _packageInfo_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].linkList\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Section\"], {\n    head: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"\".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.version_colon')).concat(_packageInfo_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"\".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.release_colon')).concat(_packageInfo_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].updated))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.list.example.menu.description'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Section\"], {\n    head: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.section.example')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    dataList: _menuData,\n    collapseEnable: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Section\"], {\n    head: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.section.sourceCode')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", {\n    className: \"page_pre\"\n  }, preRender), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Block\"], {\n    title: \"menuData\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", {\n    className: \"page_pre\"\n  }, preListData))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExampleMenu);\n\n//# sourceURL=webpack:///./src/components/packages/list/ExampleMenu.jsx?");

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

/***/ "./src/routes/packages/list/ExampleMenuContainer.jsx":
/*!***********************************************************!*\
  !*** ./src/routes/packages/list/ExampleMenuContainer.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_packages_list_ExampleMenu_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/components/packages/list/ExampleMenu.jsx */ \"./src/components/packages/list/ExampleMenu.jsx\");\n\n\n\nvar ExampleMenuContaier = function ExampleMenuContaier() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_packages_list_ExampleMenu_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExampleMenuContaier);\n\n//# sourceURL=webpack:///./src/routes/packages/list/ExampleMenuContainer.jsx?");

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