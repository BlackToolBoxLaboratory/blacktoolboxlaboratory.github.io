webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Btn = exports.BtnGroup = exports.Notice = exports.Item = exports.Pre = exports.Content = exports.SectionSubtitle = exports.SectionTitle = exports.Section = exports.MainDescription = exports.MainTitle = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainTitle = exports.MainTitle = function MainTitle(props) {
  var content = [];
  props.className = 'btb-articleLayout mainTitle ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var MainDescription = exports.MainDescription = function MainDescription(props) {
  var content = [];
  props.className = 'btb-articleLayout mainDescription ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var Section = exports.Section = function Section(props) {
  var content = [];
  props.className = 'btb-articleLayout section ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var SectionTitle = exports.SectionTitle = function SectionTitle(props) {
  var content = [];
  props.className = 'btb-articleLayout sectionTitle ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var SectionSubtitle = exports.SectionSubtitle = function SectionSubtitle(props) {
  var content = [];
  props.className = 'btb-articleLayout sectionSubtitle ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var Content = exports.Content = function Content(props) {
  var content = [];
  props.className = 'btb-articleLayout content ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var Pre = exports.Pre = function Pre(props) {
  var content = [];
  props.className = 'btb-articleLayout content-pre ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'pre',
    props,
    props.children
  ));
  return content;
};
var Item = exports.Item = function Item(props) {
  var content = [];
  props.className = 'btb-articleLayout content-item ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var Notice = exports.Notice = function Notice(props) {
  var content = [];
  props.className = 'btb-articleLayout notice ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var BtnGroup = exports.BtnGroup = function BtnGroup(props) {
  var content = [];
  props.className = 'btb-articleLayout buttonGroup ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var Btn = exports.Btn = function Btn(props) {
  var content = [];
  props.className = 'btb-articleLayout button ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};

exports.default = {
  MainTitle: MainTitle,
  MainDescription: MainDescription,
  Section: Section,
  SectionTitle: SectionTitle,
  SectionSubtitle: SectionSubtitle,
  Content: Content,
  Pre: Pre,
  Item: Item,
  Notice: Notice,
  BtnGroup: BtnGroup,
  Btn: Btn
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.InlineBlock = exports.Block = exports.Part = exports.Wrapper = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = exports.Wrapper = function Wrapper(props) {
  var content = [];
  props.className = 'btb-exampleLayout wrapper ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var Part = exports.Part = function Part(props) {
  var content = [];
  props.className = 'btb-exampleLayout part ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var Block = exports.Block = function Block(props) {
  var content = [];
  props.className = 'btb-exampleLayout block ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var InlineBlock = exports.InlineBlock = function InlineBlock(props) {
  var content = [];
  props.className = 'btb-exampleLayout inlineBlock ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};
var Title = exports.Title = function Title(props) {
  var content = [];
  props.className = 'btb-exampleLayout title ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    props,
    props.children
  ));
  return content;
};

exports.default = {
  Wrapper: Wrapper,
  Part: Part,
  Block: Block,
  InlineBlock: InlineBlock,
  Title: Title
};

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flux = __webpack_require__(92);

var MyDispatcher = new _flux.Dispatcher();
exports.default = MyDispatcher;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function ListInfoObj(obj) {
  var _this = this;

  this['name'] = '';
  this['children'] = [];
  Object.keys(obj).map(function (key) {
    _this[key] = obj[key];
  });
};

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this2 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this2.env = {
      listArr: [],
      styleObj: {},
      inputRefFn: function inputRefFn() {}
    };
    _this2.collapseStatusList = {};
    return _this2;
  }

  _createClass(Menu, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateENVFn(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateENVFn(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var content = [];
      var listArr = this.env.listArr;
      var nextLayer = 0;
      var props_list = this.createBasicProps('btb-list');
      if (this.props.className) {
        props_list.className += ' ' + this.props.className;
      };
      var props_layer = this.createBasicProps('list-layer');
      var layerNextName = 'layer-' + nextLayer;
      props_layer.className += ' ' + layerNextName;
      if (this.env.styleObj[layerNextName]) {
        Object.keys(this.env.styleObj[layerNextName]).map(function (config) {
          props_layer.style[config] = _this3.env.styleObj[layerNextName][config];
        });
      };
      content.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _extends({}, props_list, { ref: function ref(_ref) {
            _this3._refHandler(_ref);
          } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          props_layer,
          listArr.map(function (item) {
            var content_list = [];
            content_list.push(_this3.listRenderFn(item, nextLayer));
            return content_list;
          })
        )
      ));
      return content;
    }
  }, {
    key: 'updateENVFn',
    value: function updateENVFn(source) {
      var _this4 = this;

      this.env = {
        listArr: [],
        styleObj: {},
        inputRefFn: function inputRefFn() {}
      };
      Object.keys(source).map(function (entry) {
        _this4.env[entry] = source[entry];
      });
    }
  }, {
    key: 'listRenderFn',
    value: function listRenderFn(source, layerCounter) {
      var _this5 = this;

      var infoObj = new ListInfoObj(source);
      var content = [];
      var hasChildren = 0 < infoObj.children.length ? true : false;
      var nextLayer = layerCounter + 1;
      var props_item = this.createBasicProps('layer-item');
      var props_content = this.createBasicProps('item-content');
      var props_name = this.createBasicProps('content-name');
      content.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        props_item,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          props_content,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            props_name,
            infoObj.name
          )
        ),
        function () {
          var content_sublist = [];
          if (hasChildren) {
            var props_sublist = _this5.createBasicProps('item-sublist');
            var props_layer = _this5.createBasicProps('list-layer');
            var layerNextName = 'layer-' + nextLayer;
            props_layer.className += ' ' + layerNextName;
            if (_this5.env.styleObj[layerNextName]) {
              Object.keys(_this5.env.styleObj[layerNextName]).map(function (config) {
                props_layer.style[config] = _this5.env.styleObj[layerNextName][config];
              });
            };
            content_sublist.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              props_sublist,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                props_layer,
                infoObj.children.map(function (item) {
                  var content_list = [];
                  content_list.push(_this5.listRenderFn(item, nextLayer));
                  return content_list;
                })
              )
            ));
          };
          return content_sublist;
        }()
      ));
      return content;
    }
  }, {
    key: 'createBasicProps',
    value: function createBasicProps(name) {
      var obj = {
        className: name,
        style: this.env.styleObj[name] ? this.env.styleObj[name] : {}
      };
      return obj;
    }
  }, {
    key: '_refHandler',
    value: function _refHandler(ref) {
      this.env.inputRefFn(ref);
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

Menu.propTypes = {
  listArr: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  styleObj: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  inputRefFn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

Menu.defaultProps = {
  listArr: [],
  styleObj: {},
  inputRefFn: function inputRefFn() {}
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__(122);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (false) {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.SideContent_backdoor = SideContent_backdoor;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(21);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _blacktboxMenu = __webpack_require__(100);

var _blacktboxMenu2 = _interopRequireDefault(_blacktboxMenu);

var _menuList = __webpack_require__(101);

var _menuList2 = _interopRequireDefault(_menuList);

var _routeList = __webpack_require__(28);

var _routeList2 = _interopRequireDefault(_routeList);

var _history = __webpack_require__(29);

var _history2 = _interopRequireDefault(_history);

var _about = __webpack_require__(102);

var _about2 = _interopRequireDefault(_about);

var _index = __webpack_require__(103);

var _index2 = _interopRequireDefault(_index);

var _Flux = __webpack_require__(104);

var _Flux2 = _interopRequireDefault(_Flux);

var _Redux = __webpack_require__(118);

var _Redux2 = _interopRequireDefault(_Redux);

var _index3 = __webpack_require__(166);

var _index4 = _interopRequireDefault(_index3);

var _basic = __webpack_require__(167);

var _basic2 = _interopRequireDefault(_basic);

var _example = __webpack_require__(168);

var _example2 = _interopRequireDefault(_example);

var _basic3 = __webpack_require__(169);

var _basic4 = _interopRequireDefault(_basic3);

var _basic5 = __webpack_require__(170);

var _basic6 = _interopRequireDefault(_basic5);

var _advanced = __webpack_require__(171);

var _advanced2 = _interopRequireDefault(_advanced);

var _ = __webpack_require__(172);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideContentThis = void 0;

function SideContent_backdoor(type, obj) {
  switch (type) {
    case 'menuRedirect':
      if (obj.acticveIndex) {
        SideContentThis.env.menuActiveIndex = obj.acticveIndex;
        var path = _routeList2.default[obj.acticveIndex];
        if (path) {
          _history2.default.push(path);
          window.scrollTo(0, 0);
        };
      }
      break;
  }
}

var Home = function Home(props) {
  var content = [];
  content.push(_react2.default.createElement(
    'div',
    { className: 'wrapper wrapper-home' },
    _react2.default.createElement('div', { className: 'sideContentBG' }),
    _react2.default.createElement(SideContent, null),
    _react2.default.createElement(MainContent, null)
  ));
  return content;
};

var SideContent = function (_Component) {
  _inherits(SideContent, _Component);

  function SideContent(props) {
    _classCallCheck(this, SideContent);

    var _this = _possibleConstructorReturn(this, (SideContent.__proto__ || Object.getPrototypeOf(SideContent)).call(this, props));

    _this.env = {
      menuActiveIndex: 'ABOUT'
    };
    return _this;
  }

  _createClass(SideContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var currentPathname = _history2.default.location.pathname;
      for (var routeIndex in _routeList2.default) {
        if (_routeList2.default[routeIndex] == currentPathname) {
          if ('ROOT' == routeIndex) {
            this.env.menuActiveIndex = 'ABOUT';
          } else {
            this.env.menuActiveIndex = routeIndex;
          }
          window.scrollTo(0, 0);
          this.forceUpdate();
          break;
        };
        if ('BTB_ATCS' == routeIndex) {
          if (currentPathname.match(_routeList2.default[routeIndex])) {
            this.env.menuActiveIndex = routeIndex;
            window.scrollTo(0, 0);
            this.forceUpdate();
            break;
          };
        };
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      SideContentThis = this;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'sideContent' },
        _react2.default.createElement(
          'div',
          { className: 'header' },
          _react2.default.createElement(
            'div',
            { className: 'groupname' },
            'BTB Laboratory'
          ),
          _react2.default.createElement(
            'div',
            { className: 'icon' },
            _react2.default.createElement(_reactFontawesome2.default, { name: 'user-circle-o', fixedWidth: true })
          ),
          _react2.default.createElement(
            'div',
            { className: 'welcome' },
            'Hello! Friend.'
          )
        ),
        _react2.default.createElement(_blacktboxMenu2.default, {
          className: 'menu',
          menuArr: _menuList2.default,
          acticveIndex: this.env.menuActiveIndex,
          itemOnClickFn: function itemOnClickFn(infoObj) {
            _this2._itemOnClickFn(infoObj);
          },
          featureCollapsible: {
            enable: true
          }
        })
      ));
      return content;
    }
  }, {
    key: '_itemOnClickFn',
    value: function _itemOnClickFn(infoObj) {
      this.env.menuActiveIndex = infoObj.index;
      var path = _routeList2.default[infoObj.index];
      if (path) {
        _history2.default.push(path);
        window.scrollTo(0, 0);
      };
    }
  }]);

  return SideContent;
}(_react.Component);

;

var MainContent = function MainContent(props) {
  var content = [];
  content.push(_react2.default.createElement(
    'div',
    { className: 'mainContent' },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.ROOT, component: _about2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.ABOUT, component: _about2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_ATCS, component: _index2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_ATCS_FLUX, component: _Flux2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_ATCS_REDUX, component: _Redux2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_DEMO, component: _index4.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_LIST_BASIC, component: _basic2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_LIST_EXAMPLE, component: _example2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_TABLE_BASIC, component: _basic4.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_MENU_BASIC, component: _basic6.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_MENU_ADV, component: _advanced2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _2.default })
    )
  ));
  return content;
};

exports.default = Home;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LeftListAction = function () {
  var init = function init() {
    return {
      type: 'LEFT_LIST_INIT'
    };
  };
  var get = function get() {
    return {
      type: 'LEFT_LIST_GET'
    };
  };
  var add = function add(source) {
    return {
      type: 'LEFT_LIST_ADD',
      data: source
    };
  };
  var remove = function remove(source) {
    return {
      type: 'LEFT_LIST_REMOVE',
      data: source
    };
  };
  return {
    init: init,
    get: get,
    add: add,
    remove: remove
  };
}();

exports.default = LeftListAction;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RightListAction = function () {
  var init = function init() {
    return {
      type: 'RIGHT_LIST_INIT'
    };
  };
  var get = function get() {
    return {
      type: 'RIGHT_LIST_GET'
    };
  };
  var add = function add(source) {
    return {
      type: 'RIGHT_LIST_ADD',
      data: source
    };
  };
  var remove = function remove(source) {
    return {
      type: 'RIGHT_LIST_REMOVE',
      data: source
    };
  };
  return {
    init: init,
    get: get,
    add: add,
    remove: remove
  };
}();

exports.default = RightListAction;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LeftListAction = function () {
  var init = function init() {
    return {
      type: 'LEFT_LIST_INIT'
    };
  };
  var get = function get() {
    return {
      type: 'LEFT_LIST_GET'
    };
  };
  var add = function add(source) {
    return {
      type: 'LEFT_LIST_ADD',
      data: source
    };
  };
  var change = function change(source) {
    return {
      type: 'LEFT_LIST_CHANGE',
      data: source
    };
  };
  var remove = function remove(source) {
    return {
      type: 'LEFT_LIST_REMOVE',
      data: source
    };
  };
  return {
    init: init,
    get: get,
    add: add,
    change: change,
    remove: remove
  };
}();

exports.default = LeftListAction;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RightListAction = function () {
  var init = function init() {
    return {
      type: 'RIGHT_LIST_INIT'
    };
  };
  var get = function get() {
    return {
      type: 'RIGHT_LIST_GET'
    };
  };
  var add = function add(source) {
    return {
      type: 'RIGHT_LIST_ADD',
      data: source
    };
  };
  var change = function change(source) {
    return {
      type: 'RIGHT_LIST_CHANGE',
      data: source
    };
  };
  var remove = function remove(source) {
    return {
      type: 'RIGHT_LIST_REMOVE',
      data: source
    };
  };
  return {
    init: init,
    get: get,
    add: add,
    change: change,
    remove: remove
  };
}();

exports.default = RightListAction;

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var routeList = {
  'ROOT': '/',
  'ABOUT': '/about',

  'BTB_ATCS': '/articles',
  'BTB_ATCS_FLUX': '/articles/flux',
  'BTB_ATCS_REDUX': '/articles/redux',

  'BTB_DEMO': '/blacktbox-demo',

  'BTB_LIST_BASIC': '/blacktbox-list/basic',
  'BTB_LIST_EXAMPLE': '/blacktbox-list/example',

  'BTB_TABLE_BASIC': '/blacktbox-table/basic',

  'BTB_MENU_BASIC': '/blacktbox-menu/basic',
  'BTB_MENU_ADV': '/blacktbox-menu/advanced'
};

exports.default = routeList;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = __webpack_require__(41);

var MyHashHistory = new _history.createHashHistory();
exports.default = MyHashHistory;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var tableThis = void 0;

function HeadObj(obj) {
  var _this = this;

  this['name'] = '';
  this['index'] = '';
  this['sortType'] = 'string';
  this['sortFn'] = function () {};
  this['defaultSortStatus'] = 'ascending';
  Object.keys(obj).map(function (key) {
    _this[key] = obj[key];
  });
};
function BodyObj(obj) {
  var _this2 = this;

  tableThis.env.tableHeadArr.map(function (entry_th) {
    _this2[entry_th.index] = '';
  });
  Object.keys(obj).map(function (key) {
    _this2[key] = obj[key];
  });
};

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this3 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this3.env = {
      tableHeadArr: [],
      tableBobyArr: [],
      modeObj: {
        mode: 'list',
        listFeatureSearch: {
          keyword: '',
          matchAll: false
        },
        listFeatureSort: {
          enable: false,
          defaultSortHead: '',
          sortType: 'ascending'
        },
        listFeaturePage: {
          perPage: 0,
          page: 1
        }
      },
      styleObj: {},
      inputRefFn: function inputRefFn() {}
    };
    _this3.sortStatusList = {};
    return _this3;
  }

  _createClass(Menu, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateENVFn(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateENVFn(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var content = [];
      var props_table = this.createBasicProps('btb-table');
      if (this.props.className) {
        props_table.className += ' ' + this.props.className;
      };
      content.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _extends({}, props_table, { ref: function ref(_ref) {
            _this4._refHandler(_ref);
          } }),
        function () {
          var content_table = [];
          switch (_this4.env.modeObj.mode) {
            case 'info':
              content_table.push(_this4.infoRenderFn());
              break;
            case 'list':
              content_table.push(_this4.listRenderFn());
              break;
          };
          return content_table;
        }()
      ));
      return content;
    }
  }, {
    key: 'updateENVFn',
    value: function updateENVFn(source) {
      var _this5 = this;

      this.env = {
        tableHeadArr: [],
        tableBobyArr: [],
        modeObj: {
          mode: 'list',
          listFeatureSearch: {
            keyword: '',
            matchAll: false
          },
          listFeatureSort: {
            enable: false,
            defaultSortHead: '',
            sortType: 'ascending'
          },
          listFeaturePage: {
            perPage: 0,
            page: 1
          }
        },
        styleObj: {},
        inputRefFn: function inputRefFn() {}
      };
      Object.keys(source).map(function (entry) {
        switch (entry) {
          case 'modeObj':
            Object.keys(source.modeObj).map(function (modeObj_entry) {
              switch (modeObj_entry) {
                case 'listFeatureSearch':
                case 'listFeatureSort':
                case 'listFeaturePage':
                  Object.keys(source.modeObj[modeObj_entry]).map(function (listFeature_entry) {
                    _this5.env.modeObj[modeObj_entry][listFeature_entry] = source.modeObj[modeObj_entry][listFeature_entry];
                  });
                  break;
                default:
                  _this5.env.modeObj[modeObj_entry] = source.modeObj[modeObj_entry];
                  break;
              };
            });
            break;
          default:
            _this5.env[entry] = source[entry];
            break;
        };
      });
      tableThis = this;
    }
  }, {
    key: 'infoRenderFn',
    value: function infoRenderFn() {
      var content = [];
      var props_info = this.createBasicProps('table-info');
      content.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'table',
        props_info,
        this.infoBodyRenderFn()
      ));
      return content;
    }
  }, {
    key: 'infoBodyRenderFn',
    value: function infoBodyRenderFn() {
      var _this6 = this;

      var content = [];
      var props_info = this.createBasicProps('table-info');
      var props_tbody = this.createBasicProps('info-tbody');
      content.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'table',
        props_info,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'tbody',
          props_tbody,
          this.env.tableHeadArr.map(function (entry_head) {
            var entry_th = new HeadObj(entry_head);
            var content_tr = [];
            var props_tr = _this6.createBasicProps('tbody-tr');
            var props_th = _this6.createBasicProps('tr-th');
            content_tr.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tr',
              props_tr,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                props_th,
                'entry_th.name'
              ),
              _this6.env.tableBobyArr.map(function (entry_body) {
                var entry_td = new BodyObj(entry_body);
                var content_td = [];
                var props_td = _this6.createBasicProps('tr-td');
                var tdHeadName = 'td-' + entry_th.index;
                props_td.className += ' ' + tdHeadName;
                if (_this6.env.styleObj[tdHeadName]) {
                  Object.keys(_this6.env.styleObj[tdHeadName]).map(function (config) {
                    props_td.style[config] = _this6.env.styleObj[tdHeadName][config];
                  });
                };
                content_td.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  props_td,
                  entry_td[entry_th.index]
                ));
                return content_td;
              })
            ));
            return content_tr;
          })
        )
      ));
      return content;
    }
  }, {
    key: 'listRenderFn',
    value: function listRenderFn() {
      var content = [];
      var props_list = this.createBasicProps('table-list');
      content.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'table',
        props_list,
        this.listHeadRenderFn(),
        this.listBodyRenderFn()
      ));
      return content;
    }
  }, {
    key: 'listHeadRenderFn',
    value: function listHeadRenderFn() {
      var _this7 = this;

      var content = [];
      var props_thead = this.createBasicProps('list-thead');
      var props_tr = this.createBasicProps('thead-tr');
      content.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'thead',
        props_thead,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'tr',
          props_tr,
          this.env.tableHeadArr.map(function (entry_head) {
            var entry_th = new HeadObj(entry_head);
            var props_th = _this7.createBasicProps('tr-th');
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'th',
              props_th,
              entry_th.name
            );
          })
        )
      ));
      return content;
    }
  }, {
    key: 'listBodyRenderFn',
    value: function listBodyRenderFn() {
      var _this8 = this;

      var content = [];
      var props_tbody = this.createBasicProps('list-tbody');
      content.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tbody',
        props_tbody,
        this.env.tableBobyArr.map(function (entry_body) {
          var entry_td = new BodyObj(entry_body);
          var content_tr = [];
          var props_tr = _this8.createBasicProps('tbody-tr');
          content_tr.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'tr',
            props_tr,
            _this8.env.tableHeadArr.map(function (entry_head) {
              var entry_th = new HeadObj(entry_head);
              var content_td = [];
              var props_td = _this8.createBasicProps('tr-td');
              var tdHeadName = 'td-' + entry_th.index;
              props_td.className += ' ' + tdHeadName;
              if (_this8.env.styleObj[tdHeadName]) {
                Object.keys(_this8.env.styleObj[tdHeadName]).map(function (config) {
                  props_td.style[config] = _this8.env.styleObj[tdHeadName][config];
                });
              };
              content_td.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                props_td,
                entry_td[entry_th.index]
              ));
              return content_td;
            })
          ));
          return content_tr;
        })
      ));
      return content;
    }
  }, {
    key: 'createBasicProps',
    value: function createBasicProps(name) {
      var obj = {
        className: name,
        style: this.env.styleObj[name] ? this.env.styleObj[name] : {}
      };
      return obj;
    }
  }, {
    key: '_refHandler',
    value: function _refHandler(ref) {
      this.env.inputRefFn(ref);
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

Menu.propTypes = {
  tableHeadArr: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  tableBodyArr: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  modeObj: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  styleObj: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  inputRefFn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

Menu.defaultProps = {
  tableHeadArr: [],
  tableBodyArr: [],
  modeObj: {},
  styleObj: {},
  inputRefFn: function inputRefFn() {}
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*!
 * @name JavaScript/NodeJS Merge v1.2.0
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(111)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* present data in server */
var serverData = new Array();

var DATAMEMBERS = 5;
var random_ID = 'abcdefghijklmnopqrstuvwxyz0123456789';
var random_name = 'abcdefghijklmnopqrstuvwxyz';

function DataObj() {
  this['ID'] = '';
  this['name'] = '';
};

function randomData(type, base) {
  var valueLength = 0;
  var value = '';
  var randomNumber = void 0;
  switch (type) {
    case 'id':
      valueLength = 10;
      for (var idIndex = 0; idIndex < valueLength; idIndex++) {
        randomNumber = Math.round(Math.random() * 100);
        value += random_ID.split('')[randomNumber % random_ID.length];
      };
      for (var baseIndex = 0; baseIndex < base.length; baseIndex++) {
        if (base[baseIndex].ID == value) {
          // if duplicate ID, random again
          value = randomData('id', base);
          break;
        };
      };
      break;
    case 'name':
      valueLength = Math.ceil(Math.random() * 10);
      for (var _idIndex = 0; _idIndex < valueLength; _idIndex++) {
        randomNumber = Math.floor(Math.random() * random_name.length);
        value += random_name.split('')[randomNumber];
      };
      break;
  };
  return value;
};

var ServerAPI = function () {
  var initData = function initData() {
    serverData = [];
    // random data instead of 'fetch' data
    var dataTemp = void 0;
    for (var i = 0; i < DATAMEMBERS; i++) {
      dataTemp = new DataObj();
      dataTemp['ID'] = randomData('id', serverData);
      dataTemp['name'] = randomData('name');
      serverData.push(dataTemp);
    };
    return serverData;
  };
  var getData = function getData() {
    return serverData;
  };
  var addData = function addData(obj) {
    var dataTemp = new DataObj();
    dataTemp['ID'] = randomData('id', serverData);
    dataTemp['name'] = obj['name'];
    serverData.push(dataTemp);
    return serverData;
  };
  var deleteData = function deleteData(obj) {
    for (var i = 0; i < serverData.length; i++) {
      if (obj['ID'] == serverData[i].ID) {
        serverData.splice(i, 1);
        break;
      };
    };
    return serverData;
  };
  return {
    'initData': initData,
    'getData': getData,
    'addData': addData,
    'deleteData': deleteData
  };
}();

exports.default = ServerAPI;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _routeList = __webpack_require__(28);

var _routeList2 = _interopRequireDefault(_routeList);

var _history = __webpack_require__(29);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _redirectHandler = function _redirectHandler(index) {
  _history2.default.push(_routeList2.default[index]);
  window.scrollTo(0, 0);
};

var ArticleRedirecter = function ArticleRedirecter(props) {
  var content = [];
  props.className = 'btb-articleRedirectBtn ' + (props.className ? props.className : '');
  content.push(_react2.default.createElement(
    'div',
    _extends({ onClick: function onClick() {
        _redirectHandler(props.redirectTo);
      } }, props),
    _react2.default.createElement(_reactFontawesome2.default, { name: 'arrow-left', fixedWidth: true }),
    _react2.default.createElement(
      'span',
      null,
      'Back to Articles'
    )
  ));
  return content;
};

exports.default = ArticleRedirecter;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(49);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(52);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(30);



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(132);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* present data in server */
var serverData = {
  'left': new Array(),
  'right': new Array()
};

var DATAMEMBERS = 5;
var random_uId = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var random_name = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function DataObj() {
  this['uId'] = '';
  this['name'] = '';
};

function randomData(type, base) {
  var valueLength = 0;
  var value = '';
  var randomNumber = void 0;
  switch (type) {
    case 'id':
      valueLength = 10;
      for (var idIndex = 0; idIndex < valueLength; idIndex++) {
        randomNumber = Math.floor(Math.random() * random_uId.length);
        value += random_uId.slice(randomNumber, randomNumber + 1);
      };
      if (!checkUidUnique(value, base)) {
        value = randomData('id', base);
      };
      break;
    case 'name':
      valueLength = Math.ceil(Math.random() * 10);
      for (var _idIndex = 0; _idIndex < valueLength; _idIndex++) {
        randomNumber = Math.floor(Math.random() * random_name.length);
        value += random_name.slice(randomNumber, randomNumber + 1);
      };
      break;
  };
  return value;
};
function checkUidUnique(uId, base) {
  for (var baseIndex = 0; baseIndex < base.length; baseIndex++) {
    if (base[baseIndex].uId == uId) {
      // if duplicate uId, random again
      return false;
    };
  };
  return true;
};

var ServerAPI = function () {
  var initData = function initData(type) {
    serverData[type] = [];
    // random data instead of 'fetch' data
    var dataTemp = void 0;
    for (var i = 0; i < DATAMEMBERS; i++) {
      dataTemp = new DataObj();
      dataTemp['uId'] = randomData('id', serverData[type]);
      dataTemp['name'] = randomData('name');
      serverData[type].push(dataTemp);
    };
    return serverData[type];
  };
  var getData = function getData(type) {
    return 'all' == type ? serverData : serverData[type] ? serverData[type] : [];
  };
  var addData = function addData(type, obj) {
    obj['uId'] = randomData('id', serverData[type]);
    serverData[type].push(obj);
    return serverData[type];
  };
  var changeData = function changeData(moveFrom, moveTo, obj) {
    var data = [];
    for (var i = 0; i < serverData[moveFrom].length; i++) {
      if (obj['uId'] == serverData[moveFrom][i].uId) {
        data = serverData[moveFrom].splice(i, 1);
        for (var baseIndex = 0; baseIndex < serverData[moveTo].length; baseIndex++) {
          if (serverData[moveTo][baseIndex].uId == data['value']) {
            // if duplicate uId, random again
            data['value'] = undefined.randomData('id', serverData[moveTo]);
            break;
          }
        };
        serverData[moveTo] = serverData[moveTo].concat(data);
        break;
      };
    };
    return serverData[moveFrom];
  };
  var removeData = function removeData(type, obj) {
    for (var i = 0; i < serverData[type].length; i++) {
      if (obj['uId'] == serverData[type][i].uId) {
        serverData[type].splice(i, 1);
        break;
      };
    };
    return serverData[type];
  };
  return {
    'initData': initData,
    'getData': getData,
    'addData': addData,
    'changeData': changeData,
    'removeData': removeData
  };
}();

exports.default = ServerAPI;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactRouterDom = __webpack_require__(21);

var _dispatcher = __webpack_require__(11);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

__webpack_require__(94);

var _home = __webpack_require__(16);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var content = [];
      content.push(_react2.default.createElement(
        _reactRouterDom.HashRouter,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _home2.default })
      ));
      return content;
    }
  }]);

  return Index;
}(_react.Component);

;

(0, _reactDom.render)(_react2.default.createElement(Index, null), document.getElementById('main'));

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = __webpack_require__(93);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * 
 * @preventMunge
 */



exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = __webpack_require__(34);

var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *         case 'city-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this._callbacks = {};
    this._isDispatching = false;
    this._isHandled = {};
    this._isPending = {};
    this._lastID = 1;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   */

  Dispatcher.prototype.register = function register(callback) {
    var id = _prefix + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   */

  Dispatcher.prototype.unregister = function unregister(id) {
    !this._callbacks[id] ?  false ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
    delete this._callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */

  Dispatcher.prototype.waitFor = function waitFor(ids) {
    !this._isDispatching ?  false ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this._isPending[id]) {
        !this._isHandled[id] ?  false ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
        continue;
      }
      !this._callbacks[id] ?  false ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
      this._invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   */

  Dispatcher.prototype.dispatch = function dispatch(payload) {
    !!this._isDispatching ?  false ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
    this._startDispatching(payload);
    try {
      for (var id in this._callbacks) {
        if (this._isPending[id]) {
          continue;
        }
        this._invokeCallback(id);
      }
    } finally {
      this._stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   */

  Dispatcher.prototype.isDispatching = function isDispatching() {
    return this._isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @internal
   */

  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
    for (var id in this._callbacks) {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    }
    this._pendingPayload = payload;
    this._isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
    delete this._pendingPayload;
    this._isDispatching = false;
  };

  return Dispatcher;
})();

module.exports = Dispatcher;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(97)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(96)(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-family: Arial, 'Times New Roman', Times, serif;\n  font-weight: 100;\n  overflow-x: hidden;\n}\nspan + span {\n  margin-left: 5px;\n}\nbutton {\n  font-size: 14px;\n}\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n.wrapper.wrapper-home {\n  background-color: #fff;\n}\n.wrapper.wrapper-basic,\n.wrapper.wrapper-advance {\n  width: calc(100% - (15px * 2));\n  margin: auto;\n  padding: 15px 15px;\n}\n.linkBtn {\n  cursor: pointer;\n  color: #aaa;\n}\n.linkBtn:hover {\n  color: #000;\n}\n.wrapper .sideContentBG {\n  background-color: #000;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 200px;\n}\n.wrapper .sideContent {\n  width: 200px;\n  background-color: #000;\n  color: #fff;\n  float: left;\n  min-height: 100vh;\n}\n.wrapper .sideContent .header {\n  background-color: #61dafb;\n  margin-bottom: 15px;\n  position: relative;\n  height: 104px;\n}\n.wrapper .sideContent .groupname {\n  background-color: #000;\n  line-height: 20px;\n  text-align: right;\n  padding: 2px 15px;\n}\n.wrapper .sideContent .icon {\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  border-radius: 10px;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  background-color: #000;\n  text-align: center;\n  margin: 15px;\n  font-size: 36px;\n}\n.wrapper .sideContent .icon .fa {\n  vertical-align: middle;\n}\n.wrapper .sideContent .welcome {\n  left: calc(50px + (15px * 2));\n  line-height: 20px;\n  text-align: center;\n  padding: 30px 0;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: #000;\n}\n.wrapper .mainContent {\n  width: calc(100% - 200px);\n  margin-left: 200px;\n  background-color: transparent;\n  min-height: 100vh;\n}\n.btb-exampleLayout.wrapper {\n  display: inline-block;\n  width: unset;\n}\n.btb-exampleLayout.title {\n  font-size: 16px;\n  color: #000;\n  font-weight: 700;\n  margin: 5px 0;\n}\n.btb-exampleLayout.part {\n  margin: 5px;\n}\n.btb-exampleLayout.block {\n  min-width: 150px;\n  vertical-align: top;\n}\n.btb-exampleLayout.inlineBlock {\n  min-width: 150px;\n  vertical-align: top;\n  display: inline-block;\n}\n.btb-exampleLayout.inlineBlock + .inlineBlock {\n  margin-left: 10px;\n}\n.btb-articleLayout.mainTitle {\n  font-size: 30px;\n  font-weight: bold;\n  margin: 30px 15px 0;\n}\n.btb-articleLayout.mainDescription {\n  margin: 0 15px 30px;\n}\n.btb-articleLayout.section {\n  width: 100%;\n  font-size: 14px;\n}\n.btb-articleLayout.section + .btb-articleLayout.section {\n  margin-top: 30px;\n}\n.btb-articleLayout.sectionTitle {\n  color: #aaa;\n  border-bottom: 1px solid #aaa;\n  margin: 0 15px;\n  font-weight: bold;\n}\n.btb-articleLayout.sectionSubtitle {\n  font-weight: bold;\n  margin: 15px 0;\n}\n.btb-articleLayout.content {\n  color: #000;\n  margin: 15px 30px;\n}\n.btb-articleLayout.content-pre {\n  color: #f3f3f3;\n  background-color: #373940;\n  font-family: Consolas, \"Liberation Mono\", Menlo, Monaco, Courier, monospace;\n  margin: 15px 30px;\n  padding: 10px 15px;\n  white-space: pre-wrap;\n}\n.btb-articleLayout.content-item {\n  text-align: center;\n  margin: 15px 30px;\n}\n.btb-articleLayout.notice {\n  color: #aaa;\n  display: inline;\n}\n.btb-articleLayout.buttonGroup {\n  margin: 0 15px;\n}\n.btb-articleRedirectBtn {\n  border: 1px solid #aaa;\n  border-radius: 15px;\n  color: #aaa;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 13px;\n  padding: 3px 5px;\n}\n.btb-articleRedirectBtn:hover {\n  border-color: #000;\n  color: #000;\n}\n.example-userList {\n  padding: 5px;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px 2px #aaa;\n}\n.example-userList .userList-add {\n  margin-top: 10px;\n}\n.example-userList .userList-add .userList-input {\n  border: 2px solid #aaa;\n  border-radius: 5px;\n  font-size: 10px;\n  padding: 2px 10px;\n}\n.example-userList .userList-add .userList-input:focus,\n.example-userList .userList-add .userList-input:hover {\n  border-color: #777;\n}\n.example-userList .userList-add .userList-addButton {\n  color: #aaa;\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  font-size: 15px;\n  margin-left: 5px;\n  padding: 0;\n  vertical-align: top;\n  cursor: pointer;\n}\n.example-userList .userList-add .userList-addButton:hover {\n  color: #ff0000;\n}\n.example-userList .example-block .userList-info {\n  margin-right: 40px;\n}\n.example-userList .userList-list {\n  border: 2px solid #aaa;\n  border-radius: 7px;\n  padding: 0px;\n  margin: 5px 0;\n}\n.example-userList .userList-list .userList-entry {\n  border-radius: 5px;\n  cursor: default;\n  padding: 2px 5px;\n  position: relative;\n  text-align: left;\n  overflow: hidden;\n}\n.example-userList .userList-list .userList-entry .userList-info {\n  margin-right: 40px;\n}\n.example-userList .userList-list .userList-entry .userList-deleteButton {\n  -webkit-transition: opacity 0.5s ease 0s, right 0.5s ease 0s;\n  -moz-transition: opacity 0.5s ease 0s, right 0.5s ease 0s;\n  -o-transition: opacity 0.5s ease 0s, right 0.5s ease 0s;\n  transition: opacity 0.5s ease 0s, right 0.5s ease 0s;\n  color: #ff0000;\n  opacity: 0;\n  position: absolute;\n  right: -20px;\n  top: 3px;\n  cursor: pointer;\n}\n.example-userList .userList-list .userList-entry:hover {\n  background-color: #ccc;\n}\n.example-userList .userList-list .userList-entry:hover .userList-deleteButton {\n  right: 2px;\n  opacity: 1;\n}\n.example-userList .userList-list .userList-entry .userList-moveButton {\n  -webkit-transition: opacity 0.5s ease 0s, right 0.5s ease 0s;\n  -moz-transition: opacity 0.5s ease 0s, right 0.5s ease 0s;\n  -o-transition: opacity 0.5s ease 0s, right 0.5s ease 0s;\n  transition: opacity 0.5s ease 0s, right 0.5s ease 0s;\n  color: #ff0000;\n  opacity: 0;\n  position: absolute;\n  right: -20px;\n  top: 3px;\n  cursor: pointer;\n}\n.example-userList .userList-list .userList-entry:hover {\n  background-color: #ccc;\n}\n.example-userList .userList-list .userList-entry:hover .userList-moveButton {\n  right: 22px;\n  opacity: 1;\n}\n.example-userList .userList-list .userList-entry-empty {\n  list-style: outside none none;\n  text-align: center;\n}\n.btb-menu.menu {\n  color: #fff;\n}\n.btb-menu.menu .layer-item.activeTop {\n  background-color: #373940;\n  border-left: 5px solid #61dafb;\n}\n.btb-menu.menu .layer-item.activeParent > .item-content .content-name {\n  color: #61dafb;\n}\n.btb-menu.menu .layer-item.activeParent > .item-content .collapse-arrow {\n  border-color: #61dafb transparent transparent;\n}\n.btb-menu.menu .layer-item.active > .item-content {\n  background-color: #373940;\n}\n.btb-menu.menu .layer-item.active > .item-content .content-name {\n  color: #61dafb;\n}\n.btb-menu.menu .layer-item.active > .item-content .collapse-arrow {\n  border-color: #61dafb transparent transparent;\n}\n.btb-menu.menu .item-content:hover {\n  background-color: #373940;\n}\n.btb-menu.menu .item-content:hover .content-name {\n  color: #61dafb;\n}\n.btb-menu.menu .item-content:hover .collapse-arrow {\n  border-color: #61dafb transparent transparent;\n}\n.btb-menu.menu .collapse-arrow {\n  border-color: #fff transparent transparent;\n}\n.btb-list.content-nodetree {\n  background-color: #d6e4ff;\n  margin: auto;\n  width: calc(100% - (75px * 2));\n  padding: 15px;\n}\n.btb-table.content-paramlist {\n  margin: auto;\n  width: calc(100% - (60px * 2));\n}\n.btb-table.content-paramlist .table-list {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.btb-table.content-paramlist .tr-th {\n  background-color: #d6e4ff;\n  border: 2px solid #d6e4ff;\n  padding: 2px 15px;\n}\n.btb-table.content-paramlist .tr-td {\n  border: 2px solid #d6e4ff;\n  text-align: center;\n  padding: 2px 15px;\n}\n.btb-table.content-paramlist .td-name,\n.btb-table.content-paramlist .td-notice {\n  text-align: left;\n}\n.btb-table.content-paramlist .content-pre {\n  margin: 5px 0;\n  padding: 5px 15px;\n}\n", ""]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(98);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 98 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 99 */,
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CONTENT_HEIGHT = 30;
var menuThis = void 0;

function MenuInfoObj(obj) {
  var _this = this;

  this['index'] = '';
  this['name'] = '';
  this['children'] = [];
  this['defaultCollapse'] = true;
  Object.keys(obj).map(function (key) {
    _this[key] = obj[key];
  });

  if ('' == this['name']) {
    this['name'] = this['index'];
  };
};

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this2 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this2.env = {
      menuArr: [],
      styleObj: {},
      inputRefFn: function inputRefFn() {},
      acticveIndex: '',
      itemOnClickFn: function itemOnClickFn() {},
      featureCollapsible: {
        enable: false,
        customCollapseButton: '',
        itemOnCollapseFn: function itemOnCollapseFn() {}
      }
    };
    _this2.val = {
      hasFoundActive: false,
      hasFoundActiveTop: false
    };
    _this2.collapseStatusList = {};
    return _this2;
  }

  _createClass(Menu, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateENVFn(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateENVFn(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      this.val.hasFoundActive = false;
      this.val.hasFoundActiveTop = false;
      var content = [];
      var menuArr = this.env.menuArr;
      var nextLayer = 0;
      var itemCount = menuArr.length;
      menuArr.map(function (item) {
        itemCount += _this3.countRecursionFn(item);
      });
      var props_menu = this.createBasicProps('btb-menu');
      if (this.props.className) {
        props_menu.className += ' ' + this.props.className;
      };
      var content_height = parseInt(!this.env.styleObj['item-content'] ? CONTENT_HEIGHT : this.env.styleObj['item-content']['height'] ? this.env.styleObj['item-content']['height'] : this.env.styleObj['item-content']['line-height'] ? this.env.styleObj['item-content']['line-height'] : CONTENT_HEIGHT);
      props_menu.style['height'] = itemCount * content_height;
      var props_layer = this.createBasicProps('menu-layer');
      var layerNextName = 'layer-' + nextLayer;
      props_layer.className += ' ' + layerNextName;
      if (this.env.styleObj[layerNextName]) {
        Object.keys(this.env.styleObj[layerNextName]).map(function (config) {
          props_layer.style[config] = _this3.env.styleObj[layerNextName][config];
        });
      };
      content.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _extends({}, props_menu, { ref: function ref(_ref) {
            _this3._refHandler(_ref);
          } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          props_layer,
          menuArr.map(function (item) {
            var content_menu = [];
            content_menu.push(_this3.menuRenderFn(item, nextLayer));
            return content_menu;
          })
        )
      ));
      return content;
    }
  }, {
    key: 'updateENVFn',
    value: function updateENVFn(source) {
      var _this4 = this;

      this.env = {
        menuArr: [],
        acticveIndex: '',
        styleObj: {},
        itemOnClickFn: function itemOnClickFn() {},
        inputRefFn: function inputRefFn() {},
        featureCollapsible: {
          enable: false,
          customCollapseButton: '',
          itemOnCollapseFn: function itemOnCollapseFn() {}
        }
      };
      var isChanged = source['acticveIndex'] && source['acticveIndex'] != this.env['acticveIndex'] ? true : false;
      Object.keys(source).map(function (entry) {
        switch (entry) {
          case 'featureCollapsible':
            Object.keys(source.featureCollapsible).map(function (collapse_entry) {
              _this4.env.featureCollapsible[collapse_entry] = source.featureCollapsible[collapse_entry];
            });
            break;
          default:
            _this4.env[entry] = source[entry];
            break;
        };
      });
      menuThis = this;

      var menuArr = this.env.menuArr;
      menuArr.map(function (item) {
        var infoObj = new MenuInfoObj(item);
        _this4.initCollapseStautsFn(infoObj);
        if (isChanged) {
          _this4.expandRecursionFn(infoObj);
        }
      });
    }
  }, {
    key: 'initCollapseStautsFn',
    value: function initCollapseStautsFn(source) {
      var infoObj = new MenuInfoObj(source);
      if (0 < infoObj.children.length && 'undefined' == typeof this.collapseStatusList[infoObj.index]) {
        this.collapseStatusList[infoObj.index] = menuThis.env.featureCollapsible.enable ? infoObj.defaultCollapse : false;
      };

      for (var i = 0; i < infoObj.children.length; i++) {
        this.initCollapseStautsFn(infoObj.children[i]);
      };
    }
  }, {
    key: 'createBasicProps',
    value: function createBasicProps(name) {
      var obj = {
        className: name,
        style: this.env.styleObj[name] ? this.env.styleObj[name] : {}
      };
      return obj;
    }
  }, {
    key: 'menuRenderFn',
    value: function menuRenderFn(source, layerCounter) {
      var _this5 = this;

      var infoObj = new MenuInfoObj(source);
      var content = [];
      var isMatch = false;
      var hasChildren = 0 < infoObj.children.length ? true : false;
      var layerPaddingLeft = layerCounter * 15;
      var nextLayer = layerCounter + 1;
      var props_item = this.createBasicProps('layer-item');
      if (!this.val.hasFoundActive) {
        if (this.env.acticveIndex == infoObj.index) {
          props_item.className += ' active';
          this.val.hasFoundActive = true;
          isMatch = true;
        } else {
          if (hasChildren && this.searchRecursionFn(infoObj)) {
            props_item.className += ' activeParent';
            isMatch = true;
          };
        };
        if (isMatch && !this.val.hasFoundActiveTop) {
          props_item.className += ' activeTop';
          this.val.hasFoundActiveTop = true;
        };
      };
      var props_content = this.createBasicProps('item-content');
      props_content.style['padding-left'] = layerPaddingLeft;
      props_content.onClick = function (event) {
        _this5._itemOnClickHandler(event, infoObj);
      };
      var props_name = this.createBasicProps('content-name');
      content.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        props_item,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          props_content,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            props_name,
            infoObj.name
          ),
          function () {
            var content_collapse = [];
            if (hasChildren && _this5.env.featureCollapsible.enable) {
              if ('' == _this5.env.featureCollapsible.customCollapseButton) {
                var props_collapse = _this5.createBasicProps('content-collapse');
                if (_this5.collapseStatusList[infoObj.index]) {
                  props_collapse.className += ' collapsed';
                };
                props_collapse.onClick = function (event) {
                  _this5._itemOnCollapseHandler(event, infoObj);
                };
                var props_arrow = _this5.createBasicProps('collapse-arrow');
                content_collapse.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  props_collapse,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', props_arrow)
                ));
              } else {
                var props_custom_collapse = _this5.createBasicProps('content-custom-collapse');
                if (_this5.collapseStatusList[infoObj.index]) {
                  props_custom_collapse.className += ' collapsed';
                };
                props_custom_collapse.onClick = function (event) {
                  _this5._itemOnCollapseHandler(event, infoObj);
                };
                content_collapse.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  props_custom_collapse,
                  _this5.env.featureCollapsible.customCollapseButton
                ));
              }
            };
            return content_collapse;
          }()
        ),
        function () {
          var content_submenu = [];
          if (hasChildren) {
            var props_submenu = _this5.createBasicProps('item-submenu');
            if (_this5.env.featureCollapsible.enable && _this5.collapseStatusList[infoObj.index]) {
              props_submenu.className += ' collapsed';
            };
            var content_height = parseInt(!_this5.env.styleObj['item-content'] ? CONTENT_HEIGHT : _this5.env.styleObj['item-content']['height'] ? _this5.env.styleObj['item-content']['height'] : _this5.env.styleObj['item-content']['line-height'] ? _this5.env.styleObj['item-content']['line-height'] : CONTENT_HEIGHT);
            props_submenu.style['height'] = _this5.countRecursionFn(infoObj) * content_height;
            var props_layer = _this5.createBasicProps('menu-layer');
            var layerNextName = 'layer-' + nextLayer;
            props_layer.className += ' ' + layerNextName;
            if (_this5.env.styleObj[layerNextName]) {
              Object.keys(_this5.env.styleObj[layerNextName]).map(function (config) {
                props_layer.style[config] = _this5.env.styleObj[layerNextName][config];
              });
            };
            content_submenu.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              props_submenu,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                props_layer,
                infoObj.children.map(function (item) {
                  var content_menu = [];
                  content_menu.push(_this5.menuRenderFn(item, nextLayer));
                  return content_menu;
                })
              )
            ));
          };
          return content_submenu;
        }()
      ));
      return content;
    }
  }, {
    key: 'searchRecursionFn',
    value: function searchRecursionFn(source) {
      var infoObj = new MenuInfoObj(source);
      for (var i = 0; i < infoObj.children.length; i++) {
        if (this.env.acticveIndex == infoObj.children[i].index || this.searchRecursionFn(infoObj.children[i])) {
          return true;
        };
      };
      return false;
    }
  }, {
    key: 'countRecursionFn',
    value: function countRecursionFn(source) {
      var infoObj = new MenuInfoObj(source);
      var count = 0;
      if (!this.collapseStatusList[infoObj.index]) {
        count = infoObj.children.length;
        for (var i = 0; i < infoObj.children.length; i++) {
          count += this.countRecursionFn(infoObj.children[i]);
        };
      };
      return count;
    }
  }, {
    key: 'expandRecursionFn',
    value: function expandRecursionFn(source) {
      var infoObj = new MenuInfoObj(source);
      for (var i = 0; i < infoObj.children.length; i++) {
        if (this.env.acticveIndex == infoObj.children[i].index) {
          this.collapseStatusList[infoObj.index] = false;
          break;
        };
        if (this.searchRecursionFn(infoObj.children[i])) {
          this.collapseStatusList[infoObj.index] = false;
          this.expandRecursionFn(infoObj.children[i]);
        };
      };
    }
  }, {
    key: '_refHandler',
    value: function _refHandler(ref) {
      this.env.inputRefFn(ref);
    }
  }, {
    key: '_itemOnClickHandler',
    value: function _itemOnClickHandler(event, infoObj) {
      if (event.stopPropagation) {
        // standard
        event.stopPropagation();
      } else {
        // IE6-8
        event.cancelBubble = true;
      };
      this.env.acticveIndex = infoObj.index;
      this.env.itemOnClickFn(infoObj);

      if (0 < infoObj.children.length) {
        this.collapseStatusList[infoObj.index] = false;
        infoObj.event = { value: false };
        this.env.featureCollapsible.itemOnCollapseFn(infoObj);
      };
      this.forceUpdate();
    }
  }, {
    key: '_itemOnCollapseHandler',
    value: function _itemOnCollapseHandler(event, infoObj) {
      if (event.stopPropagation) {
        // standard
        event.stopPropagation();
      } else {
        // IE6-8
        event.cancelBubble = true;
      };
      this.collapseStatusList[infoObj.index] = !this.collapseStatusList[infoObj.index];
      infoObj.event = { value: !this.collapseStatusList[infoObj.index] };
      this.env.featureCollapsible.itemOnCollapseFn(infoObj);
      this.forceUpdate();
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

Menu.propTypes = {
  menuArr: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  styleObj: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  inputRefFn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  acticveIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  itemOnClickFn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  featureCollapsible: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

Menu.defaultProps = {
  menuArr: [],
  styleObj: {},
  inputRefFn: function inputRefFn() {},
  acticveIndex: '',
  itemOnClickFn: function itemOnClickFn() {},
  featureCollapsible: {}
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var menuList = new Array({
  'index': 'ABOUT',
  'name': 'About'
}, {
  'index': 'BTB_ATCS',
  'name': 'Articles'
}, {
  'index': 'BTB_DEMO',
  'name': 'Demonstration'
}, {
  'index': 'BTB',
  'name': 'Libraries',
  'children': [{
    'index': 'BTB_LIST',
    'name': 'List',
    'children': [{
      'index': 'BTB_LIST_BASIC',
      'name': 'Basic'
    }, {
      'index': 'BTB_LIST_EXAMPLE',
      'name': 'Example'
    }]
  }, {
    'index': 'BTB_TABLE',
    'name': 'Table',
    'children': [{
      'index': 'BTB_TABLE_BASIC',
      'name': 'Basic'
    }]
  }, {
    'index': 'BTB_MENU',
    'name': 'Menu',
    'children': [{
      'index': 'BTB_MENU_BASIC',
      'name': 'Basic'
    }, {
      'index': 'BTB_MENU_ADV',
      'name': 'Advanced'
    }]
  }]
});

exports.default = menuList;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _articleLayout = __webpack_require__(5);

var _articleLayout2 = _interopRequireDefault(_articleLayout);

var _home = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainTitle = 'About';
var mainDescriptionStr = 'Here to show our sitemap with brief introduction.';

var articlesTitle = 'ARTICLES';
var articlesContent = 'We would list to introduce you some others masterpiece in conceptual. Hope our articles will do help somehow in algorithmic angle. And if you have problem to use them, welcome to contact me. We can figure it out together.';
var demonstrationTitle = 'DEMONSTRATION';
var demonstrationContent = 'The demonstration is this webside actually. It is local-side version, and you can see the source code.';
var libraryTitle = 'LIBRARY LIST';
var libraryContent = 'We express some idea with our library. While to implement a webpage, we tend to more focus on \'definition\' and \'style\' than \'construct\'. It means our library developed on purpose to help you to construct your page on functional part. And you just need to give us your definition of some object, array, string ..., etc, for all you need to show. Then you can spend more time to focus on style page.';

var LibraryList = new Array({ name: 'Blacktbox-list', link: 'BTB_LIST_BASIC' }, { name: 'Blacktbox-table', link: 'BTB_TABLE_BASIC' }, { name: 'Blacktbox-menu', link: 'BTB_MENU_BASIC' });
var ContactList = new Array({ name: 'Email', linkName: 'vannoel0628@gmail.com', href: 'mailto://vannoel0628@gmail.com', FA: 'envelope' }, { name: 'Homepage', linkName: 'blacktoolboxlaboratory.github.io', href: 'https://blacktoolboxlaboratory.github.io', FA: 'home' });

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'wrapper wrapper-basic' },
        _react2.default.createElement(
          _articleLayout2.default.MainTitle,
          null,
          mainTitle
        ),
        _react2.default.createElement(
          _articleLayout2.default.MainDescription,
          null,
          mainDescriptionStr
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            articlesTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              'span',
              null,
              articlesContent
            ),
            _react2.default.createElement(_reactFontawesome2.default, { className: 'linkBtn', onClick: function onClick() {
                _this2._redirectHandler('BTB_ATCS');
              }, name: 'link', fixedWidth: true })
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            demonstrationTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              'span',
              null,
              demonstrationContent
            ),
            _react2.default.createElement(_reactFontawesome2.default, { className: 'linkBtn', onClick: function onClick() {
                _this2._redirectHandler('BTB_DEMO');
              }, name: 'link', fixedWidth: true })
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            libraryTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            libraryContent
          ),
          _react2.default.createElement(
            'ul',
            null,
            LibraryList.map(function (entry) {
              var content_li = [];
              content_li.push(_react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  entry.name
                ),
                _react2.default.createElement(_reactFontawesome2.default, { className: 'linkBtn', onClick: function onClick() {
                    _this2._redirectHandler(entry.link);
                  }, name: 'link', fixedWidth: true })
              ));
              return content_li;
            })
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            'CONTACT ME'
          ),
          _react2.default.createElement(
            'ul',
            null,
            ContactList.map(function (entry) {
              var content_li = [];
              content_li.push(_react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_reactFontawesome2.default, { name: entry.FA, fixedWidth: true }),
                _react2.default.createElement(
                  'span',
                  { style: { 'margin-left': '5px' } },
                  entry.name + ':'
                ),
                _react2.default.createElement(
                  'span',
                  { style: { 'margin-left': '5px' } },
                  _react2.default.createElement(
                    'a',
                    { target: '_blank', href: entry.href },
                    entry.linkName,
                    ' ',
                    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
                  )
                )
              ));
              return content_li;
            })
          )
        )
      );
    }
  }, {
    key: '_redirectHandler',
    value: function _redirectHandler(index) {
      var obj = {
        acticveIndex: index
      };
      (0, _home.SideContent_backdoor)('menuRedirect', obj);
    }
  }]);

  return About;
}(_react.Component);

;

exports.default = About;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _routeList = __webpack_require__(28);

var _routeList2 = _interopRequireDefault(_routeList);

var _history = __webpack_require__(29);

var _history2 = _interopRequireDefault(_history);

var _articleLayout = __webpack_require__(5);

var _articleLayout2 = _interopRequireDefault(_articleLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainTitle = 'Articles';
var mainDescriptionStr = 'There are my articles introducing some knowledge in conceptual.';

var articleListTitle = 'ARTICLE LIST';
var articleListContent = 'We would list to introduce you some others masterpiece in conceptual. Hope our articles will do help somehow in algorithmic angle. And if you have problem to use them, welcome to contact me. We can figure it out together.';

var articleList = new Array({ 'name': 'Flux Introduction', 'link': 'BTB_ATCS_FLUX', 'updated': '2018-05-06' }, { 'name': 'Redux Introduction', 'link': 'BTB_ATCS_REDUX', 'updated': '2018-05-06' });

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'wrapper wrapper-basic' },
        _react2.default.createElement(
          _articleLayout2.default.MainTitle,
          null,
          mainTitle
        ),
        _react2.default.createElement(
          _articleLayout2.default.MainDescription,
          null,
          mainDescriptionStr
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            articleListTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            articleListContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              'ul',
              null,
              articleList.map(function (entry) {
                var content_li = [];
                content_li.push(_react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    entry.name
                  ),
                  _react2.default.createElement(_reactFontawesome2.default, { className: 'linkBtn', onClick: function onClick() {
                      _this2._redirectHandler(entry.link);
                    }, name: 'link', fixedWidth: true }),
                  _react2.default.createElement(
                    _articleLayout2.default.Notice,
                    null,
                    '[UPDATED: ',
                    entry.updated,
                    ']'
                  )
                ));
                return content_li;
              })
            )
          )
        )
      ));
      return content;
    }
  }, {
    key: '_redirectHandler',
    value: function _redirectHandler(index) {
      _history2.default.push(_routeList2.default[index]);
      window.scrollTo(0, 0);
    }
  }]);

  return Index;
}(_react.Component);

;

exports.default = Index;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _blacktboxList = __webpack_require__(12);

var _blacktboxList2 = _interopRequireDefault(_blacktboxList);

var _index = __webpack_require__(105);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(107);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(112);

var _index6 = _interopRequireDefault(_index5);

var _articleFlux = __webpack_require__(116);

var _articleFlux2 = _interopRequireDefault(_articleFlux);

var _articleFlux_server = __webpack_require__(117);

var _articleFlux_server2 = _interopRequireDefault(_articleFlux_server);

var _articleLayout = __webpack_require__(5);

var _articleLayout2 = _interopRequireDefault(_articleLayout);

var _articleRedirecter = __webpack_require__(47);

var _articleRedirecter2 = _interopRequireDefault(_articleRedirecter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainTitle = 'Flux Introduction';
var mainDescriptionStr = 'Conceptual introduction and simple example';

var introductionTitle = 'INTRODUCTION';
var introductionContent = _react2.default.createElement(
  'span',
  null,
  'In this article, we are going to talk about ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://www.npmjs.com/package/flux' },
    'Flux',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '. If you need more clear example about learning Flux. The other article ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture' },
    'Getting To Know Flux, the React.js Architecture',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  ' may be more suitable.'
);

var introductionExampleTitle = 'Example';
var introductionExampleContent = _react2.default.createElement(
  'span',
  null,
  'The following shown is a user list. It is the example with our discussion to Flux. And here is source code of ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleFlux/example' },
    'example',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '.'
);
var introductionExampleAlgorithmDescription = _react2.default.createElement(
  'span',
  null,
  'To implement the User List. Basically we need three factors: render(View), data(Store), access handler(Action). It is quite easy to implement it by coding them all together. However in systemic angle, if we want to separate them to keep system construction defined and used clear(to unify or generalize), we may need to use some framework to let system keep clear like Flux. And next, we will show it in Flux way. Comparing my ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleFlux/exampleFlux' },
    'Flux\'s example',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  ', I simplify the source code for more focus on the construction and add some notation, like this:'
);

var introductionFluxTitle = 'Flux';
var introductionFluxContent = 'In original, we can trigger rerender easy while coding all factors in one-file. But while they are separated to files, we will need the  "Dispatch and Listen". And here is the picture of Flux\'s relationship.';
var introductionFluxAlgorithmDescription = 'To implement the example in Flux. We need to install some packages:';

var introductionFluxViewTitle = 'View';
var introductionFluxViewContent = 'View have to get a new dispatcher, be listened by Store and add Action for used.';
var introductionFluxActionTitle = 'Action';
var introductionFluxActionContent = 'In Action, we just define each Action type correspond to dispatch event.';
var introductionFluxDispatcherTitle = 'Dispatcher';
var introductionFluxDispatcherContent = 'The only one thing Dispatcher need to do is create a new Dispatcher.';
var introductionFluxStoreTitle = 'Store';
var introductionFluxStoreContent = 'Store have two part. To create Store\'s emitter by merge events.EventEmitter, and let dispatch er regist event meanwhile define what each event needs to access to Store.';

var productionTitle = 'PRODUCTION';
var productionContent = 'Here we go! This is the example in Flux version.';

var advancedTitle = 'ADVANCED';
var advancedContent = 'The more usual case. What if our data is coming from server and where should we add server API in the Flux flow? To keep the rule of Flux framework. We use APIs to access server\'s data before Action. However why it is not added duing Store? Think the definition of "What the data actually is for Flux?". Here in Flux, the data means View\'s data, not the server\'s data. So that, we allowed to access server\'s data directly, then Store will get data from server. The following picture is the flow of Flux with server API.';
var advancedServerContent = _react2.default.createElement(
  'span',
  null,
  'Then, here is the User List work with server API. And also here is the source code of ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleFlux/exampleFlux_server' },
    'Flux\'s example with server',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  )
);

var noticeTitle = 'NOTICE';
var noticeContent = 'It has a notice here about many repositories in used. In this page, we have two repositories: exampleFlux and exampleFlux_server. There are two things need to be cautioned:';

var EXAMPLE_BASIC_ALGORITHM = '<!-- Require or Import what you need -->\n\n<!-- Start: Define the component of User list -->\nclass Example extends Component {\n  constructor (props) {\n    super(props);\n    this.dataList = new Array();\n  };\n  componentDidMount () {\n    /* [Store]: Fetch data */\n    this.fetchData();\n  };\n\n  /* [View]: Render component */\n  render () {...};\n  \n  /* [Action]: Actions to access Store */\n  _addHandler () {};\n  _removeHandler () {};\n};\n<!-- End: Define the component of User list -->\n\n<!-- Export component -->\n';
var EXAMPLE_FLUX_INSTALL = '$ npm install --save flux\n$ npm install --save merge\n';
var EXAMPLE_FLUX_VIEW = '<!-- Require or Import what you need -->\nimport ExampleDispatcher from \'../dispatchers/exampleDispatcher.js\';\nimport ExampleStore from \'../stores/exampleStore.js\';\nimport ExampleAction from \'../actions/exampleAction.js\';\n\n<!-- Start: Define the component of User list -->\nclass ExampleFlux extends Component {\n  constructor (props) {\n    super(props);\n    this.dataList = new Array();\n  };\n  /* [Store] add listen  */\n  componentDidMount () {\n    ExampleStore.addChangeListener(this.refresh);\n    this.fetchData();\n  };\n  /* [Store] remove listen  */\n  componentWillUnmount () {\n    ExampleStore.removeChangeListener(this.refresh);\n  };\n  render () {...};\n\n  /* [Action]: trigger action to access Store */\n  _addHandler () {};\n  _removeHandler () {};\n};\n<!-- End: Define the component of User list -->\n\n<!-- Export component -->\n';
var EXAMPLE_FLUX_ACTION = '<!-- Require or Import what you need -->\nimport ExampleDispatcher from \'../dispatchers/exampleDispatcher.js\';\n\n/* [Dispatcher] dispatch data to store  */\nconst ExampleAction = {\n  fetch: (userList)=>{\n    ExampleDispatcher.dispatch({\n      actionType: \'fetch\',\n      userList: userList\n    });\n  },\n  add: (userName)=>{\n    ExampleDispatcher.dispatch({\n      actionType: \'add\',\n      userName: userName\n    });\n  },\n  remove: (userId)=>{\n    ExampleDispatcher.dispatch({\n      actionType: \'remove\',\n      userId: userId\n    });\n  }\n};\n<!-- Export component -->\n';
var EXAMPLE_FLUX_DISPATCHER = 'import { Dispatcher } from \'flux\';\nlet ExampleDispatcher = new Dispatcher();\nexport default ExampleDispatcher;\n';
var EXAMPLE_FLUX_STORE = '<!-- Require or Import what you need -->\nimport Merge from \'merge\';\nimport { EventEmitter } from \'events\';\n\nimport ExampleDispatcher from \'../dispatchers/exampleDispatcher.js\';\n\n/* [Store]] store data */\nlet dataList = new Array();\n\n/* [Store]] create event id and merge store event to emitter */\nconst EXAMPLE_EVENT_ID = \'example_change\';\nconst ExampleStore = Merge(EventEmitter.prototype,{\n  /* Here, the function must be unique. */\n  getData: function(){\n\t\treturn dataList;\n\t},\n  emitChange: function () {\n    this.emit(EXAMPLE_EVENT_ID);\n  },\n  addChangeListener: function (callback) {\n    this.on(EXAMPLE_EVENT_ID, callback);\n  },\n  removeChangeListener: function (callback) {\n    this.removeListener(EXAMPLE_EVENT_ID, callback);\n  }\n});\n\n/* [Dispatcher] regist event */\nExampleDispatcher.register((event)=>{\n  switch(event.actionType) \n  {\n    case \'fetch\':\n      ...\n      ExampleStore.emitChange();\n      break;\n    case \'add\':\n      ...\n      ExampleStore.emitChange();\n      break;\n    case \'remove\':\n      ...\n      ExampleStore.emitChange();\n      break;\n  }\n});\n<!-- Export component -->\n';

var NOTICE = new Array({ 'name': 'Dispatcher is unique: In our webside, Dispatcher in at /assets, and it imported in first time at index.js.' }, { 'name': 'All Stores\' event functions must named uniquely: Cause all stores use the same EventEmitter, they need to named their event function differently.' });

var Index = function Index(props) {
  var content = [];
  content.push(_react2.default.createElement(
    'div',
    { className: 'wrapper wrapper-basic' },
    _react2.default.createElement(
      _articleLayout2.default.MainTitle,
      null,
      mainTitle
    ),
    _react2.default.createElement(
      _articleLayout2.default.MainDescription,
      null,
      mainDescriptionStr
    ),
    _react2.default.createElement(
      _articleLayout2.default.Section,
      null,
      _react2.default.createElement(
        _articleLayout2.default.SectionTitle,
        null,
        introductionTitle
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        introductionContent
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        _react2.default.createElement(
          _articleLayout2.default.SectionSubtitle,
          null,
          introductionExampleTitle
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          introductionExampleContent
        ),
        _react2.default.createElement(
          _articleLayout2.default.Item,
          null,
          _react2.default.createElement(_index2.default, null)
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          introductionExampleAlgorithmDescription
        ),
        _react2.default.createElement(
          _articleLayout2.default.Pre,
          null,
          EXAMPLE_BASIC_ALGORITHM
        )
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        _react2.default.createElement(
          _articleLayout2.default.SectionSubtitle,
          null,
          introductionFluxTitle
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          introductionFluxContent
        ),
        _react2.default.createElement(
          _articleLayout2.default.Item,
          null,
          _react2.default.createElement('img', { src: _articleFlux2.default })
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          introductionFluxAlgorithmDescription
        ),
        _react2.default.createElement(
          _articleLayout2.default.Pre,
          null,
          EXAMPLE_FLUX_INSTALL
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionSubtitle,
            null,
            introductionFluxViewTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            introductionFluxViewContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Pre,
            null,
            EXAMPLE_FLUX_VIEW
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionSubtitle,
            null,
            introductionFluxActionTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            introductionFluxActionContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Pre,
            null,
            EXAMPLE_FLUX_ACTION
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionSubtitle,
            null,
            introductionFluxDispatcherTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            introductionFluxDispatcherContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Pre,
            null,
            EXAMPLE_FLUX_DISPATCHER
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionSubtitle,
            null,
            introductionFluxStoreTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            introductionFluxStoreContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Pre,
            null,
            EXAMPLE_FLUX_STORE
          )
        )
      )
    ),
    _react2.default.createElement(
      _articleLayout2.default.Section,
      null,
      _react2.default.createElement(
        _articleLayout2.default.SectionTitle,
        null,
        productionTitle
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        productionContent
      ),
      _react2.default.createElement(
        _articleLayout2.default.Item,
        null,
        _react2.default.createElement(_index4.default, null)
      )
    ),
    _react2.default.createElement(
      _articleLayout2.default.Section,
      null,
      _react2.default.createElement(
        _articleLayout2.default.SectionTitle,
        null,
        advancedTitle
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        advancedContent
      ),
      _react2.default.createElement(
        _articleLayout2.default.Item,
        null,
        _react2.default.createElement('img', { src: _articleFlux_server2.default })
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        advancedServerContent
      ),
      _react2.default.createElement(
        _articleLayout2.default.Item,
        null,
        _react2.default.createElement(_index6.default, null)
      )
    ),
    _react2.default.createElement(
      _articleLayout2.default.Section,
      null,
      _react2.default.createElement(
        _articleLayout2.default.SectionTitle,
        null,
        noticeTitle
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        noticeContent
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        _react2.default.createElement(_blacktboxList2.default, {
          STYLE: {
            'margin': 'auto',
            'padding': '15px',
            'width': 'calc(100% - 75px * 2)'
          },
          listArr: NOTICE
        })
      )
    ),
    _react2.default.createElement(
      _articleLayout2.default.Section,
      null,
      _react2.default.createElement(
        _articleLayout2.default.BtnGroup,
        null,
        _react2.default.createElement(
          _articleLayout2.default.Btn,
          null,
          _react2.default.createElement(_articleRedirecter2.default, { redirectTo: 'BTB_ATCS' })
        )
      )
    )
  ));
  return content;
};

exports.default = Index;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(106);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var content = [];
      content.push(_react2.default.createElement(_app2.default, null));
      return content;
    }
  }]);

  return Index;
}(_react.Component);

;

exports.default = Index;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _exampleLayout = __webpack_require__(7);

var _exampleLayout2 = _interopRequireDefault(_exampleLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// definitions
function DataObj() {
  this['uId'] = '';
  this['name'] = '';
};
var DATAMEMBERS = 5;
var random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';
var random_name = 'abcdefghijklmnopqrstuvwxyz';

var Example = function (_Component) {
  _inherits(Example, _Component);

  function Example(props) {
    _classCallCheck(this, Example);

    var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

    _this.dataList = new Array();
    return _this;
  }

  _createClass(Example, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
        _exampleLayout2.default.Wrapper,
        { className: 'example-userList' },
        _react2.default.createElement(
          _exampleLayout2.default.Part,
          null,
          _react2.default.createElement(
            _exampleLayout2.default.Title,
            null,
            'Example'
          )
        ),
        _react2.default.createElement(
          _exampleLayout2.default.Part,
          null,
          _react2.default.createElement(
            _exampleLayout2.default.Block,
            null,
            _react2.default.createElement(
              'div',
              { className: 'userList-add' },
              _react2.default.createElement('input', { className: 'userList-input', type: 'text', maxLength: '10', ref: 'userName', placeholder: 'Enter 1-10 character(s).' }),
              _react2.default.createElement(
                'button',
                { className: 'userList-addButton', onClick: function onClick() {
                    _this2._addHandler();
                  } },
                _react2.default.createElement(_reactFontawesome2.default, { name: 'plus-square', fixedWidth: true })
              )
            )
          ),
          _react2.default.createElement(
            _exampleLayout2.default.Block,
            null,
            _react2.default.createElement(
              'ul',
              { className: 'userList-list' },
              0 < this.dataList.length ? this.dataList.map(function (entry) {
                var content_datalist_tr = [];
                content_datalist_tr.push(_react2.default.createElement(
                  'li',
                  { className: 'userList-entry' },
                  _react2.default.createElement(
                    'div',
                    { className: 'userList-info' },
                    entry['name'].substring(0, 1).toUpperCase() + entry['name'].substring(1)
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'userList-deleteButton', onClick: function onClick() {
                        _this2._deleteHandler(entry['uId']);
                      } },
                    _react2.default.createElement(_reactFontawesome2.default, { name: 'trash', fixedWidth: true })
                  )
                ));
                return content_datalist_tr;
              }) : _react2.default.createElement(
                'li',
                { className: 'userList-entry' },
                'No data available.'
              )
            )
          )
        )
      ));
      return content;
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      // random data instead of 'fetch' data
      this.dataList = [];
      var dataTemp = void 0;
      for (var i = 0; i < DATAMEMBERS; i++) {
        dataTemp = new DataObj();
        dataTemp['uId'] = this.randomData('id', this.dataList);
        dataTemp['name'] = this.randomData('name');
        this.dataList.push(dataTemp);
      };
      this.forceUpdate();
    }
  }, {
    key: 'randomData',
    value: function randomData(type, base) {
      var valueLength = 0;
      var value = '';
      var randomNumber = void 0;
      switch (type) {
        case 'id':
          valueLength = 10;
          for (var idIndex = 0; idIndex < valueLength; idIndex++) {
            randomNumber = Math.floor(Math.random() * random_uId.length);
            value += random_uId.split('')[randomNumber];
          };
          for (var baseIndex = 0; baseIndex < base.length; baseIndex++) {
            if (base[baseIndex].uId == value) {
              // if duplicate uId, random again
              value = this.randomData('id', base);
              break;
            }
          };
          break;
        case 'name':
          valueLength = Math.ceil(Math.random() * 10);
          for (var _idIndex = 0; _idIndex < valueLength; _idIndex++) {
            randomNumber = Math.floor(Math.random() * random_name.length);
            value += random_name.split('')[randomNumber];
          };
          break;
      };
      return value;
    }
  }, {
    key: '_addHandler',
    value: function _addHandler() {
      var name = _reactDom2.default.findDOMNode(this.refs['userName']).value.trim();
      if ('' == name) {
        alert('Input is empty.');
        return;
      };
      if (DATAMEMBERS <= this.dataList.length) {
        alert('User is full.');
        return;
      };
      var dataTemp = new DataObj();
      dataTemp['uId'] = this.randomData('id', this.dataList);
      dataTemp['name'] = name;
      this.dataList.push(dataTemp);
      _reactDom2.default.findDOMNode(this.refs['userName']).value = '';
      this.forceUpdate();
    }
  }, {
    key: '_deleteHandler',
    value: function _deleteHandler(uId) {
      for (var i = 0; i < this.dataList.length; i++) {
        if (uId == this.dataList[i].uId) {
          this.dataList.splice(i, 1);
          break;
        };
      };
      this.forceUpdate();
    }
  }]);

  return Example;
}(_react.Component);

;

exports.default = Example;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(108);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index(props) {
  var content = [];
  content.push(_react2.default.createElement(_app2.default, null));
  return content;
};

exports.default = Index;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _exampleLayout = __webpack_require__(7);

var _exampleLayout2 = _interopRequireDefault(_exampleLayout);

var _action = __webpack_require__(109);

var _action2 = _interopRequireDefault(_action);

var _store = __webpack_require__(110);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* In our webside we import it in first time at index.js */
// import Dispatcher from '../../../../assets/dispatcher.js';


/* Definitions */
var DATAMEMBERS = 5;

var ExampleThis;

var Example = function (_Component) {
  _inherits(Example, _Component);

  function Example(props) {
    _classCallCheck(this, Example);

    var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

    _this.dataList = new Array();
    return _this;
  }

  _createClass(Example, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      ExampleThis = this;
      _store2.default.exampleFlux_addChangeListener(this.refresh);
      this.fetchData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _store2.default.exampleFlux_removeChangeListener(this.refresh);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
        _exampleLayout2.default.Wrapper,
        { className: 'example-userList' },
        _react2.default.createElement(
          _exampleLayout2.default.Part,
          null,
          _react2.default.createElement(
            _exampleLayout2.default.Title,
            null,
            'Example - Flux'
          )
        ),
        _react2.default.createElement(
          _exampleLayout2.default.Part,
          null,
          _react2.default.createElement(
            _exampleLayout2.default.Block,
            null,
            _react2.default.createElement(
              'div',
              { className: 'userList-add' },
              _react2.default.createElement('input', { className: 'userList-input', type: 'text', maxLength: '10', ref: 'userName', placeholder: 'Enter 1-10 character(s).' }),
              _react2.default.createElement(
                'button',
                { className: 'userList-addButton', onClick: function onClick() {
                    _this2._addHandler();
                  } },
                _react2.default.createElement(_reactFontawesome2.default, { name: 'plus-square', fixedWidth: true })
              )
            )
          ),
          _react2.default.createElement(
            _exampleLayout2.default.Block,
            null,
            _react2.default.createElement(
              'ul',
              { className: 'userList-list' },
              0 < this.dataList.length ? this.dataList.map(function (entry) {
                var content_datalist_tr = [];
                content_datalist_tr.push(_react2.default.createElement(
                  'li',
                  { className: 'userList-entry' },
                  _react2.default.createElement(
                    'div',
                    { className: 'userList-info' },
                    entry['name'].substring(0, 1).toUpperCase() + entry['name'].substring(1)
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'userList-deleteButton', onClick: function onClick() {
                        _this2._deleteHandler(entry['ID']);
                      } },
                    _react2.default.createElement(_reactFontawesome2.default, { name: 'trash', fixedWidth: true })
                  )
                ));
                return content_datalist_tr;
              }) : _react2.default.createElement(
                'li',
                { className: 'userList-entry' },
                'No data available.'
              )
            )
          )
        )
      ));
      return content;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      ExampleThis.dataList = _store2.default.exampleFlux_getData();
      ExampleThis.forceUpdate();
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      _action2.default.fetch();
    }
  }, {
    key: '_addHandler',
    value: function _addHandler() {
      var newUser = _reactDom2.default.findDOMNode(this.refs['userName']).value.trim();
      if ('' == newUser) {
        alert('Input is empty.');
        return;
      };
      _reactDom2.default.findDOMNode(this.refs['userName']).value = '';
      _action2.default.add(newUser);
    }
  }, {
    key: '_deleteHandler',
    value: function _deleteHandler(deleteID) {
      _action2.default.remove(deleteID);
    }
  }]);

  return Example;
}(_react.Component);

;

exports.default = Example;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dispatcher = __webpack_require__(11);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dispatch data to store
var Action = {
  'fetch': function fetch() {
    _dispatcher2.default.dispatch({
      'actionType': 'flux_fetch'
    });
  },
  'add': function add(userName) {
    _dispatcher2.default.dispatch({
      'actionType': 'flux_add',
      'userName': userName
    });
  },
  'remove': function remove(userID) {
    _dispatcher2.default.dispatch({
      'actionType': 'flux_remove',
      'userID': userID
    });
  }
};

exports.default = Action;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = __webpack_require__(44);

var _merge2 = _interopRequireDefault(_merge);

var _events = __webpack_require__(45);

var _dispatcher = __webpack_require__(11);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* example data */
var serverDataList = new Array();
var dataList = new Array();

/* Definitions */
var DATAMEMBERS = 5;
var random_ID = 'abcdefghijklmnopqrstuvwxyz0123456789';
var random_name = 'abcdefghijklmnopqrstuvwxyz';

function DataObj() {
  this['ID'] = '';
  this['name'] = '';
};
function randomData(type, base) {
  var valueLength = 0;
  var value = '';
  var randomNumber = void 0;
  switch (type) {
    case 'id':
      valueLength = 10;
      for (var idIndex = 0; idIndex < valueLength; idIndex++) {
        randomNumber = Math.floor(Math.random() * random_ID.length);
        value += random_ID.split('')[randomNumber];
      }
      for (var baseIndex = 0; baseIndex < baseIndex.length; baseIndex++) {
        if (baseIndex[baseIndex].ID == value) {
          // duplicate ID, and random again
          value = this.randomData('id', base);
          break;
        }
      }
      break;
    case 'name':
      valueLength = Math.ceil(Math.random() * 10);
      for (var _idIndex = 0; _idIndex < valueLength; _idIndex++) {
        randomNumber = Math.floor(Math.random() * random_name.length);
        value += random_name.split('')[randomNumber];
      }
      break;
  }
  return value;
};

/* example event listener id */
var EXAMPLE_EVENT_ID = 'exampleFlux';

/* store emitter */
var ExampleStore = (0, _merge2.default)(_events.EventEmitter.prototype, {
  exampleFlux_getData: function exampleFlux_getData() {
    return dataList;
  },
  exampleFlux_emitChange: function exampleFlux_emitChange() {
    this.emit(EXAMPLE_EVENT_ID);
  },
  exampleFlux_addChangeListener: function exampleFlux_addChangeListener(callback) {
    this.on(EXAMPLE_EVENT_ID, callback);
  },
  exampleFlux_removeChangeListener: function exampleFlux_removeChangeListener(callback) {
    this.removeListener(EXAMPLE_EVENT_ID, callback);
  }
});

/* regist event to dispatcher */
_dispatcher2.default.register(function (event) {
  switch (event.actionType) {
    case 'flux_fetch':
      // if data is empty, init data
      if (0 == serverDataList.length) {
        var _dataTemp = void 0;
        for (var i = 0; i < DATAMEMBERS; i++) {
          _dataTemp = new DataObj();
          _dataTemp['ID'] = randomData('id', dataList);
          _dataTemp['name'] = randomData('name');
          serverDataList.push(_dataTemp);
        };
      };
      dataList = serverDataList.slice(0);
      ExampleStore.exampleFlux_emitChange();
      break;
    case 'flux_add':
      if (DATAMEMBERS <= dataList.length) {
        alert('User is full.');
        return;
      };
      var dataTemp = new DataObj();
      dataTemp['ID'] = randomData('id', dataList);
      dataTemp['name'] = event['userName'];
      dataList.push(dataTemp);
      ExampleStore.exampleFlux_emitChange();
      break;
    case 'flux_remove':
      for (var _i = 0; _i < dataList.length; _i++) {
        if (event['userID'] == dataList[_i].ID) {
          dataList.splice(_i, 1);
          break;
        };
      };
      ExampleStore.exampleFlux_emitChange();
      break;
  }
});

exports.default = ExampleStore;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(113);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index(props) {
  var content = [];
  content.push(_react2.default.createElement(_app2.default, null));
  return content;
};

exports.default = Index;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _exampleLayout = __webpack_require__(7);

var _exampleLayout2 = _interopRequireDefault(_exampleLayout);

var _serverAPI = __webpack_require__(46);

var _serverAPI2 = _interopRequireDefault(_serverAPI);

var _action = __webpack_require__(114);

var _action2 = _interopRequireDefault(_action);

var _store = __webpack_require__(115);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* In our webside we import it in first time at index.js */
// import Dispatcher from '../../../../assets/dispatcher.js';


/* Definitions */
var DATAMEMBERS = 5;

var ExampleThis;

var Example = function (_Component) {
  _inherits(Example, _Component);

  function Example(props) {
    _classCallCheck(this, Example);

    var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

    _this.dataList = new Array();
    return _this;
  }

  _createClass(Example, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      ExampleThis = this;
      _store2.default.exampleFlux_server_addChangeListener(this.refresh);
      this.fetchData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _store2.default.exampleFlux_server_removeChangeListener(this.refresh);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
        _exampleLayout2.default.Wrapper,
        { className: 'example-userList' },
        _react2.default.createElement(
          _exampleLayout2.default.Part,
          null,
          _react2.default.createElement(
            _exampleLayout2.default.Title,
            null,
            'Example - Flux with server'
          )
        ),
        _react2.default.createElement(
          _exampleLayout2.default.Part,
          null,
          _react2.default.createElement(
            _exampleLayout2.default.Block,
            null,
            _react2.default.createElement(
              'div',
              { className: 'userList-add' },
              _react2.default.createElement('input', { className: 'userList-input', type: 'text', maxLength: '10', ref: 'userName', placeholder: 'Enter 1-10 character(s).' }),
              _react2.default.createElement(
                'button',
                { className: 'userList-addButton', onClick: function onClick() {
                    _this2._addHandler();
                  } },
                _react2.default.createElement(_reactFontawesome2.default, { name: 'plus-square', fixedWidth: true })
              )
            )
          ),
          _react2.default.createElement(
            _exampleLayout2.default.Block,
            null,
            _react2.default.createElement(
              'ul',
              { className: 'userList-list' },
              0 < this.dataList.length ? this.dataList.map(function (entry) {
                var content_datalist_tr = [];
                content_datalist_tr.push(_react2.default.createElement(
                  'li',
                  { className: 'userList-entry' },
                  _react2.default.createElement(
                    'div',
                    { className: 'userList-info' },
                    entry['name'].substring(0, 1).toUpperCase() + entry['name'].substring(1)
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'userList-deleteButton', onClick: function onClick() {
                        _this2._deleteHandler(entry['ID']);
                      } },
                    _react2.default.createElement(_reactFontawesome2.default, { name: 'trash', fixedWidth: true })
                  )
                ));
                return content_datalist_tr;
              }) : _react2.default.createElement(
                'li',
                { className: 'userList-entry' },
                'No data available.'
              )
            )
          )
        )
      ));
      return content;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      ExampleThis.dataList = _store2.default.exampleFlux_server_getData();
      ExampleThis.forceUpdate();
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      _action2.default.fetch();
    }
  }, {
    key: '_addHandler',
    value: function _addHandler() {
      var newUser = _reactDom2.default.findDOMNode(this.refs['userName']).value.trim();
      if ('' == newUser) {
        alert('Input is empty.');
        return;
      };
      if (DATAMEMBERS <= this.dataList.length) {
        alert('User is full.');
        return;
      };
      _reactDom2.default.findDOMNode(this.refs['userName']).value = '';
      _action2.default.add(newUser);
    }
  }, {
    key: '_deleteHandler',
    value: function _deleteHandler(deleteID) {
      _action2.default.remove(deleteID);
    }
  }]);

  return Example;
}(_react.Component);

;

exports.default = Example;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dispatcher = __webpack_require__(11);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dispatch data to store
var Action = {
  'fetch': function fetch() {
    _dispatcher2.default.dispatch({
      'actionType': 'fluxServer_fetch'
    });
  },
  'add': function add(userName) {
    _dispatcher2.default.dispatch({
      'actionType': 'fluxServer_add',
      'userName': userName
    });
  },
  'remove': function remove(userID) {
    _dispatcher2.default.dispatch({
      'actionType': 'fluxServer_remove',
      'userID': userID
    });
  }
};

exports.default = Action;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = __webpack_require__(44);

var _merge2 = _interopRequireDefault(_merge);

var _events = __webpack_require__(45);

var _serverAPI = __webpack_require__(46);

var _serverAPI2 = _interopRequireDefault(_serverAPI);

var _dispatcher = __webpack_require__(11);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* example data */
var serverDataList = new Array();
var dataList = new Array();

/* Definitions */
var DATAMEMBERS = 5;
var random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';
var random_name = 'abcdefghijklmnopqrstuvwxyz';

function DataObj() {
  this['ID'] = '';
  this['name'] = '';
};
function randomData(type, base) {
  var valueLength = 0;
  var value = '';
  var randomNumber = void 0;
  switch (type) {
    case 'id':
      valueLength = 10;
      for (var idIndex = 0; idIndex < valueLength; idIndex++) {
        randomNumber = Math.floor(Math.random() * random_uId.length);
        value += random_uId.split('')[randomNumber];
      }
      for (var baseIndex = 0; baseIndex < baseIndex.length; baseIndex++) {
        if (baseIndex[baseIndex].ID == value) {
          // duplicate ID, and random again
          value = this.randomData('id', base);
          break;
        }
      }
      break;
    case 'name':
      valueLength = Math.ceil(Math.random() * 10);
      for (var _idIndex = 0; _idIndex < valueLength; _idIndex++) {
        randomNumber = Math.floor(Math.random() * random_name.length);
        value += random_name.split('')[randomNumber];
      }
      break;
  }
  return value;
};

/* example event listener id */
var EXAMPLE_EVENT_ID = 'exampleFlux_server';

/* store emitter */
var ExampleStore = (0, _merge2.default)(_events.EventEmitter.prototype, {
  exampleFlux_server_getData: function exampleFlux_server_getData() {
    return dataList;
  },
  exampleFlux_server_emitChange: function exampleFlux_server_emitChange() {
    this.emit(EXAMPLE_EVENT_ID);
  },
  exampleFlux_server_addChangeListener: function exampleFlux_server_addChangeListener(callback) {
    this.on(EXAMPLE_EVENT_ID, callback);
  },
  exampleFlux_server_removeChangeListener: function exampleFlux_server_removeChangeListener(callback) {
    this.removeListener(EXAMPLE_EVENT_ID, callback);
  }
});

/* regist event to dispatcher */
_dispatcher2.default.register(function (event) {
  var obj = void 0;
  switch (event.actionType) {
    case 'fluxServer_fetch':
      // if data is empty, init data
      if (0 == serverDataList.length) {
        serverDataList = _serverAPI2.default.initData();
      } else {
        serverDataList = _serverAPI2.default.getData();
      };
      dataList = serverDataList;
      ExampleStore.exampleFlux_server_emitChange();
      break;
    case 'fluxServer_add':
      obj = new DataObj();
      obj['name'] = event['userName'];
      if (DATAMEMBERS <= dataList.length) {
        alert('User is full.');
        break;
      };
      dataList = _serverAPI2.default.addData(obj);
      ExampleStore.exampleFlux_server_emitChange();
      break;
    case 'fluxServer_remove':
      obj = new DataObj();
      obj['ID'] = event['userID'];
      dataList = _serverAPI2.default.deleteData(obj);
      ExampleStore.exampleFlux_server_emitChange();
      break;
  }
});

exports.default = ExampleStore;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/articleFlux.png";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/articleFlux_server.png";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _index = __webpack_require__(119);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(121);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(153);

var _index6 = _interopRequireDefault(_index5);

var _articleRedux = __webpack_require__(164);

var _articleRedux2 = _interopRequireDefault(_articleRedux);

var _articleRedux_server = __webpack_require__(165);

var _articleRedux_server2 = _interopRequireDefault(_articleRedux_server);

var _articleLayout = __webpack_require__(5);

var _articleLayout2 = _interopRequireDefault(_articleLayout);

var _articleRedirecter = __webpack_require__(47);

var _articleRedirecter2 = _interopRequireDefault(_articleRedirecter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainTitle = 'Redux Introduction';
var mainDescriptionStr = 'Conceptual introduction and simple example';

var introductionTitle = 'INTRODUCTION';
var introductionContent = _react2.default.createElement(
  'span',
  null,
  'After knowing the concept of Flux. We are going to learn the concept of ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://www.npmjs.com/package/redux' },
    'Redux',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  ' and use in our example for practice. My source code of example is ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleRedux/example' },
    'here',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '.'
);

var introductionExampleTitle = 'Example';
var introductionExampleContent = 'For Redux\'s example, I made a little different from Flux\'s.';
var introductionExampleAlgorithmDescription = 'Basically, the code structure is same as original version of Flux\'s. Just made user list into two part: left and right. Actually in this case, we can do mode of left and right by single function. But It is in the purpose to simulate the situation of multiple data. It can be implemented in traditional way as source code. It also can be implemented in Flux way. For what if we take them to two totally different function? That is our next step.';

var introductionReduxTitle = 'Redux';
var introductionReduxContent = 'Here is the picture of Redux\'s relationship.';
var introductionReduxAlgorithmDescription = _react2.default.createElement(
  'span',
  null,
  'To simplify our code base, it also works with ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'index.html#/article/component_presentational_and_container' },
    'Component: Presentational and Container',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '. And to implement the example in Redux. We need to install some packages:'
);

var introductionReduxViewTitle = 'View';
var introductionReduxViewContent = 'About view, it has three type of view contained pure-container, pure-component and mixed-container-and-component. The pure container is for which view will access data, but not rendered with data. And the pure component is for which view will not access data but rendered with data, or it rendered without data but state for necessary. The last type of view is mixed with container and component means the view can access data and rendered with data. Cause the pure component is used usually. We only show you the pure container view and mixed view here.';
var introductionReduxViewContainerTitle = 'Pure-container';
var introductionReduxViewConnectTitle = 'Mixed-container-and-component';
var introductionReduxViewConnectContent = 'To mixed view, First we need to define status and dispatch. Then connect to component to allow component access data.';
var introductionReduxViewConnectContainerTag = 'Container part';
var introductionReduxViewConnectComponentTag = 'Component part';
var introductionReduxActionTitle = 'Action';
var introductionReduxActionContent = 'In Action, we just define each Action type correspond to dispatch event.';
var introductionReduxReducerTitle = 'Reducer';
var introductionReduxReducerContent = 'Cause dispatch and store are accessed by Redux.js. We just need to define reducer. In general used, we need to define lots of reducer, and combine them to gether for redux.js';
var introductionReduxReducerCombinedTitle = 'Combined';
var introductionReduxReducerBranchTitle = 'Branch';

var productionTitle = 'PRODUCTION';
var productionContent = 'Here we go! This is the example in Redux version.';

var advancedTitle = 'ADVANCED';
var advancedContent = 'In Flux\'s, We can update by ourself. However in Redux\'s, we centralize all state in Redux. So that with difference from Flux\'s, we need fetch API beneath reducer. And that is reason why we almost use stateless function both in Container and Component.';
var advancedServerContent = _react2.default.createElement(
  'span',
  null,
  'Then, here is the User List work with server API. And also here is the source code of ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleRedux/exampleRedux_server' },
    'Redux\'s example with server',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  )
);

var EXAMPLE_BASIC_ALGORITHM = '<!-- Require or Import what you need -->\n\n<!-- Start: Define the component of User list -->\nclass Example extends Component {\n  constructor (props) {\n    super(props);\n    this.dataList = new Array();\n  };\n  componentDidMount () {\n    /* [Store]: Fetch data */\n    this.fetchData();\n  };\n\n  /* [View]: Render component */\n  render () {...};\n  \n  /* [Action]: Actions to access Store */\n  _addHandler () {};\n  _moveHandler () {};\n  _removeHandler () {};\n};\n<!-- End: Define the component of User list -->\n\n<!-- Export component -->\n';
var EXAMPLE_REDUX_INSTALL = '$ npm install --save redux\n$ npm install --save react-redux\n';
var EXAMPLE_REDUX_VIEW_CONTAINER = 'import { connect } from \'react-redux\';\n<!-- Require or Import what action.js you need -->\n\nconst Container = ({ dispatch }) => {\n  return ...; /* render */\n};\n\nexport default connect()(Container);\n';
var EXAMPLE_REDUX_VIEW_CONNECT_CONTAINER = '<!-- Require or Import Component -->\n<!-- Require or Import what action.js you need -->\n\nconst mapStateToProps = ( state, ownProps ) => { ... };\nconst mapDispatchToProps = ( dispatch, ownProps ) => { ... };\nconst mergeProps = ( stateProps, dispatchProps, ownProps ) => {...}; /* optional */\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps,\n  mergeProps\n)(Component);\n';
var EXAMPLE_REDUX_VIEW_CONNECT_COMPONENT = 'import React from \'react\';\n<!-- Require or Import what you need -->\n\nconst Component = ({ ... }) => {\n  return ...; /* render */\n};\n\nexport default Component;\n';
var EXAMPLE_REDUX_ACTION = 'const Action = (() => {\n  const actionType = () => {\n    return { ... };\n  };\n  ...\n  return {\n    actionType: actionType,\n    ...\n  }\n})();\n\nexport default Action;\n';
var EXAMPLE_REDUX_REDUCER_INDEX = 'import { combineReducers } from \'redux\';\n<!-- Require or Import reducer branches -->\n\nconst reducers = combineReducers({\n  [reducer branch],\n  ...\n});\n\nexport default reducers;\n';
var EXAMPLE_REDUX_REDUCER_BRANCH = 'const ReducerBranch = (state = [], action) => {\n  switch (action[\'type\']) {\n    let newState = state;\n    case actionType:\n      ...\n      return newState;\n      break;\n    ...\n    default:\n      return newState;\n      break;\n  }\n}\n\nexport default ReducerBranch;\n';

var Index = function Index(props) {
  var content = [];
  content.push(_react2.default.createElement(
    'div',
    { className: 'wrapper wrapper-basic' },
    _react2.default.createElement(
      _articleLayout2.default.MainTitle,
      null,
      mainTitle
    ),
    _react2.default.createElement(
      _articleLayout2.default.MainDescription,
      null,
      mainDescriptionStr
    ),
    _react2.default.createElement(
      _articleLayout2.default.Section,
      null,
      _react2.default.createElement(
        _articleLayout2.default.SectionTitle,
        null,
        introductionTitle
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        introductionContent
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        _react2.default.createElement(
          _articleLayout2.default.SectionSubtitle,
          null,
          introductionExampleTitle
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          introductionExampleContent
        ),
        _react2.default.createElement(
          _articleLayout2.default.Item,
          null,
          _react2.default.createElement(_index2.default, null)
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          introductionExampleAlgorithmDescription
        ),
        _react2.default.createElement(
          _articleLayout2.default.Pre,
          null,
          EXAMPLE_BASIC_ALGORITHM
        )
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        _react2.default.createElement(
          _articleLayout2.default.SectionSubtitle,
          null,
          introductionReduxTitle
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          introductionReduxContent
        ),
        _react2.default.createElement(
          _articleLayout2.default.Item,
          null,
          _react2.default.createElement('img', { src: _articleRedux2.default })
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          introductionReduxAlgorithmDescription
        ),
        _react2.default.createElement(
          _articleLayout2.default.Pre,
          null,
          EXAMPLE_REDUX_INSTALL
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionSubtitle,
            null,
            introductionReduxViewTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            introductionReduxViewContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              _articleLayout2.default.SectionSubtitle,
              null,
              introductionReduxViewContainerTitle
            ),
            _react2.default.createElement(
              _articleLayout2.default.Pre,
              null,
              EXAMPLE_REDUX_VIEW_CONTAINER
            )
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              _articleLayout2.default.SectionSubtitle,
              null,
              introductionReduxViewConnectTitle
            ),
            _react2.default.createElement(
              _articleLayout2.default.Content,
              null,
              introductionReduxViewConnectContent
            ),
            _react2.default.createElement(
              _articleLayout2.default.Content,
              null,
              _react2.default.createElement(
                _articleLayout2.default.SectionSubtitle,
                null,
                introductionReduxViewConnectContainerTag
              ),
              _react2.default.createElement(
                _articleLayout2.default.Pre,
                null,
                EXAMPLE_REDUX_VIEW_CONNECT_CONTAINER
              ),
              _react2.default.createElement(
                _articleLayout2.default.SectionSubtitle,
                null,
                introductionReduxViewConnectComponentTag
              ),
              _react2.default.createElement(
                _articleLayout2.default.Pre,
                null,
                EXAMPLE_REDUX_VIEW_CONNECT_COMPONENT
              )
            )
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionSubtitle,
            null,
            introductionReduxActionTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            introductionReduxActionContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Pre,
            null,
            EXAMPLE_REDUX_ACTION
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Content,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionSubtitle,
            null,
            introductionReduxReducerTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            introductionReduxReducerContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              _articleLayout2.default.SectionSubtitle,
              null,
              introductionReduxReducerCombinedTitle
            ),
            _react2.default.createElement(
              _articleLayout2.default.Pre,
              null,
              EXAMPLE_REDUX_REDUCER_INDEX
            ),
            _react2.default.createElement(
              _articleLayout2.default.SectionSubtitle,
              null,
              introductionReduxReducerBranchTitle
            ),
            _react2.default.createElement(
              _articleLayout2.default.Pre,
              null,
              EXAMPLE_REDUX_REDUCER_BRANCH
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      _articleLayout2.default.Section,
      null,
      _react2.default.createElement(
        _articleLayout2.default.SectionTitle,
        null,
        productionTitle
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        productionContent
      ),
      _react2.default.createElement(
        _articleLayout2.default.Item,
        null,
        _react2.default.createElement(_index4.default, null)
      )
    ),
    _react2.default.createElement(
      _articleLayout2.default.Section,
      null,
      _react2.default.createElement(
        _articleLayout2.default.SectionTitle,
        null,
        advancedTitle
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        advancedContent
      ),
      _react2.default.createElement(
        _articleLayout2.default.Item,
        null,
        _react2.default.createElement('img', { src: _articleRedux_server2.default })
      ),
      _react2.default.createElement(
        _articleLayout2.default.Content,
        null,
        advancedServerContent
      ),
      _react2.default.createElement(
        _articleLayout2.default.Item,
        null,
        _react2.default.createElement(_index6.default, null)
      )
    ),
    _react2.default.createElement(
      _articleLayout2.default.Section,
      null,
      _react2.default.createElement(
        _articleLayout2.default.BtnGroup,
        null,
        _react2.default.createElement(
          _articleLayout2.default.Btn,
          null,
          _react2.default.createElement(_articleRedirecter2.default, { redirectTo: 'BTB_ATCS' })
        )
      )
    )
  ));
  return content;
};

exports.default = Index;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(120);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index(props) {
  var content = [];
  content.push(_react2.default.createElement(_app2.default, null));
  return content;
};

exports.default = Index;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _exampleLayout = __webpack_require__(7);

var _exampleLayout2 = _interopRequireDefault(_exampleLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// definitions
function DataObj() {
  this['uId'] = '';
  this['name'] = '';
};
var DATAMEMBERS = 5;
var random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';
var random_name = 'abcdefghijklmnopqrstuvwxyz';

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.dataList = {
      'left': new Array(),
      'right': new Array()
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
        _exampleLayout2.default.Wrapper,
        { className: 'example-userList' },
        _react2.default.createElement(
          _exampleLayout2.default.Part,
          null,
          _react2.default.createElement(
            _exampleLayout2.default.Title,
            null,
            'Example'
          )
        ),
        _react2.default.createElement(
          _exampleLayout2.default.Part,
          null,
          _react2.default.createElement(
            _exampleLayout2.default.Block,
            null,
            _react2.default.createElement(
              'div',
              { className: 'userList-add' },
              _react2.default.createElement('input', { className: 'userList-input', type: 'text', maxLength: '10', ref: 'userName', placeholder: 'Enter 1-10 character(s).' })
            )
          ),
          _react2.default.createElement(
            _exampleLayout2.default.InlineBlock,
            null,
            _react2.default.createElement(
              'div',
              { className: 'userList-add' },
              _react2.default.createElement(
                'button',
                { className: 'userList-addButton', onClick: function onClick() {
                    _this2._addHandler('left');
                  }, style: { 'vertical-align': 'bottom' } },
                _react2.default.createElement(
                  'span',
                  null,
                  'Left'
                ),
                _react2.default.createElement(_reactFontawesome2.default, { name: 'plus-square', fixedWidth: true })
              )
            )
          ),
          _react2.default.createElement(
            _exampleLayout2.default.InlineBlock,
            null,
            _react2.default.createElement(
              'div',
              { className: 'userList-add' },
              _react2.default.createElement(
                'button',
                { className: 'userList-addButton', onClick: function onClick() {
                    _this2._addHandler('right');
                  }, style: { 'vertical-align': 'bottom' } },
                _react2.default.createElement(
                  'span',
                  null,
                  'Right'
                ),
                _react2.default.createElement(_reactFontawesome2.default, { name: 'plus-square', fixedWidth: true })
              )
            )
          )
        ),
        _react2.default.createElement(
          _exampleLayout2.default.Part,
          null,
          _react2.default.createElement(
            _exampleLayout2.default.InlineBlock,
            null,
            _react2.default.createElement(
              'ul',
              { className: 'userList-list' },
              0 < this.dataList.left.length ? this.dataList.left.map(function (entry) {
                var content_datalist_tr = [];
                content_datalist_tr.push(_react2.default.createElement(
                  'li',
                  { className: 'userList-entry' },
                  _react2.default.createElement(
                    'div',
                    { className: 'userList-info' },
                    entry['name']
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'userList-moveButton', onClick: function onClick() {
                        _this2._moveHandler('right', entry['uId']);
                      } },
                    _react2.default.createElement(_reactFontawesome2.default, { name: 'toggle-right', fixedWidth: true })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'userList-deleteButton', onClick: function onClick() {
                        _this2._deleteHandler('left', entry['uId']);
                      } },
                    _react2.default.createElement(_reactFontawesome2.default, { name: 'trash', fixedWidth: true })
                  )
                ));
                return content_datalist_tr;
              }) : _react2.default.createElement(
                'li',
                { className: 'userList-entry-empty' },
                'No data available.'
              )
            )
          ),
          _react2.default.createElement(
            _exampleLayout2.default.InlineBlock,
            null,
            _react2.default.createElement(
              'ul',
              { className: 'userList-list' },
              0 < this.dataList.right.length ? this.dataList.right.map(function (entry) {
                var content_datalist_tr = [];
                content_datalist_tr.push(_react2.default.createElement(
                  'li',
                  { className: 'userList-entry' },
                  _react2.default.createElement(
                    'div',
                    { className: 'userList-info' },
                    entry['name']
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'userList-moveButton', onClick: function onClick() {
                        _this2._moveHandler('left', entry['uId']);
                      } },
                    _react2.default.createElement(_reactFontawesome2.default, { name: 'toggle-left', fixedWidth: true })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'userList-deleteButton', onClick: function onClick() {
                        _this2._deleteHandler('right', entry['uId']);
                      } },
                    _react2.default.createElement(_reactFontawesome2.default, { name: 'trash', fixedWidth: true })
                  )
                ));
                return content_datalist_tr;
              }) : _react2.default.createElement(
                'li',
                { className: 'userList-entry-empty' },
                'No data available.'
              )
            )
          )
        )
      ));
      return content;
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      // random data instead of 'fetch' data
      this.dataList = {
        'left': [],
        'right': []
      };
      var dataTemp = void 0;
      for (var i = 0; i < DATAMEMBERS; i++) {
        dataTemp = new DataObj();
        dataTemp['uId'] = this.randomData('id', this.dataList.left);
        dataTemp['name'] = this.randomData('name');
        this.dataList.left.push(dataTemp);
        dataTemp = new DataObj();
        dataTemp['uId'] = this.randomData('id', this.dataList.right);
        dataTemp['name'] = this.randomData('name');
        this.dataList.right.push(dataTemp);
      };
      this.forceUpdate();
    }
  }, {
    key: 'randomData',
    value: function randomData(type, base) {
      var valueLength = 0;
      var value = '';
      var randomNumber = void 0;
      switch (type) {
        case 'id':
          valueLength = 10;
          for (var idIndex = 0; idIndex < valueLength; idIndex++) {
            randomNumber = Math.floor(Math.random() * random_uId.length);
            value += random_uId.slice(randomNumber, randomNumber + 1);
          };
          for (var baseIndex = 0; baseIndex < base.length; baseIndex++) {
            if (base[baseIndex].uId == value) {
              // if duplicate uId, random again
              value = this.randomData('id', base);
              break;
            }
          };
          break;
        case 'name':
          valueLength = Math.ceil(Math.random() * 10);
          for (var _idIndex = 0; _idIndex < valueLength; _idIndex++) {
            randomNumber = Math.floor(Math.random() * random_name.length);
            value += random_name.slice(randomNumber, randomNumber + 1);
          };
          break;
      };
      return value;
    }
  }, {
    key: '_addHandler',
    value: function _addHandler(part) {
      if (DATAMEMBERS <= this.dataList[part].length) {
        alert('left' == part ? 'Left user is full.' : 'Right user is full.');
        return;
      };
      var name = _reactDom2.default.findDOMNode(this.refs['userName']).value.trim();
      if ('' == name) {
        alert('Input is empty.');
        return;
      };
      var dataTemp = new DataObj();
      dataTemp['uId'] = this.randomData('id', this.dataList[part]);
      dataTemp['name'] = name;
      this.dataList[part].push(dataTemp);
      _reactDom2.default.findDOMNode(this.refs['userName']).value = '';
      this.forceUpdate();
    }
  }, {
    key: '_moveHandler',
    value: function _moveHandler(moveTo, uId) {
      var moveFrom = 'left' == moveTo ? 'right' : 'left';
      if (DATAMEMBERS <= this.dataList[moveTo].length) {
        alert('left' == moveTo ? 'Left user is full.' : 'Right user is full.');
        return;
      };
      var data = {};
      for (var i = 0; i < this.dataList[moveFrom].length; i++) {
        if (uId == this.dataList[moveFrom][i].uId) {
          data = this.dataList[moveFrom].splice(i, 1);
          for (var baseIndex = 0; baseIndex < this.dataList[moveTo].length; baseIndex++) {
            if (this.dataList[moveTo][baseIndex].uId == data['value']) {
              // if duplicate uId, random again
              data['value'] = this.randomData('id', this.dataList[moveTo]);
              break;
            }
          };
          this.dataList[moveTo] = this.dataList[moveTo].concat(data);
          break;
        };
      };
      this.forceUpdate();
    }
  }, {
    key: '_deleteHandler',
    value: function _deleteHandler(part, uId) {
      for (var i = 0; i < this.dataList[part].length; i++) {
        if (uId == this.dataList[part][i].uId) {
          this.dataList[part].splice(i, 1);
          break;
        };
      };
      this.forceUpdate();
    }
  }]);

  return App;
}(_react.Component);

;

exports.default = App;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(13);

var _reactRedux = __webpack_require__(6);

var _app = __webpack_require__(143);

var _app2 = _interopRequireDefault(_app);

var _index = __webpack_require__(150);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_index2.default);

var Index = function Index(props) {
  var content = [];
  content.push(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_app2.default, null)
  ));
  return content;
};

exports.default = Index;

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(124);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(48), __webpack_require__(123)(module)))

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(30);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (false) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(141);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(51);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(138);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(135);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(133);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(48)))

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(53);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(137);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(51);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(52);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(142);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(30);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _exampleLayout = __webpack_require__(7);

var _exampleLayout2 = _interopRequireDefault(_exampleLayout);

var _leftListAction = __webpack_require__(17);

var _leftListAction2 = _interopRequireDefault(_leftListAction);

var _rightListAction = __webpack_require__(18);

var _rightListAction2 = _interopRequireDefault(_rightListAction);

var _userAdder = __webpack_require__(144);

var _userAdder2 = _interopRequireDefault(_userAdder);

var _userListLeft = __webpack_require__(146);

var _userListLeft2 = _interopRequireDefault(_userListLeft);

var _userListRight = __webpack_require__(148);

var _userListRight2 = _interopRequireDefault(_userListRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var dispatch = _ref.dispatch;

  var content = [];
  dispatch(_leftListAction2.default.init());
  dispatch(_rightListAction2.default.init());
  content.push(_react2.default.createElement(
    _exampleLayout2.default.Wrapper,
    { className: 'example-userList' },
    _react2.default.createElement(
      _exampleLayout2.default.Part,
      null,
      _react2.default.createElement(
        _exampleLayout2.default.Title,
        null,
        'Example - Redux'
      )
    ),
    _react2.default.createElement(
      _exampleLayout2.default.Part,
      null,
      _react2.default.createElement(_userAdder2.default, null)
    ),
    _react2.default.createElement(
      _exampleLayout2.default.Part,
      null,
      _react2.default.createElement(
        _exampleLayout2.default.InlineBlock,
        null,
        _react2.default.createElement(_userListLeft2.default, null)
      ),
      _react2.default.createElement(
        _exampleLayout2.default.InlineBlock,
        null,
        _react2.default.createElement(_userListRight2.default, null)
      )
    )
  ));
  return content;
};

exports.default = (0, _reactRedux.connect)()(App);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _leftListAction = __webpack_require__(17);

var _leftListAction2 = _interopRequireDefault(_leftListAction);

var _rightListAction = __webpack_require__(18);

var _rightListAction2 = _interopRequireDefault(_rightListAction);

var _userAdder = __webpack_require__(145);

var _userAdder2 = _interopRequireDefault(_userAdder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    'data': {
      'leftList': state.leftList,
      'rightList': state.rightList
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    'handler': {
      '_addUserLeftHandler': function _addUserLeftHandler(source) {
        dispatch(_leftListAction2.default.add(source));
      },
      '_addUserRightHandler': function _addUserRightHandler(source) {
        dispatch(_rightListAction2.default.add(source));
      }
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_userAdder2.default);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _exampleLayout = __webpack_require__(7);

var _exampleLayout2 = _interopRequireDefault(_exampleLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATAMEMBERS = 5;

function DataObj() {
  this['uId'] = '';
  this['name'] = '';
};

var UserAdder = function UserAdder(_ref) {
  var data = _ref.data,
      handler = _ref.handler;

  var content = [];
  var formList = {};
  content.push(_react2.default.createElement(
    _exampleLayout2.default.Block,
    null,
    _react2.default.createElement(
      'div',
      { className: 'userList-add' },
      _react2.default.createElement('input', { className: 'userList-input', type: 'text', maxLength: '10', ref: function ref(node) {
          formList['userName'] = node;
        }, placeholder: 'Enter 1-10 character(s).' })
    )
  ));
  content.push(_react2.default.createElement(
    _exampleLayout2.default.InlineBlock,
    null,
    _react2.default.createElement(
      'div',
      { className: 'userList-add' },
      _react2.default.createElement(
        'button',
        { className: 'userList-addButton', onClick: function onClick() {
            addUserLeftHandler();
          }, style: { 'vertical-align': 'bottom' } },
        _react2.default.createElement(
          'span',
          null,
          'Left'
        ),
        _react2.default.createElement(_reactFontawesome2.default, { name: 'plus-square', fixedWidth: true })
      )
    )
  ));
  content.push(_react2.default.createElement(
    _exampleLayout2.default.InlineBlock,
    null,
    _react2.default.createElement(
      'div',
      { className: 'userList-add' },
      _react2.default.createElement(
        'button',
        { className: 'userList-addButton', onClick: function onClick() {
            addUserRightHandler();
          }, style: { 'vertical-align': 'bottom' } },
        _react2.default.createElement(
          'span',
          null,
          'Right'
        ),
        _react2.default.createElement(_reactFontawesome2.default, { name: 'plus-square', fixedWidth: true })
      )
    )
  ));

  function addUserLeftHandler() {
    var name = formList['userName'].value.trim();
    if ('' == name) {
      alert('Input is empty.');
      return;
    };
    if (DATAMEMBERS <= data['leftList'].length) {
      alert('Left user is full.');
      return false;
    };
    var dataTemp = new DataObj();
    dataTemp['uId'] = '';
    dataTemp['name'] = name;
    handler._addUserLeftHandler(dataTemp);
  };
  function addUserRightHandler() {
    var name = formList['userName'].value.trim();
    if ('' == name) {
      alert('Input is empty.');
      return;
    };
    if (DATAMEMBERS <= data['rightList'].length) {
      alert('Right user is full.');
      return false;
    };
    var dataTemp = new DataObj();
    dataTemp['uId'] = '';
    dataTemp['name'] = name;
    handler._addUserRightHandler(dataTemp);
  };

  return content;
};

exports.default = UserAdder;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(6);

var _leftListAction = __webpack_require__(17);

var _leftListAction2 = _interopRequireDefault(_leftListAction);

var _rightListAction = __webpack_require__(18);

var _rightListAction2 = _interopRequireDefault(_rightListAction);

var _leftList = __webpack_require__(147);

var _leftList2 = _interopRequireDefault(_leftList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    'data': {
      'leftList': state.leftList,
      'rightList': state.rightList
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    'handler': {
      '_changeUserHandler': function _changeUserHandler(source) {
        dispatch(_leftListAction2.default.remove(source));
        dispatch(_rightListAction2.default.add(source));
      },
      '_removeUserHandler': function _removeUserHandler(source) {
        dispatch(_leftListAction2.default.remove(source));
      }
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_leftList2.default);

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATAMEMBERS = 5;

var LeftList = function LeftList(_ref) {
  var data = _ref.data,
      handler = _ref.handler;

  var content = [];
  content.push(_react2.default.createElement(
    'ul',
    { className: 'userList-list' },
    0 < data['leftList'].length ? data['leftList'].map(function (entry) {
      var content_entry = [];
      content_entry.push(_react2.default.createElement(
        'li',
        { className: 'userList-entry' },
        _react2.default.createElement(
          'div',
          { className: 'userList-info' },
          entry['name']
        ),
        _react2.default.createElement(
          'div',
          { className: 'userList-moveButton', onClick: function onClick() {
              changeUserHandler(entry);
            } },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'toggle-right', fixedWidth: true })
        ),
        _react2.default.createElement(
          'div',
          { className: 'userList-deleteButton', onClick: function onClick() {
              removeUserHandler(entry);
            } },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'trash', fixedWidth: true })
        )
      ));
      return content_entry;
    }) : _react2.default.createElement(
      'li',
      { className: 'userList-entry-empty' },
      'No data available.'
    )
  ));

  function changeUserHandler(entry) {
    if (DATAMEMBERS <= data['rightList'].length) {
      alert('Right user is full.');
      return false;
    };
    handler._changeUserHandler(entry);
  };
  function removeUserHandler(entry) {
    handler._removeUserHandler(entry);
  };

  return content;
};

exports.default = LeftList;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(6);

var _leftListAction = __webpack_require__(17);

var _leftListAction2 = _interopRequireDefault(_leftListAction);

var _rightListAction = __webpack_require__(18);

var _rightListAction2 = _interopRequireDefault(_rightListAction);

var _rightList = __webpack_require__(149);

var _rightList2 = _interopRequireDefault(_rightList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    'data': {
      'leftList': state.leftList,
      'rightList': state.rightList
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    'handler': {
      '_changeUserHandler': function _changeUserHandler(source) {
        dispatch(_rightListAction2.default.remove(source));
        dispatch(_leftListAction2.default.add(source));
      },
      '_removeUserHandler': function _removeUserHandler(source) {
        dispatch(_rightListAction2.default.remove(source));
      }
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_rightList2.default);

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATAMEMBERS = 5;

var RightList = function RightList(_ref) {
  var data = _ref.data,
      handler = _ref.handler;

  var content = [];
  content.push(_react2.default.createElement(
    'ul',
    { className: 'userList-list' },
    0 < data['rightList'].length ? data['rightList'].map(function (entry) {
      var content_entry = [];
      content_entry.push(_react2.default.createElement(
        'li',
        { className: 'userList-entry' },
        _react2.default.createElement(
          'div',
          { className: 'userList-info' },
          entry['name']
        ),
        _react2.default.createElement(
          'div',
          { className: 'userList-moveButton', onClick: function onClick() {
              changeUserHandler(entry);
            } },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'toggle-left', fixedWidth: true })
        ),
        _react2.default.createElement(
          'div',
          { className: 'userList-deleteButton', onClick: function onClick() {
              removeUserHandler(entry);
            } },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'trash', fixedWidth: true })
        )
      ));
      return content_entry;
    }) : _react2.default.createElement(
      'li',
      { className: 'userList-entry-empty' },
      'No data available.'
    )
  ));

  function changeUserHandler(entry) {
    if (DATAMEMBERS <= data['leftList'].length) {
      alert('Left user is full.');
      return false;
    };
    handler._changeUserHandler(entry);
  };
  function removeUserHandler(entry) {
    handler._removeUserHandler(entry);
  };

  return content;
};

exports.default = RightList;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(13);

var _leftList = __webpack_require__(151);

var _leftList2 = _interopRequireDefault(_leftList);

var _rightList = __webpack_require__(152);

var _rightList2 = _interopRequireDefault(_rightList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  leftList: _leftList2.default,
  rightList: _rightList2.default
});

exports.default = reducers;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Definitions
var DATAMEMBERS = 5;
var random_uId = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var random_name = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function DataObj() {
  this['uId'] = '';
  this['name'] = '';
};
function randomData(type, base) {
  var valueLength = 0;
  var value = '';
  var randomNumber = void 0;
  switch (type) {
    case 'id':
      valueLength = 10;
      for (var idIndex = 0; idIndex < valueLength; idIndex++) {
        randomNumber = Math.floor(Math.random() * random_uId.length);
        value += random_uId.slice(randomNumber, randomNumber + 1);
      };
      if (!checkUidUnique(value, base)) {
        value = randomData('id', base);
      };
      break;
    case 'name':
      valueLength = Math.ceil(Math.random() * 10);
      for (var _idIndex = 0; _idIndex < valueLength; _idIndex++) {
        randomNumber = Math.floor(Math.random() * random_name.length);
        value += random_name.slice(randomNumber, randomNumber + 1);
      };
      break;
  };
  return value;
};
function checkUidUnique(uId, base) {
  for (var baseIndex = 0; baseIndex < base.length; baseIndex++) {
    if (base[baseIndex].uId == uId) {
      // if duplicate uId, random again
      return false;
    };
  };
  return true;
};

var ReducerLeft = function ReducerLeft() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  var newState = state.slice(0);
  var dataTemp = void 0;
  switch (action['type']) {
    case 'LEFT_LIST_INIT':
      newState = [];
      for (var i = 0; i < DATAMEMBERS; i++) {
        dataTemp = new DataObj();
        dataTemp['uId'] = randomData('id', newState);
        dataTemp['name'] = randomData('name');
        newState.push(dataTemp);
      };
      return newState;
      break;
    case 'LEFT_LIST_GET':
      return newState;
      break;
    case 'LEFT_LIST_ADD':
      dataTemp = new DataObj();
      dataTemp['uId'] = '' != action['data'].uId && checkUidUnique(action['data'].uId, newState) ? action['data'].uId : randomData('id', newState);
      dataTemp['name'] = action['data'].name;
      newState.push(dataTemp);
      return newState;
      break;
    case 'LEFT_LIST_REMOVE':
      for (var _i = 0; _i < newState.length; _i++) {
        if (action['data'].uId == newState[_i].uId) {
          newState.splice(_i, 1);
          break;
        };
      };
      return newState;
      break;
    default:
      return newState;
      break;
  }
};

exports.default = ReducerLeft;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Definitions
var DATAMEMBERS = 5;
var random_uId = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var random_name = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function DataObj() {
  this['uId'] = '';
  this['name'] = '';
};
function randomData(type, base) {
  var valueLength = 0;
  var value = '';
  var randomNumber = void 0;
  switch (type) {
    case 'id':
      valueLength = 10;
      for (var idIndex = 0; idIndex < valueLength; idIndex++) {
        randomNumber = Math.floor(Math.random() * random_uId.length);
        value += random_uId.slice(randomNumber, randomNumber + 1);
      };
      if (!checkUidUnique(value, base)) {
        value = randomData('id', base);
      };
      break;
    case 'name':
      valueLength = Math.ceil(Math.random() * 10);
      for (var _idIndex = 0; _idIndex < valueLength; _idIndex++) {
        randomNumber = Math.floor(Math.random() * random_name.length);
        value += random_name.slice(randomNumber, randomNumber + 1);
      };
      break;
  };
  return value;
};
function checkUidUnique(uId, base) {
  for (var baseIndex = 0; baseIndex < base.length; baseIndex++) {
    if (base[baseIndex].uId == uId) {
      // if duplicate uId, random again
      return false;
    };
  };
  return true;
};

var ReducerRight = function ReducerRight() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  var newState = state.slice(0);
  var dataTemp = void 0;
  switch (action['type']) {
    case 'RIGHT_LIST_INIT':
      newState = [];
      for (var i = 0; i < DATAMEMBERS; i++) {
        dataTemp = new DataObj();
        dataTemp['uId'] = randomData('id', newState);
        dataTemp['name'] = randomData('name');
        newState.push(dataTemp);
      };
      return newState;
      break;
    case 'RIGHT_LIST_GET':
      return newState;
      break;
    case 'RIGHT_LIST_ADD':
      dataTemp = new DataObj();
      dataTemp['uId'] = '' != action['data'].uId && checkUidUnique(action['data'].uId, newState) ? action['data'].uId : randomData('id', newState);
      dataTemp['name'] = action['data'].name;
      newState.push(dataTemp);
      return newState;
      break;
    case 'RIGHT_LIST_REMOVE':
      for (var _i = 0; _i < newState.length; _i++) {
        if (action['data'].uId == newState[_i].uId) {
          newState.splice(_i, 1);
          break;
        };
      };
      return newState;
      break;
    default:
      return newState;
      break;
  }
};

exports.default = ReducerRight;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(13);

var _reactRedux = __webpack_require__(6);

var _app = __webpack_require__(154);

var _app2 = _interopRequireDefault(_app);

var _index = __webpack_require__(161);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_index2.default);

var Index = function Index(props) {
  var content = [];
  content.push(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_app2.default, null)
  ));
  return content;
};

exports.default = Index;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _exampleLayout = __webpack_require__(7);

var _exampleLayout2 = _interopRequireDefault(_exampleLayout);

var _leftListAction = __webpack_require__(19);

var _leftListAction2 = _interopRequireDefault(_leftListAction);

var _rightListAction = __webpack_require__(20);

var _rightListAction2 = _interopRequireDefault(_rightListAction);

var _userAdder = __webpack_require__(155);

var _userAdder2 = _interopRequireDefault(_userAdder);

var _userListLeft = __webpack_require__(157);

var _userListLeft2 = _interopRequireDefault(_userListLeft);

var _userListRight = __webpack_require__(159);

var _userListRight2 = _interopRequireDefault(_userListRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var dispatch = _ref.dispatch;

  var content = [];
  dispatch(_leftListAction2.default.init());
  dispatch(_rightListAction2.default.init());
  content.push(_react2.default.createElement(
    _exampleLayout2.default.Wrapper,
    { className: 'example-userList' },
    _react2.default.createElement(
      _exampleLayout2.default.Part,
      null,
      _react2.default.createElement(
        _exampleLayout2.default.Title,
        null,
        'Example - Redux with server'
      )
    ),
    _react2.default.createElement(
      _exampleLayout2.default.Part,
      null,
      _react2.default.createElement(_userAdder2.default, null)
    ),
    _react2.default.createElement(
      _exampleLayout2.default.Part,
      null,
      _react2.default.createElement(
        _exampleLayout2.default.InlineBlock,
        null,
        _react2.default.createElement(_userListLeft2.default, null)
      ),
      _react2.default.createElement(
        _exampleLayout2.default.InlineBlock,
        null,
        ' ',
        _react2.default.createElement(_userListRight2.default, null)
      )
    )
  ));
  return content;
};

exports.default = (0, _reactRedux.connect)()(App);

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _leftListAction = __webpack_require__(19);

var _leftListAction2 = _interopRequireDefault(_leftListAction);

var _rightListAction = __webpack_require__(20);

var _rightListAction2 = _interopRequireDefault(_rightListAction);

var _userAdder = __webpack_require__(156);

var _userAdder2 = _interopRequireDefault(_userAdder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    'data': {
      'leftList': state.leftList,
      'rightList': state.rightList
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    'handler': {
      '_addUserLeftHandler': function _addUserLeftHandler(source) {
        dispatch(_leftListAction2.default.add(source));
      },
      '_addUserRightHandler': function _addUserRightHandler(source) {
        dispatch(_rightListAction2.default.add(source));
      }
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_userAdder2.default);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _exampleLayout = __webpack_require__(7);

var _exampleLayout2 = _interopRequireDefault(_exampleLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATAMEMBERS = 5;

function DataObj() {
  this['uId'] = '';
  this['name'] = '';
};

var UserAdder = function UserAdder(_ref) {
  var data = _ref.data,
      handler = _ref.handler;

  var content = [];
  var formList = {};
  content.push(_react2.default.createElement(
    _exampleLayout2.default.Block,
    null,
    _react2.default.createElement(
      'div',
      { className: 'userList-add' },
      _react2.default.createElement('input', { className: 'userList-input', type: 'text', maxLength: '10', ref: function ref(node) {
          formList['userName'] = node;
        }, placeholder: 'Enter 1-10 character(s).' })
    )
  ));
  content.push(_react2.default.createElement(
    _exampleLayout2.default.InlineBlock,
    null,
    _react2.default.createElement(
      'div',
      { className: 'userList-add' },
      _react2.default.createElement(
        'button',
        { className: 'userList-addButton', onClick: function onClick() {
            addUserLeftHandler();
          }, style: { 'vertical-align': 'bottom' } },
        _react2.default.createElement(
          'span',
          null,
          'Left'
        ),
        _react2.default.createElement(_reactFontawesome2.default, { name: 'plus-square', fixedWidth: true })
      )
    )
  ));
  content.push(_react2.default.createElement(
    _exampleLayout2.default.InlineBlock,
    null,
    _react2.default.createElement(
      'div',
      { className: 'userList-add' },
      _react2.default.createElement(
        'button',
        { className: 'userList-addButton', onClick: function onClick() {
            addUserRightHandler();
          }, style: { 'vertical-align': 'bottom' } },
        _react2.default.createElement(
          'span',
          null,
          'Right'
        ),
        _react2.default.createElement(_reactFontawesome2.default, { name: 'plus-square', fixedWidth: true })
      )
    )
  ));

  function addUserLeftHandler() {
    var name = formList['userName'].value.trim();
    if ('' == name) {
      alert('Input is empty.');
      return;
    };
    if (DATAMEMBERS <= data['leftList'].length) {
      alert('Left user is full.');
      return false;
    };
    var dataTemp = new DataObj();
    dataTemp['uId'] = '';
    dataTemp['name'] = name;
    handler._addUserLeftHandler(dataTemp);
  };
  function addUserRightHandler() {
    var name = formList['userName'].value.trim();
    if ('' == name) {
      alert('Input is empty.');
      return;
    };
    if (DATAMEMBERS <= data['rightList'].length) {
      alert('Right user is full.');
      return false;
    };
    var dataTemp = new DataObj();
    dataTemp['uId'] = '';
    dataTemp['name'] = name;
    handler._addUserRightHandler(dataTemp);
  };

  return content;
};

exports.default = UserAdder;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(6);

var _leftListAction = __webpack_require__(19);

var _leftListAction2 = _interopRequireDefault(_leftListAction);

var _rightListAction = __webpack_require__(20);

var _rightListAction2 = _interopRequireDefault(_rightListAction);

var _leftList = __webpack_require__(158);

var _leftList2 = _interopRequireDefault(_leftList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    'data': {
      'leftList': state.leftList,
      'rightList': state.rightList
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    'handler': {
      '_changeUserHandler': function _changeUserHandler(source) {
        dispatch(_leftListAction2.default.change(source));
        dispatch(_rightListAction2.default.get(source));
      },
      '_removeUserHandler': function _removeUserHandler(source) {
        dispatch(_leftListAction2.default.remove(source));
      }
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_leftList2.default);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATAMEMBERS = 5;

var LeftList = function LeftList(_ref) {
  var data = _ref.data,
      handler = _ref.handler;

  var content = [];
  content.push(_react2.default.createElement(
    'ul',
    { className: 'userList-list' },
    0 < data['leftList'].length ? data['leftList'].map(function (entry) {
      var content_entry = [];
      content_entry.push(_react2.default.createElement(
        'li',
        { className: 'userList-entry' },
        _react2.default.createElement(
          'div',
          { className: 'userList-info' },
          entry['name']
        ),
        _react2.default.createElement(
          'div',
          { className: 'userList-moveButton', onClick: function onClick() {
              changeUserHandler(entry);
            } },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'toggle-right', fixedWidth: true })
        ),
        _react2.default.createElement(
          'div',
          { className: 'userList-deleteButton', onClick: function onClick() {
              removeUserHandler(entry);
            } },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'trash', fixedWidth: true })
        )
      ));
      return content_entry;
    }) : _react2.default.createElement(
      'li',
      { className: 'userList-entry-empty' },
      'No data available.'
    )
  ));

  function changeUserHandler(entry) {
    if (DATAMEMBERS <= data['rightList'].length) {
      alert('Right user is full.');
      return false;
    };
    handler._changeUserHandler(entry);
  };
  function removeUserHandler(entry) {
    handler._removeUserHandler(entry);
  };

  return content;
};

exports.default = LeftList;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(6);

var _leftListAction = __webpack_require__(19);

var _leftListAction2 = _interopRequireDefault(_leftListAction);

var _rightListAction = __webpack_require__(20);

var _rightListAction2 = _interopRequireDefault(_rightListAction);

var _rightList = __webpack_require__(160);

var _rightList2 = _interopRequireDefault(_rightList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    'data': {
      'leftList': state.leftList,
      'rightList': state.rightList
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    'handler': {
      '_changeUserHandler': function _changeUserHandler(source) {
        dispatch(_rightListAction2.default.change(source));
        dispatch(_leftListAction2.default.get(source));
      },
      '_removeUserHandler': function _removeUserHandler(source) {
        dispatch(_rightListAction2.default.remove(source));
      }
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_rightList2.default);

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATAMEMBERS = 5;

var RightList = function RightList(_ref) {
  var data = _ref.data,
      handler = _ref.handler;

  var content = [];
  content.push(_react2.default.createElement(
    'ul',
    { className: 'userList-list' },
    0 < data['rightList'].length ? data['rightList'].map(function (entry) {
      var content_entry = [];
      content_entry.push(_react2.default.createElement(
        'li',
        { className: 'userList-entry' },
        _react2.default.createElement(
          'div',
          { className: 'userList-info' },
          entry['name']
        ),
        _react2.default.createElement(
          'div',
          { className: 'userList-moveButton', onClick: function onClick() {
              changeUserHandler(entry);
            } },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'toggle-left', fixedWidth: true })
        ),
        _react2.default.createElement(
          'div',
          { className: 'userList-deleteButton', onClick: function onClick() {
              removeUserHandler(entry);
            } },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'trash', fixedWidth: true })
        )
      ));
      return content_entry;
    }) : _react2.default.createElement(
      'li',
      { className: 'userList-entry-empty' },
      'No data available.'
    )
  ));

  function changeUserHandler(entry) {
    if (DATAMEMBERS <= data['leftList'].length) {
      alert('Left user is full.');
      return false;
    };
    handler._changeUserHandler(entry);
  };
  function removeUserHandler(entry) {
    handler._removeUserHandler(entry);
  };

  return content;
};

exports.default = RightList;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(13);

var _leftList = __webpack_require__(162);

var _leftList2 = _interopRequireDefault(_leftList);

var _rightList = __webpack_require__(163);

var _rightList2 = _interopRequireDefault(_rightList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  leftList: _leftList2.default,
  rightList: _rightList2.default
});

exports.default = reducers;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serverAPI = __webpack_require__(54);

var _serverAPI2 = _interopRequireDefault(_serverAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftList = function LeftList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  var obj = void 0;
  var newState = state.slice(0);
  switch (action['type']) {
    case 'LEFT_LIST_INIT':
      newState = _serverAPI2.default.initData('left');
      return newState;
      break;
    case 'LEFT_LIST_GET':
      newState = _serverAPI2.default.getData('left');
      return newState;
      break;
    case 'LEFT_LIST_ADD':
      obj = action['data'];
      newState = _serverAPI2.default.addData('left', obj);
      return newState;
      break;
    case 'LEFT_LIST_CHANGE':
      obj = action['data'];
      newState = _serverAPI2.default.changeData('left', 'right', obj);
      return newState;
      break;
    case 'LEFT_LIST_REMOVE':
      obj = action['data'];
      newState = _serverAPI2.default.removeData('left', obj);
      return newState;
      break;
    default:
      return newState;
      break;
  }
};

exports.default = LeftList;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serverAPI = __webpack_require__(54);

var _serverAPI2 = _interopRequireDefault(_serverAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightList = function RightList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  var obj = void 0;
  var newState = state.slice(0);
  switch (action['type']) {
    case 'RIGHT_LIST_INIT':
      newState = _serverAPI2.default.initData('right');
      return newState;
      break;
    case 'RIGHT_LIST_GET':
      newState = _serverAPI2.default.getData('right');
      return newState;
      break;
    case 'RIGHT_LIST_ADD':
      obj = action['data'];
      newState = _serverAPI2.default.addData('right', obj);
      return newState;
      break;
    case 'RIGHT_LIST_CHANGE':
      obj = action['data'];
      newState = _serverAPI2.default.changeData('right', 'left', obj);
      return newState;
      break;
    case 'RIGHT_LIST_REMOVE':
      obj = action['data'];
      newState = _serverAPI2.default.removeData('right', obj);
      return newState;
      break;
    default:
      return newState;
      break;
  }
};

exports.default = RightList;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/articleRedux.png";

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/articleRedux_server.png";

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _home = __webpack_require__(16);

var _articleLayout = __webpack_require__(5);

var _articleLayout2 = _interopRequireDefault(_articleLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainTitle = _react2.default.createElement(
  'span',
  null,
  'Blacktbox-demo ',
  _react2.default.createElement(
    'a',
    { target: '_blank', className: 'linkBtn', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-demo' },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'github', fixedWidth: true })
  )
);
var mainDescriptionStr = 'The Blacktbox-demo shows demonstrations for all the BTB Lab\'s tools.';

var setupTitle = 'SETUP';
var setupContent = _react2.default.createElement(
  'span',
  null,
  'Firstly, you need ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://nodejs.org/en/' },
    'Node.js',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  ' and ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://www.npmjs.com' },
    'NPM',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '. And then you can clone our code and run it by these commands:'
);
var setupFinishedContent = _react2.default.createElement(
  'span',
  null,
  'Welcome to ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'http://localhost:9000' },
    'http://localhost:9000',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '.'
);

var libraryListTitle = 'BLB LIBRARY LIST';
var libraryListContent = 'This is the list of BLB Lab\'s API demonstrated here.';

var SETUP_PRE = 'git clone https://github.com/BlackToolBoxLaboratory/blacktbox-demo.git\ncd blacktbox-demo\nnpm install\nnpm start\n';
var LibraryList = new Array({ name: 'Blacktbox-list', link: 'BTB_LIST_BASIC' }, { name: 'Blacktbox-table', link: 'BTB_TABLE_BASIC' }, { name: 'Blacktbox-menu', link: 'BTB_MENU_BASIC' });

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'wrapper wrapper-basic' },
        _react2.default.createElement(
          _articleLayout2.default.MainTitle,
          null,
          mainTitle
        ),
        _react2.default.createElement(
          _articleLayout2.default.MainDescription,
          null,
          mainDescriptionStr
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            setupTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            setupContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Pre,
            null,
            SETUP_PRE
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            setupFinishedContent
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            libraryListTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            libraryListContent
          ),
          _react2.default.createElement(
            'ul',
            null,
            LibraryList.map(function (entry) {
              var content_li = [];
              content_li.push(_react2.default.createElement(
                'li',
                null,
                entry.name,
                _react2.default.createElement(_reactFontawesome2.default, { className: 'linkBtn', onClick: function onClick() {
                    _this2._redirectHandler(entry.link);
                  }, name: 'link', fixedWidth: true })
              ));
              return content_li;
            })
          )
        )
      ));
      return content;
    }
  }, {
    key: '_redirectHandler',
    value: function _redirectHandler(index) {
      var obj = {
        acticveIndex: index
      };
      (0, _home.SideContent_backdoor)('menuRedirect', obj);
    }
  }]);

  return Index;
}(_react.Component);

;

exports.default = Index;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _blacktboxTable = __webpack_require__(31);

var _blacktboxTable2 = _interopRequireDefault(_blacktboxTable);

var _blacktboxList = __webpack_require__(12);

var _blacktboxList2 = _interopRequireDefault(_blacktboxList);

var _articleLayout = __webpack_require__(5);

var _articleLayout2 = _interopRequireDefault(_articleLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainTitle = _react2.default.createElement(
  'span',
  null,
  'Blacktbox-list ',
  _react2.default.createElement(
    'a',
    { target: '_blank', className: 'linkBtn', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-list' },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'github', fixedWidth: true })
  )
);
var mainDescriptionStr = 'List-maker tool.';

var installationTitle = 'INSTALLATION';
var installationContent = _react2.default.createElement(
  'span',
  null,
  'Using with ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://www.npmjs.com' },
    'NPM',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '.'
);

var renderTitle = 'RENDER';
var renderContent = _react2.default.createElement(
  'span',
  null,
  'Notice: DOM properties are still work with ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://reactjs.org/docs/dom-elements.html' },
    'ReactJS',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '.'
);

var nodeTreeTitle = 'NODE TREE';
var nodeTreeContent = 'Here showing the node structure. Each node with className is for convenience to style. You have two way to use it. The first way is used with css selector, and the other way is used component\'s input: styleObj.';
var nodeTreeNotice = 'Notice: The layer.index is counted base on 0.';

var INSTALLATION_PRE = '$ npm install --save blacktbox-list\n\n// using ES6 modules\nimport BTBList from \'blacktbox-list\';\n\n// using CommonJS modules\nvar BTBList = require(\'blacktbox-list\');';
var RENDER_PRE = '<BTBList \n  listArr: [],\n  styleObj: {},\n  inputRefFn: ()=>{}\n/>';
var LISTARR_PRE = 'listArr = [{\n  name: \'\',\n  children: [...]\n}, ...]';
var SUBLISTARR_PRE = 'children = [{\n  name: \'\',\n  children: [...]\n}, ...]';
var STYLEOBJ_PRE = 'styleObj = {\n  \'Node\'s className\': {CSS Object}\n  , ...\n}';
var PARAM_HEAD = new Array({ name: 'Property Name', index: 'name' }, { name: 'Type', index: 'type' }, { name: 'Default', index: 'default' }, { name: 'Notice', index: 'notice' });
var PARAM_BODY = new Array({ name: 'listArr', type: 'Array', default: '[]', notice: _react2.default.createElement(
    'pre',
    { className: 'content-pre' },
    LISTARR_PRE
  ) }, { name: '- name', type: 'String or Node', default: '\'\'', notice: 'String or Node to show layer name.' }, { name: '- children', type: 'Array', default: '[]', notice: _react2.default.createElement(
    'pre',
    { className: 'content-pre' },
    SUBLISTARR_PRE
  ) }, { name: 'styleObj', type: 'Object', default: '{}', notice: _react2.default.createElement(
    'pre',
    { className: 'content-pre' },
    STYLEOBJ_PRE
  ) }, { name: 'inputRefFn', type: 'Function', default: '()=>{}', notice: 'To catch ref with (ref)=>{variable = ref}.' });
var NODE_TREE = new Array({
  'name': '<div> .btb-list',
  'children': [{
    'name': '<ul> .list-layer (.layer-0)',
    'children': [{
      'name': '<li> .layer-item',
      'children': [{
        'name': '<div> .iterm-content',
        'children': [{
          'name': '<div> .content-name'
        }]
      }, {
        'name': '<div> .item-sublist',
        'children': [{
          'name': '<ul> .list-layer (.layer-{layer.index})'
        }]
      }]
    }]
  }]
});
var PARAM_MODE = {
  mode: 'list'
};

var Basic = function (_Component) {
  _inherits(Basic, _Component);

  function Basic() {
    _classCallCheck(this, Basic);

    return _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).apply(this, arguments));
  }

  _createClass(Basic, [{
    key: 'render',
    value: function render() {
      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'wrapper wrapper-basic' },
        _react2.default.createElement(
          _articleLayout2.default.MainTitle,
          null,
          mainTitle
        ),
        _react2.default.createElement(
          _articleLayout2.default.MainDescription,
          null,
          mainDescriptionStr
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            installationTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            installationContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Pre,
            null,
            INSTALLATION_PRE
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            renderTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Pre,
            null,
            RENDER_PRE
          ),
          _react2.default.createElement(_blacktboxTable2.default, {
            tableHeadArr: PARAM_HEAD,
            tableBobyArr: PARAM_BODY,
            modeObj: PARAM_MODE,
            className: 'content-paramlist'
          }),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            renderContent
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            nodeTreeTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            nodeTreeContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(_blacktboxList2.default, {
              className: 'content-nodetree',
              listArr: NODE_TREE
            })
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            nodeTreeNotice
          )
        )
      ));
      return content;
    }
  }]);

  return Basic;
}(_react.Component);

;

exports.default = Basic;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _blacktboxList = __webpack_require__(12);

var _blacktboxList2 = _interopRequireDefault(_blacktboxList);

var _articleLayout = __webpack_require__(5);

var _articleLayout2 = _interopRequireDefault(_articleLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainTitle = _react2.default.createElement(
  'span',
  null,
  'Blacktbox-list ',
  _react2.default.createElement(
    'a',
    { target: '_blank', className: 'linkBtn', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-list' },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'github', fixedWidth: true })
  )
);
var mainDescriptionStr = 'Example';

var exampleTitle = 'EXAMPLE';
var exampleButtonText = 'Show listRef to console.log';

var rourceCodeTitle = 'SOURCECODE';
var rourceCodeSubTitle_Render = 'Render';
var rourceCodeSubTitle_List = 'List';
var rourceCodeSubTitle_Style = 'Style';

var ROURCECODE_RENDER_PRE = '<BTBList \n  listArr: listArr,\n  styleObj: styleObj,\n  inputRefFn={(ref)=>{this.listRef=ref}}\n/>';
var ROURCECODE_LIST_PRE = 'listArr = [\n{\n  \'name\': \'Tree: 1\',\n  \'children\': [\n  {\n    \'name\': \'Tree: 1-1\'\n  },\n  {\n    \'name\': \'Tree: 1-2\',\n    \'children\': [\n    {\n      \'name\': \'Tree: 1-2-1\'\n    },\n    {\n      \'name\': \'Tree: 1-2-2\'\n    }]\n  },\n  {\n    \'name\': \'Tree: 1-3\'\n  }]\n},\n{\n  \'name\': \'Tree: 2\',\n  \'children\': [\n  {\n    \'name\': \'Tree: 2-1\',\n    \'children\': [\n    {\n      \'name\': \'Tree: 2-1-1\',\n      \'children\': [\n      {\n        \'name\': \'Tree: 2-1-1-1\'\n      }]\n    }]\n  },\n  {\n    \'name\': \'Tree: 2-2\'\n  }]\n}];';
var ROURCECODE_STYLE_PRE = 'styleObj = {\n  \'btb-list\': {\n    \'background-color\': \'#e6f7ff\',\n    \'font-weight\': \'bold\'\n  },\n  \'layer-item\': {\n    \'list-style-type\': \'none\'\n  },\n  \'layer-0\': {\n    \'color\': \'red\',\n    \'font-size\': \'16px\'\n  },\n  \'layer-1\': {\n    \'color\': \'purple\',\n    \'font-size\': \'14px\'\n  },\n  \'layer-2\': {\n    \'color\': \'blue\',\n    \'font-size\': \'12px\'\n  }\n};';

var listArr = [{
  'name': 'Tree: 1',
  'children': [{
    'name': 'Tree: 1-1'
  }, {
    'name': 'Tree: 1-2',
    'children': [{
      'name': 'Tree: 1-2-1'
    }, {
      'name': 'Tree: 1-2-2'
    }]
  }, {
    'name': 'Tree: 1-3'
  }]
}, {
  'name': 'Tree: 2',
  'children': [{
    'name': 'Tree: 2-1',
    'children': [{
      'name': 'Tree: 2-1-1',
      'children': [{
        'name': 'Tree: 2-1-1-1'
      }]
    }]
  }, {
    'name': 'Tree: 2-2'
  }]
}];
var styleObj = {
  'btb-list': {
    'background-color': '#bae7ff',
    'padding': '2px',
    'font-weight': 'bold'
  },
  'layer-item': {
    'list-style-type': 'square'
  },
  'layer-0': {
    'color': '#000000',
    'font-size': '20px'
  },
  'layer-1': {
    'color': '#262626',
    'font-size': '18px'
  },
  'layer-2': {
    'color': '#595959',
    'font-size': '16px'
  },
  'layer-3': {
    'color': '#8c8c8c',
    'font-size': '14px'
  }
};;

var Example = function (_Component) {
  _inherits(Example, _Component);

  function Example(props) {
    _classCallCheck(this, Example);

    var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

    _this.listRef = [];
    return _this;
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'wrapper wrapper-basic' },
        _react2.default.createElement(
          _articleLayout2.default.MainTitle,
          null,
          mainTitle
        ),
        _react2.default.createElement(
          _articleLayout2.default.MainDescription,
          null,
          mainDescriptionStr
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            exampleTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(_blacktboxList2.default, {
              listArr: listArr,
              styleObj: styleObj,
              inputRefFn: function inputRefFn(ref) {
                _this2.listRef = ref;
              }
            })
          ),
          _react2.default.createElement(
            _articleLayout2.default.Item,
            null,
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  _this2._consoleLogRef();
                } },
              exampleButtonText
            )
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            rourceCodeTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              _articleLayout2.default.SectionSubtitle,
              null,
              rourceCodeSubTitle_Render
            ),
            _react2.default.createElement(
              _articleLayout2.default.Pre,
              null,
              ROURCECODE_RENDER_PRE
            )
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              _articleLayout2.default.SectionSubtitle,
              null,
              rourceCodeSubTitle_Style
            ),
            _react2.default.createElement(
              _articleLayout2.default.Pre,
              null,
              ROURCECODE_STYLE_PRE
            )
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              _articleLayout2.default.SectionSubtitle,
              null,
              rourceCodeSubTitle_List
            ),
            _react2.default.createElement(
              _articleLayout2.default.Pre,
              null,
              ROURCECODE_LIST_PRE
            )
          )
        )
      ));
      return content;
    }
  }, {
    key: '_consoleLogRef',
    value: function _consoleLogRef() {
      var listRef = _reactDom2.default.findDOMNode(this.listRef);
      console.log('listRef', listRef);
    }
  }]);

  return Example;
}(_react.Component);

exports.default = Example;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _blacktboxTable = __webpack_require__(31);

var _blacktboxTable2 = _interopRequireDefault(_blacktboxTable);

var _blacktboxList = __webpack_require__(12);

var _blacktboxList2 = _interopRequireDefault(_blacktboxList);

var _articleLayout = __webpack_require__(5);

var _articleLayout2 = _interopRequireDefault(_articleLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainTitle = _react2.default.createElement(
  'span',
  null,
  'Blacktbox-table ',
  _react2.default.createElement(
    'a',
    { target: '_blank', className: 'linkBtn', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-table' },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'github', fixedWidth: true })
  )
);
var mainDescriptionStr = 'Table-maker tool.';

var installationTitle = 'INSTALLATION';
var installationContent = _react2.default.createElement(
  'span',
  null,
  'Using with ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://www.npmjs.com' },
    'NPM',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '.'
);

var renderTitle = 'RENDER';
var renderContent = _react2.default.createElement(
  'span',
  null,
  'Notice: DOM properties are still work with ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://reactjs.org/docs/dom-elements.html' },
    'ReactJS',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '.'
);

var nodeTreeTitle = 'NODE TREE';
var nodeTreeContent = 'Here showing the node structure. Each node with className is for convenience to style. You have two way to use it. The first way is used with css selector, and the other way is used component\'s input: styleObj. But for blacktbox-table, we have two structure for two mode used.';
var nodeTreeInfoTitle = 'Mode Info:';
var nodeTreeListTitle = 'Mode List:';
var nodeTreeNotice = 'Notice: The th.index come from tableHeadArr.';

var INSTALLATION_PRE = '$ npm install --save blacktbox-table\n\n// using ES6 modules\nimport BTBTable from \'blacktbox-table\';\n\n// using CommonJS modules\nvar BTBTable = require(\'blacktbox-table\');';
var RENDER_PRE = '<BTBTable \n  tableHeadArr: [],\n  tableBobyArr: [],\n  modeObj: {\n    mode: \'list\'\n  },\n  styleObj: {},\n  inputRefFn: ()=>{}\n/>';
// const TABLEHEADARR_PRE = 
// `tableHeadArr = [{
//   name: '',
//   index: '',
//   sortType: 'string',
//   sortFn: ()=>{},
//   defaultSortStatus: 'ascending'
// }, ...]`;
var TABLEHEADARR_PRE = 'tableHeadArr = [{\n  name: \'\',\n  index: \'\'\n}, ...]';
var TABLEBODYARR_PRE = 'tableBobyArr = [\n  {tableHeadArr.index}: \'\'\n  , ...\n]';
var STYLEOBJ_PRE = 'styleObj = {\n  \'Node\'s className\': {CSS Object}\n  , ...\n}';
var PARAM_HEAD = new Array({ name: 'Property Name', index: 'name' }, { name: 'Type', index: 'type' }, { name: 'Default', index: 'default' }, { name: 'Notice', index: 'notice' });
var PARAM_BODY = new Array({ name: 'tableHeadArr', type: 'Array', default: '[]', notice: _react2.default.createElement(
    'pre',
    { className: 'content-pre' },
    TABLEHEADARR_PRE
  ) }, { name: '- name', type: 'String or Node', default: '\'\'', notice: 'String or Node to show table head name.' }, { name: '- index', type: 'String', default: '\'\'', notice: 'index of tableBobyArr.index.' },
//   {name: '- sortType',          type: 'String',         default: '\'\'',    notice: '[Unsupported Yet] index\'s sort type. {value: custom, string, number, ip, mac}'},
//   {name: '- sortFn',            type: 'Function',       default: '()=>{}',  notice: '[Unsupported Yet] define sort function while sortType is custom.'},
//   {name: '- defaultSortStatus', type: 'String',         default: '\'\'',    notice: '[Unsupported Yet] String to index tableBobyArr[\'index\'].'},
{ name: 'tableBobyArr', type: 'Array', default: '[]', notice: _react2.default.createElement(
    'pre',
    { className: 'content-pre' },
    TABLEBODYARR_PRE
  ) }, { name: 'modeObj', type: 'Object', default: '{}', notice: '' }, { name: '- mode', type: 'String', default: 'list', notice: 'mode of table. {value: info, list}' },
//   {name: '- listFeatureSearch', type: 'Object',         default: '{}',      notice: '[Unsupported Yet] Table in list mode can show result with search\'s parameters'},
//   {name: '- - keyword',         type: 'String',         default: '\'\'',    notice: '[Unsupported Yet] Keyword to search data. Keyword with space can do multiple conditions search.'},
//   {name: '- - matchAll',        type: 'Boolean',        default: 'false',   notice: '[Unsupported Yet] MatchAll to search data matched with all conditions.'},
//   {name: '- listFeatureSort',   type: 'Object',         default: '{}',      notice: '[Unsupported Yet] Table in list mode can show result with sort\'s parameters.'},
//   {name: '- - enable',          type: 'Boolean',        default: 'false',   notice: '[Unsupported Yet] Enable sort feature for table in list mode.'},
//   {name: '- - defaultSortHead', type: 'String',         default: '\'\'',    notice: '[Unsupported Yet] Default active head to sort table.'},
//   {name: '- listFeaturePage',   type: 'Object',         default: '{}',      notice: '[Unsupported Yet] Table in list mode can show result with page\'s parameters.'},
//   {name: '- - perPage',         type: 'Number',         default: '0',       notice: '[Unsupported Yet] Show how many data by per-group.'},
//   {name: '- - page',            type: 'Number',         default: '0',       notice: '[Unsupported Yet] Index page of table to show'},
{ name: 'styleObj', type: 'Object', default: '{}', notice: _react2.default.createElement(
    'pre',
    { className: 'content-pre' },
    STYLEOBJ_PRE
  ) }, { name: 'inputRefFn', type: 'Function', default: '()=>{}', notice: 'To catch ref with (ref)=>{variable = ref}.' });

var NODE_TREE_INFO = new Array({
  'name': '<div> .btb-table',
  'children': [{
    'name': '<table> .table-info',
    'children': [{
      'name': '<tbody> .info-tbody',
      'children': [{
        'name': '<tr> .tbody-tr',
        'children': [{
          'name': '<th> .tr-th (.th-{th.index})'
        }, {
          'name': '<td> .tr-td (.td-{th.index})'
        }]
      }]
    }]
  }]
});
var NODE_TREE_LIST = new Array({
  'name': '<div> .btb-table',
  'children': [{
    'name': '<table> .table-info',
    'children': [{
      'name': '<thead> .info-thead',
      'children': [{
        'name': '<tr> .thead-tr',
        'children': [{
          'name': '<th> .tr-th (.th-{th.index})'
        }]
      }]
    }, {
      'name': '<tbody> .info-tbody',
      'children': [{
        'name': '<tr> .tbody-tr',
        'children': [{
          'name': '<td> .tr-td (.td-{th.index})'
        }]
      }]
    }]
  }]
});
var PARAM_MODE = {
  mode: 'list'
};

var Basic = function (_Component) {
  _inherits(Basic, _Component);

  function Basic() {
    _classCallCheck(this, Basic);

    return _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).apply(this, arguments));
  }

  _createClass(Basic, [{
    key: 'render',
    value: function render() {
      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'wrapper wrapper-basic' },
        _react2.default.createElement(
          _articleLayout2.default.MainTitle,
          null,
          mainTitle
        ),
        _react2.default.createElement(
          _articleLayout2.default.MainDescription,
          null,
          mainDescriptionStr
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            installationTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            installationContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Pre,
            null,
            INSTALLATION_PRE
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            renderTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Pre,
            null,
            RENDER_PRE
          ),
          _react2.default.createElement(_blacktboxTable2.default, {
            tableHeadArr: PARAM_HEAD,
            tableBobyArr: PARAM_BODY,
            modeObj: PARAM_MODE,
            className: 'content-paramlist'
          }),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            renderContent
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            nodeTreeTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            nodeTreeContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              _articleLayout2.default.SectionSubtitle,
              null,
              nodeTreeInfoTitle
            ),
            _react2.default.createElement(_blacktboxList2.default, {
              className: 'content-nodetree',
              listArr: NODE_TREE_INFO
            })
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              _articleLayout2.default.SectionSubtitle,
              null,
              nodeTreeListTitle
            ),
            _react2.default.createElement(_blacktboxList2.default, {
              className: 'content-nodetree',
              listArr: NODE_TREE_LIST
            }),
            _react2.default.createElement(
              _articleLayout2.default.Content,
              null,
              nodeTreeNotice
            )
          )
        )
      ));
      return content;
    }
  }]);

  return Basic;
}(_react.Component);

;

exports.default = Basic;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _blacktboxTable = __webpack_require__(31);

var _blacktboxTable2 = _interopRequireDefault(_blacktboxTable);

var _blacktboxList = __webpack_require__(12);

var _blacktboxList2 = _interopRequireDefault(_blacktboxList);

var _articleLayout = __webpack_require__(5);

var _articleLayout2 = _interopRequireDefault(_articleLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainTitle = _react2.default.createElement(
  'span',
  null,
  'Blacktbox-menu ',
  _react2.default.createElement(
    'a',
    { target: '_blank', className: 'linkBtn', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-menu' },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'github', fixedWidth: true })
  )
);
var mainDescriptionStr = 'Menu-maker tool.';

var installationTitle = 'INSTALLATION';
var installationContent = _react2.default.createElement(
  'span',
  null,
  'Using with ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://www.npmjs.com' },
    'NPM',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '.'
);

var renderTitle = 'RENDER';
var renderContent = _react2.default.createElement(
  'span',
  null,
  'Notice: DOM properties are still work with ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://reactjs.org/docs/dom-elements.html' },
    'ReactJS',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '.'
);

var nodeTreeTitle = 'NODE TREE';
var nodeTreeContent = 'Here showing the node structure. Each node with className is for convenience to style. You have two way to use it. The first way is used with css selector, and the other way is used component\'s input: styleObj.';
var nodeTreeNotice = 'Notice: The layer.index is counted base on 0.';

var INSTALLATION_PRE = '$ npm install --save blacktbox-menu\n\n// using ES6 modules\nimport BTBMenu from \'blacktbox-menu\';\n\n// using CommonJS modules\nvar BTBMenu = require(\'blacktbox-menu\');';
var RENDER_PRE = '<BTBMenu \n  menuArr: [],\n  styleObj: {},\n  inputRefFn: ()=>{},\n  acticveIndex: \'\',\n  itemOnClickFn: ()=>{},\n  featureCollapsible: {\n    enable: false,\n    customCollapseButton: \'\',\n    itemOnCollapseFn: ()=>{}\n  }\n/>';
var MENUARR_PRE = 'menuArr = [{\n  name: \'\',\n  index: \'\',\n  defaultCollapse: true,\n  children: [...]\n}, ...]';
var SUBMENUARR_PRE = 'children = [{\n  name: \'\',\n  index: \'\',\n  defaultCollapse: true,\n  children: [...]\n}, ...]';
var STYLEOBJ_PRE = 'styleObj = {\n  \'Node\'s className\': {CSS Object}\n  , ...\n}';
var PARAM_HEAD = new Array({ name: 'Property Name', index: 'name' }, { name: 'Type', index: 'type' }, { name: 'Default', index: 'default' }, { name: 'Notice', index: 'notice' });
var PARAM_BODY = new Array({ name: 'menuArr', type: 'Array', default: '[]', notice: _react2.default.createElement(
    'pre',
    { className: 'content-pre' },
    MENUARR_PRE
  ) }, { name: '- name', type: 'String or Node', default: '\'\'', notice: 'String or Node to show layer name.' }, { name: '- index', type: 'String', default: '\'\'', notice: 'Menu entry\'s ID.' }, { name: '- defaultCollapse', type: 'Boolean', default: 'false', notice: 'Menu entry\'s default collapse status. While featureCollapsible enabled, the default is true' }, { name: '- children', type: 'Array', default: '[]', notice: _react2.default.createElement(
    'pre',
    { className: 'content-pre' },
    SUBMENUARR_PRE
  ) }, { name: 'acticveIndex', type: 'String', default: '\'\'', notice: 'Default active menu entry\'s ID.' }, { name: 'itemOnClickFn', type: 'Function', default: '()=>{}', notice: 'Menu entry\'s onClick function.' }, { name: 'featureCollapsible', type: 'Object', default: '{}', notice: '' }, { name: '- enable', type: 'Boolean', default: 'false', notice: 'Enable collapse function of menu.' }, { name: '- customCollapseButton', type: 'String or Node', default: '\'\'', notice: 'We have default collapse button, but you can customize our collapse button by using this.' }, { name: '- itemOnCollapseFn', type: 'Function', default: '()=>{}', notice: 'Menu entry\'s arrow onClick function.' }, { name: 'styleObj', type: 'Object', default: '{}', notice: _react2.default.createElement(
    'pre',
    { className: 'content-pre' },
    STYLEOBJ_PRE
  ) }, { name: 'inputRefFn', type: 'Function', default: '()=>{}', notice: 'To catch ref with (ref)=>{variable = ref}.' });

var NODE_TREE = new Array({
  'name': '<div> .btb-menu',
  'children': [{
    'name': '<ul> .menu-layer-0',
    'children': [{
      'name': '<li> .layer-item',
      'children': [{
        'name': '<div> .iterm-content',
        'children': [{
          'name': '<div> .content-name'
        }, {
          'name': '<div> .content-collapse (.collapsed)',
          'children': [{
            'name': '<div> .collapse-arrow'
          }]
        }, {
          'name': '<div> .content-custom-collapse (.collapsed)',
          'children': [{
            'name': '{customized}'
          }]
        }]
      }, {
        'name': '<div> .item-submenu (.collapsed)',
        'children': [{
          'name': '<ul> .menu-layer-1'
        }]
      }]
    }]
  }]
});
var PARAM_MODE = {
  mode: 'list'
};

var Basic = function (_Component) {
  _inherits(Basic, _Component);

  function Basic() {
    _classCallCheck(this, Basic);

    return _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).apply(this, arguments));
  }

  _createClass(Basic, [{
    key: 'render',
    value: function render() {
      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'wrapper wrapper-basic' },
        _react2.default.createElement(
          _articleLayout2.default.MainTitle,
          null,
          mainTitle
        ),
        _react2.default.createElement(
          _articleLayout2.default.MainDescription,
          null,
          mainDescriptionStr
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            installationTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            installationContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Pre,
            null,
            INSTALLATION_PRE
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            renderTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Pre,
            null,
            RENDER_PRE
          ),
          _react2.default.createElement(_blacktboxTable2.default, {
            tableHeadArr: PARAM_HEAD,
            tableBobyArr: PARAM_BODY,
            modeObj: PARAM_MODE,
            className: 'content-paramlist'
          }),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            renderContent
          )
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            nodeTreeTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            nodeTreeContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(_blacktboxList2.default, {
              className: 'content-nodetree',
              listArr: NODE_TREE
            })
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            nodeTreeNotice
          )
        )
      ));
      return content;
    }
  }]);

  return Basic;
}(_react.Component);

;

exports.default = Basic;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _articleLayout = __webpack_require__(5);

var _articleLayout2 = _interopRequireDefault(_articleLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainTitle = _react2.default.createElement(
  'span',
  null,
  'Blacktbox-menu ',
  _react2.default.createElement(
    'a',
    { target: '_blank', className: 'linkBtn', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-menu' },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'github', fixedWidth: true })
  )
);
var mainDescriptionStr = 'Advanced application with Blacktbox-menu.';

var redirectTitle = 'REDIRECT';
var redirectContent = _react2.default.createElement(
  'span',
  null,
  'Here, we talk about "How to redirect with Blacktbox-menu". And it will work with ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://github.com/ReactTraining/react-router' },
    'React-router',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  '. It is quite enough, if we only need to redirect by clicking menu. However sometimes we need to redirect after function finished or depend on its result. So, we choose a general way to complete the menu system. As we know, there are big different bwteen 2.x/3.x and 4.x. We separate to two part for 2.x/3.x and 4.x. Besides, the way with 4.x is used in our Homepage(Demonstration).'
);

var reactRouterVersion23Title = '2.x/3.x';
var reactRouterVersion23RouterListContent = 'For 2.x/3.x, we need to build a router list:';
var reactRouterVersion23RedirectContent = 'And then, we can use <Link> or hashHistory.push to do redirect.';
var reactRouterVersion4Title = '4.x';
var reactRouterVersion4RouterListContent = 'Same as 4.x, we need to build a router list, too:';
var reactRouterVersion4RedirectContent = _react2.default.createElement(
  'span',
  null,
  'And then, we can use ',
  '<Link>',
  ' to do redirect. However if we need to use something like hashHistory.push to do redirect. You can use withRouter. But we prefer to build our history to use. In that way, we need to install ',
  _react2.default.createElement(
    'a',
    { target: '_blank', href: 'https://www.npmjs.com/package/history' },
    'History',
    _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
  ),
  ' additionally.'
);
var reactRouterVersion4CreateHistoryContent = 'Then we need to have a component to create our history.';
var reactRouterVersion4HistoryPushContent = 'Finally, we can use our history.push to do redirect. Also we can add the history.push to our Blacktbox-menu\'s parameter: itemOnClickFn with a router list to switch path.';

var REACTROUTER_23_ROUTER = '<Router history={hashHistory}>\n  <Route path=\'/\' component={Index}>\n    ...\n  <Route>\n</Router>';
var REACTROUTER_23_REDIRECT = '<Link to={...}>\n\nhashHistory.push(...)';
var REACTROUTER_4_ROUTER = '<Switch>\n  <Route path=\'/\' component={Index}>\n    ...\n  <Route>\n</Switch>';
var HISTORY_INSTALL = 'npm install --save history';
var HISTORY_CREATE = 'import { createHashHistory } from \'history\';\nexport default createHashHistory();';
var REACTROUTER_4_REDIRECT = '// import our history.\nimport history from \'./history.js\';\n\n// work with Blacktbox-menu.\n<BTBMenu \n  menuArr={menuList}\n  itemOnClickFn={(infoObj)=>{this._itemOnClickFn(infoObj);}}\n/>\n\n// _itemOnClickFn.\n_itemOnClickFn (infoObj) {\n  // infoObj is whole information catched from menuArr about which item clicked. The routeList is our router list.\n  let path = routeList[infoObj.index];\n  if(path)\n  {\n    // redirect with history.\n    history.push(path);\n  }\n};\n';

var Adavnce = function (_Component) {
  _inherits(Adavnce, _Component);

  function Adavnce() {
    _classCallCheck(this, Adavnce);

    return _possibleConstructorReturn(this, (Adavnce.__proto__ || Object.getPrototypeOf(Adavnce)).apply(this, arguments));
  }

  _createClass(Adavnce, [{
    key: 'render',
    value: function render() {
      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'wrapper wrapper-advance' },
        _react2.default.createElement(
          _articleLayout2.default.MainTitle,
          null,
          mainTitle
        ),
        _react2.default.createElement(
          _articleLayout2.default.MainDescription,
          null,
          mainDescriptionStr
        ),
        _react2.default.createElement(
          _articleLayout2.default.Section,
          null,
          _react2.default.createElement(
            _articleLayout2.default.SectionTitle,
            null,
            redirectTitle
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            redirectContent
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              _articleLayout2.default.SectionSubtitle,
              null,
              reactRouterVersion23Title
            ),
            _react2.default.createElement(
              _articleLayout2.default.Content,
              null,
              reactRouterVersion23RouterListContent
            ),
            _react2.default.createElement(
              _articleLayout2.default.Pre,
              null,
              REACTROUTER_23_ROUTER
            ),
            _react2.default.createElement(
              _articleLayout2.default.Content,
              null,
              reactRouterVersion23RedirectContent
            ),
            _react2.default.createElement(
              _articleLayout2.default.Pre,
              null,
              REACTROUTER_23_REDIRECT
            )
          ),
          _react2.default.createElement(
            _articleLayout2.default.Content,
            null,
            _react2.default.createElement(
              _articleLayout2.default.SectionSubtitle,
              null,
              reactRouterVersion4Title
            ),
            _react2.default.createElement(
              _articleLayout2.default.Content,
              null,
              reactRouterVersion4RouterListContent
            ),
            _react2.default.createElement(
              _articleLayout2.default.Pre,
              null,
              REACTROUTER_4_ROUTER
            ),
            _react2.default.createElement(
              _articleLayout2.default.Content,
              null,
              reactRouterVersion4RedirectContent
            ),
            _react2.default.createElement(
              _articleLayout2.default.Pre,
              null,
              HISTORY_INSTALL
            ),
            _react2.default.createElement(
              _articleLayout2.default.Content,
              null,
              reactRouterVersion4CreateHistoryContent
            ),
            _react2.default.createElement(
              _articleLayout2.default.Pre,
              null,
              HISTORY_CREATE
            ),
            _react2.default.createElement(
              _articleLayout2.default.Content,
              null,
              reactRouterVersion4HistoryPushContent
            ),
            _react2.default.createElement(
              _articleLayout2.default.Pre,
              null,
              REACTROUTER_4_REDIRECT
            )
          )
        )
      ));
      return content;
    }
  }]);

  return Adavnce;
}(_react.Component);

;

exports.default = Adavnce;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _home = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'wrapper wrapper-basic' },
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            '404 Page Not Found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            'Oops, the page of URL is not exist, or we are working on it.'
          )
        )
      );
    }
  }]);

  return NotFound;
}(_react.Component);

;

exports.default = NotFound;

/***/ })
],[55]);