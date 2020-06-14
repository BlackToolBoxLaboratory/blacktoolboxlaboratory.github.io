(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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
  }, props.title || ''), (props.btnList || []).map(function (btn) {
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

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

var packageObj = {
  list: {
    name: 'List',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_LIST_BASIC,
    description: 'This module of list creator made with React can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.',
    version: '2.1.6',
    updated: 'Jun, 14, 2020'
  },
  table: {
    name: 'Table',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_TABLE_BASIC,
    description: 'This module of table creator made with React can do the help to make a table component to our page. It has modes in list and info which are different ways to show data.',
    version: '1.0.1',
    updated: 'Jun, 13, 2020'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (packageObj);

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

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(29);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 5 modules
var pageLayout = __webpack_require__(35);

// CONCATENATED MODULE: ./src/components/about/package.jsx



var package_Package = function Package(props) {
  function _redirectRoute() {
    props.redirectRoute(props.info.routename);
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: ['btb-about-package grid-row', props.className].join(' ')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col-md-3"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "package_title"
  }, props.info.name), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "package_link",
    icon: ['fas', 'link'],
    fixedWidth: true,
    onClick: _redirectRoute
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col-md"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "package_description"
  }, props.info.description), /*#__PURE__*/react_default.a.createElement("div", {
    className: "package_version"
  }, "Version ", props.info.version), /*#__PURE__*/react_default.a.createElement("div", {
    className: "package_updated"
  }, "Updated: ", props.info.updated)));
};

/* harmony default export */ var about_package = (package_Package);
// EXTERNAL MODULE: ./src/assets/definitions/packageObj.js
var packageObj = __webpack_require__(38);

// CONCATENATED MODULE: ./src/assets/images/BTB_React.png
/* harmony default export */ var BTB_React = (__webpack_require__.p + "files/BTB_React.png");
// CONCATENATED MODULE: ./src/components/about/About.jsx








var About_About = function About(props) {
  function _redirectRoute(routename) {
    props.history.push(routename);
  }

  return /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* Page */], {
    className: "btb-about"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    className: "about_title grid-row direction-column align-items-center"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: "title_image",
    src: BTB_React,
    alt: "BTB_React"
  }), /*#__PURE__*/react_default.a.createElement("h1", {
    className: "title_main hidden-down-md"
  }, "Black Tool Box Laboratory"), /*#__PURE__*/react_default.a.createElement("h1", {
    className: "title_main hidden-up-md"
  }, "BTB Lab."), /*#__PURE__*/react_default.a.createElement("p", {
    className: "title_sub"
  }, "With React")), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], null, /*#__PURE__*/react_default.a.createElement("span", null, "React is the first framework of javascript when I join to the Frontend develipment club. Before that jQuery of curse is my first using when I am a software engineer. Here I aim to develop packages made with React. They are designed with basic logic for high degrees of freedom of customization and low dependency. While using, if you find some questions, bugs or issues. Or having some great ideas. Please feel free to let me know.")), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    className: "grid-row justify-content-center"
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: "mailto://vannoel0628@gmail.com",
    target: "_blank"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    icon: ['far', 'envelope'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement("span", null, "vannoel0628@gmail.com"))), /*#__PURE__*/react_default.a.createElement(pageLayout["b" /* Divider */], null), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    className: "grid-row justify-content-center"
  }, /*#__PURE__*/react_default.a.createElement("span", null, "If you like all the works in BTB Lab. Please "), /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://www.paypal.me/vannoel0628",
    target: "_blank"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    icon: ['fab', 'paypal'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement("span", null, "buy me a coffee")), /*#__PURE__*/react_default.a.createElement("span", null, ". ")), /*#__PURE__*/react_default.a.createElement(pageLayout["b" /* Divider */], null), Object.keys(packageObj["a" /* default */]).map(function (entry) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      key: entry
    }, entry !== 'list' ? /*#__PURE__*/react_default.a.createElement(pageLayout["b" /* Divider */], null) : [], /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
      className: "about_package"
    }, /*#__PURE__*/react_default.a.createElement(about_package, {
      info: packageObj["a" /* default */][entry],
      redirectRoute: _redirectRoute
    })));
  }));
};

/* harmony default export */ var about_About = (Object(react_router["o" /* withRouter */])(About_About));
// CONCATENATED MODULE: ./src/routes/AboutContainer.jsx



var AboutContainer_AboutContainer = function AboutContainer() {
  return /*#__PURE__*/react_default.a.createElement(about_About, null);
};

/* harmony default export */ var routes_AboutContainer = __webpack_exports__["default"] = (AboutContainer_AboutContainer);

/***/ })

}]);