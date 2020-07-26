/*! For license information please see 3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{38:function(t,e,n){"use strict";n.r(e),n.d(e,"FontAwesomeIcon",(function(){return O}));var r=n(16),o=n(3),a=n.n(o),i=n(0),c=n.n(i);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function y(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function d(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n,r=e.indexOf(":"),o=b(e.slice(0,r)),a=e.slice(r+1).trim();return o.startsWith("webkit")?t[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=a:t[o]=a,t}),{})}var v=!1;try{v=!0}catch(t){}function h(t){return null===t?null:"object"===s(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function m(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?l({},t,e):{}}function O(t){var e=t.forwardedRef,n=p(t,["forwardedRef"]),o=n.icon,a=n.mask,i=n.symbol,c=n.className,s=n.title,u=h(o),b=m("classes",[].concat(y(function(t){var e,n=t.spin,r=t.pulse,o=t.fixedWidth,a=t.inverse,i=t.border,c=t.listItem,s=t.flip,u=t.size,f=t.rotation,p=t.pull,y=(l(e={"fa-spin":n,"fa-pulse":r,"fa-fw":o,"fa-inverse":a,"fa-border":i,"fa-li":c,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(u),null!=u),l(e,"fa-rotate-".concat(f),null!=f),l(e,"fa-pull-".concat(p),null!=p),l(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map((function(t){return y[t]?t:null})).filter((function(t){return t}))}(n)),y(c.split(" ")))),d=m("transform","string"==typeof n.transform?r.c.transform(n.transform):n.transform),w=m("mask",h(a)),j=Object(r.a)(u,f({},b,{},d,{},w,{symbol:i,title:s}));if(!j)return function(){var t;!v&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",u),null;var S=j.abstract,E={ref:e};return Object.keys(n).forEach((function(t){O.defaultProps.hasOwnProperty(t)||(E[t]=n[t])})),g(S[0],E)}O.displayName="FontAwesomeIcon",O.propTypes={border:a.a.bool,className:a.a.string,mask:a.a.oneOfType([a.a.object,a.a.array,a.a.string]),fixedWidth:a.a.bool,inverse:a.a.bool,flip:a.a.oneOf(["horizontal","vertical","both"]),icon:a.a.oneOfType([a.a.object,a.a.array,a.a.string]),listItem:a.a.bool,pull:a.a.oneOf(["right","left"]),pulse:a.a.bool,rotation:a.a.oneOf([90,180,270]),size:a.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a.a.bool,symbol:a.a.oneOfType([a.a.bool,a.a.string]),title:a.a.string,transform:a.a.oneOfType([a.a.string,a.a.object]),swapOpacity:a.a.bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return t(e,n)})),a=Object.keys(n.attributes||{}).reduce((function(t,e){var r=n.attributes[e];switch(e){case"class":t.attrs.className=r,delete n.attributes.class;break;case"style":t.attrs.style=d(r);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=r:t.attrs[b(e)]=r}return t}),{attrs:{}}),i=r.style,c=void 0===i?{}:i,s=p(r,["style"]);return a.attrs.style=f({},a.attrs.style,{},c),e.apply(void 0,[n.tag,f({},a.attrs,{},s)].concat(y(o)))}.bind(null,c.a.createElement)},52:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},54:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(0),o=(n(1),n(63),n(4));function a(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=t&&this.setState(t)}function i(t){this.setState(function(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!=n?n:null}.bind(this))}function c(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}a.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0,c.__suppressDeprecationWarning=!0;n(7),n(10);var s=n(72),l=n(30);Object.keys,r.Component;var u,f=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}),(function(t){return t}))},p={fromESObservable:null,toESObservable:null},y={fromESObservable:function(t){return"function"==typeof p.fromESObservable?p.fromESObservable(t):t},toESObservable:function(t){return"function"==typeof p.toESObservable?p.toESObservable(t):t}};u=y},58:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(52),i=n.n(a);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var y=function(t,e){var n;return e.forEach((function(e){n=Object.assign({},n,b(t,e))})),n},b=function(t,e){var n={};return"object"===c(t)&&Object.keys(t).find((function(r){if(r===e)return n=Object.assign({},t[r]),!0})),n},d=o.a.createContext(),v=o.a.createContext(),h=function t(e){var n=[];e.subdataList.map((function(t){!0===t.defaultCollapsed&&n.push(t.id)}));var a,c,s,l,p,b={},h=u(u({},Object(r.useContext)(d)),{},{state_collapsed:(a=n,c=Object(r.useState)(a),s=f(c,2),l=s[0],p=s[1],{value:l,has:function(t){return l.indexOf(t)>=0},onChange:function(t,e){var n;switch(e){case"hide":l.indexOf(t)<0&&(n=l.concat(t),p(n));break;case"show":n=l.filter((function(e){return e!==t})),p(n)}}})}),m=Object(r.useContext)(v);function O(t,n){var r=b["".concat(t,"_sublayer")].current;switch(n){case"hide":r.style.maxHeight="0px",e.updateLayerSize&&e.updateLayerSize(-1*Math.ceil(r.scrollHeight));break;case"show":r.style.maxHeight="".concat(Math.ceil(r.scrollHeight),"px"),e.updateLayerSize&&e.updateLayerSize(Math.ceil(r.scrollHeight))}}return Object(r.useEffect)((function(){var t;e.subdataList.map((function(e){e.children&&(t=h.collapseEnable&&!0===e.defaultCollapsed?"hide":"show",m.toggleCollapsed(e,t),O(e.id,t))}))}),[]),o.a.createElement("ul",{className:"btb-react-list-layer layer-".concat(e.iteration),style:y(h.styleObj,["btb-react-list-layer","layer-".concat(e.iteration)])},e.subdataList.map((function(n){return void 0!==n.children?o.a.createElement("li",{className:"layer_container",style:y(h.styleObj,["layer_container"]),key:n.id},o.a.createElement("div",{className:i()("container_entry","entry-".concat(n.id),{"entry-collapsable":h.collapseEnable},{"entry-active":h.state_activeID.value===n.id}),style:u({paddingLeft:"".concat(e.iteration,"rem")},y(h.styleObj,["container_entry","entry-".concat(n.id),h.collapseEnable?"entry-collapsable":"",h.state_activeID.value===n.id?"entry-active":""])),onClick:function(){!function(t,e){if(!h.collapseEnable)return m.clickEntry(t),!1;var n=h.state_collapsed.has(t.id)?"show":"hide";m.toggleCollapsed(t,n),h.state_collapsed.onChange(t.id,n),O(t.id,n)}(n)}},o.a.createElement("div",{className:"entry_title",style:y(h.styleObj,["entry_title"])},h.slotObj[n.id]?"function"==typeof h.slotObj[n.id]?h.slotObj[n.id](n):h.slotObj[n.id]:n.title),h.collapseEnable?o.a.createElement("div",{className:i()("entry_collapseBtn","collapseBtn-default",{"collapseBtn-on":h.state_collapsed.has(n.id)}),style:y(h.styleObj,["entry_collapseBtn","collapseBtn-default",h.state_collapsed.has(n.id)?"collapseBtn-on":""])},o.a.createElement("div",{className:"collapseBtn_arrow",style:y(h.styleObj,["collapseBtn_arrow"])})):[]),n.children.length>0?o.a.createElement("div",{className:"container_sublayer",id:"".concat(n.id,"_sublayer"),style:y(h.styleObj,["container_sublayer"]),ref:(a="".concat(n.id,"_sublayer"),b[a]=Object(r.useRef)(),b[a])},o.a.createElement(t,{subdataList:n.children,iteration:e.iteration+1,updateLayerSize:function(t){return function(t,n){var r=b["".concat(n,"_sublayer")].current;r.style.maxHeight="".concat(Math.ceil(r.scrollHeight)+t,"px"),e.updateLayerSize&&e.updateLayerSize(t)}(t,n.id)}})):[]):o.a.createElement("li",{className:"layer_container",style:y(h.styleObj,["layer_container"]),key:n.id},o.a.createElement("div",{className:i()("container_entry","entry-".concat(n.id),{"entry-active":h.state_activeID.value===n.id}),style:u({paddingLeft:"".concat(e.iteration,"rem")},y(h.styleObj,["container_entry","entry-".concat(n.id),h.state_activeID.value===n.id?"entry-active":""])),onClick:function(){m.clickEntry(n)}},o.a.createElement("div",{className:"entry_title",style:y(h.styleObj,["entry_title"])},h.slotObj[n.id]?"function"==typeof h.slotObj[n.id]?h.slotObj[n.id](n):h.slotObj[n.id]:n.title)));var a})))},m=o.a.forwardRef((function(t,e){var n,a,c,s,l,u,p={state_activeID:(c=Object(r.useState)(void 0),s=f(c,2),l=s[0],u=s[1],{value:l,onChange:function(t){u(t)}}),collapseEnable:t.collapseEnable||!1,styleObj:(n=t.styleObj||{},a={},Object.keys(n).forEach((function(t){a[t]={},Object.keys(n[t]).forEach((function(e){var r=e.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}));a[t][r]=n[t][e]}))})),a),slotObj:t.slotObj||{}},b={clickEntry:function(e){p.state_activeID.onChange(e.id),t.onEntryClick&&t.onEntryClick(e)},toggleCollapsed:function(e){t.onToggle&&t.onToggle(e)}};return Object(r.useEffect)((function(){p.state_activeID.onChange(t.activeID||t.defaultActiveID||"")}),[]),Object(r.useEffect)((function(){void 0!==t.activeID&&p.state_activeID.value!==t.activeID&&p.state_activeID.onChange(t.activeID)})),o.a.createElement(d.Provider,{value:p},o.a.createElement(v.Provider,{value:b},o.a.createElement("div",{ref:e,className:i()("btb-react-list",t.className),style:y(p.styleObj,["btb-react-list"])},o.a.createElement(h,{subdataList:t.dataList||[],iteration:0}))))}));e.a=m},62:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(52),i=n.n(a);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var y=function(t){var e=0,n=0;if(t.offsetParent)do{e+=t.offsetLeft,n+=t.offsetTop}while(t=t.offsetParent);return{left:e-window.scrollX,top:n-window.scrollY}},b=function(t,e){var n;return e.forEach((function(e){n=Object.assign({},n,d(t,e))})),n},d=function(t,e){var n={};return"object"===c(t)&&Object.keys(t).find((function(r){if(r===e)return n=Object.assign({},t[r]),!0})),n},v=o.a.forwardRef((function(t,e){var n,a,c,s,l,p,d,v,h,m,O,g={state_showState:(c=t.showState,s=Object(r.useState)(c),l=f(s,2),p=l[0],d=l[1],{value:p,onToggle:function(t){d("boolean"==typeof t?t:!p)}}),state_autoAdjust:(v={position:"",align:""},h=f(Object(r.useState)(v),2),m=h[0],O=h[1],{value:m,onAdjust:function(t){O(t)}}),autoDetect:void 0===t.autoDetect||t.autoDetect,withArrow:void 0===t.withArrow||t.withArrow,showPosition:t.showPosition?t.showPosition:"bottom",showAlign:t.showAlign?t.showAlign:"begin",styleObj:(n=t.styleObj||{},a={},Object.keys(n).forEach((function(t){a[t]={},Object.keys(n[t]).forEach((function(e){var r=e.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}));a[t][r]=n[t][e]}))})),a)},w=Object(r.useRef)(null),j=Object(r.useRef)(null),S=g.state_autoAdjust.value.position||g.showPosition,E=g.state_autoAdjust.value.align||g.showAlign,_="".concat(Date.now(),"-").concat(Math.ceil(1e3*Math.random()));function P(){g.autoDetect&&g.state_autoAdjust.onAdjust(u(u(u({},g.state_autoAdjust.value),function(){var t=w.current,e=j.current,n=y(t);if(n.left-e.scrollWidth<0){if("left"===g.showPosition)return{position:"right"};if("top"===g.showPosition||"bottom"===g.showPosition)return{align:"begin"}}else if(n.left+t.scrollWidth+e.scrollWidth+20>window.innerWidth){if("right"===g.showPosition)return{position:"left"};if("top"===g.showPosition||"bottom"===g.showPosition)return{align:"end"}}return{}}()),D()))}function A(){g.autoDetect&&g.state_autoAdjust.onAdjust(u(u({},g.state_autoAdjust.value),D()))}function x(t){window.test=t.path,void 0===t.path.find((function(t){return!!t.classList&&t.classList.value.search("popover-".concat(_))>0}))&&k()}function k(){void 0!==t.onToggle&&t.onToggle(!g.state_showState.value),g.state_showState.value?void 0!==t.onHide&&t.onHide():void 0!==t.onShow&&t.onShow(),g.state_showState.onToggle()}function D(){var t=w.current,e=j.current,n=y(t);if(n.top-e.scrollHeight<0){if("top"===g.showPosition)return{position:"bottom"};if("left"===g.showPosition||"right"===g.showPosition)return{align:"begin"}}else if(n.top+t.scrollHeight+e.scrollHeight+20>window.innerHeight){if("bottom"===g.showPosition)return{position:"top"};if("left"===g.showPosition||"right"===g.showPosition)return{align:"end"}}return{}}return Object(r.useEffect)((function(){return P(),window.addEventListener("resize",P),window.addEventListener("scroll",A),function(){window.removeEventListener("resize",P),window.removeEventListener("scroll",A)}}),[]),Object(r.useEffect)((function(){P()}),[g.state_showState.value,S,E]),Object(r.useEffect)((function(){void 0!==t.showState&&g.state_showState.value!==t.showState&&g.state_showState.onToggle(t.showState)})),Object(r.useEffect)((function(){return window.removeEventListener("click",x,!1),g.state_showState.value&&window.addEventListener("click",x,!1),function(){window.removeEventListener("click",x,!1)}}),[g.state_showState.value]),o.a.createElement("div",{ref:e,className:i()("btb-react-popover","popover-".concat(_),t.className,"popover-align-".concat(E),{"popover-arrow":g.withArrow}),style:b(g.styleObj,["btb-react-popover","popover-align-".concat(E),g.withArrow?"popover-arrow":""])},o.a.createElement("div",{ref:w,className:"popover_trigger",style:b(g.styleObj,["popover_trigger"]),onClick:k},void 0!==t.trigger?t.trigger:"Trigger"),o.a.createElement("div",{ref:j,className:i()("popover_content",{"content-show":g.state_showState.value},"content-position-".concat(S)),style:b(g.styleObj,["popover_content",g.state_showState.value?"content-show":"","content-position-".concat(S)])},t.children||"Empty"))}));e.a=v},63:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty;function o(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}t.exports=function(t,e){if(o(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(var i=0;i<n.length;i++)if(!r.call(e,n[i])||!o(t[n[i]],e[n[i]]))return!1;return!0}},72:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.createChangeEmitter=function(){var t=[],e=t;function n(){e===t&&(e=t.slice())}return{listen:function(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var r=!0;return n(),e.push(t),function(){if(r){r=!1,n();var o=e.indexOf(t);e.splice(o,1)}}},emit:function(){for(var n=t=e,r=0;r<n.length;r++)n[r].apply(n,arguments)}}}},99:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s}));var r,o=(r=[],{init:function(t){return r=t||[]},menu:function(){return r.map((function(t){return{index:t.index,label:t.label}}))},get:function(t){return r.find((function(e){return e.index===t}))||{}}});function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=function(){var t={};o.menu()[0]&&(t=o.get(o.menu()[0].index||""));var e=function(t,e){var r=n(t,e);return void 0===r?t:r},n=function t(e,n){var r=i(e.split(".")),o=r[0],c=r.slice(1);return"object"===a(n[o])?t(c.join("."),n[o]):n[o]};return{menu:function(){return o.menu()},get:function(){return t},set:function(e){return t=o.get(e)},translate:function(n,r){var o,a=e(n,t.dictionary||{});return r&&Object.keys(r).map((function(t){o=new RegExp(t,"g"),a=a.replace(o,r[t])})),a}}},s=function(t){return o.init(t)}}}]);