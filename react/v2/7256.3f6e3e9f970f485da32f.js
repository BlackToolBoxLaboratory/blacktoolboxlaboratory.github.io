(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[7256],{1719:function(e,t,a){"use strict";var n=a(7294),c=a(4184),r=a.n(c);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e,t){var a;return t.forEach((function(t){a=Object.assign({},a,i(e,t))})),a},i=function(e,t){var a={};return"object"===o(e)&&Object.keys(e).find((function(n){if(n===t)return a=Object.assign({},e[n]),!0})),a},s=n.createContext(),p=n.createContext(),d=function(){var e=(0,n.useContext)(s);return n.createElement("thead",{className:"list_head",style:l(e.styleObj,["list_head"])},e.headData.length?n.createElement("tr",{className:"head_tr",style:l(e.styleObj,["head_tr"])},e.headData.map((function(t){return n.createElement("th",{className:r()("tr_th","th-".concat(t.id)),key:t.id,style:l(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name)}))):[])},m=function(){var e=(0,n.useContext)(s);return n.createElement("tbody",{className:"list_body",style:l(e.styleObj,["list_body"])},e.bodyData.map((function(t,a){return n.createElement("tr",{className:r()("body_tr","tr-".concat(a)),style:l(e.styleObj,["body_tr","tr-".concat(a)]),key:a},e.headData.map((function(a){return n.createElement("td",{className:r()("tr_td","td-".concat(a.id)),style:l(e.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id])})))})))},u=function(){var e=(0,n.useContext)(s);return n.createElement("table",{className:"table_list",style:l(e.styleObj,["table_list"])},n.createElement(d,null),n.createElement(m,null))},b=function(){var e=(0,n.useContext)(s);return n.createElement(n.Fragment,null,e.bodyData.map((function(t,a){return n.createElement("table",{className:r()("table_info","info-".concat(a)),style:l(e.styleObj,["table_info","info-".concat(a)]),key:"".concat(t.id,"_").concat(a)},n.createElement("tbody",{className:"info_body",style:l(e.styleObj,["info_body"])},e.headData.map((function(a){return n.createElement("tr",{className:r()("body_tr","tr-".concat(a.id)),style:l(e.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},n.createElement("th",{className:r()("tr_th","th-".concat(a.id)),style:l(e.styleObj,["tr_th","th-".concat(a.id)])},e.slotObj["th-".concat(a.id)]?"function"==typeof e.slotObj["th-".concat(a.id)]?e.slotObj["th-".concat(a.id)](a):e.slotObj["th-".concat(a.id)]:a.name),n.createElement("td",{className:r()("tr_td","td-".concat(a.id)),style:l(e.styleObj,["tr_td","td-".concat(a.id)])},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id]))}))))})))},y=function(){var e=(0,n.useContext)(s);return n.createElement("table",{className:"table_compare",style:l(e.styleObj,["table_compare"])},n.createElement("tbody",{className:"compare_body",style:l(e.styleObj,["compare_body"])},e.headData.map((function(t){return n.createElement("tr",{className:r()("body_tr","tr-".concat(t.id)),style:l(e.styleObj,["body_tr","tr-".concat(t.id)]),key:t.id},n.createElement("th",{className:r()("tr_th","th-".concat(t.id)),style:l(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name),e.bodyData.map((function(a,c){return n.createElement("td",{className:r()("tr_td","td-".concat(t.id),"td-".concat(c)),style:l(e.styleObj,["tr_td","td-".concat(t.id),"td-".concat(c)]),key:"".concat(a.id,"_").concat(c)},e.slotObj["td-".concat(t.id)]?"function"==typeof e.slotObj["td-".concat(t.id)]?e.slotObj["td-".concat(t.id)](a,t):e.slotObj["td-".concat(t.id)]:a[t.id])})))}))))},f=n.forwardRef((function(e,t){var a,c,o={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(a=e.styleObj||{},c={},Object.keys(a).forEach((function(e){c[e]={},Object.keys(a[e]).forEach((function(t){var n=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));c[e][n]=a[e][t]}))})),c),slotObj:e.slotObj||{}},i={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return n.createElement(s.Provider,{value:o},n.createElement(p.Provider,{value:i},n.createElement("div",{ref:t,className:r()("btb-react-table",e.className),style:l(o.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return n.createElement(b,null);case"compare":return n.createElement(y,null);case"list":default:return n.createElement(u,null)}}())))}));t.Z=f},4989:function(e,t,a){"use strict";var n=a(5044),c={list:{name:"package.list.name",routename:n.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.3,0",updated:"2022-09-12",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},form:{name:"package.form.name.form",routename:n.l.PACKAGES_FORM_BASIC,description:"package.form.description.basic",version:"1.0.1",updated:"2021-09-16",link:{github:"https://github.com/BlackToolBoxLaboratory/react-form",npm:"https://www.npmjs.com/package/@blacktoolbox/react-form"}},popover:{name:"package.popover.name",routename:n.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.4",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.3.3",updated:"2022-09-08",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},popup:{name:"package.popup.name",routename:n.l.PACKAGES_POPUP_BASIC,description:"package.popup.description.basic",version:"1.2.0",updated:"2022-08-22",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popup",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popup"}},timeline:{name:"package.timeline.name",routename:n.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},localstorage:{name:"package.localstorage.name",routename:n.l.PACKAGES_LOCALSTORAGE,description:"package.localstorage.description",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-sync-localstorage",npm:"https://www.npmjs.com/package/@blacktoolbox/react-sync-localstorage"}},folder:{name:"package.folder.name",routename:n.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=c},6673:function(e,t,a){"use strict";var n=a(4989),c={version:n.Z.list.version,updated:n.Z.list.updated,description:n.Z.list.description,linkList:[{id:"github",fa:["fab","github"],url:n.Z.list.link.github},{id:"npm",fa:["fab","npm"],url:n.Z.list.link.npm}]};t.Z=c},6520:function(e,t,a){"use strict";a.d(t,{gO:function(){return k},iz:function(){return O},T3:function(){return i},yG:function(){return m},$0:function(){return y}});var n=a(7294),c=a(4184),r=a.n(c);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=function(e){var t=e.className,a=e.children,c=l(e,["className","children"]);return n.createElement("div",o({className:r()("module-page",t)},c),a)},s=a(7814);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var m=function(e){var t=e.id,a=e.title,c=void 0===a?"":a,o=e.linkList,l=e.clickBtn,i=void 0===l?function(){}:l,m=d(e,["id","title","linkList","clickBtn"]);return n.createElement("div",p({id:t,className:"module-page-head"},m),n.createElement("div",{className:"head_title"},c||""),(o||[]).map((function(e){return n.createElement("div",{className:r()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){i(e)}},n.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var y=function(e){var t=e.className,a=e.head,c=e.children,o=b(e,["className","head","children"]);return n.createElement("div",u({className:r()("module-section",t)},o),e.head?n.createElement("div",{className:"section_head"},a):[],n.createElement("div",{className:"section_body"},c))};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var k=function(e){var t=e.title,a=e.children,c=e.className,o=g(e,["title","children","className"]);return n.createElement("div",f({className:r()("module-block",c)},o),t?n.createElement("div",{className:"block_title"},t):[],n.createElement("div",{className:"block_body"},a))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var O=function(e){var t=e.className,a=e.dividerProps;return n.createElement("div",h({className:r()("module-divider",t)},a),n.createElement("div",{className:"divider_line"}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement("div",{className:"divider_line"}))}},7256:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var n=a(7294),c=a(6593),r=a(119),o=a(1719),l=a(6742),i=a(2007),s=a(6520),p=a(6673),d=[{id:"list",title:"<div> .btb-react-list",children:[{id:"layer",title:"<ul> .btb-react-list-layer .layer-[layer count]",children:[{id:"container",title:"<li> .layer-container .layer-[layer count]",children:[{id:"entry",title:"<div> .container_entry .entry-[entryObj.id] .entry-active",children:[{id:"title",title:"<div> .entry_title",children:[{id:"link",title:"<a> .title_link"}]},{id:"collapseBtn",title:"<div> .entry_collapseBtn .collapseBtn-default",children:[{id:"arrow",title:"<div> .collapseBtn_arrow"}]}]},{id:"sublayer",title:"<ul>.btb-vue-list-layer.layer-[layer count + 1]"}]}]}]}],m=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],u=[{name:"Name",id:"title"},{name:"Type",id:"type"},{name:"Notice",id:"notice"}],b=[{title:"dataList",type:"package.paramType.array",default:"[]",notice:"package.list.property.dataList"},{title:"activeID",type:"package.paramType.string",default:"undefined",notice:"package.list.property.activeID"},{title:"defaultActiveID",type:"package.paramType.string",default:"undefined",notice:"package.list.property.defaultActiveID"},{title:"collapseEnable",type:"package.paramType.boolean",default:"false",notice:"package.list.property.collapseEnable"},{title:"styleObj",type:"package.paramType.object",default:"{}",notice:"package.list.property.styleObj"},{title:"slotObj",type:"package.paramType.object",default:"{}",notice:"package.list.property.slotObj"},{title:"onEntryClick",type:"package.paramType.function",default:"()=>{}",notice:"package.list.property.onEntryClick"},{title:"onToggle",type:"package.paramType.function",default:"()=>{}",notice:"package.list.property.onToggle"},{title:"ref",type:"useRef",default:"undefined",notice:"package.list.property.ref"}],y=[{title:"id",type:"package.paramType.string",notice:"package.list.entryObj.id"},{title:"title",type:"package.paramType.string||package.paramType.node",notice:"package.list.entryObj.title"},{title:"href",type:"package.paramType.string",notice:"package.list.entryObj.href"},{title:"defaultCollapsed",type:"package.paramType.string",notice:"package.list.entryObj.defaultCollapsed"},{title:"children",type:"package.paramType.array",notice:"package.list.entryObj.children"}],f=[{title:"[ id of entryObj ]",type:"package.paramType.string||package.paramType.node||package.paramType.function",notice:"package.list.slotObj.entryObj"}],g={"td-type":function(e,t){var a=e[t.id].split("||");return a.length>0?a.map((function(e){return l.K.translate(e)})).join(" || "):"useRef"===e[t.id]?"useRef":l.K.translate(e[t.id])},"td-notice":function(e,t){return l.K.translate(e[t.id])}},k=function(){return(0,c.v9)((function(e){return{languageSetting:e.language.languageSetting}})),n.createElement(s.T3,{id:"btb-pkg-list-basic"},n.createElement(s.yG,{title:l.K.translate("package.list.name"),clickBtn:i.n,linkList:p.Z.linkList}),n.createElement(s.$0,{head:n.createElement(n.Fragment,null,"".concat(l.K.translate("package.version_colon")).concat(p.Z.version),n.createElement("br",null),"".concat(l.K.translate("package.release_colon")).concat(p.Z.updated))},n.createElement("p",null,l.K.translate(p.Z.description))),n.createElement(s.$0,{head:l.K.translate("package.section.installation")},n.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-list\n\nimport BTBList from '@blacktoolbox/react-list'\nimport '@blacktoolbox/react-list/lib/index.css'")),n.createElement(s.$0,{head:l.K.translate("package.section.render")},n.createElement("pre",{className:"page_pre"},'<BTBList\n        dataList=" Array of entryObj " \n        defaultActiveID=" String "\n        activeID=" String "\n        collapseEnable=" Boolean "\n        styleObj=" Object "\n        slotObj=" Object "\n        onEntryClick=" function(entryObj){} "\n        onToggle=" function(entryObj){} "/>')),n.createElement(s.$0,{head:l.K.translate("package.section.parameters")},n.createElement(o.Z,{className:"page_table",mode:"list",headData:m,bodyData:b,slotObj:g}),n.createElement(s.gO,{title:"entryObj"},n.createElement("p",null,l.K.translate("package.list.parameters.entryObj")),n.createElement("pre",{className:"page_pre"},"entryObj = {\n        id: '',\n        title: '',\n        href: '',\n        defaultCollapsed: false,\n        children: []\n}"),n.createElement(o.Z,{className:"page_table",mode:"list",headData:u,bodyData:y,slotObj:g})),n.createElement(s.gO,{title:"styleObj"},n.createElement("p",null,l.K.translate("package.list.parameters.styleObj")),n.createElement("pre",{className:"page_pre"},"styleObj = {\n        [ className ]: { inline CSS }\n}")),n.createElement(s.gO,{title:"slotObj"},n.createElement("p",null,l.K.translate("package.list.parameters.slotObj")),n.createElement("pre",{className:"page_pre"},"slotObj = {\n        [ entryObj.id ]: ''\n}"),n.createElement(o.Z,{className:"page_table",mode:"list",headData:u,bodyData:f,slotObj:g}))),n.createElement(s.$0,{head:l.K.translate("package.section.nodeTree")},n.createElement(r.Z,{className:"page_node_tree",dataList:d}),n.createElement("p",null,l.K.translate("package.list.nodeTree.notice"))))},h=function(){return n.createElement(k,null)}},2007:function(e,t,a){"use strict";a.d(t,{n:function(){return n}});var n=function(e){window.open(e.url)}}}]);