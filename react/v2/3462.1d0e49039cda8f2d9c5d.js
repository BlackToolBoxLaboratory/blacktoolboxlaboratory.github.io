(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[3462],{6034:function(e,t,n){"use strict";n.d(t,{zx:function(){return d},hE:function(){return m}});var a=n(7294),o=n(4184),r=n.n(o);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var s=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,u(e,t))})),n},u=function(e,t){var n={};return"object"===i(e)&&Object.keys(e).find((function(a){if(a===t)return n=Object.assign({},e[a]),!0})),n},p=function(e){var t={};return Object.keys(e).forEach((function(n){t[n]={},Object.keys(e[n]).forEach((function(a){var o=a.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));t[n][o]=e[n][a]}))})),t},d=a.forwardRef((function(e,t){var n={styleObj:p(e.styleObj||{})};return a.createElement("div",{ref:t,className:r()("btb-react-button",e.className),style:s(n.styleObj,["btb-react-button"]),onClick:function(){void 0!==e.onClick&&e.onClick(e)}},e.prependNode?a.createElement("div",{className:"button_item item-prepend",style:s(n.styleObj,["button_item","item-prepend"]),onClick:function(){void 0!==e.onPrependClick&&e.onPrependClick(e)}},e.prependNode):[],a.createElement("div",{className:"button_item itme-core",style:s(n.styleObj,["button_item","itme-core"]),onClick:function(){void 0!==e.onCoreClick&&e.onCoreClick(e)}},e.children||"Button"),e.appendNode?a.createElement("div",{className:"button_item item-append",style:s(n.styleObj,["button_item","item-append"]),onClick:function(){void 0!==e.onAppendClick&&e.onAppendClick(e)}},e.appendNode):[])})),m=a.forwardRef((function(e,t){var n,o,i,l,u={state_activeID:(n=(0,a.useState)(undefined),o=c(n,2),i=o[0],l=o[1],{value:i,onChange:function(e){l(e)}}),direction:e.direction?e.direction:"horizontal",styleObj:p(e.styleObj||{}),slotObj:e.slotObj||{}};function d(t,n){u.state_activeID.onChange(t),void 0!==e.onEntryClick&&e.onEntryClick(t,n)}return(0,a.useEffect)((function(){u.state_activeID.onChange(e.activeID||e.defaultActiveID||"")}),[]),(0,a.useEffect)((function(){void 0!==e.activeID&&u.state_activeID.value!==e.activeID&&u.state_activeID.onChange(e.activeID)})),a.createElement("div",{ref:t,className:r()("btb-react-button-group",e.className,"group-".concat(u.direction)),style:s(u.styleObj,["btb-react-button-group","group-".concat(u.direction)])},e.buttonList?e.buttonList.map((function(e,t){return a.createElement("div",{className:r()("group_button","button-list_".concat(t),{"button-active":u.state_activeID.value==="list_".concat(t)}),style:s(u.styleObj,["group_button","button-list_".concat(t),u.state_activeID.value===t?"button-active":""]),key:"".concat(Date.now(),"_list_").concat(t),onClick:function(){d("list_".concat(t),e)}},e)})):[],e.children?e.children.map((function(e,t){return a.createElement("div",{className:r()("group_button","button-children_".concat(t),{"button-active":u.state_activeID.value==="children_".concat(t)}),style:s(u.styleObj,["group_button","button-children_".concat(t)]),key:"".concat(Date.now(),"_children_").concat(t),onClick:function(){d("children_".concat(t),e)}},e)})):[],e.buttonList||e.children?[]:a.createElement("div",{className:"group_button button-empty",style:s(u.styleObj,["group_button","button-empty"])},"Empty"))}))},4989:function(e,t,n){"use strict";var a=n(5044),o={list:{name:"package.list.name",routename:a.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:a.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:a.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.3",updated:"2020-12-13",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:a.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:a.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},timeline:{name:"package.timeline.name",routename:a.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.1",updated:"2020-12-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},folder:{name:"package.folder.name",routename:a.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:a.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=o},7176:function(e,t,n){"use strict";var a=n(4989),o={version:a.Z.button.version,updated:a.Z.button.updated,descriptionButton:a.Z.button.description_button,descriptionGroup:a.Z.button.description_group,linkList:[{id:"github",fa:["fab","github"],url:a.Z.button.link.github},{id:"npm",fa:["fab","npm"],url:a.Z.button.link.npm}]};t.Z=o},6520:function(e,t,n){"use strict";n.d(t,{gO:function(){return y},iz:function(){return k},T3:function(){return l},yG:function(){return d},$0:function(){return f}});var a=n(7294),o=n(4184),r=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=function(e){var t=e.className,n=e.children,o=c(e,["className","children"]);return a.createElement("div",i({className:r()("module-page",t)},o),n)},s=n(7814);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=function(e){var t=e.id,n=e.title,o=void 0===n?"":n,i=e.linkList,c=e.clickBtn,l=void 0===c?function(){}:c,d=p(e,["id","title","linkList","clickBtn"]);return a.createElement("div",u({id:t,className:"module-page-head"},d),a.createElement("div",{className:"head_title"},o||""),(i||[]).map((function(e){return a.createElement("div",{className:r()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},a.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=function(e){var t=e.className,n=e.head,o=e.children,i=b(e,["className","head","children"]);return a.createElement("div",m({className:r()("module-section",t)},i),e.head?a.createElement("div",{className:"section_head"},n):[],a.createElement("div",{className:"section_body"},o))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=function(e){var t=e.title,n=e.children,o=e.className,i=v(e,["title","children","className"]);return a.createElement("div",g({className:r()("module-block",o)},i),t?a.createElement("div",{className:"block_title"},t):[],a.createElement("div",{className:"block_body"},n))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var k=function(e){var t=e.className,n=e.dividerProps;return a.createElement("div",h({className:r()("module-divider",t)},n),a.createElement("div",{className:"divider_line"}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement("div",{className:"divider_line"}))}},3462:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(7294),o=n(6593),r=n(6034),i=n(6742),c=n(2007),l=n(6520),s=n(7176);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var d=function(e){var t=u((0,a.useState)(e),2),n=t[0],o=t[1];return{activeID:n,onEntryClick:function(e,t){console.log("page",e,t),o(e)},onPrevClick:function(e){console.log("prev",e);var t=u(n.split("_"),2),a=t[0],r=t[1],i=Math.max(parseInt(r,10)-1,0);o("".concat(a,"_").concat(i))},onNextClick:function(e){console.log("next",e);var t=u(n.split("_"),2),a=t[0],r=t[1],i=Math.min(parseInt(r,10)+1,9);o("".concat(a,"_").concat(i))}}},m=function(){(0,o.v9)((function(e){return{languageSetting:e.language.languageSetting}}));var e=d("list_0");return a.createElement(l.T3,{id:"btb-pkg-button-example-pagination"},a.createElement(l.yG,{title:i.K.translate("package.button.example.pagination.title"),clickBtn:c.n,linkList:s.Z.linkList}),a.createElement(l.$0,{head:a.createElement(a.Fragment,null,"".concat(i.K.translate("package.version_colon")).concat(s.Z.version),a.createElement("br",null),"".concat(i.K.translate("package.release_colon")).concat(s.Z.updated))},a.createElement("p",null,i.K.translate("package.button.example.pagination.description"))),a.createElement(l.$0,{head:i.K.translate("package.section.example")},a.createElement(r.zx,{className:"pagination_tools",prependNode:"<< Prev",appendNode:"Next >>",onPrependClick:e.onPrevClick,onAppendClick:e.onNextClick},a.createElement(r.hE,{className:"pagination_pages",buttonList:["1","2","3","4","5","6","7","8","9"],activeID:e.activeID,onEntryClick:e.onEntryClick}))),a.createElement(l.$0,{head:i.K.translate("package.section.sourceCode")},a.createElement("pre",{className:"page_pre"},'<BTBButton\n        className="pagination_tools"\n        prependNode="<< Prev"\n        appendNode="Next >>"\n        onPrependClick={statePage.onPrevClick}\n        onAppendClick={statePage.onNextClick}\n>\n        <BTBButtonGroup\n                className="pagination_pages"\n                buttonList={buttonList}\n                activeID={statePage.activeID}\n                onEntryClick={statePage.onEntryClick}\n        />\n</BTBButton>'),a.createElement(l.gO,{title:"useState"},a.createElement("pre",{className:"page_pre"},"statePage = usePageState('list_0');\n\nconst usePageState = (dafaultPageID) => {\n        const [activeID, updatePageID] = useState(dafaultPageID);\n        return {\n                activeID,\n                onEntryClick: (id, content) => {\n                        updatePageID(id);\n                },\n                onPrevClick: (event) => {\n                        const minPage = 0;\n                        const [type, index] = activeID.split('_');\n                        const page = Math.max(parseInt(index, 10) - 1, minPage);\n                        updatePageID(`${type}_${page}`);\n                },\n                onNextClick: (event) => {\n                        const maxPage = 9;\n                        const [type, index] = activeID.split('_');\n                        const page = Math.min(parseInt(index, 10) + 1, maxPage);\n                        updatePageID(`${type}_${page}`);\n                },\n        };\n};")),a.createElement(l.gO,{title:"style: LESS"},a.createElement("pre",{className:"page_pre"},".pagination_tools {\n        .button_item{\n                &.itme-core {\n                        border-left: 1px solid #808080;\n                        border-right: 1px solid #808080;\n                        padding: 0;\n                }\n        }\n}\n.pagination_pages {\n        border: none;\n        border-radius: unset;\n        .group_button {\n                &:first-child,\n                &:last-child {\n                        padding: 0.25rem;\n                }\n                &.button-active {\n                        background-color: #cdcdcd;\n                }\n        }\n}"))))},b=function(){return a.createElement(m,null)}},2007:function(e,t,n){"use strict";n.d(t,{n:function(){return a}});var a=function(e){window.open(e.url)}}}]);