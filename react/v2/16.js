(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ 35:
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
var classnames = __webpack_require__(37);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(29);

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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openLink; });
var openLink = function openLink(link) {
  window.open(link.url);
};



/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 5 modules
var pageLayout = __webpack_require__(35);

// EXTERNAL MODULE: ./src/utils/functions.js
var functions = __webpack_require__(36);

// CONCATENATED MODULE: ./src/components/applications/Validator.jsx



var packageInfo = {
  'version': '1.0.0',
  'updated': 'Jan. 20, 2020',
  'description': 'Most form UI packages have their own validator to use for convenience. But sometimes we don\'t use only one UI packages to develop every single project. So we try to create the validator generally to adapt to every kind of form UI packages to allow us using just one type of validator coding patteren to develop with every UI packages.',
  'btnList': [{
    'id': 'github',
    'fa': ['fab', 'github'],
    'url': 'https://github.com/BlackToolBoxLaboratory/prototype-validator'
  }, {
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': 'https://www.npmjs.com/package/@blacktoolbox/prototype-validator'
  }]
};

var Validator_Validator = function Validator() {
  return /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* Page */], {
    className: "btb-app-validator"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* PageHead */], {
    title: 'Validator Application',
    clickBtn: functions["a" /* openLink */],
    btnList: packageInfo.btnList
  }));
};

/* harmony default export */ var applications_Validator = (Validator_Validator);
// CONCATENATED MODULE: ./src/routes/applications/ValidatorContainer.jsx



var ValidatorContainer_ValidatorContaier = function ValidatorContaier() {
  return /*#__PURE__*/react_default.a.createElement(applications_Validator, null);
};

/* harmony default export */ var ValidatorContainer = __webpack_exports__["default"] = (ValidatorContainer_ValidatorContaier);

/***/ })

}]);