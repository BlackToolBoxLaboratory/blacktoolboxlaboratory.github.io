(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@blacktoolbox/react-table/esm/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@blacktoolbox/react-table/esm/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=function(t,e){var a;return e.forEach((function(e){a=Object.assign({},a,o(t,e))})),a},o=function(t,e){var a={};return"object"===c(t)&&Object.keys(t).find((function(c){if(c===e)return a=Object.assign({},t[c]),!0})),a},l=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),r=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),s=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead",{className:"list_head",style:n(c.styleObj,["list_head"])},c.headData.length?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:"head_tr",style:n(c.styleObj,["head_tr"])},c.headData.map((function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_th","th-".concat(e.id)),key:e.id,style:n(c.styleObj,["tr_th","th-".concat(e.id)])},c.slotObj["th-".concat(e.id)]?"function"==typeof c.slotObj["th-".concat(e.id)]?c.slotObj["th-".concat(e.id)](e):c.slotObj["th-".concat(e.id)]:e.name)}))):[])},d=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",{className:"list_body",style:n(c.styleObj,["list_body"])},c.bodyData.map((function(e,o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("body_tr","tr-".concat(o)),style:n(c.styleObj,["body_tr","tr-".concat(o)]),key:o},c.headData.map((function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_td","td-".concat(o.id)),style:n(c.styleObj,["tr_td","td-".concat(o.id)]),key:o.id},c.slotObj["td-".concat(o.id)]?"function"==typeof c.slotObj["td-".concat(o.id)]?c.slotObj["td-".concat(o.id)](e,o):c.slotObj["td-".concat(o.id)]:e[o.id])})))})))},i=function(){var a=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:"table_list",style:n(a.styleObj,["table_list"])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(s,null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(d,null))},b=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,c.bodyData.map((function(e,o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("table_info","info-".concat(o)),style:n(c.styleObj,["table_info","info-".concat(o)]),key:"".concat(e.id,"_").concat(o)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",{className:"info_body",style:n(c.styleObj,["info_body"])},c.headData.map((function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("body_tr","tr-".concat(o.id)),style:n(c.styleObj,["body_tr","tr-".concat(o.id)]),key:o.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_th","th-".concat(o.id)),style:n(c.styleObj,["tr_th","th-".concat(o.id)])},c.slotObj["th-".concat(o.id)]?"function"==typeof c.slotObj["th-".concat(o.id)]?c.slotObj["th-".concat(o.id)](o):c.slotObj["th-".concat(o.id)]:o.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_td","td-".concat(o.id)),style:n(c.styleObj,["tr_td","td-".concat(o.id)])},c.slotObj["td-".concat(o.id)]?"function"==typeof c.slotObj["td-".concat(o.id)]?c.slotObj["td-".concat(o.id)](e,o):c.slotObj["td-".concat(o.id)]:e[o.id]))}))))})))},y=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:"table_compare",style:n(c.styleObj,["table_compare"])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",{className:"compare_body",style:n(c.styleObj,["compare_body"])},c.headData.map((function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("body_tr","tr-".concat(e.id)),style:n(c.styleObj,["body_tr","tr-".concat(e.id)]),key:e.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_th","th-".concat(e.id)),style:n(c.styleObj,["tr_th","th-".concat(e.id)])},c.slotObj["th-".concat(e.id)]?"function"==typeof c.slotObj["th-".concat(e.id)]?c.slotObj["th-".concat(e.id)](e):c.slotObj["th-".concat(e.id)]:e.name),c.bodyData.map((function(o,l){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_td","td-".concat(e.id),"td-".concat(l)),style:n(c.styleObj,["tr_td","td-".concat(e.id),"td-".concat(l)]),key:"".concat(o.id,"_").concat(l)},c.slotObj["td-".concat(e.id)]?"function"==typeof c.slotObj["td-".concat(e.id)]?c.slotObj["td-".concat(e.id)](o,e):c.slotObj["td-".concat(e.id)]:o[e.id])})))}))))},m=react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((function(e,c){var o,s,d={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(o=e.styleObj||{},s={},Object.keys(o).forEach((function(t){s[t]={},Object.keys(o[t]).forEach((function(e){var a=e.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}));s[t][a]=o[t][e]}))})),s),slotObj:e.slotObj||{}},m={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l.Provider,{value:d},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(r.Provider,{value:m},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:c,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("btb-react-table",e.className),style:n(d.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b,null);case"compare":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(y,null);case"list":default:return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(i,null)}}())))}));/* harmony default export */ __webpack_exports__["default"] = (m);


/***/ }),

/***/ "./src/assets/definitions/packageObj.js":
/*!**********************************************!*\
  !*** ./src/assets/definitions/packageObj.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routeMap */ "./src/assets/definitions/routeMap.js");

var packageObj = {
  list: {
    name: 'package.list.name',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__["default"].PACKAGES_LIST_BASIC,
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
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__["default"].PACKAGES_TABLE_BASIC,
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
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__["default"].PACKAGES_POPOVER_BASIC,
    description: 'package.popover.description.basic',
    version: '1.1.1',
    updated: '2020-06-22',
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/react-popover',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/react-popover'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (packageObj);

/***/ }),

/***/ "./src/components/packages/list/Basic.jsx":
/*!************************************************!*\
  !*** ./src/components/packages/list/Basic.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _blacktoolbox_react_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blacktoolbox/react-list */ "./node_modules/@blacktoolbox/react-list/esm/index.js");
/* harmony import */ var _blacktoolbox_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blacktoolbox/react-table */ "./node_modules/@blacktoolbox/react-table/esm/index.js");
/* harmony import */ var _src_modules_pageLayout_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/modules/pageLayout/index.js */ "./src/modules/pageLayout/index.js");
/* harmony import */ var _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/utils/functions.js */ "./src/utils/functions.js");
/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./packageInfo.js */ "./src/components/packages/list/packageInfo.js");
/* harmony import */ var _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/plugins/btblab-prototype-languages.js */ "./src/plugins/btblab-prototype-languages.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    'languageSetting': state.language.languageSetting
  };
}));

var PageInfo = _objectSpread({}, _packageInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]);

var preInstall = "$ npm install --save @blacktoolbox/reat-list\n\nimport BTBList from '@blacktoolbox/reat-list'\nimport '@blacktoolbox/react-list/lib/index.css'";
var preRender = "<BTBList\n        dataList=\" Array of entryObj \" \n        defaultActiveID=\" String \"\n        activeID=\" String \"\n        collapseEnable=\" Boolean \"\n        styleObj=\" Object \"\n        slotObj=\" Object \"\n        onEntryClick=\" function(entryObj){} \"\n        onToggle=\" function(entryObj){} \"/>";
var preEntryObj = "entryObj = {\n        id: '',\n        title: '',\n        defaultCollapsed: false,\n        children: []\n}";
var preStyleObj = "styleObj = {\n        [ className ]: { inline CSS }\n}";
var preSlotObj = "slotObj = {\n        [ entryObj.id ]: ''\n}";
var nodeTree = [{
  id: 'list',
  title: '<div> .btb-react-list',
  children: [{
    id: 'layer',
    title: '<ul> .btb-react-list-layer .layer-[layer count]',
    children: [{
      id: 'container',
      title: '<li> .layer-container .layer-[layer count]',
      children: [{
        id: 'entry',
        title: '<div> .container_entry .entry-[entryObj.id] .entry-active',
        children: [{
          id: 'title',
          title: '<div> .entry_title'
        }, {
          id: 'collapseBtn',
          title: '<div> .entry_collapseBtn .collapseBtn-default',
          children: [{
            id: 'arrow',
            title: '<div> .collapseBtn_arrow'
          }]
        }]
      }, {
        id: 'sublayer',
        title: '<div>.list_sublayer',
        children: [{
          id: 'next',
          title: '<ul>.btb-vue-list-layer.layer-[layer count + 1]'
        }]
      }]
    }]
  }]
}];
var tableHeadArr_property = [{
  name: 'Property Name',
  id: 'title'
}, {
  name: 'Type',
  id: 'type'
}, {
  name: 'Default',
  id: 'default'
}, {
  name: 'Notice',
  id: 'notice'
}];
var tableHeadArr_entry = [{
  name: 'Name',
  id: 'title'
}, {
  name: 'Type',
  id: 'type'
}, {
  name: 'Notice',
  id: 'notice'
}];
var tableBodyArr_basic = [{
  title: 'dataList',
  type: 'package.paramType.array',
  default: '[]',
  notice: 'package.list.property.dataList'
}, {
  title: 'activeID',
  type: 'package.paramType.string',
  default: 'undefined',
  notice: 'package.list.property.activeID'
}, {
  title: 'defaultActiveID',
  type: 'package.paramType.string',
  default: 'undefined',
  notice: 'package.list.property.defaultActiveID'
}, {
  title: 'collapseEnable',
  type: 'package.paramType.boolean',
  default: 'false',
  notice: 'package.list.property.collapseEnable'
}, {
  title: 'styleObj',
  type: 'package.paramType.object',
  default: '{}',
  notice: 'package.list.property.styleObj'
}, {
  title: 'slotObj',
  type: 'package.paramType.object',
  default: '{}',
  notice: 'package.list.property.slotObj'
}, {
  title: 'onEntryClick',
  type: 'package.paramType.function',
  default: 'undefined',
  notice: 'package.list.property.onEntryClick'
}, {
  title: 'onToggle',
  type: 'package.paramType.function',
  default: 'undefined',
  notice: 'package.list.property.onToggle'
}, {
  title: 'ref',
  type: 'useRef',
  default: 'undefined',
  notice: 'package.list.property.ref'
}];
var tableBodyArr_entry = [{
  title: 'id',
  type: 'package.paramType.string',
  notice: 'package.list.entryObj.id'
}, {
  title: 'title',
  type: 'package.paramType.string||package.paramType.node',
  notice: 'package.list.entryObj.title'
}, {
  title: 'defaultCollapsed',
  type: 'package.paramType.string',
  notice: 'package.list.entryObj.defaultCollapsed'
}, {
  title: 'children',
  type: 'package.paramType.array',
  notice: 'package.list.entryObj.children'
}];
var tableBodyArr_slot = [{
  title: '[ id of entryObj ]',
  type: 'package.paramType.string||package.paramType.node||package.paramType.function',
  notice: 'package.list.slotObj.entryObj'
}];
var tableSlotObj = {
  'td-type': function tdType(data, column) {
    var sep = data[column.id].split('||');
    var result = '';

    if (sep.length > 0) {
      result = sep.map(function (item) {
        return _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate(item);
      }).join(' || ');
    } else {
      result = data[column.id] === 'useRef' ? 'useRef' : _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate(data[column.id]);
    }

    return result;
  },
  'td-notice': function tdNotice(data, column) {
    return _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate(data[column.id]);
  }
};
var Basic = enhance(function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout_index_js__WEBPACK_IMPORTED_MODULE_5__["Page"], {
    className: "btb-pkg-list-basic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout_index_js__WEBPACK_IMPORTED_MODULE_5__["PageHead"], {
    title: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate('package.list.name'),
    clickBtn: _src_utils_functions_js__WEBPACK_IMPORTED_MODULE_6__["openLink"],
    linkList: PageInfo.linkList
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout_index_js__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    head: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate('package.version_colon')).concat(PageInfo.version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "".concat(_src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate('package.release_colon')).concat(PageInfo.updated))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, PageInfo.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout_index_js__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    head: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate('package.section.installation')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    className: "page_pre"
  }, preInstall)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout_index_js__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    head: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate('package.section.render')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    className: "page_pre"
  }, preRender)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout_index_js__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    head: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate('package.section.parameters')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "page_table",
    mode: "list",
    headData: tableHeadArr_property,
    bodyData: tableBodyArr_basic,
    slotObj: tableSlotObj
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout_index_js__WEBPACK_IMPORTED_MODULE_5__["Block"], {
    title: "entryObj"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate('package.list.parameters.entryObj')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    className: "page_pre"
  }, preEntryObj), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "page_table",
    mode: "list",
    headData: tableHeadArr_entry,
    bodyData: tableBodyArr_entry,
    slotObj: tableSlotObj
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout_index_js__WEBPACK_IMPORTED_MODULE_5__["Block"], {
    title: "styleObj"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate('package.list.parameters.styleObj')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    className: "page_pre"
  }, preStyleObj)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout_index_js__WEBPACK_IMPORTED_MODULE_5__["Block"], {
    title: "slotObj"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate('package.list.parameters.slotObj')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    className: "page_pre"
  }, preSlotObj), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "page_table",
    mode: "list",
    headData: tableHeadArr_entry,
    bodyData: tableBodyArr_slot,
    slotObj: tableSlotObj
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_modules_pageLayout_index_js__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    head: _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate('package.section.nodeTree')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blacktoolbox_react_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "page_node_tree",
    dataList: nodeTree
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _src_plugins_btblab_prototype_languages_js__WEBPACK_IMPORTED_MODULE_8__["lang"].translate('package.list.nodeTree.notice'))));
});
/* harmony default export */ __webpack_exports__["default"] = (Basic);

/***/ }),

/***/ "./src/components/packages/list/packageInfo.js":
/*!*****************************************************!*\
  !*** ./src/components/packages/list/packageInfo.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/assets/definitions/packageObj */ "./src/assets/definitions/packageObj.js");

var packageInfo = {
  'version': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__["default"].list.version,
  'updated': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__["default"].list.updated,
  'description': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__["default"].list.description,
  'linkList': [{
    'id': 'github',
    'fa': ['fab', 'github'],
    'url': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__["default"].list.link.github
  }, {
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__["default"].list.link.npm
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (packageInfo);

/***/ }),

/***/ "./src/modules/pageLayout/Block.jsx":
/*!******************************************!*\
  !*** ./src/modules/pageLayout/Block.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Block = function Block(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "module-block"
  }, props.title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block_title"
  }, props.title) : [], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block_body"
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),

/***/ "./src/modules/pageLayout/Divider.jsx":
/*!********************************************!*\
  !*** ./src/modules/pageLayout/Divider.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");



var Divider = function Divider() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "module-divider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "divider_line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "divider_line"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Divider);

/***/ }),

/***/ "./src/modules/pageLayout/Page.jsx":
/*!*****************************************!*\
  !*** ./src/modules/pageLayout/Page.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Page = function Page(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ['module-page', props.className].join(' ')
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/modules/pageLayout/PageHead.jsx":
/*!*********************************************!*\
  !*** ./src/modules/pageLayout/PageHead.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




var PageHead = function PageHead(props) {
  function _clickBtn(event) {
    if (props.clickBtn) {
      props.clickBtn(event);
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "module-page-head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "head_title"
  }, props.title || ''), (props.linkList || []).map(function (btn) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('head_btn', "btn-".concat(btn.id)),
      key: btn.id,
      onClick: function onClick() {
        _clickBtn(btn);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: btn.fa,
      fixedWidth: true
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PageHead);

/***/ }),

/***/ "./src/modules/pageLayout/Section.jsx":
/*!********************************************!*\
  !*** ./src/modules/pageLayout/Section.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Section = function Section(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ['module-section', props.className].join(' ')
  }, props.head ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section_head"
  }, props.head) : [], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section_body"
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/modules/pageLayout/index.js":
/*!*****************************************!*\
  !*** ./src/modules/pageLayout/index.js ***!
  \*****************************************/
/*! exports provided: Page, PageHead, Section, Divider, Block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page.jsx */ "./src/modules/pageLayout/Page.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _Page_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PageHead_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHead.jsx */ "./src/modules/pageLayout/PageHead.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHead", function() { return _PageHead_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Section_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section.jsx */ "./src/modules/pageLayout/Section.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Block_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Block.jsx */ "./src/modules/pageLayout/Block.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return _Block_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Divider_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Divider.jsx */ "./src/modules/pageLayout/Divider.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _Divider_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./src/routes/packages/list/BasicContainer.jsx":
/*!*****************************************************!*\
  !*** ./src/routes/packages/list/BasicContainer.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_packages_list_Basic_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/components/packages/list/Basic.jsx */ "./src/components/packages/list/Basic.jsx");



var BasicContaier = function BasicContaier() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_packages_list_Basic_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (BasicContaier);

/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/*! exports provided: openLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLink", function() { return openLink; });
var openLink = function openLink(link) {
  window.open(link.url);
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJsYWNrdG9vbGJveC9yZWFjdC10YWJsZS9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kZWZpbml0aW9ucy9wYWNrYWdlT2JqLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhY2thZ2VzL2xpc3QvQmFzaWMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhY2thZ2VzL2xpc3QvcGFja2FnZUluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZUxheW91dC9CbG9jay5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZUxheW91dC9EaXZpZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlTGF5b3V0L1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VMYXlvdXQvUGFnZUhlYWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VMYXlvdXQvU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZUxheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3BhY2thZ2VzL2xpc3QvQmFzaWNDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9mdW5jdGlvbnMuanMiXSwibmFtZXMiOlsicGFja2FnZU9iaiIsImxpc3QiLCJuYW1lIiwicm91dGVuYW1lIiwiUk9VVEUiLCJQQUNLQUdFU19MSVNUX0JBU0lDIiwiZGVzY3JpcHRpb24iLCJ2ZXJzaW9uIiwidXBkYXRlZCIsImxpbmsiLCJnaXRodWIiLCJucG0iLCJ0YWJsZSIsIlBBQ0tBR0VTX1RBQkxFX0JBU0lDIiwicG9wb3ZlciIsIlBBQ0tBR0VTX1BPUE9WRVJfQkFTSUMiLCJlbmhhbmNlIiwiY29tcG9zZSIsImNvbm5lY3QiLCJzdGF0ZSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VTZXR0aW5nIiwiUGFnZUluZm8iLCJwYWNrYWdlSW5mbyIsInByZUluc3RhbGwiLCJwcmVSZW5kZXIiLCJwcmVFbnRyeU9iaiIsInByZVN0eWxlT2JqIiwicHJlU2xvdE9iaiIsIm5vZGVUcmVlIiwiaWQiLCJ0aXRsZSIsImNoaWxkcmVuIiwidGFibGVIZWFkQXJyX3Byb3BlcnR5IiwidGFibGVIZWFkQXJyX2VudHJ5IiwidGFibGVCb2R5QXJyX2Jhc2ljIiwidHlwZSIsImRlZmF1bHQiLCJub3RpY2UiLCJ0YWJsZUJvZHlBcnJfZW50cnkiLCJ0YWJsZUJvZHlBcnJfc2xvdCIsInRhYmxlU2xvdE9iaiIsImRhdGEiLCJjb2x1bW4iLCJzZXAiLCJzcGxpdCIsInJlc3VsdCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJsYW5nIiwidHJhbnNsYXRlIiwiam9pbiIsIkJhc2ljIiwib3BlbkxpbmsiLCJsaW5rTGlzdCIsIkJsb2NrIiwicHJvcHMiLCJEaXZpZGVyIiwiUGFnZSIsImNsYXNzTmFtZSIsIlBhZ2VIZWFkIiwiX2NsaWNrQnRuIiwiZXZlbnQiLCJjbGlja0J0biIsImJ0biIsImNsYXNzbmFtZXMiLCJmYSIsIlNlY3Rpb24iLCJoZWFkIiwiQmFzaWNDb250YWllciIsIndpbmRvdyIsIm9wZW4iLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdFLGNBQWMsaUZBQWlGLGdCQUFnQixhQUFhLG9HQUFvRyxLQUFLLG9CQUFvQixNQUFNLDhCQUE4QixrQkFBa0IsV0FBVyxLQUFLLGlCQUFpQixTQUFTLHdEQUF3RCxrQ0FBa0MsVUFBVSxLQUFLLEdBQUcsNENBQUMsbUJBQW1CLDRDQUFDLDhCQUE4QixNQUFNLHdEQUFDLElBQUksT0FBTyw0Q0FBQyx3QkFBd0Isd0RBQXdELG1CQUFtQiw0Q0FBQyxxQkFBcUIsb0RBQW9ELDZCQUE2QixPQUFPLDRDQUFDLHFCQUFxQixVQUFVLGlEQUFDLHVGQUF1Rix1SkFBdUosUUFBUSxjQUFjLE1BQU0sd0RB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ZixFOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUVBLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixzQkFDRSwyREFBQywrRUFBRCxPQURGO0FBR0QsQ0FKRDs7QUFNZUEsNEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBLElBQU1oQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDN0MsSUFBRCxFQUFVO0FBQ3pCOEQsUUFBTSxDQUFDQyxJQUFQLENBQVkvRCxJQUFJLENBQUNnRSxHQUFqQjtBQUNELENBRkQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0LHt1c2VDb250ZXh0IGFzIGV9ZnJvbVwicmVhY3RcIjtpbXBvcnQgYSBmcm9tXCJjbGFzc25hbWVzXCI7ZnVuY3Rpb24gYyh0KXtyZXR1cm4oYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9dmFyIG49ZnVuY3Rpb24odCxlKXt2YXIgYTtyZXR1cm4gZS5mb3JFYWNoKChmdW5jdGlvbihlKXthPU9iamVjdC5hc3NpZ24oe30sYSxvKHQsZSkpfSkpLGF9LG89ZnVuY3Rpb24odCxlKXt2YXIgYT17fTtyZXR1cm5cIm9iamVjdFwiPT09Yyh0KSYmT2JqZWN0LmtleXModCkuZmluZCgoZnVuY3Rpb24oYyl7aWYoYz09PWUpcmV0dXJuIGE9T2JqZWN0LmFzc2lnbih7fSx0W2NdKSwhMH0pKSxhfSxsPXQuY3JlYXRlQ29udGV4dCgpLHI9dC5jcmVhdGVDb250ZXh0KCkscz1mdW5jdGlvbigpe3ZhciBjPWUobCk7cmV0dXJuIHQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIse2NsYXNzTmFtZTpcImxpc3RfaGVhZFwiLHN0eWxlOm4oYy5zdHlsZU9iaixbXCJsaXN0X2hlYWRcIl0pfSxjLmhlYWREYXRhLmxlbmd0aD90LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLHtjbGFzc05hbWU6XCJoZWFkX3RyXCIsc3R5bGU6bihjLnN0eWxlT2JqLFtcImhlYWRfdHJcIl0pfSxjLmhlYWREYXRhLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHQuY3JlYXRlRWxlbWVudChcInRoXCIse2NsYXNzTmFtZTphKFwidHJfdGhcIixcInRoLVwiLmNvbmNhdChlLmlkKSksa2V5OmUuaWQsc3R5bGU6bihjLnN0eWxlT2JqLFtcInRyX3RoXCIsXCJ0aC1cIi5jb25jYXQoZS5pZCldKX0sYy5zbG90T2JqW1widGgtXCIuY29uY2F0KGUuaWQpXT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBjLnNsb3RPYmpbXCJ0aC1cIi5jb25jYXQoZS5pZCldP2Muc2xvdE9ialtcInRoLVwiLmNvbmNhdChlLmlkKV0oZSk6Yy5zbG90T2JqW1widGgtXCIuY29uY2F0KGUuaWQpXTplLm5hbWUpfSkpKTpbXSl9LGQ9ZnVuY3Rpb24oKXt2YXIgYz1lKGwpO3JldHVybiB0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLHtjbGFzc05hbWU6XCJsaXN0X2JvZHlcIixzdHlsZTpuKGMuc3R5bGVPYmosW1wibGlzdF9ib2R5XCJdKX0sYy5ib2R5RGF0YS5tYXAoKGZ1bmN0aW9uKGUsbyl7cmV0dXJuIHQuY3JlYXRlRWxlbWVudChcInRyXCIse2NsYXNzTmFtZTphKFwiYm9keV90clwiLFwidHItXCIuY29uY2F0KG8pKSxzdHlsZTpuKGMuc3R5bGVPYmosW1wiYm9keV90clwiLFwidHItXCIuY29uY2F0KG8pXSksa2V5Om99LGMuaGVhZERhdGEubWFwKChmdW5jdGlvbihvKXtyZXR1cm4gdC5jcmVhdGVFbGVtZW50KFwidGRcIix7Y2xhc3NOYW1lOmEoXCJ0cl90ZFwiLFwidGQtXCIuY29uY2F0KG8uaWQpKSxzdHlsZTpuKGMuc3R5bGVPYmosW1widHJfdGRcIixcInRkLVwiLmNvbmNhdChvLmlkKV0pLGtleTpvLmlkfSxjLnNsb3RPYmpbXCJ0ZC1cIi5jb25jYXQoby5pZCldP1wiZnVuY3Rpb25cIj09dHlwZW9mIGMuc2xvdE9ialtcInRkLVwiLmNvbmNhdChvLmlkKV0/Yy5zbG90T2JqW1widGQtXCIuY29uY2F0KG8uaWQpXShlLG8pOmMuc2xvdE9ialtcInRkLVwiLmNvbmNhdChvLmlkKV06ZVtvLmlkXSl9KSkpfSkpKX0saT1mdW5jdGlvbigpe3ZhciBhPWUobCk7cmV0dXJuIHQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIse2NsYXNzTmFtZTpcInRhYmxlX2xpc3RcIixzdHlsZTpuKGEuc3R5bGVPYmosW1widGFibGVfbGlzdFwiXSl9LHQuY3JlYXRlRWxlbWVudChzLG51bGwpLHQuY3JlYXRlRWxlbWVudChkLG51bGwpKX0sYj1mdW5jdGlvbigpe3ZhciBjPWUobCk7cmV0dXJuIHQuY3JlYXRlRWxlbWVudCh0LkZyYWdtZW50LG51bGwsYy5ib2R5RGF0YS5tYXAoKGZ1bmN0aW9uKGUsbyl7cmV0dXJuIHQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIse2NsYXNzTmFtZTphKFwidGFibGVfaW5mb1wiLFwiaW5mby1cIi5jb25jYXQobykpLHN0eWxlOm4oYy5zdHlsZU9iaixbXCJ0YWJsZV9pbmZvXCIsXCJpbmZvLVwiLmNvbmNhdChvKV0pLGtleTpcIlwiLmNvbmNhdChlLmlkLFwiX1wiKS5jb25jYXQobyl9LHQuY3JlYXRlRWxlbWVudChcInRib2R5XCIse2NsYXNzTmFtZTpcImluZm9fYm9keVwiLHN0eWxlOm4oYy5zdHlsZU9iaixbXCJpbmZvX2JvZHlcIl0pfSxjLmhlYWREYXRhLm1hcCgoZnVuY3Rpb24obyl7cmV0dXJuIHQuY3JlYXRlRWxlbWVudChcInRyXCIse2NsYXNzTmFtZTphKFwiYm9keV90clwiLFwidHItXCIuY29uY2F0KG8uaWQpKSxzdHlsZTpuKGMuc3R5bGVPYmosW1wiYm9keV90clwiLFwidHItXCIuY29uY2F0KG8uaWQpXSksa2V5Om8uaWR9LHQuY3JlYXRlRWxlbWVudChcInRoXCIse2NsYXNzTmFtZTphKFwidHJfdGhcIixcInRoLVwiLmNvbmNhdChvLmlkKSksc3R5bGU6bihjLnN0eWxlT2JqLFtcInRyX3RoXCIsXCJ0aC1cIi5jb25jYXQoby5pZCldKX0sYy5zbG90T2JqW1widGgtXCIuY29uY2F0KG8uaWQpXT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBjLnNsb3RPYmpbXCJ0aC1cIi5jb25jYXQoby5pZCldP2Muc2xvdE9ialtcInRoLVwiLmNvbmNhdChvLmlkKV0obyk6Yy5zbG90T2JqW1widGgtXCIuY29uY2F0KG8uaWQpXTpvLm5hbWUpLHQuY3JlYXRlRWxlbWVudChcInRkXCIse2NsYXNzTmFtZTphKFwidHJfdGRcIixcInRkLVwiLmNvbmNhdChvLmlkKSksc3R5bGU6bihjLnN0eWxlT2JqLFtcInRyX3RkXCIsXCJ0ZC1cIi5jb25jYXQoby5pZCldKX0sYy5zbG90T2JqW1widGQtXCIuY29uY2F0KG8uaWQpXT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBjLnNsb3RPYmpbXCJ0ZC1cIi5jb25jYXQoby5pZCldP2Muc2xvdE9ialtcInRkLVwiLmNvbmNhdChvLmlkKV0oZSxvKTpjLnNsb3RPYmpbXCJ0ZC1cIi5jb25jYXQoby5pZCldOmVbby5pZF0pKX0pKSkpfSkpKX0seT1mdW5jdGlvbigpe3ZhciBjPWUobCk7cmV0dXJuIHQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIse2NsYXNzTmFtZTpcInRhYmxlX2NvbXBhcmVcIixzdHlsZTpuKGMuc3R5bGVPYmosW1widGFibGVfY29tcGFyZVwiXSl9LHQuY3JlYXRlRWxlbWVudChcInRib2R5XCIse2NsYXNzTmFtZTpcImNvbXBhcmVfYm9keVwiLHN0eWxlOm4oYy5zdHlsZU9iaixbXCJjb21wYXJlX2JvZHlcIl0pfSxjLmhlYWREYXRhLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHQuY3JlYXRlRWxlbWVudChcInRyXCIse2NsYXNzTmFtZTphKFwiYm9keV90clwiLFwidHItXCIuY29uY2F0KGUuaWQpKSxzdHlsZTpuKGMuc3R5bGVPYmosW1wiYm9keV90clwiLFwidHItXCIuY29uY2F0KGUuaWQpXSksa2V5OmUuaWR9LHQuY3JlYXRlRWxlbWVudChcInRoXCIse2NsYXNzTmFtZTphKFwidHJfdGhcIixcInRoLVwiLmNvbmNhdChlLmlkKSksc3R5bGU6bihjLnN0eWxlT2JqLFtcInRyX3RoXCIsXCJ0aC1cIi5jb25jYXQoZS5pZCldKX0sYy5zbG90T2JqW1widGgtXCIuY29uY2F0KGUuaWQpXT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBjLnNsb3RPYmpbXCJ0aC1cIi5jb25jYXQoZS5pZCldP2Muc2xvdE9ialtcInRoLVwiLmNvbmNhdChlLmlkKV0oZSk6Yy5zbG90T2JqW1widGgtXCIuY29uY2F0KGUuaWQpXTplLm5hbWUpLGMuYm9keURhdGEubWFwKChmdW5jdGlvbihvLGwpe3JldHVybiB0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLHtjbGFzc05hbWU6YShcInRyX3RkXCIsXCJ0ZC1cIi5jb25jYXQoZS5pZCksXCJ0ZC1cIi5jb25jYXQobCkpLHN0eWxlOm4oYy5zdHlsZU9iaixbXCJ0cl90ZFwiLFwidGQtXCIuY29uY2F0KGUuaWQpLFwidGQtXCIuY29uY2F0KGwpXSksa2V5OlwiXCIuY29uY2F0KG8uaWQsXCJfXCIpLmNvbmNhdChsKX0sYy5zbG90T2JqW1widGQtXCIuY29uY2F0KGUuaWQpXT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBjLnNsb3RPYmpbXCJ0ZC1cIi5jb25jYXQoZS5pZCldP2Muc2xvdE9ialtcInRkLVwiLmNvbmNhdChlLmlkKV0obyxlKTpjLnNsb3RPYmpbXCJ0ZC1cIi5jb25jYXQoZS5pZCldOm9bZS5pZF0pfSkpKX0pKSkpfSxtPXQuZm9yd2FyZFJlZigoZnVuY3Rpb24oZSxjKXt2YXIgbyxzLGQ9e2hlYWREYXRhOmUuaGVhZERhdGF8fFtdLGJvZHlEYXRhOmUuYm9keURhdGF8fFtdLHN0eWxlT2JqOihvPWUuc3R5bGVPYmp8fHt9LHM9e30sT2JqZWN0LmtleXMobykuZm9yRWFjaCgoZnVuY3Rpb24odCl7c1t0XT17fSxPYmplY3Qua2V5cyhvW3RdKS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgYT1lLnJlcGxhY2UoLy0oXFx3KS9nLChmdW5jdGlvbih0LGUpe3JldHVybiBlLnRvVXBwZXJDYXNlKCl9KSk7c1t0XVthXT1vW3RdW2VdfSkpfSkpLHMpLHNsb3RPYmo6ZS5zbG90T2JqfHx7fX0sbT17Y2xpY2tEYXRhOmZ1bmN0aW9uKHQpe2Uub25EYXRhQ2xpY2smJmUub25EYXRhQ2xpY2sodCl9fTtyZXR1cm4gdC5jcmVhdGVFbGVtZW50KGwuUHJvdmlkZXIse3ZhbHVlOmR9LHQuY3JlYXRlRWxlbWVudChyLlByb3ZpZGVyLHt2YWx1ZTptfSx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7cmVmOmMsY2xhc3NOYW1lOmEoXCJidGItcmVhY3QtdGFibGVcIixlLmNsYXNzTmFtZSksc3R5bGU6bihkLnN0eWxlT2JqLFtcImJ0Yi1yZWFjdC10YWJsZVwiXSl9LGZ1bmN0aW9uKCl7c3dpdGNoKGUubW9kZSl7Y2FzZVwiaW5mb1wiOnJldHVybiB0LmNyZWF0ZUVsZW1lbnQoYixudWxsKTtjYXNlXCJjb21wYXJlXCI6cmV0dXJuIHQuY3JlYXRlRWxlbWVudCh5LG51bGwpO2Nhc2VcImxpc3RcIjpkZWZhdWx0OnJldHVybiB0LmNyZWF0ZUVsZW1lbnQoaSxudWxsKX19KCkpKSl9KSk7ZXhwb3J0IGRlZmF1bHQgbTtcbiIsImltcG9ydCBST1VURSBmcm9tICcuL3JvdXRlTWFwJztcblxuY29uc3QgcGFja2FnZU9iaiA9IHtcbiAgbGlzdCA6IHtcbiAgICBuYW1lICAgICAgICA6ICdwYWNrYWdlLmxpc3QubmFtZScsXG4gICAgcm91dGVuYW1lICAgOiBST1VURS5QQUNLQUdFU19MSVNUX0JBU0lDLFxuICAgIGRlc2NyaXB0aW9uIDogJ3BhY2thZ2UubGlzdC5kZXNjcmlwdGlvbi5iYXNpYycsXG4gICAgdmVyc2lvbiAgICAgOiAnMi4yLjAnLFxuICAgIHVwZGF0ZWQgICAgIDogJzIwMjAtMDYtMjEnLFxuICAgIGxpbmsgICAgICAgIDoge1xuICAgICAgZ2l0aHViIDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9CbGFja1Rvb2xCb3hMYWJvcmF0b3J5L3JlYWN0LWxpc3QnLFxuICAgICAgbnBtICAgIDogJ2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0BibGFja3Rvb2xib3gvcmVhY3QtbGlzdCdcbiAgICB9XG4gIH0sXG4gIHRhYmxlIDoge1xuICAgIG5hbWUgICAgICAgIDogJ3BhY2thZ2UudGFibGUubmFtZScsXG4gICAgcm91dGVuYW1lICAgOiBST1VURS5QQUNLQUdFU19UQUJMRV9CQVNJQyxcbiAgICBkZXNjcmlwdGlvbiA6ICdwYWNrYWdlLnRhYmxlLmRlc2NyaXB0aW9uLmJhc2ljJyxcbiAgICB2ZXJzaW9uICAgICA6ICcxLjQuMCcsXG4gICAgdXBkYXRlZCAgICAgOiAnMjAyMC0wNi0yMScsXG4gICAgbGluayAgICAgICAgOiB7XG4gICAgICBnaXRodWIgOiAnaHR0cHM6Ly9naXRodWIuY29tL0JsYWNrVG9vbEJveExhYm9yYXRvcnkvcmVhY3QtdGFibGUnLFxuICAgICAgbnBtICAgIDogJ2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0BibGFja3Rvb2xib3gvcmVhY3QtdGFibGUnXG4gICAgfVxuICB9LFxuICBwb3BvdmVyIDoge1xuICAgIG5hbWUgICAgICAgIDogJ3BhY2thZ2UucG9wb3Zlci5uYW1lJyxcbiAgICByb3V0ZW5hbWUgICA6IFJPVVRFLlBBQ0tBR0VTX1BPUE9WRVJfQkFTSUMsXG4gICAgZGVzY3JpcHRpb24gOiAncGFja2FnZS5wb3BvdmVyLmRlc2NyaXB0aW9uLmJhc2ljJyxcbiAgICB2ZXJzaW9uICAgICA6ICcxLjEuMScsXG4gICAgdXBkYXRlZCAgICAgOiAnMjAyMC0wNi0yMicsXG4gICAgbGluayAgICAgICAgOiB7XG4gICAgICBnaXRodWIgOiAnaHR0cHM6Ly9naXRodWIuY29tL0JsYWNrVG9vbEJveExhYm9yYXRvcnkvcmVhY3QtcG9wb3ZlcicsXG4gICAgICBucG0gICAgOiAnaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvQGJsYWNrdG9vbGJveC9yZWFjdC1wb3BvdmVyJ1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFja2FnZU9iajtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5cbmltcG9ydCBCVEJMaXN0IGZyb20gJ0BibGFja3Rvb2xib3gvcmVhY3QtbGlzdCc7XG5pbXBvcnQgQlRCVGFibGUgZnJvbSAnQGJsYWNrdG9vbGJveC9yZWFjdC10YWJsZSc7XG5cbmltcG9ydCB7IFBhZ2UsIFBhZ2VIZWFkLCBTZWN0aW9uLCBCbG9jayB9IGZyb20gJ0BzcmMvbW9kdWxlcy9wYWdlTGF5b3V0L2luZGV4LmpzJztcblxuaW1wb3J0IHsgb3BlbkxpbmsgfSBmcm9tICdAc3JjL3V0aWxzL2Z1bmN0aW9ucy5qcyc7XG5cbmltcG9ydCBwYWNrYWdlSW5mbyBmcm9tICcuL3BhY2thZ2VJbmZvLmpzJztcblxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJ0BzcmMvcGx1Z2lucy9idGJsYWItcHJvdG90eXBlLWxhbmd1YWdlcy5qcyc7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICBjb25uZWN0KFxuICAgIChzdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ2xhbmd1YWdlU2V0dGluZycgIDogc3RhdGUubGFuZ3VhZ2UubGFuZ3VhZ2VTZXR0aW5nXG4gICAgICB9O1xuICAgIH1cbiAgKVxuKTtcblxuY29uc3QgUGFnZUluZm8gPSB7XG4gIC4uLnBhY2thZ2VJbmZvXG59O1xuXG5jb25zdCBwcmVJbnN0YWxsID0gXG5gJCBucG0gaW5zdGFsbCAtLXNhdmUgQGJsYWNrdG9vbGJveC9yZWF0LWxpc3RcblxuaW1wb3J0IEJUQkxpc3QgZnJvbSAnQGJsYWNrdG9vbGJveC9yZWF0LWxpc3QnXG5pbXBvcnQgJ0BibGFja3Rvb2xib3gvcmVhY3QtbGlzdC9saWIvaW5kZXguY3NzJ2A7XG5cbmNvbnN0IHByZVJlbmRlciA9XG5gPEJUQkxpc3RcbiAgICAgICAgZGF0YUxpc3Q9XCIgQXJyYXkgb2YgZW50cnlPYmogXCIgXG4gICAgICAgIGRlZmF1bHRBY3RpdmVJRD1cIiBTdHJpbmcgXCJcbiAgICAgICAgYWN0aXZlSUQ9XCIgU3RyaW5nIFwiXG4gICAgICAgIGNvbGxhcHNlRW5hYmxlPVwiIEJvb2xlYW4gXCJcbiAgICAgICAgc3R5bGVPYmo9XCIgT2JqZWN0IFwiXG4gICAgICAgIHNsb3RPYmo9XCIgT2JqZWN0IFwiXG4gICAgICAgIG9uRW50cnlDbGljaz1cIiBmdW5jdGlvbihlbnRyeU9iail7fSBcIlxuICAgICAgICBvblRvZ2dsZT1cIiBmdW5jdGlvbihlbnRyeU9iail7fSBcIi8+YDtcblxuY29uc3QgcHJlRW50cnlPYmogPSBcbmBlbnRyeU9iaiA9IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGRlZmF1bHRDb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICBjaGlsZHJlbjogW11cbn1gO1xuXG5jb25zdCBwcmVTdHlsZU9iaiA9XG5gc3R5bGVPYmogPSB7XG4gICAgICAgIFsgY2xhc3NOYW1lIF06IHsgaW5saW5lIENTUyB9XG59YDtcblxuY29uc3QgcHJlU2xvdE9iaiA9IFxuYHNsb3RPYmogPSB7XG4gICAgICAgIFsgZW50cnlPYmouaWQgXTogJydcbn1gO1xuXG5jb25zdCBub2RlVHJlZSA9IFtcbiAge1xuICAgIGlkICAgICAgIDogJ2xpc3QnLFxuICAgIHRpdGxlICAgIDogJzxkaXY+IC5idGItcmVhY3QtbGlzdCcsXG4gICAgY2hpbGRyZW4gOiBbXG4gICAgICB7XG4gICAgICAgIGlkICAgICAgIDogJ2xheWVyJyxcbiAgICAgICAgdGl0bGUgICAgOiAnPHVsPiAuYnRiLXJlYWN0LWxpc3QtbGF5ZXIgLmxheWVyLVtsYXllciBjb3VudF0nLFxuICAgICAgICBjaGlsZHJlbiA6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZCAgICAgICA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgdGl0bGUgICAgOiAnPGxpPiAubGF5ZXItY29udGFpbmVyIC5sYXllci1bbGF5ZXIgY291bnRdJyxcbiAgICAgICAgICAgIGNoaWxkcmVuIDogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQgICAgICAgOiAnZW50cnknLFxuICAgICAgICAgICAgICAgIHRpdGxlICAgIDogJzxkaXY+IC5jb250YWluZXJfZW50cnkgLmVudHJ5LVtlbnRyeU9iai5pZF0gLmVudHJ5LWFjdGl2ZScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkICAgIDogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnPGRpdj4gLmVudHJ5X3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgOiAnY29sbGFwc2VCdG4nLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZSAgICA6ICc8ZGl2PiAuZW50cnlfY29sbGFwc2VCdG4gLmNvbGxhcHNlQnRuLWRlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICA6ICdhcnJvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICc8ZGl2PiAuY29sbGFwc2VCdG5fYXJyb3cnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQgICAgICAgOiAnc3VibGF5ZXInLFxuICAgICAgICAgICAgICAgIHRpdGxlICAgIDogJzxkaXY+Lmxpc3Rfc3VibGF5ZXInLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuIDogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZCAgICA6ICduZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnPHVsPi5idGItdnVlLWxpc3QtbGF5ZXIubGF5ZXItW2xheWVyIGNvdW50ICsgMV0nXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5jb25zdCB0YWJsZUhlYWRBcnJfcHJvcGVydHkgPSBbXG4gIHsgbmFtZSA6ICdQcm9wZXJ0eSBOYW1lJywgaWQgOiAndGl0bGUnIH0sXG4gIHsgbmFtZSA6ICdUeXBlJywgaWQgOiAndHlwZScgfSxcbiAgeyBuYW1lIDogJ0RlZmF1bHQnLCBpZCA6ICdkZWZhdWx0JyB9LFxuICB7IG5hbWUgOiAnTm90aWNlJywgaWQgOiAnbm90aWNlJyB9XG5dO1xuY29uc3QgdGFibGVIZWFkQXJyX2VudHJ5ID0gW1xuICB7IG5hbWUgOiAnTmFtZScsIGlkIDogJ3RpdGxlJyB9LFxuICB7IG5hbWUgOiAnVHlwZScsIGlkIDogJ3R5cGUnIH0sXG4gIHsgbmFtZSA6ICdOb3RpY2UnLCBpZCA6ICdub3RpY2UnIH1cbl07XG5cbmNvbnN0IHRhYmxlQm9keUFycl9iYXNpYyA9IFtcbiAgeyB0aXRsZSA6ICdkYXRhTGlzdCcsIHR5cGUgOiAncGFja2FnZS5wYXJhbVR5cGUuYXJyYXknLCBkZWZhdWx0IDogJ1tdJywgbm90aWNlIDogJ3BhY2thZ2UubGlzdC5wcm9wZXJ0eS5kYXRhTGlzdCcgfSxcbiAgeyB0aXRsZSA6ICdhY3RpdmVJRCcsIHR5cGUgOiAncGFja2FnZS5wYXJhbVR5cGUuc3RyaW5nJywgZGVmYXVsdCA6ICd1bmRlZmluZWQnLCBub3RpY2UgOiAncGFja2FnZS5saXN0LnByb3BlcnR5LmFjdGl2ZUlEJyB9LFxuICB7IHRpdGxlIDogJ2RlZmF1bHRBY3RpdmVJRCcsIHR5cGUgOiAncGFja2FnZS5wYXJhbVR5cGUuc3RyaW5nJywgZGVmYXVsdCA6ICd1bmRlZmluZWQnLCBub3RpY2UgOiAncGFja2FnZS5saXN0LnByb3BlcnR5LmRlZmF1bHRBY3RpdmVJRCcgfSxcbiAgeyB0aXRsZSA6ICdjb2xsYXBzZUVuYWJsZScsIHR5cGUgOiAncGFja2FnZS5wYXJhbVR5cGUuYm9vbGVhbicsIGRlZmF1bHQgOiAnZmFsc2UnLCBub3RpY2UgOiAncGFja2FnZS5saXN0LnByb3BlcnR5LmNvbGxhcHNlRW5hYmxlJyB9LFxuICB7IHRpdGxlIDogJ3N0eWxlT2JqJywgdHlwZSA6ICdwYWNrYWdlLnBhcmFtVHlwZS5vYmplY3QnLCBkZWZhdWx0IDogJ3t9Jywgbm90aWNlIDogJ3BhY2thZ2UubGlzdC5wcm9wZXJ0eS5zdHlsZU9iaicgfSxcbiAgeyB0aXRsZSA6ICdzbG90T2JqJywgdHlwZSA6ICdwYWNrYWdlLnBhcmFtVHlwZS5vYmplY3QnLCBkZWZhdWx0IDogJ3t9Jywgbm90aWNlIDogJ3BhY2thZ2UubGlzdC5wcm9wZXJ0eS5zbG90T2JqJyB9LFxuICB7IHRpdGxlIDogJ29uRW50cnlDbGljaycsIHR5cGUgOiAncGFja2FnZS5wYXJhbVR5cGUuZnVuY3Rpb24nLCBkZWZhdWx0IDogJ3VuZGVmaW5lZCcsIG5vdGljZSA6ICdwYWNrYWdlLmxpc3QucHJvcGVydHkub25FbnRyeUNsaWNrJyB9LFxuICB7IHRpdGxlIDogJ29uVG9nZ2xlJywgdHlwZSA6ICdwYWNrYWdlLnBhcmFtVHlwZS5mdW5jdGlvbicsIGRlZmF1bHQgOiAndW5kZWZpbmVkJywgbm90aWNlIDogJ3BhY2thZ2UubGlzdC5wcm9wZXJ0eS5vblRvZ2dsZScgfSxcbiAgeyB0aXRsZSA6ICdyZWYnLCB0eXBlIDogJ3VzZVJlZicsIGRlZmF1bHQgOiAndW5kZWZpbmVkJywgbm90aWNlIDogJ3BhY2thZ2UubGlzdC5wcm9wZXJ0eS5yZWYnIH1cbl07XG5jb25zdCB0YWJsZUJvZHlBcnJfZW50cnkgPSBbXG4gIHsgdGl0bGUgOiAnaWQnLCB0eXBlIDogJ3BhY2thZ2UucGFyYW1UeXBlLnN0cmluZycsIG5vdGljZSA6ICdwYWNrYWdlLmxpc3QuZW50cnlPYmouaWQnIH0sXG4gIHsgdGl0bGUgOiAndGl0bGUnLCB0eXBlIDogJ3BhY2thZ2UucGFyYW1UeXBlLnN0cmluZ3x8cGFja2FnZS5wYXJhbVR5cGUubm9kZScsIG5vdGljZSA6ICdwYWNrYWdlLmxpc3QuZW50cnlPYmoudGl0bGUnIH0sXG4gIHsgdGl0bGUgOiAnZGVmYXVsdENvbGxhcHNlZCcsIHR5cGUgOiAncGFja2FnZS5wYXJhbVR5cGUuc3RyaW5nJywgbm90aWNlIDogJ3BhY2thZ2UubGlzdC5lbnRyeU9iai5kZWZhdWx0Q29sbGFwc2VkJyB9LFxuICB7IHRpdGxlIDogJ2NoaWxkcmVuJywgdHlwZSA6ICdwYWNrYWdlLnBhcmFtVHlwZS5hcnJheScsIG5vdGljZSA6ICdwYWNrYWdlLmxpc3QuZW50cnlPYmouY2hpbGRyZW4nIH1cbl07XG5jb25zdCB0YWJsZUJvZHlBcnJfc2xvdCA9IFtcbiAgeyB0aXRsZSAgOiAnWyBpZCBvZiBlbnRyeU9iaiBdJywgdHlwZSAgIDogJ3BhY2thZ2UucGFyYW1UeXBlLnN0cmluZ3x8cGFja2FnZS5wYXJhbVR5cGUubm9kZXx8cGFja2FnZS5wYXJhbVR5cGUuZnVuY3Rpb24nLCBub3RpY2UgOiAncGFja2FnZS5saXN0LnNsb3RPYmouZW50cnlPYmonXG4gIH1cbl07XG5cbmNvbnN0IHRhYmxlU2xvdE9iaiA9IHtcbiAgJ3RkLXR5cGUnIDogKGRhdGEsIGNvbHVtbikgPT4ge1xuICAgIGxldCBzZXAgPSBkYXRhW2NvbHVtbi5pZF0uc3BsaXQoJ3x8Jyk7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChzZXAubGVuZ3RoID4gMClcbiAgICB7XG4gICAgICByZXN1bHQgPSBzZXAubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBsYW5nLnRyYW5zbGF0ZShpdGVtKTtcbiAgICAgIH0pLmpvaW4oJyB8fCAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gKGRhdGFbY29sdW1uLmlkXSA9PT0gJ3VzZVJlZicpPyAndXNlUmVmJyA6IGxhbmcudHJhbnNsYXRlKGRhdGFbY29sdW1uLmlkXSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gICd0ZC1ub3RpY2UnIDogKGRhdGEsIGNvbHVtbikgPT4ge1xuICAgIHJldHVybiBsYW5nLnRyYW5zbGF0ZShkYXRhW2NvbHVtbi5pZF0pO1xuICB9XG59O1xuXG5jb25zdCBCYXNpYyA9IGVuaGFuY2UoKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYWdlIGNsYXNzTmFtZT1cImJ0Yi1wa2ctbGlzdC1iYXNpY1wiPlxuICAgICAgPFBhZ2VIZWFkIHRpdGxlPXtsYW5nLnRyYW5zbGF0ZSgncGFja2FnZS5saXN0Lm5hbWUnKX0gY2xpY2tCdG49e29wZW5MaW5rfSBsaW5rTGlzdD17UGFnZUluZm8ubGlua0xpc3R9Lz5cbiAgICAgIDxTZWN0aW9uIGhlYWQ9eyhcbiAgICAgICAgPD5cbiAgICAgICAgICB7YCR7bGFuZy50cmFuc2xhdGUoJ3BhY2thZ2UudmVyc2lvbl9jb2xvbicpfSR7UGFnZUluZm8udmVyc2lvbn1gfTxici8+XG4gICAgICAgICAge2Ake2xhbmcudHJhbnNsYXRlKCdwYWNrYWdlLnJlbGVhc2VfY29sb24nKX0ke1BhZ2VJbmZvLnVwZGF0ZWR9YH1cbiAgICAgICAgPC8+XG4gICAgICApfT5cbiAgICAgICAgPHA+XG4gICAgICAgICAge1BhZ2VJbmZvLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3A+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbiBoZWFkPXtsYW5nLnRyYW5zbGF0ZSgncGFja2FnZS5zZWN0aW9uLmluc3RhbGxhdGlvbicpfT5cbiAgICAgICAgPHByZSBjbGFzc05hbWU9XCJwYWdlX3ByZVwiPlxuICAgICAgICAgIHtwcmVJbnN0YWxsfVxuICAgICAgICA8L3ByZT5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uIGhlYWQ9e2xhbmcudHJhbnNsYXRlKCdwYWNrYWdlLnNlY3Rpb24ucmVuZGVyJyl9PlxuICAgICAgICA8cHJlIGNsYXNzTmFtZT1cInBhZ2VfcHJlXCI+XG4gICAgICAgICAge3ByZVJlbmRlcn1cbiAgICAgICAgPC9wcmU+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbiBoZWFkPXtsYW5nLnRyYW5zbGF0ZSgncGFja2FnZS5zZWN0aW9uLnBhcmFtZXRlcnMnKX0+XG4gICAgICAgIDxCVEJUYWJsZSBjbGFzc05hbWU9XCJwYWdlX3RhYmxlXCIgbW9kZT1cImxpc3RcIiBoZWFkRGF0YT17dGFibGVIZWFkQXJyX3Byb3BlcnR5fSBib2R5RGF0YT17dGFibGVCb2R5QXJyX2Jhc2ljfSBzbG90T2JqPXt0YWJsZVNsb3RPYmp9Lz5cbiAgICAgICAgPEJsb2NrIHRpdGxlPVwiZW50cnlPYmpcIj5cbiAgICAgICAgICA8cD57bGFuZy50cmFuc2xhdGUoJ3BhY2thZ2UubGlzdC5wYXJhbWV0ZXJzLmVudHJ5T2JqJyl9PC9wPlxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwicGFnZV9wcmVcIj5cbiAgICAgICAgICAgIHtwcmVFbnRyeU9ian1cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICA8QlRCVGFibGUgY2xhc3NOYW1lPVwicGFnZV90YWJsZVwiIG1vZGU9XCJsaXN0XCIgaGVhZERhdGE9e3RhYmxlSGVhZEFycl9lbnRyeX0gYm9keURhdGE9e3RhYmxlQm9keUFycl9lbnRyeX0gc2xvdE9iaj17dGFibGVTbG90T2JqfS8+XG4gICAgICAgIDwvQmxvY2s+XG4gICAgICAgIDxCbG9jayB0aXRsZT1cInN0eWxlT2JqXCI+XG4gICAgICAgICAgPHA+e2xhbmcudHJhbnNsYXRlKCdwYWNrYWdlLmxpc3QucGFyYW1ldGVycy5zdHlsZU9iaicpfTwvcD5cbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cInBhZ2VfcHJlXCI+XG4gICAgICAgICAgICB7cHJlU3R5bGVPYmp9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvQmxvY2s+XG4gICAgICAgIDxCbG9jayB0aXRsZT1cInNsb3RPYmpcIj5cbiAgICAgICAgICA8cD57bGFuZy50cmFuc2xhdGUoJ3BhY2thZ2UubGlzdC5wYXJhbWV0ZXJzLnNsb3RPYmonKX08L3A+XG4gICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJwYWdlX3ByZVwiPlxuICAgICAgICAgICAge3ByZVNsb3RPYmp9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgPEJUQlRhYmxlIGNsYXNzTmFtZT1cInBhZ2VfdGFibGVcIiBtb2RlPVwibGlzdFwiIGhlYWREYXRhPXt0YWJsZUhlYWRBcnJfZW50cnl9IGJvZHlEYXRhPXt0YWJsZUJvZHlBcnJfc2xvdH0gc2xvdE9iaj17dGFibGVTbG90T2JqfS8+XG4gICAgICAgIDwvQmxvY2s+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbiBoZWFkPXtsYW5nLnRyYW5zbGF0ZSgncGFja2FnZS5zZWN0aW9uLm5vZGVUcmVlJyl9PlxuICAgICAgICA8QlRCTGlzdCBjbGFzc05hbWU9XCJwYWdlX25vZGVfdHJlZVwiIGRhdGFMaXN0PXtub2RlVHJlZX0vPlxuICAgICAgICA8cD57bGFuZy50cmFuc2xhdGUoJ3BhY2thZ2UubGlzdC5ub2RlVHJlZS5ub3RpY2UnKX08L3A+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9QYWdlPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljOyIsImltcG9ydCBwYWNrYWdlT2JqIGZyb20gJ0BzcmMvYXNzZXRzL2RlZmluaXRpb25zL3BhY2thZ2VPYmonO1xuXG5jb25zdCBwYWNrYWdlSW5mbyA9IHtcbiAgJ3ZlcnNpb24nICAgICA6IHBhY2thZ2VPYmoubGlzdC52ZXJzaW9uLFxuICAndXBkYXRlZCcgICAgIDogcGFja2FnZU9iai5saXN0LnVwZGF0ZWQsXG4gICdkZXNjcmlwdGlvbicgOiBwYWNrYWdlT2JqLmxpc3QuZGVzY3JpcHRpb24sXG4gICdsaW5rTGlzdCcgICAgOiBbXG4gICAgeyBcbiAgICAgICdpZCcgIDogJ2dpdGh1YicsIFxuICAgICAgJ2ZhJyAgOiBbJ2ZhYicsICdnaXRodWInXSwgXG4gICAgICAndXJsJyA6IHBhY2thZ2VPYmoubGlzdC5saW5rLmdpdGh1YlxuICAgIH0sIHsgXG4gICAgICAnaWQnICA6ICducG0nLCBcbiAgICAgICdmYScgIDogWydmYWInLCAnbnBtJ10sIFxuICAgICAgJ3VybCcgOiBwYWNrYWdlT2JqLmxpc3QubGluay5ucG1cbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhY2thZ2VJbmZvOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEJsb2NrID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2R1bGUtYmxvY2tcIj5cbiAgICAgIHtcbiAgICAgICAgKHByb3BzLnRpdGxlKT9cbiAgICAgICAgICAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrX3RpdGxlXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBbXVxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja19ib2R5XCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvY2s7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiBhcyBGQUkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBEaXZpZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kdWxlLWRpdmlkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlcl9saW5lXCI+PC9kaXY+XG4gICAgICA8RkFJIGNsYXNzTmFtZT1cImRpdmlkZXJfaWNvblwiIGljb249e1snZmFzJywgJ3Rvb2xzJ119IGZpeGVkV2lkdGggLz5cbiAgICAgIDxGQUkgY2xhc3NOYW1lPVwiZGl2aWRlcl9pY29uXCIgaWNvbj17WydmYXMnLCAndG9vbHMnXX0gZml4ZWRXaWR0aCAvPlxuICAgICAgPEZBSSBjbGFzc05hbWU9XCJkaXZpZGVyX2ljb25cIiBpY29uPXtbJ2ZhcycsICd0b29scyddfSBmaXhlZFdpZHRoIC8+XG4gICAgICA8RkFJIGNsYXNzTmFtZT1cImRpdmlkZXJfaWNvblwiIGljb249e1snZmFzJywgJ3Rvb2xzJ119IGZpeGVkV2lkdGggLz5cbiAgICAgIDxGQUkgY2xhc3NOYW1lPVwiZGl2aWRlcl9pY29uXCIgaWNvbj17WydmYXMnLCAndG9vbHMnXX0gZml4ZWRXaWR0aCAvPlxuICAgICAgPEZBSSBjbGFzc05hbWU9XCJkaXZpZGVyX2ljb25cIiBpY29uPXtbJ2ZhcycsICd0b29scyddfSBmaXhlZFdpZHRoIC8+XG4gICAgICA8RkFJIGNsYXNzTmFtZT1cImRpdmlkZXJfaWNvblwiIGljb249e1snZmFzJywgJ3Rvb2xzJ119IGZpeGVkV2lkdGggLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlcl9saW5lXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXZpZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBhZ2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Wydtb2R1bGUtcGFnZScsIHByb3BzLmNsYXNzTmFtZV0uam9pbignICcpfT5cbiAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gYXMgRkFJIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuY29uc3QgUGFnZUhlYWQgPSAocHJvcHMpID0+IHtcbiAgZnVuY3Rpb24gX2NsaWNrQnRuKGV2ZW50KSB7XG4gICAgaWYgKHByb3BzLmNsaWNrQnRuKSB7XG4gICAgICBwcm9wcy5jbGlja0J0bihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZHVsZS1wYWdlLWhlYWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZF90aXRsZVwiPlxuICAgICAgICB7cHJvcHMudGl0bGUgfHwgJyd9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgKHByb3BzLmxpbmtMaXN0IHx8IFtdKS5tYXAoKGJ0bikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnaGVhZF9idG4nLCBgYnRuLSR7YnRuLmlkfWApfSBrZXk9e2J0bi5pZH0gb25DbGljaz17KCkgPT4ge19jbGlja0J0bihidG4pO319PlxuICAgICAgICAgICAgICA8RkFJIGljb249e2J0bi5mYX0gZml4ZWRXaWR0aCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VIZWFkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Wydtb2R1bGUtc2VjdGlvbicsIHByb3BzLmNsYXNzTmFtZV0uam9pbignICcpfT5cbiAgICAgIHtcbiAgICAgICAgKHByb3BzLmhlYWQpPyBcbiAgICAgICAgICAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25faGVhZFwiPlxuICAgICAgICAgICAgICB7cHJvcHMuaGVhZH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBbXVxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX2JvZHlcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uOyIsImltcG9ydCBQYWdlIGZyb20gJy4vUGFnZS5qc3gnO1xuaW1wb3J0IFBhZ2VIZWFkIGZyb20gJy4vUGFnZUhlYWQuanN4JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbi5qc3gnO1xuaW1wb3J0IEJsb2NrIGZyb20gJy4vQmxvY2suanN4JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlci5qc3gnO1xuXG5leHBvcnQge1xuICBQYWdlLFxuICBQYWdlSGVhZCxcbiAgU2VjdGlvbixcbiAgRGl2aWRlcixcbiAgQmxvY2tcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBLR0xpc3RCYXNpYyBmcm9tICdAc3JjL2NvbXBvbmVudHMvcGFja2FnZXMvbGlzdC9CYXNpYy5qc3gnO1xuXG5jb25zdCBCYXNpY0NvbnRhaWVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQS0dMaXN0QmFzaWMvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNDb250YWllcjsiLCJjb25zdCBvcGVuTGluayA9IChsaW5rKSA9PiB7XG4gIHdpbmRvdy5vcGVuKGxpbmsudXJsKTtcbn07XG5cbmV4cG9ydCB7XG4gIG9wZW5MaW5rXG59OyJdLCJzb3VyY2VSb290IjoiIn0=