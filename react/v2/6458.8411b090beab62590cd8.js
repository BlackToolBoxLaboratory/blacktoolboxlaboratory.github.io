(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[6458],{4989:function(e,t,a){"use strict";var n=a(5044),i={list:{name:"package.list.name",routename:n.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.1",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.4",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.3.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},popup:{name:"package.popup.name",routename:n.l.PACKAGES_POPUP_BASIC,description:"package.popup.description.basic",version:"1.2.0",updated:"2022-08-22",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popup",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popup"}},timeline:{name:"package.timeline.name",routename:n.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},folder:{name:"package.folder.name",routename:n.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.2",updated:"2022-08-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=i},6673:function(e,t,a){"use strict";var n=a(4989),i={version:n.Z.list.version,updated:n.Z.list.updated,description:n.Z.list.description,linkList:[{id:"github",fa:["fab","github"],url:n.Z.list.link.github},{id:"npm",fa:["fab","npm"],url:n.Z.list.link.npm}]};t.Z=i},6520:function(e,t,a){"use strict";a.d(t,{gO:function(){return k},iz:function(){return y},T3:function(){return l},yG:function(){return u},$0:function(){return f}});var n=a(7294),i=a(4184),r=a.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=function(e){var t=e.className,a=e.children,i=c(e,["className","children"]);return n.createElement("div",o({className:r()("module-page",t)},i),a)},s=a(7814);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=function(e){var t=e.id,a=e.title,i=void 0===a?"":a,o=e.linkList,c=e.clickBtn,l=void 0===c?function(){}:c,u=d(e,["id","title","linkList","clickBtn"]);return n.createElement("div",p({id:t,className:"module-page-head"},u),n.createElement("div",{className:"head_title"},i||""),(o||[]).map((function(e){return n.createElement("div",{className:r()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},n.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var f=function(e){var t=e.className,a=e.head,i=e.children,o=b(e,["className","head","children"]);return n.createElement("div",m({className:r()("module-section",t)},o),e.head?n.createElement("div",{className:"section_head"},a):[],n.createElement("div",{className:"section_body"},i))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var k=function(e){var t=e.title,a=e.children,i=e.className,o=h(e,["title","children","className"]);return n.createElement("div",g({className:r()("module-block",i)},o),t?n.createElement("div",{className:"block_title"},t):[],n.createElement("div",{className:"block_body"},a))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var y=function(e){var t=e.className,a=e.dividerProps;return n.createElement("div",v({className:r()("module-divider",t)},a),n.createElement("div",{className:"divider_line"}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement("div",{className:"divider_line"}))}},6458:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),i=a(6593),r=a(119),o=a(6742),c=a(2007),l=a(6520),s=a(6673),p=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],d=function(){return(0,i.v9)((function(e){return{languageSetting:e.language.languageSetting}})),n.createElement(l.T3,{id:"btb-pkg-list-example-list"},n.createElement(l.yG,{title:o.K.translate("package.list.example.list.title"),clickBtn:c.n,linkList:s.Z.linkList}),n.createElement(l.$0,{head:n.createElement(n.Fragment,null,"".concat(o.K.translate("package.version_colon")).concat(s.Z.version),n.createElement("br",null),"".concat(o.K.translate("package.release_colon")).concat(s.Z.updated))},n.createElement("p",null,o.K.translate("package.list.example.list.description"))),n.createElement(l.$0,{head:o.K.translate("package.section.example")},n.createElement(r.Z,{dataList:p})),n.createElement(l.$0,{head:o.K.translate("package.section.sourceCode")},n.createElement("pre",{className:"page_pre"},"<btb-react-list dataList={listData} />"),n.createElement(l.gO,{title:"listData"},n.createElement("pre",{className:"page_pre"},"const listData = [\n        { id: 'b1', title: 'Branch: 1', children: [\n                { id: 'l11', title: 'Leaf: 1-1' },\n                { id: 'b12', title: 'Branch: 1-2', children: [\n                        { id: 'l121', title: 'Leaf: 1-2-1' },\n                        { id: 'l122', title: 'Leaf: 1-2-2' }\n                ]},\n                { id: 'l13', title: 'Leaf: 1-3' }\n        ]},\n        { id: 'b2', title: 'Branch: 2', children: [\n                { id: 'l21', title: 'Leaf: 2-1' },\n                { id: 'l22', title: 'Leaf: 2-2' }\n        ]}\n]"))))},u=function(){return n.createElement(d,null)}},2007:function(e,t,a){"use strict";a.d(t,{n:function(){return n}});var n=function(e){window.open(e.url)}}}]);