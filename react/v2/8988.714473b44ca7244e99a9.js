(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[8988],{1719:function(t,e,n){"use strict";var a=n(7294),o=n(4184),c=n.n(o);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=function(t,e){var n;return e.forEach((function(e){n=Object.assign({},n,l(t,e))})),n},l=function(t,e){var n={};return"object"===r(t)&&Object.keys(t).find((function(a){if(a===e)return n=Object.assign({},t[a]),!0})),n},s=a.createContext(),d=a.createContext(),p=function(){var t=(0,a.useContext)(s);return a.createElement("thead",{className:"list_head",style:i(t.styleObj,["list_head"])},t.headData.length?a.createElement("tr",{className:"head_tr",style:i(t.styleObj,["head_tr"])},t.headData.map((function(e){return a.createElement("th",{className:c()("tr_th","th-".concat(e.id)),key:e.id,style:i(t.styleObj,["tr_th","th-".concat(e.id)])},t.slotObj["th-".concat(e.id)]?"function"==typeof t.slotObj["th-".concat(e.id)]?t.slotObj["th-".concat(e.id)](e):t.slotObj["th-".concat(e.id)]:e.name)}))):[])},u=function(){var t=(0,a.useContext)(s);return a.createElement("tbody",{className:"list_body",style:i(t.styleObj,["list_body"])},t.bodyData.map((function(e,n){return a.createElement("tr",{className:c()("body_tr","tr-".concat(n)),style:i(t.styleObj,["body_tr","tr-".concat(n)]),key:n},t.headData.map((function(n){return a.createElement("td",{className:c()("tr_td","td-".concat(n.id)),style:i(t.styleObj,["tr_td","td-".concat(n.id)]),key:n.id},t.slotObj["td-".concat(n.id)]?"function"==typeof t.slotObj["td-".concat(n.id)]?t.slotObj["td-".concat(n.id)](e,n):t.slotObj["td-".concat(n.id)]:e[n.id])})))})))},m=function(){var t=(0,a.useContext)(s);return a.createElement("table",{className:"table_list",style:i(t.styleObj,["table_list"])},a.createElement(p,null),a.createElement(u,null))},b=function(){var t=(0,a.useContext)(s);return a.createElement(a.Fragment,null,t.bodyData.map((function(e,n){return a.createElement("table",{className:c()("table_info","info-".concat(n)),style:i(t.styleObj,["table_info","info-".concat(n)]),key:"".concat(e.id,"_").concat(n)},a.createElement("tbody",{className:"info_body",style:i(t.styleObj,["info_body"])},t.headData.map((function(n){return a.createElement("tr",{className:c()("body_tr","tr-".concat(n.id)),style:i(t.styleObj,["body_tr","tr-".concat(n.id)]),key:n.id},a.createElement("th",{className:c()("tr_th","th-".concat(n.id)),style:i(t.styleObj,["tr_th","th-".concat(n.id)])},t.slotObj["th-".concat(n.id)]?"function"==typeof t.slotObj["th-".concat(n.id)]?t.slotObj["th-".concat(n.id)](n):t.slotObj["th-".concat(n.id)]:n.name),a.createElement("td",{className:c()("tr_td","td-".concat(n.id)),style:i(t.styleObj,["tr_td","td-".concat(n.id)])},t.slotObj["td-".concat(n.id)]?"function"==typeof t.slotObj["td-".concat(n.id)]?t.slotObj["td-".concat(n.id)](e,n):t.slotObj["td-".concat(n.id)]:e[n.id]))}))))})))},f=function(){var t=(0,a.useContext)(s);return a.createElement("table",{className:"table_compare",style:i(t.styleObj,["table_compare"])},a.createElement("tbody",{className:"compare_body",style:i(t.styleObj,["compare_body"])},t.headData.map((function(e){return a.createElement("tr",{className:c()("body_tr","tr-".concat(e.id)),style:i(t.styleObj,["body_tr","tr-".concat(e.id)]),key:e.id},a.createElement("th",{className:c()("tr_th","th-".concat(e.id)),style:i(t.styleObj,["tr_th","th-".concat(e.id)])},t.slotObj["th-".concat(e.id)]?"function"==typeof t.slotObj["th-".concat(e.id)]?t.slotObj["th-".concat(e.id)](e):t.slotObj["th-".concat(e.id)]:e.name),t.bodyData.map((function(n,o){return a.createElement("td",{className:c()("tr_td","td-".concat(e.id),"td-".concat(o)),style:i(t.styleObj,["tr_td","td-".concat(e.id),"td-".concat(o)]),key:"".concat(n.id,"_").concat(o)},t.slotObj["td-".concat(e.id)]?"function"==typeof t.slotObj["td-".concat(e.id)]?t.slotObj["td-".concat(e.id)](n,e):t.slotObj["td-".concat(e.id)]:n[e.id])})))}))))},y=a.forwardRef((function(t,e){var n,o,r={headData:t.headData||[],bodyData:t.bodyData||[],styleObj:(n=t.styleObj||{},o={},Object.keys(n).forEach((function(t){o[t]={},Object.keys(n[t]).forEach((function(e){var a=e.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}));o[t][a]=n[t][e]}))})),o),slotObj:t.slotObj||{}},l={clickData:function(e){t.onDataClick&&t.onDataClick(e)}};return a.createElement(s.Provider,{value:r},a.createElement(d.Provider,{value:l},a.createElement("div",{ref:e,className:c()("btb-react-table",t.className),style:i(r.styleObj,["btb-react-table"])},function(){switch(t.mode){case"info":return a.createElement(b,null);case"compare":return a.createElement(f,null);case"list":default:return a.createElement(m,null)}}())))}));e.Z=y},4989:function(t,e,n){"use strict";var a=n(5044),o={list:{name:"package.list.name",routename:a.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:a.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:a.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.3",updated:"2020-12-13",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:a.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:a.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},timeline:{name:"package.timeline.name",routename:a.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.1",updated:"2020-12-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},folder:{name:"package.folder.name",routename:a.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:a.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};e.Z=o},7176:function(t,e,n){"use strict";var a=n(4989),o={version:a.Z.button.version,updated:a.Z.button.updated,descriptionButton:a.Z.button.description_button,descriptionGroup:a.Z.button.description_group,linkList:[{id:"github",fa:["fab","github"],url:a.Z.button.link.github},{id:"npm",fa:["fab","npm"],url:a.Z.button.link.npm}]};e.Z=o},6520:function(t,e,n){"use strict";n.d(e,{gO:function(){return h},iz:function(){return O},T3:function(){return l},yG:function(){return u},$0:function(){return f}});var a=n(7294),o=n(4184),c=n.n(o);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=function(t){var e=t.className,n=t.children,o=i(t,["className","children"]);return a.createElement("div",r({className:c()("module-page",e)},o),n)},s=n(7814);function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=function(t){var e=t.id,n=t.title,o=void 0===n?"":n,r=t.linkList,i=t.clickBtn,l=void 0===i?function(){}:i,u=p(t,["id","title","linkList","clickBtn"]);return a.createElement("div",d({id:e,className:"module-page-head"},u),a.createElement("div",{className:"head_title"},o||""),(r||[]).map((function(t){return a.createElement("div",{className:c()("head_btn","btn-".concat(e)),key:t.id,onClick:function(){l(t)}},a.createElement(s.G,{icon:t.fa,fixedWidth:!0}))})))};function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function b(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var f=function(t){var e=t.className,n=t.head,o=t.children,r=b(t,["className","head","children"]);return a.createElement("div",m({className:c()("module-section",e)},r),t.head?a.createElement("div",{className:"section_head"},n):[],a.createElement("div",{className:"section_body"},o))};function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function g(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var h=function(t){var e=t.title,n=t.children,o=t.className,r=g(t,["title","children","className"]);return a.createElement("div",y({className:c()("module-block",o)},r),e?a.createElement("div",{className:"block_title"},e):[],a.createElement("div",{className:"block_body"},n))};function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var O=function(t){var e=t.className,n=t.dividerProps;return a.createElement("div",k({className:c()("module-divider",e)},n),a.createElement("div",{className:"divider_line"}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement("div",{className:"divider_line"}))}},8988:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return y}});var a=n(7294),o=n(6593),c=n(119),r=n(1719),i=n(6742),l=n(2007),s=n(6520),d=n(7176),p=[{id:"button",title:"<div> .btb-react-button",children:[{id:"prepend",title:"<div> .button_item .item-prepend"},{id:"core",title:"<div> .button_item .item-core"},{id:"append",title:"<div> .button_item .item-append"}]}],u=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],m=[{title:"prependNode",type:"package.paramType.string||package.paramType.node",default:"undefined",notice:"package.button.property.prependNode"},{title:"appendNode",type:"package.paramType.string||package.paramType.node",default:"undefined",notice:"package.button.property.appendNode"},{title:"styleObj",type:"package.paramType.object",default:"{}",notice:"package.button.property.styleObj"},{title:"onClick",type:"package.paramType.function",default:"undefined",notice:"package.button.property.onButtonClick"},{title:"onPrependClick",type:"package.paramType.function",default:"undefined",notice:"package.button.property.onPrependClick"},{title:"onCoreClick",type:"package.paramType.function",default:"undefined",notice:"package.button.property.onCoreClick"},{title:"onAppendClick",type:"package.paramType.function",default:"undefined",notice:"package.button.property.onAppendClick"},{title:"ref",type:"useRef",default:"undefined",notice:"package.button.property.ref"}],b={"td-type":function(t,e){var n=t[e.id].split("||");return n.length>0?n.map((function(t){return i.K.translate(t)})).join(" || "):"useRef"===t[e.id]?"useRef":i.K.translate(t[e.id])},"td-notice":function(t,e){return i.K.translate(t[e.id])}},f=function(){return(0,o.v9)((function(t){return{languageSetting:t.language.languageSetting}})),a.createElement(s.T3,{id:"btb-pkg-button-basic-button"},a.createElement(s.yG,{title:i.K.translate("package.button.name.button"),clickBtn:l.n,linkList:d.Z.linkList}),a.createElement(s.$0,{head:a.createElement(a.Fragment,null,"".concat(i.K.translate("package.version_colon")).concat(d.Z.version),a.createElement("br",null),"".concat(i.K.translate("package.release_colon")).concat(d.Z.updated))},a.createElement("p",null,i.K.translate(d.Z.descriptionButton))),a.createElement(s.$0,{head:i.K.translate("package.section.installation")},a.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-button\n\nimport { Button } from '@blacktoolbox/react-button'\nimport '@blacktoolbox/react-button/lib/index.css'")),a.createElement(s.$0,{head:i.K.translate("package.section.render")},a.createElement("pre",{className:"page_pre"},'<BTBButton \n        prependNode=" String || Node " \n        appendNode=" String || Node "\n        styleObj=" Object " \n        onClick=" function(props){} " \n        onPrependClick=" function(props){} "\n        onCoreClick=" function(props){} "\n        onAppendClick=" function(props){} ">\n        {button\'s content}\n</BTBButton>')),a.createElement(s.$0,{head:i.K.translate("package.section.parameters")},a.createElement(r.Z,{className:"page_table",mode:"list",headData:u,bodyData:m,slotObj:b}),a.createElement(s.gO,{title:"styleObj"},a.createElement("p",null,i.K.translate("package.button.parameters.styleObj")),a.createElement("pre",{className:"page_pre"},"styleObj = {\n        [ className ]: { inline CSS }\n}"))),a.createElement(s.$0,{head:i.K.translate("package.section.nodeTree")},a.createElement(c.Z,{className:"page_node_tree",dataList:p})))},y=function(){return a.createElement(f,null)}},2007:function(t,e,n){"use strict";n.d(e,{n:function(){return a}});var a=function(t){window.open(t.url)}}}]);