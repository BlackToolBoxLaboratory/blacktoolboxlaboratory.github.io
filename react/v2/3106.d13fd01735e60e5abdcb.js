"use strict";(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[3106],{3106:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var o=a(7294),n=a(9704),r=a(119),p=a(1719),l=a(6742),i=a(2007),c=a(6520),g=a(6141),s=[{id:"popover",title:"<div> .btb-react-popover .popover-align-{begin || center || end} .popover-arrow",children:[{id:"trigger",title:"<div> .popover_trigger"},{id:"content",title:"<div> .popover_content .content-show .content-position-{top || bottom || left || right}"}]}],d=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],u=[{title:"showState",type:"package.paramType.boolean",default:"false",notice:"package.popover.property.showState"},{title:"showPosition",type:"package.paramType.string",default:'"bottom"',notice:"package.popover.property.showPosition"},{title:"showAlign",type:"package.paramType.string",default:'"begin"',notice:"package.popover.property.showAlign"},{title:"withArrow",type:"package.paramType.boolean",default:"true",notice:"package.popover.property.withArrow"},{title:"autoDetect",type:"package.paramType.boolean",default:"true",notice:"package.popover.property.autoDetect"},{title:"trigger",type:"package.paramType.string||package.paramType.node",default:'"Trigger"',notice:"package.popover.property.trigger"},{title:"styleObj",type:"package.paramType.object",default:"{}",notice:"package.popover.property.styleObj"},{title:"onToggle",type:"package.paramType.function",default:"()=>{}",notice:"package.popover.property.onToggle"},{title:"onShow",type:"package.paramType.function",default:"()=>{}",notice:"package.popover.property.onShow"},{title:"onHide",type:"package.paramType.function",default:"()=>{}",notice:"package.popover.property.onHide"},{title:"ref",type:"useRef",default:"undefined",notice:"package.popover.property.ref"}],m={"td-type":function(e,t){var a=e[t.id].split("||");return a.length>0?a.map((function(e){return l.K.translate(e)})).join(" || "):"useRef"===e[t.id]?"useRef":l.K.translate(e[t.id])},"td-notice":function(e,t){return l.K.translate(e[t.id])}},y=function(){return(0,n.v9)((function(e){return{languageSetting:e.language.languageSetting}})),o.createElement(c.T3,{id:"btb-pkg-popover-basic"},o.createElement(c.yG,{title:l.K.translate("package.popover.name"),clickBtn:i.n,linkList:g.Z.linkList}),o.createElement(c.$0,{head:o.createElement(o.Fragment,null,"".concat(l.K.translate("package.version_colon")).concat(g.Z.version),o.createElement("br",null),"".concat(l.K.translate("package.release_colon")).concat(g.Z.updated))},o.createElement("p",null,l.K.translate(g.Z.description))),o.createElement(c.$0,{head:l.K.translate("package.section.installation")},o.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-popover\n\nimport BTBPopover from '@blacktoolbox/react-popover'\nimport '@blacktoolbox/react-popover/lib/index.css'")),o.createElement(c.$0,{head:l.K.translate("package.section.render")},o.createElement("pre",{className:"page_pre"},'<BTBPopover\n        showState=" Boolean " \n        showPosition=" String "\n        showAlign=" String "\n        withArrow=" Boolean "\n        autoDetect=" Boolean "\n        trigger=" String || Node "\n        styleObj=" Object "\n        onToggle=" function(){} "\n        onShow=" function(){} "\n        onHide=" function(){} "\n>\n        { children } \n</BTBPopover>')),o.createElement(c.$0,{head:l.K.translate("package.section.parameters")},o.createElement(p.Z,{className:"page_table",mode:"list",headData:d,bodyData:u,slotObj:m}),o.createElement(c.gO,{title:"styleObj"},o.createElement("p",null,l.K.translate("package.popover.parameters.styleObj")),o.createElement("pre",{className:"page_pre"},"styleObj = {\n        [ className ]: { inline CSS }\n}"))),o.createElement(c.$0,{head:l.K.translate("package.section.nodeTree")},o.createElement(r.Z,{className:"page_node_tree",dataList:s})))},k=function(){return o.createElement(y,null)}}}]);