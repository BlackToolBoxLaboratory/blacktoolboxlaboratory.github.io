(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[3099],{1719:function(e,t,a){"use strict";var n=a(7294),c=a(4184),o=a.n(c);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e,t){var a;return t.forEach((function(t){a=Object.assign({},a,l(e,t))})),a},l=function(e,t){var a={};return"object"===r(e)&&Object.keys(e).find((function(n){if(n===t)return a=Object.assign({},e[n]),!0})),a},s=n.createContext(),d=n.createContext(),m=function(){var e=(0,n.useContext)(s);return n.createElement("thead",{className:"list_head",style:i(e.styleObj,["list_head"])},e.headData.length?n.createElement("tr",{className:"head_tr",style:i(e.styleObj,["head_tr"])},e.headData.map((function(t){return n.createElement("th",{className:o()("tr_th","th-".concat(t.id)),key:t.id,style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name)}))):[])},u=function(){var e=(0,n.useContext)(s);return n.createElement("tbody",{className:"list_body",style:i(e.styleObj,["list_body"])},e.bodyData.map((function(t,a){return n.createElement("tr",{className:o()("body_tr","tr-".concat(a)),style:i(e.styleObj,["body_tr","tr-".concat(a)]),key:a},e.headData.map((function(a){return n.createElement("td",{className:o()("tr_td","td-".concat(a.id)),style:i(e.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id])})))})))},p=function(){var e=(0,n.useContext)(s);return n.createElement("table",{className:"table_list",style:i(e.styleObj,["table_list"])},n.createElement(m,null),n.createElement(u,null))},b=function(){var e=(0,n.useContext)(s);return n.createElement(n.Fragment,null,e.bodyData.map((function(t,a){return n.createElement("table",{className:o()("table_info","info-".concat(a)),style:i(e.styleObj,["table_info","info-".concat(a)]),key:"".concat(t.id,"_").concat(a)},n.createElement("tbody",{className:"info_body",style:i(e.styleObj,["info_body"])},e.headData.map((function(a){return n.createElement("tr",{className:o()("body_tr","tr-".concat(a.id)),style:i(e.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},n.createElement("th",{className:o()("tr_th","th-".concat(a.id)),style:i(e.styleObj,["tr_th","th-".concat(a.id)])},e.slotObj["th-".concat(a.id)]?"function"==typeof e.slotObj["th-".concat(a.id)]?e.slotObj["th-".concat(a.id)](a):e.slotObj["th-".concat(a.id)]:a.name),n.createElement("td",{className:o()("tr_td","td-".concat(a.id)),style:i(e.styleObj,["tr_td","td-".concat(a.id)])},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id]))}))))})))},f=function(){var e=(0,n.useContext)(s);return n.createElement("table",{className:"table_compare",style:i(e.styleObj,["table_compare"])},n.createElement("tbody",{className:"compare_body",style:i(e.styleObj,["compare_body"])},e.headData.map((function(t){return n.createElement("tr",{className:o()("body_tr","tr-".concat(t.id)),style:i(e.styleObj,["body_tr","tr-".concat(t.id)]),key:t.id},n.createElement("th",{className:o()("tr_th","th-".concat(t.id)),style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name),e.bodyData.map((function(a,c){return n.createElement("td",{className:o()("tr_td","td-".concat(t.id),"td-".concat(c)),style:i(e.styleObj,["tr_td","td-".concat(t.id),"td-".concat(c)]),key:"".concat(a.id,"_").concat(c)},e.slotObj["td-".concat(t.id)]?"function"==typeof e.slotObj["td-".concat(t.id)]?e.slotObj["td-".concat(t.id)](a,t):e.slotObj["td-".concat(t.id)]:a[t.id])})))}))))},y=n.forwardRef((function(e,t){var a,c,r={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(a=e.styleObj||{},c={},Object.keys(a).forEach((function(e){c[e]={},Object.keys(a[e]).forEach((function(t){var n=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));c[e][n]=a[e][t]}))})),c),slotObj:e.slotObj||{}},l={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return n.createElement(s.Provider,{value:r},n.createElement(d.Provider,{value:l},n.createElement("div",{ref:t,className:o()("btb-react-table",e.className),style:i(r.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return n.createElement(b,null);case"compare":return n.createElement(f,null);case"list":default:return n.createElement(p,null)}}())))}));t.Z=y},4989:function(e,t,a){"use strict";var n=a(5044),c={list:{name:"package.list.name",routename:n.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.3",updated:"2020-12-13",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.3.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},timeline:{name:"package.timeline.name",routename:n.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.1",updated:"2020-12-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},folder:{name:"package.folder.name",routename:n.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=c},9092:function(e,t,a){"use strict";var n=a(4989),c={version:n.Z.table.version,updated:n.Z.table.updated,description:n.Z.table.description,linkList:[{id:"github",fa:["fab","github"],url:n.Z.table.link.github},{id:"npm",fa:["fab","npm"],url:n.Z.table.link.npm}]};t.Z=c},6520:function(e,t,a){"use strict";a.d(t,{gO:function(){return g},iz:function(){return O},T3:function(){return l},yG:function(){return u},$0:function(){return f}});var n=a(7294),c=a(4184),o=a.n(c);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=function(e){var t=e.className,a=e.children,c=i(e,["className","children"]);return n.createElement("div",r({className:o()("module-page",t)},c),a)},s=a(7814);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var u=function(e){var t=e.id,a=e.title,c=void 0===a?"":a,r=e.linkList,i=e.clickBtn,l=void 0===i?function(){}:i,u=m(e,["id","title","linkList","clickBtn"]);return n.createElement("div",d({id:t,className:"module-page-head"},u),n.createElement("div",{className:"head_title"},c||""),(r||[]).map((function(e){return n.createElement("div",{className:o()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},n.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var f=function(e){var t=e.className,a=e.head,c=e.children,r=b(e,["className","head","children"]);return n.createElement("div",p({className:o()("module-section",t)},r),e.head?n.createElement("div",{className:"section_head"},a):[],n.createElement("div",{className:"section_body"},c))};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var g=function(e){var t=e.title,a=e.children,c=e.className,r=h(e,["title","children","className"]);return n.createElement("div",y({className:o()("module-block",c)},r),t?n.createElement("div",{className:"block_title"},t):[],n.createElement("div",{className:"block_body"},a))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var O=function(e){var t=e.className,a=e.dividerProps;return n.createElement("div",v({className:o()("module-divider",t)},a),n.createElement("div",{className:"divider_line"}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement("div",{className:"divider_line"}))}},3099:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),c=a(6593),o=a(7814),r=a(1719),i=a(6742),l=a(2007),s=a(6520),d=a(9092),m=[{name:"Name",id:"name"},{name:"Type",id:"devType"},{name:"OS",id:"osType"},{name:"IP",id:"ipAddr"},{name:"MAC",id:"macAddr"},{name:"Traffic(tx / rx)",id:"traffic"},{name:"Statue",id:"statusDesc"}],u=[{name:"Device 1",devType:"phone",osType:"ios",ipAddr:"192.168.0.50",macAddr:"B4:A2:07:44:55:2A",traffic:"1.7 MB / 45 KB",status:0,statusDesc:"Disconnected"},{name:"Device 2",devType:"notebook",osType:"windows",ipAddr:"192.168.0.52",macAddr:"B4:A2:07:44:DD:FF",traffic:"4.8 MB / 27 KB",status:0,statusDesc:"Disconnected"}],p={"th-name":"Device Name","th-ipAddr":n.createElement("span",null,"IP Link ",n.createElement(o.G,{className:"item_button",icon:["fas","external-link-alt"],fixedWidth:!0})),"td-ipAddr":function(e,t){return n.createElement("a",{href:"http://".concat(e[t.id]),target:"_blank",rel:"noreferrer"},e[t.id])}},b=function(){return(0,c.v9)((function(e){return{languageSetting:e.language.languageSetting}})),n.createElement(s.T3,{id:"btb-pkg-table-example-slot"},n.createElement(s.yG,{title:i.K.translate("package.table.example.slot.title"),clickBtn:l.n,linkList:d.Z.linkList}),n.createElement(s.$0,{head:n.createElement(n.Fragment,null,"".concat(i.K.translate("package.version_colon")).concat(d.Z.version),n.createElement("br",null),"".concat(i.K.translate("package.release_colon")).concat(d.Z.updated))},n.createElement("p",null,i.K.translate("package.table.example.slot.description"))),n.createElement(s.$0,{head:i.K.translate("package.section.example")},n.createElement(r.Z,{className:"table_sample",mode:"compare",headData:m,bodyData:u,slotObj:p})),n.createElement(s.$0,{head:i.K.translate("package.section.sourceCode")},n.createElement("pre",{className:"page_pre"},'<BTBTable \n        mode="compare" \n        headData={headData} \n        bodyData={bodyData}\n        slotObj={slotObj}/>'),n.createElement(s.gO,{title:"headData"},n.createElement("pre",{className:"page_pre"},"const headDate = [\n        {name : 'Name', id : 'name' },\n        {name : 'Type', id : 'devType' },\n        {name : 'OS', id : 'osType' },\n        {name : 'IP', id : 'ipAddr' },\n        {name : 'MAC', id : 'macAddr' },\n        {name : 'Traffic(tx / rx)', id : 'traffic' },\n        {name : 'Statue', id : 'statusDesc'}\n];")),n.createElement(s.gO,{title:"bodyData"},n.createElement("pre",{className:"page_pre"},"const bodyData = [\n  {\n    name : 'Device 1',  \n    devType : 'phone',   \n    osType : 'ios',      \n    ipAddr : '192.168.0.50',   \n    macAddr : 'B4:A2:07:44:55:2A', \n    traffic : '1.7 MB / 45 KB', \n    status : 0, \n    statusDesc : 'Disconnected'\n  },\n  {\n    name : 'Device 2',  \n    devType : 'notebook',   \n    osType : 'windows',      \n    ipAddr : '192.168.0.52',   \n    macAddr : 'B4:A2:07:44:DD:FF', \n    traffic : '4.8 MB / 27 KB', \n    status : 0, \n    statusDesc : 'Disconnected'\n  }\n];")),n.createElement(s.gO,{title:"slotObj"},n.createElement("p",null,"'th-name' shows the customized slot with pure string. 'th-ipAddr' shows how to customized with Node. And 'td-ipAddr' shows how to customized with function."),n.createElement("pre",{className:"page_pre"},"const slotObj = {\n        'th-name'   : 'Device Name',\n        'th-ipAddr' : (\n                <span>\n                        {'IP Link '}\n                        <FAI className=\"item_button\" icon={['fas', 'external-link-alt']} fixedWidth />\n                </span>\n        ),\n        'td-ipAddr' : (data, column) => {\n                return (\n                        <a href={`http://${data[column.id]}`} target=\"_blank\" rel=\"noreferrer\">\n                                {data[column.id]}\n                        </a>\n                );\n        }\n};"))))},f=function(){return n.createElement(b,null)}},2007:function(e,t,a){"use strict";a.d(t,{n:function(){return n}});var n=function(e){window.open(e.url)}}}]);