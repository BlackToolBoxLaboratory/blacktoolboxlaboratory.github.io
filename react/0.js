(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../react-list/esm/index.js":
/*!**********************************!*\
  !*** ../react-list/esm/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function n(e) {
  return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  })(e);
}

function a(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}

function c(e, t) {
  var r = Object.keys(e);

  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), r.push.apply(r, n);
  }

  return r;
}

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? c(Object(r), !0).forEach(function (t) {
      a(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }

  return e;
}

var l = function l(e, t) {
  var r;
  return t.forEach(function (t) {
    r = Object.assign({}, r, o(e, t));
  }), r;
},
    o = function o(e, t) {
  var r = {};
  return "object" === n(e) && Object.keys(e).find(function (n) {
    if (n === t) return r = Object.assign({}, e[n]), !0;
  }), r;
},
    s = function n(a) {
  var c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "btb-react-list-layer layer-".concat(a.iteration),
    style: l(a.styleObj, ["btb-react-list-layer", "layer-".concat(a.iteration)])
  }, a.subdataList.map(function (t) {
    return void 0 !== t.children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "layer_container",
      style: l(a.styleObj, ["layer_container"]),
      key: t.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("container_entry", "entry-".concat(t.id), {
        "entry-collapsable": a.collapseEnable
      }, {
        "entry-active": a.activeID && a.activeID === t.id
      }),
      style: i({
        paddingLeft: "".concat(a.iteration, "rem")
      }, l(a.styleObj, ["container_entry", "entry-".concat(t.id), a.collapseEnable ? "entry-collapsable" : "", a.activeID && a.activeID === t.id ? "entry-active" : ""]))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "entry_title",
      style: l(a.styleObj, ["entry_title"])
    }, t.slot ? t.slot : t.title), t.children.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container_sublayer",
      id: "".concat(t.id, "_sublayer"),
      style: l(a.styleObj, ["container_sublayer"]),
      ref: c
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(n, {
      subdataList: t.children,
      styleObj: a.styleObj || {},
      iteration: a.iteration + 1
    })) : [])) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "layer_container",
      style: l(a.styleObj, ["layer_container"]),
      key: t.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("container_entry", "entry-".concat(t.id), {
        "entry-active": a.activeID && a.activeID === t.id
      }),
      style: i({
        paddingLeft: "".concat(a.iteration, "rem")
      }, l(a.styleObj, ["container_entry", "entry-".concat(t.id), a.activeID && a.activeID === t.id ? "entry-active" : ""]))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "entry_title",
      style: l(a.styleObj, ["entry_title"])
    }, t.slot ? t.slot : t.title)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ["btb-react-list", t.className].join(" "),
    style: l(t.styleObj, ["btb-react-list"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(s, {
    subdataList: t.dataList,
    styleObj: t.styleObj || {},
    iteration: 0
  }));
});

/***/ }),

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fortawesome/react-fontawesome/index.es.js ***!
  \*****************************************************************/
/*! exports provided: FontAwesomeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIcon", function() { return FontAwesomeIcon; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
  PRODUCTION = "development" === 'production';
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
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["icon"])(iconLookup, _objectSpread2({}, classes, {}, transform, {}, mask, {
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

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/assets/definitions/menuList.js":
/*!********************************************!*\
  !*** ./src/assets/definitions/menuList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var menuList = [{
  id: 'ABOUT',
  title: 'About'
}, {
  id: 'PACKAGES',
  title: 'Packages',
  children: [{
    id: 'PACKAGES_LIST',
    title: 'List',
    children: [{
      id: 'PACKAGES_LIST_BASIC',
      title: 'Basic'
    }]
  }]
}, {
  id: 'APPLICATIONS',
  title: 'Application',
  children: [{
    id: 'APPLICATION_LANGUAGES',
    title: 'Languages'
  }, {
    id: 'APPLICATION_VALIDATOR',
    title: 'Validator'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (menuList);

/***/ }),

/***/ "./src/components/layout/Aside.jsx":
/*!*****************************************!*\
  !*** ./src/components/layout/Aside.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blacktoolbox_react_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blacktoolbox/react-list */ "../react-list/esm/index.js");
/* harmony import */ var _src_assets_definitions_menuList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/assets/definitions/menuList.js */ "./src/assets/definitions/menuList.js");




var Aside = function Aside(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ["btb-layout-aside", props.className].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btb-vue-list aside_menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
    dataList: _src_assets_definitions_menuList_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container_entry"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container_entry"
  }, "Home v1")));
};

/* harmony default export */ __webpack_exports__["default"] = (Aside);

/***/ }),

/***/ "./src/components/layout/Foot.jsx":
/*!****************************************!*\
  !*** ./src/components/layout/Foot.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");



var Aside = function Aside(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ["btb-layout-foot", props.className].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "foot_navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar_linkBtn linkBtn-paypal",
    href: "https://www.paypal.me/vannoel0628",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: ['fab', 'paypal'],
    fixedWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar_linkBtn linkBtn-github",
    href: "https://github.com/BlackToolBoxLaboratory",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: ['fab', 'github'],
    fixedWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar_linkBtn linkBtn-npm",
    href: "https://www.npmjs.com/org/blacktoolbox",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: ['fab', 'npm'],
    fixedWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar_linkBtn linkBtn-linkedin",
    href: "https://www.linkedin.com/company/black-tool-box-laboratory/",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: ['fab', 'linkedin'],
    fixedWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar_linkBtn linkBtn-wordpress",
    href: "https://vannoel0628.wordpress.com/",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: ['fab', 'wordpress'],
    fixedWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar_linkBtn linkBtn-email",
    href: "mailto://vannoel0628@gmail.com",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: ['far', 'envelope'],
    fixedWidth: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "foot_copyright"
  }, "Copyright \xA9 Black Tool Box Laboratory. All rights reserved."));
};

/* harmony default export */ __webpack_exports__["default"] = (Aside);

/***/ }),

/***/ "./src/components/layout/Head.jsx":
/*!****************************************!*\
  !*** ./src/components/layout/Head.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");



var Head = function Head(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: ["btb-layout-head", props.className].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "head_logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo_content"
  }, "BR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "head_title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title_main hidden-down-md"
  }, "Black Tool Box Laboratory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title_main hidden-up-md"
  }, "BTB Lab."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title_sub"
  }, "For React")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "head_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "item_button",
    icon: ['fas', 'home'],
    fixedWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "head_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "item_button",
    icon: ['fas', 'globe'],
    fixedWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "head_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "item_button",
    icon: ['fas', 'bars'],
    fixedWidth: true
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./src/components/layout/Layout.jsx":
/*!******************************************!*\
  !*** ./src/components/layout/Layout.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Head_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head.jsx */ "./src/components/layout/Head.jsx");
/* harmony import */ var _Foot_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Foot.jsx */ "./src/components/layout/Foot.jsx");
/* harmony import */ var _Aside_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Aside.jsx */ "./src/components/layout/Aside.jsx");





var Layout = function Layout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btb-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Head_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "layout_head"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "layout_content"
  }, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Foot_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "layout_foot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Aside_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "layout_aside"
  }));
};

function togglePageMenu() {
  this.env.isHidden = !this.env.isHidden;
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/routes/HomeContainer.jsx":
/*!**************************************!*\
  !*** ./src/routes/HomeContainer.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/assets/definitions/routeMap.js */ "./src/assets/definitions/routeMap.js");
/* harmony import */ var _src_components_layout_Layout_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/components/layout/Layout.jsx */ "./src/components/layout/Layout.jsx");





var HomeContainer = function HomeContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_layout_Layout_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    exact: true,
    from: _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__["default"].HOME,
    to: _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__["default"].ABOUT
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__["default"].ABOUT,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @src/routes/AboutContainer.jsx */ "./src/routes/AboutContainer.jsx"));
    })
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcmVhY3QtbGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZS9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2RlZmluaXRpb25zL21lbnVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Bc2lkZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9IZWFkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0hvbWVDb250YWluZXIuanN4Il0sIm5hbWVzIjpbIm4iLCJlIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImEiLCJ0IiwiciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJjIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInB1c2giLCJhcHBseSIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJsIiwiYXNzaWduIiwibyIsImZpbmQiLCJzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbmNhdCIsIml0ZXJhdGlvbiIsInN0eWxlIiwic3R5bGVPYmoiLCJzdWJkYXRhTGlzdCIsIm1hcCIsImNoaWxkcmVuIiwia2V5IiwiaWQiLCJjb2xsYXBzZUVuYWJsZSIsImFjdGl2ZUlEIiwicGFkZGluZ0xlZnQiLCJzbG90IiwidGl0bGUiLCJyZWYiLCJqb2luIiwiZGF0YUxpc3QiLCJtZW51TGlzdCIsIkFzaWRlIiwicHJvcHMiLCJNRU5VIiwiSGVhZCIsIkxheW91dCIsInRvZ2dsZVBhZ2VNZW51IiwiZW52IiwiaXNIaWRkZW4iLCJIb21lQ29udGFpbmVyIiwiUk9VVEUiLCJIT01FIiwiQUJPVVQiLCJSZWFjdCIsImxhenkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0M7O0FBQTBCLFNBQVNBLENBQVQsQ0FBV0MsQ0FBWCxFQUFhO0FBQUMsU0FBTSxDQUFDRCxDQUFDLEdBQUMsY0FBWSxPQUFPRSxNQUFuQixJQUEyQixvQkFBaUJBLE1BQU0sQ0FBQ0MsUUFBeEIsQ0FBM0IsR0FBNEQsVUFBU0YsQ0FBVCxFQUFXO0FBQUMsbUJBQWNBLENBQWQ7QUFBZ0IsR0FBeEYsR0FBeUYsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsV0FBT0EsQ0FBQyxJQUFFLGNBQVksT0FBT0MsTUFBdEIsSUFBOEJELENBQUMsQ0FBQ0csV0FBRixLQUFnQkYsTUFBOUMsSUFBc0RELENBQUMsS0FBR0MsTUFBTSxDQUFDRyxTQUFqRSxHQUEyRSxRQUEzRSxXQUEyRkosQ0FBM0YsQ0FBUDtBQUFvRyxHQUE1TSxFQUE4TUEsQ0FBOU0sQ0FBTjtBQUF1Tjs7QUFBQSxTQUFTSyxDQUFULENBQVdMLENBQVgsRUFBYU0sQ0FBYixFQUFlQyxDQUFmLEVBQWlCO0FBQUMsU0FBT0QsQ0FBQyxJQUFJTixDQUFMLEdBQU9RLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQlQsQ0FBdEIsRUFBd0JNLENBQXhCLEVBQTBCO0FBQUNJLFNBQUssRUFBQ0gsQ0FBUDtBQUFTSSxjQUFVLEVBQUMsQ0FBQyxDQUFyQjtBQUF1QkMsZ0JBQVksRUFBQyxDQUFDLENBQXJDO0FBQXVDQyxZQUFRLEVBQUMsQ0FBQztBQUFqRCxHQUExQixDQUFQLEdBQXNG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QUFTLGVBQUVDLDRDQUFLLENBQUNDLElBQU4sQ0FBVztBQUFBLGFBQU0sc0pBQU47QUFBQSxLQUFYO0FBQXJDLElBREYsQ0FGRixDQURGLENBREY7QUFVRCxDQVhEOztBQWFlTCw0RUFBZixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZSx7dXNlUmVmIGFzIHR9ZnJvbVwicmVhY3RcIjtpbXBvcnQgciBmcm9tXCJjbGFzc25hbWVzXCI7ZnVuY3Rpb24gbihlKXtyZXR1cm4obj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9ZnVuY3Rpb24gYShlLHQscil7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9ZnVuY3Rpb24gYyhlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG49bi5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIsbil9cmV0dXJuIHJ9ZnVuY3Rpb24gaShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9jKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7YShlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6YyhPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX12YXIgbD1mdW5jdGlvbihlLHQpe3ZhciByO3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKHQpe3I9T2JqZWN0LmFzc2lnbih7fSxyLG8oZSx0KSl9KSkscn0sbz1mdW5jdGlvbihlLHQpe3ZhciByPXt9O3JldHVyblwib2JqZWN0XCI9PT1uKGUpJiZPYmplY3Qua2V5cyhlKS5maW5kKChmdW5jdGlvbihuKXtpZihuPT09dClyZXR1cm4gcj1PYmplY3QuYXNzaWduKHt9LGVbbl0pLCEwfSkpLHJ9LHM9ZnVuY3Rpb24gbihhKXt2YXIgYz10KG51bGwpO3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHtjbGFzc05hbWU6XCJidGItcmVhY3QtbGlzdC1sYXllciBsYXllci1cIi5jb25jYXQoYS5pdGVyYXRpb24pLHN0eWxlOmwoYS5zdHlsZU9iaixbXCJidGItcmVhY3QtbGlzdC1sYXllclwiLFwibGF5ZXItXCIuY29uY2F0KGEuaXRlcmF0aW9uKV0pfSxhLnN1YmRhdGFMaXN0Lm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMCE9PXQuY2hpbGRyZW4/ZS5jcmVhdGVFbGVtZW50KFwibGlcIix7Y2xhc3NOYW1lOlwibGF5ZXJfY29udGFpbmVyXCIsc3R5bGU6bChhLnN0eWxlT2JqLFtcImxheWVyX2NvbnRhaW5lclwiXSksa2V5OnQuaWR9LGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6cihcImNvbnRhaW5lcl9lbnRyeVwiLFwiZW50cnktXCIuY29uY2F0KHQuaWQpLHtcImVudHJ5LWNvbGxhcHNhYmxlXCI6YS5jb2xsYXBzZUVuYWJsZX0se1wiZW50cnktYWN0aXZlXCI6YS5hY3RpdmVJRCYmYS5hY3RpdmVJRD09PXQuaWR9KSxzdHlsZTppKHtwYWRkaW5nTGVmdDpcIlwiLmNvbmNhdChhLml0ZXJhdGlvbixcInJlbVwiKX0sbChhLnN0eWxlT2JqLFtcImNvbnRhaW5lcl9lbnRyeVwiLFwiZW50cnktXCIuY29uY2F0KHQuaWQpLGEuY29sbGFwc2VFbmFibGU/XCJlbnRyeS1jb2xsYXBzYWJsZVwiOlwiXCIsYS5hY3RpdmVJRCYmYS5hY3RpdmVJRD09PXQuaWQ/XCJlbnRyeS1hY3RpdmVcIjpcIlwiXSkpfSxlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiZW50cnlfdGl0bGVcIixzdHlsZTpsKGEuc3R5bGVPYmosW1wiZW50cnlfdGl0bGVcIl0pfSx0LnNsb3Q/dC5zbG90OnQudGl0bGUpLHQuY2hpbGRyZW4ubGVuZ3RoPjA/ZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImNvbnRhaW5lcl9zdWJsYXllclwiLGlkOlwiXCIuY29uY2F0KHQuaWQsXCJfc3VibGF5ZXJcIiksc3R5bGU6bChhLnN0eWxlT2JqLFtcImNvbnRhaW5lcl9zdWJsYXllclwiXSkscmVmOmN9LGUuY3JlYXRlRWxlbWVudChuLHtzdWJkYXRhTGlzdDp0LmNoaWxkcmVuLHN0eWxlT2JqOmEuc3R5bGVPYmp8fHt9LGl0ZXJhdGlvbjphLml0ZXJhdGlvbisxfSkpOltdKSk6ZS5jcmVhdGVFbGVtZW50KFwibGlcIix7Y2xhc3NOYW1lOlwibGF5ZXJfY29udGFpbmVyXCIsc3R5bGU6bChhLnN0eWxlT2JqLFtcImxheWVyX2NvbnRhaW5lclwiXSksa2V5OnQuaWR9LGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6cihcImNvbnRhaW5lcl9lbnRyeVwiLFwiZW50cnktXCIuY29uY2F0KHQuaWQpLHtcImVudHJ5LWFjdGl2ZVwiOmEuYWN0aXZlSUQmJmEuYWN0aXZlSUQ9PT10LmlkfSksc3R5bGU6aSh7cGFkZGluZ0xlZnQ6XCJcIi5jb25jYXQoYS5pdGVyYXRpb24sXCJyZW1cIil9LGwoYS5zdHlsZU9iaixbXCJjb250YWluZXJfZW50cnlcIixcImVudHJ5LVwiLmNvbmNhdCh0LmlkKSxhLmFjdGl2ZUlEJiZhLmFjdGl2ZUlEPT09dC5pZD9cImVudHJ5LWFjdGl2ZVwiOlwiXCJdKSl9LGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJlbnRyeV90aXRsZVwiLHN0eWxlOmwoYS5zdHlsZU9iaixbXCJlbnRyeV90aXRsZVwiXSl9LHQuc2xvdD90LnNsb3Q6dC50aXRsZSkpKX0pKSl9O2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHQpe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOltcImJ0Yi1yZWFjdC1saXN0XCIsdC5jbGFzc05hbWVdLmpvaW4oXCIgXCIpLHN0eWxlOmwodC5zdHlsZU9iaixbXCJidGItcmVhY3QtbGlzdFwiXSl9LGUuY3JlYXRlRWxlbWVudChzLHtzdWJkYXRhTGlzdDp0LmRhdGFMaXN0LHN0eWxlT2JqOnQuc3R5bGVPYmp8fHt9LGl0ZXJhdGlvbjowfSkpfVxuIiwiaW1wb3J0IHsgcGFyc2UsIGljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxuLy8gR2V0IENTUyBjbGFzcyBsaXN0IGZyb20gYSBwcm9wcyBvYmplY3RcbmZ1bmN0aW9uIGNsYXNzTGlzdChwcm9wcykge1xuICB2YXIgX2NsYXNzZXM7XG5cbiAgdmFyIHNwaW4gPSBwcm9wcy5zcGluLFxuICAgICAgcHVsc2UgPSBwcm9wcy5wdWxzZSxcbiAgICAgIGZpeGVkV2lkdGggPSBwcm9wcy5maXhlZFdpZHRoLFxuICAgICAgaW52ZXJzZSA9IHByb3BzLmludmVyc2UsXG4gICAgICBib3JkZXIgPSBwcm9wcy5ib3JkZXIsXG4gICAgICBsaXN0SXRlbSA9IHByb3BzLmxpc3RJdGVtLFxuICAgICAgZmxpcCA9IHByb3BzLmZsaXAsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIHJvdGF0aW9uID0gcHJvcHMucm90YXRpb24sXG4gICAgICBwdWxsID0gcHJvcHMucHVsbDsgLy8gbWFwIG9mIENTUyBjbGFzcyBuYW1lcyB0byBwcm9wZXJ0aWVzXG5cbiAgdmFyIGNsYXNzZXMgPSAoX2NsYXNzZXMgPSB7XG4gICAgJ2ZhLXNwaW4nOiBzcGluLFxuICAgICdmYS1wdWxzZSc6IHB1bHNlLFxuICAgICdmYS1mdyc6IGZpeGVkV2lkdGgsXG4gICAgJ2ZhLWludmVyc2UnOiBpbnZlcnNlLFxuICAgICdmYS1ib3JkZXInOiBib3JkZXIsXG4gICAgJ2ZhLWxpJzogbGlzdEl0ZW0sXG4gICAgJ2ZhLWZsaXAtaG9yaXpvbnRhbCc6IGZsaXAgPT09ICdob3Jpem9udGFsJyB8fCBmbGlwID09PSAnYm90aCcsXG4gICAgJ2ZhLWZsaXAtdmVydGljYWwnOiBmbGlwID09PSAndmVydGljYWwnIHx8IGZsaXAgPT09ICdib3RoJ1xuICB9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsIFwiZmEtXCIuY29uY2F0KHNpemUpLCB0eXBlb2Ygc2l6ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2l6ZSAhPT0gbnVsbCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgXCJmYS1yb3RhdGUtXCIuY29uY2F0KHJvdGF0aW9uKSwgdHlwZW9mIHJvdGF0aW9uICE9PSAndW5kZWZpbmVkJyAmJiByb3RhdGlvbiAhPT0gbnVsbCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgXCJmYS1wdWxsLVwiLmNvbmNhdChwdWxsKSwgdHlwZW9mIHB1bGwgIT09ICd1bmRlZmluZWQnICYmIHB1bGwgIT09IG51bGwpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsICdmYS1zd2FwLW9wYWNpdHknLCBwcm9wcy5zd2FwT3BhY2l0eSksIF9jbGFzc2VzKTsgLy8gbWFwIG92ZXIgYWxsIHRoZSBrZXlzIGluIHRoZSBjbGFzc2VzIG9iamVjdFxuICAvLyByZXR1cm4gYW4gYXJyYXkgb2YgdGhlIGtleXMgd2hlcmUgdGhlIHZhbHVlIGZvciB0aGUga2V5IGlzIG5vdCBudWxsXG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNsYXNzZXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGNsYXNzZXNba2V5XSA/IGtleSA6IG51bGw7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG59XG5cbi8vIENhbWVsaXplIHRha2VuIGZyb20gaHVtcHNcbi8vIGh1bXBzIGlzIGNvcHlyaWdodCDCqSAyMDEyKyBEb20gQ2hyaXN0aWVcbi8vIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vIFBlcmZvcm1hbnQgd2F5IHRvIGRldGVybWluZSBpZiBvYmplY3QgY29lcmNlcyB0byBhIG51bWJlclxuZnVuY3Rpb24gX2lzTnVtZXJpY2FsKG9iaikge1xuICBvYmogPSBvYmogLSAwOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG5cbiAgcmV0dXJuIG9iaiA9PT0gb2JqO1xufVxuXG5mdW5jdGlvbiBjYW1lbGl6ZShzdHJpbmcpIHtcbiAgaWYgKF9pc051bWVyaWNhbChzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcblxuXG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bXFwtX1xcc10rKC4pPy9nLCBmdW5jdGlvbiAobWF0Y2gsIGNocikge1xuICAgIHJldHVybiBjaHIgPyBjaHIudG9VcHBlckNhc2UoKSA6ICcnO1xuICB9KTsgLy8gRW5zdXJlIDFzdCBjaGFyIGlzIGFsd2F5cyBsb3dlcmNhc2VcblxuICByZXR1cm4gc3RyaW5nLnN1YnN0cigwLCAxKS50b0xvd2VyQ2FzZSgpICsgc3RyaW5nLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZSh2YWwpIHtcbiAgcmV0dXJuIHZhbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbC5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVUb09iamVjdChzdHlsZSkge1xuICByZXR1cm4gc3R5bGUuc3BsaXQoJzsnKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy50cmltKCk7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGFpcikge1xuICAgIHZhciBpID0gcGFpci5pbmRleE9mKCc6Jyk7XG4gICAgdmFyIHByb3AgPSBjYW1lbGl6ZShwYWlyLnNsaWNlKDAsIGkpKTtcbiAgICB2YXIgdmFsdWUgPSBwYWlyLnNsaWNlKGkgKyAxKS50cmltKCk7XG4gICAgcHJvcC5zdGFydHNXaXRoKCd3ZWJraXQnKSA/IGFjY1tjYXBpdGFsaXplKHByb3ApXSA9IHZhbHVlIDogYWNjW3Byb3BdID0gdmFsdWU7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0KGNyZWF0ZUVsZW1lbnQsIGVsZW1lbnQpIHtcbiAgdmFyIGV4dHJhUHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IChlbGVtZW50LmNoaWxkcmVuIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNvbnZlcnQoY3JlYXRlRWxlbWVudCwgY2hpbGQpO1xuICB9KTtcbiAgLyogZXNsaW50LWRpc2FibGUgZG90LW5vdGF0aW9uICovXG5cbiAgdmFyIG1peGlucyA9IE9iamVjdC5rZXlzKGVsZW1lbnQuYXR0cmlidXRlcyB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgIHZhciB2YWwgPSBlbGVtZW50LmF0dHJpYnV0ZXNba2V5XTtcblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgIGFjYy5hdHRyc1snY2xhc3NOYW1lJ10gPSB2YWw7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50LmF0dHJpYnV0ZXNbJ2NsYXNzJ107XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgIGFjYy5hdHRyc1snc3R5bGUnXSA9IHN0eWxlVG9PYmplY3QodmFsKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignYXJpYS0nKSA9PT0gMCB8fCBrZXkuaW5kZXhPZignZGF0YS0nKSA9PT0gMCkge1xuICAgICAgICAgIGFjYy5hdHRyc1trZXkudG9Mb3dlckNhc2UoKV0gPSB2YWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWNjLmF0dHJzW2NhbWVsaXplKGtleSldID0gdmFsO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7XG4gICAgYXR0cnM6IHt9XG4gIH0pO1xuXG4gIHZhciBfZXh0cmFQcm9wcyRzdHlsZSA9IGV4dHJhUHJvcHMuc3R5bGUsXG4gICAgICBleGlzdGluZ1N0eWxlID0gX2V4dHJhUHJvcHMkc3R5bGUgPT09IHZvaWQgMCA/IHt9IDogX2V4dHJhUHJvcHMkc3R5bGUsXG4gICAgICByZW1haW5pbmcgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoZXh0cmFQcm9wcywgW1wic3R5bGVcIl0pO1xuXG4gIG1peGlucy5hdHRyc1snc3R5bGUnXSA9IF9vYmplY3RTcHJlYWQyKHt9LCBtaXhpbnMuYXR0cnNbJ3N0eWxlJ10sIHt9LCBleGlzdGluZ1N0eWxlKTtcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50LmFwcGx5KHZvaWQgMCwgW2VsZW1lbnQudGFnLCBfb2JqZWN0U3ByZWFkMih7fSwgbWl4aW5zLmF0dHJzLCB7fSwgcmVtYWluaW5nKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjaGlsZHJlbikpKTtcbn1cblxudmFyIFBST0RVQ1RJT04gPSBmYWxzZTtcblxudHJ5IHtcbiAgUFJPRFVDVElPTiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG59IGNhdGNoIChlKSB7fVxuXG5mdW5jdGlvbiBsb2cgKCkge1xuICBpZiAoIVBST0RVQ1RJT04gJiYgY29uc29sZSAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBfY29uc29sZTtcblxuICAgIChfY29uc29sZSA9IGNvbnNvbGUpLmVycm9yLmFwcGx5KF9jb25zb2xlLCBhcmd1bWVudHMpO1xuICB9XG59XG5cbi8vIE5vcm1hbGl6ZSBpY29uIGFyZ3VtZW50c1xuZnVuY3Rpb24gbm9ybWFsaXplSWNvbkFyZ3MoaWNvbikge1xuICAvLyBpZiB0aGUgaWNvbiBpcyBudWxsLCB0aGVyZSdzIG5vdGhpbmcgdG8gZG9cbiAgaWYgKGljb24gPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBpZiB0aGUgaWNvbiBpcyBhbiBvYmplY3QgYW5kIGhhcyBhIHByZWZpeCBhbmQgYW4gaWNvbiBuYW1lLCByZXR1cm4gaXRcblxuXG4gIGlmIChfdHlwZW9mKGljb24pID09PSAnb2JqZWN0JyAmJiBpY29uLnByZWZpeCAmJiBpY29uLmljb25OYW1lKSB7XG4gICAgcmV0dXJuIGljb247XG4gIH0gLy8gaWYgaXQncyBhbiBhcnJheSB3aXRoIGxlbmd0aCBvZiB0d29cblxuXG4gIGlmIChBcnJheS5pc0FycmF5KGljb24pICYmIGljb24ubGVuZ3RoID09PSAyKSB7XG4gICAgLy8gdXNlIHRoZSBmaXJzdCBpdGVtIGFzIHByZWZpeCwgc2Vjb25kIGFzIGljb24gbmFtZVxuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXg6IGljb25bMF0sXG4gICAgICBpY29uTmFtZTogaWNvblsxXVxuICAgIH07XG4gIH0gLy8gaWYgaXQncyBhIHN0cmluZywgdXNlIGl0IGFzIHRoZSBpY29uIG5hbWVcblxuXG4gIGlmICh0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4OiAnZmFzJyxcbiAgICAgIGljb25OYW1lOiBpY29uXG4gICAgfTtcbiAgfVxufVxuXG4vLyBjcmVhdGVzIGFuIG9iamVjdCB3aXRoIGEga2V5IG9mIGtleVxuLy8gYW5kIGEgdmFsdWUgb2YgdmFsdWVcbi8vIGlmIGNlcnRhaW4gY29uZGl0aW9ucyBhcmUgbWV0XG5mdW5jdGlvbiBvYmplY3RXaXRoS2V5KGtleSwgdmFsdWUpIHtcbiAgLy8gaWYgdGhlIHZhbHVlIGlzIGEgbm9uLWVtcHR5IGFycmF5XG4gIC8vIG9yIGl0J3Mgbm90IGFuIGFycmF5IGJ1dCBpdCBpcyB0cnV0aHlcbiAgLy8gdGhlbiBjcmVhdGUgdGhlIG9iamVjdCB3aXRoIHRoZSBrZXkgYW5kIHRoZSB2YWx1ZVxuICAvLyBpZiBub3QsIHJldHVybiBhbiBlbXB0eSBhcnJheVxuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUgPyBfZGVmaW5lUHJvcGVydHkoe30sIGtleSwgdmFsdWUpIDoge307XG59XG5cbmZ1bmN0aW9uIEZvbnRBd2Vzb21lSWNvbihfcmVmKSB7XG4gIHZhciBmb3J3YXJkZWRSZWYgPSBfcmVmLmZvcndhcmRlZFJlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImZvcndhcmRlZFJlZlwiXSk7XG5cbiAgdmFyIGljb25BcmdzID0gcHJvcHMuaWNvbixcbiAgICAgIG1hc2tBcmdzID0gcHJvcHMubWFzayxcbiAgICAgIHN5bWJvbCA9IHByb3BzLnN5bWJvbCxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHRpdGxlID0gcHJvcHMudGl0bGU7XG4gIHZhciBpY29uTG9va3VwID0gbm9ybWFsaXplSWNvbkFyZ3MoaWNvbkFyZ3MpO1xuICB2YXIgY2xhc3NlcyA9IG9iamVjdFdpdGhLZXkoJ2NsYXNzZXMnLCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzTGlzdChwcm9wcykpLCBfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NOYW1lLnNwbGl0KCcgJykpKSk7XG4gIHZhciB0cmFuc2Zvcm0gPSBvYmplY3RXaXRoS2V5KCd0cmFuc2Zvcm0nLCB0eXBlb2YgcHJvcHMudHJhbnNmb3JtID09PSAnc3RyaW5nJyA/IHBhcnNlLnRyYW5zZm9ybShwcm9wcy50cmFuc2Zvcm0pIDogcHJvcHMudHJhbnNmb3JtKTtcbiAgdmFyIG1hc2sgPSBvYmplY3RXaXRoS2V5KCdtYXNrJywgbm9ybWFsaXplSWNvbkFyZ3MobWFza0FyZ3MpKTtcbiAgdmFyIHJlbmRlcmVkSWNvbiA9IGljb24oaWNvbkxvb2t1cCwgX29iamVjdFNwcmVhZDIoe30sIGNsYXNzZXMsIHt9LCB0cmFuc2Zvcm0sIHt9LCBtYXNrLCB7XG4gICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgdGl0bGU6IHRpdGxlXG4gIH0pKTtcblxuICBpZiAoIXJlbmRlcmVkSWNvbikge1xuICAgIGxvZygnQ291bGQgbm90IGZpbmQgaWNvbicsIGljb25Mb29rdXApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGFic3RyYWN0ID0gcmVuZGVyZWRJY29uLmFic3RyYWN0O1xuICB2YXIgZXh0cmFQcm9wcyA9IHtcbiAgICByZWY6IGZvcndhcmRlZFJlZlxuICB9O1xuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIGlmICghRm9udEF3ZXNvbWVJY29uLmRlZmF1bHRQcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBleHRyYVByb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjb252ZXJ0Q3VycnkoYWJzdHJhY3RbMF0sIGV4dHJhUHJvcHMpO1xufVxuRm9udEF3ZXNvbWVJY29uLmRpc3BsYXlOYW1lID0gJ0ZvbnRBd2Vzb21lSWNvbic7XG5Gb250QXdlc29tZUljb24ucHJvcFR5cGVzID0ge1xuICBib3JkZXI6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1hc2s6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBmaXhlZFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW52ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZsaXA6IFByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnYm90aCddKSxcbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGxpc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgcHVsbDogUHJvcFR5cGVzLm9uZU9mKFsncmlnaHQnLCAnbGVmdCddKSxcbiAgcHVsc2U6IFByb3BUeXBlcy5ib29sLFxuICByb3RhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFs5MCwgMTgwLCAyNzBdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnbGcnLCAneHMnLCAnc20nLCAnMXgnLCAnMngnLCAnM3gnLCAnNHgnLCAnNXgnLCAnNngnLCAnN3gnLCAnOHgnLCAnOXgnLCAnMTB4J10pLFxuICBzcGluOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3ltYm9sOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhbnNmb3JtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIHN3YXBPcGFjaXR5OiBQcm9wVHlwZXMuYm9vbFxufTtcbkZvbnRBd2Vzb21lSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGJvcmRlcjogZmFsc2UsXG4gIGNsYXNzTmFtZTogJycsXG4gIG1hc2s6IG51bGwsXG4gIGZpeGVkV2lkdGg6IGZhbHNlLFxuICBpbnZlcnNlOiBmYWxzZSxcbiAgZmxpcDogbnVsbCxcbiAgaWNvbjogbnVsbCxcbiAgbGlzdEl0ZW06IGZhbHNlLFxuICBwdWxsOiBudWxsLFxuICBwdWxzZTogZmFsc2UsXG4gIHJvdGF0aW9uOiBudWxsLFxuICBzaXplOiBudWxsLFxuICBzcGluOiBmYWxzZSxcbiAgc3ltYm9sOiBmYWxzZSxcbiAgdGl0bGU6ICcnLFxuICB0cmFuc2Zvcm06IG51bGwsXG4gIHN3YXBPcGFjaXR5OiBmYWxzZVxufTtcbnZhciBjb252ZXJ0Q3VycnkgPSBjb252ZXJ0LmJpbmQobnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudCk7XG5cbmV4cG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9O1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiY29uc3QgbWVudUxpc3QgPSBbXG4gIHsgXG4gICAgaWQgICAgOiAnQUJPVVQnLFxuICAgIHRpdGxlIDogJ0Fib3V0JyxcbiAgfSxcbiAge1xuICAgIGlkICAgICAgIDogJ1BBQ0tBR0VTJyxcbiAgICB0aXRsZSAgICA6ICdQYWNrYWdlcycsXG4gICAgY2hpbGRyZW4gOiBbXG4gICAgICB7XG4gICAgICAgIGlkICAgICAgIDogJ1BBQ0tBR0VTX0xJU1QnLFxuICAgICAgICB0aXRsZSAgICA6ICdMaXN0JyxcbiAgICAgICAgY2hpbGRyZW4gOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQgICAgOiAnUEFDS0FHRVNfTElTVF9CQVNJQycsXG4gICAgICAgICAgICB0aXRsZSA6ICdCYXNpYydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZCAgICAgICA6ICdBUFBMSUNBVElPTlMnLFxuICAgIHRpdGxlICAgIDogJ0FwcGxpY2F0aW9uJyxcbiAgICBjaGlsZHJlbiA6IFtcbiAgICAgIHtcbiAgICAgICAgaWQgICAgOiAnQVBQTElDQVRJT05fTEFOR1VBR0VTJyxcbiAgICAgICAgdGl0bGUgOiAnTGFuZ3VhZ2VzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQgICAgOiAnQVBQTElDQVRJT05fVkFMSURBVE9SJyxcbiAgICAgICAgdGl0bGUgOiAnVmFsaWRhdG9yJ1xuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudUxpc3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJUQkxpc3QgZnJvbSAnQGJsYWNrdG9vbGJveC9yZWFjdC1saXN0JztcblxuaW1wb3J0IE1FTlUgZnJvbSAnQHNyYy9hc3NldHMvZGVmaW5pdGlvbnMvbWVudUxpc3QuanMnO1xuXG5jb25zdCBBc2lkZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtbXCJidGItbGF5b3V0LWFzaWRlXCIsIHByb3BzLmNsYXNzTmFtZV0uam9pbignICcpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRiLXZ1ZS1saXN0IGFzaWRlX21lbnVcIj5cbiAgICAgICAgPEJUQkxpc3QgZGF0YUxpc3Q9e01FTlV9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJfZW50cnlcIj5BYm91dDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcl9lbnRyeVwiPkhvbWUgdjE8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNpZGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiBhcyBGQUkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBBc2lkZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtbXCJidGItbGF5b3V0LWZvb3RcIiwgcHJvcHMuY2xhc3NOYW1lXS5qb2luKCcgJyl9ID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdF9uYXZiYXJcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX2xpbmtCdG4gbGlua0J0bi1wYXlwYWxcIiBocmVmPVwiaHR0cHM6Ly93d3cucGF5cGFsLm1lL3Zhbm5vZWwwNjI4XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPEZBSSBpY29uPXtbJ2ZhYicsICdwYXlwYWwnXX0gZml4ZWRXaWR0aCAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9saW5rQnRuIGxpbmtCdG4tZ2l0aHViXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9CbGFja1Rvb2xCb3hMYWJvcmF0b3J5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPEZBSSBpY29uPXtbJ2ZhYicsICdnaXRodWInXX0gZml4ZWRXaWR0aCAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9saW5rQnRuIGxpbmtCdG4tbnBtXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9vcmcvYmxhY2t0b29sYm94XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPEZBSSBpY29uPXtbJ2ZhYicsICducG0nXX0gZml4ZWRXaWR0aCAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9saW5rQnRuIGxpbmtCdG4tbGlua2VkaW5cIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvYmxhY2stdG9vbC1ib3gtbGFib3JhdG9yeS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICA8RkFJIGljb249e1snZmFiJywgJ2xpbmtlZGluJ119IGZpeGVkV2lkdGggLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfbGlua0J0biBsaW5rQnRuLXdvcmRwcmVzc1wiIGhyZWY9XCJodHRwczovL3Zhbm5vZWwwNjI4LndvcmRwcmVzcy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPEZBSSBpY29uPXtbJ2ZhYicsICd3b3JkcHJlc3MnXX0gZml4ZWRXaWR0aCAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9saW5rQnRuIGxpbmtCdG4tZW1haWxcIiBocmVmPVwibWFpbHRvOi8vdmFubm9lbDA2MjhAZ21haWwuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPEZBSSBpY29uPXtbJ2ZhcicsICdlbnZlbG9wZSddfSBmaXhlZFdpZHRoIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290X2NvcHlyaWdodFwiPlxuICAgICAgICBDb3B5cmlnaHQgwqkgQmxhY2sgVG9vbCBCb3ggTGFib3JhdG9yeS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNpZGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiBhcyBGQUkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBIZWFkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e1tcImJ0Yi1sYXlvdXQtaGVhZFwiLCBwcm9wcy5jbGFzc05hbWVdLmpvaW4oJyAnKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRfbG9nb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29fY29udGVudFwiPlxuICAgICAgICAgIEJSXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRfdGl0bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZV9tYWluIGhpZGRlbi1kb3duLW1kXCI+XG4gICAgICAgICAgQmxhY2sgVG9vbCBCb3ggTGFib3JhdG9yeVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZV9tYWluIGhpZGRlbi11cC1tZFwiPlxuICAgICAgICAgIEJUQiBMYWIuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlX3N1YlwiPlxuICAgICAgICAgIEZvciBSZWFjdFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkX2l0ZW1cIj5cbiAgICAgICAgPEZBSSBjbGFzc05hbWU9XCJpdGVtX2J1dHRvblwiIGljb249e1snZmFzJywgJ2hvbWUnXX0gZml4ZWRXaWR0aCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRfaXRlbVwiPlxuICAgICAgICA8RkFJIGNsYXNzTmFtZT1cIml0ZW1fYnV0dG9uXCIgaWNvbj17WydmYXMnLCAnZ2xvYmUnXX0gZml4ZWRXaWR0aCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRfaXRlbVwiPlxuICAgICAgICA8RkFJIGNsYXNzTmFtZT1cIml0ZW1fYnV0dG9uXCIgaWNvbj17WydmYXMnLCAnYmFycyddfSBmaXhlZFdpZHRoIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEhlYWQgZnJvbSAnLi9IZWFkLmpzeCc7XG5pbXBvcnQgRm9vdCBmcm9tICcuL0Zvb3QuanN4JztcbmltcG9ydCBBc2lkZSBmcm9tICcuL0FzaWRlLmpzeCc7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRiLWxheW91dFwiPlxuICAgICAgPEhlYWQgY2xhc3NOYW1lPVwibGF5b3V0X2hlYWRcIi8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dF9jb250ZW50XCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3QgY2xhc3NOYW1lPVwibGF5b3V0X2Zvb3RcIi8+XG4gICAgICA8QXNpZGUgY2xhc3NOYW1lPVwibGF5b3V0X2FzaWRlXCIvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gdG9nZ2xlUGFnZU1lbnUoKSB7XG4gIHRoaXMuZW52LmlzSGlkZGVuID0gIXRoaXMuZW52LmlzSGlkZGVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IFJPVVRFIGZyb20gJ0BzcmMvYXNzZXRzL2RlZmluaXRpb25zL3JvdXRlTWFwLmpzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnQHNyYy9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanN4JztcblxuY29uc3QgSG9tZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICA8UmVkaXJlY3QgZXhhY3QgZnJvbT17Uk9VVEUuSE9NRX0gdG89e1JPVVRFLkFCT1VUfS8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9e1JPVVRFLkFCT1VUfSBjb21wb25lbnQ9e1JlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCdAc3JjL3JvdXRlcy9BYm91dENvbnRhaW5lci5qc3gnKSl9Lz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L1N1c3BlbnNlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZUNvbnRhaW5lcjsiXSwic291cmNlUm9vdCI6IiJ9