(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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
var classnames = __webpack_require__(50);
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
    description_button: 'package.button.description.button',
    description_group: 'package.button.description.group',
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);

var packageInfo = {
  'version': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button.version,
  'updated': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button.updated,
  'descriptionButton': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button.description_button,
  'descriptionGroup': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button.description_group,
  'linkList': [{
    'id': 'github',
    'fa': ['fab', 'github'],
    'url': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button.link.github
  }, {
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button.link.npm
  }]
};
/* harmony default export */ __webpack_exports__["a"] = (packageInfo);

/***/ }),

/***/ 94:
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

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(50);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ../react-button/esm/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function esm_o(t) {
  return (esm_o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  })(t);
}

function esm_r(t, e) {
  return function (t) {
    if (Array.isArray(t)) return t;
  }(t) || function (t, e) {
    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
    var n = [],
        o = !0,
        r = !1,
        i = void 0;

    try {
      for (var c, a = t[Symbol.iterator](); !(o = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); o = !0) {
        ;
      }
    } catch (t) {
      r = !0, i = t;
    } finally {
      try {
        o || null == a.return || a.return();
      } finally {
        if (r) throw i;
      }
    }

    return n;
  }(t, e) || function (t, e) {
    if (!t) return;
    if ("string" == typeof t) return esm_i(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    "Object" === n && t.constructor && (n = t.constructor.name);
    if ("Map" === n || "Set" === n) return Array.from(t);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return esm_i(t, e);
  }(t, e) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function esm_i(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var n = 0, o = new Array(e); n < e; n++) {
    o[n] = t[n];
  }

  return o;
}

var c = function c(t, e) {
  var n;
  return e.forEach(function (e) {
    n = Object.assign({}, n, esm_a(t, e));
  }), n;
},
    esm_a = function a(t, e) {
  var n = {};
  return "object" === esm_o(t) && Object.keys(t).find(function (o) {
    if (o === e) return n = Object.assign({}, t[o]), !0;
  }), n;
},
    u = function u(t) {
  var e = {};
  return Object.keys(t).forEach(function (n) {
    e[n] = {}, Object.keys(t[n]).forEach(function (o) {
      var r = o.replace(/-(\w)/g, function (t, e) {
        return e.toUpperCase();
      });
      e[n][r] = t[n][o];
    });
  }), e;
},
    esm_l = /*#__PURE__*/react_default.a.forwardRef(function (e, o) {
  var r = {
    styleObj: u(e.styleObj || {})
  };
  return /*#__PURE__*/react_default.a.createElement("div", {
    ref: o,
    className: classnames_default()("btb-react-button", e.className),
    style: c(r.styleObj, ["btb-react-button"]),
    onClick: function onClick() {
      void 0 !== e.onClick && e.onClick(e);
    }
  }, e.prependNode ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "button_item item-prepend",
    style: c(r.styleObj, ["button_item", "item-prepend"]),
    onClick: function onClick() {
      void 0 !== e.onPrependClick && e.onPrependClick(e);
    }
  }, e.prependNode) : [], /*#__PURE__*/react_default.a.createElement("div", {
    className: "button_item itme-core",
    style: c(r.styleObj, ["button_item", "itme-core"]),
    onClick: function onClick() {
      void 0 !== e.onCoreClick && e.onCoreClick(e);
    }
  }, e.children || "Button"), e.appendNode ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "button_item item-append",
    style: c(r.styleObj, ["button_item", "item-append"]),
    onClick: function onClick() {
      void 0 !== e.onAppendClick && e.onAppendClick(e);
    }
  }, e.appendNode) : []);
}),
    esm_b = /*#__PURE__*/react_default.a.forwardRef(function (o, i) {
  var a,
      l,
      b,
      s,
      f,
      p = {
    state_activeID: (l = Object(react["useState"])(a), b = esm_r(l, 2), s = b[0], f = b[1], {
      value: s,
      onChange: function onChange(t) {
        f(t);
      }
    }),
    direction: o.direction ? o.direction : "horizontal",
    styleObj: u(o.styleObj || {}),
    slotObj: o.slotObj || {}
  };

  function m(t) {
    void 0 !== o.onClick && o.onMemberClick(t);
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    ref: i,
    className: classnames_default()("btb-react-button-group", o.className, "group-".concat(p.direction)),
    style: c(p.styleObj, ["btb-react-button-group", "group-".concat(p.direction)])
  }, o.buttonList ? o.children.map(function (e) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: classnames_default()("group_button", "button-".concat(e.id), {
        "button-active": p.state_activeID.value === e.id
      }),
      style: c(p.styleObj, ["group_button", "button-".concat(e.id), p.state_activeID.value === e.id ? "button-active" : ""]),
      key: e.id,
      onClick: function onClick() {
        m(e);
      }
    }, e);
  }) : [], o.children ? o.children.map(function (e, o) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: classnames_default()("group_button", "button-".concat(o)),
      style: c(p.styleObj, ["group_button", "button-".concat(o)]),
      key: "".concat(Date.now(), "_").concat(o),
      onClick: function onClick() {
        m(e);
      }
    }, e);
  }) : [], o.buttonList.length || o.children ? [] : /*#__PURE__*/react_default.a.createElement("div", {
    className: "group_button button-empty",
    style: c(p.styleObj, ["group_button", "button-empty"])
  }, "Empty"));
});

var esm_s = {
  Button: esm_l,
  ButtonGroup: esm_b
};
/* harmony default export */ var esm = (esm_s);

// EXTERNAL MODULE: ./src/plugins/btblab-prototype-languages.js + 2 modules
var btblab_prototype_languages = __webpack_require__(51);

// EXTERNAL MODULE: ./src/utils/functions.js
var functions = __webpack_require__(48);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 5 modules
var pageLayout = __webpack_require__(47);

// EXTERNAL MODULE: ./src/components/packages/button/packageInfo.js
var packageInfo = __webpack_require__(56);

// CONCATENATED MODULE: ./src/components/packages/button/ExampleButton.jsx








var enhance = Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(function (state) {
  return {
    'languageSetting': state.language.languageSetting
  };
}));
var preRender = "<BTBButton \n        prependNode=\"<<\" \n        appendNode={<span>{'>>'}</span>} \n        onClick={_onClick} \n        onPrependClick={_onPrependClick} \n        onCoreClick={_onCoreClick} \n        onAppendClick={_onAppendClick}>\n        {'Click Me!'}\n</BTBButton>";
var preClick = "function _onClick () {\n        console.log('onClick');\n};\n\nfunction _onPrependClick () {\n        console.log('onPrependClick');\n};\n\nfunction _onCoreClick () {\n        console.log('onCoreClick');\n};\n\nfunction _onAppendClick () {\n        console.log('onAppendClick');\n};";
var ExampleButton = enhance(function () {
  function _onClick() {
    console.log('onClick');
  }

  function _onPrependClick() {
    console.log('onPrependClick');
  }

  function _onCoreClick() {
    console.log('onCoreClick');
  }

  function _onAppendClick() {
    console.log('onAppendClick');
  }

  return /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* Page */], {
    className: "btb-pkg-button-example-button"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* PageHead */], {
    title: btblab_prototype_languages["a" /* lang */].translate('package.button.example.button.title'),
    clickBtn: functions["a" /* openLink */],
    linkList: packageInfo["a" /* default */].linkList
  }), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, "".concat(btblab_prototype_languages["a" /* lang */].translate('package.version_colon')).concat(packageInfo["a" /* default */].version), /*#__PURE__*/react_default.a.createElement("br", null), "".concat(btblab_prototype_languages["a" /* lang */].translate('package.release_colon')).concat(packageInfo["a" /* default */].updated))
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('package.button.example.button.description'))), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('package.section.example')
  }, /*#__PURE__*/react_default.a.createElement(esm_l, {
    prependNode: "<<",
    appendNode: /*#__PURE__*/react_default.a.createElement("span", null, '>>'),
    onClick: _onClick,
    onPrependClick: _onPrependClick,
    onCoreClick: _onCoreClick,
    onAppendClick: _onAppendClick
  }, 'Click Me!')), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('package.section.sourceCode')
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preRender), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "Click"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preClick, "}"))));
});
/* harmony default export */ var button_ExampleButton = (ExampleButton);
{
  /* 
  <BTBButtonGroup onClick={_onGroupClick}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  </BTBButtonGroup>
  <BTBButtonGroup onClick={_onGroupClick} direction="horizontal" styleObj={{'member-2' : {color : 'red'}}}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  </BTBButtonGroup>
  <BTBButtonGroup onClick={_onGroupClick}>
  </BTBButtonGroup>
  <BTBButtonGroup onClick={_onGroupClick} direction="vertical">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  </BTBButtonGroup> */
}
// CONCATENATED MODULE: ./src/routes/packages/button/ExampleButtonContainer.jsx



var ExampleButtonContainer_ExampleButtonContaier = function ExampleButtonContaier() {
  return /*#__PURE__*/react_default.a.createElement(button_ExampleButton, null);
};

/* harmony default export */ var ExampleButtonContainer = __webpack_exports__["default"] = (ExampleButtonContainer_ExampleButtonContaier);

/***/ })

}]);