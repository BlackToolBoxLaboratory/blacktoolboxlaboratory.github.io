(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[4179],{6034:function(e,t,n){"use strict";n.d(t,{z:function(){return d},h:function(){return m}});var a=n(7294),o=n(4184),r=n.n(o);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var s=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,u(e,t))})),n},u=function(e,t){var n={};return"object"===i(e)&&Object.keys(e).find((function(a){if(a===t)return n=Object.assign({},e[a]),!0})),n},p=function(e){var t={};return Object.keys(e).forEach((function(n){t[n]={},Object.keys(e[n]).forEach((function(a){var o=a.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));t[n][o]=e[n][a]}))})),t},d=a.forwardRef((function(e,t){var n={styleObj:p(e.styleObj||{})};return a.createElement("button",{ref:t,className:r()("btb-react-button",{"button-disabled":e.disabled},e.className),disabled:e.disabled,style:s(n.styleObj,["btb-react-button"]),onClick:function(){(void 0!==e.onClick||e.disabled)&&e.onClick(e)}},e.prependNode?a.createElement("div",{className:"button_item item-prepend",style:s(n.styleObj,["button_item","item-prepend"]),onClick:function(){(void 0!==e.onPrependClick||e.disabled)&&e.onPrependClick(e)}},e.prependNode):[],a.createElement("div",{className:"button_item itme-core",style:s(n.styleObj,["button_item","itme-core"]),onClick:function(){(void 0!==e.onCoreClick||e.disabled)&&e.onCoreClick(e)}},e.children||"Button"),e.appendNode?a.createElement("div",{className:"button_item item-append",style:s(n.styleObj,["button_item","item-append"]),onClick:function(){(void 0!==e.onAppendClick||e.disabled)&&e.onAppendClick(e)}},e.appendNode):[])})),m=a.forwardRef((function(e,t){var n,o,i,l,u,d,m={state_activeID:(i=(0,a.useState)(undefined),l=c(i,2),u=l[0],d=l[1],{value:u,onChange:function(e){d(e)}}),direction:e.direction?e.direction:"horizontal",listDisaled:(null===(n=e.listDisaled)||void 0===n?void 0:n.length)?e.listDisaled:[],childrenDisaled:(null===(o=e.childrenDisaled)||void 0===o?void 0:o.length)?e.childrenDisaled:[],styleObj:p(e.styleObj||{})};function b(t,n){m.state_activeID.onChange(t),void 0!==e.onEntryClick&&e.onEntryClick(t,n)}return(0,a.useEffect)((function(){m.state_activeID.onChange(e.activeID||e.defaultActiveID||"")}),[]),(0,a.useEffect)((function(){void 0!==e.activeID&&m.state_activeID.value!==e.activeID&&m.state_activeID.onChange(e.activeID)})),a.createElement("div",{ref:t,className:r()("btb-react-button-group",e.className,"group-".concat(m.direction)),style:s(m.styleObj,["btb-react-button-group","group-".concat(m.direction)])},e.buttonList?e.buttonList.map((function(e,t){return a.createElement("button",{className:r()("group_button",{"button-disabled":m.listDisaled.includes(t)},"button-list_".concat(t),{"button-active":m.state_activeID.value==="list_".concat(t)}),disabled:m.listDisaled.includes(t),style:s(m.styleObj,["group_button","button-list_".concat(t),m.state_activeID.value===t?"button-active":""]),key:"".concat(Date.now(),"_list_").concat(t),onClick:function(){b("list_".concat(t),e)}},e)})):[],e.children?e.children.map((function(e,t){return a.createElement("button",{className:r()("group_button",{"button-disabled":m.childrenDisaled.includes(t)},"button-children_".concat(t),{"button-active":m.state_activeID.value==="children_".concat(t)}),disabled:m.childrenDisaled.includes(t),style:s(m.styleObj,["group_button","button-children_".concat(t)]),key:"".concat(Date.now(),"_children_").concat(t),onClick:function(){b("children_".concat(t),e)}},e)})):[],e.buttonList||e.children?[]:a.createElement("button",{className:"group_button button-empty",style:s(m.styleObj,["group_button","button-empty"])},"Empty"))}))},4989:function(e,t,n){"use strict";var a=n(5044),o={list:{name:"package.list.name",routename:a.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:a.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:a.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.3",updated:"2020-12-13",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:a.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.3.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:a.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},timeline:{name:"package.timeline.name",routename:a.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},folder:{name:"package.folder.name",routename:a.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:a.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=o},7726:function(e,t,n){"use strict";var a=n(4989),o={version:a.Z.message.version,updated:a.Z.message.updated,descriptionMessage:a.Z.message.description_message,descriptionNotice:a.Z.message.description_notice,linkList:[{id:"github",fa:["fab","github"],url:a.Z.message.link.github},{id:"npm",fa:["fab","npm"],url:a.Z.message.link.npm}]};t.Z=o},6520:function(e,t,n){"use strict";n.d(t,{gO:function(){return y},iz:function(){return k},T3:function(){return l},yG:function(){return d},$0:function(){return f}});var a=n(7294),o=n(4184),r=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=function(e){var t=e.className,n=e.children,o=c(e,["className","children"]);return a.createElement("div",i({className:r()("module-page",t)},o),n)},s=n(7814);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=function(e){var t=e.id,n=e.title,o=void 0===n?"":n,i=e.linkList,c=e.clickBtn,l=void 0===c?function(){}:c,d=p(e,["id","title","linkList","clickBtn"]);return a.createElement("div",u({id:t,className:"module-page-head"},d),a.createElement("div",{className:"head_title"},o||""),(i||[]).map((function(e){return a.createElement("div",{className:r()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},a.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=function(e){var t=e.className,n=e.head,o=e.children,i=b(e,["className","head","children"]);return a.createElement("div",m({className:r()("module-section",t)},i),e.head?a.createElement("div",{className:"section_head"},n):[],a.createElement("div",{className:"section_body"},o))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=function(e){var t=e.title,n=e.children,o=e.className,i=v(e,["title","children","className"]);return a.createElement("div",g({className:r()("module-block",o)},i),t?a.createElement("div",{className:"block_title"},t):[],a.createElement("div",{className:"block_body"},n))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var k=function(e){var t=e.className,n=e.dividerProps;return a.createElement("div",h({className:r()("module-divider",t)},n),a.createElement("div",{className:"divider_line"}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement("div",{className:"divider_line"}))}},4179:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(7294),o=n(6593),r=n(6034),i=n(8392),c=n(6742),l=n(2007),s=n(6520),u=n(7726),p=function(){var e=(0,i.UD)();return(0,o.v9)((function(e){return{languageSetting:e.language.languageSetting}})),a.createElement(s.T3,{id:"btb-pkg-message-example-message"},a.createElement(s.yG,{title:c.K.translate("package.message.example.message.title"),clickBtn:l.n,linkList:u.Z.linkList}),a.createElement(s.$0,{head:a.createElement(a.Fragment,null,"".concat(c.K.translate("package.version_colon")).concat(u.Z.version),a.createElement("br",null),"".concat(c.K.translate("package.release_colon")).concat(u.Z.updated))},a.createElement("p",null,c.K.translate("package.message.example.message.description"))),a.createElement(s.$0,{head:c.K.translate("package.section.example")},a.createElement(r.z,{onClick:function(){e.send({type:"normal",context:"normal"})}},"Normal"),a.createElement(s.gO,{title:c.K.translate("package.message.example.message.style")},a.createElement(r.h,{onEntryClick:function(t,n){var a=n.props;e.send({type:a.id,context:a.children})}},a.createElement("span",{id:"blue"},"Blue"),a.createElement("span",{id:"grey"},"Grey"),a.createElement("span",{id:"green"},"Green"),a.createElement("span",{id:"red"},"Red"),a.createElement("span",{id:"yellow"},"Yellow"),a.createElement("span",{id:"light"},"Light"),a.createElement("span",{id:"dark"},"Dark")))),a.createElement(s.$0,{head:c.K.translate("package.section.sourceCode")},a.createElement("pre",{className:"page_pre"},'<BTBButton\n      onClick={_clickButton}\n>\n\n<BTBButtonGroup onEntryClick={_clickGroupButton}>\n        <span id="blue"> Blue </span>\n        <span id="grey"> Grey </span>\n        <span id="green"> Green </span>\n        <span id="red"> Red </span>\n        <span id="yellow"> Yellow </span>\n        <span id="light"> Light </span>\n        <span id="dark"> Dark </span>\n</BTBButtonGroup>'),a.createElement(s.gO,{title:c.K.translate("package.message.example.message.event")},a.createElement("pre",{className:"page_pre"},"const _clickMessage = () => {\n        message.send({\n                type: 'normal',\n                context: 'normal',\n        });\n};\n\nconst _clickGroup = (id, content) => {\n        const { props } = content;\n        message.send({\n                type: props.id,\n                context: props.id,\n        });\n};"))))},d=function(){return a.createElement(p,null)}},2007:function(e,t,n){"use strict";n.d(t,{n:function(){return a}});var a=function(e){window.open(e.url)}}}]);