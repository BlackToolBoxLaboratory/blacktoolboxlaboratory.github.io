/*! For license information please see vendors~49d0a293.js.LICENSE.txt */
(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[8463],{2122:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,{Z:function(){return n}})},1788:function(t,e,r){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}r.d(e,{Z:function(){return n}})},9756:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}r.d(e,{Z:function(){return n}})},7814:function(t,e,r){"use strict";var n=r(8947),o=r(5697),i=r.n(o),a=r(7294);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function p(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function b(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=y(e.slice(0,n)),i=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:t[o]=i,t}),{})}var h=!1;try{h=!0}catch(t){}function d(t){return null===t?null:"object"===s(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function m(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?c({},t,e):{}}function v(t){var e=t.forwardedRef,r=l(t,["forwardedRef"]),o=r.icon,i=r.mask,a=r.symbol,s=r.className,u=r.title,y=d(o),b=m("classes",[].concat(p(function(t){var e,r=t.spin,n=t.pulse,o=t.fixedWidth,i=t.inverse,a=t.border,s=t.listItem,u=t.flip,f=t.size,l=t.rotation,p=t.pull,y=(c(e={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":s,"fa-flip-horizontal":"horizontal"===u||"both"===u,"fa-flip-vertical":"vertical"===u||"both"===u},"fa-".concat(f),null!=f),c(e,"fa-rotate-".concat(l),null!=l&&0!==l),c(e,"fa-pull-".concat(p),null!=p),c(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map((function(t){return y[t]?t:null})).filter((function(t){return t}))}(r)),p(s.split(" ")))),O=m("transform","string"==typeof r.transform?n.Qc.transform(r.transform):r.transform),j=m("mask",d(i)),x=(0,n.qv)(y,f({},b,{},O,{},j,{symbol:a,title:u}));if(!x)return function(){var t;!h&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",y),null;var w=x.abstract,P={ref:e};return Object.keys(r).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(P[t]=r[t])})),g(w[0],P)}v.displayName="FontAwesomeIcon",v.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),i=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=b(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[y(e)]=n}return t}),{attrs:{}}),a=n.style,s=void 0===a?{}:a,c=l(n,["style"]);return i.attrs.style=f({},i.attrs.style,{},s),e.apply(void 0,[r.tag,f({},i.attrs,{},c)].concat(p(o)))}.bind(null,a.createElement)},8679:function(t,e,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(t){return n.isMemo(t)?a:s[t.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,b=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(b){var o=y(r);o&&o!==b&&t(e,o,n)}var a=f(r);l&&(a=a.concat(l(r)));for(var s=c(e),h=c(r),d=0;d<a.length;++d){var m=a[d];if(!(i[m]||n&&n[m]||h&&h[m]||s&&s[m])){var v=p(r,m);try{u(e,m,v)}catch(t){}}}}return e}},4523:function(t,e,r){"use strict";var n=r(7294),o=r(1788),i=r(5697),a=r.n(i),s=1073741823,c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:{};function u(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(r,n){t=r,e.forEach((function(e){return e(t,n)}))}}}var f=n.createContext||function(t,e){var r,i,f,l="__create-react-context-"+((c[f="__global_unique_id__"]=(c[f]||0)+1)+"__"),p=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).emitter=u(e.props.value),e}(0,o.Z)(r,t);var n=r.prototype;return n.getChildContext=function(){var t;return(t={})[l]=this.emitter,t},n.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var r,n=this.props.value,o=t.value;((i=n)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?r=0:(r="function"==typeof e?e(n,o):s,0!==(r|=0)&&this.emitter.set(t.value,r))}var i,a},n.render=function(){return this.props.children},r}(n.Component);p.childContextTypes=((r={})[l]=a().object.isRequired,r);var y=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,r){0!=((0|t.observedBits)&r)&&t.setState({value:t.getValue()})},t}(0,o.Z)(r,e);var n=r.prototype;return n.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?s:e},n.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?s:t},n.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},n.getValue=function(){return this.context[l]?this.context[l].get():t},n.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},r}(n.Component);return y.contextTypes=((i={})[l]=a().object,i),{Provider:p,Consumer:y}};e.Z=f},7418:function(t){"use strict";var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,i){for(var a,s,c=o(t),u=1;u<arguments.length;u++){for(var f in a=Object(arguments[u]))r.call(a,f)&&(c[f]=a[f]);if(e){s=e(a);for(var l=0;l<s.length;l++)n.call(a,s[l])&&(c[s[l]]=a[s[l]])}}return c}},4779:function(t){t.exports=function t(r,n,o){n=n||[];var i,a=(o=o||{}).strict,s=!1!==o.end,c=o.sensitive?"":"i",u=0,f=n.length,l=0,p=0;if(r instanceof RegExp){for(;i=e.exec(r.source);)n.push({name:p++,optional:!1,offset:i.index});return r}if(Array.isArray(r))return r=r.map((function(e){return t(e,n,o).source})),new RegExp("(?:"+r.join("|")+")",c);r=("^"+r+(a?"":"/"===r[r.length-1]?"?":"/?")).replace(/\/\(/g,"/(?:").replace(/([\/\.])/g,"\\$1").replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g,(function(t,e,r,o,i,a,s,c){e=e||"",r=r||"",i=i||"([^\\/"+r+"]+?)",s=s||"",n.push({name:o,optional:!!s,offset:c+u});var f=(s?"":e)+"(?:"+r+(s?e:"")+i+(a?"((?:[\\/"+r+"].+?)?)":"")+")"+s;return u+=f.length-t.length,f})).replace(/\*/g,(function(t,e){for(var r=n.length;r-- >f&&n[r].offset>e;)n[r].offset+=3;return"(.*)"}));for(;i=e.exec(r);){for(var y=0,b=i.index;"\\"===r.charAt(--b);)y++;y%2!=1&&((f+l===n.length||n[f+l].offset>i.index)&&n.splice(f+l,0,{name:p++,optional:!1,offset:i.index}),l++)}return r+=s?"$":"/"===r[r.length-1]?"":"(?=\\/|$)",new RegExp(r,c)};var e=/\((?!\?)/g},2703:function(t,e,r){"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(t,e,r){t.exports=r(2703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);