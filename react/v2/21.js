(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ 47:
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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openLink; });
var openLink = function openLink(link) {
  window.open(link.url);
};



/***/ }),

/***/ 94:
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
var Recompose_esm = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(36);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 5 modules
var pageLayout = __webpack_require__(47);

// EXTERNAL MODULE: ./src/utils/functions.js
var functions = __webpack_require__(48);

// EXTERNAL MODULE: ./src/plugins/btblab-prototype-languages.js + 2 modules
var btblab_prototype_languages = __webpack_require__(51);

// CONCATENATED MODULE: ./src/components/applications/Languages.jsx







var enhance = Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(function (state) {
  return {
    'languageSetting': state.language.languageSetting
  };
}));
var packageInfo = {
  'version': '1.1.1',
  'updated': '2020-06-20',
  'description': 'application.languages.description',
  'linkList': [{
    'id': 'github',
    'fa': ['fab', 'github'],
    'url': 'https://github.com/BlackToolBoxLaboratory/prototype-languages'
  }, {
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': 'https://www.npmjs.com/package/@blacktoolbox/prototype-languages'
  }]
};
var preInstall = "$ npm install --save @blacktoolbox/prototype-languages";
var preInitializaer = "import { initializer } from '@blacktoolbox/prototype-languages';\n\nimport en from '@src/assets/languages/en.js';\nimport zh from '@src/assets/languages/zh.js';\n\ninitializer([\n        { index : 'en', label : 'Eglish', dictionary : en },\n        { index : 'zh', label : '\u7E41\u9AD4\u4E2D\u6587', dictionary : zh }\n]);";
var preImplement = "import Language from '@blacktoolbox/prototype-languages';\n\nconst lang = new Language()";
var Languages = enhance(function () {
  return /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* Page */], {
    className: "btb-app-languages"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* PageHead */], {
    title: btblab_prototype_languages["a" /* lang */].translate('application.languages.name'),
    clickBtn: functions["a" /* openLink */],
    linkList: packageInfo.linkList
  }), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, "".concat(btblab_prototype_languages["a" /* lang */].translate('package.version_colon')).concat(packageInfo.version), /*#__PURE__*/react_default.a.createElement("br", null), "".concat(btblab_prototype_languages["a" /* lang */].translate('package.release_colon')).concat(packageInfo.updated))
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate(packageInfo.description))), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('application.section.installation')
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('application.languages.installation.description'), /*#__PURE__*/react_default.a.createElement("a", {
    className: "inline-link",
    href: "https://blacktoolboxlaboratory.github.io/javascript/#/packages/languages",
    target: "_blank"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    icon: ['fas', 'external-link-alt'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement("span", null, btblab_prototype_languages["a" /* lang */].translate('application.languages.installation.linkName')))), /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preInstall)), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('application.section.initializer')
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('application.languages.initializer')), /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preInitializaer)), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('application.section.impletement')
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('application.languages.impletement')), /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preImplement)), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: btblab_prototype_languages["a" /* lang */].translate('application.section.trigger')
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('application.languages.trigger.description')), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "Distpatch"
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('application.languages.trigger.dispatch'))), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "Key"
  }, /*#__PURE__*/react_default.a.createElement("p", null, btblab_prototype_languages["a" /* lang */].translate('application.languages.trigger.key')))));
});
/* harmony default export */ var applications_Languages = (Languages);
// CONCATENATED MODULE: ./src/routes/applications/LanguagesContainer.jsx



var LanguagesContainer_LanguagesContaier = function LanguagesContaier() {
  return /*#__PURE__*/react_default.a.createElement(applications_Languages, null);
};

/* harmony default export */ var LanguagesContainer = __webpack_exports__["default"] = (LanguagesContainer_LanguagesContaier);

/***/ })

}]);