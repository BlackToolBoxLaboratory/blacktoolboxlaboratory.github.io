"use strict";(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[6964],{6964:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(7294),r=a(9704),l=a(119),i=a(1719),c=a(6742),p=a(2007),o=a(6520),d=a(402),s=[{id:"form",title:"<div> .btb-react-form .form-select .select-disabled .select-focused",children:[{id:"outer",title:"<div> .select_outer",children:[{id:"prepend",title:"<div> .outer_item .item-prepend"},{id:"inner",title:"<div> .outer_item .item-inner",children:[{id:"before",title:"<div> .inner_item .item-before"},{id:"select",title:"<select> .inner_item .item-select"}]},{id:"append",title:"<div> .outer_item .item-append"}]}]}],m=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],u=[{title:"prependNode",type:"package.paramType.string||package.paramType.node",default:"undefined",notice:"package.form.property.prependNode"},{title:"appendNode",type:"package.paramType.string||package.paramType.node",default:"undefined",notice:"package.form.property.appendNode"},{title:"beforeNode",type:"package.paramType.string||package.paramType.node",default:"undefined",notice:"package.form.property.beforeNode"},{title:"styleObj",type:"package.paramType.object",default:"{}",notice:"package.button.property.styleObj"},{title:"props",type:"package.paramType.any",default:"undefined",notice:"package.form.property.select"}],g={"td-type":function(e,t){var a=e[t.id].split("||");return a.length>0?a.map((function(e){return c.K.translate(e)})).join(" || "):"useRef"===e[t.id]?"useRef":c.K.translate(e[t.id])},"td-notice":function(e,t){return c.K.translate(e[t.id])}},f=function(){return(0,r.v9)((function(e){return{languageSetting:e.language.languageSetting}})),n.createElement(o.T3,{id:"btb-pkg-form-basic"},n.createElement(o.yG,{title:c.K.translate("package.form.name.select"),clickBtn:p.n,linkList:d.Z.linkList}),n.createElement(o.$0,{head:n.createElement(n.Fragment,null,"".concat(c.K.translate("package.version_colon")).concat(d.Z.version),n.createElement("br",null),"".concat(c.K.translate("package.release_colon")).concat(d.Z.updated))},n.createElement("p",null,c.K.translate(d.Z.description))),n.createElement(o.$0,{head:c.K.translate("package.section.installation")},n.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-form\n\nimport { Select } from '@blacktoolbox/react-form'\nimport '@blacktoolbox/react-form/lib/index.css'")),n.createElement(o.$0,{head:c.K.translate("package.section.render")},n.createElement("pre",{className:"page_pre"},'<BTBSelect\n        prependNode=" String || Node " \n        appendNode=" String || Node " \n        beforeNode=" String || Node " \n        styleObj=" Object "\n        { props } \n>\n        { children }\n</BTBSelect>')),n.createElement(o.$0,{head:c.K.translate("package.section.parameters")},n.createElement(i.Z,{className:"page_table",mode:"list",headData:m,bodyData:u,slotObj:g}),n.createElement(o.gO,{title:"styleObj"},n.createElement("p",null,c.K.translate("package.form.parameters.styleObj")),n.createElement("pre",{className:"page_pre"},"styleObj = {\n        [ className ]: { inline CSS }\n}"))),n.createElement(o.$0,{head:c.K.translate("package.section.nodeTree")},n.createElement(l.Z,{className:"page_node_tree",dataList:s})))},b=function(){return n.createElement(f,null)}}}]);