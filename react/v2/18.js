(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ lang; });

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/prototype-languages/es/index.js + 1 modules
var es = __webpack_require__(65);

// CONCATENATED MODULE: ./src/assets/languages/en.js
/* harmony default export */ var en = ({
  'menu': {
    'about': 'About',
    'packages': {
      'root': 'Packages',
      'basic': 'Basic',
      'list': {
        'root': 'List',
        'example': {
          'list': 'Example-List',
          'menu': 'Example-Menu',
          'style': 'Example-Style',
          'slot': 'Example-Slot'
        }
      },
      'table': {
        'root': 'Table',
        'example': {
          'list': 'Example-List',
          'info': 'Example-Info',
          'compare': 'Example-Compare',
          'style': 'Example-Style',
          'slot': 'Example-Slot'
        }
      },
      'popover': {
        'root': 'Popover'
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
  'package': {
    'version_colon': 'Version: ',
    'release_colon': 'Release Date: ',
    'section': {
      'installation': 'INSTALLATION',
      'render': 'RENDER',
      'parameters': 'PARAMETERS',
      'nodeTree': 'NODE TREE'
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
        'ref': 'For the feature of React.ref'
      },
      'entryObj': {
        'id': 'Identity of entry.',
        'title': 'Name of entry.',
        'defaultCollapsed': 'Default value to collapsed of extend.',
        'children': 'sublist'
      },
      'slotObj': {
        'entryObj': 'Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id. If you are using function to slot, the function will be (entry) => {}. And the entry is the source data specified.'
      },
      'nodeTree': {
        'notice': 'Note: The layer count is counted base on 0.'
      }
    },
    'table': {
      'name': 'Table',
      'description': {
        'basic': 'This module of table creator made with React can do the help to make a table component to our page. It has modes in list and info which are different ways to show data.'
      }
    },
    'popover': {
      'name': 'Popover',
      'description': {
        'basic': 'This module of popover creator made with React can do the help to make a popover component to our page. The popover can do th e thing about popover and dropdown.'
      }
    }
  }
});
// CONCATENATED MODULE: ./src/assets/languages/zh.js
/* harmony default export */ var zh = ({
  'menu': {
    'about': '關於本站',
    'packages': {
      'root': '套件',
      'basic': '基本介紹',
      'list': {
        'root': '清單',
        'example': {
          'list': '範例-List',
          'menu': '範例-Menu',
          'style': '範例-Style',
          'slot': '範例-Slot'
        }
      },
      'table': {
        'root': '表',
        'example': {
          'list': '範例-List',
          'info': '範例-Info',
          'compare': '範例-Compare',
          'style': '範例-Style',
          'slot': '範例-Slot'
        }
      },
      'popover': {
        'root': '氣泡框'
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
  'package': {
    'version_colon': '發布版本：',
    'release_colon': '發布日期：',
    'section': {
      'installation': '安裝',
      'render': '渲染',
      'parameters': '參數',
      'nodeTree': '節點樹'
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
        'entryObj': '套件支援客製化節點的功能，當以函式客製節點渲染時，函式初始為 (entry) => {} ，其中輸入值為該節點的原始資料。'
      },
      'nodeTree': {
        'notice': '附註：層的計算係由0開始。'
      }
    },
    'table': {
      'name': '表',
      'description': {
        'basic': '表的設計本身分成三種模式：列表、資訊與資訊並列，使用視窗監聽，再配合客製化的外觀。即可完成漂亮的響應式的表顯示。未來還會再擴充表頭的設定功能，讓表可以更輕易地完成：分頁、排序、搜尋、欄位過濾等功能。'
      }
    },
    'popover': {
      'name': '氣泡框',
      'description': {
        'basic': '氣泡框預設有偵測視窗邊界的功能，可靈活的切換顯示位置與對齊方式，也具有強制鎖定顯示狀態的設計，另外如果結合氣泡框與清單的套件，便可成為下拉式選單。'
      }
    }
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

/***/ }),

/***/ 79:
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
var classnames = __webpack_require__(48);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/recompose/dist/Recompose.esm.js + 1 modules
var Recompose_esm = __webpack_require__(55);

// EXTERNAL MODULE: ./src/plugins/btblab-prototype-languages.js + 2 modules
var btblab_prototype_languages = __webpack_require__(54);

// EXTERNAL MODULE: ./src/stores/langStore.js
var langStore = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-list/esm/index.js
var esm = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-popover/esm/index.js
var react_popover_esm = __webpack_require__(58);

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
    btblab_prototype_languages["a" /* lang */].set(event.index);
    env.state_showPopover.onToggle(false);
  }

  function _getLangList() {
    var langList = btblab_prototype_languages["a" /* lang */].menu().map(function (entry) {
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
  title: 'About',
  langIndex: 'menu.about'
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
      title: 'Example-List',
      langIndex: 'menu.packages.list.example.list'
    }, {
      id: 'PACKAGES_LIST_EXAMPLE_MENU',
      title: 'Example-Menu',
      langIndex: 'menu.packages.list.example.menu'
    }, {
      id: 'PACKAGES_LIST_EXAMPLE_STYLE',
      title: 'Example-Style',
      langIndex: 'menu.packages.list.example.style'
    }, {
      id: 'PACKAGES_LIST_EXAMPLE_SLOT',
      title: 'Example-Slot',
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
      title: 'Example-List',
      langIndex: 'menu.packages.table.example.list'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_INFO',
      title: 'Example-Info',
      langIndex: 'menu.packages.table.example.info'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_COMPARE',
      title: 'Example-Compare',
      langIndex: 'menu.packages.table.example.compare'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_STYLE',
      title: 'Example-Style',
      langIndex: 'menu.packages.table.example.style'
    }, {
      id: 'PACKAGES_TABLE_EXAMPLE_SLOT',
      title: 'Example-Slot',
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
      return __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, 80));
    })
  }), /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    path: routeMap["a" /* default */].PACKAGES,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, 77));
    })
  }), /*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */], {
    path: routeMap["a" /* default */].APPLICATIONS,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, 78));
    })
  }))));
};

/* harmony default export */ var routes_HomeContainer = __webpack_exports__["default"] = (HomeContainer_HomeContainer);

/***/ })

}]);