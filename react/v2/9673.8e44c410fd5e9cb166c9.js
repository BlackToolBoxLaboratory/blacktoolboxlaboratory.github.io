(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[9673],{6034:function(e,t,n){"use strict";n.d(t,{z:function(){return f},h:function(){return b}});var r=n(7294),i=n(4184),o=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,s(e,t))})),n},s=function(e,t){var n={};return"object"===c(e)&&Object.keys(e).find((function(r){if(r===t)return n=Object.assign({},e[r]),!0})),n},d=function(e){var t={};return Object.keys(e).forEach((function(n){t[n]={},Object.keys(e[n]).forEach((function(r){var i=r.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));t[n][i]=e[n][r]}))})),t},f=r.forwardRef((function(e,t){var n={styleObj:d(e.styleObj||{})};return r.createElement("button",{ref:t,className:o()("btb-react-button",{"button-disabled":e.disabled},e.className),disabled:e.disabled,style:u(n.styleObj,["btb-react-button"]),onClick:function(){(void 0!==e.onClick||e.disabled)&&e.onClick(e)}},e.prependNode?r.createElement("div",{className:"button_item item-prepend",style:u(n.styleObj,["button_item","item-prepend"]),onClick:function(){(void 0!==e.onPrependClick||e.disabled)&&e.onPrependClick(e)}},e.prependNode):[],r.createElement("div",{className:"button_item itme-core",style:u(n.styleObj,["button_item","itme-core"]),onClick:function(){(void 0!==e.onCoreClick||e.disabled)&&e.onCoreClick(e)}},e.children||"Button"),e.appendNode?r.createElement("div",{className:"button_item item-append",style:u(n.styleObj,["button_item","item-append"]),onClick:function(){(void 0!==e.onAppendClick||e.disabled)&&e.onAppendClick(e)}},e.appendNode):[])})),b=r.forwardRef((function(e,t){var n,i,c,l,s,f,b={state_activeID:(c=(0,r.useState)(undefined),l=a(c,2),s=l[0],f=l[1],{value:s,onChange:function(e){f(e)}}),direction:e.direction?e.direction:"horizontal",listDisaled:(null===(n=e.listDisaled)||void 0===n?void 0:n.length)?e.listDisaled:[],childrenDisaled:(null===(i=e.childrenDisaled)||void 0===i?void 0:i.length)?e.childrenDisaled:[],styleObj:d(e.styleObj||{})};function m(t,n){b.state_activeID.onChange(t),void 0!==e.onEntryClick&&e.onEntryClick(t,n)}return(0,r.useEffect)((function(){b.state_activeID.onChange(e.activeID||e.defaultActiveID||"")}),[]),(0,r.useEffect)((function(){void 0!==e.activeID&&b.state_activeID.value!==e.activeID&&b.state_activeID.onChange(e.activeID)})),r.createElement("div",{ref:t,className:o()("btb-react-button-group",e.className,"group-".concat(b.direction)),style:u(b.styleObj,["btb-react-button-group","group-".concat(b.direction)])},e.buttonList?e.buttonList.map((function(e,t){return r.createElement("button",{className:o()("group_button",{"button-disabled":b.listDisaled.includes(t)},"button-list_".concat(t),{"button-active":b.state_activeID.value==="list_".concat(t)}),disabled:b.listDisaled.includes(t),style:u(b.styleObj,["group_button","button-list_".concat(t),b.state_activeID.value===t?"button-active":""]),key:"".concat(Date.now(),"_list_").concat(t),onClick:function(){m("list_".concat(t),e)}},e)})):[],e.children?e.children.map((function(e,t){return r.createElement("button",{className:o()("group_button",{"button-disabled":b.childrenDisaled.includes(t)},"button-children_".concat(t),{"button-active":b.state_activeID.value==="children_".concat(t)}),disabled:b.childrenDisaled.includes(t),style:u(b.styleObj,["group_button","button-children_".concat(t)]),key:"".concat(Date.now(),"_children_").concat(t),onClick:function(){m("children_".concat(t),e)}},e)})):[],e.buttonList||e.children?[]:r.createElement("button",{className:"group_button button-empty",style:u(b.styleObj,["group_button","button-empty"])},"Empty"))}))},6520:function(e,t,n){"use strict";n.d(t,{gO:function(){return h},iz:function(){return g},T3:function(){return l},yG:function(){return f},$0:function(){return v}});var r=n(7294),i=n(4184),o=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=function(e){var t=e.className,n=e.children,i=a(e,["className","children"]);return r.createElement("div",c({className:o()("module-page",t)},i),n)},u=n(7814);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=function(e){var t=e.id,n=e.title,i=void 0===n?"":n,c=e.linkList,a=e.clickBtn,l=void 0===a?function(){}:a,f=d(e,["id","title","linkList","clickBtn"]);return r.createElement("div",s({id:t,className:"module-page-head"},f),r.createElement("div",{className:"head_title"},i||""),(c||[]).map((function(e){return r.createElement("div",{className:o()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},r.createElement(u.G,{icon:e.fa,fixedWidth:!0}))})))};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var v=function(e){var t=e.className,n=e.head,i=e.children,c=m(e,["className","head","children"]);return r.createElement("div",b({className:o()("module-section",t)},c),e.head?r.createElement("div",{className:"section_head"},n):[],r.createElement("div",{className:"section_body"},i))};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var h=function(e){var t=e.title,n=e.children,i=e.className,c=y(e,["title","children","className"]);return r.createElement("div",p({className:o()("module-block",i)},c),t?r.createElement("div",{className:"block_title"},t):[],r.createElement("div",{className:"block_body"},n))};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e){var t=e.className,n=e.dividerProps;return r.createElement("div",O({className:o()("module-divider",t)},n),r.createElement("div",{className:"divider_line"}),r.createElement(u.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.createElement(u.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.createElement(u.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.createElement(u.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.createElement(u.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.createElement(u.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.createElement(u.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.createElement("div",{className:"divider_line"}))}},9673:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),i=n(6593),o=n(6034),c=n(782),a=n(6520),l=function(){var e=(0,c.B)();(0,i.v9)((function(e){return{languageSetting:e.language.languageSetting}}));var t=function(){e.hide()};return r.createElement(a.T3,{id:"btb-pkg-popover-basic"},r.createElement(o.z,{onClick:function(){e.show({content:r.createElement("div",null,r.createElement(o.z,{onClick:t},"Click to Close"))})}},"Click to open"))},u=function(){return r.createElement(l,null)}}}]);