(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIcon", function() { return FontAwesomeIcon; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var spin = props.spin,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-spin': spin,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, ["style"]);

  mixins.attrs['style'] = _objectSpread2({}, mixins.attrs['style'], {}, existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2({}, mixins.attrs, {}, remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = "production" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

// Normalize icon arguments
function normalizeIconArgs(icon) {
  // if the icon is null, there's nothing to do
  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (_typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

function FontAwesomeIcon(_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["forwardedRef"]);

  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[/* parse */ "c"].transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[/* icon */ "a"])(iconLookup, _objectSpread2({}, classes, {}, transform, {}, mask, {
    symbol: symbol,
    title: title
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: forwardedRef
  };
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  border: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mask: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  fixedWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  flip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['horizontal', 'vertical', 'both']),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  listItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  pull: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['right', 'left']),
  pulse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([90, 180, 270]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  swapOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: '',
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement);




/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(1);

// EXTERNAL MODULE: ./src/assets/definitions/routeMap.js
var routeMap = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(29);

// CONCATENATED MODULE: ./src/components/layout/Head.jsx



var Head_Head = function Head(props) {
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
  }, "BTB Lab."), /*#__PURE__*/react_default.a.createElement("div", {
    className: "title_sub"
  }, "For React")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_item"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "item_button",
    icon: ['fas', 'home'],
    fixedWidth: true
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_item"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "item_button",
    icon: ['fas', 'globe'],
    fixedWidth: true
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_item"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "item_button",
    icon: ['fas', 'bars'],
    fixedWidth: true
  })));
};

/* harmony default export */ var layout_Head = (Head_Head);
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
// CONCATENATED MODULE: ./src/components/layout/Aside.jsx


var Aside_Aside = function Aside(props) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: ["btb-layout-aside", props.className].join(' ')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "btb-vue-list aside_menu"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "container_entry"
  }, "About"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "container_entry"
  }, "Home v1")));
};

/* harmony default export */ var layout_Aside = (Aside_Aside);
// CONCATENATED MODULE: ./src/components/layout/Layout.jsx





var Layout_Layout = function Layout(props) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "btb-layout"
  }, /*#__PURE__*/react_default.a.createElement(layout_Head, {
    className: "layout_head"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "layout_content"
  }, props.children), /*#__PURE__*/react_default.a.createElement(Foot, {
    className: "layout_foot"
  }), /*#__PURE__*/react_default.a.createElement(layout_Aside, {
    className: "layout_aside"
  }));
};

function togglePageMenu() {
  this.env.isHidden = !this.env.isHidden;
}

/* harmony default export */ var layout_Layout = (Layout_Layout);
// CONCATENATED MODULE: ./src/routes/HomeContainer.jsx





var HomeContainer_HomeContainer = function HomeContainer() {
  return /*#__PURE__*/react_default.a.createElement(layout_Layout, null, /*#__PURE__*/react_default.a.createElement(react["Suspense"], {
    fallback: /*#__PURE__*/react_default.a.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react_default.a.createElement(react_router["c" /* Redirect */], {
    exact: true,
    from: routeMap["a" /* default */].HOME,
    to: routeMap["a" /* default */].ABOUT
  }), /*#__PURE__*/react_default.a.createElement(react_router["g" /* Switch */], null, /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    path: routeMap["a" /* default */].ABOUT,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 34));
    })
  }))));
};

/* harmony default export */ var routes_HomeContainer = __webpack_exports__["default"] = (HomeContainer_HomeContainer);

/***/ })

}]);