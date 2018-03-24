webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flux = __webpack_require__(77);

var MyDispatcher = new _flux.Dispatcher();
exports.default = MyDispatcher;

/***/ }),
/* 9 */
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
  'BTB_ATCS_COMPONENT_PNC': '/article/component_presentational_and_container',

  'BTB_DEMO': '/blacktbox-demo',

  'BTB_LIST_BASIC': '/blacktbox-list/basic',

  'BTB_TABLE_BASIC': '/blacktbox-table/basic',

  'BTB_MENU_BASIC': '/blacktbox-menu/basic',
  'BTB_MENU_ADV': '/blacktbox-menu/advanced'
};

exports.default = routeList;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = __webpack_require__(33);

var MyHashHistory = new _history.createHashHistory();
exports.default = MyHashHistory;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.SideContent_backdoor = SideContent_backdoor;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(16);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _blacktboxMenu = __webpack_require__(85);

var _blacktboxMenu2 = _interopRequireDefault(_blacktboxMenu);

var _menuList = __webpack_require__(86);

var _menuList2 = _interopRequireDefault(_menuList);

var _routeList = __webpack_require__(9);

var _routeList2 = _interopRequireDefault(_routeList);

var _history = __webpack_require__(10);

var _history2 = _interopRequireDefault(_history);

var _about = __webpack_require__(87);

var _about2 = _interopRequireDefault(_about);

var _index = __webpack_require__(88);

var _index2 = _interopRequireDefault(_index);

var _Flux = __webpack_require__(90);

var _Flux2 = _interopRequireDefault(_Flux);

var _Redux = __webpack_require__(104);

var _Redux2 = _interopRequireDefault(_Redux);

var _Component_PresentationalNContainer = __webpack_require__(105);

var _Component_PresentationalNContainer2 = _interopRequireDefault(_Component_PresentationalNContainer);

var _index3 = __webpack_require__(115);

var _index4 = _interopRequireDefault(_index3);

var _basic = __webpack_require__(116);

var _basic2 = _interopRequireDefault(_basic);

var _basic3 = __webpack_require__(117);

var _basic4 = _interopRequireDefault(_basic3);

var _basic5 = __webpack_require__(118);

var _basic6 = _interopRequireDefault(_basic5);

var _advanced = __webpack_require__(119);

var _advanced2 = _interopRequireDefault(_advanced);

var _ = __webpack_require__(120);

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

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    window.scrollTo(0, 0);
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'wrapper wrapper-home' },
        _react2.default.createElement('div', { className: 'sideContentBG' }),
        _react2.default.createElement(SideContent, null),
        _react2.default.createElement(MainContent, null)
      ));
      return content;
    }
  }]);

  return Home;
}(_react.Component);

;

var SideContent = function (_Component2) {
  _inherits(SideContent, _Component2);

  function SideContent(props) {
    _classCallCheck(this, SideContent);

    var _this2 = _possibleConstructorReturn(this, (SideContent.__proto__ || Object.getPrototypeOf(SideContent)).call(this, props));

    _this2.env = {
      menuActiveIndex: 'ABOUT'
    };
    return _this2;
  }

  _createClass(SideContent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      SideContentThis = this;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      SideContentThis = this;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'sideContent' },
        this.header(),
        _react2.default.createElement(_blacktboxMenu2.default, {
          className: 'menu',
          menuArr: _menuList2.default,
          acticveIndex: this.env.menuActiveIndex,
          itemOnClickFn: function itemOnClickFn(infoObj) {
            _this3._itemOnClickFn(infoObj);
          },
          featureCollapsible: {
            enable: true
          }
        })
      ));
      return content;
    }
  }, {
    key: 'header',
    value: function header() {
      var content = [];
      var groupname = 'BTB Laboratory';
      var welcome = 'Hello! Friend.';
      content.push(_react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
          'div',
          { className: 'groupname' },
          groupname
        ),
        _react2.default.createElement(
          'div',
          { className: 'icon' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'user-circle-o', fixedWidth: true })
        ),
        _react2.default.createElement(
          'div',
          { className: 'welcome' },
          welcome
        )
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

var MainContent = function (_Component3) {
  _inherits(MainContent, _Component3);

  function MainContent() {
    _classCallCheck(this, MainContent);

    return _possibleConstructorReturn(this, (MainContent.__proto__ || Object.getPrototypeOf(MainContent)).apply(this, arguments));
  }

  _createClass(MainContent, [{
    key: 'render',
    value: function render() {
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
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_ATCS_COMPONENT_PNC, component: _Component_PresentationalNContainer2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_DEMO, component: _index4.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_LIST_BASIC, component: _basic2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_TABLE_BASIC, component: _basic4.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_MENU_BASIC, component: _basic6.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routeList2.default.BTB_MENU_ADV, component: _advanced2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { component: _2.default })
        )
      ));
      return content;
    }
  }]);

  return MainContent;
}(_react.Component);

;

exports.default = Home;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* present data in server */
var serverData = new Array();

var DATAMEMBERS = 5;
var random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';
var random_name = 'abcdefghijklmnopqrstuvwxyz';

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
        randomNumber = Math.round(Math.random() * 100);
        value += random_uId.split('')[randomNumber % random_uId.length];
      };
      for (var baseIndex = 0; baseIndex < base.length; baseIndex++) {
        if (base[baseIndex].uId == value) {
          // if duplicate uId, random again
          value = randomData('id', base);
          break;
        };
      };
      break;
    case 'name':
      valueLength = Math.ceil(Math.random() * 10);
      for (var _idIndex = 0; _idIndex < valueLength; _idIndex++) {
        randomNumber = Math.round(Math.random() * random_name.length);
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
      dataTemp['uId'] = randomData('id', serverData);
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
    dataTemp['uId'] = randomData('id', serverData);
    dataTemp['name'] = obj['name'];
    serverData.push(dataTemp);
    return serverData;
  };
  var deleteData = function deleteData(obj) {
    for (var i = 0; i < serverData.length; i++) {
      if (obj['uId'] == serverData[i].uId) {
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
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
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
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(97)(module)))

/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* present data in server */
var serverData = new Array();

var DATAMEMBERS = 5;
var random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';
var random_name = 'abcdefghijklmnopqrstuvwxyz';

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
        randomNumber = Math.round(Math.random() * 100);
        value += random_uId.split('')[randomNumber % random_uId.length];
      };
      for (var baseIndex = 0; baseIndex < base.length; baseIndex++) {
        if (base[baseIndex].uId == value) {
          // if duplicate uId, random again
          value = randomData('id', base);
          break;
        };
      };
      break;
    case 'name':
      valueLength = Math.ceil(Math.random() * 10);
      for (var _idIndex = 0; _idIndex < valueLength; _idIndex++) {
        randomNumber = Math.round(Math.random() * random_name.length);
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
      dataTemp['uId'] = randomData('id', serverData);
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
    dataTemp['uId'] = randomData('id', serverData);
    dataTemp['name'] = obj['name'];
    serverData.push(dataTemp);
    return serverData;
  };
  var deleteData = function deleteData(obj) {
    for (var i = 0; i < serverData.length; i++) {
      if (obj['uId'] == serverData[i].uId) {
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* present data in server */
var serverData = new Array();

var DATAMEMBERS = 5;
var random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';
var random_name = 'abcdefghijklmnopqrstuvwxyz';

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
        randomNumber = Math.round(Math.random() * 100);
        value += random_uId.split('')[randomNumber % random_uId.length];
      };
      for (var baseIndex = 0; baseIndex < base.length; baseIndex++) {
        if (base[baseIndex].uId == value) {
          // if duplicate uId, random again
          value = randomData('id', base);
          break;
        };
      };
      break;
    case 'name':
      valueLength = Math.ceil(Math.random() * 10);
      for (var _idIndex = 0; _idIndex < valueLength; _idIndex++) {
        randomNumber = Math.round(Math.random() * random_name.length);
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
      dataTemp['uId'] = randomData('id', serverData);
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
    dataTemp['uId'] = randomData('id', serverData);
    dataTemp['name'] = obj['name'];
    serverData.push(dataTemp);
    return serverData;
  };
  var deleteData = function deleteData(obj) {
    for (var i = 0; i < serverData.length; i++) {
      if (obj['uId'] == serverData[i].uId) {
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(16);

var _dispatcher = __webpack_require__(8);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

__webpack_require__(79);

var _home = __webpack_require__(13);

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
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = __webpack_require__(78);


/***/ }),
/* 78 */
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

var invariant = __webpack_require__(26);

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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(82)(content, options);
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(81)(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-family: Arial, 'Times New Roman', Times, serif;\n  font-weight: 100;\n  overflow-x: hidden;\n}\nspan + span {\n  margin-left: 5px;\n}\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n.wrapper.wrapper-home {\n  background-color: #fff;\n}\n.wrapper.wrapper-basic,\n.wrapper.wrapper-advance {\n  width: calc(100% - (15px * 2));\n  margin: auto;\n  padding: 15px 15px;\n}\n.context {\n  width: 100%;\n  font-size: 14px;\n}\n.context + .context {\n  margin-top: 30px;\n}\n.context .title {\n  color: #aaa;\n  border-bottom: 1px solid #aaa;\n  margin: 0 15px;\n  font-weight: bold;\n}\n.context .content {\n  color: #000;\n  margin: 10px 30px;\n}\n.context .content .post,\n.context .content .update {\n  color: #aaa;\n}\n.context .content-pre {\n  color: #f3f3f3;\n  background-color: #373940;\n  font-family: Consolas, \"Liberation Mono\", Menlo, Monaco, Courier, monospace;\n  margin: 10px 0;\n  padding: 10px 15px;\n  white-space: pre-wrap;\n}\n.context .content-image,\n.context .content-example {\n  text-align: center;\n  margin: 10px 0;\n}\n.context .buttonGroup {\n  margin: 0 15px;\n}\n.context .buttonGroup .backButton {\n  border: 1px solid #aaa;\n  border-radius: 15px;\n  color: #aaa;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 13px;\n  padding: 3px 5px;\n}\n.context .buttonGroup .backButton:hover {\n  border-color: #000;\n  color: #000;\n}\n.linkBtn {\n  cursor: pointer;\n  color: #aaa;\n}\n.linkBtn:hover {\n  color: #000;\n}\n.wrapper .sideContentBG {\n  background-color: #000;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 200px;\n}\n.wrapper .sideContent {\n  width: 200px;\n  background-color: #000;\n  color: #fff;\n  float: left;\n  min-height: 100vh;\n}\n.wrapper .sideContent .header {\n  background-color: #61dafb;\n  margin-bottom: 15px;\n  position: relative;\n  height: 104px;\n}\n.wrapper .sideContent .groupname {\n  background-color: #000;\n  line-height: 20px;\n  text-align: right;\n  padding: 2px 15px;\n}\n.wrapper .sideContent .icon {\n  -webkit-border-radius: calc(50px / 2);\n  -moz-border-radius: calc(50px / 2);\n  border-radius: calc(50px / 2);\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  background-color: #000;\n  text-align: center;\n  margin: 15px;\n  font-size: 36px;\n}\n.wrapper .sideContent .welcome {\n  left: calc(50px + (15px * 2));\n  line-height: 20px;\n  text-align: center;\n  padding: 30px 0;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: #000;\n}\n.wrapper .mainContent {\n  width: calc(100% - 200px);\n  margin-left: 200px;\n  background-color: transparent;\n  min-height: 100vh;\n}\n.example-wrapper {\n  display: inline-block;\n}\n.example-wrapper .example-part {\n  margin: 5px;\n}\n.example-userList {\n  padding: 5px;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px 2px #aaa;\n}\n.example-userList .userList-add .userList-input {\n  border: 2px solid #aaa;\n  border-radius: 5px;\n  font-size: 10px;\n  padding: 2px 10px;\n}\n.example-userList .userList-add .userList-input:focus,\n.example-userList .userList-add .userList-input:hover {\n  border-color: #777;\n}\n.example-userList .userList-add .userList-addButton {\n  color: #aaa;\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  font-size: 15px;\n  margin-left: 5px;\n  padding: 0;\n  vertical-align: top;\n  cursor: pointer;\n}\n.example-userList .userList-add .userList-addButton:hover {\n  color: #ff0000;\n}\n.example-userList .userList-list {\n  border: 2px solid #aaa;\n  border-radius: 7px;\n  padding: 0px;\n  margin: 10px 0;\n}\n.example-userList .userList-list .userList-entry {\n  border-radius: 5px;\n  cursor: default;\n  padding: 2px 5px;\n  position: relative;\n  text-align: left;\n  overflow: hidden;\n}\n.example-userList .userList-list .userList-entry .userList-deleteButton {\n  -webkit-transition: opacity 0.5s ease 0s, right 0.5s ease 0s;\n  -moz-transition: opacity 0.5s ease 0s, right 0.5s ease 0s;\n  -o-transition: opacity 0.5s ease 0s, right 0.5s ease 0s;\n  transition: opacity 0.5s ease 0s, right 0.5s ease 0s;\n  color: #ff0000;\n  opacity: 0;\n  position: absolute;\n  right: -20px;\n  top: 3px;\n  cursor: pointer;\n}\n.example-userList .userList-list .userList-entry:hover {\n  background-color: #ccc;\n}\n.example-userList .userList-list .userList-entry:hover .userList-deleteButton {\n  right: 2px;\n  opacity: 1;\n}\n.btb-menu.menu {\n  color: #fff;\n}\n.btb-menu.menu .layer-item.activeTop {\n  background-color: #373940;\n  border-left: 5px solid #61dafb;\n}\n.btb-menu.menu .layer-item.activeParent > .item-content .content-name {\n  color: #61dafb;\n}\n.btb-menu.menu .layer-item.activeParent > .item-content .collapse-arrow {\n  border-color: #61dafb transparent transparent;\n}\n.btb-menu.menu .layer-item.active > .item-content {\n  background-color: #373940;\n}\n.btb-menu.menu .layer-item.active > .item-content .content-name {\n  color: #61dafb;\n}\n.btb-menu.menu .layer-item.active > .item-content .collapse-arrow {\n  border-color: #61dafb transparent transparent;\n}\n.btb-menu.menu .item-content:hover {\n  background-color: #373940;\n}\n.btb-menu.menu .item-content:hover .content-name {\n  color: #61dafb;\n}\n.btb-menu.menu .item-content:hover .collapse-arrow {\n  border-color: #61dafb transparent transparent;\n}\n.btb-menu.menu .collapse-arrow {\n  border-color: #fff transparent transparent;\n}\n.btb-list.content-nodetree {\n  background-color: #f6f8fa;\n  margin: auto;\n  width: calc(100% - (75px * 2));\n  padding: 15px;\n}\n.btb-table.content-paramlist {\n  margin: auto;\n  width: calc(100% - (60px * 2));\n}\n.btb-table.content-paramlist .table-list {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.btb-table.content-paramlist .tr-th {\n  background-color: #e9ebed;\n  border: 2px solid #e9ebed;\n  padding: 2px 15px;\n}\n.btb-table.content-paramlist .tr-td {\n  border: 2px solid #e9ebed;\n  text-align: center;\n  padding: 2px 15px;\n}\n.btb-table.content-paramlist .td-name,\n.btb-table.content-paramlist .td-notice {\n  text-align: left;\n}\n.btb-table.content-paramlist .content-pre {\n  margin: 5px 0;\n  padding: 5px 15px;\n}\n", ""]);

// exports


/***/ }),
/* 81 */
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
/* 82 */
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

var	fixUrls = __webpack_require__(83);

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
/* 83 */
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
/* 84 */,
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
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
/* 86 */
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
/* 87 */
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

var _home = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'ABOUT'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Hi! I am Noel. I established The Black Toolbox Laboratory(BTB Lab) since November 1, 2017. The mainly purpose to start the project is to develop some useful tools for helping coding Website easier. And there is a hard work and also a challenge to let tools applicated with highly free degree. Though, I am not full-time in this project. I still sincerely welcome to recieve your great idea or your needing by sending mails or booking issues on GitHub.'
            ),
            _react2.default.createElement(_reactFontawesome2.default, { className: 'linkBtn', onClick: function onClick() {
                _this2._redirectHandler('ABOUT');
              }, name: 'link', fixedWidth: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'ARTICLES'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Here, I want to introduce some others masterpiece in conceptual. I hope the articles will do help in algorithmic angle. But if you have problem to use them, welcome to mail to me. We can figure it out together.'
            ),
            _react2.default.createElement(_reactFontawesome2.default, { className: 'linkBtn', onClick: function onClick() {
                _this2._redirectHandler('BTB_ATCS');
              }, name: 'link', fixedWidth: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'DEMONSTRATION'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'The demonstration is this webside actually. It is local-side version, and you can see the source code.'
            ),
            _react2.default.createElement(_reactFontawesome2.default, { className: 'linkBtn', onClick: function onClick() {
                _this2._redirectHandler('BTB_DEMO');
              }, name: 'link', fixedWidth: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'LIBRARY LIST'
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
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
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
/* 88 */
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

var _routeList = __webpack_require__(9);

var _routeList2 = _interopRequireDefault(_routeList);

var _articleList = __webpack_require__(89);

var _articleList2 = _interopRequireDefault(_articleList);

var _history = __webpack_require__(10);

var _history2 = _interopRequireDefault(_history);

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
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'wrapper wrapper-basic' },
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h1',
              null,
              'Articles'
            ),
            _react2.default.createElement(
              'span',
              null,
              'There are my articles introducing some knowledge in conceptual.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'ARTICLE LIST'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Here, I want to introduce some others masterpiece in conceptual. I hope the articles will help in algorithmic. After all, we build system not only by toolbox but also our algorithm, right? But if you have problem to use but not bug issue, welcome to mail to me. We can figure it out together.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'ul',
              null,
              _articleList2.default.map(function (entry) {
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
                    'span',
                    { className: 'update' },
                    '[UPDATE: ',
                    entry.update,
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var articleList = new Array({ 'name': 'Flux Introduction', 'link': 'BTB_ATCS_FLUX', 'update': '2018-03-11' }, { 'name': 'Redux Introduction', 'link': 'BTB_ATCS_REDUX', 'update': '2018-03-03' }, { 'name': 'Component: Presentational and Container', 'link': 'BTB_ATCS_COMPONENT_PNC', 'update': '2018-03-24' });

exports.default = articleList;

/***/ }),
/* 90 */
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

var _blacktboxList = __webpack_require__(14);

var _blacktboxList2 = _interopRequireDefault(_blacktboxList);

var _routeList = __webpack_require__(9);

var _routeList2 = _interopRequireDefault(_routeList);

var _history = __webpack_require__(10);

var _history2 = _interopRequireDefault(_history);

var _app = __webpack_require__(91);

var _app2 = _interopRequireDefault(_app);

var _app3 = __webpack_require__(93);

var _app4 = _interopRequireDefault(_app3);

var _app5 = __webpack_require__(98);

var _app6 = _interopRequireDefault(_app5);

var _articleFlux = __webpack_require__(102);

var _articleFlux2 = _interopRequireDefault(_articleFlux);

var _articleFlux_server = __webpack_require__(103);

var _articleFlux_server2 = _interopRequireDefault(_articleFlux_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EXAMPLE_BASIC_ALGORITHM = '<!-- Require or Import what you need -->\n\n<!-- Start: Define the component of User list -->\nclass Example extends Component {\n  constructor (props) {\n    super(props);\n    this.dataList = new Array();\n  };\n  componentDidMount () {\n    /* [Store]: Fetch data */\n    this.fetchData();\n  };\n\n  /* [View]: Render component */\n  render () {...};\n  \n  /* [Action]: Actions to access Store */\n  _addHandler () {};\n  _removeHandler () {};\n};\n<!-- End: Define the component of User list -->\n\n<!-- Export component -->\n';
var EXAMPLE_FLUX_INSTALL = '$ npm install --save flux\n$ npm install --save merge\n';
var EXAMPLE_FLUX_VIEW = '<!-- Require or Import what you need -->\nimport ExampleDispatcher from \'../dispatchers/exampleDispatcher.js\';\nimport ExampleStore from \'../stores/exampleStore.js\';\nimport ExampleAction from \'../actions/exampleAction.js\';\n\n<!-- Start: Define the component of User list -->\nclass ExampleFlux extends Component {\n  constructor (props) {\n    super(props);\n    this.dataList = new Array();\n  };\n  /* [Store] add listen  */\n  componentDidMount () {\n    ExampleStore.addChangeListener(this.refresh);\n    this.fetchData();\n  };\n  /* [Store] remove listen  */\n  componentWillUnmount () {\n    ExampleStore.removeChangeListener(this.refresh);\n  };\n  render () {...};\n\n  /* [Action]: trigger action to access Store */\n  _addHandler () {};\n  _removeHandler () {};\n};\n<!-- End: Define the component of User list -->\n\n<!-- Export component -->\n';
var EXAMPLE_FLUX_ACTION = '<!-- Require or Import what you need -->\nimport ExampleDispatcher from \'../dispatchers/exampleDispatcher.js\';\n\n/* [Dispatcher] dispatch data to store  */\nconst ExampleAction = {\n  fetch: (userList)=>{\n    ExampleDispatcher.dispatch({\n      actionType: \'fetch\',\n      userList: userList\n    });\n  },\n  add: (userName)=>{\n    ExampleDispatcher.dispatch({\n      actionType: \'add\',\n      userName: userName\n    });\n  },\n  remove: (userId)=>{\n    ExampleDispatcher.dispatch({\n      actionType: \'remove\',\n      userId: userId\n    });\n  }\n};\n<!-- Export component -->\n';
var EXAMPLE_FLUX_DISPATCHER = 'import { Dispatcher } from \'flux\';\nlet ExampleDispatcher = new Dispatcher();\nexport default ExampleDispatcher;\n';
var EXAMPLE_FLUX_STORE = '<!-- Require or Import what you need -->\nimport Merge from \'merge\';\nimport { EventEmitter } from \'events\';\n\nimport ExampleDispatcher from \'../dispatchers/exampleDispatcher.js\';\n\n/* [Store]] store data */\nlet dataList = new Array();\n\n/* [Store]] create event id and merge store event to emitter */\nconst EXAMPLE_EVENT_ID = \'example_change\';\nconst ExampleStore = Merge(EventEmitter.prototype,{\n  /* Here, the function must be unique. */\n  getData: function(){\n\t\treturn dataList;\n\t},\n  emitChange: function () {\n    this.emit(EXAMPLE_EVENT_ID);\n  },\n  addChangeListener: function (callback) {\n    this.on(EXAMPLE_EVENT_ID, callback);\n  },\n  removeChangeListener: function (callback) {\n    this.removeListener(EXAMPLE_EVENT_ID, callback);\n  }\n});\n\n/* [Dispatcher] regist event */\nExampleDispatcher.register((event)=>{\n  switch(event.actionType) \n  {\n    case \'fetch\':\n      ...\n      ExampleStore.emitChange();\n      break;\n    case \'add\':\n      ...\n      ExampleStore.emitChange();\n      break;\n    case \'remove\':\n      ...\n      ExampleStore.emitChange();\n      break;\n  }\n});\n<!-- Export component -->\n';

var NOTICE = new Array({ 'name': 'Dispatcher is unique: In our webside, Dispatcher in at /assets, and it imported in first time at index.js.' }, { 'name': 'All Stores\' event functions must named uniquely: Cause all stores use the same EventEmitter, they need to named their event function differently.' });

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
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h1',
              null,
              'Flux Introduction'
            ),
            _react2.default.createElement(
              'span',
              null,
              'Conceptual introduction and simple example'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'INTRODUCTION'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'In this article, we are going to talk about ',
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://www.npmjs.com/package/flux' },
                'Flux',
                _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
              ),
              '. My source code of example is ',
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/route/articles/articleFluxNRedux/exampleBasic' },
                'here',
                _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
              ),
              '. If you need more clear example code. The other article ',
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture' },
                'Getting To Know Flux, the React.js Architecture',
                _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
              ),
              ' may be more suitable.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h3',
              null,
              'Example'
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'span',
                null,
                'The following shown is a user list, and it is the example with our discussion to Flux.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-example' },
              _react2.default.createElement(_app2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'span',
                null,
                'To implement the User List. Basically we need three factors: render(View), data(Store), access handler(Action). It is quite easy to implement it by coding them all together. However in systemic angle, if we want to separate them to keep system construction defined and used clear(to unify or generalize), we may need to use some framework to let system keep clear like Flux. And next, we will show it in Flux way. Comparing my ',
                _react2.default.createElement(
                  'a',
                  { target: '_blank', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/assets/articleFlux/example' },
                  'Example',
                  _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
                ),
                ', I simplify the source code for more focus on the construction and add some notation, like this:'
              ),
              _react2.default.createElement(
                'pre',
                { className: 'content-pre' },
                EXAMPLE_BASIC_ALGORITHM
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h3',
              null,
              'Flux'
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'span',
                null,
                'In original, we can trigger rerender easy while coding all factors in one-file. But while they are separated to files, we will need the  "Dispatch and Listen". And here is the picture of Flux\'s relationship.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-image' },
              _react2.default.createElement('img', { src: _articleFlux2.default })
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'span',
                null,
                'The source code of example in Flux version is ',
                _react2.default.createElement(
                  'a',
                  { target: '_blank', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/route/articles/articleFluxNRedux/exampleFlux' },
                  'here',
                  _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
                ),
                '. And to implement the example in Flux. We need to install some packages:'
              ),
              _react2.default.createElement(
                'pre',
                { className: 'content-pre' },
                EXAMPLE_FLUX_INSTALL
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'h3',
                null,
                'View'
              ),
              _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                  'span',
                  null,
                  'View have to get a new dispatcher, be listened by Store and add Action for used.'
                ),
                _react2.default.createElement(
                  'pre',
                  { className: 'content-pre' },
                  EXAMPLE_FLUX_VIEW
                )
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Action'
              ),
              _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                  'span',
                  null,
                  'In Action, we just define each Action type correspond to dispatch event.'
                ),
                _react2.default.createElement(
                  'pre',
                  { className: 'content-pre' },
                  EXAMPLE_FLUX_ACTION
                )
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Dispatcher'
              ),
              _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                  'span',
                  null,
                  'The only one thing Dispatcher need to do is create a new Dispatcher.'
                ),
                _react2.default.createElement(
                  'pre',
                  { className: 'content-pre' },
                  EXAMPLE_FLUX_DISPATCHER
                )
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Store'
              ),
              _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Store have two part. To create Store\'s emitter by merge events.EventEmitter, and let dispatch er regist event meanwhile define what each event needs to access to Store.'
                ),
                _react2.default.createElement(
                  'pre',
                  { className: 'content-pre' },
                  EXAMPLE_FLUX_STORE
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'PRODUCTION'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Here we go! This example in Flux version.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content-example' },
            _react2.default.createElement(_app4.default, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'ADVANCED'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'The more usual case. What if our data is coming from server and where should we add server API in the Flux flow? To keep the rule of Flux framework. We use APIs to access server\'s data before Action. However why it is not added duing Store? Think the definition of "What the data actually is for Flux?". Here in Flux, the data means View\'s data, not the server\'s data. So that, we allowed to access server\'s data directly, then Store will get data from server. The following picture is the flow of Flux with server API.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content-image' },
            _react2.default.createElement('img', { src: _articleFlux_server2.default })
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Then, here is the User List work with server API. And also the source code ',
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/assets/articleFlux/exampleFlux_server' },
                'here',
                _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content-example' },
            _react2.default.createElement(_app6.default, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'NOTICE'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'It has a notice here about many repositories in used. In this page, we have two repositories: exampleFlux and exampleFlux_server. There are two things need to be cautioned:'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
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
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'buttonGroup' },
            _react2.default.createElement(
              'div',
              { className: 'backButton', onClick: function onClick() {
                  _this2._redirectHandler('BTB_ATCS');
                } },
              _react2.default.createElement(_reactFontawesome2.default, { name: 'arrow-left', fixedWidth: true }),
              _react2.default.createElement(
                'span',
                null,
                'Back to Articles'
              )
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _exampleComponent = __webpack_require__(92);

var _exampleComponent2 = _interopRequireDefault(_exampleComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var content = [];
      content.push(_react2.default.createElement(_exampleComponent2.default, null));
      return content;
    }
  }]);

  return App;
}(_react.Component);

;

exports.default = App;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

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
        'div',
        { className: 'example-wrapper example-userList' },
        _react2.default.createElement(
          'div',
          { className: 'example-part' },
          _react2.default.createElement(
            'h3',
            null,
            'Example'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'example-part' },
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
          ),
          _react2.default.createElement(
            'ul',
            { className: 'userList-list' },
            this.dataList.map(function (entry) {
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
            })
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
            randomNumber = Math.round(Math.random() * random_name.length);
            value += random_name.split('')[randomNumber];
          };
          break;
      };
      return value;
    }
  }, {
    key: '_addHandler',
    value: function _addHandler() {
      if (DATAMEMBERS <= this.dataList.length) {
        alert('User is full.');
        return;
      };
      var name = _reactDom2.default.findDOMNode(this.refs['userName']).value.trim();
      if ('' == name) {
        alert('Input is empty.');
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _exampleComponent = __webpack_require__(94);

var _exampleComponent2 = _interopRequireDefault(_exampleComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var content = [];
      content.push(_react2.default.createElement(_exampleComponent2.default, null));
      return content;
    }
  }]);

  return App;
}(_react.Component);

;

exports.default = App;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _exampleAction = __webpack_require__(95);

var _exampleAction2 = _interopRequireDefault(_exampleAction);

var _exampleStore = __webpack_require__(96);

var _exampleStore2 = _interopRequireDefault(_exampleStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* In our webside we import it in first time at index.js */
// import Dispatcher from '../../../../assets/dispatcher.js';


// Definitions
function DataObj() {
  this['uId'] = '';
  this['name'] = '';
};
var DATAMEMBERS = 5;
var random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';
var random_name = 'abcdefghijklmnopqrstuvwxyz';

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
      _exampleStore2.default.exampleFlux_addChangeListener(this.refresh);
      this.fetchData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _exampleStore2.default.exampleFlux_removeChangeListener(this.refresh);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'example-wrapper example-userList' },
        _react2.default.createElement(
          'div',
          { className: 'example-part' },
          _react2.default.createElement(
            'h3',
            null,
            'Example - Flux'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'example-part' },
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
          ),
          _react2.default.createElement(
            'ul',
            { className: 'userList-list' },
            this.dataList.map(function (entry) {
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
            })
          )
        )
      ));
      return content;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      ExampleThis.dataList = _exampleStore2.default.exampleFlux_getData();
      ExampleThis.forceUpdate();
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      // random data instead of fetch server
      var resData = [];
      var dataTemp = void 0;
      for (var i = 0; i < DATAMEMBERS; i++) {
        dataTemp = new DataObj();
        dataTemp['uId'] = this.randomData('id', this.dataList);
        dataTemp['name'] = this.randomData('name');
        resData.push(dataTemp);
      };
      _exampleAction2.default.fetch(resData);
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
          }
          for (var baseIndex = 0; baseIndex < baseIndex.length; baseIndex++) {
            if (baseIndex[baseIndex].uId == value) {
              // duplicate uId, and random again
              value = this.randomData('id', this.dataList);
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
    }
  }, {
    key: '_addHandler',
    value: function _addHandler() {
      var newUser = _reactDom2.default.findDOMNode(this.refs['userName']).value.trim();
      _reactDom2.default.findDOMNode(this.refs['userName']).value = '';
      _exampleAction2.default.add(newUser);
    }
  }, {
    key: '_deleteHandler',
    value: function _deleteHandler(uId) {
      _exampleAction2.default.remove(uId);
    }
  }]);

  return Example;
}(_react.Component);

;

exports.default = Example;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dispatcher = __webpack_require__(8);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dispatch data to store
var ExampleAction = {
  'fetch': function fetch(userList) {
    _dispatcher2.default.dispatch({
      'actionType': 'fetch',
      'userList': userList
    });
  },
  'add': function add(userName) {
    _dispatcher2.default.dispatch({
      'actionType': 'add',
      'userName': userName
    });
  },
  'remove': function remove(userId) {
    _dispatcher2.default.dispatch({
      'actionType': 'remove',
      'userId': userId
    });
  }
};

exports.default = ExampleAction;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = __webpack_require__(35);

var _merge2 = _interopRequireDefault(_merge);

var _events = __webpack_require__(36);

var _dispatcher = __webpack_require__(8);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* example data */
var dataList = new Array();

// Definitions
var DATAMEMBERS = 5;
var random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';

function DataObj() {
  this['uId'] = '';
  this['name'] = '';
};
function randomUid(base) {
  var valueLength = 10;
  var value = '';
  var randomNumber = void 0;
  for (var idIndex = 0; idIndex < valueLength; idIndex++) {
    randomNumber = Math.floor(Math.random() * random_uId.length);
    value += random_uId.split('')[randomNumber];
  }
  for (var baseIndex = 0; baseIndex < base.length; baseIndex++) {
    if (base[baseIndex].uId == value) {
      //  if duplicate uId, random again
      value = randomUid(base);
      break;
    }
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
    case 'fetch':
      dataList = event['userList'];
      ExampleStore.exampleFlux_emitChange();
      break;
    case 'add':
      if (DATAMEMBERS <= dataList.length) {
        alert('User is full.');
        return;
      };
      if ('' == event['userName']) {
        alert('Input is empty.');
        return;
      };
      var dataTemp = new DataObj();
      dataTemp['uId'] = randomUid(dataList);
      dataTemp['name'] = event['userName'];
      dataList.push(dataTemp);
      ExampleStore.exampleFlux_emitChange();
      break;
    case 'remove':
      for (var i = 0; i < dataList.length; i++) {
        if (event['userId'] == dataList[i].uId) {
          dataList.splice(i, 1);
          break;
        };
      };
      ExampleStore.exampleFlux_emitChange();
      break;
  }
});

exports.default = ExampleStore;

/***/ }),
/* 97 */
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serverAPI = __webpack_require__(37);

var _serverAPI2 = _interopRequireDefault(_serverAPI);

var _exampleComponent = __webpack_require__(99);

var _exampleComponent2 = _interopRequireDefault(_exampleComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _serverAPI2.default.initData();
    }
  }, {
    key: 'render',
    value: function render() {
      var content = [];
      content.push(_react2.default.createElement(_exampleComponent2.default, null));
      return content;
    }
  }]);

  return App;
}(_react.Component);

;

exports.default = App;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _serverAPI = __webpack_require__(37);

var _serverAPI2 = _interopRequireDefault(_serverAPI);

var _exampleAction = __webpack_require__(100);

var _exampleAction2 = _interopRequireDefault(_exampleAction);

var _exampleStore = __webpack_require__(101);

var _exampleStore2 = _interopRequireDefault(_exampleStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* In our webside we import it in first time at index.js */
// import Dispatcher from '../../../../assets/dispatcher.js';


// Definitions
function DataObj() {
  this['uId'] = '';
  this['name'] = '';
};
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
      _exampleStore2.default.exampleFlux_server_addChangeListener(this.refresh);
      this.fetchData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _exampleStore2.default.exampleFlux_server_removeChangeListener(this.refresh);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'example-wrapper example-userList' },
        _react2.default.createElement(
          'div',
          { className: 'example-part' },
          _react2.default.createElement(
            'h3',
            null,
            'Example - Flux with server API'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'example-part' },
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
          ),
          _react2.default.createElement(
            'ul',
            { className: 'userList-list' },
            this.dataList.map(function (entry) {
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
            })
          )
        )
      ));
      return content;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      ExampleThis.dataList = _exampleStore2.default.exampleFlux_server_getData();
      ExampleThis.forceUpdate();
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      // fetch data and used by container
      var res = _serverAPI2.default.getData();
      _exampleAction2.default.update(res);
    }
  }, {
    key: '_addHandler',
    value: function _addHandler() {
      if (DATAMEMBERS <= this.dataList.length) {
        alert('User is full.');
        return;
      };
      var obj = new DataObj();
      obj['name'] = _reactDom2.default.findDOMNode(this.refs['userName']).value.trim();
      if ('' == obj['name']) {
        alert('Input is empty.');
        return;
      };

      var res = _serverAPI2.default.addData(obj);
      _reactDom2.default.findDOMNode(this.refs['userName']).value = '';
      _exampleAction2.default.update(res);
    }
  }, {
    key: '_deleteHandler',
    value: function _deleteHandler(uId) {
      var obj = new DataObj();
      obj['uId'] = uId;

      var res = _serverAPI2.default.deleteData(obj);
      _exampleAction2.default.update(res);
    }
  }]);

  return Example;
}(_react.Component);

;

exports.default = Example;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dispatcher = __webpack_require__(8);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dispatch data to store
var ExampleAction = {
  'update': function update(userList) {
    _dispatcher2.default.dispatch({
      'actionType': 'update',
      'userList': userList
    });
  }
};

exports.default = ExampleAction;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = __webpack_require__(35);

var _merge2 = _interopRequireDefault(_merge);

var _events = __webpack_require__(36);

var _dispatcher = __webpack_require__(8);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* example data */
var dataList = new Array();

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
  switch (event.actionType) {
    case 'update':
      dataList = event['userList'];
      ExampleStore.exampleFlux_server_emitChange();
      break;
  }
});

exports.default = ExampleStore;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/articleFlux.png";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/articleFlux_server.png";

/***/ }),
/* 104 */
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

var _routeList = __webpack_require__(9);

var _routeList2 = _interopRequireDefault(_routeList);

var _history = __webpack_require__(10);

var _history2 = _interopRequireDefault(_history);

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
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
        'div',
        { className: 'wrapper wrapper-basic' },
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h1',
              null,
              'Redux intruduction'
            ),
            _react2.default.createElement(
              'span',
              null,
              'Conceptual Introduction and simple example'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'PREPARING'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'preparing'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'buttonGroup' },
            _react2.default.createElement(
              'div',
              { className: 'backButton', onClick: function onClick() {
                  _this2._redirectHandler('BTB_ATCS');
                } },
              _react2.default.createElement(_reactFontawesome2.default, { name: 'arrow-left', fixedWidth: true }),
              _react2.default.createElement(
                'span',
                null,
                'Back to Articles'
              )
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
/* 105 */
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

var _routeList = __webpack_require__(9);

var _routeList2 = _interopRequireDefault(_routeList);

var _history = __webpack_require__(10);

var _history2 = _interopRequireDefault(_history);

var _app = __webpack_require__(106);

var _app2 = _interopRequireDefault(_app);

var _app3 = __webpack_require__(108);

var _app4 = _interopRequireDefault(_app3);

var _articleComponent_PnC_example = __webpack_require__(113);

var _articleComponent_PnC_example2 = _interopRequireDefault(_articleComponent_PnC_example);

var _articleComponent_PnC = __webpack_require__(114);

var _articleComponent_PnC2 = _interopRequireDefault(_articleComponent_PnC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EXAMPLE_BASIC_ALGORITHM = '<!-- Require or Import what you need -->\n\n<!-- Start: Define the component of User list -->\nclass Example extends Component {\n  /* [Presentational] [Container]: render presentational and container */\n  render () {...};\n\n  fetchData () {\n    /* [Container]: fetch data and used by container */\n  };\n};\n<!-- End: Define the component of User list -->\n\n<!-- Export component -->\n';
var EXAMPLE_COMPONENT_PRESENTATIONAL_MAIN = '<!-- Require or Import what you need -->\nimport React from \'react\'; /* must be */\n\n/* container */\nimport UserList from \'../containers/exampleContainer.js\';\n\nconst App = () => {\n  let content = [];\n  /* [Presentational]: render, here include container */\n  content.push(...);\n  return content;\n};\n\n<!-- Export component -->\n';
var EXAMPLE_COMPONENT_PRESENTATIONAL_ADDUSER = '<!-- Require or Import what you need -->\n\nimport ServerAPI from \'../serverAPIs/serverAPI.js\';\n\nclass AddUser extends Component {\n  constructor (props) {\n    super(props);\n    this.env = {\n      \'dataCounter\': 0,\n      \'dataLimit\': 0,\n      \'refreshHandler\': function(){}\n    };\n  };\n  componentWillUpdate (nextProps, nextState) {\n    this.updateData(nextProps);\n  };\n  render () {\n    let content = [];\n    /* [Presentational]: render */\n    content.push(...);\n    return content;\n  };\n\n  updateData (props) {...};\n\n  _addHandler () {...};\n};\n\n<!-- Export component -->\n';
var EXAMPLE_COMPONENT_PRESENTATIONAL_DELETEUSER = '<!-- Require or Import what you need -->\n\nimport ServerAPI from \'../serverAPIs/serverAPI.js\';\n\nconst DeleteUser = (props) => {\n  const _deleteHandler = () => {...};\n  let content = [];\n  /* [Presentational]: render */\n  content.push(...);\n  return content;\n};\n\n<!-- Export component -->\n';
var EXAMPLE_COMPONENT_CONTAINER = '<!-- Require or Import what you need -->\n\nimport ServerAPI from \'../serverAPIs/serverAPI.js\';\n\nimport AddUser from \'../components/exampleComponent_addUser.js\';\nimport DeleteUser from \'../components/exampleComponent_deleteUser.js\';\n\nclass App extends Component {\n  constructor (props) {\n    super(props);\n    this.dataList = new Array();\n  };\n  componentDidMount () {\n    this.fetchData();\n  };\n  render () {\n    let content = [];\n    /* [Container]: render, here include AddUser and DeleteUser */\n    content.push(...);\n    return content;\n  };\n\n  /* [serverAPI]: fetch data from server */\n  fetchData () {...};\n\n  _refreshHandler() {...};\n};\n\n<!-- Export component -->\n';

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
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h1',
              null,
              'Component: Presentational and Container'
            ),
            _react2.default.createElement(
              'span',
              null,
              'Conceptual Introduction and simple example'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'INTRODUCTION'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'There is a optional thinking in design webside codebase structure(at least for me). The component could be distinguished into two concepts: ',
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0' },
                'presentational and container',
                _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
              ),
              '. There is some articles about them already. But some people may get confuse to know or to use. But here just use a simple angle to intruduce them as when I learn by myself. Hope it is useful for you.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h3',
              null,
              'Example'
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'span',
                null,
                'The following shown is a user list basically same as the example of Flux introduction, But I made a little change to draw the data out to imitate fetching data from server API.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-example' },
              _react2.default.createElement(_app2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'span',
                null,
                'To show the User List. We just need to refer the component to where we want.'
              ),
              _react2.default.createElement(
                'div',
                { className: 'content-image' },
                _react2.default.createElement('img', { src: _articleComponent_PnC_example2.default })
              ),
              _react2.default.createElement(
                'span',
                null,
                'Comparing my ',
                _react2.default.createElement(
                  'a',
                  { target: '_blank', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/assets/articleComponent_PnC/example' },
                  'Example',
                  _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
                ),
                ', I simplify the source code for more focus on the construction and add some notation, like this:'
              ),
              _react2.default.createElement(
                'pre',
                { className: 'content-pre' },
                EXAMPLE_BASIC_ALGORITHM
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h3',
              null,
              'Presentational and Container'
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'span',
                null,
                'In original, we only create a component to implement the User List. And now, we will separate the component into two part called presentational(presentational component in short) and container. Here is an easy rule to distinguish them by \'Where the data they used is fetched from?\' The data presentational used is came from other component(props inherit, imported ... etc). The other data container used is the \'Store\'. And mostly the store is fetched from server API. And if your components do not need state and life cycle. There may be more appropriate to use functional stateless component to create(Not neccessary move, depend on case). And with the following picture, you will see the source code of example about presentational and container individually. And in our case , the component map will be:'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-image' },
              _react2.default.createElement('img', { src: _articleComponent_PnC2.default })
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'h3',
                null,
                'Presentational: main'
              ),
              _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                  'span',
                  null,
                  'To render the outline the component. Cause it does not need render with data, we use stateless functino to create.'
                ),
                _react2.default.createElement(
                  'pre',
                  { className: 'content-pre' },
                  EXAMPLE_COMPONENT_PRESENTATIONAL_MAIN
                )
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Presentational: add user'
              ),
              _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                  'span',
                  null,
                  'To render component to add user to list. Cause I want to use \'ref\' work here, I choose stateful function here. You could use stateless function with HTML DOM as well.'
                ),
                _react2.default.createElement(
                  'pre',
                  { className: 'content-pre' },
                  EXAMPLE_COMPONENT_PRESENTATIONAL_ADDUSER
                )
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Presentational: delete user'
              ),
              _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                  'span',
                  null,
                  'To render component to add user to list. Here is a stateless function.'
                ),
                _react2.default.createElement(
                  'pre',
                  { className: 'content-pre' },
                  EXAMPLE_COMPONENT_PRESENTATIONAL_DELETEUSER
                )
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Container'
              ),
              _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                  'span',
                  null,
                  'To render the component with data.'
                ),
                _react2.default.createElement(
                  'pre',
                  { className: 'content-pre' },
                  EXAMPLE_COMPONENT_CONTAINER
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'PRODUCTION'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Here we go! This is the example separate component into Presentational component and Container.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content-example' },
            _react2.default.createElement(_app4.default, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'NOTICE'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'I use the Presentational and Containter thinking first time when I write this introduction. In my experience, the design thinking is depend on how do you disintegrate your layout into components. There is unnecessary to strictly separate to Presentational and Containter. You cloud keep some Presentational in Container for some kind of convenience. Same as the ',
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0' },
                'original article',
                _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
              ),
              ' mentioned: "the presentational components and the containers is not a technical one. Rather, it is a distinction in their purpose." Clear Definition is the most important step in design.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'buttonGroup' },
            _react2.default.createElement(
              'div',
              { className: 'backButton', onClick: function onClick() {
                  _this2._redirectHandler('BTB_ATCS');
                } },
              _react2.default.createElement(_reactFontawesome2.default, { name: 'arrow-left', fixedWidth: true }),
              _react2.default.createElement(
                'span',
                null,
                'Back to Articles'
              )
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serverAPI = __webpack_require__(38);

var _serverAPI2 = _interopRequireDefault(_serverAPI);

var _exampleComponent = __webpack_require__(107);

var _exampleComponent2 = _interopRequireDefault(_exampleComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _serverAPI2.default.initData();
    }
  }, {
    key: 'render',
    value: function render() {
      var content = [];
      content.push(_react2.default.createElement(_exampleComponent2.default, null));
      return content;
    }
  }]);

  return App;
}(_react.Component);

;

exports.default = App;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _serverAPI = __webpack_require__(38);

var _serverAPI2 = _interopRequireDefault(_serverAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DataObj() {
  this['uId'] = '';
  this['name'] = '';
};
var DATAMEMBERS = 5;

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.dataList = new Array();
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
      // presentational
      content.push(_react2.default.createElement(
        'div',
        { className: 'example-wrapper example-userList' },
        _react2.default.createElement(
          'div',
          { className: 'example-part' },
          _react2.default.createElement(
            'h3',
            null,
            'Example'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'example-part' },
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
          ),
          _react2.default.createElement(
            'ul',
            { className: 'userList-list' },
            this.dataList.map(function (entry) {
              // container
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
            })
          )
        )
      ));
      return content;
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      // fetch data and used by container
      this.dataList = _serverAPI2.default.getData();
      this.forceUpdate();
    }
  }, {
    key: '_addHandler',
    value: function _addHandler() {
      if (DATAMEMBERS <= this.dataList.length) {
        alert('User is full.');
        return;
      };
      var obj = new DataObj();
      obj['name'] = _reactDom2.default.findDOMNode(this.refs['userName']).value.trim();
      if ('' == obj['name']) {
        alert('Input is empty.');
        return;
      };
      this.dataList = _serverAPI2.default.addData(obj);
      _reactDom2.default.findDOMNode(this.refs['userName']).value = '';
      this.forceUpdate();
    }
  }, {
    key: '_deleteHandler',
    value: function _deleteHandler(uId) {
      var obj = new DataObj();
      obj['uId'] = uId;
      this.dataList = _serverAPI2.default.deleteData(obj);
      this.forceUpdate();
    }
  }]);

  return App;
}(_react.Component);

;

exports.default = App;

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

var _serverAPI = __webpack_require__(15);

var _serverAPI2 = _interopRequireDefault(_serverAPI);

var _exampleComponent = __webpack_require__(109);

var _exampleComponent2 = _interopRequireDefault(_exampleComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _serverAPI2.default.initData();
    }
  }, {
    key: 'render',
    value: function render() {
      var content = [];
      content.push(_react2.default.createElement(_exampleComponent2.default, null));
      return content;
    }
  }]);

  return App;
}(_react.Component);

;

exports.default = App;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _exampleContainer = __webpack_require__(110);

var _exampleContainer2 = _interopRequireDefault(_exampleContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  var content = [];
  content.push(_react2.default.createElement(
    'div',
    { className: 'example-wrapper example-userList' },
    _react2.default.createElement(
      'div',
      { className: 'example-part' },
      _react2.default.createElement(
        'h3',
        null,
        'Example - PnC'
      )
    ),
    _react2.default.createElement(_exampleContainer2.default, null)
  ));
  return content;
};

/* container */
exports.default = App;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _serverAPI = __webpack_require__(15);

var _serverAPI2 = _interopRequireDefault(_serverAPI);

var _exampleComponent_addUser = __webpack_require__(111);

var _exampleComponent_addUser2 = _interopRequireDefault(_exampleComponent_addUser);

var _exampleComponent_deleteUser = __webpack_require__(112);

var _exampleComponent_deleteUser2 = _interopRequireDefault(_exampleComponent_deleteUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DataObj() {
  this['uId'] = '';
  this['name'] = '';
};
var DATAMEMBERS = 5;

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.dataList = new Array();
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
        'div',
        { className: 'example-part' },
        _react2.default.createElement(_exampleComponent_addUser2.default, {
          dataCounter: this.dataList.length,
          dataLimit: DATAMEMBERS,
          refreshHandler: function refreshHandler() {
            _this2._refreshHandler();
          }
        }),
        _react2.default.createElement(
          'ul',
          { className: 'userList-list' },
          this.dataList.map(function (entry) {
            var content_datalist_tr = [];
            content_datalist_tr.push(_react2.default.createElement(
              'li',
              { className: 'userList-entry' },
              _react2.default.createElement(
                'div',
                { className: 'userList-info' },
                entry['name'].substring(0, 1).toUpperCase() + entry['name'].substring(1)
              ),
              _react2.default.createElement(_exampleComponent_deleteUser2.default, {
                userId: entry['uId'],
                refreshHandler: function refreshHandler() {
                  _this2._refreshHandler();
                }
              })
            ));
            return content_datalist_tr;
          })
        )
      ));
      return content;
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      // fetch data and used by container
      this.dataList = _serverAPI2.default.getData();
      this.forceUpdate();
    }
  }, {
    key: '_refreshHandler',
    value: function _refreshHandler() {
      this.fetchData();
    }
  }]);

  return App;
}(_react.Component);

;

exports.default = App;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _serverAPI = __webpack_require__(15);

var _serverAPI2 = _interopRequireDefault(_serverAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddUser = function (_Component) {
  _inherits(AddUser, _Component);

  function AddUser(props) {
    _classCallCheck(this, AddUser);

    var _this = _possibleConstructorReturn(this, (AddUser.__proto__ || Object.getPrototypeOf(AddUser)).call(this, props));

    _this.env = {
      'dataCounter': 0,
      'dataLimit': 0,
      'refreshHandler': function refreshHandler() {}
    };
    return _this;
  }

  _createClass(AddUser, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this.updateData(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = [];
      content.push(_react2.default.createElement(
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
      ));
      return content;
    }
  }, {
    key: 'updateData',
    value: function updateData(props) {
      this.env['dataCounter'] = props.dataCounter ? props.dataCounter : 0;
      this.env['dataLimit'] = props.dataLimit ? props.dataLimit : 0;
      this.env['refreshHandler'] = props.refreshHandler ? props.refreshHandler : function () {};
    }
  }, {
    key: '_addHandler',
    value: function _addHandler() {
      if (this.env['dataLimit'] <= this.env['dataCounter']) {
        alert('User is full.');
        return;
      };
      var obj = {
        'name': _reactDom2.default.findDOMNode(this.refs['userName']).value.trim()
      };
      if ('' == obj['name']) {
        alert('Input is empty.');
        return;
      };
      this.dataList = _serverAPI2.default.addData(obj);
      _reactDom2.default.findDOMNode(this.refs['userName']).value = '';
      this.env.refreshHandler();
    }
  }]);

  return AddUser;
}(_react.Component);

;

exports.default = AddUser;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(1);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _serverAPI = __webpack_require__(15);

var _serverAPI2 = _interopRequireDefault(_serverAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteUser = function DeleteUser(props) {
  var _deleteHandler = function _deleteHandler() {
    var obj = {
      'uId': props.userId
    };
    _serverAPI2.default.deleteData(obj);
    props.refreshHandler();
  };
  var content = [];
  content.push(_react2.default.createElement(
    'div',
    { className: 'userList-deleteButton', onClick: _deleteHandler },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'trash', fixedWidth: true })
  ));
  return content;
};

exports.default = DeleteUser;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/articleComponent_PnC_example.png";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/articleComponent_PnC.png";

/***/ }),
/* 115 */
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

var _home = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h1',
              null,
              'Blacktbox-demo',
              _react2.default.createElement(
                'a',
                { target: '_blank', className: 'linkBtn', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-demo' },
                _react2.default.createElement(_reactFontawesome2.default, { name: 'github', fixedWidth: true })
              )
            ),
            _react2.default.createElement(
              'span',
              null,
              'The Blacktbox-demo shows demonstrations for all the BTB Lab\'s tools.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'SETUP'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
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
            ),
            _react2.default.createElement(
              'pre',
              { className: 'content-pre' },
              SETUP_PRE
            ),
            _react2.default.createElement(
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
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'BLB LIBRARY LIST'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'This is the list of BLB Lab\'s API demonstrated here.'
            )
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
/* 116 */
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

var _blacktboxTable = __webpack_require__(23);

var _blacktboxTable2 = _interopRequireDefault(_blacktboxTable);

var _blacktboxList = __webpack_require__(14);

var _blacktboxList2 = _interopRequireDefault(_blacktboxList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INSTALLATION_PRE = '$ npm install --save blacktbox-list\n\n// using ES6 modules\nimport BTBList from \'blacktbox-list\';\n\n// using CommonJS modules\nvar BTBList = require(\'blacktbox-list\');';
var USING_PRE = '<BTBList \n  listArr: [],\n  styleObj: {},\n  inputRefFn: ()=>{}\n/>';
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
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h1',
              null,
              'Blacktbox-list',
              _react2.default.createElement(
                'a',
                { target: '_blank', className: 'linkBtn', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-list' },
                _react2.default.createElement(_reactFontawesome2.default, { name: 'github', fixedWidth: true })
              )
            ),
            _react2.default.createElement(
              'span',
              null,
              'List-maker tool.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'INSTALLATION'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
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
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'pre',
              { className: 'content-pre' },
              INSTALLATION_PRE
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'USING'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'pre',
              { className: 'content-pre' },
              USING_PRE
            ),
            _react2.default.createElement(_blacktboxTable2.default, {
              tableHeadArr: PARAM_HEAD,
              tableBobyArr: PARAM_BODY,
              modeObj: PARAM_MODE,
              className: 'content-paramlist'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
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
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'NODE TREE'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Here showing the node structure. Each node with className is for convenience to style. You have two way to use it. The first way is used with css selector, and the other way is used component\'s input: styleObj.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(_blacktboxList2.default, {
              className: 'content-nodetree',
              listArr: NODE_TREE
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Notice: The layer.index is count base on 0.'
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
/* 117 */
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

var _blacktboxTable = __webpack_require__(23);

var _blacktboxTable2 = _interopRequireDefault(_blacktboxTable);

var _blacktboxList = __webpack_require__(14);

var _blacktboxList2 = _interopRequireDefault(_blacktboxList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INSTALLATION_PRE = '$ npm install --save blacktbox-table\n\n// using ES6 modules\nimport BTBTable from \'blacktbox-table\';\n\n// using CommonJS modules\nvar BTBTable = require(\'blacktbox-table\');';
var USING_PRE = '<BTBTable \n  tableHeadArr: [],\n  tableBobyArr: [],\n  modeObj: {\n    mode: \'list\'\n  },\n  styleObj: {},\n  inputRefFn: ()=>{}\n/>';
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
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h1',
              null,
              'Blacktbox-table',
              _react2.default.createElement(
                'a',
                { target: '_blank', className: 'linkBtn', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-table' },
                _react2.default.createElement(_reactFontawesome2.default, { name: 'github', fixedWidth: true })
              )
            ),
            _react2.default.createElement(
              'span',
              null,
              'Table-maker tool.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'INSTALLATION'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
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
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'pre',
              { className: 'content-pre' },
              INSTALLATION_PRE
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'USING'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'pre',
              { className: 'content-pre' },
              USING_PRE
            ),
            _react2.default.createElement(_blacktboxTable2.default, {
              tableHeadArr: PARAM_HEAD,
              tableBobyArr: PARAM_BODY,
              modeObj: PARAM_MODE,
              className: 'content-paramlist'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
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
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'NODE TREE'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Here showing the node structure. Each node with className is for convenience to style. You have two way to use it. The first way is used with css selector, and the other way is used component\'s input: styleObj. But for blacktbox-table, we have two structure for two mode used.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Mode Info:'
            ),
            _react2.default.createElement(_blacktboxList2.default, {
              className: 'content-nodetree',
              listArr: NODE_TREE_INFO
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Mode List:'
            ),
            _react2.default.createElement(_blacktboxList2.default, {
              className: 'content-nodetree',
              listArr: NODE_TREE_LIST
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Notice: The th.index come from tableHeadArr.'
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
/* 118 */
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

var _blacktboxTable = __webpack_require__(23);

var _blacktboxTable2 = _interopRequireDefault(_blacktboxTable);

var _blacktboxList = __webpack_require__(14);

var _blacktboxList2 = _interopRequireDefault(_blacktboxList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INSTALLATION_PRE = '$ npm install --save blacktbox-menu\n\n// using ES6 modules\nimport BTBMenu from \'blacktbox-menu\';\n\n// using CommonJS modules\nvar BTBMenu = require(\'blacktbox-menu\');';
var USING_PRE = '<BTBMenu \n  menuArr: [],\n  styleObj: {},\n  inputRefFn: ()=>{},\n  acticveIndex: \'\',\n  itemOnClickFn: ()=>{},\n  featureCollapsible: {\n    enable: false,\n    customCollapseButton: \'\',\n    itemOnCollapseFn: ()=>{}\n  }\n/>';
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
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h1',
              null,
              'Blacktbox-menu',
              _react2.default.createElement(
                'a',
                { target: '_blank', className: 'linkBtn', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-menu' },
                _react2.default.createElement(_reactFontawesome2.default, { name: 'github', fixedWidth: true })
              )
            ),
            _react2.default.createElement(
              'span',
              null,
              'Menu-maker tool.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'INSTALLATION'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
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
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'pre',
              { className: 'content-pre' },
              INSTALLATION_PRE
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'USING'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'pre',
              { className: 'content-pre' },
              USING_PRE
            ),
            _react2.default.createElement(_blacktboxTable2.default, {
              tableHeadArr: PARAM_HEAD,
              tableBobyArr: PARAM_BODY,
              modeObj: PARAM_MODE,
              className: 'content-paramlist'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
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
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'NODE TREE'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Here showing the node structure. Each node with className is for convenience to style. You have two way to use it. The first way is used with css selector, and the other way is used component\'s input: styleObj.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(_blacktboxList2.default, {
              className: 'content-nodetree',
              listArr: NODE_TREE
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Notice: The layer.index is count base on 0.'
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
/* 119 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h1',
              null,
              'Blacktbox-menu',
              _react2.default.createElement(
                'a',
                { target: '_blank', className: 'linkBtn', href: 'https://github.com/BlackToolBoxLaboratory/blacktbox-menu' },
                _react2.default.createElement(_reactFontawesome2.default, { name: 'github', fixedWidth: true })
              )
            ),
            _react2.default.createElement(
              'span',
              null,
              'Advanced application with Blacktbox-menu.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'context' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'REDIRECT'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'span',
              null,
              'Here, we talk about "How to redirect with Blacktbox-menu". And it will work with ',
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://github.com/ReactTraining/react-router' },
                'React-router',
                _react2.default.createElement(_reactFontawesome2.default, { name: 'external-link', fixedWidth: true })
              ),
              '. It is quite enough, if we only need to redirect by clicking menu. However sometimes we need to redirect after function finished or depend on its result. So, we choose a general way to complete the menu system. As we know, there are big different bwteen 2.x/3.x and 4.x. We separate to two part for 2.x/3.x and 4.x. Besides, the way with 4.x is used in our Homepage(Demonstration). '
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h3',
              null,
              '2.x/3.x'
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'span',
                null,
                'For 2.x/3.x, we need to build a router list:'
              ),
              _react2.default.createElement(
                'pre',
                { className: 'content-pre' },
                REACTROUTER_23_ROUTER
              ),
              _react2.default.createElement(
                'span',
                null,
                'And then, we can use ',
                '<Link>',
                ' or hashHistory.push to do redirect.'
              ),
              _react2.default.createElement(
                'pre',
                { className: 'content-pre' },
                REACTROUTER_23_REDIRECT
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'h3',
              null,
              '4.x'
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'span',
                null,
                'Same as 4.x, we need to build a router list, too:'
              ),
              _react2.default.createElement(
                'pre',
                { className: 'content-pre' },
                REACTROUTER_4_ROUTER
              ),
              _react2.default.createElement(
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
              ),
              _react2.default.createElement(
                'pre',
                { className: 'content-pre' },
                HISTORY_INSTALL
              ),
              _react2.default.createElement(
                'span',
                null,
                'Then we need to have a component to create our history.'
              ),
              _react2.default.createElement(
                'pre',
                { className: 'content-pre' },
                HISTORY_CREATE
              ),
              _react2.default.createElement(
                'span',
                null,
                'Finally, we can use our history.push to do redirect. Also we can add the history.push to our Blacktbox-menu\'s parameter: itemOnClickFn with a router list to switch path.'
              ),
              _react2.default.createElement(
                'pre',
                { className: 'content-pre' },
                REACTROUTER_4_REDIRECT
              )
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
/* 120 */
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

var _home = __webpack_require__(13);

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
],[39]);