(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[4759],{1719:function(e,t,n){"use strict";var a=n(7294),o=n(4184),c=n.n(o);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,l(e,t))})),n},l=function(e,t){var n={};return"object"===r(e)&&Object.keys(e).find((function(a){if(a===t)return n=Object.assign({},e[a]),!0})),n},s=a.createContext(),d=a.createContext(),p=function(){var e=(0,a.useContext)(s);return a.createElement("thead",{className:"list_head",style:i(e.styleObj,["list_head"])},e.headData.length?a.createElement("tr",{className:"head_tr",style:i(e.styleObj,["head_tr"])},e.headData.map((function(t){return a.createElement("th",{className:c()("tr_th","th-".concat(t.id)),key:t.id,style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name)}))):[])},m=function(){var e=(0,a.useContext)(s);return a.createElement("tbody",{className:"list_body",style:i(e.styleObj,["list_body"])},e.bodyData.map((function(t,n){return a.createElement("tr",{className:c()("body_tr","tr-".concat(n)),style:i(e.styleObj,["body_tr","tr-".concat(n)]),key:n},e.headData.map((function(n){return a.createElement("td",{className:c()("tr_td","td-".concat(n.id)),style:i(e.styleObj,["tr_td","td-".concat(n.id)]),key:n.id},e.slotObj["td-".concat(n.id)]?"function"==typeof e.slotObj["td-".concat(n.id)]?e.slotObj["td-".concat(n.id)](t,n):e.slotObj["td-".concat(n.id)]:t[n.id])})))})))},u=function(){var e=(0,a.useContext)(s);return a.createElement("table",{className:"table_list",style:i(e.styleObj,["table_list"])},a.createElement(p,null),a.createElement(m,null))},b=function(){var e=(0,a.useContext)(s);return a.createElement(a.Fragment,null,e.bodyData.map((function(t,n){return a.createElement("table",{className:c()("table_info","info-".concat(n)),style:i(e.styleObj,["table_info","info-".concat(n)]),key:"".concat(t.id,"_").concat(n)},a.createElement("tbody",{className:"info_body",style:i(e.styleObj,["info_body"])},e.headData.map((function(n){return a.createElement("tr",{className:c()("body_tr","tr-".concat(n.id)),style:i(e.styleObj,["body_tr","tr-".concat(n.id)]),key:n.id},a.createElement("th",{className:c()("tr_th","th-".concat(n.id)),style:i(e.styleObj,["tr_th","th-".concat(n.id)])},e.slotObj["th-".concat(n.id)]?"function"==typeof e.slotObj["th-".concat(n.id)]?e.slotObj["th-".concat(n.id)](n):e.slotObj["th-".concat(n.id)]:n.name),a.createElement("td",{className:c()("tr_td","td-".concat(n.id)),style:i(e.styleObj,["tr_td","td-".concat(n.id)])},e.slotObj["td-".concat(n.id)]?"function"==typeof e.slotObj["td-".concat(n.id)]?e.slotObj["td-".concat(n.id)](t,n):e.slotObj["td-".concat(n.id)]:t[n.id]))}))))})))},f=function(){var e=(0,a.useContext)(s);return a.createElement("table",{className:"table_compare",style:i(e.styleObj,["table_compare"])},a.createElement("tbody",{className:"compare_body",style:i(e.styleObj,["compare_body"])},e.headData.map((function(t){return a.createElement("tr",{className:c()("body_tr","tr-".concat(t.id)),style:i(e.styleObj,["body_tr","tr-".concat(t.id)]),key:t.id},a.createElement("th",{className:c()("tr_th","th-".concat(t.id)),style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name),e.bodyData.map((function(n,o){return a.createElement("td",{className:c()("tr_td","td-".concat(t.id),"td-".concat(o)),style:i(e.styleObj,["tr_td","td-".concat(t.id),"td-".concat(o)]),key:"".concat(n.id,"_").concat(o)},e.slotObj["td-".concat(t.id)]?"function"==typeof e.slotObj["td-".concat(t.id)]?e.slotObj["td-".concat(t.id)](n,t):e.slotObj["td-".concat(t.id)]:n[t.id])})))}))))},y=a.forwardRef((function(e,t){var n,o,r={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(n=e.styleObj||{},o={},Object.keys(n).forEach((function(e){o[e]={},Object.keys(n[e]).forEach((function(t){var a=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));o[e][a]=n[e][t]}))})),o),slotObj:e.slotObj||{}},l={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return a.createElement(s.Provider,{value:r},a.createElement(d.Provider,{value:l},a.createElement("div",{ref:t,className:c()("btb-react-table",e.className),style:i(r.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return a.createElement(b,null);case"compare":return a.createElement(f,null);case"list":default:return a.createElement(u,null)}}())))}));t.Z=y},652:function(e,t,n){"use strict";var a=n(7294),o=n(4184),c=n.n(o);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,l(e,t))})),n},l=function(e,t){var n={};return"object"===r(e)&&Object.keys(e).find((function(a){if(a===t)return n=Object.assign({},e[a]),!0})),n},s=a.forwardRef((function(e,t){var n,o,r=e.position,l=void 0===r?"left":r,s=e.align,d=void 0===s?"begin":s,p=e.nodeList,m=void 0===p?[]:p,u=e.typeObj,b=void 0===u?{}:u,f=(n=e.styleObj||{},o={},Object.keys(n).forEach((function(e){o[e]={},Object.keys(n[e]).forEach((function(t){var a=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));o[e][a]=n[e][t]}))})),o);return a.createElement("div",{ref:t,className:c()("btb-react-timeline",e.className,"timeline-position-".concat(l),"timeline-align-".concat(d)),style:i(f,["btb-react-timeline","timeline-position-".concat(l),"timeline-align-".concat(d)])},m.map((function(e,t){return a.createElement("div",{className:"timeline_node",style:i(f,["timeline_node"]),key:"".concat(Date.now(),"_").concat(t)},a.createElement("div",{className:"node_point",style:i(f,["node_point"])}),a.createElement("div",{className:"node_content",style:i(f,["node_content"])},void 0!==e.type&&"function"==typeof b[e.type]?b[e.type](e):e))})))}));t.Z=s},4989:function(e,t,n){"use strict";var a=n(5044),o={list:{name:"package.list.name",routename:a.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:a.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:a.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.3",updated:"2020-12-13",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:a.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:a.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},timeline:{name:"package.timeline.name",routename:a.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.1",updated:"2020-12-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},folder:{name:"package.folder.name",routename:a.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:a.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=o},7839:function(e,t,n){"use strict";var a=n(4989),o={version:a.Z.timeline.version,updated:a.Z.timeline.updated,description:a.Z.timeline.description,linkList:[{id:"github",fa:["fab","github"],url:a.Z.timeline.link.github},{id:"npm",fa:["fab","npm"],url:a.Z.timeline.link.npm}]};t.Z=o},6520:function(e,t,n){"use strict";n.d(t,{gO:function(){return h},iz:function(){return v},T3:function(){return l},yG:function(){return m},$0:function(){return f}});var a=n(7294),o=n(4184),c=n.n(o);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=function(e){var t=e.className,n=e.children,o=i(e,["className","children"]);return a.createElement("div",r({className:c()("module-page",t)},o),n)},s=n(7814);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=function(e){var t=e.id,n=e.title,o=void 0===n?"":n,r=e.linkList,i=e.clickBtn,l=void 0===i?function(){}:i,m=p(e,["id","title","linkList","clickBtn"]);return a.createElement("div",d({id:t,className:"module-page-head"},m),a.createElement("div",{className:"head_title"},o||""),(r||[]).map((function(e){return a.createElement("div",{className:c()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},a.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=function(e){var t=e.className,n=e.head,o=e.children,r=b(e,["className","head","children"]);return a.createElement("div",u({className:c()("module-section",t)},r),e.head?a.createElement("div",{className:"section_head"},n):[],a.createElement("div",{className:"section_body"},o))};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=function(e){var t=e.title,n=e.children,o=e.className,r=g(e,["title","children","className"]);return a.createElement("div",y({className:c()("module-block",o)},r),t?a.createElement("div",{className:"block_title"},t):[],a.createElement("div",{className:"block_body"},n))};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var v=function(e){var t=e.className,n=e.dividerProps;return a.createElement("div",O({className:c()("module-divider",t)},n),a.createElement("div",{className:"divider_line"}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement("div",{className:"divider_line"}))}},4759:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(7294),o=n(6593),c=n(119),r=n(1719),i=(n(652),n(6742)),l=n(2007),s=n(6520),d=n(7839),p=[{id:"timeline",title:"<div> .btb-react-timeline .timeline-position-{left || right || x || top || bottom || y} .timeline-align-{begin || center || end}",children:[{id:"node",title:"<div> .timeline_node",children:[{id:"point",title:"<div> .node_point"},{id:"content",title:"<div> .node_content"}]}]}],m=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],u=[{title:"nodeList",type:"package.paramType.array",default:"[]",notice:"package.timeline.property.nodeList"},{title:"showPosition",type:"package.paramType.string",default:'"left"',notice:"package.timeline.property.showPosition"},{title:"showAlign",type:"package.paramType.string",default:'"begin"',notice:"package.timeline.property.showAlign"},{title:"typeObj",type:"package.paramType.object",default:"{}",notice:"package.timeline.property.typeObj"},{title:"styleObj",type:"package.paramType.object",default:"{}",notice:"package.timeline.property.styleObj"},{title:"ref",type:"useRef",default:"undefined",notice:"package.timeline.property.ref"}],b={"td-type":function(e,t){var n=e[t.id].split("||");return n.length>0?n.map((function(e){return i.K.translate(e)})).join(" || "):"useRef"===e[t.id]?"useRef":i.K.translate(e[t.id])},"td-notice":function(e,t){return i.K.translate(e[t.id])}},f=function(){return(0,o.v9)((function(e){return{languageSetting:e.language.languageSetting}})),a.createElement(s.T3,{id:"btb-pkg-timeline-basic"},a.createElement(s.yG,{title:i.K.translate("package.timeline.name"),clickBtn:l.n,linkList:d.Z.linkList}),a.createElement(s.$0,{head:a.createElement(a.Fragment,null,"".concat(i.K.translate("package.version_colon")).concat(d.Z.version),a.createElement("br",null),"".concat(i.K.translate("package.release_colon")).concat(d.Z.updated))},a.createElement("p",null,i.K.translate(d.Z.description))),a.createElement(s.$0,{head:i.K.translate("package.section.installation")},a.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-timeline\n\nimport BTBTimeline from '@blacktoolbox/react-timeline'\nimport '@blacktoolbox/react-timeline/lib/index.css'")),a.createElement(s.$0,{head:i.K.translate("package.section.render")},a.createElement("pre",{className:"page_pre"},'<BTBTimeline\n        nodeList=" Array of String or Object " \n        showPosition=" String "\n        showAlign=" String "\n        typeObj=" Object "\n        styleObj=" Object "\n/>')),a.createElement(s.$0,{head:i.K.translate("package.section.parameters")},a.createElement(r.Z,{className:"page_table",mode:"list",headData:m,bodyData:u,slotObj:b}),a.createElement(s.gO,{title:"nodeObj"},a.createElement("p",null,i.K.translate("package.timeline.parameters.nodeObj")),a.createElement("pre",{className:"page_pre"},"typeObj = {\n        type: String,\n        ...{ node data }\n}")),a.createElement(s.gO,{title:"typeObj"},a.createElement("p",null,i.K.translate("package.timeline.parameters.typeObj")),a.createElement("pre",{className:"page_pre"},"typeObj = {\n        [ type ]: ( typeObj ) => { return [] }\n}")),a.createElement(s.gO,{title:"styleObj"},a.createElement("p",null,i.K.translate("package.timeline.parameters.styleObj")),a.createElement("pre",{className:"page_pre"},"styleObj = {\n        [ className ]: { inline CSS }\n}"))),a.createElement(s.$0,{head:i.K.translate("package.section.nodeTree")},a.createElement(c.Z,{className:"page_node_tree",dataList:p})))},y=function(){return a.createElement(f,null)}},2007:function(e,t,n){"use strict";n.d(t,{n:function(){return a}});var a=function(e){window.open(e.url)}}}]);