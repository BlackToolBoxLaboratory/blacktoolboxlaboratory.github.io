(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIcon", function() { return FontAwesomeIcon; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
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

/***/ 49:
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ compose; });

// UNUSED EXPORTS: mapProps, withProps, withPropsOnChange, withHandlers, defaultProps, renameProp, renameProps, flattenProp, withState, withStateHandlers, withReducer, branch, renderComponent, renderNothing, shouldUpdate, pure, onlyUpdateForKeys, onlyUpdateForPropTypes, withContext, getContext, lifecycle, toClass, toRenderProps, fromRenderProps, setStatic, setPropTypes, setDisplayName, getDisplayName, wrapDisplayName, shallowEqual, isClassComponent, createSink, componentFromProp, nest, hoistStatics, componentFromStream, componentFromStreamWithConfig, mapPropsStream, mapPropsStreamWithConfig, createEventHandler, createEventHandlerWithConfig, setObservableConfig

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/fbjs/lib/shallowEqual.js
var shallowEqual = __webpack_require__(60);
var shallowEqual_default = /*#__PURE__*/__webpack_require__.n(shallowEqual);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}



// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(10);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/change-emitter/lib/index.js
var lib = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/recompose/dist/Recompose.esm.js










var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */

    return BaseComponent;
  };
};

var setDisplayName = function setDisplayName(displayName) {
  return setStatic('displayName', displayName);
};

var getDisplayName = function getDisplayName(Component$$1) {
  if (typeof Component$$1 === 'string') {
    return Component$$1;
  }

  if (!Component$$1) {
    return undefined;
  }

  return Component$$1.displayName || Component$$1.name || 'Component';
};

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + "(" + getDisplayName(BaseComponent) + ")";
};

var Recompose_esm_mapProps = function mapProps(propsMapper) {
  return function (BaseComponent) {
    var factory = Object(react["createFactory"])(BaseComponent);

    var MapProps = function MapProps(props) {
      return factory(propsMapper(props));
    };

    if (false) {}

    return MapProps;
  };
};

var Recompose_esm_withProps = function withProps(input) {
  var hoc = Recompose_esm_mapProps(function (props) {
    return Object(esm_extends["a" /* default */])({}, props, typeof input === 'function' ? input(props) : input);
  });

  if (false) {}

  return hoc;
};

var pick = function pick(obj, keys) {
  var result = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }

  return result;
};

var Recompose_esm_withPropsOnChange = function withPropsOnChange(shouldMapOrKeys, propsMapper) {
  return function (BaseComponent) {
    var factory = Object(react["createFactory"])(BaseComponent);
    var shouldMap = typeof shouldMapOrKeys === 'function' ? shouldMapOrKeys : function (props, nextProps) {
      return !shallowEqual_default()(pick(props, shouldMapOrKeys), pick(nextProps, shouldMapOrKeys));
    };

    var WithPropsOnChange =
    /*#__PURE__*/
    function (_Component) {
      Object(inheritsLoose["a" /* default */])(WithPropsOnChange, _Component);

      function WithPropsOnChange() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;
        _this.state = {
          computedProps: propsMapper(_this.props),
          prevProps: _this.props
        };
        return _this;
      }

      WithPropsOnChange.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        if (shouldMap(prevState.prevProps, nextProps)) {
          return {
            computedProps: propsMapper(nextProps),
            prevProps: nextProps
          };
        }

        return {
          prevProps: nextProps
        };
      };

      var _proto = WithPropsOnChange.prototype;

      _proto.render = function render() {
        return factory(Object(esm_extends["a" /* default */])({}, this.props, this.state.computedProps));
      };

      return WithPropsOnChange;
    }(react["Component"]);

    polyfill(WithPropsOnChange);

    if (false) {}

    return WithPropsOnChange;
  };
};

var mapValues = function mapValues(obj, func) {
  var result = {};
  /* eslint-disable no-restricted-syntax */

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  /* eslint-enable no-restricted-syntax */


  return result;
};

var Recompose_esm_withHandlers = function withHandlers(handlers) {
  return function (BaseComponent) {
    var factory = Object(react["createFactory"])(BaseComponent);

    var WithHandlers =
    /*#__PURE__*/
    function (_Component) {
      Object(inheritsLoose["a" /* default */])(WithHandlers, _Component);

      function WithHandlers() {
        var _this;

        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(_args)) || this;
        _this.handlers = mapValues(typeof handlers === 'function' ? handlers(_this.props) : handlers, function (createHandler) {
          return function () {
            var handler = createHandler(_this.props);

            if (false) {}

            return handler.apply(void 0, arguments);
          };
        });
        return _this;
      }

      var _proto = WithHandlers.prototype;

      _proto.render = function render() {
        return factory(Object(esm_extends["a" /* default */])({}, this.props, this.handlers));
      };

      return WithHandlers;
    }(react["Component"]);

    if (false) {}

    return WithHandlers;
  };
};

var Recompose_esm_defaultProps = function defaultProps(props) {
  return function (BaseComponent) {
    var factory = Object(react["createFactory"])(BaseComponent);

    var DefaultProps = function DefaultProps(ownerProps) {
      return factory(ownerProps);
    };

    DefaultProps.defaultProps = props;

    if (false) {}

    return DefaultProps;
  };
};

var Recompose_esm_omit = function omit(obj, keys) {
  var rest = Object(esm_extends["a" /* default */])({}, obj);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (rest.hasOwnProperty(key)) {
      delete rest[key];
    }
  }

  return rest;
};

var Recompose_esm_renameProp = function renameProp(oldName, newName) {
  var hoc = Recompose_esm_mapProps(function (props) {
    var _extends2;

    return Object(esm_extends["a" /* default */])({}, Recompose_esm_omit(props, [oldName]), (_extends2 = {}, _extends2[newName] = props[oldName], _extends2));
  });

  if (false) {}

  return hoc;
};

var Recompose_esm_keys = Object.keys;

var mapKeys = function mapKeys(obj, func) {
  return Recompose_esm_keys(obj).reduce(function (result, key) {
    var val = obj[key];
    /* eslint-disable no-param-reassign */

    result[func(val, key)] = val;
    /* eslint-enable no-param-reassign */

    return result;
  }, {});
};

var Recompose_esm_renameProps = function renameProps(nameMap) {
  var hoc = Recompose_esm_mapProps(function (props) {
    return Object(esm_extends["a" /* default */])({}, Recompose_esm_omit(props, Recompose_esm_keys(nameMap)), mapKeys(pick(props, Recompose_esm_keys(nameMap)), function (_, oldName) {
      return nameMap[oldName];
    }));
  });

  if (false) {}

  return hoc;
};

var Recompose_esm_flattenProp = function flattenProp(propName) {
  return function (BaseComponent) {
    var factory = Object(react["createFactory"])(BaseComponent);

    var FlattenProp = function FlattenProp(props) {
      return factory(Object(esm_extends["a" /* default */])({}, props, props[propName]));
    };

    if (false) {}

    return FlattenProp;
  };
};

var Recompose_esm_withState = function withState(stateName, stateUpdaterName, initialState) {
  return function (BaseComponent) {
    var factory = Object(react["createFactory"])(BaseComponent);

    var WithState =
    /*#__PURE__*/
    function (_Component) {
      Object(inheritsLoose["a" /* default */])(WithState, _Component);

      function WithState() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;
        _this.state = {
          stateValue: typeof initialState === 'function' ? initialState(_this.props) : initialState
        };

        _this.updateStateValue = function (updateFn, callback) {
          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: typeof updateFn === 'function' ? updateFn(stateValue) : updateFn
            };
          }, callback);
        };

        return _this;
      }

      var _proto = WithState.prototype;

      _proto.render = function render() {
        var _extends2;

        return factory(Object(esm_extends["a" /* default */])({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[stateUpdaterName] = this.updateStateValue, _extends2)));
      };

      return WithState;
    }(react["Component"]);

    if (false) {}

    return WithState;
  };
};

var Recompose_esm_withStateHandlers = function withStateHandlers(initialState, stateUpdaters) {
  return function (BaseComponent) {
    var factory = Object(react["createFactory"])(BaseComponent);

    var WithStateHandlers =
    /*#__PURE__*/
    function (_Component) {
      Object(inheritsLoose["a" /* default */])(WithStateHandlers, _Component);

      function WithStateHandlers() {
        var _this;

        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(_args)) || this;
        _this.state = typeof initialState === 'function' ? initialState(_this.props) : initialState;
        _this.stateUpdaters = mapValues(stateUpdaters, function (handler) {
          return function (mayBeEvent) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            // Having that functional form of setState can be called async
            // we need to persist SyntheticEvent
            if (mayBeEvent && typeof mayBeEvent.persist === 'function') {
              mayBeEvent.persist();
            }

            _this.setState(function (state, props) {
              return handler(state, props).apply(void 0, [mayBeEvent].concat(args));
            });
          };
        });
        return _this;
      }

      var _proto = WithStateHandlers.prototype;

      _proto.render = function render() {
        return factory(Object(esm_extends["a" /* default */])({}, this.props, this.state, this.stateUpdaters));
      };

      return WithStateHandlers;
    }(react["Component"]);

    if (false) {}

    return WithStateHandlers;
  };
};

var noop = function noop() {};

var Recompose_esm_withReducer = function withReducer(stateName, dispatchName, reducer, initialState) {
  return function (BaseComponent) {
    var factory = Object(react["createFactory"])(BaseComponent);

    var WithReducer =
    /*#__PURE__*/
    function (_Component) {
      Object(inheritsLoose["a" /* default */])(WithReducer, _Component);

      function WithReducer() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;
        _this.state = {
          stateValue: _this.initializeStateValue()
        };

        _this.dispatch = function (action, callback) {
          if (callback === void 0) {
            callback = noop;
          }

          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: reducer(stateValue, action)
            };
          }, function () {
            return callback(_this.state.stateValue);
          });
        };

        return _this;
      }

      var _proto = WithReducer.prototype;

      _proto.initializeStateValue = function initializeStateValue() {
        if (initialState !== undefined) {
          return typeof initialState === 'function' ? initialState(this.props) : initialState;
        }

        return reducer(undefined, {
          type: '@@recompose/INIT'
        });
      };

      _proto.render = function render() {
        var _extends2;

        return factory(Object(esm_extends["a" /* default */])({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[dispatchName] = this.dispatch, _extends2)));
      };

      return WithReducer;
    }(react["Component"]);

    if (false) {}

    return WithReducer;
  };
};

var identity = function identity(Component$$1) {
  return Component$$1;
};

var Recompose_esm_branch = function branch(test, left, right) {
  if (right === void 0) {
    right = identity;
  }

  return function (BaseComponent) {
    var leftFactory;
    var rightFactory;

    var Branch = function Branch(props) {
      if (test(props)) {
        leftFactory = leftFactory || Object(react["createFactory"])(left(BaseComponent));
        return leftFactory(props);
      }

      rightFactory = rightFactory || Object(react["createFactory"])(right(BaseComponent));
      return rightFactory(props);
    };

    if (false) {}

    return Branch;
  };
};

var Recompose_esm_renderComponent = function renderComponent(Component$$1) {
  return function (_) {
    var factory = Object(react["createFactory"])(Component$$1);

    var RenderComponent = function RenderComponent(props) {
      return factory(props);
    };

    if (false) {}

    return RenderComponent;
  };
};

var Recompose_esm_Nothing =
/*#__PURE__*/
function (_Component) {
  Object(inheritsLoose["a" /* default */])(Nothing, _Component);

  function Nothing() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Nothing.prototype;

  _proto.render = function render() {
    return null;
  };

  return Nothing;
}(react["Component"]);

var renderNothing = function renderNothing(_) {
  return Recompose_esm_Nothing;
};

var Recompose_esm_shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = Object(react["createFactory"])(BaseComponent);

    var ShouldUpdate =
    /*#__PURE__*/
    function (_Component) {
      Object(inheritsLoose["a" /* default */])(ShouldUpdate, _Component);

      function ShouldUpdate() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = ShouldUpdate.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      _proto.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(react["Component"]);

    if (false) {}

    return ShouldUpdate;
  };
};

var Recompose_esm_pure = function pure(BaseComponent) {
  var hoc = Recompose_esm_shouldUpdate(function (props, nextProps) {
    return !shallowEqual_default()(props, nextProps);
  });

  if (false) {}

  return hoc(BaseComponent);
};

var Recompose_esm_onlyUpdateForKeys = function onlyUpdateForKeys(propKeys) {
  var hoc = Recompose_esm_shouldUpdate(function (props, nextProps) {
    return !shallowEqual_default()(pick(nextProps, propKeys), pick(props, propKeys));
  });

  if (false) {}

  return hoc;
};

var onlyUpdateForPropTypes = function onlyUpdateForPropTypes(BaseComponent) {
  var propTypes = BaseComponent.propTypes;

  if (false) {}

  var propKeys = Object.keys(propTypes || {});
  var OnlyUpdateForPropTypes = Recompose_esm_onlyUpdateForKeys(propKeys)(BaseComponent);

  if (false) {}

  return OnlyUpdateForPropTypes;
};

var Recompose_esm_withContext = function withContext(childContextTypes, getChildContext) {
  return function (BaseComponent) {
    var factory = Object(react["createFactory"])(BaseComponent);

    var WithContext =
    /*#__PURE__*/
    function (_Component) {
      Object(inheritsLoose["a" /* default */])(WithContext, _Component);

      function WithContext() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;

        _this.getChildContext = function () {
          return getChildContext(_this.props);
        };

        return _this;
      }

      var _proto = WithContext.prototype;

      _proto.render = function render() {
        return factory(this.props);
      };

      return WithContext;
    }(react["Component"]);

    WithContext.childContextTypes = childContextTypes;

    if (false) {}

    return WithContext;
  };
};

var Recompose_esm_getContext = function getContext(contextTypes) {
  return function (BaseComponent) {
    var factory = Object(react["createFactory"])(BaseComponent);

    var GetContext = function GetContext(ownerProps, context) {
      return factory(Object(esm_extends["a" /* default */])({}, ownerProps, context));
    };

    GetContext.contextTypes = contextTypes;

    if (false) {}

    return GetContext;
  };
};

var Recompose_esm_lifecycle = function lifecycle(spec) {
  return function (BaseComponent) {
    var factory = Object(react["createFactory"])(BaseComponent);

    if (false) {}

    var Lifecycle =
    /*#__PURE__*/
    function (_Component) {
      Object(inheritsLoose["a" /* default */])(Lifecycle, _Component);

      function Lifecycle() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = Lifecycle.prototype;

      _proto.render = function render() {
        return factory(Object(esm_extends["a" /* default */])({}, this.props, this.state));
      };

      return Lifecycle;
    }(react["Component"]);

    Object.keys(spec).forEach(function (hook) {
      return Lifecycle.prototype[hook] = spec[hook];
    });

    if (false) {}

    return Lifecycle;
  };
};

var isClassComponent = function isClassComponent(Component$$1) {
  return Boolean(Component$$1 && Component$$1.prototype && typeof Component$$1.prototype.render === 'function');
};

var Recompose_esm_toClass = function toClass(baseComponent) {
  var _class, _temp;

  return isClassComponent(baseComponent) ? baseComponent : (_temp = _class =
  /*#__PURE__*/
  function (_Component) {
    Object(inheritsLoose["a" /* default */])(ToClass, _Component);

    function ToClass() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = ToClass.prototype;

    _proto.render = function render() {
      if (typeof baseComponent === 'string') {
        return react_default.a.createElement(baseComponent, this.props);
      }

      return baseComponent(this.props, this.context);
    };

    return ToClass;
  }(react["Component"]), _class.displayName = getDisplayName(baseComponent), _class.propTypes = baseComponent.propTypes, _class.contextTypes = baseComponent.contextTypes, _class.defaultProps = baseComponent.defaultProps, _temp);
};

function toRenderProps(hoc) {
  var RenderPropsComponent = function RenderPropsComponent(props) {
    return props.children(props);
  };

  return hoc(RenderPropsComponent);
}

var Recompose_esm_fromRenderProps = function fromRenderProps(RenderPropsComponent, propsMapper, renderPropName) {
  if (renderPropName === void 0) {
    renderPropName = 'children';
  }

  return function (BaseComponent) {
    var baseFactory = react_default.a.createFactory(BaseComponent);
    var renderPropsFactory = react_default.a.createFactory(RenderPropsComponent);

    var FromRenderProps = function FromRenderProps(ownerProps) {
      var _renderPropsFactory;

      return renderPropsFactory((_renderPropsFactory = {}, _renderPropsFactory[renderPropName] = function () {
        return baseFactory(Object(esm_extends["a" /* default */])({}, ownerProps, propsMapper.apply(void 0, arguments)));
      }, _renderPropsFactory));
    };

    if (false) {}

    return FromRenderProps;
  };
};

var setPropTypes = function setPropTypes(propTypes) {
  return setStatic('propTypes', propTypes);
};

var compose = function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  }, function (arg) {
    return arg;
  });
};

var Recompose_esm_createSink = function createSink(callback) {
  var Sink =
  /*#__PURE__*/
  function (_Component) {
    Object(inheritsLoose["a" /* default */])(Sink, _Component);

    function Sink() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.state = {};
      return _this;
    }

    Sink.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      callback(nextProps);
      return null;
    };

    var _proto = Sink.prototype;

    _proto.render = function render() {
      return null;
    };

    return Sink;
  }(react["Component"]);

  polyfill(Sink);
  return Sink;
};

var Recompose_esm_componentFromProp = function componentFromProp(propName) {
  var Component$$1 = function Component$$1(props) {
    return Object(react["createElement"])(props[propName], Recompose_esm_omit(props, [propName]));
  };

  Component$$1.displayName = "componentFromProp(" + propName + ")";
  return Component$$1;
};

var Recompose_esm_nest = function nest() {
  for (var _len = arguments.length, Components = new Array(_len), _key = 0; _key < _len; _key++) {
    Components[_key] = arguments[_key];
  }

  var factories = Components.map(react["createFactory"]);

  var Nest = function Nest(_ref) {
    var children = _ref.children,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["children"]);

    return factories.reduceRight(function (child, factory) {
      return factory(props, child);
    }, children);
  };

  if (false) { var displayNames; }

  return Nest;
};

var Recompose_esm_hoistStatics = function hoistStatics(higherOrderComponent, blacklist) {
  return function (BaseComponent) {
    var NewComponent = higherOrderComponent(BaseComponent);
    hoist_non_react_statics_cjs_default()(NewComponent, BaseComponent, blacklist);
    return NewComponent;
  };
};

var _config = {
  fromESObservable: null,
  toESObservable: null
};

var configureObservable = function configureObservable(c) {
  _config = c;
};

var config = {
  fromESObservable: function fromESObservable(observable) {
    return typeof _config.fromESObservable === 'function' ? _config.fromESObservable(observable) : observable;
  },
  toESObservable: function toESObservable(stream) {
    return typeof _config.toESObservable === 'function' ? _config.toESObservable(stream) : stream;
  }
};

var Recompose_esm_componentFromStreamWithConfig = function componentFromStreamWithConfig(config$$1) {
  return function (propsToVdom) {
    return (
      /*#__PURE__*/
      function (_Component) {
        Object(inheritsLoose["a" /* default */])(ComponentFromStream, _Component);

        function ComponentFromStream() {
          var _config$fromESObserva;

          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.state = {
            vdom: null
          };
          _this.propsEmitter = Object(lib["createChangeEmitter"])();
          _this.props$ = config$$1.fromESObservable((_config$fromESObserva = {
            subscribe: function subscribe(observer) {
              var unsubscribe = _this.propsEmitter.listen(function (props) {
                if (props) {
                  observer.next(props);
                } else {
                  observer.complete();
                }
              });

              return {
                unsubscribe: unsubscribe
              };
            }
          }, _config$fromESObserva[es["a" /* default */]] = function () {
            return this;
          }, _config$fromESObserva));
          _this.vdom$ = config$$1.toESObservable(propsToVdom(_this.props$));
          return _this;
        }

        var _proto = ComponentFromStream.prototype;

        _proto.componentWillMount = function componentWillMount() {
          var _this2 = this;

          // Subscribe to child prop changes so we know when to re-render
          this.subscription = this.vdom$.subscribe({
            next: function next(vdom) {
              _this2.setState({
                vdom: vdom
              });
            }
          });
          this.propsEmitter.emit(this.props);
        };

        _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          // Receive new props from the owner
          this.propsEmitter.emit(nextProps);
        };

        _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
          return nextState.vdom !== this.state.vdom;
        };

        _proto.componentWillUnmount = function componentWillUnmount() {
          // Call without arguments to complete stream
          this.propsEmitter.emit(); // Clean-up subscription before un-mounting

          this.subscription.unsubscribe();
        };

        _proto.render = function render() {
          return this.state.vdom;
        };

        return ComponentFromStream;
      }(react["Component"])
    );
  };
};

var componentFromStream = function componentFromStream(propsToVdom) {
  return Recompose_esm_componentFromStreamWithConfig(config)(propsToVdom);
};

var identity$1 = function identity(t) {
  return t;
};

var Recompose_esm_mapPropsStreamWithConfig = function mapPropsStreamWithConfig(config$$1) {
  var componentFromStream$$1 = Recompose_esm_componentFromStreamWithConfig({
    fromESObservable: identity$1,
    toESObservable: identity$1
  });
  return function (transform) {
    return function (BaseComponent) {
      var factory = Object(react["createFactory"])(BaseComponent);
      var fromESObservable = config$$1.fromESObservable,
          toESObservable = config$$1.toESObservable;
      return componentFromStream$$1(function (props$) {
        var _ref;

        return _ref = {
          subscribe: function subscribe(observer) {
            var subscription = toESObservable(transform(fromESObservable(props$))).subscribe({
              next: function next(childProps) {
                return observer.next(factory(childProps));
              }
            });
            return {
              unsubscribe: function unsubscribe() {
                return subscription.unsubscribe();
              }
            };
          }
        }, _ref[es["a" /* default */]] = function () {
          return this;
        }, _ref;
      });
    };
  };
};

var mapPropsStream = function mapPropsStream(transform) {
  var hoc = Recompose_esm_mapPropsStreamWithConfig(config)(transform);

  if (false) {}

  return hoc;
};

var Recompose_esm_createEventHandlerWithConfig = function createEventHandlerWithConfig(config$$1) {
  return function () {
    var _config$fromESObserva;

    var emitter = Object(lib["createChangeEmitter"])();
    var stream = config$$1.fromESObservable((_config$fromESObserva = {
      subscribe: function subscribe(observer) {
        var unsubscribe = emitter.listen(function (value) {
          return observer.next(value);
        });
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _config$fromESObserva[es["a" /* default */]] = function () {
      return this;
    }, _config$fromESObserva));
    return {
      handler: emitter.emit,
      stream: stream
    };
  };
};
var createEventHandler = Recompose_esm_createEventHandlerWithConfig(config);

// Higher-order component helpers




/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var f=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,d(e,t))})),n},d=function(e,t){var n={};return"object"===c(e)&&Object.keys(e).find((function(a){if(a===t)return n=Object.assign({},e[a]),!0})),n},b=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),p=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),v=function c(i){var o=[];i.subdataList.map((function(e){!0===e.defaultCollapsed&&o.push(e.id)}));var y,d,v,m,h,O={},j=s(s({},Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(b)),{},{state_collapsed:(y=o,d=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(y),v=u(d,2),m=v[0],h=v[1],{value:m,has:function(e){return m.indexOf(e)>=0},onChange:function(e,t){var n;switch(t){case"hide":m.indexOf(e)<0&&(n=m.concat(e),h(n));break;case"show":n=m.filter((function(t){return t!==e})),h(n)}}})}),g=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(p);function _(e,t){var n=O["".concat(e,"_sublayer")].current;switch(t){case"hide":n.style.maxHeight="0px",i.updateLayerSize&&i.updateLayerSize(-1*Math.ceil(n.scrollHeight));break;case"show":n.style.maxHeight="".concat(Math.ceil(n.scrollHeight),"px"),i.updateLayerSize&&i.updateLayerSize(Math.ceil(n.scrollHeight))}}return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){var e;i.subdataList.map((function(t){t.children&&(e=j.collapseEnable&&!0===t.defaultCollapsed?"hide":"show",g.toggleCollapsed(t,e),_(t.id,e))}))}),[]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"btb-react-list-layer layer-".concat(i.iteration),style:f(j.styleObj,["btb-react-list-layer","layer-".concat(i.iteration)])},i.subdataList.map((function(t){return void 0!==t.children?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"layer_container",style:f(j.styleObj,["layer_container"]),key:t.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("container_entry","entry-".concat(t.id),{"entry-collapsable":j.collapseEnable},{"entry-active":j.state_activeID.value===t.id}),style:s({paddingLeft:"".concat(i.iteration,"rem")},f(j.styleObj,["container_entry","entry-".concat(t.id),j.collapseEnable?"entry-collapsable":"",j.state_activeID.value===t.id?"entry-active":""])),onClick:function(){!function(e,t){if(!j.collapseEnable)return g.clickEntry(e),!1;var n=t||(j.state_collapsed.has(e.id)?"show":"hide");g.toggleCollapsed(e,n),j.state_collapsed.onChange(e.id,n),_(e.id,n)}(t)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"entry_title",style:f(j.styleObj,["entry_title"])},j.slotObj[t.id]?"function"==typeof j.slotObj[t.id]?j.slotObj[t.id](t):j.slotObj[t.id]:t.title),j.collapseEnable?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("entry_collapseBtn","collapseBtn-default",{"collapseBtn-on":j.state_collapsed.has(t.id)}),style:f(j.styleObj,["entry_collapseBtn","collapseBtn-default",j.state_collapsed.has(t.id)?"collapseBtn-on":""])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"collapseBtn_arrow",style:f(j.styleObj,["collapseBtn_arrow"])})):[]),t.children.length>0?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container_sublayer",id:"".concat(t.id,"_sublayer"),style:f(j.styleObj,["container_sublayer"]),ref:(n="".concat(t.id,"_sublayer"),O[n]=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(),O[n])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(c,{subdataList:t.children,iteration:i.iteration+1,updateLayerSize:function(e){return function(e,t){var n=O["".concat(t,"_sublayer")].current;n.style.maxHeight="".concat(Math.ceil(n.scrollHeight)+e,"px"),i.updateLayerSize&&i.updateLayerSize(e)}(e,t.id)}})):[]):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"layer_container",style:f(j.styleObj,["layer_container"]),key:t.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("container_entry","entry-".concat(t.id),{"entry-active":j.state_activeID.value===t.id}),style:s({paddingLeft:"".concat(i.iteration,"rem")},f(j.styleObj,["container_entry","entry-".concat(t.id),j.state_activeID.value===t.id?"entry-active":""])),onClick:function(){g.clickEntry(t)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"entry_title",style:f(j.styleObj,["entry_title"])},j.slotObj[t.id]?"function"==typeof j.slotObj[t.id]?j.slotObj[t.id](t):j.slotObj[t.id]:t.title)));var n})))};var m=react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((function(t,r){var c,i,o,s,y,d,m,h={state_activeID:(s=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(o),y=u(s,2),d=y[0],m=y[1],{value:d,onChange:function(e){m(e)}}),collapseEnable:t.collapseEnable||!1,styleObj:(c=t.styleObj||{},i={},Object.keys(c).forEach((function(e){i[e]={},Object.keys(c[e]).forEach((function(t){var n=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));i[e][n]=c[e][t]}))})),i),slotObj:t.slotObj||{}},O={clickEntry:function(e){h.state_activeID.onChange(e.id),t.onEntryClick&&t.onEntryClick(e)},toggleCollapsed:function(e){t.onToggle&&t.onToggle(e)}};return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){h.state_activeID.onChange(t.activeID||t.defaultActiveID||"")}),[]),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){void 0!==t.activeID&&h.state_activeID.value!==t.activeID&&h.state_activeID.onChange(t.activeID)})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b.Provider,{value:h},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(p.Provider,{value:O},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:r,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("btb-react-list",t.className),style:f(h.styleObj,["btb-react-list"])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(v,{subdataList:t.dataList||[],iteration:0}))))}));/* harmony default export */ __webpack_exports__["a"] = (m);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var o=[],n=!0,r=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);n=!0);}catch(t){r=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}var f=function(t){var e=0,o=0;if(t.offsetParent)do{e+=t.offsetLeft,o+=t.offsetTop}while(t=t.offsetParent);return{left:e-window.scrollX,top:o-window.scrollY}},w=function(t,e){var o;return e.forEach((function(e){o=Object.assign({},o,p(t,e))})),o},p=function(t,e){var o={};return"object"===i(t)&&Object.keys(t).find((function(n){if(n===e)return o=Object.assign({},t[n]),!0})),o},h=react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((function(i,s){var a,l,p,h,d,b,g,y={state_showState:(p=i.showState,h=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(p),d=u(h,2),b=d[0],g=d[1],{value:b,onToggle:function(t){g("boolean"==typeof t?t:!b)}}),state_autoAdjust:v({position:"",align:""}),autoDetect:void 0===i.autoDetect||i.autoDetect,withArrow:void 0===i.withArrow||i.withArrow,showPosition:i.showPosition?i.showPosition:"bottom",showAlign:i.showAlign?i.showAlign:"begin",styleObj:(a=i.styleObj||{},l={},Object.keys(a).forEach((function(t){l[t]={},Object.keys(a[t]).forEach((function(e){var o=e.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}));l[t][o]=a[t][e]}))})),l)},m=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),j=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),O=y.state_autoAdjust.value.position||y.showPosition,S=y.state_autoAdjust.value.align||y.showAlign,P="".concat(Date.now(),"-").concat(Math.ceil(1e3*Math.random()));function A(){y.autoDetect&&y.state_autoAdjust.onAdjust(c(c(c({},y.state_autoAdjust.value),function(){var t=m.current,e=j.current,o=f(t);if(o.left-e.scrollWidth<0){if("left"===y.showPosition)return{position:"right"};if("top"===y.showPosition||"bottom"===y.showPosition)return{align:"begin"}}else if(o.left+t.scrollWidth+e.scrollWidth+20>window.innerWidth){if("right"===y.showPosition)return{position:"left"};if("top"===y.showPosition||"bottom"===y.showPosition)return{align:"end"}}return{}}()),L()))}function _(){y.autoDetect&&y.state_autoAdjust.onAdjust(c(c({},y.state_autoAdjust.value),L()))}function E(t){window.test=t.path,void 0===t.path.find((function(t){return!!t.classList&&t.classList.value.search("popover-".concat(P))>0}))&&D()}function D(){void 0!==i.onToggle&&i.onToggle(!y.state_showState.value),y.state_showState.value?void 0!==i.onHide&&i.onHide():void 0!==i.onShow&&i.onShow(),y.state_showState.onToggle()}function L(){var t=m.current,e=j.current,o=f(t);if(o.top-e.scrollHeight<0){if("top"===y.showPosition)return{position:"bottom"};if("left"===y.showPosition||"right"===y.showPosition)return{align:"begin"}}else if(o.top+t.scrollHeight+e.scrollHeight+20>window.innerHeight){if("bottom"===y.showPosition)return{position:"top"};if("left"===y.showPosition||"right"===y.showPosition)return{align:"end"}}return{}}return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){return A(),window.addEventListener("resize",A),window.addEventListener("scroll",_),function(){window.removeEventListener("resize",A),window.removeEventListener("scroll",_)}}),[]),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){A()}),[y.state_showState.value,O,S]),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){void 0!==i.showState&&y.state_showState.value!==i.showState&&y.state_showState.onToggle(i.showState)})),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){return window.removeEventListener("click",E,!1),y.state_showState.value&&window.addEventListener("click",E,!1),function(){window.removeEventListener("click",E,!1)}}),[y.state_showState.value]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:s,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("btb-react-popover","popover-".concat(P),i.className,"popover-align-".concat(S),{"popover-arrow":y.withArrow}),style:w(y.styleObj,["btb-react-popover","popover-align-".concat(S),y.withArrow?"popover-arrow":""])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:m,className:"popover_trigger",style:w(y.styleObj,["popover_trigger"]),onClick:D},void 0!==i.trigger?i.trigger:"Trigger"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:j,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("popover_content",{"content-show":y.state_showState.value},"content-position-".concat(O)),style:w(y.styleObj,["popover_content",y.state_showState.value?"content-show":"","content-position-".concat(O)])},i.children||"Empty"))}));function v(t){var e=u(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(t),2),o=e[0],r=e[1];return{value:o,onAdjust:function(t){r(t)}}}/* harmony default export */ __webpack_exports__["a"] = (h);


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createChangeEmitter = exports.createChangeEmitter = function createChangeEmitter() {
  var currentListeners = [];
  var nextListeners = currentListeners;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  function listen(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function () {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  function emit() {
    currentListeners = nextListeners;
    var listeners = currentListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(listeners, arguments);
    }
  }

  return {
    listen: listen,
    emit: emit
  };
};

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ es_BTBLanguage; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ es_storeInitializer; });

// CONCATENATED MODULE: ./node_modules/@blacktoolbox/prototype-languages/es/store.js
var store = function () {
  var vault = []; // let vault = [
  //   { index: 'en_US', label: 'English', dictionary: {...} },
  //   ...
  // ];

  var init = function init(newLanguage) {
    vault = newLanguage || [];
    return vault;
  };

  var menu = function menu() {
    var list = vault.map(function (entry) {
      return {
        index: entry.index,
        label: entry.label
      };
    });
    return list;
  };

  var get = function get(langaugeIndex) {
    var result = vault.find(function (entry) {
      return entry.index === langaugeIndex;
    }) || {};
    return result;
  };

  return {
    init: init,
    menu: menu,
    get: get
  };
}();

/* harmony default export */ var es_store = (store);
// CONCATENATED MODULE: ./node_modules/@blacktoolbox/prototype-languages/es/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var es_BTBLanguage = function BTBLanguage() {
  var language = {};

  if (es_store.menu()[0]) {
    language = es_store.get(es_store.menu()[0].index || '');
  }

  var menu = function menu() {
    return es_store.menu();
  };

  var get = function get() {
    return language;
  };

  var set = function set(index) {
    language = es_store.get(index);
    return language;
  };

  var translate = function translate(index, replacement) {
    // replacement = {
    //  'key': 'string'
    // }
    var text = searchText(index, language.dictionary || {});
    var reg;

    if (replacement) {
      Object.keys(replacement).map(function (key) {
        reg = new RegExp(key, 'g');
        text = text.replace(reg, replacement[key]);
      });
    }

    return text;
  };

  var searchText = function searchText(index, dictionary) {
    var result = searchTextRecursive(index, dictionary);
    return typeof result === 'undefined' ? index : result;
  };

  var searchTextRecursive = function searchTextRecursive(index, dictionary) {
    var _index$split = index.split('.'),
        _index$split2 = _toArray(_index$split),
        key = _index$split2[0],
        keyRest = _index$split2.slice(1);

    return _typeof(dictionary[key]) === 'object' ? searchTextRecursive(keyRest.join('.'), dictionary[key]) : dictionary[key];
  };

  return {
    menu: menu,
    get: get,
    set: set,
    translate: translate
  };
};

var es_storeInitializer = function storeInitializer(config) {
  return es_store.init(config);
};



/***/ })

}]);