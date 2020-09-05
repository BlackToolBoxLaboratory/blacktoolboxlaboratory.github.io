(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a(57),l=a(55),i=a(54),d=a(52),s=a(51),b=a(58),p=[{id:"list",title:"<dib> .btb-react-table",children:[{id:"table",title:"<table> .table_list]",children:[{id:"thead",title:"<thead> .list_head",children:[{id:"thead_tr",title:"<tr> .head_tr",children:[{id:"tr_th",title:"<th> .tr_th .th_[headObj.id]"}]}]},{id:"tbody",title:"<tbody> .list_body",children:[{id:"body_tr",title:"<tr> .body_tr .tr_[data order]",children:[{id:"tr_td",title:"<th> .tr_td .td_[headObj.id]"}]}]}]}]}],m=[{id:"table",title:"<div> .btb-react-table",children:[{id:"info",title:"<table> .table_info .info-[data order]",children:[{id:"tbody",title:"<tbody> .info_body",children:[{id:"tr",title:"<tr> .body_tr .tr-[headObj.id]",children:[{id:"th",title:"<th> .tr_th .th-[headObj.id]"},{id:"td",title:"<td> .tr_td .td-[headObj.id]"}]}]}]}]}],u=[{id:"table",title:"<div> .btb-react-table",children:[{id:"compare",title:"<table> .table_compare",children:[{id:"tbody",title:"<tbody> .compare_body",children:[{id:"tr",title:"<tr> .tbody_tr .tr-[headObj.id]",children:[{id:"th",title:"<th> .tr_th .th-[headObj.id]"},{id:"td",title:"<td> .tr_td .td-[headObj.id] .td-[data order]"}]}]}]}]}],y=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],f=[{name:"Name",id:"title"},{name:"Type",id:"type"},{name:"Notice",id:"notice"}],h=[{title:"headData",type:"package.paramType.array",default:"[]",notice:"package.table.property.headData"},{title:"bodyData",type:"package.paramType.array",default:"[]",notice:"package.table.property.bodyData"},{title:"mode",type:"package.paramType.string",default:'"list"',notice:"package.table.property.mode"},{title:"styleObj",type:"package.paramType.object",default:"{}",notice:"package.table.property.styleObj"},{title:"slotObj",type:"package.paramType.object",default:"{}",notice:"package.table.property.slotObj"},{title:"onDataClick",type:"package.paramType.function",default:"undefined",notice:"package.table.property.onDataClick"},{title:"ref",type:"useRef",default:"undefined",notice:"package.table.property.ref"}],O=[{title:"id",type:"package.paramType.string",default:"[]",notice:"package.table.headObj.id"},{title:"name",type:"package.paramType.string",default:"[]",notice:"package.table.headObj.name"}],j=[{title:"[ th_${ headObj.id } ]",type:"package.paramType.string||package.paramType.node||package.paramType.function",notice:"package.table.slotObj.th"},{title:"[ td_${ headObj.id } ]",type:"package.paramType.string||package.paramType.node||package.paramType.function",notice:"package.table.slotObj.td"}],g={"td-type":function(e,t){var a=e[t.id].split("||");return a.length>0?a.map((function(e){return i.a.translate(e)})).join(" || "):"useRef"===e[t.id]?"useRef":i.a.translate(e[t.id])},"td-notice":function(e,t){return i.a.translate(e[t.id])}},k=function(){return Object(c.c)((function(e){return{languageSetting:e.language.languageSetting}})),r.a.createElement(s.c,{id:"btb-pkg-table-basic"},r.a.createElement(s.d,{title:i.a.translate("package.table.name"),clickBtn:d.a,linkList:b.a.linkList}),r.a.createElement(s.e,{head:r.a.createElement(r.a.Fragment,null,"".concat(i.a.translate("package.version_colon")).concat(b.a.version),r.a.createElement("br",null),"".concat(i.a.translate("package.release_colon")).concat(b.a.updated))},r.a.createElement("p",null,i.a.translate(b.a.description))),r.a.createElement(s.e,{head:i.a.translate("package.section.installation")},r.a.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-table\n\nimport BTBTable from '@blacktoolbox/react-table'\nimport '@blacktoolbox/react-table/lib/index.css'")),r.a.createElement(s.e,{head:i.a.translate("package.section.render")},r.a.createElement("pre",{className:"page_pre"},'<BTBTable\n        headData=" Array of headObj" \n        bodyData=" Array of bodyObj "\n        mode=" String "\n        styleObj=" Object "\n        slotObj=" Object "\n        onDataClick=" function(bodyObj){} "/>')),r.a.createElement(s.e,{head:i.a.translate("package.section.parameters")},r.a.createElement(l.a,{className:"page_table",mode:"list",headData:y,bodyData:h,slotObj:g}),r.a.createElement(s.a,{title:"headObj"},r.a.createElement("pre",{className:"page_pre"},"headObj = {\n        id: '',\n        name: ''\n}"),r.a.createElement(l.a,{className:"page_table",mode:"list",headData:f,bodyData:O,slotObj:g})),r.a.createElement(s.a,{title:"bodyObj"},r.a.createElement("pre",{className:"page_pre"},"bodyObj = {\n        [ headObj.index ] : ''\n}")),r.a.createElement(s.a,{title:"styleObj"},r.a.createElement("p",null,i.a.translate("package.table.parameters.styleObj")),r.a.createElement("pre",{className:"page_pre"},"styleObj = {\n        [ className ]: { inline CSS }\n}")),r.a.createElement(s.a,{title:"slotObj"},r.a.createElement("p",null,i.a.translate("package.table.parameters.slotObj")),r.a.createElement("pre",{className:"page_pre"},"slotObj = {\n        [ `th_${ headObj.id }` ] : '',\n        [ `td_${ headObj.id }` ] : ''\n}"),r.a.createElement(l.a,{className:"page_table",mode:"list",headData:f,bodyData:j,slotObj:g}))),r.a.createElement(s.e,{head:i.a.translate("package.section.nodeTree")},r.a.createElement(s.a,{title:i.a.translate("package.table.nodeTree.list")},r.a.createElement(o.a,{className:"page_node_tree",dataList:p}),r.a.createElement("p",null,i.a.translate("package.table.nodeTree.notice"))),r.a.createElement(s.a,{title:i.a.translate("package.table.nodeTree.info")},r.a.createElement(o.a,{className:"page_node_tree",dataList:m}),r.a.createElement("p",null,i.a.translate("package.table.nodeTree.notice"))),r.a.createElement(s.a,{title:i.a.translate("package.table.nodeTree.compare")},r.a.createElement(o.a,{className:"page_node_tree",dataList:u}),r.a.createElement("p",null,i.a.translate("package.table.nodeTree.notice")))))};t.default=function(){return r.a.createElement(k,null)}},51:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return f})),a.d(t,"b",(function(){return k})),a.d(t,"a",(function(){return j}));var n=a(0),r=a.n(n),c=a(8),o=a.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=function(e){var t=e.className,a=e.children,n=i(e,["className","children"]);return r.a.createElement("div",l({className:o()("module-page",t)},n),a)},s=a(40);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=function(e){var t=e.id,a=e.title,n=void 0===a?"":a,c=e.linkList,l=e.clickBtn,i=void 0===l?function(){}:l,d=p(e,["id","title","linkList","clickBtn"]);return r.a.createElement("div",b({id:t,className:"module-page-head"},d),r.a.createElement("div",{className:"head_title"},n||""),(c||[]).map((function(e){return r.a.createElement("div",{className:o()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){i(e)}},r.a.createElement(s.FontAwesomeIcon,{icon:e.fa,fixedWidth:!0}))})))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f=function(e){var t=e.className,a=e.head,n=e.children,c=y(e,["className","head","children"]);return r.a.createElement("div",u({className:o()("module-section",t)},c),e.head?r.a.createElement("div",{className:"section_head"},a):[],r.a.createElement("div",{className:"section_body"},n))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var j=function(e){var t=e.title,a=e.children,n=e.className,c=O(e,["title","children","className"]);return r.a.createElement("div",h({className:o()("module-block",n)},c),t?r.a.createElement("div",{className:"block_title"},t):[],r.a.createElement("div",{className:"block_body"},a))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var k=function(e){var t=e.className,a=e.dividerProps;return r.a.createElement("div",g({className:o()("module-divider",t)},a),r.a.createElement("div",{className:"divider_line"}),r.a.createElement(s.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement(s.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement(s.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement(s.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement(s.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement(s.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement(s.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement("div",{className:"divider_line"}))}},52:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){window.open(e.url)}},53:function(e,t,a){"use strict";var n=a(19),r={list:{name:"package.list.name",routename:n.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.1",updated:"2020-07-07",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.b.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.a=r},55:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(8),o=a.n(c);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e,t){var a;return t.forEach((function(t){a=Object.assign({},a,d(e,t))})),a},d=function(e,t){var a={};return"object"===l(e)&&Object.keys(e).find((function(n){if(n===t)return a=Object.assign({},e[n]),!0})),a},s=r.a.createContext(),b=r.a.createContext(),p=function(){var e=Object(n.useContext)(s);return r.a.createElement("thead",{className:"list_head",style:i(e.styleObj,["list_head"])},e.headData.length?r.a.createElement("tr",{className:"head_tr",style:i(e.styleObj,["head_tr"])},e.headData.map((function(t){return r.a.createElement("th",{className:o()("tr_th","th-".concat(t.id)),key:t.id,style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name)}))):[])},m=function(){var e=Object(n.useContext)(s);return r.a.createElement("tbody",{className:"list_body",style:i(e.styleObj,["list_body"])},e.bodyData.map((function(t,a){return r.a.createElement("tr",{className:o()("body_tr","tr-".concat(a)),style:i(e.styleObj,["body_tr","tr-".concat(a)]),key:a},e.headData.map((function(a){return r.a.createElement("td",{className:o()("tr_td","td-".concat(a.id)),style:i(e.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id])})))})))},u=function(){var e=Object(n.useContext)(s);return r.a.createElement("table",{className:"table_list",style:i(e.styleObj,["table_list"])},r.a.createElement(p,null),r.a.createElement(m,null))},y=function(){var e=Object(n.useContext)(s);return r.a.createElement(r.a.Fragment,null,e.bodyData.map((function(t,a){return r.a.createElement("table",{className:o()("table_info","info-".concat(a)),style:i(e.styleObj,["table_info","info-".concat(a)]),key:"".concat(t.id,"_").concat(a)},r.a.createElement("tbody",{className:"info_body",style:i(e.styleObj,["info_body"])},e.headData.map((function(a){return r.a.createElement("tr",{className:o()("body_tr","tr-".concat(a.id)),style:i(e.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},r.a.createElement("th",{className:o()("tr_th","th-".concat(a.id)),style:i(e.styleObj,["tr_th","th-".concat(a.id)])},e.slotObj["th-".concat(a.id)]?"function"==typeof e.slotObj["th-".concat(a.id)]?e.slotObj["th-".concat(a.id)](a):e.slotObj["th-".concat(a.id)]:a.name),r.a.createElement("td",{className:o()("tr_td","td-".concat(a.id)),style:i(e.styleObj,["tr_td","td-".concat(a.id)])},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id]))}))))})))},f=function(){var e=Object(n.useContext)(s);return r.a.createElement("table",{className:"table_compare",style:i(e.styleObj,["table_compare"])},r.a.createElement("tbody",{className:"compare_body",style:i(e.styleObj,["compare_body"])},e.headData.map((function(t){return r.a.createElement("tr",{className:o()("body_tr","tr-".concat(t.id)),style:i(e.styleObj,["body_tr","tr-".concat(t.id)]),key:t.id},r.a.createElement("th",{className:o()("tr_th","th-".concat(t.id)),style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name),e.bodyData.map((function(a,n){return r.a.createElement("td",{className:o()("tr_td","td-".concat(t.id),"td-".concat(n)),style:i(e.styleObj,["tr_td","td-".concat(t.id),"td-".concat(n)]),key:"".concat(a.id,"_").concat(n)},e.slotObj["td-".concat(t.id)]?"function"==typeof e.slotObj["td-".concat(t.id)]?e.slotObj["td-".concat(t.id)](a,t):e.slotObj["td-".concat(t.id)]:a[t.id])})))}))))},h=r.a.forwardRef((function(e,t){var a,n,c={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(a=e.styleObj||{},n={},Object.keys(a).forEach((function(e){n[e]={},Object.keys(a[e]).forEach((function(t){var r=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));n[e][r]=a[e][t]}))})),n),slotObj:e.slotObj||{}},l={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return r.a.createElement(s.Provider,{value:c},r.a.createElement(b.Provider,{value:l},r.a.createElement("div",{ref:t,className:o()("btb-react-table",e.className),style:i(c.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return r.a.createElement(y,null);case"compare":return r.a.createElement(f,null);case"list":default:return r.a.createElement(u,null)}}())))}));t.a=h},58:function(e,t,a){"use strict";var n=a(53),r={version:n.a.table.version,updated:n.a.table.updated,description:n.a.table.description,linkList:[{id:"github",fa:["fab","github"],url:n.a.table.link.github},{id:"npm",fa:["fab","npm"],url:n.a.table.link.npm}]};t.a=r}}]);