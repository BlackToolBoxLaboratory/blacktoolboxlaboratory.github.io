(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[3106],{1719:function(e,t,a){"use strict";var o=a(7294),n=a(4184),r=a.n(n);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e,t){var a;return t.forEach((function(t){a=Object.assign({},a,l(e,t))})),a},l=function(e,t){var a={};return"object"===c(e)&&Object.keys(e).find((function(o){if(o===t)return a=Object.assign({},e[o]),!0})),a},s=o.createContext(),p=o.createContext(),d=function(){var e=(0,o.useContext)(s);return o.createElement("thead",{className:"list_head",style:i(e.styleObj,["list_head"])},e.headData.length?o.createElement("tr",{className:"head_tr",style:i(e.styleObj,["head_tr"])},e.headData.map((function(t){return o.createElement("th",{className:r()("tr_th","th-".concat(t.id)),key:t.id,style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name)}))):[])},u=function(){var e=(0,o.useContext)(s);return o.createElement("tbody",{className:"list_body",style:i(e.styleObj,["list_body"])},e.bodyData.map((function(t,a){return o.createElement("tr",{className:r()("body_tr","tr-".concat(a)),style:i(e.styleObj,["body_tr","tr-".concat(a)]),key:a},e.headData.map((function(a){return o.createElement("td",{className:r()("tr_td","td-".concat(a.id)),style:i(e.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id])})))})))},m=function(){var e=(0,o.useContext)(s);return o.createElement("table",{className:"table_list",style:i(e.styleObj,["table_list"])},o.createElement(d,null),o.createElement(u,null))},b=function(){var e=(0,o.useContext)(s);return o.createElement(o.Fragment,null,e.bodyData.map((function(t,a){return o.createElement("table",{className:r()("table_info","info-".concat(a)),style:i(e.styleObj,["table_info","info-".concat(a)]),key:"".concat(t.id,"_").concat(a)},o.createElement("tbody",{className:"info_body",style:i(e.styleObj,["info_body"])},e.headData.map((function(a){return o.createElement("tr",{className:r()("body_tr","tr-".concat(a.id)),style:i(e.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},o.createElement("th",{className:r()("tr_th","th-".concat(a.id)),style:i(e.styleObj,["tr_th","th-".concat(a.id)])},e.slotObj["th-".concat(a.id)]?"function"==typeof e.slotObj["th-".concat(a.id)]?e.slotObj["th-".concat(a.id)](a):e.slotObj["th-".concat(a.id)]:a.name),o.createElement("td",{className:r()("tr_td","td-".concat(a.id)),style:i(e.styleObj,["tr_td","td-".concat(a.id)])},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id]))}))))})))},f=function(){var e=(0,o.useContext)(s);return o.createElement("table",{className:"table_compare",style:i(e.styleObj,["table_compare"])},o.createElement("tbody",{className:"compare_body",style:i(e.styleObj,["compare_body"])},e.headData.map((function(t){return o.createElement("tr",{className:r()("body_tr","tr-".concat(t.id)),style:i(e.styleObj,["body_tr","tr-".concat(t.id)]),key:t.id},o.createElement("th",{className:r()("tr_th","th-".concat(t.id)),style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name),e.bodyData.map((function(a,n){return o.createElement("td",{className:r()("tr_td","td-".concat(t.id),"td-".concat(n)),style:i(e.styleObj,["tr_td","td-".concat(t.id),"td-".concat(n)]),key:"".concat(a.id,"_").concat(n)},e.slotObj["td-".concat(t.id)]?"function"==typeof e.slotObj["td-".concat(t.id)]?e.slotObj["td-".concat(t.id)](a,t):e.slotObj["td-".concat(t.id)]:a[t.id])})))}))))},y=o.forwardRef((function(e,t){var a,n,c={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(a=e.styleObj||{},n={},Object.keys(a).forEach((function(e){n[e]={},Object.keys(a[e]).forEach((function(t){var o=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));n[e][o]=a[e][t]}))})),n),slotObj:e.slotObj||{}},l={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return o.createElement(s.Provider,{value:c},o.createElement(p.Provider,{value:l},o.createElement("div",{ref:t,className:r()("btb-react-table",e.className),style:i(c.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return o.createElement(b,null);case"compare":return o.createElement(f,null);case"list":default:return o.createElement(m,null)}}())))}));t.Z=y},4989:function(e,t,a){"use strict";var o=a(5044),n={list:{name:"package.list.name",routename:o.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.3,0",updated:"2022-09-12",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:o.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},form:{name:"package.form.name.form",routename:o.l.PACKAGES_FORM_BASIC,description:"package.form.description.basic",version:"1.0.1",updated:"2021-09-16",link:{github:"https://github.com/BlackToolBoxLaboratory/react-form",npm:"https://www.npmjs.com/package/@blacktoolbox/react-form"}},popover:{name:"package.popover.name",routename:o.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.4",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:o.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.3.3",updated:"2022-09-08",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:o.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},popup:{name:"package.popup.name",routename:o.l.PACKAGES_POPUP_BASIC,description:"package.popup.description.basic",version:"1.2.0",updated:"2022-08-22",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popup",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popup"}},timeline:{name:"package.timeline.name",routename:o.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},localstorage:{name:"package.localstorage.name",routename:o.l.PACKAGES_LOCALSTORAGE,description:"package.localstorage.description",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-sync-localstorage",npm:"https://www.npmjs.com/package/@blacktoolbox/react-sync-localstorage"}},folder:{name:"package.folder.name",routename:o.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:o.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=n},6141:function(e,t,a){"use strict";var o=a(4989),n={version:o.Z.popover.version,updated:o.Z.popover.updated,description:o.Z.popover.description,linkList:[{id:"github",fa:["fab","github"],url:o.Z.popover.link.github},{id:"npm",fa:["fab","npm"],url:o.Z.popover.link.npm}]};t.Z=n},6520:function(e,t,a){"use strict";a.d(t,{gO:function(){return h},iz:function(){return v},T3:function(){return l},yG:function(){return u},$0:function(){return f}});var o=a(7294),n=a(4184),r=a.n(n);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=function(e){var t=e.className,a=e.children,n=i(e,["className","children"]);return o.createElement("div",c({className:r()("module-page",t)},n),a)},s=a(7814);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=function(e){var t=e.id,a=e.title,n=void 0===a?"":a,c=e.linkList,i=e.clickBtn,l=void 0===i?function(){}:i,u=d(e,["id","title","linkList","clickBtn"]);return o.createElement("div",p({id:t,className:"module-page-head"},u),o.createElement("div",{className:"head_title"},n||""),(c||[]).map((function(e){return o.createElement("div",{className:r()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},o.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var f=function(e){var t=e.className,a=e.head,n=e.children,c=b(e,["className","head","children"]);return o.createElement("div",m({className:r()("module-section",t)},c),e.head?o.createElement("div",{className:"section_head"},a):[],o.createElement("div",{className:"section_body"},n))};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h=function(e){var t=e.title,a=e.children,n=e.className,c=g(e,["title","children","className"]);return o.createElement("div",y({className:r()("module-block",n)},c),t?o.createElement("div",{className:"block_title"},t):[],o.createElement("div",{className:"block_body"},a))};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var v=function(e){var t=e.className,a=e.dividerProps;return o.createElement("div",k({className:r()("module-divider",t)},a),o.createElement("div",{className:"divider_line"}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement("div",{className:"divider_line"}))}},3106:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var o=a(7294),n=a(6593),r=a(119),c=a(1719),i=a(6742),l=a(2007),s=a(6520),p=a(6141),d=[{id:"popover",title:"<div> .btb-react-popover .popover-align-{begin || center || end} .popover-arrow",children:[{id:"trigger",title:"<div> .popover_trigger"},{id:"content",title:"<div> .popover_content .content-show .content-position-{top || bottom || left || right}"}]}],u=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],m=[{title:"showState",type:"package.paramType.boolean",default:"false",notice:"package.popover.property.showState"},{title:"showPosition",type:"package.paramType.string",default:'"bottom"',notice:"package.popover.property.showPosition"},{title:"showAlign",type:"package.paramType.string",default:'"begin"',notice:"package.popover.property.showAlign"},{title:"withArrow",type:"package.paramType.boolean",default:"true",notice:"package.popover.property.withArrow"},{title:"autoDetect",type:"package.paramType.boolean",default:"true",notice:"package.popover.property.autoDetect"},{title:"trigger",type:"package.paramType.string||package.paramType.node",default:'"Trigger"',notice:"package.popover.property.trigger"},{title:"styleObj",type:"package.paramType.object",default:"{}",notice:"package.popover.property.styleObj"},{title:"onToggle",type:"package.paramType.function",default:"()=>{}",notice:"package.popover.property.onToggle"},{title:"onShow",type:"package.paramType.function",default:"()=>{}",notice:"package.popover.property.onShow"},{title:"onHide",type:"package.paramType.function",default:"()=>{}",notice:"package.popover.property.onHide"},{title:"ref",type:"useRef",default:"undefined",notice:"package.popover.property.ref"}],b={"td-type":function(e,t){var a=e[t.id].split("||");return a.length>0?a.map((function(e){return i.K.translate(e)})).join(" || "):"useRef"===e[t.id]?"useRef":i.K.translate(e[t.id])},"td-notice":function(e,t){return i.K.translate(e[t.id])}},f=function(){return(0,n.v9)((function(e){return{languageSetting:e.language.languageSetting}})),o.createElement(s.T3,{id:"btb-pkg-popover-basic"},o.createElement(s.yG,{title:i.K.translate("package.popover.name"),clickBtn:l.n,linkList:p.Z.linkList}),o.createElement(s.$0,{head:o.createElement(o.Fragment,null,"".concat(i.K.translate("package.version_colon")).concat(p.Z.version),o.createElement("br",null),"".concat(i.K.translate("package.release_colon")).concat(p.Z.updated))},o.createElement("p",null,i.K.translate(p.Z.description))),o.createElement(s.$0,{head:i.K.translate("package.section.installation")},o.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-popover\n\nimport BTBPopover from '@blacktoolbox/react-popover'\nimport '@blacktoolbox/react-popover/lib/index.css'")),o.createElement(s.$0,{head:i.K.translate("package.section.render")},o.createElement("pre",{className:"page_pre"},'<BTBPopover\n        showState=" Boolean " \n        showPosition=" String "\n        showAlign=" String "\n        withArrow=" Boolean "\n        autoDetect=" Boolean "\n        trigger=" String || Node "\n        styleObj=" Object "\n        onToggle=" function(){} "\n        onShow=" function(){} "\n        onHide=" function(){} "\n>\n        { children } \n</BTBPopover>')),o.createElement(s.$0,{head:i.K.translate("package.section.parameters")},o.createElement(c.Z,{className:"page_table",mode:"list",headData:u,bodyData:m,slotObj:b}),o.createElement(s.gO,{title:"styleObj"},o.createElement("p",null,i.K.translate("package.popover.parameters.styleObj")),o.createElement("pre",{className:"page_pre"},"styleObj = {\n        [ className ]: { inline CSS }\n}"))),o.createElement(s.$0,{head:i.K.translate("package.section.nodeTree")},o.createElement(r.Z,{className:"page_node_tree",dataList:d})))},y=function(){return o.createElement(f,null)}},2007:function(e,t,a){"use strict";a.d(t,{n:function(){return o}});var o=function(e){window.open(e.url)}}}]);