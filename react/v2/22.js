(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/@blacktoolbox/react-table/esm/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@blacktoolbox/react-table/esm/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\nfunction c(t){return(c=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}var n=function(t,e){var a;return e.forEach((function(e){a=Object.assign({},a,o(t,e))})),a},o=function(t,e){var a={};return\"object\"===c(t)&&Object.keys(t).find((function(c){if(c===e)return a=Object.assign({},t[c]),!0})),a},l=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),r=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),s=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\",{className:\"list_head\",style:n(c.styleObj,[\"list_head\"])},c.headData.length?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\",{className:\"head_tr\",style:n(c.styleObj,[\"head_tr\"])},c.headData.map((function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"tr_th\",\"th-\".concat(e.id)),key:e.id,style:n(c.styleObj,[\"tr_th\",\"th-\".concat(e.id)])},c.slotObj[\"th-\".concat(e.id)]?\"function\"==typeof c.slotObj[\"th-\".concat(e.id)]?c.slotObj[\"th-\".concat(e.id)](e):c.slotObj[\"th-\".concat(e.id)]:e.name)}))):[])},d=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\",{className:\"list_body\",style:n(c.styleObj,[\"list_body\"])},c.bodyData.map((function(e,o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"body_tr\",\"tr-\".concat(o)),style:n(c.styleObj,[\"body_tr\",\"tr-\".concat(o)]),key:o},c.headData.map((function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"tr_td\",\"td-\".concat(o.id)),style:n(c.styleObj,[\"tr_td\",\"td-\".concat(o.id)]),key:o.id},c.slotObj[\"td-\".concat(o.id)]?\"function\"==typeof c.slotObj[\"td-\".concat(o.id)]?c.slotObj[\"td-\".concat(o.id)](e,o):c.slotObj[\"td-\".concat(o.id)]:e[o.id])})))})))},i=function(){var a=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\",{className:\"table_list\",style:n(a.styleObj,[\"table_list\"])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(s,null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(d,null))},b=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,c.bodyData.map((function(e,o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"table_info\",\"info-\".concat(o)),style:n(c.styleObj,[\"table_info\",\"info-\".concat(o)]),key:\"\".concat(e.id,\"_\").concat(o)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\",{className:\"info_body\",style:n(c.styleObj,[\"info_body\"])},c.headData.map((function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"body_tr\",\"tr-\".concat(o.id)),style:n(c.styleObj,[\"body_tr\",\"tr-\".concat(o.id)]),key:o.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"tr_th\",\"th-\".concat(o.id)),style:n(c.styleObj,[\"tr_th\",\"th-\".concat(o.id)])},c.slotObj[\"th-\".concat(o.id)]?\"function\"==typeof c.slotObj[\"th-\".concat(o.id)]?c.slotObj[\"th-\".concat(o.id)](o):c.slotObj[\"th-\".concat(o.id)]:o.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"tr_td\",\"td-\".concat(o.id)),style:n(c.styleObj,[\"tr_td\",\"td-\".concat(o.id)])},c.slotObj[\"td-\".concat(o.id)]?\"function\"==typeof c.slotObj[\"td-\".concat(o.id)]?c.slotObj[\"td-\".concat(o.id)](e,o):c.slotObj[\"td-\".concat(o.id)]:e[o.id]))}))))})))},y=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\",{className:\"table_compare\",style:n(c.styleObj,[\"table_compare\"])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\",{className:\"compare_body\",style:n(c.styleObj,[\"compare_body\"])},c.headData.map((function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"body_tr\",\"tr-\".concat(e.id)),style:n(c.styleObj,[\"body_tr\",\"tr-\".concat(e.id)]),key:e.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"tr_th\",\"th-\".concat(e.id)),style:n(c.styleObj,[\"tr_th\",\"th-\".concat(e.id)])},c.slotObj[\"th-\".concat(e.id)]?\"function\"==typeof c.slotObj[\"th-\".concat(e.id)]?c.slotObj[\"th-\".concat(e.id)](e):c.slotObj[\"th-\".concat(e.id)]:e.name),c.bodyData.map((function(o,l){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"tr_td\",\"td-\".concat(e.id),\"td-\".concat(l)),style:n(c.styleObj,[\"tr_td\",\"td-\".concat(e.id),\"td-\".concat(l)]),key:\"\".concat(o.id,\"_\").concat(l)},c.slotObj[\"td-\".concat(e.id)]?\"function\"==typeof c.slotObj[\"td-\".concat(e.id)]?c.slotObj[\"td-\".concat(e.id)](o,e):c.slotObj[\"td-\".concat(e.id)]:o[e.id])})))}))))},m=react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((function(e,c){var o,s,d={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(o=e.styleObj||{},s={},Object.keys(o).forEach((function(t){s[t]={},Object.keys(o[t]).forEach((function(e){var a=e.replace(/-(\\w)/g,(function(t,e){return e.toUpperCase()}));s[t][a]=o[t][e]}))})),s),slotObj:e.slotObj||{}},m={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l.Provider,{value:d},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(r.Provider,{value:m},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{ref:c,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"btb-react-table\",e.className),style:n(d.styleObj,[\"btb-react-table\"])},function(){switch(e.mode){case\"info\":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b,null);case\"compare\":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(y,null);case\"list\":default:return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(i,null)}}())))}));/* harmony default export */ __webpack_exports__[\"default\"] = (m);\n\n\n//# sourceURL=webpack:///./node_modules/@blacktoolbox/react-table/esm/index.js?");

/***/ }),

/***/ "./src/components/packages/table/ExampleCompare.jsx":
/*!**********************************************************!*\
  !*** ./src/components/packages/table/ExampleCompare.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _blacktoolbox_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blacktoolbox/react-table */ \"./node_modules/@blacktoolbox/react-table/esm/index.js\");\n/* harmony import */ var _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/plugins/btblab-prototype-languages.js */ \"./src/plugins/btblab-prototype-languages.js\");\n/* harmony import */ var _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/utils/functions.js */ \"./src/utils/functions.js\");\n/* harmony import */ var _src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/modules/pageLayout */ \"./src/modules/pageLayout/index.js\");\n/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./packageInfo.js */ \"./src/components/packages/table/packageInfo.js\");\n\n\n\n\n\n\n\nvar preRender = \"<BTBTable \\n        mode=\\\"compare\\\" \\n        headData={headData} \\n        bodyData={bodyData}/>\";\nvar preHeadData = \"const headDate = [\\n        {name : 'Name', id : 'name' },\\n        {name : 'Type', id : 'devType' },\\n        {name : 'OS', id : 'osType' },\\n        {name : 'IP', id : 'ipAddr' },\\n        {name : 'MAC', id : 'macAddr' },\\n        {name : 'Traffic(tx / rx)', id : 'traffic' },\\n        {name : 'Statue', id : 'statusDesc'}\\n];\";\nvar preBodyData = \"const bodyData = [\\n        {\\n                name : 'Device 1',  \\n                devType : 'phone',   \\n                osType : 'ios',      \\n                ipAddr : '192.168.0.50',   \\n                macAddr : 'B4:A2:07:44:55:2A', \\n                traffic : '1.7 MB / 45 KB', \\n                status : 0, \\n                statusDesc : 'Disconnected'\\n        }, {\\n                name : 'Device 2',  \\n                devType : 'notebook',   \\n                osType : 'windows',      \\n                ipAddr : '192.168.0.52',   \\n                macAddr : 'B4:A2:07:44:DD:FF', \\n                traffic : '4.8 MB / 27 KB', \\n                status : 0, \\n                statusDesc : 'Disconnected'\\n        }\\n];\";\nvar tableHeadArr_property = [{\n  name: 'Name',\n  id: 'name'\n}, {\n  name: 'Type',\n  id: 'devType'\n}, {\n  name: 'OS',\n  id: 'osType'\n}, {\n  name: 'IP',\n  id: 'ipAddr'\n}, {\n  name: 'MAC',\n  id: 'macAddr'\n}, {\n  name: 'Traffic(tx / rx)',\n  id: 'traffic'\n}, {\n  name: 'Statue',\n  id: 'statusDesc'\n}];\nvar tableBodyArr_data = [{\n  name: 'Device 1',\n  devType: 'phone',\n  osType: 'ios',\n  ipAddr: '192.168.0.50',\n  macAddr: 'B4:A2:07:44:55:2A',\n  traffic: '1.7 MB / 45 KB',\n  status: 0,\n  statusDesc: 'Disconnected'\n}, {\n  name: 'Device 2',\n  devType: 'notebook',\n  osType: 'windows',\n  ipAddr: '192.168.0.52',\n  macAddr: 'B4:A2:07:44:DD:FF',\n  traffic: '4.8 MB / 27 KB',\n  status: 0,\n  statusDesc: 'Disconnected'\n}];\n\nvar ExampleCompare = function ExampleCompare() {\n  Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return {\n      languageSetting: state.language.languageSetting\n    };\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Page\"], {\n    id: \"btb-pkg-table-example-compare\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"PageHead\"], {\n    title: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.table.example.compare.title'),\n    clickBtn: _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_4__[\"openLink\"],\n    linkList: _packageInfo_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].linkList\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Section\"], {\n    head: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"\".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.version_colon')).concat(_packageInfo_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"\".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.release_colon')).concat(_packageInfo_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].updated))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.table.example.compare.description'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Section\"], {\n    head: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.section.example')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"table_sample\",\n    mode: \"compare\",\n    headData: tableHeadArr_property,\n    bodyData: tableBodyArr_data\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Section\"], {\n    head: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_3__[\"lang\"].translate('package.section.sourceCode')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", {\n    className: \"page_pre\"\n  }, preRender), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Block\"], {\n    title: \"headData\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", {\n    className: \"page_pre\"\n  }, preHeadData)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout__WEBPACK_IMPORTED_MODULE_5__[\"Block\"], {\n    title: \"bodyData\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", {\n    className: \"page_pre\"\n  }, preBodyData))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExampleCompare);\n\n//# sourceURL=webpack:///./src/components/packages/table/ExampleCompare.jsx?");

/***/ }),

/***/ "./src/components/packages/table/packageInfo.js":
/*!******************************************************!*\
  !*** ./src/components/packages/table/packageInfo.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/assets/definitions/packageObj */ \"./src/assets/definitions/packageObj.js\");\n\nvar packageInfo = {\n  version: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].table.version,\n  updated: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].table.updated,\n  description: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].table.description,\n  linkList: [{\n    id: 'github',\n    fa: ['fab', 'github'],\n    url: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].table.link.github\n  }, {\n    id: 'npm',\n    fa: ['fab', 'npm'],\n    url: _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].table.link.npm\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (packageInfo);\n\n//# sourceURL=webpack:///./src/components/packages/table/packageInfo.js?");

/***/ }),

/***/ "./src/routes/packages/table/ExampleCompareContainer.jsx":
/*!***************************************************************!*\
  !*** ./src/routes/packages/table/ExampleCompareContainer.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_packages_table_ExampleCompare_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/components/packages/table/ExampleCompare.jsx */ \"./src/components/packages/table/ExampleCompare.jsx\");\n\n\n\nvar ExampleCompareContainer = function ExampleCompareContainer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_packages_table_ExampleCompare_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExampleCompareContainer);\n\n//# sourceURL=webpack:///./src/routes/packages/table/ExampleCompareContainer.jsx?");

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