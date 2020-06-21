(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(2);

// EXTERNAL MODULE: ./src/assets/definitions/routeMap.js
var routeMap = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(48);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/recompose/dist/Recompose.esm.js + 1 modules
var Recompose_esm = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/prototype-languages/es/index.js + 1 modules
var prototype_languages_es = __webpack_require__(62);

// CONCATENATED MODULE: ./src/assets/languages/en.js
/* harmony default export */ var en = ({
  'a': {
    'aa': {
      'aaa': 'AAA',
      'aab': 'AAB'
    }
  },
  'b': {
    'ba': 'BA'
  }
});
// CONCATENATED MODULE: ./src/assets/languages/zh.js
/* harmony default export */ var zh = ({
  'a': {
    'aa': {
      'aaa': '一一一',
      'aab': '一一二'
    }
  },
  'b': {
    'ba': '二一'
  }
});
// CONCATENATED MODULE: ./src/plugins/btblab-prototype-languages.js



Object(prototype_languages_es["b" /* initializer */])([{
  index: 'en',
  label: 'Eglish',
  dictionary: en
}, {
  index: 'zh',
  label: '繁體中文',
  dictionary: zh
}]);
var lang = new prototype_languages_es["a" /* default */]();
// EXTERNAL MODULE: ./src/stores/langStore.js
var langStore = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-list/esm/index.js
var esm = __webpack_require__(53);

// CONCATENATED MODULE: ../react-popover/esm/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function esm_r(t) {
  return (esm_r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  })(t);
}

function a(t, o) {
  return function (t) {
    if (Array.isArray(t)) return t;
  }(t) || function (t, o) {
    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
    var e = [],
        n = !0,
        r = !1,
        a = void 0;

    try {
      for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done) && (e.push(i.value), !o || e.length !== o); n = !0) {
        ;
      }
    } catch (t) {
      r = !0, a = t;
    } finally {
      try {
        n || null == s.return || s.return();
      } finally {
        if (r) throw a;
      }
    }

    return e;
  }(t, o) || function (t, o) {
    if (!t) return;
    if ("string" == typeof t) return esm_i(t, o);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    "Object" === e && t.constructor && (e = t.constructor.name);
    if ("Map" === e || "Set" === e) return Array.from(t);
    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return esm_i(t, o);
  }(t, o) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function esm_i(t, o) {
  (null == o || o > t.length) && (o = t.length);

  for (var e = 0, n = new Array(o); e < o; e++) {
    n[e] = t[e];
  }

  return n;
}

var s = function s(t, o) {
  var e;
  return o.forEach(function (o) {
    e = Object.assign({}, e, esm_c(t, o));
  }), e;
},
    esm_c = function c(t, o) {
  var e = {};
  return "object" === esm_r(t) && Object.keys(t).find(function (n) {
    if (n === o) return e = Object.assign({}, t[n]), !0;
  }), e;
},
    esm_l = /*#__PURE__*/react_default.a.forwardRef(function (r, i) {
  var c,
      l,
      u,
      f,
      y,
      p,
      h,
      b = {
    state_showState: (u = r.showState, f = Object(react["useState"])(u), y = a(f, 2), p = y[0], h = y[1], {
      value: p,
      onToggle: function onToggle(t) {
        h("boolean" == typeof t ? t : !p);
      }
    }),
    showPosition: r.showPosition ? r.showPosition : "bottom",
    showAlign: r.showAlign ? r.showAlign : "begin",
    styleObj: (c = r.styleObj || {}, l = {}, Object.keys(c).forEach(function (t) {
      l[t] = {}, Object.keys(c[t]).forEach(function (o) {
        var e = o.replace(/-(\w)/g, function (t, o) {
          return o.toUpperCase();
        });
        l[t][e] = c[t][o];
      });
    }), l)
  };
  return Object(react["useEffect"])(function () {
    return function () {};
  }, []), Object(react["useEffect"])(function () {
    void 0 !== r.showState && b.state_showState.value !== r.showState && b.state_showState.onToggle(r.showState);
  }), /*#__PURE__*/react_default.a.createElement("div", {
    ref: i,
    className: classnames_default()("btb-react-popover", r.className, "popover-align-".concat(b.showAlign)),
    style: s(b.styleObj, ["btb-react-popover"])
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "popover_trigger",
    style: s(b.styleObj, ["popover_trigger"]),
    onClick: function onClick() {
      r.stateLock || (void 0 !== r.onToggle && r.onToggle(!b.state_showState.value), b.state_showState.value ? void 0 !== r.onHide && r.onHide() : void 0 !== r.onShow && r.onShow(), b.state_showState.onToggle());
    }
  }, void 0 !== r.trigger ? r.trigger : "Trigger"), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()("popover_content", {
      "content-show": b.state_showState.value
    }, "content-position-".concat(b.showPosition)),
    style: s(b.styleObj, ["popover_content", b.state_showState.value ? "content-show" : "", "content-position-".concat(b.showPosition)])
  }, r.children));
});

/* harmony default export */ var react_popover_esm = (esm_l);
// CONCATENATED MODULE: ./src/components/layout/Head.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var enhance = Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(), react_router["o" /* withRouter */]);
var Head = enhance(function (props) {
  var env = {
    state_showPopover: useActiveState(false)
  };

  function _openLab() {
    window.open('https://blacktoolboxlaboratory.github.io/');
  }

  function _redirectHome() {
    props.history.push(routeMap["a" /* default */]['ABOUT']);
  }

  function _switchLang(event) {
    props.dispatch(langStore["a" /* langAction */].setLang(event.index));
    lang.set(event.index);
    env.state_showPopover.onToggle(false);
  }

  function _getLangList() {
    var langList = lang.menu().map(function (entry) {
      return _objectSpread(_objectSpread({}, entry), {}, {
        "id": entry.index,
        "title": entry.label
      });
    });
    return langList;
  }

  return /*#__PURE__*/react_default.a.createElement("header", {
    className: ["btb-layout-head", props.className].join(' ')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_logo"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "logo_content"
  }, "BR")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_title"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "title_main hidden-down-md"
  }, "Black Tool Box Laboratory"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "title_main hidden-up-md"
  }, "BTB"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "title_sub"
  }, "For React")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_item"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "item_button",
    icon: ['fas', 'building'],
    fixedWidth: true,
    onClick: _openLab
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_item"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "item_button",
    icon: ['fas', 'home'],
    fixedWidth: true,
    onClick: _redirectHome
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_item"
  }, /*#__PURE__*/react_default.a.createElement(react_popover_esm, _extends({
    className: "head_langPopover"
  }, env.state_showPopover, {
    showPosition: "bottom",
    showAlign: "end",
    trigger: /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
      className: "item_button",
      icon: ['fas', 'globe'],
      fixedWidth: true
    })
  }), /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    dataList: _getLangList(),
    activeID: lang.get().index,
    onEntryClick: _switchLang
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_item"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "item_button",
    icon: ['fas', 'bars'],
    fixedWidth: true,
    onClick: props.toggleMenu
  })));
});

function useActiveState(defaultSate) {
  var _useState = Object(react["useState"])(defaultSate),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setState = _useState2[1];

  return {
    showState: value,
    onToggle: function onToggle(data) {
      setState(data);
    }
  };
}

/* harmony default export */ var layout_Head = (Head);
// CONCATENATED MODULE: ./src/components/layout/Foot.jsx



var Foot_Aside = function Aside(props) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: ["btb-layout-foot", props.className].join(' ')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "foot_navbar"
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: "navbar_linkBtn linkBtn-paypal",
    href: "https://www.paypal.me/vannoel0628",
    target: "_blank"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    icon: ['fab', 'paypal'],
    fixedWidth: true
  })), /*#__PURE__*/react_default.a.createElement("a", {
    className: "navbar_linkBtn linkBtn-github",
    href: "https://github.com/BlackToolBoxLaboratory",
    target: "_blank"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    icon: ['fab', 'github'],
    fixedWidth: true
  })), /*#__PURE__*/react_default.a.createElement("a", {
    className: "navbar_linkBtn linkBtn-npm",
    href: "https://www.npmjs.com/org/blacktoolbox",
    target: "_blank"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    icon: ['fab', 'npm'],
    fixedWidth: true
  })), /*#__PURE__*/react_default.a.createElement("a", {
    className: "navbar_linkBtn linkBtn-linkedin",
    href: "https://www.linkedin.com/company/black-tool-box-laboratory/",
    target: "_blank"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    icon: ['fab', 'linkedin'],
    fixedWidth: true
  })), /*#__PURE__*/react_default.a.createElement("a", {
    className: "navbar_linkBtn linkBtn-wordpress",
    href: "https://vannoel0628.wordpress.com/",
    target: "_blank"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    icon: ['fab', 'wordpress'],
    fixedWidth: true
  })), /*#__PURE__*/react_default.a.createElement("a", {
    className: "navbar_linkBtn linkBtn-email",
    href: "mailto://vannoel0628@gmail.com",
    target: "_blank"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    icon: ['far', 'envelope'],
    fixedWidth: true
  }))), /*#__PURE__*/react_default.a.createElement("footer", {
    className: "foot_copyright"
  }, "Copyright \xA9 Black Tool Box Laboratory. All rights reserved."));
};

/* harmony default export */ var Foot = (Foot_Aside);
// CONCATENATED MODULE: ./src/assets/definitions/menuList.js
var menuList = [{
  id: 'ABOUT',
  title: 'About'
}, {
  id: 'PACKAGES',
  title: 'Packages',
  defaultCollapsed: false,
  children: [{
    id: 'PACKAGES_LIST',
    title: 'List',
    defaultCollapsed: true,
    children: [{
      id: 'PACKAGES_LIST_BASIC',
      title: 'Basic'
    }, {
      id: 'PACKAGES_LIST_EXAMPLE_LIST',
      title: 'Example-List'
    }, {
      id: 'PACKAGES_LIST_EXAMPLE_MENU',
      title: 'Example-Menu'
    }, {
      id: 'PACKAGES_LIST_EXAMPLE_STYLE',
      title: 'Example-Style'
    }, {
      id: 'PACKAGES_LIST_EXAMPLE_SLOT',
      title: 'Example-Slot'
    }]
  }, {
    id: 'PACKAGES_TABLE',
    title: 'Table',
    defaultCollapsed: true,
    children: [{
      id: 'PACKAGES_TABLE_BASIC',
      title: 'Basic'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_LIST',
      title: 'Example-List'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_INFO',
      title: 'Example-Info'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_COMPARE',
      title: 'Example-Compare'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_STYLE',
      title: 'Example-Style'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_SLOT',
      title: 'Example-Slot'
    }]
  }, {
    id: 'PACKAGES_POPOVER',
    title: 'Popover',
    defaultCollapsed: true,
    children: [{
      id: 'PACKAGES_POPOVER_BASIC',
      title: 'Basic'
    }]
  }]
}, {
  id: 'APPLICATIONS',
  title: 'Applications',
  defaultCollapsed: false,
  children: [{
    id: 'APPLICATIONS_LANGUAGES',
    title: 'Languages'
  }, {
    id: 'APPLICATIONS_VALIDATOR',
    title: 'Validator'
  }]
}, {
  id: 'VERSION_1',
  title: 'Version 1'
}];
/* harmony default export */ var definitions_menuList = (menuList);
// CONCATENATED MODULE: ./src/components/layout/Aside.jsx
function Aside_slicedToArray(arr, i) { return Aside_arrayWithHoles(arr) || Aside_iterableToArrayLimit(arr, i) || Aside_unsupportedIterableToArray(arr, i) || Aside_nonIterableRest(); }

function Aside_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Aside_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Aside_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Aside_arrayLikeToArray(o, minLen); }

function Aside_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Aside_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Aside_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Aside_Aside = Object(react_router["o" /* withRouter */])(function (props) {
  var env = {
    state_activeID: Aside_useActiveState()
  };
  Object(react["useEffect"])(function () {
    env.state_activeID.onChange(_getRouteID());
  });

  function _clickEntry(event) {
    if (event.id === 'VERSION_1') {
      window.open('https://blacktoolboxlaboratory.github.io/react/v1/');
    } else {
      if (routeMap["a" /* default */][event.id] !== props.history.location.pathname) {
        props.history.push(routeMap["a" /* default */][event.id]);
        env.state_activeID.onChange(event.id);
        props.clickEntry();
      }
    }
  }

  function _getRouteID() {
    var result = Object.keys(routeMap["a" /* default */]).find(function (key) {
      return routeMap["a" /* default */][key] === props.history.location.pathname;
    });
    return result;
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: ["btb-layout-aside", props.className].join(' ')
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    className: "aside_menu",
    dataList: definitions_menuList,
    activeID: env.state_activeID.value,
    collapseEnable: true,
    onEntryClick: _clickEntry
  }));
});

function Aside_useActiveState(defaultSate) {
  var _useState = Object(react["useState"])(defaultSate),
      _useState2 = Aside_slicedToArray(_useState, 2),
      value = _useState2[0],
      setState = _useState2[1];

  return {
    value: value,
    onChange: function onChange(data) {
      setState(data);
    }
  };
}

/* harmony default export */ var layout_Aside = (Aside_Aside);
// CONCATENATED MODULE: ./src/assets/definitions/const.js
function const_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function const_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { const_ownKeys(Object(source), true).forEach(function (key) { const_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { const_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function const_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var gridVault = {
  GRID_SM: 576,
  GRID_MD: 768,
  GRID_LG: 992,
  GRID_XL: 1200
};

var constVault = const_objectSpread({}, gridVault);

/* harmony default export */ var definitions_const = (constVault);
// CONCATENATED MODULE: ./src/components/layout/Layout.jsx
function Layout_slicedToArray(arr, i) { return Layout_arrayWithHoles(arr) || Layout_iterableToArrayLimit(arr, i) || Layout_unsupportedIterableToArray(arr, i) || Layout_nonIterableRest(); }

function Layout_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Layout_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Layout_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Layout_arrayLikeToArray(o, minLen); }

function Layout_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Layout_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Layout_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Layout_enhance = Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(function (state) {
  return {
    'languageSetting': state.language.languageSetting
  };
}), react_router["o" /* withRouter */]);
var Layout = Layout_enhance(function (props) {
  var env = {
    state_hiddenMenu: useMenuState(window.innerWidth < definitions_const.GRID_MD)
  };
  Object(react["useEffect"])(function () {
    _initialLang();
  }, []);
  Object(react["useEffect"])(function () {
    window.scrollTo(0, 0);
  }, [props.history.location.pathname]);

  var _initialLang = function _initialLang() {
    if (!props.languageSetting.length) {
      var userLang = navigator.language || navigator.userLanguage;
      var result = lang.menu().find(function (item) {
        return userLang.search(new RegExp(item.index, 'i')) >= 0;
      });
      lang.set(result.index);
      props.dispatch(langStore["a" /* langAction */].setLang(result.index));
    } else {
      lang.set(props.languageSetting);
    }
  };

  function _clickEntry() {
    if (window.innerWidth < definitions_const.GRID_MD) {
      env.state_hiddenMenu.onToggle(true);
    }
  }

  function _toggleMenu() {
    env.state_hiddenMenu.onToggle();
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "btb-layout"
  }, /*#__PURE__*/react_default.a.createElement(layout_Head, {
    className: "layout_head",
    toggleMenu: _toggleMenu
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "layout_content"
  }, props.children), /*#__PURE__*/react_default.a.createElement(Foot, {
    className: "layout_foot"
  }), /*#__PURE__*/react_default.a.createElement(layout_Aside, {
    className: classnames_default()('layout_aside', {
      'aside-hidden': env.state_hiddenMenu.value
    }),
    clickEntry: _clickEntry
  }));
});

function useMenuState(defaultSate) {
  var _useState = Object(react["useState"])(defaultSate),
      _useState2 = Layout_slicedToArray(_useState, 2),
      value = _useState2[0],
      setState = _useState2[1];

  return {
    value: value,
    onToggle: function onToggle(bol) {
      setState(typeof bol != 'undefined' ? bol : !value);
    }
  };
}

/* harmony default export */ var layout_Layout = (Layout);
// CONCATENATED MODULE: ./src/routes/HomeContainer.jsx





var HomeContainer_HomeContainer = function HomeContainer() {
  return /*#__PURE__*/react_default.a.createElement(layout_Layout, null, /*#__PURE__*/react_default.a.createElement(react["Suspense"], {
    fallback: /*#__PURE__*/react_default.a.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    exact: true,
    path: routeMap["a" /* default */].PACKAGES
  }, /*#__PURE__*/react_default.a.createElement(react_router["c" /* Redirect */], {
    to: routeMap["a" /* default */].PACKAGES_LIST
  })), /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    exact: true,
    path: routeMap["a" /* default */].APPLICATIONS
  }, /*#__PURE__*/react_default.a.createElement(react_router["c" /* Redirect */], {
    to: routeMap["a" /* default */].APPLICATIONS_LANGUAGES
  })), /*#__PURE__*/react_default.a.createElement(react_router["g" /* Switch */], null, /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    path: routeMap["a" /* default */].ABOUT,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, 78));
    })
  }), /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    path: routeMap["a" /* default */].PACKAGES,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, 75));
    })
  }), /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    path: routeMap["a" /* default */].APPLICATIONS,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, 76));
    })
  }))));
};

/* harmony default export */ var routes_HomeContainer = __webpack_exports__["default"] = (HomeContainer_HomeContainer);

/***/ })

}]);