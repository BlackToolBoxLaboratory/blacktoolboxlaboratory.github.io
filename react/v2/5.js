(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 35:
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
var classnames = __webpack_require__(37);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(29);

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
  }, props.title || ''), (props.btnList || []).map(function (btn) {
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openLink; });
var openLink = function openLink(link) {
  window.open(link.url);
};



/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

var packageObj = {
  list: {
    name: 'List',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_LIST_BASIC,
    description: 'This module of list creator made with React can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.',
    version: '2.1.6',
    updated: 'Jun, 14, 2020'
  },
  table: {
    name: 'Table',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_TABLE_BASIC,
    description: 'This module of table creator made with React can do the help to make a table component to our page. It has modes in list and info which are different ways to show data.',
    version: '1.0.1',
    updated: 'Jun, 13, 2020'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (packageObj);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-list/esm/index.js
var esm = __webpack_require__(39);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 5 modules
var pageLayout = __webpack_require__(35);

// EXTERNAL MODULE: ./src/assets/definitions/packageObj.js
var packageObj = __webpack_require__(38);

// EXTERNAL MODULE: ./src/utils/functions.js
var functions = __webpack_require__(36);

// CONCATENATED MODULE: ./src/components/packages/list/exampleMenu.jsx





var packageInfo = {
  'version': packageObj["a" /* default */].list.version,
  'updated': packageObj["a" /* default */].list.updated,
  'description': 'When we enable the collapseEnable with datalist, we will get a simple menu to use. And it will trigger the onToggle event function while clicked for Collapsing or Expending. Every entry can be active status after being clicked. Surely it will trigger the onEntryClick event function too. Besides for a menu, it can tag one as defaultActiveID. Also use the v-model to listen the value from activeID',
  'btnList': [{
    'id': 'github',
    'fa': ['fab', 'github'],
    'url': 'https://github.com/BlackToolBoxLaboratory/react-list'
  }, {
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': 'https://www.npmjs.com/package/@blacktoolbox/react-list'
  }]
};
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

var exampleMenu_ExampleMenu = function ExampleMenu() {
  return /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* Page */], {
    className: "btb-pkg-list-example-menu"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* PageHead */], {
    title: 'Example - Menu',
    clickBtn: functions["a" /* openLink */],
    btnList: packageInfo.btnList
  }), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, "Version: ".concat(packageInfo.version), /*#__PURE__*/react_default.a.createElement("br", null), "Release Date: ".concat(packageInfo.updated))
  }, /*#__PURE__*/react_default.a.createElement("p", null, packageInfo.description)), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: "EXAMPLE"
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    dataList: _menuData,
    collapseEnable: true
  })), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: "CONFIGURATION"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "Render"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preRender)), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "menuData"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preListData))));
};

/* harmony default export */ var exampleMenu = (exampleMenu_ExampleMenu);
// CONCATENATED MODULE: ./src/routes/packages/list/ExampleMenuContainer.jsx



var ExampleMenuContainer_ExampleMenuContaier = function ExampleMenuContaier() {
  return /*#__PURE__*/react_default.a.createElement(exampleMenu, null);
};

/* harmony default export */ var ExampleMenuContainer = __webpack_exports__["default"] = (ExampleMenuContainer_ExampleMenuContaier);

/***/ })

}]);