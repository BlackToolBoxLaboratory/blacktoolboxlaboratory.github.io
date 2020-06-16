(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ 37:
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var d=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,f(e,t))})),n},f=function(e,t){var n={};return"object"===c(e)&&Object.keys(e).find((function(a){if(a===t)return n=Object.assign({},e[a]),!0})),n},b=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),p=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),v=function c(i){var o=[];i.subdataList.map((function(e){!0===e.defaultCollapsed&&o.push(e.id)}));var y,f,v,m,h,O={},j=s(s({},Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(b)),{},{state_collapsed:(y=o,f=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(y),v=u(f,2),m=v[0],h=v[1],{value:m,has:function(e){return m.indexOf(e)>=0},onChange:function(e,t){var n;switch(t){case"hide":m.indexOf(e)<0&&(n=m.concat(e),h(n));break;case"show":n=m.filter((function(t){return t!==e})),h(n)}}})}),g=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(p);function _(e,t){var n=O["".concat(e,"_sublayer")].current;switch(t){case"hide":n.style.maxHeight="0px",i.updateLayerSize&&i.updateLayerSize(-1*Math.ceil(n.scrollHeight));break;case"show":n.style.maxHeight="".concat(Math.ceil(n.scrollHeight),"px"),i.updateLayerSize&&i.updateLayerSize(Math.ceil(n.scrollHeight))}}return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){var e;i.subdataList.map((function(t){t.children&&(e=j.collapseEnable&&!0===t.defaultCollapsed?"hide":"show",g.toggleCollapsed(t,e),_(t.id,e))}))}),[]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"btb-react-list-layer layer-".concat(i.iteration),style:d(j.styleObj,["btb-react-list-layer","layer-".concat(i.iteration)])},i.subdataList.map((function(t){return void 0!==t.children?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"layer_container",style:d(j.styleObj,["layer_container"]),key:t.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("container_entry","entry-".concat(t.id),{"entry-collapsable":j.collapseEnable},{"entry-active":j.state_activeID.value===t.id}),style:s({paddingLeft:"".concat(i.iteration,"rem")},d(j.styleObj,["container_entry","entry-".concat(t.id),j.collapseEnable?"entry-collapsable":"",j.state_activeID.value===t.id?"entry-active":""])),onClick:function(){!function(e,t){if(!j.collapseEnable)return g.clickEntry(e),!1;var n=t||(j.state_collapsed.has(e.id)?"show":"hide");g.toggleCollapsed(e,n),j.state_collapsed.onChange(e.id,n),_(e.id,n)}(t)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"entry_title",style:d(j.styleObj,["entry_title"])},j.slotObj[t.id]?"function"==typeof j.slotObj[t.id]?j.slotObj[t.id](t):j.slotObj[t.id]:t.title),j.collapseEnable?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("entry_collapseBtn","collapseBtn-default",{"collapseBtn-on":j.state_collapsed.has(t.id)}),style:d(j.styleObj,["entry_collapseBtn","collapseBtn-default",j.state_collapsed.has(t.id)?"collapseBtn-on":""])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"collapseBtn_arrow",style:d(j.styleObj,["collapseBtn_arrow"])})):[]),t.children.length>0?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container_sublayer",id:"".concat(t.id,"_sublayer"),style:d(j.styleObj,["container_sublayer"]),ref:(n="".concat(t.id,"_sublayer"),O[n]=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(),O[n])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(c,{subdataList:t.children,iteration:i.iteration+1,updateLayerSize:function(e){return function(e,t){var n=O["".concat(t,"_sublayer")].current;n.style.maxHeight="".concat(Math.ceil(n.scrollHeight)+e,"px"),i.updateLayerSize&&i.updateLayerSize(e)}(e,t.id)}})):[]):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"layer_container",style:d(j.styleObj,["layer_container"]),key:t.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("container_entry","entry-".concat(t.id),{"entry-active":j.state_activeID.value===t.id}),style:s({paddingLeft:"".concat(i.iteration,"rem")},d(j.styleObj,["container_entry","entry-".concat(t.id),j.state_activeID.value===t.id?"entry-active":""])),onClick:function(){g.clickEntry(t)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"entry_title",style:d(j.styleObj,["entry_title"])},j.slotObj[t.id]?"function"==typeof j.slotObj[t.id]?j.slotObj[t.id](t):j.slotObj[t.id]:t.title)));var n})))};/* harmony default export */ __webpack_exports__["a"] = (function(t){var r,c,i,o,s,y,f,m={state_activeID:(o=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(i),s=u(o,2),y=s[0],f=s[1],{value:y,onChange:function(e){f(e)}}),collapseEnable:t.collapseEnable||!1,styleObj:(r=t.styleObj||{},c={},Object.keys(r).forEach((function(e){c[e]={},Object.keys(r[e]).forEach((function(t){var n=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));c[e][n]=r[e][t]}))})),c),slotObj:t.slotObj||{}},h={clickEntry:function(e){m.state_activeID.onChange(e.id),t.onEntryClick&&t.onEntryClick(e)},toggleCollapsed:function(e){t.onToggle&&t.onToggle(e)}};return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){m.state_activeID.onChange(t.activeID||t.defaultActiveID||"")}),[]),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){void 0!==t.activeID&&m.state_activeID.value!==t.activeID&&m.state_activeID.onChange(t.activeID)})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b.Provider,{value:m},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(p.Provider,{value:h},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("btb-react-list",t.className),style:d(m.styleObj,["btb-react-list"])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(v,{subdataList:t.dataList||[],iteration:0}))))});


/***/ }),

/***/ 53:
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
var routeMap = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(37);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

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
    fixedWidth: true,
    onClick: props.toggleMenu
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
// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-list/esm/index.js
var esm = __webpack_require__(39);

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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Aside_Aside = function Aside(props) {
  var env = {
    state_activeID: useActiveState()
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
};

function useActiveState(defaultSate) {
  var _useState = Object(react["useState"])(defaultSate),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setState = _useState2[1];

  return {
    value: value,
    onChange: function onChange(data) {
      setState(data);
    }
  };
}

/* harmony default export */ var layout_Aside = (Object(react_router["o" /* withRouter */])(Aside_Aside));
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
// CONCATENATED MODULE: ./src/components/layout/Layout.jsx
function Layout_slicedToArray(arr, i) { return Layout_arrayWithHoles(arr) || Layout_iterableToArrayLimit(arr, i) || Layout_unsupportedIterableToArray(arr, i) || Layout_nonIterableRest(); }

function Layout_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Layout_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Layout_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Layout_arrayLikeToArray(o, minLen); }

function Layout_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Layout_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Layout_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Layout_Layout = function Layout(props) {
  var env = {
    state_hiddenMenu: useMenuState(window.innerWidth < definitions_const.GRID_MD)
  };
  Object(react["useEffect"])(function () {
    window.scrollTo(0, 0);
  }, [props.history.location.pathname]);

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
};

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

/* harmony default export */ var layout_Layout = (Object(react_router["o" /* withRouter */])(Layout_Layout));
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
      return __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 54));
    })
  }), /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    path: routeMap["a" /* default */].PACKAGES,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, 51));
    })
  }), /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    path: routeMap["a" /* default */].APPLICATIONS,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, 52));
    })
  }))));
};

/* harmony default export */ var routes_HomeContainer = __webpack_exports__["default"] = (HomeContainer_HomeContainer);

/***/ })

}]);