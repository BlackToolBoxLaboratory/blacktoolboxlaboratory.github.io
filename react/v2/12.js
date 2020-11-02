(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/@blacktoolbox/react-button/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@blacktoolbox/react-button/esm/index.js ***!
  \**************************************************************/
/*! exports provided: default, Button, ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return s; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonGroup\", function() { return b; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\nfunction r(t){return(r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(\"undefined\"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],o=!0,r=!1,c=void 0;try{for(var i,a=t[Symbol.iterator]();!(o=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(t){r=!0,c=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw c}}return n}(t,e)||function(t,e){if(!t)return;if(\"string\"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);\"Object\"===n&&t.constructor&&(n=t.constructor.name);if(\"Map\"===n||\"Set\"===n)return Array.from(t);if(\"Arguments\"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var a=function(t,e){var n;return e.forEach((function(e){n=Object.assign({},n,u(t,e))})),n},u=function(t,e){var n={};return\"object\"===r(t)&&Object.keys(t).find((function(o){if(o===e)return n=Object.assign({},t[o]),!0})),n},l=function(t){var e={};return Object.keys(t).forEach((function(n){e[n]={},Object.keys(t[n]).forEach((function(o){var r=o.replace(/-(\\w)/g,(function(t,e){return e.toUpperCase()}));e[n][r]=t[n][o]}))})),e},s=react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((function(e,n){var r={styleObj:l(e.styleObj||{})};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{ref:n,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"btb-react-button\",e.className),style:a(r.styleObj,[\"btb-react-button\"]),onClick:function(){void 0!==e.onClick&&e.onClick(e)}},e.prependNode?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"button_item item-prepend\",style:a(r.styleObj,[\"button_item\",\"item-prepend\"]),onClick:function(){void 0!==e.onPrependClick&&e.onPrependClick(e)}},e.prependNode):[],react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"button_item itme-core\",style:a(r.styleObj,[\"button_item\",\"itme-core\"]),onClick:function(){void 0!==e.onCoreClick&&e.onCoreClick(e)}},e.children||\"Button\"),e.appendNode?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"button_item item-append\",style:a(r.styleObj,[\"button_item\",\"item-append\"]),onClick:function(){void 0!==e.onAppendClick&&e.onAppendClick(e)}},e.appendNode):[])})),b=react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((function(r,i){var u,s,b,f,p,y={state_activeID:(s=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(u),b=c(s,2),f=b[0],p=b[1],{value:f,onChange:function(t){p(t)}}),direction:r.direction?r.direction:\"horizontal\",styleObj:l(r.styleObj||{}),slotObj:r.slotObj||{}};function d(t,e){y.state_activeID.onChange(t),void 0!==r.onEntryClick&&r.onEntryClick(t,e)}return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])((function(){y.state_activeID.onChange(r.activeID||r.defaultActiveID||\"\")}),[]),Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])((function(){void 0!==r.activeID&&y.state_activeID.value!==r.activeID&&y.state_activeID.onChange(r.activeID)})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{ref:i,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"btb-react-button-group\",r.className,\"group-\".concat(y.direction)),style:a(y.styleObj,[\"btb-react-button-group\",\"group-\".concat(y.direction)])},r.buttonList?r.buttonList.map((function(e,n){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"group_button\",\"button-list_\".concat(n),{\"button-active\":y.state_activeID.value===\"list_\".concat(n)}),style:a(y.styleObj,[\"group_button\",\"button-list_\".concat(n),y.state_activeID.value===n?\"button-active\":\"\"]),key:\"\".concat(Date.now(),\"_list_\").concat(n),onClick:function(){d(\"list_\".concat(n),e)}},e)})):[],r.children?r.children.map((function(e,n){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"group_button\",\"button-children_\".concat(n),{\"button-active\":y.state_activeID.value===\"children_\".concat(n)}),style:a(y.styleObj,[\"group_button\",\"button-children_\".concat(n)]),key:\"\".concat(Date.now(),\"_children_\").concat(n),onClick:function(){d(\"children_\".concat(n),e)}},e)})):[],r.buttonList||r.children?[]:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"group_button button-empty\",style:a(y.styleObj,[\"group_button\",\"button-empty\"])},\"Empty\"))}));var f={Button:s,ButtonGroup:b};/* harmony default export */ __webpack_exports__[\"default\"] = (f);\n\n\n//# sourceURL=webpack:///./node_modules/@blacktoolbox/react-button/esm/index.js?");

/***/ }),

/***/ "./src/components/packages/popover/ExampleAlign.jsx":
/*!**********************************************************!*\
  !*** ./src/components/packages/popover/ExampleAlign.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blacktoolbox/react-popover */ \"./node_modules/@blacktoolbox/react-popover/esm/index.js\");\n/* harmony import */ var _blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blacktoolbox/react-button */ \"./node_modules/@blacktoolbox/react-button/esm/index.js\");\n/* harmony import */ var _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/plugins/btblab-prototype-languages.js */ \"./src/plugins/btblab-prototype-languages.js\");\n/* harmony import */ var _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/utils/functions.js */ \"./src/utils/functions.js\");\n/* harmony import */ var _src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/modules/pageLayout */ \"./src/modules/pageLayout/index.js\");\n/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./packageInfo.js */ \"./src/components/packages/popover/packageInfo.js\");\n\n\n\n\n\n\n\n\nvar preRender = \"<BTBPopover \\n        showPosition={\\\"top\\\"} \\n        showAlign={\\\"begin\\\"} \\n        trigger={(<button>Begin</button>)}\\n>\\n        Example: Begin\\n</BTBPopover>\\n\\n<BTBPopover \\n        showPosition={\\\"top\\\"} \\n        showAlign={\\\"center\\\"} \\n        trigger={(<button>Center</button>)}\\n>\\n        Example: Center\\n</BTBPopover>\\n\\n<BTBPopover \\n        showPosition={\\\"top\\\"} \\n        showAlign={\\\"end\\\"} \\n        trigger={(<button>End</button>)}\\n>\\n        Example: End\\n</BTBPopover>\\n\\n<BTBPopover \\n        showPosition={\\\"left\\\"} \\n        showAlign={\\\"begin\\\"} \\n        trigger={(<button>Begin</button>)}\\n>\\n        Example: Begin\\n</BTBPopover>\\n\\n<BTBPopover \\n        showPosition={\\\"left\\\"} \\n        showAlign={\\\"center\\\"} \\n        trigger={(<button>Center</button>)}\\n>\\n        Example: Center\\n</BTBPopover>\\n\\n<BTBPopover \\n        showPosition={\\\"left\\\"} \\n        showAlign={\\\"end\\\"} \\n        trigger={(<button>End</button>)}\\n>\\n        Example: End\\n</BTBPopover>\";\n\nvar ExampleAlign = function ExampleAlign() {\n  Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return {\n      languageSetting: state.language.languageSetting\n    };\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_6__[\"Page\"], {\n    id: \"btb-pkg-popover-example-align\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_6__[\"PageHead\"], {\n    title: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_4__[\"lang\"].translate('package.popover.example.align.title'),\n    clickBtn: _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_5__[\"openLink\"],\n    linkList: _packageInfo_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].linkList\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_6__[\"Section\"], {\n    head: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"\".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_4__[\"lang\"].translate('package.version_colon')).concat(_packageInfo_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"\".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_4__[\"lang\"].translate('package.release_colon')).concat(_packageInfo_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].updated))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_4__[\"lang\"].translate('package.popover.example.align.description'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_6__[\"Section\"], {\n    head: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_4__[\"lang\"].translate('package.section.example')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_6__[\"Block\"], {\n    title: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_4__[\"lang\"].translate('package.popover.example.vertical')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"align_vertical\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    showPosition: 'top',\n    showAlign: 'begin',\n    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], null, \"Begin\")\n  }, \"Example: Begin\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"align_vertical\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    showPosition: 'top',\n    showAlign: 'center',\n    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], null, \"Center\")\n  }, \"Example: Center\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"align_vertical\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    showPosition: 'top',\n    showAlign: 'end',\n    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], null, \"End\")\n  }, \"Example: End\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_6__[\"Block\"], {\n    title: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_4__[\"lang\"].translate('package.popover.example.horizontal')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"align_horizontal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    showPosition: 'left',\n    showAlign: 'begin',\n    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], null, \"Begin\")\n  }, \"Example: Begin\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"align_horizontal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    showPosition: 'left',\n    showAlign: 'center',\n    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], null, \"Center\")\n  }, \"Example: Center\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"align_horizontal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    showPosition: 'left',\n    showAlign: 'end',\n    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], null, \"End\")\n  }, \"Example: End\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_6__[\"Section\"], {\n    head: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_4__[\"lang\"].translate('package.section.sourceCode')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", {\n    className: \"page_pre\"\n  }, preRender)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExampleAlign);\n\n//# sourceURL=webpack:///./src/components/packages/popover/ExampleAlign.jsx?");

/***/ }),

/***/ "./src/components/packages/popover/packageInfo.js":
/*!********************************************************!*\
  !*** ./src/components/packages/popover/packageInfo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/assets/definitions/packageObj */ \"./src/assets/definitions/packageObj.js\");\n\nvar packageInfo = {\n  version: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].popover.version,\n  updated: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].popover.updated,\n  description: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].popover.description,\n  linkList: [{\n    id: 'github',\n    fa: ['fab', 'github'],\n    url: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].popover.link.github\n  }, {\n    id: 'npm',\n    fa: ['fab', 'npm'],\n    url: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].popover.link.npm\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (packageInfo);\n\n//# sourceURL=webpack:///./src/components/packages/popover/packageInfo.js?");

/***/ }),

/***/ "./src/routes/packages/popover/ExampleAlignContainer.jsx":
/*!***************************************************************!*\
  !*** ./src/routes/packages/popover/ExampleAlignContainer.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_packages_popover_ExampleAlign_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/components/packages/popover/ExampleAlign.jsx */ \"./src/components/packages/popover/ExampleAlign.jsx\");\n\n\n\nvar ExampleAlignContaier = function ExampleAlignContaier() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_packages_popover_ExampleAlign_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExampleAlignContaier);\n\n//# sourceURL=webpack:///./src/routes/packages/popover/ExampleAlignContainer.jsx?");

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