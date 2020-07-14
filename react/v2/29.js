(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 121:
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
var es = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(50);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/recompose/dist/Recompose.esm.js + 1 modules
var Recompose_esm = __webpack_require__(52);

// EXTERNAL MODULE: ./src/plugins/btblab-prototype-languages.js + 2 modules
var btblab_prototype_languages = __webpack_require__(51);

// CONCATENATED MODULE: ./src/assets/definitions/const.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var gridVault = {
  GRID_SM: 576,
  GRID_MD: 768,
  GRID_LG: 992,
  GRID_XL: 1200
};

var constVault = _objectSpread({}, gridVault);

/* harmony default export */ var definitions_const = (constVault);
// EXTERNAL MODULE: ./src/stores/langStore.js
var langStore = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-list/esm/index.js
var esm = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-popover/esm/index.js
var react_popover_esm = __webpack_require__(60);

// CONCATENATED MODULE: ./src/components/layout/Head.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Head_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Head_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Head_ownKeys(Object(source), true).forEach(function (key) { Head_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Head_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Head_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











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
    btblab_prototype_languages["a" /* lang */].set(event.index);
    env.state_showPopover.onToggle(false);
  }

  function _getLangList() {
    var langList = btblab_prototype_languages["a" /* lang */].menu().map(function (entry) {
      return Head_objectSpread(Head_objectSpread({}, entry), {}, {
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
    className: "head_item item-org"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "item_button",
    icon: ['fas', 'building'],
    fixedWidth: true,
    onClick: _openLab
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_item item-home"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "item_button",
    icon: ['fas', 'home'],
    fixedWidth: true,
    onClick: _redirectHome
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_item item-lang"
  }, /*#__PURE__*/react_default.a.createElement(react_popover_esm["a" /* default */], _extends({
    className: "head_langPopover"
  }, env.state_showPopover, {
    showPosition: "bottom",
    showAlign: "center",
    withArrow: true,
    trigger: /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
      className: "item_button",
      icon: ['fas', 'globe'],
      fixedWidth: true
    })
  }), /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    dataList: _getLangList(),
    activeID: btblab_prototype_languages["a" /* lang */].get().index,
    onEntryClick: _switchLang
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_item item-menu"
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
  title: 'About',
  langIndex: 'menu.about'
}, {
  id: 'OVERVIEW',
  title: 'Overview',
  langIndex: 'menu.overview'
}, {
  id: 'PACKAGES',
  title: 'Packages',
  langIndex: 'menu.packages.root',
  defaultCollapsed: false,
  children: [{
    id: 'PACKAGES_LIST',
    title: 'List',
    langIndex: 'menu.packages.list.root',
    defaultCollapsed: true,
    children: [{
      id: 'PACKAGES_LIST_BASIC',
      title: 'Basic',
      langIndex: 'menu.packages.basic'
    }, {
      id: 'PACKAGES_LIST_EXAMPLE_LIST',
      title: 'Example: List',
      langIndex: 'menu.packages.list.example.list'
    }, {
      id: 'PACKAGES_LIST_EXAMPLE_MENU',
      title: 'Example: Menu',
      langIndex: 'menu.packages.list.example.menu'
    }, {
      id: 'PACKAGES_LIST_EXAMPLE_STYLE',
      title: 'Example: Style',
      langIndex: 'menu.packages.list.example.style'
    }, {
      id: 'PACKAGES_LIST_EXAMPLE_SLOT',
      title: 'Example: Slot',
      langIndex: 'menu.packages.list.example.slot'
    }]
  }, {
    id: 'PACKAGES_TABLE',
    title: 'Table',
    langIndex: 'menu.packages.table.root',
    defaultCollapsed: true,
    children: [{
      id: 'PACKAGES_TABLE_BASIC',
      title: 'Basic',
      langIndex: 'menu.packages.basic'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_LIST',
      title: 'Example: List',
      langIndex: 'menu.packages.table.example.list'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_INFO',
      title: 'Example: Info',
      langIndex: 'menu.packages.table.example.info'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_COMPARE',
      title: 'Example: Compare',
      langIndex: 'menu.packages.table.example.compare'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_STYLE',
      title: 'Example: Style',
      langIndex: 'menu.packages.table.example.style'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_SLOT',
      title: 'Example: Slot',
      langIndex: 'menu.packages.table.example.slot'
    }]
  }, {
    id: 'PACKAGES_POPOVER',
    title: 'Popover',
    langIndex: 'menu.packages.popover.root',
    defaultCollapsed: true,
    children: [{
      id: 'PACKAGES_POPOVER_BASIC',
      title: 'Basic',
      langIndex: 'menu.packages.basic'
    }, {
      id: 'PACKAGES_POPOVER_EXAMPLE_POSITION',
      title: 'Example: Position',
      langIndex: 'menu.packages.popover.example.position'
    }, {
      id: 'PACKAGES_POPOVER_EXAMPLE_ALIGN',
      title: 'Example: Align',
      langIndex: 'menu.packages.popover.example.align'
    }]
  }, {
    id: 'PACKAGES_BUTTON',
    title: 'Button',
    langIndex: 'menu.packages.button.root',
    defaultCollapsed: true,
    children: [{
      id: 'PACKAGES_BUTTON_BASIC_BUTTON',
      title: 'Basic: Button',
      langIndex: 'menu.packages.button.basic.button'
    }, {
      id: 'PACKAGES_BUTTON_BASIC_GROUP',
      title: 'Basic: Group',
      langIndex: 'menu.packages.button.basic.group'
    }, {
      id: 'PACKAGES_BUTTON_EXAMPLE_BUTTON',
      title: 'Example: Button',
      langIndex: 'menu.packages.button.example.button'
    }, {
      id: 'PACKAGES_BUTTON_EXAMPLE_GROUP',
      title: 'Example: Group',
      langIndex: 'menu.packages.button.example.group'
    }, {
      id: 'PACKAGES_BUTTON_EXAMPLE_PAGINATION',
      title: 'Example: Pagination',
      langIndex: 'menu.packages.button.example.pagination'
    }, {
      id: 'PACKAGES_BUTTON_EXAMPLE_STYLE',
      title: 'Example: Style',
      langIndex: 'menu.packages.button.example.style'
    }, {
      id: 'PACKAGES_BUTTON_EXAMPLE_SLOT',
      title: 'Example: Slot',
      langIndex: 'menu.packages.button.example.slot'
    }]
  }]
}, {
  id: 'APPLICATIONS',
  title: 'Applications',
  defaultCollapsed: false,
  langIndex: 'menu.application.root',
  children: [{
    id: 'APPLICATIONS_LANGUAGES',
    title: 'Languages',
    langIndex: 'menu.application.languages'
  }, {
    id: 'APPLICATIONS_VALIDATOR',
    title: 'Validator',
    langIndex: 'menu.application.validator'
  }]
}, {
  id: 'VERSION_1',
  title: 'Version 1',
  langIndex: 'menu.version_1'
}];
/* harmony default export */ var definitions_menuList = (menuList);
// CONCATENATED MODULE: ./src/components/layout/Aside.jsx
function Aside_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Aside_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Aside_ownKeys(Object(source), true).forEach(function (key) { Aside_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Aside_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Aside_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    dataList: translateMenu(),
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

function translateMenu() {
  var result = definitions_menuList.map(function (entry) {
    return translateMenuRecursive(entry);
  });
  return result;
}

function translateMenuRecursive(obj) {
  var result = Aside_objectSpread(Aside_objectSpread({}, obj), {}, {
    title: obj.langIndex ? btblab_prototype_languages["a" /* lang */].translate(obj.langIndex) : obj.title
  });

  if (obj.children) {
    result.children = obj.children.map(function (entry) {
      return translateMenuRecursive(entry);
    });
  }

  return result;
}

/* harmony default export */ var layout_Aside = (Aside_Aside);
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

    return function cleanup() {
      window.removeEventListener('click', _clickListener);
    };
  }, []);
  Object(react["useEffect"])(function () {
    window.removeEventListener('click', _clickListener, false);

    if (!env.state_hiddenMenu.value) {
      window.addEventListener('click', _clickListener, false);
    }

    return function cleanup() {
      window.removeEventListener('click', _clickListener, false);
    };
  }, [env.state_hiddenMenu.value]);
  Object(react["useEffect"])(function () {
    window.scrollTo(0, 0);
  }, [props.history.location.pathname]);

  var _initialLang = function _initialLang() {
    if (!props.languageSetting.length) {
      var userLang = navigator.language || navigator.userLanguage;
      var result = btblab_prototype_languages["a" /* lang */].menu().find(function (item) {
        return userLang.search(new RegExp(item.index, 'i')) >= 0;
      });
      btblab_prototype_languages["a" /* lang */].set(result.index);
      props.dispatch(langStore["a" /* langAction */].setLang(result.index));
    } else {
      btblab_prototype_languages["a" /* lang */].set(props.languageSetting);
    }
  };

  function _clickEntry() {
    if (window.innerWidth < definitions_const.GRID_MD) {
      env.state_hiddenMenu.onToggle(true);
    }
  }

  function _clickListener(event) {
    window.test = event.path;
    var result = event.path.find(function (node) {
      if (node.classList) {
        return node.classList.value.search('layout_aside') > 0 || node.classList.value.search('item-menu') > 0;
      }

      return false;
    });

    if (typeof result == 'undefined') {
      _clickEntry();
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
      return __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, 122));
    })
  }), /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    path: routeMap["a" /* default */].OVERVIEW,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, 120));
    })
  }), /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    path: routeMap["a" /* default */].PACKAGES,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 31).then(__webpack_require__.bind(null, 118));
    })
  }), /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    path: routeMap["a" /* default */].APPLICATIONS,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, 119));
    })
  }))));
};

/* harmony default export */ var routes_HomeContainer = __webpack_exports__["default"] = (HomeContainer_HomeContainer);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ lang; });

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/prototype-languages/es/index.js + 1 modules
var es = __webpack_require__(97);

// CONCATENATED MODULE: ./src/assets/languages/en.js
/* harmony default export */ var en = ({
  'menu': {
    'about': 'About',
    'overview': 'Overview',
    'packages': {
      'root': 'Packages',
      'basic': 'Basic',
      'list': {
        'root': 'List',
        'example': {
          'list': 'Example: List',
          'menu': 'Example: Menu',
          'style': 'Example: Style',
          'slot': 'Example: Slot'
        }
      },
      'table': {
        'root': 'Table',
        'example': {
          'list': 'Example: List',
          'info': 'Example: Info',
          'compare': 'Example: Compare',
          'style': 'Example: Style',
          'slot': 'Example: Slot'
        }
      },
      'popover': {
        'root': 'Popover',
        'example': {
          'position': 'Example: Position',
          'align': 'Example: Align'
        }
      },
      'button': {
        'root': 'Button',
        'basic': {
          'button': 'Basic: Button',
          'group': 'Basic: Group'
        },
        'example': {
          'button': 'Example: Button',
          'group': 'Example: Group',
          'pagination': 'Example: Pagination',
          'style': 'Example: Style',
          'slot': 'Example: Slot'
        }
      }
    },
    'application': {
      'root': 'Application',
      'languages': 'Languages',
      'validator': 'Validator'
    },
    'version_1': 'Version 1'
  },
  'about': {
    'description': 'React is the first framework of javascript when I join to the Frontend develipment club. Before that jQuery of curse is my first using when I am a software engineer. Here I aim to develop packages made with React. They are designed with basic logic for high degrees of freedom of customization and low dependency. While using, if you find some questions, bugs or issues. Or having some great ideas. Please feel free to let me know.',
    'donate': {
      '1': 'If you like all the works in BTB Lab. Please ',
      '2': 'buy me a coffee',
      '3': '.'
    }
  },
  'overview': {
    'title': 'Overview',
    'version_colon': 'Version: ',
    'release_colon': 'Release Date: ',
    'downloads_colon': 'Weekly Downloads: '
  },
  'package': {
    'version_colon': 'Version: ',
    'release_colon': 'Release Date: ',
    'section': {
      'installation': 'INSTALLATION',
      'render': 'RENDER',
      'parameters': 'PARAMETERS',
      'nodeTree': 'NODE TREE',
      'example': 'EXAMPLE',
      'sourceCode': 'SOURCE CODE'
    },
    'paramType': {
      'array': 'Array',
      'object': 'Object',
      'string': 'String',
      'function': 'Function',
      'boolean': 'Boolean',
      'node': 'Node'
    },
    'list': {
      'name': 'List',
      'description': {
        'basic': 'This module of list creator made with React can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.'
      },
      'parameters': {
        'entryObj': 'If entry.children is defined. While clicking this entry will trigger onToggle. If not, it will trigger onEntryClick.',
        'styleObj': 'Any className in this module could add inline CSS by styleObj.',
        'slotObj': 'We could replace the default node with entryobj.id by slotObj.'
      },
      'property': {
        'dataList': 'List of entryObj.',
        'activeID': 'Actived entry.',
        'defaultActiveID': 'Default actived entry.',
        'collapseEnable': 'Enable the feature of collapse.',
        'styleObj': 'Object of customized style.',
        'slotObj': 'Object of slot which for render specific entry.',
        'onEntryClick': 'Function for entry clicked.',
        'onToggle': 'Fuction for while collapseEnable is ture and some collapsing triggered.',
        'ref': 'For the feature of React.ref.'
      },
      'entryObj': {
        'id': 'Identity of entry.',
        'title': 'Name of entry.',
        'defaultCollapsed': 'Default value to collapsed of extend.',
        'children': 'sublist.'
      },
      'slotObj': {
        'entryObj': 'Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id. If you are using function to slot, the function will be (entry) => {}. And the entry is the source data.'
      },
      'nodeTree': {
        'notice': 'Note: The layer count is counted base on 0.'
      },
      'example': {
        'list': {
          'title': 'Example: List',
          'description': 'Here is a very simple example for a list, if we just give a data list.'
        },
        'menu': {
          'title': 'Example: Menu',
          'description': 'When we enable the collapseEnable with datalist, we will get a simple menu to use. And it will trigger the onToggle event function while clicked for Collapsing or Expending. Every entry can be active status after being clicked. Surely it will trigger the onEntryClick event function too. Besides for a menu, it can tag one as defaultActiveID. Also utilize the useState to work with activeID.'
        },
        'style': {
          'title': 'Example: Style',
          'description': 'Here is going to show you about how to use the styleObj and the example of activeID. The activeID is used to mark focused entry, but also allowed to used defaultActiveID to mark entry as default in the begin. Then we can modify the style by the styleObj with using the node class name directly.'
        },
        'slot': {
          'title': 'Example: Slot',
          'description': 'Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, I show you how to customized the entry which ID is b2. For the package of list, every single ID corresponding to dataList can be customized by slotObj in String, Node, or Function way.'
        }
      }
    },
    'table': {
      'name': 'Table',
      'description': {
        'basic': 'This module of table creator made with React can do the help to make a table component to our page. It has modes in list and info which are different ways to show data.'
      },
      'parameters': {
        'styleObj': 'Any className in this module could add inline CSS by styleObj.',
        'slotObj': 'We could replace the default node with bodyObj.id by slotObj. However we need the prefix to specify which node we want to customized th or td.'
      },
      'property': {
        'headData': 'List of headObj.',
        'bodyData': 'List of bodyObj.',
        'mode': 'Value in list, info or compare.',
        'styleObj': 'Object of customized style.',
        'slotObj': 'Object of customized entry of head or body.',
        'onDataClick': 'Function for data clicked.',
        'ref': 'For the feature of React.ref.'
      },
      'headObj': {
        'id': 'Identity of column.',
        'name': 'Name of column.'
      },
      'slotObj': {
        'th': 'Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id. If you are using function to slot, the function will be (headObj) => {}. And the entry is the head data.',
        'td': 'Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id. If you are using function to slot, the function will be (bodyObj, headObj) => {}. And the entry is the source data and head data.'
      },
      'nodeTree': {
        'notice': 'Note: The data order is counted base on 0.',
        'list': 'List Mode',
        'info': 'Info Mode',
        'compare': 'Compare Mode'
      },
      'example': {
        'list': {
          'title': 'Example: List',
          'description': 'Here has very simple example to show how to use the list mode.'
        },
        'info': {
          'title': 'Example: Info',
          'description': 'Here has very simple example to show how to use the info mode.'
        },
        'compare': {
          'title': 'Example: Compare',
          'description': 'Here has very simple example to show how to use the compare mode.'
        },
        'style': {
          'title': 'Example: Style',
          'description': 'Here is going to show you about how to use the styleObj for inline CSS. Then we can use with the class name of node directly.'
        },
        'slot': {
          'title': 'Example: Slot',
          'description': 'Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, It shows how to customized by slotObj in String, Node, or Function way.'
        }
      }
    },
    'popover': {
      'name': 'Popover',
      'description': {
        'basic': 'This module of popover creator made with React can do the help to make a popover component to our page. The popover can do th e thing about popover and dropdown.'
      },
      'parameters': {
        'styleObj': 'Any className in this module could add inline CSS by styleObj.'
      },
      'property': {
        'showState': 'We could use the parameter to overwrite the showState of popover.',
        'showPosition': 'The position of popover. Options in top, right, bottom, left.',
        'showAlign': 'The align of popover. Options in begin, center, end.',
        'withArrow': 'The tiny caret to let popover become conversation block. Get it false when we prefer a dropdown.',
        'autoDetect': 'The feature of auto-detecting window\'s inner edge of browser. When the popover show overglow to browser, it will adjust by self. We could get it false, if we don\'t need the feature working. Default is ture.',
        'trigger': 'Render the popover toggle trigger node.',
        'styleObj': 'Object of customized style.',
        'onToggle': 'Event function trigged when popover is toggle no matter showing or hiding.',
        'onShow': 'Event function trigged when popover is going to show.',
        'onHide': 'Event function trigged when popover is going to hidd.',
        'ref': 'For the feature of React.ref.'
      },
      'example': {
        'vertical': 'Vertical',
        'horizontal': 'Horizontal',
        'position': {
          'title': 'Example: Position',
          'description': 'Here is simply to show the popover with position configured. The popover is default to enable autoDetect function which means while the popover showing over the boundary of browser. It will adjust automatically.'
        },
        'align': {
          'title': 'Example: Align',
          'description': 'Here is simply to show the popover with align configured. The popover is default to enable autoDetect function which means while the popover showing over the boundary of browser. It will adjust automatically.'
        }
      }
    },
    'button': {
      'name': {
        'button': 'Button',
        'group': 'Button - Group'
      },
      'description': {
        'basic': 'This module of button / button group creator made with React which can do the help to make a button / button group component to our page. Actually both components are designed totally different. So I just put them into one package for utilization with single installation.',
        'button': 'This module of button / button group creator made with React which can do the help to make a button / button group component to our page. Actually both components are designed totally different. So I just put them into one package for utilization with single installation. Here I introduce you how to use the button component. Most fancy layout of button could be implemented via CSS. Even though this part is not my lab\'s target to develop components. I still will give some example to show how to implement some layout of button.',
        'group': 'This module of button / button group creator made with React which can do the help to make a button / button group component to our page. Actually both components are designed totally different. So I just put them into one package for utilization with single installation. Here I introduce you how to use the button group component. And I will show you how to utilize the button group to implement the pagination which is usually used with table.'
      },
      'parameters': {
        'styleObj': 'Any className in this module could add inline CSS by styleObj.'
      },
      'property': {
        'prependNode': 'Definition of the prepend space of the button.',
        'appendNode': 'Definition of the append space of the button.',
        'direction': 'The direction of button group. Options in horizontal, vertical.',
        'styleObj': 'Object of customized style.',
        'onButtonClick': 'Event function trigged when the button is clicked.',
        'onMemberClick': 'Event function trigged when the sub-button(member) group is clicked.',
        'onPrependClick': 'Event function trigged when preppend item of the button is clicked.',
        'onCoreClick': 'Event function trigged when main of the button is clicked.',
        'onAppendClick': 'Event function trigged when append item of the button is clicked.',
        'ref': 'For the feature of React.ref.'
      },
      'nodeTree': {
        'notice': 'Note: The button order is counted base on 0.'
      },
      'example': {
        'button': {
          'title': 'Example: Button',
          'description': 'Here I will show you how to create the button which you can easily add the node in prepend or apprend. And also add the event to them and to whole button. And you can see what happened on console after clicking.'
        },
        'group': {
          'title': 'Example: Group',
          'description': 'group'
        },
        'pagination': {
          'title': 'Example: Pagination',
          'description': 'pagination'
        },
        'style': {
          'title': 'Example: Style',
          'description': 'style'
        },
        'slot': {
          'title': 'Example: Slot',
          'description': 'slot'
        }
      }
    }
  },
  'application': {
    'section': {
      'installation': 'INSTALLATION',
      'initializer': 'INITIALIZER',
      'impletement': 'IMPLEMENT',
      'trigger': 'TRIGGER'
    },
    'languages': {
      'name': 'Languages',
      'description': 'For developing the website of international services, we usually have the requirement to develop with the feature of multiple-languages supported. We already have a lot of masterpice such like i18n. But here we created our own multiple-languages package for lowing down the dependencies. Here I am going to show you how to ultilize the @blacktoolbox/prototype-languages with React based website.',
      'installation': {
        'description': 'The more detail is intoduced in JavaScript Lab. The more detail you could see it there. Here it only present how to work with React based website.',
        'linkName': 'Link of Document'
      },
      'initializer': 'As @blacktoolbox/prototype-languages required, it need to be initialized before using.',
      'impletement': 'The package has storage itself to save the each dicionary of language which is the thing initializer do. And the other thing to do before using is implement a instance of the package. Most action processed with it: menu(), get(), set(), translate().',
      'trigger': {
        'description': 'Here we are talking about how to re-render the page after we change the language settings. Of cause, we can do reload to the browser with localStorage, no matter witch type of website is. However mostly React is used in Single Page Application(SPA) development. We could ultilize the nature of React. Basically we have 2 ways to rerender the page: distpatch triggered and key triggered.',
        'dispatch': 'Combined the package with Store management related package(Flux, Redux, ...). We could re-render page we want after dispatched.',
        'key': 'Here is a unusual way for specific scenario. Sometimes for UX required, it maybe be wanted to be the effect to reload whole page. With React, we do not need to do the reload really. We could use the key the mark the top node. After language is changed, the key will changed too. Then the top node will be re-create like new component. Unless it required the network package re-download actually.'
      }
    }
  },
  'chart': {
    'times': 'Times'
  }
});
// CONCATENATED MODULE: ./src/assets/languages/zh.js
/* harmony default export */ var zh = ({
  'menu': {
    'about': '關於本站',
    'overview': '套件總覽',
    'packages': {
      'root': '套件',
      'basic': '基本介紹',
      'list': {
        'root': '清單',
        'example': {
          'list': '範例：清單',
          'menu': '範例：選單',
          'style': '範例：客製化外觀',
          'slot': '範例：客製化渲染'
        }
      },
      'table': {
        'root': '表',
        'example': {
          'list': '範例：清冊表',
          'info': '範例：資料表',
          'compare': '範例：比較表',
          'style': '範例：客製化外觀',
          'slot': '範例：客製化渲染'
        }
      },
      'popover': {
        'root': '氣泡框',
        'example': {
          'position': '範例：顯示位置',
          'align': '範例：對齊方式'
        }
      },
      'button': {
        'root': '按鈕',
        'basic': {
          'button': '基本介紹：按鈕',
          'group': '基本介紹：按鈕組'
        },
        'example': {
          'button': '範例：按鈕',
          'group': '範例：按鈕組',
          'pagination': '範例：分頁按鈕',
          'style': '範例：客製化外觀',
          'slot': '範例：客製化渲染'
        }
      }
    },
    'application': {
      'root': '應用套件',
      'languages': '多語言切換器',
      'validator': '驗證器'
    },
    'version_1': '前往舊站 v1'
  },
  'about': {
    'description': 'React 是我入門前端時，第一個學習的JavaScript框架，事實上，在這之前也有使用 jQuery 的開發經驗，當我還是嵌入式系統的軟體工程師時。這邊主要基於 React 的設計思維，利用其 React 特有的性質來開發低依賴性、高自由度的套件，以利於完成客製化需求，如果這些套件在使用上有什麼困難，或者對於套件的開發有其他的想法或期待，還請多多與我分享您的想法。',
    'donate': {
      '1': '如果您喜歡 BTB Lab. 的開發成果與設計方式。您的',
      '2': '小小捐款',
      '3': '是給予我莫大的肯定與鼓勵。'
    }
  },
  'overview': {
    'title': '套件總覽',
    'version_colon': '發布版本：',
    'release_colon': '發布日期：',
    'downloads_colon': '每周下載量：'
  },
  'package': {
    'version_colon': '發布版本：',
    'release_colon': '發布日期：',
    'section': {
      'installation': '安裝',
      'render': '渲染',
      'parameters': '參數',
      'nodeTree': '節點樹',
      'example': '範例',
      'sourceCode': '源代碼'
    },
    'paramType': {
      'array': '陣列',
      'object': '物件',
      'string': '字串',
      'function': '函式',
      'boolean': '布林',
      'node': '節點'
    },
    'list': {
      'name': '清單',
      'description': {
        'basic': '這個套件結合清單與菜單的功能，利用展開收闔的功能，以及導頁的功能(React-router, history,...等)，便是後台網站常見的菜單，配合我們設計的氣泡框。便可成為下拉式選單。'
      },
      'parameters': {
        'entryObj': '如果 entry.children 有被定義。則當點擊時會觸發 onToggle ，反之，則觸發 onEntryClick 。',
        'styleObj': '套件中任何具有 className 的節點，皆能使用 styleObj 定義 inline CSS。',
        'slotObj': '資料中的項目皆能以 id 在 slotObj 定義客製化的節點內容。'
      },
      'property': {
        'dataList': 'entryObj 的陣列。',
        'activeID': '激活的 entry 的 id。',
        'defaultActiveID': '預設激活的 entry 的 id。',
        'collapseEnable': '開啟展開 / 收合功能。',
        'styleObj': '客製化外觀。',
        'slotObj': '客製化節點。',
        'onEntryClick': '項目點擊事件函式。',
        'onToggle': '項目層展開 / 收合切換之事件函式。',
        'ref': '支援 React.ref。'
      },
      'entryObj': {
        'id': '項目識別名。',
        'title': '項目顯示名。',
        'defaultCollapsed': '當項目具有子清單，可預設展開 / 收合狀態。',
        'children': '子清單。'
      },
      'slotObj': {
        'entryObj': '套件支援客製化節點的功能，當以函式客製化節點渲染時，函式初始為 (entry) => {} ，其中輸入值為該節點的原始資料。'
      },
      'nodeTree': {
        'notice': '附註：層的計算係由0開始。'
      },
      'example': {
        'list': {
          'title': '範例：清單',
          'description': '最基本的清單，僅需要輸入資料的陣列即可。'
        },
        'menu': {
          'title': '範例：選單',
          'description': '當我們啟用展開/收合的功能時，簡易地選單就產生了，同時當資料的物件被點擊時，還會觸發 onToggle 或 onEntryClick，如果是有子目錄的物件，便會觸發 onToggle，反之則觸發 onEntryClick，如果是有子目錄的物件，便會觸發，並且，事件函式的輸入參數為被點擊物件的原始資料。另外，我們能用 defaultActiveID 指定預設激活的物件，也可以配合 useState 控制 activeID。'
        },
        'style': {
          'title': '範例：客製化外觀',
          'description': '這邊將展示如何使用 styleObj，以 inline CSS 的方式客製化套件的外觀，並示範如何結合 activeID 的使用，標記出激活中的物件，但也可以僅以 defaultActiveID 標記初始激活的物件，最後再以 styleObj 於對應的 className 設定外觀。'
        },
        'slot': {
          'title': '範例：客製化渲染',
          'description': '單純的外觀渲染，可能過於單調，有些物件的渲染也許會需要一些客製化：渲染成表單、按鈕 ... 等，因此，可以利用 slotObj 的方式，用字串、節點或函式的方式客製化節點的渲染。'
        }
      }
    },
    'table': {
      'name': '表',
      'description': {
        'basic': '表的設計本身分成三種模式：列表、資訊與資訊並列，使用視窗監聽，再配合客製化的外觀。即可完成漂亮的響應式的表顯示。未來還會再擴充表頭的設定功能，讓表可以更輕易地完成：分頁、排序、搜尋、欄位過濾等功能。'
      },
      'parameters': {
        'styleObj': '套件中任何具有 className 的節點，皆能使用 styleObj 定義 inline CSS。',
        'slotObj': '藉由 bodyObj.id，我們可以在 slotObj 客製化表的資料渲染內容，並且利用前綴 th_ 與 td_ 指定想要客製化的部分。'
      },
      'property': {
        'headData': 'headObj 的陣列。',
        'bodyData': 'bodyObj 的陣列。',
        'mode': '切換表的顯示方式：list、info、compare.',
        'styleObj': '客製化外觀。',
        'slotObj': '客製化表頭、資料。',
        'onDataClick': '資料點擊事件函式。',
        'ref': '支援 React.ref。'
      },
      'headObj': {
        'id': '表頭識別名。',
        'name': '表頭顯示名。'
      },
      'slotObj': {
        'th': '套件支援客製化節點的功能，當以函式客製化節點渲染時，函式初始為 (headObj) => {} ，其中輸入值為該節點的表頭資料。',
        'td': '套件支援客製化節點的功能，當以函式客製化節點渲染時，函式初始為 (bodyObj, headObj) => {} ，其中輸入值為該節點的原始資料與表頭資料。'
      },
      'nodeTree': {
        'notice': '附註：資料的流水號係由0開始。',
        'list': '清冊表',
        'info': '資料表',
        'compare': '比較表'
      },
      'example': {
        'list': {
          'title': '範例：清冊表',
          'description': '輸入表頭、資料後，即可匯出最基本的表。'
        },
        'info': {
          'title': '範例：資料表',
          'description': '輸入表頭、資料後，再切換成資料模式即可。'
        },
        'compare': {
          'title': '範例：比較表',
          'description': '輸入表頭、資料後，再切換成比對模式即可。'
        },
        'style': {
          'title': '範例：客製化外觀',
          'description': '這邊將展示如何使用 styleObj，以 inline CSS 的方式，於對應的 className 設定外觀。'
        },
        'slot': {
          'title': '範例：客製化渲染',
          'description': '單純的外觀渲染，可能過於單調，有些物件的渲染也許會需要一些客製化：渲染成表單、按鈕 ... 等，因此，可以利用 slotObj 的方式，用字串、節點或函式的方式客製化節點的渲染。'
        }
      }
    },
    'popover': {
      'name': '氣泡框',
      'description': {
        'basic': '氣泡框預設有偵測視窗邊界的功能，可靈活的切換顯示位置與對齊方式，也具有強制鎖定顯示狀態的設計，另外如果結合氣泡框與清單的套件，便可成為下拉式選單。'
      },
      'parameters': {
        'styleObj': '套件中任何具有 className 的節點，皆能使用 styleObj 定義 inline CSS。'
      },
      'property': {
        'showState': '控制氣泡框顯示狀態。',
        'showPosition': '控制氣泡框顯示位置：top、right、bottom、left。',
        'showAlign': '控制氣泡框對齊位置：begin、center、end。',
        'withArrow': '控制顯示為對話框。',
        'autoDetect': '自動偵測式窗邊界功能，並自動切換氣泡框顯示與對齊位置。預設為啟用。',
        'trigger': '渲染氣泡框觸發節點。',
        'styleObj': '客製化外觀。',
        'onToggle': '氣泡框狀態切換事件函式。',
        'onShow': '顯示氣泡框事件函式。',
        'onHide': '隱藏氣泡框事件函式。',
        'ref': '支援 React.ref。'
      },
      'example': {
        'vertical': '垂直',
        'horizontal': '水平',
        'position': {
          'title': '範例：顯示位置',
          'description': '簡單地顯示如何控制氣泡框顯示的位置。氣泡框預設啟用瀏覽器邊界偵測（autoDetect），當氣泡框超出瀏覽器邊界時，會依據顯示位置與對齊方式做濤整，此功能也可以關掉。'
        },
        'align': {
          'title': '範例：對齊方式',
          'description': '簡單地顯示如何控制氣泡框顯示的位置。氣泡框預設啟用瀏覽器邊界偵測（autoDetect），當氣泡框超出瀏覽器邊界時，會依據顯示位置與對齊方式做濤整，此功能也可以關掉。'
        }
      }
    },
    'button': {
      'name': {
        'button': '按鈕',
        'group': '按鈕 - 按鈕組'
      },
      'description': {
        'basic': '本套件包含兩個套件，一為按鈕（button），一為按鈕組（button group），事實上兩者開發的結構並無直接相關聯，只是兩者皆為按鈕相關的套件，所以放在同一個套件包裡，方便安裝使用。',
        'button': '本套件包含兩個套件，一為按鈕（button），一為按鈕組（button group），事實上兩者開發的結構並無直接相關聯，只是兩者皆為按鈕相關的套件，所以放在同一個套件包裡，方便安裝使用，而這邊為按鈕的基本介紹。雖然外觀設計並非本實驗室開發套件的重點，然為了貼近實際應用，還是會提供一些常見的按鈕外觀作為範例。',
        'group': '本套件包含兩個套件，一為按鈕（button），一為按鈕組（button group），事實上兩者開發的結構並無直接相關聯，只是兩者皆為按鈕相關的套件，所以放在同一個套件包裡，方便安裝使用，這邊為按鈕祖的基本介紹。範例的部分，還會展示如何使用按鈕組實作，常與表（table）配合使用的分頁按鈕組。'
      },
      'parameters': {
        'styleObj': '套件中任何具有 className 的節點，皆能使用 styleObj 定義 inline CSS。'
      },
      'property': {
        'prependNode': '定義按鈕前綴。',
        'appendNode': '定義按鈕後綴。',
        'direction': '按鈕組顯示按鈕方向：horizontal、vertical。',
        'styleObj': '客製化外觀。',
        'onButtonClick': '按鈕整體點擊事件函式。',
        'onMemberClick': '按鈕組下子按鈕的點擊事件函式。',
        'onPrependClick': '按鈕前綴整體點擊事件函式。',
        'onCoreClick': '按鈕內容整體點擊事件函式。',
        'onAppendClick': '按鈕後綴整體點擊事件函式。',
        'ref': '支援 React.ref。'
      },
      'nodeTree': {
        'notice': '附註：按鈕的計算係由0開始。'
      },
      'example': {
        'button': {
          'title': '範例：按鈕',
          'description': '這邊我們將會示範如何產生按鈕，我們可以增加前綴節點，或後綴節點，並且幫他們，或者整個按鈕增加觸發事件。點擊按鈕後，可以在主控台（console）看看發生什麼事。'
        },
        'group': {
          'title': '範例：按鈕組',
          'description': 'group'
        },
        'pagination': {
          'title': '範例：分頁按鈕',
          'description': 'pagination'
        },
        'style': {
          'title': '範例：客製化外觀',
          'description': 'style'
        },
        'slot': {
          'title': '範例：客製化渲染',
          'description': 'slot'
        }
      }
    }
  },
  'application': {
    'section': {
      'installation': '安裝',
      'initializer': '初始化',
      'impletement': '實體',
      'trigger': '觸發'
    },
    'languages': {
      'name': '多語言切換器',
      'description': '對於跨國性服務來說，多國語言的支援往往是基本需求，雖然我們已有一些很出色的語言相關套件，如i18n，但我想開發的多語言切換器，主要是想降低套件的依賴性，以及降低一些非必要的功能支援，以最單純的核心功能，並且提供良好的擴充彈性，如果您需要很完整、方便的功能，可以考慮使用 i18n 之類的傑出套件，倘若需要的功能並不複雜，那麼也許你會想要試試看BTB Lab. 的多語言切換器。這邊我們將說明如何結合與基於 React 開發的網站使用。',
      'installation': {
        'description': '比較詳細的操作說明在我的 JavaScript Lab，這邊著重在如何與基於 React 開發的網站使用。',
        'linkName': '說明文件連結'
      },
      'initializer': '@blacktoolbox/prototype-languages 需要在使用前執行初始化的動作。',
      'impletement': '套件本身內有儲存語言字典的機制，也就是在執行 initializer 時，所執行的事情. 但我們還需要再使用前多語言切換器之前，實踐至少一個實體出來，而主要的產生語言清單、激活指定的語言，以及翻譯的動作皆須仰賴此實體，藉由：menu(), get(), set(), translate().',
      'trigger': {
        'description': '這邊則是說明如何在切換語言之後，重新顯示或渲染網頁。當然地我們仍可以結合localStorage，用重新載入網站的方式，使得網頁以新指定的語言顯示對應翻譯。但 React 大多應用的情境是單頁式網站架構(SPA)，基本地我們能應用兩種機制，觸發網頁換新：distpatch 與 key.',
        'dispatch': '我們可以結合儲存管理機制的套件（Flux、Redux、...），利用dispatch的機制換新頁面的語言呈現，在每個需要切換翻譯的組件裡，連結儲存裡的語言設定即可成就。',
        'key': '為了保留語言設定，或者自動觸發切換語言之後的邏輯，大致上來說都會與儲存管理機制的套件做結合應用，但這邊還談及到一個不常使用的機制，倘若因應專案的開發需求，在UX的設計，想要讓網頁仍以重新載入網站的效果呈現語言切換時，可利用 React 中 key 的機制，在最頂層的節點加上 key 值，並綁定語言設定，故當語言切換後，更新儲存的語言設定，接著更新 key 值，最後因為 key 值不同，最頂層的組件被視為是新建立組件，使得整個網站已重新建立的方式，獲得新指定語言的翻譯。但倘若實際的需求是要讓所有的檔案重新下載執行，仍須以重新載入的方式更新瀏覽器。'
      }
    }
  },
  'chart': {
    'times': '次數'
  }
});
// CONCATENATED MODULE: ./src/plugins/btblab-prototype-languages.js



Object(es["b" /* initializer */])([{
  index: 'en',
  label: 'Eglish',
  dictionary: en
}, {
  index: 'zh',
  label: '繁體中文',
  dictionary: zh
}]);
var lang = new es["a" /* default */]();

/***/ })

}]);