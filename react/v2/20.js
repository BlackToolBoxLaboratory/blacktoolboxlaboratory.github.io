(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/recompose/dist/Recompose.esm.js + 1 modules
var Recompose_esm = __webpack_require__(52);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 5 modules
var pageLayout = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(36);

// CONCATENATED MODULE: ./src/modules/loadingDiv/LoadingDiv.jsx



var LoadingDiv_LoadingDiv = function LoadingDiv() {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-loading"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "loading_spinner",
    icon: ['fas', 'spinner'],
    fixedWidth: true,
    spin: true,
    pulse: true
  }));
};

/* harmony default export */ var loadingDiv_LoadingDiv = (LoadingDiv_LoadingDiv);
// CONCATENATED MODULE: ./src/modules/loadingDiv/index.js


// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(70);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/plugins/axios.js

var instance_registry = axios_default.a.create({
  baseURL: "".concat("https://registry.npmjs.org/")
});
var instance_api = axios_default.a.create({
  baseURL: "".concat("https://api.npmjs.org/")
});

// CONCATENATED MODULE: ./src/apis/npmRegistry.js

/* harmony default export */ var npmRegistry = ({
  getPackageInfo: function getPackageInfo(Id) {
    return instance_registry.get("/".concat(Id));
  },
  getPackages: function getPackages(lang) {
    var paramText = '@blacktoolbox';

    switch (lang) {
      case 'js':
        paramText += '/prototype-';
        break;

      case 'react':
        paramText += '/react-';
        break;

      case 'vue':
        paramText += '/vue-';
        break;
    }

    return instance_registry.get('/-/v1/search', {
      params: {
        'text': paramText
      }
    });
  }
});
// EXTERNAL MODULE: ./src/utils/functions.js
var functions = __webpack_require__(48);

// EXTERNAL MODULE: ./src/plugins/btblab-prototype-languages.js + 2 modules
var btblab_prototype_languages = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/react-apexcharts/dist/react-apexcharts.min.js
var react_apexcharts_min = __webpack_require__(87);
var react_apexcharts_min_default = /*#__PURE__*/__webpack_require__.n(react_apexcharts_min);

// CONCATENATED MODULE: ./src/apis/npmAPI.js

/* harmony default export */ var npmAPI = ({
  getPackageDownloads: function getPackageDownloads(pkgName) {
    return instance_api.get("/downloads/range/last-year/".concat(pkgName));
  }
});
// CONCATENATED MODULE: ./utils/reviseISOString.js
var formatISOString = /((\d{4})-(\d{2})-(\d{2}))T((\d{2}):(\d{2}):(\d{2})).\d{3}Z/; // 0: total
// 1: Date(YYYY-MM-DD)
// 2: Full Year
// 3: Mounth
// 4: Day
// 5: Time(HH-MM-SS)
// 6: Hour
// 7: Minute
// 8: Second

var reviseISOString = function reviseISOString(isoString) {
  var localISOString = new Date(Date.parse(isoString) - new Date().getTimezoneOffset() * 60 * 1000).toISOString();
  var separateDateTime = formatISOString.exec(localISOString);
  var obj = {};

  if (separateDateTime) {
    obj = {
      'whole': separateDateTime[0],
      'date': separateDateTime[1],
      'year': separateDateTime[2],
      'month': separateDateTime[3],
      'day': separateDateTime[4],
      'time': separateDateTime[5],
      'hour': separateDateTime[6],
      'minute': separateDateTime[7],
      'second': separateDateTime[8]
    };
  }

  return obj;
};

/* harmony default export */ var utils_reviseISOString = (reviseISOString);
// CONCATENATED MODULE: ./src/components/overview/chartOptions.js
var chartOptions = {
  colors: ['#00d8ff'],
  chart: {
    animations: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    x: {
      show: false
    }
  },
  grid: {
    show: false
  },
  xaxis: {
    labels: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    forceNiceScale: true,
    labels: {
      show: false
    },
    max: function max(_max) {
      return _max + 10;
    },
    min: -10
  }
};
/* harmony default export */ var overview_chartOptions = (chartOptions);
// CONCATENATED MODULE: ./src/components/overview/PackageWidget.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var WEEK = 7;

var PackageWidget_PackageWidget = function PackageWidget(props) {
  var state_Series = useSeriesState();
  var series = [{
    name: btblab_prototype_languages["a" /* lang */].translate('chart.times'),
    data: state_Series.series
  }];
  Object(react["useEffect"])(function () {
    _getDownloads(props.data.name);
  }, []);

  function _getDownloads(pkgName) {
    npmAPI.getPackageDownloads(pkgName).then(function (_ref) {
      var data = _ref.data;
      state_Series.update(data.downloads);
    });
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: ['btb-overview-package-widget', props.className].join(' ')
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "widget_title"
  }, props.data.name), /*#__PURE__*/react_default.a.createElement("p", {
    className: "widget_description"
  }, props.data.description), /*#__PURE__*/react_default.a.createElement("p", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "widget_entry"
  }, btblab_prototype_languages["a" /* lang */].translate('overview.version_colon')), /*#__PURE__*/react_default.a.createElement("span", {
    className: "widget_value"
  }, props.data.version)), /*#__PURE__*/react_default.a.createElement("p", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "widget_entry"
  }, btblab_prototype_languages["a" /* lang */].translate('overview.release_colon')), /*#__PURE__*/react_default.a.createElement("span", {
    className: "widget_value"
  }, utils_reviseISOString(props.data.date).date)), series[0].data.length ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "widget_chart"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "widget_row"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "widget_entry"
  }, btblab_prototype_languages["a" /* lang */].translate('overview.downloads_colon'))), /*#__PURE__*/react_default.a.createElement(react_apexcharts_min_default.a, {
    options: overview_chartOptions,
    series: series,
    type: "area",
    height: "100%"
  })) : /*#__PURE__*/react_default.a.createElement("div", {
    className: "widget_chart grid-row justify-content-center align-items-center"
  }, /*#__PURE__*/react_default.a.createElement(loadingDiv_LoadingDiv, null)));
};

function useSeriesState() {
  var _useState = Object(react["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      series = _useState2[0],
      setState = _useState2[1];

  function _extractToWeekly(data) {
    data.reverse();
    var weekData = Array(Math.ceil(data.length / WEEK)).fill(0).map(function (entry, index) {
      var count = 0;

      for (var i = index * WEEK; i < Math.min((index + 1) * WEEK, data.length); i++) {
        count += data[i].downloads;
      }

      return count;
    });
    return weekData.reverse();
  }

  return {
    series: series,
    update: function update(data) {
      setState(_extractToWeekly(data || []));
    }
  };
}

/* harmony default export */ var overview_PackageWidget = (PackageWidget_PackageWidget);
// CONCATENATED MODULE: ./src/components/overview/pageInfo.js
var pageInfo = {
  'description': 'overview.description',
  'linkList': [{
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': 'https://www.npmjs.com/search?q=%40blacktoolbox%2Freact'
  }]
};
/* harmony default export */ var overview_pageInfo = (pageInfo);
// CONCATENATED MODULE: ./src/components/overview/Overview.jsx
function Overview_slicedToArray(arr, i) { return Overview_arrayWithHoles(arr) || Overview_iterableToArrayLimit(arr, i) || Overview_unsupportedIterableToArray(arr, i) || Overview_nonIterableRest(); }

function Overview_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Overview_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Overview_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Overview_arrayLikeToArray(o, minLen); }

function Overview_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Overview_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Overview_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var enhance = Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(function (state) {
  return {
    'languageSetting': state.language.languageSetting
  };
}), react_router["o" /* withRouter */]);
var Overview = enhance(function () {
  var state_Packages = {
    'js': usePackagesState(),
    'react': usePackagesState(),
    'vue': usePackagesState()
  };
  Object(react["useEffect"])(function () {
    _getPackages('js');

    _getPackages('react');

    _getPackages('vue');
  }, []);

  function _getPackages(type) {
    npmRegistry.getPackages(type).then(function (_ref) {
      var data = _ref.data;
      state_Packages[type].update(data.objects);
    });
  }

  function _renderPackages(type) {
    if (state_Packages[type].packages.length) {
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "grid-row"
      }, state_Packages[type].packages.map(function (entry) {
        return /*#__PURE__*/react_default.a.createElement("div", {
          className: "grid-col-lg-6",
          key: entry.package.name
        }, /*#__PURE__*/react_default.a.createElement(overview_PackageWidget, {
          data: entry.package
        }));
      }));
    } else {
      return /*#__PURE__*/react_default.a.createElement(loadingDiv_LoadingDiv, null);
    }
  }

  return /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* Page */], {
    className: "btb-overview"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* PageHead */], {
    title: btblab_prototype_languages["a" /* lang */].translate('overview.title'),
    clickBtn: functions["a" /* openLink */],
    linkList: overview_pageInfo.linkList
  }), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: 'JAVASCRIPT'
  }, _renderPackages('js')), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: 'REACT'
  }, _renderPackages('react')), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: 'VUE'
  }, _renderPackages('vue')));
});

function usePackagesState() {
  var _useState = Object(react["useState"])([]),
      _useState2 = Overview_slicedToArray(_useState, 2),
      packages = _useState2[0],
      setState = _useState2[1];

  return {
    packages: packages,
    update: function update(data) {
      setState(data || []);
    }
  };
}

/* harmony default export */ var overview_Overview = (Overview);
// CONCATENATED MODULE: ./src/routes/OverviewContainer.jsx



var OverviewContainer_OverviewContainer = function OverviewContainer() {
  return /*#__PURE__*/react_default.a.createElement(overview_Overview, null);
};

/* harmony default export */ var routes_OverviewContainer = __webpack_exports__["default"] = (OverviewContainer_OverviewContainer);

/***/ }),

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



/***/ })

}]);