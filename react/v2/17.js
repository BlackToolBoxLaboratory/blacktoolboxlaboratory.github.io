(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{111:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(32),r=a(40),i=a(55),l=a(54),s=a(52),d=a(51),m=a(58),u=[{name:"Name",id:"name"},{name:"Type",id:"devType"},{name:"OS",id:"osType"},{name:"IP",id:"ipAddr"},{name:"MAC",id:"macAddr"},{name:"Traffic(tx / rx)",id:"traffic"},{name:"Statue",id:"statusDesc"}],b=[{name:"Device 1",devType:"phone",osType:"ios",ipAddr:"192.168.0.50",macAddr:"B4:A2:07:44:55:2A",traffic:"1.7 MB / 45 KB",status:0,statusDesc:"Disconnected"},{name:"Device 2",devType:"notebook",osType:"windows",ipAddr:"192.168.0.52",macAddr:"B4:A2:07:44:DD:FF",traffic:"4.8 MB / 27 KB",status:0,statusDesc:"Disconnected"}],p={"th-name":"Device Name","th-ipAddr":c.a.createElement("span",null,"IP Link ",c.a.createElement(r.FontAwesomeIcon,{className:"item_button",icon:["fas","external-link-alt"],fixedWidth:!0})),"td-ipAddr":function(t,e){return c.a.createElement("a",{href:"http://".concat(t[e.id]),target:"_blank",rel:"noreferrer"},t[e.id])}},f=function(){return Object(o.c)((function(t){return{languageSetting:t.language.languageSetting}})),c.a.createElement(d.c,{id:"btb-pkg-table-example-slot"},c.a.createElement(d.d,{title:l.a.translate("package.table.example.slot.title"),clickBtn:s.a,linkList:m.a.linkList}),c.a.createElement(d.e,{head:c.a.createElement(c.a.Fragment,null,"".concat(l.a.translate("package.version_colon")).concat(m.a.version),c.a.createElement("br",null),"".concat(l.a.translate("package.release_colon")).concat(m.a.updated))},c.a.createElement("p",null,l.a.translate("package.table.example.slot.description"))),c.a.createElement(d.e,{head:l.a.translate("package.section.example")},c.a.createElement(i.a,{className:"table_sample",mode:"compare",headData:u,bodyData:b,slotObj:p})),c.a.createElement(d.e,{head:l.a.translate("package.section.sourceCode")},c.a.createElement("pre",{className:"page_pre"},'<BTBTable \n        mode="compare" \n        headData={headData} \n        bodyData={bodyData}\n        slotObj={slotObj}/>'),c.a.createElement(d.a,{title:"headData"},c.a.createElement("pre",{className:"page_pre"},"const headDate = [\n        {name : 'Name', id : 'name' },\n        {name : 'Type', id : 'devType' },\n        {name : 'OS', id : 'osType' },\n        {name : 'IP', id : 'ipAddr' },\n        {name : 'MAC', id : 'macAddr' },\n        {name : 'Traffic(tx / rx)', id : 'traffic' },\n        {name : 'Statue', id : 'statusDesc'}\n];")),c.a.createElement(d.a,{title:"bodyData"},c.a.createElement("pre",{className:"page_pre"},"const bodyData = [\n  {\n    name : 'Device 1',  \n    devType : 'phone',   \n    osType : 'ios',      \n    ipAddr : '192.168.0.50',   \n    macAddr : 'B4:A2:07:44:55:2A', \n    traffic : '1.7 MB / 45 KB', \n    status : 0, \n    statusDesc : 'Disconnected'\n  },\n  {\n    name : 'Device 2',  \n    devType : 'notebook',   \n    osType : 'windows',      \n    ipAddr : '192.168.0.52',   \n    macAddr : 'B4:A2:07:44:DD:FF', \n    traffic : '4.8 MB / 27 KB', \n    status : 0, \n    statusDesc : 'Disconnected'\n  }\n];")),c.a.createElement(d.a,{title:"slotObj"},c.a.createElement("p",null,"'th-name' shows the customized slot with pure string. 'th-ipAddr' shows how to customized with Node. And 'td-ipAddr' shows how to customized with function."),c.a.createElement("pre",{className:"page_pre"},"const slotObj = {\n        'th-name'   : 'Device Name',\n        'th-ipAddr' : (\n                <span>\n                        {'IP Link '}\n                        <FAI className=\"item_button\" icon={['fas', 'external-link-alt']} fixedWidth />\n                </span>\n        ),\n        'td-ipAddr' : (data, column) => {\n                return (\n                        <a href={`http://${data[column.id]}`} target=\"_blank\" rel=\"noreferrer\">\n                                {data[column.id]}\n                        </a>\n                );\n        }\n};"))))};e.default=function(){return c.a.createElement(f,null)}},51:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return b})),a.d(e,"e",(function(){return y})),a.d(e,"b",(function(){return g})),a.d(e,"a",(function(){return v}));var n=a(0),c=a.n(n),o=a(8),r=a.n(o);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,c=function(t,e){if(null==t)return{};var a,n,c={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(c[a]=t[a]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(c[a]=t[a])}return c}var s=function(t){var e=t.className,a=t.children,n=l(t,["className","children"]);return c.a.createElement("div",i({className:r()("module-page",e)},n),a)},d=a(40);function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var a,n,c=function(t,e){if(null==t)return{};var a,n,c={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(c[a]=t[a]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(c[a]=t[a])}return c}var b=function(t){var e=t.id,a=t.title,n=void 0===a?"":a,o=t.linkList,i=t.clickBtn,l=void 0===i?function(){}:i,s=u(t,["id","title","linkList","clickBtn"]);return c.a.createElement("div",m({id:e,className:"module-page-head"},s),c.a.createElement("div",{className:"head_title"},n||""),(o||[]).map((function(t){return c.a.createElement("div",{className:r()("head_btn","btn-".concat(e)),key:t.id,onClick:function(){l(t)}},c.a.createElement(d.FontAwesomeIcon,{icon:t.fa,fixedWidth:!0}))})))};function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function f(t,e){if(null==t)return{};var a,n,c=function(t,e){if(null==t)return{};var a,n,c={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(c[a]=t[a]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(c[a]=t[a])}return c}var y=function(t){var e=t.className,a=t.head,n=t.children,o=f(t,["className","head","children"]);return c.a.createElement("div",p({className:r()("module-section",e)},o),t.head?c.a.createElement("div",{className:"section_head"},a):[],c.a.createElement("div",{className:"section_body"},n))};function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function O(t,e){if(null==t)return{};var a,n,c=function(t,e){if(null==t)return{};var a,n,c={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(c[a]=t[a]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(c[a]=t[a])}return c}var v=function(t){var e=t.title,a=t.children,n=t.className,o=O(t,["title","children","className"]);return c.a.createElement("div",h({className:r()("module-block",n)},o),e?c.a.createElement("div",{className:"block_title"},e):[],c.a.createElement("div",{className:"block_body"},a))};function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var g=function(t){var e=t.className,a=t.dividerProps;return c.a.createElement("div",j({className:r()("module-divider",e)},a),c.a.createElement("div",{className:"divider_line"}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement("div",{className:"divider_line"}))}},52:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=function(t){window.open(t.url)}},53:function(t,e,a){"use strict";var n=a(19),c={list:{name:"package.list.name",routename:n.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.1",updated:"2020-07-07",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.b.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};e.a=c},55:function(t,e,a){"use strict";var n=a(0),c=a.n(n),o=a(8),r=a.n(o);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=function(t,e){var a;return e.forEach((function(e){a=Object.assign({},a,s(t,e))})),a},s=function(t,e){var a={};return"object"===i(t)&&Object.keys(t).find((function(n){if(n===e)return a=Object.assign({},t[n]),!0})),a},d=c.a.createContext(),m=c.a.createContext(),u=function(){var t=Object(n.useContext)(d);return c.a.createElement("thead",{className:"list_head",style:l(t.styleObj,["list_head"])},t.headData.length?c.a.createElement("tr",{className:"head_tr",style:l(t.styleObj,["head_tr"])},t.headData.map((function(e){return c.a.createElement("th",{className:r()("tr_th","th-".concat(e.id)),key:e.id,style:l(t.styleObj,["tr_th","th-".concat(e.id)])},t.slotObj["th-".concat(e.id)]?"function"==typeof t.slotObj["th-".concat(e.id)]?t.slotObj["th-".concat(e.id)](e):t.slotObj["th-".concat(e.id)]:e.name)}))):[])},b=function(){var t=Object(n.useContext)(d);return c.a.createElement("tbody",{className:"list_body",style:l(t.styleObj,["list_body"])},t.bodyData.map((function(e,a){return c.a.createElement("tr",{className:r()("body_tr","tr-".concat(a)),style:l(t.styleObj,["body_tr","tr-".concat(a)]),key:a},t.headData.map((function(a){return c.a.createElement("td",{className:r()("tr_td","td-".concat(a.id)),style:l(t.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},t.slotObj["td-".concat(a.id)]?"function"==typeof t.slotObj["td-".concat(a.id)]?t.slotObj["td-".concat(a.id)](e,a):t.slotObj["td-".concat(a.id)]:e[a.id])})))})))},p=function(){var t=Object(n.useContext)(d);return c.a.createElement("table",{className:"table_list",style:l(t.styleObj,["table_list"])},c.a.createElement(u,null),c.a.createElement(b,null))},f=function(){var t=Object(n.useContext)(d);return c.a.createElement(c.a.Fragment,null,t.bodyData.map((function(e,a){return c.a.createElement("table",{className:r()("table_info","info-".concat(a)),style:l(t.styleObj,["table_info","info-".concat(a)]),key:"".concat(e.id,"_").concat(a)},c.a.createElement("tbody",{className:"info_body",style:l(t.styleObj,["info_body"])},t.headData.map((function(a){return c.a.createElement("tr",{className:r()("body_tr","tr-".concat(a.id)),style:l(t.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},c.a.createElement("th",{className:r()("tr_th","th-".concat(a.id)),style:l(t.styleObj,["tr_th","th-".concat(a.id)])},t.slotObj["th-".concat(a.id)]?"function"==typeof t.slotObj["th-".concat(a.id)]?t.slotObj["th-".concat(a.id)](a):t.slotObj["th-".concat(a.id)]:a.name),c.a.createElement("td",{className:r()("tr_td","td-".concat(a.id)),style:l(t.styleObj,["tr_td","td-".concat(a.id)])},t.slotObj["td-".concat(a.id)]?"function"==typeof t.slotObj["td-".concat(a.id)]?t.slotObj["td-".concat(a.id)](e,a):t.slotObj["td-".concat(a.id)]:e[a.id]))}))))})))},y=function(){var t=Object(n.useContext)(d);return c.a.createElement("table",{className:"table_compare",style:l(t.styleObj,["table_compare"])},c.a.createElement("tbody",{className:"compare_body",style:l(t.styleObj,["compare_body"])},t.headData.map((function(e){return c.a.createElement("tr",{className:r()("body_tr","tr-".concat(e.id)),style:l(t.styleObj,["body_tr","tr-".concat(e.id)]),key:e.id},c.a.createElement("th",{className:r()("tr_th","th-".concat(e.id)),style:l(t.styleObj,["tr_th","th-".concat(e.id)])},t.slotObj["th-".concat(e.id)]?"function"==typeof t.slotObj["th-".concat(e.id)]?t.slotObj["th-".concat(e.id)](e):t.slotObj["th-".concat(e.id)]:e.name),t.bodyData.map((function(a,n){return c.a.createElement("td",{className:r()("tr_td","td-".concat(e.id),"td-".concat(n)),style:l(t.styleObj,["tr_td","td-".concat(e.id),"td-".concat(n)]),key:"".concat(a.id,"_").concat(n)},t.slotObj["td-".concat(e.id)]?"function"==typeof t.slotObj["td-".concat(e.id)]?t.slotObj["td-".concat(e.id)](a,e):t.slotObj["td-".concat(e.id)]:a[e.id])})))}))))},h=c.a.forwardRef((function(t,e){var a,n,o={headData:t.headData||[],bodyData:t.bodyData||[],styleObj:(a=t.styleObj||{},n={},Object.keys(a).forEach((function(t){n[t]={},Object.keys(a[t]).forEach((function(e){var c=e.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}));n[t][c]=a[t][e]}))})),n),slotObj:t.slotObj||{}},i={clickData:function(e){t.onDataClick&&t.onDataClick(e)}};return c.a.createElement(d.Provider,{value:o},c.a.createElement(m.Provider,{value:i},c.a.createElement("div",{ref:e,className:r()("btb-react-table",t.className),style:l(o.styleObj,["btb-react-table"])},function(){switch(t.mode){case"info":return c.a.createElement(f,null);case"compare":return c.a.createElement(y,null);case"list":default:return c.a.createElement(p,null)}}())))}));e.a=h},58:function(t,e,a){"use strict";var n=a(53),c={version:n.a.table.version,updated:n.a.table.updated,description:n.a.table.description,linkList:[{id:"github",fa:["fab","github"],url:n.a.table.link.github},{id:"npm",fa:["fab","npm"],url:n.a.table.link.npm}]};e.a=c}}]);