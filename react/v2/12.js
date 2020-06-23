(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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
var classnames = __webpack_require__(48);
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

/***/ 49:
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
    version: '1.1.1',
    updated: '2020-06-22',
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/react-popover',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/react-popover'
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (packageObj);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);

var packageInfo = {
  'version': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list.version,
  'updated': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list.updated,
  'description': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list.description,
  'linkList': [{
    'id': 'github',
    'fa': ['fab', 'github'],
    'url': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list.link.github
  }, {
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list.link.npm
  }]
};
/* harmony default export */ __webpack_exports__["a"] = (packageInfo);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-list/esm/index.js
var esm = __webpack_require__(52);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 5 modules
var pageLayout = __webpack_require__(46);

// EXTERNAL MODULE: ./src/utils/functions.js
var functions = __webpack_require__(47);

// EXTERNAL MODULE: ./src/components/packages/list/packageInfo.js
var packageInfo = __webpack_require__(53);

// CONCATENATED MODULE: ./src/components/packages/list/ExampleMenu.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var PageInfo = _objectSpread(_objectSpread({}, packageInfo["a" /* default */]), {}, {
  'title': 'Example - Menu',
  'description': 'When we enable the collapseEnable with datalist, we will get a simple menu to use. And it will trigger the onToggle event function while clicked for Collapsing or Expending. Every entry can be active status after being clicked. Surely it will trigger the onEntryClick event function too. Besides for a menu, it can tag one as defaultActiveID. Also utilize the useState to work with activeID'
});

var _menuData = [{
  id: 'f1',
  title: 'Folder: 1',
  children: [{
    id: 't11',
    title: 'Menu: 1-1'
  }, {
    id: 't12',
    title: 'Menu: 1-2'
  }]
}, {
  id: 'f2',
  title: 'Folder: 2',
  defaultCollapsed: true,
  children: [{
    id: 't21',
    title: 'Menu: 2-1'
  }, {
    id: 't22',
    title: 'Menu: 2-2'
  }, {
    id: 't23',
    title: 'Menu: 2-3'
  }]
}];
var preRender = "<btb-react-list dataList={menuData} />";
var preListData = "const menuData = [\n  { id: 'f1', title: 'Folder: 1', children: [\n          { id: 't11', title: 'Menu: 1-1' },\n          { id: 't12', title: 'Menu: 1-2' }\n  ]},\n  { id: 'f2', title: 'Folder: 2', defaultCollapsed: true, children: [\n          { id: 't21', title: 'Menu: 2-1' },\n          { id: 't22', title: 'Menu: 2-2' },\n          { id: 't23', title: 'Menu: 2-3' }\n  ]}\n]";

var ExampleMenu_ExampleMenu = function ExampleMenu() {
  return /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* Page */], {
    className: "btb-pkg-list-example-menu"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* PageHead */], {
    title: PageInfo.title,
    clickBtn: functions["a" /* openLink */],
    linkList: PageInfo.linkList
  }), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, "Version: ".concat(PageInfo.version), /*#__PURE__*/react_default.a.createElement("br", null), "Release Date: ".concat(PageInfo.updated))
  }, /*#__PURE__*/react_default.a.createElement("p", null, PageInfo.description)), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: "EXAMPLE"
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    dataList: _menuData,
    collapseEnable: true
  })), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: "SOURCECODE"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "render"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preRender)), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "menuData"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preListData))));
};

/* harmony default export */ var list_ExampleMenu = (ExampleMenu_ExampleMenu);
// CONCATENATED MODULE: ./src/routes/packages/list/ExampleMenuContainer.jsx



var ExampleMenuContainer_ExampleMenuContaier = function ExampleMenuContaier() {
  return /*#__PURE__*/react_default.a.createElement(list_ExampleMenu, null);
};

/* harmony default export */ var ExampleMenuContainer = __webpack_exports__["default"] = (ExampleMenuContainer_ExampleMenuContaier);

/***/ })

}]);