(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[7802],{1719:function(e,t,a){"use strict";var n=a(7294),o=a(4184),c=a.n(o);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e,t){var a;return t.forEach((function(t){a=Object.assign({},a,l(e,t))})),a},l=function(e,t){var a={};return"object"===r(e)&&Object.keys(e).find((function(n){if(n===t)return a=Object.assign({},e[n]),!0})),a},s=n.createContext(),d=n.createContext(),p=function(){var e=(0,n.useContext)(s);return n.createElement("thead",{className:"list_head",style:i(e.styleObj,["list_head"])},e.headData.length?n.createElement("tr",{className:"head_tr",style:i(e.styleObj,["head_tr"])},e.headData.map((function(t){return n.createElement("th",{className:c()("tr_th","th-".concat(t.id)),key:t.id,style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name)}))):[])},m=function(){var e=(0,n.useContext)(s);return n.createElement("tbody",{className:"list_body",style:i(e.styleObj,["list_body"])},e.bodyData.map((function(t,a){return n.createElement("tr",{className:c()("body_tr","tr-".concat(a)),style:i(e.styleObj,["body_tr","tr-".concat(a)]),key:a},e.headData.map((function(a){return n.createElement("td",{className:c()("tr_td","td-".concat(a.id)),style:i(e.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id])})))})))},u=function(){var e=(0,n.useContext)(s);return n.createElement("table",{className:"table_list",style:i(e.styleObj,["table_list"])},n.createElement(p,null),n.createElement(m,null))},b=function(){var e=(0,n.useContext)(s);return n.createElement(n.Fragment,null,e.bodyData.map((function(t,a){return n.createElement("table",{className:c()("table_info","info-".concat(a)),style:i(e.styleObj,["table_info","info-".concat(a)]),key:"".concat(t.id,"_").concat(a)},n.createElement("tbody",{className:"info_body",style:i(e.styleObj,["info_body"])},e.headData.map((function(a){return n.createElement("tr",{className:c()("body_tr","tr-".concat(a.id)),style:i(e.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},n.createElement("th",{className:c()("tr_th","th-".concat(a.id)),style:i(e.styleObj,["tr_th","th-".concat(a.id)])},e.slotObj["th-".concat(a.id)]?"function"==typeof e.slotObj["th-".concat(a.id)]?e.slotObj["th-".concat(a.id)](a):e.slotObj["th-".concat(a.id)]:a.name),n.createElement("td",{className:c()("tr_td","td-".concat(a.id)),style:i(e.styleObj,["tr_td","td-".concat(a.id)])},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id]))}))))})))},f=function(){var e=(0,n.useContext)(s);return n.createElement("table",{className:"table_compare",style:i(e.styleObj,["table_compare"])},n.createElement("tbody",{className:"compare_body",style:i(e.styleObj,["compare_body"])},e.headData.map((function(t){return n.createElement("tr",{className:c()("body_tr","tr-".concat(t.id)),style:i(e.styleObj,["body_tr","tr-".concat(t.id)]),key:t.id},n.createElement("th",{className:c()("tr_th","th-".concat(t.id)),style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name),e.bodyData.map((function(a,o){return n.createElement("td",{className:c()("tr_td","td-".concat(t.id),"td-".concat(o)),style:i(e.styleObj,["tr_td","td-".concat(t.id),"td-".concat(o)]),key:"".concat(a.id,"_").concat(o)},e.slotObj["td-".concat(t.id)]?"function"==typeof e.slotObj["td-".concat(t.id)]?e.slotObj["td-".concat(t.id)](a,t):e.slotObj["td-".concat(t.id)]:a[t.id])})))}))))},y=n.forwardRef((function(e,t){var a,o,r={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(a=e.styleObj||{},o={},Object.keys(a).forEach((function(e){o[e]={},Object.keys(a[e]).forEach((function(t){var n=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));o[e][n]=a[e][t]}))})),o),slotObj:e.slotObj||{}},l={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return n.createElement(s.Provider,{value:r},n.createElement(d.Provider,{value:l},n.createElement("div",{ref:t,className:c()("btb-react-table",e.className),style:i(r.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return n.createElement(b,null);case"compare":return n.createElement(f,null);case"list":default:return n.createElement(u,null)}}())))}));t.Z=y},4989:function(e,t,a){"use strict";var n=a(5044),o={list:{name:"package.list.name",routename:n.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.1",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.4",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.3.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},popup:{name:"package.popup.name",routename:n.l.PACKAGES_POPUP_BASIC,description:"package.popup.description.basic",version:"1.2.0",updated:"2022-08-22",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popup",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popup"}},timeline:{name:"package.timeline.name",routename:n.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},localstorage:{name:"package.localstorage.name",routename:n.l.PACKAGES_LOCALSTORAGE,description:"package.localstorage.description",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-sync-localstorage",npm:"https://www.npmjs.com/package/@blacktoolbox/react-sync-localstorage"}},folder:{name:"package.folder.name",routename:n.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=o},7726:function(e,t,a){"use strict";var n=a(4989),o={version:n.Z.message.version,updated:n.Z.message.updated,descriptionMessage:n.Z.message.description_message,descriptionNotice:n.Z.message.description_notice,linkList:[{id:"github",fa:["fab","github"],url:n.Z.message.link.github},{id:"npm",fa:["fab","npm"],url:n.Z.message.link.npm}]};t.Z=o},6520:function(e,t,a){"use strict";a.d(t,{gO:function(){return h},iz:function(){return v},T3:function(){return l},yG:function(){return m},$0:function(){return f}});var n=a(7294),o=a(4184),c=a.n(o);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=function(e){var t=e.className,a=e.children,o=i(e,["className","children"]);return n.createElement("div",r({className:c()("module-page",t)},o),a)},s=a(7814);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=function(e){var t=e.id,a=e.title,o=void 0===a?"":a,r=e.linkList,i=e.clickBtn,l=void 0===i?function(){}:i,m=p(e,["id","title","linkList","clickBtn"]);return n.createElement("div",d({id:t,className:"module-page-head"},m),n.createElement("div",{className:"head_title"},o||""),(r||[]).map((function(e){return n.createElement("div",{className:c()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},n.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var f=function(e){var t=e.className,a=e.head,o=e.children,r=b(e,["className","head","children"]);return n.createElement("div",u({className:c()("module-section",t)},r),e.head?n.createElement("div",{className:"section_head"},a):[],n.createElement("div",{className:"section_body"},o))};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var h=function(e){var t=e.title,a=e.children,o=e.className,r=g(e,["title","children","className"]);return n.createElement("div",y({className:c()("module-block",o)},r),t?n.createElement("div",{className:"block_title"},t):[],n.createElement("div",{className:"block_body"},a))};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var v=function(e){var t=e.className,a=e.dividerProps;return n.createElement("div",k({className:c()("module-divider",t)},a),n.createElement("div",{className:"divider_line"}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement("div",{className:"divider_line"}))}},7802:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var n=a(7294),o=a(6593),c=a(119),r=a(1719),i=a(6742),l=a(2007),s=a(6520),d=a(7726),p=[{id:"notice",title:"<div> .btb-react-notice .notice-type-{type}"}],m=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],u=[{title:"type",type:"package.paramType.string",default:"''",notice:"package.message.property.type"},{title:"context",type:"package.paramType.string",default:"''",notice:"package.message.property.context"}],b={"td-type":function(e,t){var a=e[t.id].split("||");return a.length>0?a.map((function(e){return i.K.translate(e)})).join(" || "):"useRef"===e[t.id]?"useRef":i.K.translate(e[t.id])},"td-notice":function(e,t){return i.K.translate(e[t.id])}},f=function(){return(0,o.v9)((function(e){return{languageSetting:e.language.languageSetting}})),n.createElement(s.T3,{id:"btb-pkg-message-basic-notice"},n.createElement(s.yG,{title:i.K.translate("package.message.name.notice"),clickBtn:l.n,linkList:d.Z.linkList}),n.createElement(s.$0,{head:n.createElement(n.Fragment,null,"".concat(i.K.translate("package.version_colon")).concat(d.Z.version),n.createElement("br",null),"".concat(i.K.translate("package.release_colon")).concat(d.Z.updated))},n.createElement("p",null,i.K.translate(d.Z.descriptionNotice))),n.createElement(s.$0,{head:i.K.translate("package.section.installation")},n.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-message\n\nimport { Notice } from '@blacktoolbox/react-message';\nimport '@blacktoolbox/react-message/lib/index.css'")),n.createElement(s.$0,{head:i.K.translate("package.section.render")},n.createElement("pre",{className:"page_pre"},'<Notice\n        type = " String ", \n        context = " String || Node "\n>\n        {message\'s content}\n</MessageProvider>')),n.createElement(s.$0,{head:i.K.translate("package.section.parameters")},n.createElement(r.Z,{className:"page_table",mode:"list",headData:m,bodyData:u,slotObj:b})),n.createElement(s.$0,{head:i.K.translate("package.section.nodeTree")},n.createElement(c.Z,{className:"page_node_tree",dataList:p})))},y=function(){return n.createElement(f,null)}},2007:function(e,t,a){"use strict";a.d(t,{n:function(){return n}});var n=function(e){window.open(e.url)}}}]);