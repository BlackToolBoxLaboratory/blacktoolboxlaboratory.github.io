(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[6430],{1719:function(e,t,a){"use strict";var n=a(7294),o=a(4184),c=a.n(o);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e,t){var a;return t.forEach((function(t){a=Object.assign({},a,l(e,t))})),a},l=function(e,t){var a={};return"object"===r(e)&&Object.keys(e).find((function(n){if(n===t)return a=Object.assign({},e[n]),!0})),a},s=n.createContext(),d=n.createContext(),p=function(){var e=(0,n.useContext)(s);return n.createElement("thead",{className:"list_head",style:i(e.styleObj,["list_head"])},e.headData.length?n.createElement("tr",{className:"head_tr",style:i(e.styleObj,["head_tr"])},e.headData.map((function(t){return n.createElement("th",{className:c()("tr_th","th-".concat(t.id)),key:t.id,style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name)}))):[])},m=function(){var e=(0,n.useContext)(s);return n.createElement("tbody",{className:"list_body",style:i(e.styleObj,["list_body"])},e.bodyData.map((function(t,a){return n.createElement("tr",{className:c()("body_tr","tr-".concat(a)),style:i(e.styleObj,["body_tr","tr-".concat(a)]),key:a},e.headData.map((function(a){return n.createElement("td",{className:c()("tr_td","td-".concat(a.id)),style:i(e.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id])})))})))},u=function(){var e=(0,n.useContext)(s);return n.createElement("table",{className:"table_list",style:i(e.styleObj,["table_list"])},n.createElement(p,null),n.createElement(m,null))},b=function(){var e=(0,n.useContext)(s);return n.createElement(n.Fragment,null,e.bodyData.map((function(t,a){return n.createElement("table",{className:c()("table_info","info-".concat(a)),style:i(e.styleObj,["table_info","info-".concat(a)]),key:"".concat(t.id,"_").concat(a)},n.createElement("tbody",{className:"info_body",style:i(e.styleObj,["info_body"])},e.headData.map((function(a){return n.createElement("tr",{className:c()("body_tr","tr-".concat(a.id)),style:i(e.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},n.createElement("th",{className:c()("tr_th","th-".concat(a.id)),style:i(e.styleObj,["tr_th","th-".concat(a.id)])},e.slotObj["th-".concat(a.id)]?"function"==typeof e.slotObj["th-".concat(a.id)]?e.slotObj["th-".concat(a.id)](a):e.slotObj["th-".concat(a.id)]:a.name),n.createElement("td",{className:c()("tr_td","td-".concat(a.id)),style:i(e.styleObj,["tr_td","td-".concat(a.id)])},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id]))}))))})))},f=function(){var e=(0,n.useContext)(s);return n.createElement("table",{className:"table_compare",style:i(e.styleObj,["table_compare"])},n.createElement("tbody",{className:"compare_body",style:i(e.styleObj,["compare_body"])},e.headData.map((function(t){return n.createElement("tr",{className:c()("body_tr","tr-".concat(t.id)),style:i(e.styleObj,["body_tr","tr-".concat(t.id)]),key:t.id},n.createElement("th",{className:c()("tr_th","th-".concat(t.id)),style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name),e.bodyData.map((function(a,o){return n.createElement("td",{className:c()("tr_td","td-".concat(t.id),"td-".concat(o)),style:i(e.styleObj,["tr_td","td-".concat(t.id),"td-".concat(o)]),key:"".concat(a.id,"_").concat(o)},e.slotObj["td-".concat(t.id)]?"function"==typeof e.slotObj["td-".concat(t.id)]?e.slotObj["td-".concat(t.id)](a,t):e.slotObj["td-".concat(t.id)]:a[t.id])})))}))))},y=n.forwardRef((function(e,t){var a,o,r={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(a=e.styleObj||{},o={},Object.keys(a).forEach((function(e){o[e]={},Object.keys(a[e]).forEach((function(t){var n=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));o[e][n]=a[e][t]}))})),o),slotObj:e.slotObj||{}},l={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return n.createElement(s.Provider,{value:r},n.createElement(d.Provider,{value:l},n.createElement("div",{ref:t,className:c()("btb-react-table",e.className),style:i(r.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return n.createElement(b,null);case"compare":return n.createElement(f,null);case"list":default:return n.createElement(u,null)}}())))}));t.Z=y},4989:function(e,t,a){"use strict";var n=a(5044),o={list:{name:"package.list.name",routename:n.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.3,0",updated:"2022-09-12",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},form:{name:"package.form.name.form",routename:n.l.PACKAGES_FORM_BASIC,description:"package.form.description.basic",version:"1.0.1",updated:"2021-09-16",link:{github:"https://github.com/BlackToolBoxLaboratory/react-form",npm:"https://www.npmjs.com/package/@blacktoolbox/react-form"}},popover:{name:"package.popover.name",routename:n.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.4",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.3.3",updated:"2022-09-08",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},popup:{name:"package.popup.name",routename:n.l.PACKAGES_POPUP_BASIC,description:"package.popup.description.basic",version:"1.2.0",updated:"2022-08-22",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popup",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popup"}},timeline:{name:"package.timeline.name",routename:n.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},localstorage:{name:"package.localstorage.name",routename:n.l.PACKAGES_LOCALSTORAGE,description:"package.localstorage.description",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-sync-localstorage",npm:"https://www.npmjs.com/package/@blacktoolbox/react-sync-localstorage"}},folder:{name:"package.folder.name",routename:n.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=o},9092:function(e,t,a){"use strict";var n=a(4989),o={version:n.Z.table.version,updated:n.Z.table.updated,description:n.Z.table.description,linkList:[{id:"github",fa:["fab","github"],url:n.Z.table.link.github},{id:"npm",fa:["fab","npm"],url:n.Z.table.link.npm}]};t.Z=o},6520:function(e,t,a){"use strict";a.d(t,{gO:function(){return g},iz:function(){return O},T3:function(){return l},yG:function(){return m},$0:function(){return f}});var n=a(7294),o=a(4184),c=a.n(o);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=function(e){var t=e.className,a=e.children,o=i(e,["className","children"]);return n.createElement("div",r({className:c()("module-page",t)},o),a)},s=a(7814);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=function(e){var t=e.id,a=e.title,o=void 0===a?"":a,r=e.linkList,i=e.clickBtn,l=void 0===i?function(){}:i,m=p(e,["id","title","linkList","clickBtn"]);return n.createElement("div",d({id:t,className:"module-page-head"},m),n.createElement("div",{className:"head_title"},o||""),(r||[]).map((function(e){return n.createElement("div",{className:c()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},n.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var f=function(e){var t=e.className,a=e.head,o=e.children,r=b(e,["className","head","children"]);return n.createElement("div",u({className:c()("module-section",t)},r),e.head?n.createElement("div",{className:"section_head"},a):[],n.createElement("div",{className:"section_body"},o))};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var g=function(e){var t=e.title,a=e.children,o=e.className,r=h(e,["title","children","className"]);return n.createElement("div",y({className:c()("module-block",o)},r),t?n.createElement("div",{className:"block_title"},t):[],n.createElement("div",{className:"block_body"},a))};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var O=function(e){var t=e.className,a=e.dividerProps;return n.createElement("div",k({className:c()("module-divider",t)},a),n.createElement("div",{className:"divider_line"}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement("div",{className:"divider_line"}))}},6430:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(7294),o=a(6593),c=a(1719),r=a(6742),i=a(2007),l=a(6520),s=a(9092),d=[{name:"Name",id:"name"},{name:"Type",id:"devType"},{name:"OS",id:"osType"},{name:"IP",id:"ipAddr"},{name:"MAC",id:"macAddr"},{name:"Traffic(tx / rx)",id:"traffic"},{name:"Statue",id:"statusDesc"}],p=[{name:"Device 1",devType:"phone",osType:"ios",ipAddr:"192.168.0.50",macAddr:"B4:A2:07:44:55:2A",traffic:"1.7 MB / 45 KB",status:0,statusDesc:"Disconnected"},{name:"Device 2",devType:"notebook",osType:"windows",ipAddr:"192.168.0.52",macAddr:"B4:A2:07:44:DD:FF",traffic:"4.8 MB / 27 KB",status:0,statusDesc:"Disconnected"}],m={table_compare:{"box-shadow":"0 15px 30px -10px rgba(92, 101, 107, 0.15)","background-color":"#ffffff"},tr_th:{padding:"0.25rem 0.5rem",width:"100px","background-color":"#BAE0E7"},tr_td:{padding:"0.25rem 0.5rem",width:"100px","text-align":"center","border-left":"2px solid #BAE0E7"}},u=function(){return(0,o.v9)((function(e){return{languageSetting:e.language.languageSetting}})),n.createElement(l.T3,{id:"btb-pkg-table-example-style"},n.createElement(l.yG,{title:r.K.translate("package.table.example.style.title"),clickBtn:i.n,linkList:s.Z.linkList}),n.createElement(l.$0,{head:n.createElement(n.Fragment,null,"".concat(r.K.translate("package.version_colon")).concat(s.Z.version),n.createElement("br",null),"".concat(r.K.translate("package.release_colon")).concat(s.Z.updated))},n.createElement("p",null,r.K.translate("package.table.example.style.description"))),n.createElement(l.$0,{head:r.K.translate("package.section.example")},n.createElement(c.Z,{className:"table_sample",mode:"compare",headData:d,bodyData:p,styleObj:m})),n.createElement(l.$0,{head:r.K.translate("package.section.sourceCode")},n.createElement("pre",{className:"page_pre"},'<BTBTable \n        mode="compare" \n        headData={headData} \n        bodyData={bodyData}\n        styleObj={styleObj}/>'),n.createElement(l.gO,{title:"headData"},n.createElement("pre",{className:"page_pre"},"const headDate = [\n        {name : 'Name', id : 'name' },\n        {name : 'Type', id : 'devType' },\n        {name : 'OS', id : 'osType' },\n        {name : 'IP', id : 'ipAddr' },\n        {name : 'MAC', id : 'macAddr' },\n        {name : 'Traffic(tx / rx)', id : 'traffic' },\n        {name : 'Statue', id : 'statusDesc'}\n];")),n.createElement(l.gO,{title:"bodyData"},n.createElement("pre",{className:"page_pre"},"const bodyData = [\n        {\n                name : 'Device 1',  \n                devType : 'phone',   \n                osType : 'ios',      \n                ipAddr : '192.168.0.50',   \n                macAddr : 'B4:A2:07:44:55:2A', \n                traffic : '1.7 MB / 45 KB', \n                status : 0, \n                statusDesc : 'Disconnected'\n        }, {\n                name : 'Device 2',  \n                devType : 'notebook',   \n                osType : 'windows',      \n                ipAddr : '192.168.0.52',   \n                macAddr : 'B4:A2:07:44:DD:FF', \n                traffic : '4.8 MB / 27 KB', \n                status : 0, \n                statusDesc : 'Disconnected'\n        }\n];")),n.createElement(l.gO,{title:"styleObj"},n.createElement("pre",{className:"page_pre"},"const styleObj = {\n        'table_compare' : {\n                'box-shadow' : '0 15px 30px -10px rgba(92, 101, 107, 0.15)',\n                'background-color' : '#ffffff'\n        },\n        'tr_th' : {\n                'padding' : '0.25rem 0.5rem',\n                'width' : '100px',\n                'background-color' : '#BAE0E7'\n        },\n        'tr_td' : {\n                'padding' : '0.25rem 0.5rem',\n                'width' : '100px',\n                'text-align' : 'center',\n                'border-left' : '2px solid #BAE0E7'\n        }\n};"))))},b=function(){return n.createElement(u,null)}},2007:function(e,t,a){"use strict";a.d(t,{n:function(){return n}});var n=function(e){window.open(e.url)}}}]);