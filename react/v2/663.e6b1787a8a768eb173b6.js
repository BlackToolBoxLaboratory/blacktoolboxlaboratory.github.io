(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[663],{6034:function(e,t,n){"use strict";n.d(t,{z:function(){return p},h:function(){return m}});var i=n(7294),a=n(4184),o=n.n(a);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,a=!1,o=void 0;try{for(var r,c=e[Symbol.iterator]();!(i=(r=c.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var s=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,u(e,t))})),n},u=function(e,t){var n={};return"object"===r(e)&&Object.keys(e).find((function(i){if(i===t)return n=Object.assign({},e[i]),!0})),n},d=function(e){var t={};return Object.keys(e).forEach((function(n){t[n]={},Object.keys(e[n]).forEach((function(i){var a=i.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));t[n][a]=e[n][i]}))})),t},p=i.forwardRef((function(e,t){var n={styleObj:d(e.styleObj||{})};return i.createElement("button",{ref:t,className:o()("btb-react-button",{"button-disabled":e.disabled},e.className),disabled:e.disabled,style:s(n.styleObj,["btb-react-button"]),onClick:function(){(void 0!==e.onClick||e.disabled)&&e.onClick(e)}},e.prependNode?i.createElement("div",{className:"button_item item-prepend",style:s(n.styleObj,["button_item","item-prepend"]),onClick:function(){(void 0!==e.onPrependClick||e.disabled)&&e.onPrependClick(e)}},e.prependNode):[],i.createElement("div",{className:"button_item itme-core",style:s(n.styleObj,["button_item","itme-core"]),onClick:function(){(void 0!==e.onCoreClick||e.disabled)&&e.onCoreClick(e)}},e.children||"Button"),e.appendNode?i.createElement("div",{className:"button_item item-append",style:s(n.styleObj,["button_item","item-append"]),onClick:function(){(void 0!==e.onAppendClick||e.disabled)&&e.onAppendClick(e)}},e.appendNode):[])})),m=i.forwardRef((function(e,t){var n,a,r,l,u,p,m={state_activeID:(r=(0,i.useState)(undefined),l=c(r,2),u=l[0],p=l[1],{value:u,onChange:function(e){p(e)}}),direction:e.direction?e.direction:"horizontal",listDisaled:(null===(n=e.listDisaled)||void 0===n?void 0:n.length)?e.listDisaled:[],childrenDisaled:(null===(a=e.childrenDisaled)||void 0===a?void 0:a.length)?e.childrenDisaled:[],styleObj:d(e.styleObj||{})};function b(t,n){m.state_activeID.onChange(t),void 0!==e.onEntryClick&&e.onEntryClick(t,n)}return(0,i.useEffect)((function(){m.state_activeID.onChange(e.activeID||e.defaultActiveID||"")}),[]),(0,i.useEffect)((function(){void 0!==e.activeID&&m.state_activeID.value!==e.activeID&&m.state_activeID.onChange(e.activeID)})),i.createElement("div",{ref:t,className:o()("btb-react-button-group",e.className,"group-".concat(m.direction)),style:s(m.styleObj,["btb-react-button-group","group-".concat(m.direction)])},e.buttonList?e.buttonList.map((function(e,t){return i.createElement("button",{className:o()("group_button",{"button-disabled":m.listDisaled.includes(t)},"button-list_".concat(t),{"button-active":m.state_activeID.value==="list_".concat(t)}),disabled:m.listDisaled.includes(t),style:s(m.styleObj,["group_button","button-list_".concat(t),m.state_activeID.value===t?"button-active":""]),key:"".concat(Date.now(),"_list_").concat(t),onClick:function(){b("list_".concat(t),e)}},e)})):[],e.children?e.children.map((function(e,t){return i.createElement("button",{className:o()("group_button",{"button-disabled":m.childrenDisaled.includes(t)},"button-children_".concat(t),{"button-active":m.state_activeID.value==="children_".concat(t)}),disabled:m.childrenDisaled.includes(t),style:s(m.styleObj,["group_button","button-children_".concat(t)]),key:"".concat(Date.now(),"_children_").concat(t),onClick:function(){b("children_".concat(t),e)}},e)})):[],e.buttonList||e.children?[]:i.createElement("button",{className:"group_button button-empty",style:s(m.styleObj,["group_button","button-empty"])},"Empty"))}))},652:function(e,t,n){"use strict";var i=n(7294),a=n(4184),o=n.n(a);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,l(e,t))})),n},l=function(e,t){var n={};return"object"===r(e)&&Object.keys(e).find((function(i){if(i===t)return n=Object.assign({},e[i]),!0})),n},s=i.forwardRef((function(e,t){var n,a,r=e.position,l=void 0===r?"left":r,s=e.align,u=void 0===s?"begin":s,d=e.nodeList,p=void 0===d?[]:d,m=e.typeObj,b=void 0===m?{}:m,f=(n=e.styleObj||{},a={},Object.keys(n).forEach((function(e){a[e]={},Object.keys(n[e]).forEach((function(t){var i=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));a[e][i]=n[e][t]}))})),a);return i.createElement("div",{ref:t,className:o()("btb-react-timeline",e.className,"timeline-position-".concat(l),"timeline-align-".concat(u)),style:c(f,["btb-react-timeline","timeline-position-".concat(l),"timeline-align-".concat(u)])},p.map((function(e,t){return i.createElement("div",{className:"timeline_node",style:c(f,["timeline_node"]),key:"".concat(Date.now(),"_").concat(t)},i.createElement("div",{className:"node_point",style:c(f,["node_point"])}),i.createElement("div",{className:"node_content",style:c(f,["node_content"])},void 0!==e.type&&"function"==typeof b[e.type]?b[e.type](e):e))})))}));t.Z=s},4989:function(e,t,n){"use strict";var i=n(5044),a={list:{name:"package.list.name",routename:i.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:i.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:i.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.3",updated:"2020-12-13",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:i.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.3.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:i.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},timeline:{name:"package.timeline.name",routename:i.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.1",updated:"2020-12-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},folder:{name:"package.folder.name",routename:i.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:i.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=a},7839:function(e,t,n){"use strict";var i=n(4989),a={version:i.Z.timeline.version,updated:i.Z.timeline.updated,description:i.Z.timeline.description,linkList:[{id:"github",fa:["fab","github"],url:i.Z.timeline.link.github},{id:"npm",fa:["fab","npm"],url:i.Z.timeline.link.npm}]};t.Z=a},6520:function(e,t,n){"use strict";n.d(t,{gO:function(){return v},iz:function(){return O},T3:function(){return l},yG:function(){return p},$0:function(){return f}});var i=n(7294),a=n(4184),o=n.n(a);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=function(e){var t=e.className,n=e.children,a=c(e,["className","children"]);return i.createElement("div",r({className:o()("module-page",t)},a),n)},s=n(7814);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=function(e){var t=e.id,n=e.title,a=void 0===n?"":n,r=e.linkList,c=e.clickBtn,l=void 0===c?function(){}:c,p=d(e,["id","title","linkList","clickBtn"]);return i.createElement("div",u({id:t,className:"module-page-head"},p),i.createElement("div",{className:"head_title"},a||""),(r||[]).map((function(e){return i.createElement("div",{className:o()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},i.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=function(e){var t=e.className,n=e.head,a=e.children,r=b(e,["className","head","children"]);return i.createElement("div",m({className:o()("module-section",t)},r),e.head?i.createElement("div",{className:"section_head"},n):[],i.createElement("div",{className:"section_body"},a))};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v=function(e){var t=e.title,n=e.children,a=e.className,r=g(e,["title","children","className"]);return i.createElement("div",y({className:o()("module-block",a)},r),t?i.createElement("div",{className:"block_title"},t):[],i.createElement("div",{className:"block_body"},n))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var O=function(e){var t=e.className,n=e.dividerProps;return i.createElement("div",h({className:o()("module-divider",t)},n),i.createElement("div",{className:"divider_line"}),i.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.createElement("div",{className:"divider_line"}))}},663:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var i=n(7294),a=n(6593),o=n(652),r=(n(6034),n(6742)),c=n(2007),l=n(6520),s=n(7839),u=["pure test event",{type:"customized",description:"description for type 1"}],d={customized:function(e){return i.createElement(i.Fragment,null,i.createElement("div",null,"Type: ".concat(e.type)),i.createElement("div",null,"Description: ".concat(e.description)))}},p={timeline_node:{maxWidth:"unset"},node_content:{border:"1px solid black",borderRadius:"0.5rem",padding:"0.5rem",whiteSpace:"nowrap",background:"white"}},m=function(){return(0,a.v9)((function(e){return{languageSetting:e.language.languageSetting}})),i.createElement(l.T3,{id:"btb-pkg-timeline-example-align"},i.createElement(l.yG,{title:r.K.translate("package.timeline.example.align.title"),clickBtn:c.n,linkList:s.Z.linkList}),i.createElement(l.$0,{head:i.createElement(i.Fragment,null,"".concat(r.K.translate("package.version_colon")).concat(s.Z.version),i.createElement("br",null),"".concat(r.K.translate("package.release_colon")).concat(s.Z.updated))},i.createElement("p",null,r.K.translate("package.timeline.example.align.description"))),i.createElement(l.$0,{head:r.K.translate("package.section.example")},i.createElement(l.gO,{title:r.K.translate("package.timeline.example.vertical")},i.createElement("div",{className:"align_vertical"},i.createElement(o.Z,{nodeList:u,typeObj:d,styleObj:p,position:"left",align:"begin"})),i.createElement(l.iz,null),i.createElement("div",{className:"align_vertical"},i.createElement(o.Z,{nodeList:u,typeObj:d,styleObj:p,position:"left",align:"center"})),i.createElement(l.iz,null),i.createElement("div",{className:"align_vertical"},i.createElement(o.Z,{nodeList:u,typeObj:d,styleObj:p,position:"left",align:"end"}))),i.createElement(l.gO,{title:r.K.translate("package.timeline.example.horizontal")},i.createElement("div",{className:"align_horizontal"},i.createElement(o.Z,{nodeList:u,typeObj:d,styleObj:p,position:"top",align:"begin"})),i.createElement(l.iz,{className:"align_horizontal"}),i.createElement("div",{className:"align_horizontal"},i.createElement(o.Z,{nodeList:u,typeObj:d,styleObj:p,position:"top",align:"center"})),i.createElement(l.iz,{className:"align_horizontal"}),i.createElement(o.Z,{nodeList:u,typeObj:d,styleObj:p,position:"top",align:"end"}))),i.createElement(l.$0,{head:r.K.translate("package.section.sourceCode")},i.createElement("pre",{className:"page_pre"},'<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="left" align="begin"/>\n\n<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="left" align="center" />\n\n<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="left" align="end" />\n\n<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="top" align="begin" />\n\n<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="top" align="center" />\n\n<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="top" align="end" />\n'),i.createElement(l.gO,{title:"headData"},i.createElement("pre",{className:"page_pre"},"const nodeList = [\n  'pure test event',\n  {\n          type: 'customized',\n          description: 'description for type 1'\n  }\n];")),i.createElement(l.gO,{title:"headData"},i.createElement("pre",{className:"page_pre"},"const typeObj = {\n  'customized': (node)=>{\n          return (\n                  <>\n                          <div>{`Type: ${node.type}`}</div>\n                          <div>{`Description: ${node.description}`}</div>\n                  </>\n          )\n  }\n};")),i.createElement(l.gO,{title:"headData"},i.createElement("pre",{className:"page_pre"},"const styleObj = {\n        'timeline_node': {\n                'maxWidth': 'unset',\n        },\n        'node_content' : {\n                'border': '1px solid black',\n                'borderRadius': '0.5rem',\n                'padding': '0.5rem',\n                'whiteSpace': 'nowrap',\n                'background': 'white',\n        }\n};"))))},b=function(){return i.createElement(m,null)}},2007:function(e,t,n){"use strict";n.d(t,{n:function(){return i}});var i=function(e){window.open(e.url)}}}]);