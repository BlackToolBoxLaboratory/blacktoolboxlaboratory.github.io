(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ pageLayout_Page; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ pageLayout_PageHead; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ pageLayout_Section; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ pageLayout_Divider; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ pageLayout_Block; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./src/modules/pageLayout/Page.jsx


var Page_Page = function Page(props) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: ['module-page', props.className].join(' ')
  }, props.children);
};

/* harmony default export */ var pageLayout_Page = (Page_Page);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(49);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(36);

// CONCATENATED MODULE: ./src/modules/pageLayout/PageHead.jsx




var PageHead_PageHead = function PageHead(props) {
  function _clickBtn(event) {
    if (props.clickBtn) {
      props.clickBtn(event);
    }
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-page-head"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_title"
  }, props.title || ''), (props.linkList || []).map(function (btn) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: classnames_default()('head_btn', "btn-".concat(btn.id)),
      key: btn.id,
      onClick: function onClick() {
        _clickBtn(btn);
      }
    }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
      icon: btn.fa,
      fixedWidth: true
    }));
  }));
};

/* harmony default export */ var pageLayout_PageHead = (PageHead_PageHead);
// CONCATENATED MODULE: ./src/modules/pageLayout/Section.jsx


var Section_Section = function Section(props) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: ['module-section', props.className].join(' ')
  }, props.head ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "section_head"
  }, props.head) : [], /*#__PURE__*/react_default.a.createElement("div", {
    className: "section_body"
  }, props.children));
};

/* harmony default export */ var pageLayout_Section = (Section_Section);
// CONCATENATED MODULE: ./src/modules/pageLayout/Block.jsx


var Block_Block = function Block(props) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-block"
  }, props.title ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "block_title"
  }, props.title) : [], /*#__PURE__*/react_default.a.createElement("div", {
    className: "block_body"
  }, props.children));
};

/* harmony default export */ var pageLayout_Block = (Block_Block);
// CONCATENATED MODULE: ./src/modules/pageLayout/Divider.jsx



var Divider_Divider = function Divider() {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-divider"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "divider_line"
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "divider_line"
  }));
};

/* harmony default export */ var pageLayout_Divider = (Divider_Divider);
// CONCATENATED MODULE: ./src/modules/pageLayout/index.js







/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openLink; });
var openLink = function openLink(link) {
  window.open(link.url);
};



/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);

var packageObj = {
  list: {
    name: 'package.list.name',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_LIST_BASIC,
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
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_TABLE_BASIC,
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
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_POPOVER_BASIC,
    description: 'package.popover.description.basic',
    version: '1.2.0',
    updated: '2020-06-30',
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/react-popover',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/react-popover'
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (packageObj);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=function(t,e){var a;return e.forEach((function(e){a=Object.assign({},a,o(t,e))})),a},o=function(t,e){var a={};return"object"===c(t)&&Object.keys(t).find((function(c){if(c===e)return a=Object.assign({},t[c]),!0})),a},l=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),r=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),s=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead",{className:"list_head",style:n(c.styleObj,["list_head"])},c.headData.length?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:"head_tr",style:n(c.styleObj,["head_tr"])},c.headData.map((function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_th","th-".concat(e.id)),key:e.id,style:n(c.styleObj,["tr_th","th-".concat(e.id)])},c.slotObj["th-".concat(e.id)]?"function"==typeof c.slotObj["th-".concat(e.id)]?c.slotObj["th-".concat(e.id)](e):c.slotObj["th-".concat(e.id)]:e.name)}))):[])},d=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",{className:"list_body",style:n(c.styleObj,["list_body"])},c.bodyData.map((function(e,o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("body_tr","tr-".concat(o)),style:n(c.styleObj,["body_tr","tr-".concat(o)]),key:o},c.headData.map((function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_td","td-".concat(o.id)),style:n(c.styleObj,["tr_td","td-".concat(o.id)]),key:o.id},c.slotObj["td-".concat(o.id)]?"function"==typeof c.slotObj["td-".concat(o.id)]?c.slotObj["td-".concat(o.id)](e,o):c.slotObj["td-".concat(o.id)]:e[o.id])})))})))},i=function(){var a=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:"table_list",style:n(a.styleObj,["table_list"])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(s,null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(d,null))},b=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,c.bodyData.map((function(e,o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("table_info","info-".concat(o)),style:n(c.styleObj,["table_info","info-".concat(o)]),key:"".concat(e.id,"_").concat(o)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",{className:"info_body",style:n(c.styleObj,["info_body"])},c.headData.map((function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("body_tr","tr-".concat(o.id)),style:n(c.styleObj,["body_tr","tr-".concat(o.id)]),key:o.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_th","th-".concat(o.id)),style:n(c.styleObj,["tr_th","th-".concat(o.id)])},c.slotObj["th-".concat(o.id)]?"function"==typeof c.slotObj["th-".concat(o.id)]?c.slotObj["th-".concat(o.id)](o):c.slotObj["th-".concat(o.id)]:o.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_td","td-".concat(o.id)),style:n(c.styleObj,["tr_td","td-".concat(o.id)])},c.slotObj["td-".concat(o.id)]?"function"==typeof c.slotObj["td-".concat(o.id)]?c.slotObj["td-".concat(o.id)](e,o):c.slotObj["td-".concat(o.id)]:e[o.id]))}))))})))},y=function(){var c=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:"table_compare",style:n(c.styleObj,["table_compare"])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",{className:"compare_body",style:n(c.styleObj,["compare_body"])},c.headData.map((function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("body_tr","tr-".concat(e.id)),style:n(c.styleObj,["body_tr","tr-".concat(e.id)]),key:e.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_th","th-".concat(e.id)),style:n(c.styleObj,["tr_th","th-".concat(e.id)])},c.slotObj["th-".concat(e.id)]?"function"==typeof c.slotObj["th-".concat(e.id)]?c.slotObj["th-".concat(e.id)](e):c.slotObj["th-".concat(e.id)]:e.name),c.bodyData.map((function(o,l){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_td","td-".concat(e.id),"td-".concat(l)),style:n(c.styleObj,["tr_td","td-".concat(e.id),"td-".concat(l)]),key:"".concat(o.id,"_").concat(l)},c.slotObj["td-".concat(e.id)]?"function"==typeof c.slotObj["td-".concat(e.id)]?c.slotObj["td-".concat(e.id)](o,e):c.slotObj["td-".concat(e.id)]:o[e.id])})))}))))},m=react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((function(e,c){var o,s,d={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(o=e.styleObj||{},s={},Object.keys(o).forEach((function(t){s[t]={},Object.keys(o[t]).forEach((function(e){var a=e.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}));s[t][a]=o[t][e]}))})),s),slotObj:e.slotObj||{}},m={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l.Provider,{value:d},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(r.Provider,{value:m},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:c,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("btb-react-table",e.className),style:n(d.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b,null);case"compare":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(y,null);case"list":default:return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(i,null)}}())))}));/* harmony default export */ __webpack_exports__["a"] = (m);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);

var packageInfo = {
  'version': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list.version,
  'updated': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list.updated,
  'description': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list.description,
  'linkList': [{
    'id': 'github',
    'fa': ['fab', 'github'],
    'url': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list.link.github
  }, {
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': _src_assets_definitions_packageObj__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list.link.npm
  }]
};
/* harmony default export */ __webpack_exports__["a"] = (packageInfo);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/recompose/dist/Recompose.esm.js + 1 modules
var Recompose_esm = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-list/esm/index.js
var esm = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-table/esm/index.js
var react_table_esm = __webpack_require__(52);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 5 modules
var pageLayout = __webpack_require__(46);

// EXTERNAL MODULE: ./src/utils/functions.js
var functions = __webpack_require__(47);

// EXTERNAL MODULE: ./src/components/packages/list/packageInfo.js
var packageInfo = __webpack_require__(55);

// EXTERNAL MODULE: ./src/plugins/btblab-prototype-languages.js + 2 modules
var btblab_prototype_languages = __webpack_require__(50);

// CONCATENATED MODULE: ./src/components/packages/list/Basic.jsx









var enhance = Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(function (state) {
  return {
    'languageSetting': state.language.languageSetting
  };
}));
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
        return btblab_prototype_languages["a" /* lang */].translate(item);
      }).join(' || ');
    } else {
      result = data[column.id] === 'useRef' ? 'useRef' : btblab_prototype_languages["a" /* lang */].translate(data[column.id]);
    }

    return result;
  },
  'td-notice': function tdNotice(data, column) {
    return btblab_prototype_languages["a" /* lang */].translate(data[column.id]);
  }
};
var Basic = enhance(function () {
  return /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* Page */], {
    className: "btb-pkg-list-basic"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* PageHead */], {
    title: btblab_prototype_languages["a" /* lang */].translate('package.list.name'),
    clickBtn: functions["a" /* openLink */],
    linkList: packageInfo["a" /* default */].linkList
  }), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, "".concat(btblab_prototype_languages["a" /* lang */].translate('package.version_colon')).concat(packageInfo["a" /* default */].version), /*#__PURE__*/react_default.a.createElement("br", null), "".concat(btblab_prototype_languages["a" /* lang */].translate('package.release_colon')).concat(packageInfo["a" /* default */].updated))
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate(packageInfo["a" /* default */].description))), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('package.section.installation')
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preInstall)), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('package.section.render')
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preRender)), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('package.section.parameters')
  }, /*#__PURE__*/react_default.a.createElement(react_table_esm["a" /* default */], {
    className: "page_table",
    mode: "list",
    headData: tableHeadArr_property,
    bodyData: tableBodyArr_basic,
    slotObj: tableSlotObj
  }), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "entryObj"
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('package.list.parameters.entryObj')), /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preEntryObj), /*#__PURE__*/react_default.a.createElement(react_table_esm["a" /* default */], {
    className: "page_table",
    mode: "list",
    headData: tableHeadArr_entry,
    bodyData: tableBodyArr_entry,
    slotObj: tableSlotObj
  })), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "styleObj"
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('package.list.parameters.styleObj')), /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preStyleObj)), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "slotObj"
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('package.list.parameters.slotObj')), /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preSlotObj), /*#__PURE__*/react_default.a.createElement(react_table_esm["a" /* default */], {
    className: "page_table",
    mode: "list",
    headData: tableHeadArr_entry,
    bodyData: tableBodyArr_slot,
    slotObj: tableSlotObj
  }))), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('package.section.nodeTree')
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    className: "page_node_tree",
    dataList: nodeTree
  }), /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('package.list.nodeTree.notice'))));
});
/* harmony default export */ var list_Basic = (Basic);
// CONCATENATED MODULE: ./src/routes/packages/list/BasicContainer.jsx



var BasicContainer_BasicContaier = function BasicContaier() {
  return /*#__PURE__*/react_default.a.createElement(list_Basic, null);
};

/* harmony default export */ var BasicContainer = __webpack_exports__["default"] = (BasicContainer_BasicContaier);

/***/ })

}]);