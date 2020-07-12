(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 109:
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
var Recompose_esm = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-popover/esm/index.js
var esm = __webpack_require__(59);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 5 modules
var pageLayout = __webpack_require__(47);

// EXTERNAL MODULE: ./src/utils/functions.js
var functions = __webpack_require__(48);

// EXTERNAL MODULE: ./src/components/packages/popover/packageInfo.js
var packageInfo = __webpack_require__(58);

// EXTERNAL MODULE: ./src/plugins/btblab-prototype-languages.js + 2 modules
var btblab_prototype_languages = __webpack_require__(51);

// CONCATENATED MODULE: ./src/components/packages/popover/ExamplePosition.jsx








var enhance = Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(function (state) {
  return {
    'languageSetting': state.language.languageSetting
  };
}));
var preRender = "<BTBPopover showPosition={\"left\"} trigger={(<button>Left</button>)}>\n        Example: Left\n</BTBPopover>\n\n<BTBPopover showPosition={\"top\"} trigger={(<button>Top</button>)}>\n        Example: Top\n</BTBPopover>\n\n<BTBPopover showPosition={\"bottom\"} trigger={(<button>Bottom</button>)}>\n        Example: Bottom\n</BTBPopover>\n\n<BTBPopover showPosition={\"right\"} trigger={(<button>Right</button>)}>\n        EXample: Right\n</BTBPopover>";
var ExamplePosition = enhance(function () {
  return /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* Page */], {
    className: "btb-pkg-popover-example-position"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* PageHead */], {
    title: btblab_prototype_languages["a" /* lang */].translate('package.popover.example.position.title'),
    clickBtn: functions["a" /* openLink */],
    linkList: packageInfo["a" /* default */].linkList
  }), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, "".concat(btblab_prototype_languages["a" /* lang */].translate('package.version_colon')).concat(packageInfo["a" /* default */].version), /*#__PURE__*/react_default.a.createElement("br", null), "".concat(btblab_prototype_languages["a" /* lang */].translate('package.release_colon')).concat(packageInfo["a" /* default */].updated))
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('package.popover.example.position.description'))), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('package.section.example')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "align_vertical"
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    showPosition: "left",
    trigger: /*#__PURE__*/react_default.a.createElement("button", null, "Left")
  }, "Example: Left")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "align_vertical"
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    showPosition: "top",
    trigger: /*#__PURE__*/react_default.a.createElement("button", null, "Top")
  }, "Example: Top")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "align_vertical"
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    showPosition: "bottom",
    trigger: /*#__PURE__*/react_default.a.createElement("button", null, "Bottom")
  }, "Example: Bottom")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "align_vertical"
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    showPosition: "right",
    trigger: /*#__PURE__*/react_default.a.createElement("button", null, "Right")
  }, "EXample: Right"))), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('package.section.sourceCode')
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preRender)));
});
/* harmony default export */ var popover_ExamplePosition = (ExamplePosition);
// CONCATENATED MODULE: ./src/routes/packages/popover/ExamplePositionContainer.jsx



var ExamplePositionContainer_ExamplePositionContaier = function ExamplePositionContaier() {
  return /*#__PURE__*/react_default.a.createElement(popover_ExamplePosition, null);
};

/* harmony default export */ var ExamplePositionContainer = __webpack_exports__["default"] = (ExamplePositionContainer_ExamplePositionContaier);

/***/ }),

/***/ 47:
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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openLink; });
var openLink = function openLink(link) {
  window.open(link.url);
};



/***/ }),

/***/ 50:
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
    version: '1.2.1',
    updated: '2020-07-07',
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/react-popover',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/react-popover'
    }
  },
  button: {
    name: 'package.button.name',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_BUTTON_BASIC,
    description: 'package.button.description.basic',
    version: '1.0.0',
    updated: '2020-07-08',
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/react-button',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/react-button'
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (packageObj);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);

var packageInfo = {
  'version': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].popover.version,
  'updated': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].popover.updated,
  'description': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].popover.description,
  'linkList': [{
    'id': 'github',
    'fa': ['fab', 'github'],
    'url': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].popover.link.github
  }, {
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].popover.link.npm
  }]
};
/* harmony default export */ __webpack_exports__["a"] = (packageInfo);

/***/ })

}]);