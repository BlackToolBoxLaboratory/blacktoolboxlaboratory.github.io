(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ pageLayout_Page; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ pageLayout_PageHead; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ pageLayout_Section; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ pageLayout_Divider; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ pageLayout_Block; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./src/modules/pageLayout/Page.jsx


var Page_Page = function Page(props) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: ['module-page', props.className].join(' ')
  }, props.children);
};

/* harmony default export */ var pageLayout_Page = (Page_Page);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(49);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(36);

// CONCATENATED MODULE: ./src/modules/pageLayout/PageHead.jsx




var PageHead_PageHead = function PageHead(props) {
  function _clickBtn(event) {
    if (props.clickBtn) {
      props.clickBtn(event);
    }
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-page-head"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_title"
  }, props.title || ''), (props.linkList || []).map(function (btn) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: classnames_default()('head_btn', "btn-".concat(btn.id)),
      key: btn.id,
      onClick: function onClick() {
        _clickBtn(btn);
      }
    }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
      icon: btn.fa,
      fixedWidth: true
    }));
  }));
};

/* harmony default export */ var pageLayout_PageHead = (PageHead_PageHead);
// CONCATENATED MODULE: ./src/modules/pageLayout/Section.jsx


var Section_Section = function Section(props) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: ['module-section', props.className].join(' ')
  }, props.head ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "section_head"
  }, props.head) : [], /*#__PURE__*/react_default.a.createElement("div", {
    className: "section_body"
  }, props.children));
};

/* harmony default export */ var pageLayout_Section = (Section_Section);
// CONCATENATED MODULE: ./src/modules/pageLayout/Block.jsx


var Block_Block = function Block(props) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-block"
  }, props.title ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "block_title"
  }, props.title) : [], /*#__PURE__*/react_default.a.createElement("div", {
    className: "block_body"
  }, props.children));
};

/* harmony default export */ var pageLayout_Block = (Block_Block);
// CONCATENATED MODULE: ./src/modules/pageLayout/Divider.jsx



var Divider_Divider = function Divider() {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-divider"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "divider_line"
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "divider_line"
  }));
};

/* harmony default export */ var pageLayout_Divider = (Divider_Divider);
// CONCATENATED MODULE: ./src/modules/pageLayout/index.js







/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openLink; });
var openLink = function openLink(link) {
  window.open(link.url);
};



/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);

var packageObj = {
  list: {
    name: 'package.list.name',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_LIST_BASIC,
    description: 'package.list.description.basic',
    version: '2.2.0',
    updated: '2020-06-21',
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/react-list',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/react-list'
    }
  },
  table: {
    name: 'package.table.name',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_TABLE_BASIC,
    description: 'package.table.description.basic',
    version: '1.4.0',
    updated: '2020-06-21',
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/react-table',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/react-table'
    }
  },
  popover: {
    name: 'package.popover.name',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_POPOVER_BASIC,
    description: 'package.popover.description.basic',
    version: '1.2.0',
    updated: '2020-06-30',
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/react-popover',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/react-popover'
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (packageObj);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=function(t,e){var a;return e.forEach((function(e){a=Object.assign({},a,o(t,e))})),a},o=function(t,e){var a={};return"object"===c(t)&&Object.keys(t).find((function(c){if(c===e)return a=Object.assign({},t[c]),!0})),a},l=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),r=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),s=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead",{className:"list_head",style:n(c.styleObj,["list_head"])},c.headData.length?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:"head_tr",style:n(c.styleObj,["head_tr"])},c.headData.map((function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_th","th-".concat(e.id)),key:e.id,style:n(c.styleObj,["tr_th","th-".concat(e.id)])},c.slotObj["th-".concat(e.id)]?"function"==typeof c.slotObj["th-".concat(e.id)]?c.slotObj["th-".concat(e.id)](e):c.slotObj["th-".concat(e.id)]:e.name)}))):[])},d=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",{className:"list_body",style:n(c.styleObj,["list_body"])},c.bodyData.map((function(e,o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("body_tr","tr-".concat(o)),style:n(c.styleObj,["body_tr","tr-".concat(o)]),key:o},c.headData.map((function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_td","td-".concat(o.id)),style:n(c.styleObj,["tr_td","td-".concat(o.id)]),key:o.id},c.slotObj["td-".concat(o.id)]?"function"==typeof c.slotObj["td-".concat(o.id)]?c.slotObj["td-".concat(o.id)](e,o):c.slotObj["td-".concat(o.id)]:e[o.id])})))})))},i=function(){var a=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:"table_list",style:n(a.styleObj,["table_list"])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(s,null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(d,null))},b=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,c.bodyData.map((function(e,o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("table_info","info-".concat(o)),style:n(c.styleObj,["table_info","info-".concat(o)]),key:"".concat(e.id,"_").concat(o)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",{className:"info_body",style:n(c.styleObj,["info_body"])},c.headData.map((function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("body_tr","tr-".concat(o.id)),style:n(c.styleObj,["body_tr","tr-".concat(o.id)]),key:o.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_th","th-".concat(o.id)),style:n(c.styleObj,["tr_th","th-".concat(o.id)])},c.slotObj["th-".concat(o.id)]?"function"==typeof c.slotObj["th-".concat(o.id)]?c.slotObj["th-".concat(o.id)](o):c.slotObj["th-".concat(o.id)]:o.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_td","td-".concat(o.id)),style:n(c.styleObj,["tr_td","td-".concat(o.id)])},c.slotObj["td-".concat(o.id)]?"function"==typeof c.slotObj["td-".concat(o.id)]?c.slotObj["td-".concat(o.id)](e,o):c.slotObj["td-".concat(o.id)]:e[o.id]))}))))})))},y=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:"table_compare",style:n(c.styleObj,["table_compare"])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",{className:"compare_body",style:n(c.styleObj,["compare_body"])},c.headData.map((function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("body_tr","tr-".concat(e.id)),style:n(c.styleObj,["body_tr","tr-".concat(e.id)]),key:e.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_th","th-".concat(e.id)),style:n(c.styleObj,["tr_th","th-".concat(e.id)])},c.slotObj["th-".concat(e.id)]?"function"==typeof c.slotObj["th-".concat(e.id)]?c.slotObj["th-".concat(e.id)](e):c.slotObj["th-".concat(e.id)]:e.name),c.bodyData.map((function(o,l){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_td","td-".concat(e.id),"td-".concat(l)),style:n(c.styleObj,["tr_td","td-".concat(e.id),"td-".concat(l)]),key:"".concat(o.id,"_").concat(l)},c.slotObj["td-".concat(e.id)]?"function"==typeof c.slotObj["td-".concat(e.id)]?c.slotObj["td-".concat(e.id)](o,e):c.slotObj["td-".concat(e.id)]:o[e.id])})))}))))},m=react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((function(e,c){var o,s,d={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(o=e.styleObj||{},s={},Object.keys(o).forEach((function(t){s[t]={},Object.keys(o[t]).forEach((function(e){var a=e.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}));s[t][a]=o[t][e]}))})),s),slotObj:e.slotObj||{}},m={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l.Provider,{value:d},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(r.Provider,{value:m},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:c,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("btb-react-table",e.className),style:n(d.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b,null);case"compare":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(y,null);case"list":default:return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(i,null)}}())))}));/* harmony default export */ __webpack_exports__["a"] = (m);


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);

var packageInfo = {
  'version': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].table.version,
  'updated': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].table.updated,
  'description': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].table.description,
  'linkList': [{
    'id': 'github',
    'fa': ['fab', 'github'],
    'url': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].table.link.github
  }, {
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].table.link.npm
  }]
};
/* harmony default export */ __webpack_exports__["a"] = (packageInfo);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/recompose/dist/Recompose.esm.js + 1 modules
var Recompose_esm = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-table/esm/index.js
var esm = __webpack_require__(52);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 5 modules
var pageLayout = __webpack_require__(46);

// EXTERNAL MODULE: ./src/utils/functions.js
var functions = __webpack_require__(47);

// EXTERNAL MODULE: ./src/components/packages/table/packageInfo.js
var packageInfo = __webpack_require__(54);

// EXTERNAL MODULE: ./src/plugins/btblab-prototype-languages.js + 2 modules
var btblab_prototype_languages = __webpack_require__(50);

// CONCATENATED MODULE: ./src/components/packages/table/ExampleList.jsx








var enhance = Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(function (state) {
  return {
    'languageSetting': state.language.languageSetting
  };
}));
var preRender = "<BTBTable\n        mode=\"list\" \n        headData={headData} \n        bodyData={bodyData}/>";
var preHeadData = "const headData = [\n  {name : 'Name', id : 'name'},\n  {name : 'Type', id : 'devType'},\n  {name : 'OS', id : 'osType'},\n  {name : 'IP', id : 'ipAddr'},\n  {name : 'MAC', id : 'macAddr'},\n  {name : 'Traffic(tx / rx)', id : 'traffic'},\n  {name : 'Statue', id : 'statusDesc'}\n];";
var preBodyData = "const bodyData = [\n  {name : 'Device 1', devType : 'phone', osType : 'ios', ipAddr : '192.168.0.50', macAddr : 'B4:A2:07:44:55:2A', traffic : '0 MB / 0 KB', status : 0, statusDesc : 'Disconnected'},\n  {name : 'Device 2', devType : 'switch', osType : 'linux', ipAddr : '192.168.0.37', macAddr : '7E:EF:02:44:AE:25', traffic : '2.7 MB / 263 KB', status : 1, statusDesc : 'Connected'},\n  {name : 'Device 3', devType : 'ap', osType : 'linux', ipAddr : '192.168.0.121', macAddr : 'EF:2B:15:44:32:B4', traffic : '0 MB / 0 KB', status : 2, statusDesc : 'Locked'},\n  {name : 'Device 4', devType : 'phone', osType : 'android',  ipAddr : '192.168.0.9', macAddr : 'F5:22:33:44:55:35', traffic : '0 MB / 0 KB', status : 0, statusDesc : 'Disconnected'},\n  {name : 'Device 5', devType : 'ap', osType : 'linux', ipAddr : '192.168.0.27', macAddr : '7E:EF:B2:44:28:3B', traffic : '1.3 MB / 725 KB', status : 1, statusDesc : 'Connected'},\n  {name : 'Device 6', devType : 'pc', osType : 'windows', ipAddr : '192.168.0.11', macAddr : '11:22:24:44:5E:90', traffic : '0 MB / 0 KB', status : 2, statusDesc : 'Locked'},\n  {name : 'Device 7', devType : 'phone', osType : 'ios', ipAddr : '192.168.0.6', macAddr : '11:FF:33:44:55:A3', traffic : '1.2 MB / 45 KB', status : 1, statusDesc : 'Connected'},\n  {name : 'Device 8', devType : 'pc', osType : 'linux', ipAddr : '192.168.0.3', macAddr : 'B2:FE:B8:44:55:6D', traffic : '4.8 MB / 3.7 MB', status : 1, statusDesc : 'Connected'},\n  {name : 'Device 9', devType : 'pc', osType : 'windows',  ipAddr : '192.168.0.18', macAddr : 'E4:AA:74:44:38:E1', traffic : '0 MB / 0 KB', status : 2, statusDesc : 'Locked'},\n  {name : 'Device 10', devType : 'switch', osType : 'linux', ipAddr : '192.168.0.245', macAddr : 'E2:BA:33:44:48:AB', traffic : '0 MB / 0 KB', status : 0, statusDesc : 'Disconnected'}\n];";
var tableHeadArr_property = [{
  name: 'Name',
  id: 'name'
}, {
  name: 'Type',
  id: 'devType'
}, {
  name: 'OS',
  id: 'osType'
}, {
  name: 'IP',
  id: 'ipAddr'
}, {
  name: 'MAC',
  id: 'macAddr'
}, {
  name: 'Traffic(tx / rx)',
  id: 'traffic'
}, {
  name: 'Statue',
  id: 'statusDesc'
}];
var tableBodyArr_data = [{
  name: 'Device 1',
  devType: 'phone',
  osType: 'ios',
  ipAddr: '192.168.0.50',
  macAddr: 'B4:A2:07:44:55:2A',
  traffic: '0 MB / 0 KB',
  status: 0,
  statusDesc: 'Disconnected'
}, {
  name: 'Device 2',
  devType: 'switch',
  osType: 'linux',
  ipAddr: '192.168.0.37',
  macAddr: '7E:EF:02:44:AE:25',
  traffic: '2.7 MB / 263 KB',
  status: 1,
  statusDesc: 'Connected'
}, {
  name: 'Device 3',
  devType: 'ap',
  osType: 'linux',
  ipAddr: '192.168.0.121',
  macAddr: 'EF:2B:15:44:32:B4',
  traffic: '0 MB / 0 KB',
  status: 2,
  statusDesc: 'Locked'
}, {
  name: 'Device 4',
  devType: 'phone',
  osType: 'android',
  ipAddr: '192.168.0.9',
  macAddr: 'F5:22:33:44:55:35',
  traffic: '0 MB / 0 KB',
  status: 0,
  statusDesc: 'Disconnected'
}, {
  name: 'Device 5',
  devType: 'ap',
  osType: 'linux',
  ipAddr: '192.168.0.27',
  macAddr: '7E:EF:B2:44:28:3B',
  traffic: '1.3 MB / 725 KB',
  status: 1,
  statusDesc: 'Connected'
}, {
  name: 'Device 6',
  devType: 'pc',
  osType: 'windows',
  ipAddr: '192.168.0.11',
  macAddr: '11:22:24:44:5E:90',
  traffic: '0 MB / 0 KB',
  status: 2,
  statusDesc: 'Locked'
}, {
  name: 'Device 7',
  devType: 'phone',
  osType: 'ios',
  ipAddr: '192.168.0.6',
  macAddr: '11:FF:33:44:55:A3',
  traffic: '1.2 MB / 45 KB',
  status: 1,
  statusDesc: 'Connected'
}, {
  name: 'Device 8',
  devType: 'pc',
  osType: 'linux',
  ipAddr: '192.168.0.3',
  macAddr: 'B2:FE:B8:44:55:6D',
  traffic: '4.8 MB / 3.7 MB',
  status: 1,
  statusDesc: 'Connected'
}, {
  name: 'Device 9',
  devType: 'pc',
  osType: 'windows',
  ipAddr: '192.168.0.18',
  macAddr: 'E4:AA:74:44:38:E1',
  traffic: '0 MB / 0 KB',
  status: 2,
  statusDesc: 'Locked'
}, {
  name: 'Device 10',
  devType: 'switch',
  osType: 'linux',
  ipAddr: '192.168.0.245',
  macAddr: 'E2:BA:33:44:48:AB',
  traffic: '0 MB / 0 KB',
  status: 0,
  statusDesc: 'Disconnected'
}];
var ExampleList = enhance(function () {
  return /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* Page */], {
    className: "btb-pkg-table-example-list"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* PageHead */], {
    title: btblab_prototype_languages["a" /* lang */].translate('package.table.example.list.title'),
    clickBtn: functions["a" /* openLink */],
    linkList: packageInfo["a" /* default */].linkList
  }), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, "".concat(btblab_prototype_languages["a" /* lang */].translate('package.version_colon')).concat(packageInfo["a" /* default */].version), /*#__PURE__*/react_default.a.createElement("br", null), "".concat(btblab_prototype_languages["a" /* lang */].translate('package.release_colon')).concat(packageInfo["a" /* default */].updated))
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('package.table.example.list.description'))), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('package.section.example')
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    className: "table_sample",
    mode: "list",
    headData: tableHeadArr_property,
    bodyData: tableBodyArr_data
  })), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('package.section.sourceCode')
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preRender), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "headData"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preHeadData)), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "bodyData"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preBodyData))));
});
/* harmony default export */ var table_ExampleList = (ExampleList);
// CONCATENATED MODULE: ./src/routes/packages/table/ExampleListContainer.jsx



var ExampleListContainer_ExampleListContainer = function ExampleListContainer() {
  return /*#__PURE__*/react_default.a.createElement(table_ExampleList, null);
};

/* harmony default export */ var table_ExampleListContainer = __webpack_exports__["default"] = (ExampleListContainer_ExampleListContainer);

/***/ })

}]);