(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[8988],{1719:function(t,e,a){"use strict";var n=a(7294),o=a(4184),c=a.n(o);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=function(t,e){var a;return e.forEach((function(e){a=Object.assign({},a,l(t,e))})),a},l=function(t,e){var a={};return"object"===r(t)&&Object.keys(t).find((function(n){if(n===e)return a=Object.assign({},t[n]),!0})),a},s=n.createContext(),p=n.createContext(),d=function(){var t=(0,n.useContext)(s);return n.createElement("thead",{className:"list_head",style:i(t.styleObj,["list_head"])},t.headData.length?n.createElement("tr",{className:"head_tr",style:i(t.styleObj,["head_tr"])},t.headData.map((function(e){return n.createElement("th",{className:c()("tr_th","th-".concat(e.id)),key:e.id,style:i(t.styleObj,["tr_th","th-".concat(e.id)])},t.slotObj["th-".concat(e.id)]?"function"==typeof t.slotObj["th-".concat(e.id)]?t.slotObj["th-".concat(e.id)](e):t.slotObj["th-".concat(e.id)]:e.name)}))):[])},u=function(){var t=(0,n.useContext)(s);return n.createElement("tbody",{className:"list_body",style:i(t.styleObj,["list_body"])},t.bodyData.map((function(e,a){return n.createElement("tr",{className:c()("body_tr","tr-".concat(a)),style:i(t.styleObj,["body_tr","tr-".concat(a)]),key:a},t.headData.map((function(a){return n.createElement("td",{className:c()("tr_td","td-".concat(a.id)),style:i(t.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},t.slotObj["td-".concat(a.id)]?"function"==typeof t.slotObj["td-".concat(a.id)]?t.slotObj["td-".concat(a.id)](e,a):t.slotObj["td-".concat(a.id)]:e[a.id])})))})))},m=function(){var t=(0,n.useContext)(s);return n.createElement("table",{className:"table_list",style:i(t.styleObj,["table_list"])},n.createElement(d,null),n.createElement(u,null))},b=function(){var t=(0,n.useContext)(s);return n.createElement(n.Fragment,null,t.bodyData.map((function(e,a){return n.createElement("table",{className:c()("table_info","info-".concat(a)),style:i(t.styleObj,["table_info","info-".concat(a)]),key:"".concat(e.id,"_").concat(a)},n.createElement("tbody",{className:"info_body",style:i(t.styleObj,["info_body"])},t.headData.map((function(a){return n.createElement("tr",{className:c()("body_tr","tr-".concat(a.id)),style:i(t.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},n.createElement("th",{className:c()("tr_th","th-".concat(a.id)),style:i(t.styleObj,["tr_th","th-".concat(a.id)])},t.slotObj["th-".concat(a.id)]?"function"==typeof t.slotObj["th-".concat(a.id)]?t.slotObj["th-".concat(a.id)](a):t.slotObj["th-".concat(a.id)]:a.name),n.createElement("td",{className:c()("tr_td","td-".concat(a.id)),style:i(t.styleObj,["tr_td","td-".concat(a.id)])},t.slotObj["td-".concat(a.id)]?"function"==typeof t.slotObj["td-".concat(a.id)]?t.slotObj["td-".concat(a.id)](e,a):t.slotObj["td-".concat(a.id)]:e[a.id]))}))))})))},f=function(){var t=(0,n.useContext)(s);return n.createElement("table",{className:"table_compare",style:i(t.styleObj,["table_compare"])},n.createElement("tbody",{className:"compare_body",style:i(t.styleObj,["compare_body"])},t.headData.map((function(e){return n.createElement("tr",{className:c()("body_tr","tr-".concat(e.id)),style:i(t.styleObj,["body_tr","tr-".concat(e.id)]),key:e.id},n.createElement("th",{className:c()("tr_th","th-".concat(e.id)),style:i(t.styleObj,["tr_th","th-".concat(e.id)])},t.slotObj["th-".concat(e.id)]?"function"==typeof t.slotObj["th-".concat(e.id)]?t.slotObj["th-".concat(e.id)](e):t.slotObj["th-".concat(e.id)]:e.name),t.bodyData.map((function(a,o){return n.createElement("td",{className:c()("tr_td","td-".concat(e.id),"td-".concat(o)),style:i(t.styleObj,["tr_td","td-".concat(e.id),"td-".concat(o)]),key:"".concat(a.id,"_").concat(o)},t.slotObj["td-".concat(e.id)]?"function"==typeof t.slotObj["td-".concat(e.id)]?t.slotObj["td-".concat(e.id)](a,e):t.slotObj["td-".concat(e.id)]:a[e.id])})))}))))},y=n.forwardRef((function(t,e){var a,o,r={headData:t.headData||[],bodyData:t.bodyData||[],styleObj:(a=t.styleObj||{},o={},Object.keys(a).forEach((function(t){o[t]={},Object.keys(a[t]).forEach((function(e){var n=e.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}));o[t][n]=a[t][e]}))})),o),slotObj:t.slotObj||{}},l={clickData:function(e){t.onDataClick&&t.onDataClick(e)}};return n.createElement(s.Provider,{value:r},n.createElement(p.Provider,{value:l},n.createElement("div",{ref:e,className:c()("btb-react-table",t.className),style:i(r.styleObj,["btb-react-table"])},function(){switch(t.mode){case"info":return n.createElement(b,null);case"compare":return n.createElement(f,null);case"list":default:return n.createElement(m,null)}}())))}));e.Z=y},4989:function(t,e,a){"use strict";var n=a(5044),o={list:{name:"package.list.name",routename:n.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.3,0",updated:"2022-09-12",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},form:{name:"package.form.name.form",routename:n.l.PACKAGES_FORM_BASIC,description:"package.form.description.basic",version:"1.0.1",updated:"2021-09-16",link:{github:"https://github.com/BlackToolBoxLaboratory/react-form",npm:"https://www.npmjs.com/package/@blacktoolbox/react-form"}},popover:{name:"package.popover.name",routename:n.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.4",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.3.3",updated:"2022-09-08",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},popup:{name:"package.popup.name",routename:n.l.PACKAGES_POPUP_BASIC,description:"package.popup.description.basic",version:"1.2.0",updated:"2022-08-22",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popup",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popup"}},timeline:{name:"package.timeline.name",routename:n.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},localstorage:{name:"package.localstorage.name",routename:n.l.PACKAGES_LOCALSTORAGE,description:"package.localstorage.description",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-sync-localstorage",npm:"https://www.npmjs.com/package/@blacktoolbox/react-sync-localstorage"}},folder:{name:"package.folder.name",routename:n.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};e.Z=o},7176:function(t,e,a){"use strict";var n=a(4989),o={version:n.Z.button.version,updated:n.Z.button.updated,descriptionButton:n.Z.button.description_button,descriptionGroup:n.Z.button.description_group,linkList:[{id:"github",fa:["fab","github"],url:n.Z.button.link.github},{id:"npm",fa:["fab","npm"],url:n.Z.button.link.npm}]};e.Z=o},6520:function(t,e,a){"use strict";a.d(e,{gO:function(){return k},iz:function(){return O},T3:function(){return l},yG:function(){return u},$0:function(){return f}});var n=a(7294),o=a(4184),c=a.n(o);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=function(t){var e=t.className,a=t.children,o=i(t,["className","children"]);return n.createElement("div",r({className:c()("module-page",e)},o),a)},s=a(7814);function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function d(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var u=function(t){var e=t.id,a=t.title,o=void 0===a?"":a,r=t.linkList,i=t.clickBtn,l=void 0===i?function(){}:i,u=d(t,["id","title","linkList","clickBtn"]);return n.createElement("div",p({id:e,className:"module-page-head"},u),n.createElement("div",{className:"head_title"},o||""),(r||[]).map((function(t){return n.createElement("div",{className:c()("head_btn","btn-".concat(t.id)),key:t.id,onClick:function(){l(t)}},n.createElement(s.G,{icon:t.fa,fixedWidth:!0}))})))};function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function b(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var f=function(t){var e=t.className,a=t.head,o=t.children,r=b(t,["className","head","children"]);return n.createElement("div",m({className:c()("module-section",e)},r),t.head?n.createElement("div",{className:"section_head"},a):[],n.createElement("div",{className:"section_body"},o))};function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function g(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var k=function(t){var e=t.title,a=t.children,o=t.className,r=g(t,["title","children","className"]);return n.createElement("div",y({className:c()("module-block",o)},r),e?n.createElement("div",{className:"block_title"},e):[],n.createElement("div",{className:"block_body"},a))};function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var O=function(t){var e=t.className,a=t.dividerProps;return n.createElement("div",h({className:c()("module-divider",e)},a),n.createElement("div",{className:"divider_line"}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement("div",{className:"divider_line"}))}},8988:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return y}});var n=a(7294),o=a(6593),c=a(119),r=a(1719),i=a(6742),l=a(2007),s=a(6520),p=a(7176),d=[{id:"button",title:"<button> .btb-react-button .button-disabled",children:[{id:"prepend",title:"<div> .button_item .item-prepend"},{id:"core",title:"<div> .button_item .item-core"},{id:"append",title:"<div> .button_item .item-append"}]}],u=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],m=[{title:"prependNode",type:"package.paramType.string||package.paramType.node",default:"undefined",notice:"package.button.property.prependNode"},{title:"appendNode",type:"package.paramType.string||package.paramType.node",default:"undefined",notice:"package.button.property.appendNode"},{title:"styleObj",type:"package.paramType.object",default:"{}",notice:"package.button.property.styleObj"},{title:"onClick",type:"package.paramType.function",default:"()=>{}",notice:"package.button.property.onButtonClick"},{title:"onPrependClick",type:"package.paramType.function",default:"()=>{}",notice:"package.button.property.onPrependClick"},{title:"onCoreClick",type:"package.paramType.function",default:"()=>{}",notice:"package.button.property.onCoreClick"},{title:"onAppendClick",type:"package.paramType.function",default:"()=>{}",notice:"package.button.property.onAppendClick"},{title:"disabled",type:"package.paramType.boolean",default:"undefined",notice:"package.button.property.disabled"},{title:"ref",type:"useRef",default:"undefined",notice:"package.button.property.ref"}],b={"td-type":function(t,e){var a=t[e.id].split("||");return a.length>0?a.map((function(t){return i.K.translate(t)})).join(" || "):"useRef"===t[e.id]?"useRef":i.K.translate(t[e.id])},"td-notice":function(t,e){return i.K.translate(t[e.id])}},f=function(){return(0,o.v9)((function(t){return{languageSetting:t.language.languageSetting}})),n.createElement(s.T3,{id:"btb-pkg-button-basic-button"},n.createElement(s.yG,{title:i.K.translate("package.button.name.button"),clickBtn:l.n,linkList:p.Z.linkList}),n.createElement(s.$0,{head:n.createElement(n.Fragment,null,"".concat(i.K.translate("package.version_colon")).concat(p.Z.version),n.createElement("br",null),"".concat(i.K.translate("package.release_colon")).concat(p.Z.updated))},n.createElement("p",null,i.K.translate(p.Z.descriptionButton))),n.createElement(s.$0,{head:i.K.translate("package.section.installation")},n.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-button\n\nimport { Button } from '@blacktoolbox/react-button'\nimport '@blacktoolbox/react-button/lib/index.css'")),n.createElement(s.$0,{head:i.K.translate("package.section.render")},n.createElement("pre",{className:"page_pre"},'<BTBButton \n        prependNode=" String || Node " \n        appendNode=" String || Node "\n        styleObj=" Object " \n        onClick=" function(props){} " \n        onPrependClick=" function(props){} "\n        onCoreClick=" function(props){} "\n        onAppendClick=" function(props){} "\n        disabled=" Boolean "\n>\n        { children }\n</BTBButton>')),n.createElement(s.$0,{head:i.K.translate("package.section.parameters")},n.createElement(r.Z,{className:"page_table",mode:"list",headData:u,bodyData:m,slotObj:b}),n.createElement(s.gO,{title:"styleObj"},n.createElement("p",null,i.K.translate("package.button.parameters.styleObj")),n.createElement("pre",{className:"page_pre"},"styleObj = {\n        [ className ]: { inline CSS }\n}"))),n.createElement(s.$0,{head:i.K.translate("package.section.nodeTree")},n.createElement(c.Z,{className:"page_node_tree",dataList:d})))},y=function(){return n.createElement(f,null)}},2007:function(t,e,a){"use strict";a.d(e,{n:function(){return n}});var n=function(t){window.open(t.url)}}}]);