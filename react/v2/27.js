(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{49:function(e,a,t){"use strict";t.d(a,"c",(function(){return i})),t.d(a,"d",(function(){return s})),t.d(a,"e",(function(){return m})),t.d(a,"b",(function(){return p})),t.d(a,"a",(function(){return d}));var n=t(0),l=t.n(n),i=function(e){return l.a.createElement("div",{className:["module-page",e.className].join(" ")},e.children)},c=t(52),o=t.n(c),r=t(38),s=function(e){return l.a.createElement("div",{className:"module-page-head"},l.a.createElement("div",{className:"head_title"},e.title||""),(e.linkList||[]).map((function(a){return l.a.createElement("div",{className:o()("head_btn","btn-".concat(a.id)),key:a.id,onClick:function(){var t;t=a,e.clickBtn&&e.clickBtn(t)}},l.a.createElement(r.FontAwesomeIcon,{icon:a.fa,fixedWidth:!0}))})))},m=function(e){return l.a.createElement("div",{className:["module-section",e.className].join(" ")},e.head?l.a.createElement("div",{className:"section_head"},e.head):[],l.a.createElement("div",{className:"section_body"},e.children))},d=function(e){return l.a.createElement("div",{className:"module-block"},e.title?l.a.createElement("div",{className:"block_title"},e.title):[],l.a.createElement("div",{className:"block_body"},e.children))},p=function(){return l.a.createElement("div",{className:"module-divider"},l.a.createElement("div",{className:"divider_line"}),l.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),l.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),l.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),l.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),l.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),l.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),l.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),l.a.createElement("div",{className:"divider_line"}))}},50:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(e){window.open(e.url)}},97:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(31),c=t(54),o=t(38),r=t(53),s=t(50),m=t(49),d=Object(c.a)(Object(i.b)((function(e){return{languageSetting:e.language.languageSetting}}))),p={version:"1.1.1",updated:"2020-06-20",description:"application.languages.description",linkList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/prototype-languages"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/prototype-languages"}]},u=d((function(){return l.a.createElement(m.c,{className:"btb-app-languages"},l.a.createElement(m.d,{title:r.a.translate("application.languages.name"),clickBtn:s.a,linkList:p.linkList}),l.a.createElement(m.e,{head:l.a.createElement(l.a.Fragment,null,"".concat(r.a.translate("package.version_colon")).concat(p.version),l.a.createElement("br",null),"".concat(r.a.translate("package.release_colon")).concat(p.updated))},l.a.createElement("p",null,r.a.translate(p.description))),l.a.createElement(m.e,{head:r.a.translate("application.section.installation")},l.a.createElement("p",null,r.a.translate("application.languages.installation.description"),l.a.createElement("a",{className:"inline-link",href:"https://blacktoolboxlaboratory.github.io/javascript/#/packages/languages",target:"_blank",rel:"noreferrer"},l.a.createElement(o.FontAwesomeIcon,{icon:["fas","external-link-alt"],fixedWidth:!0}),l.a.createElement("span",null,r.a.translate("application.languages.installation.linkName")))),l.a.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/prototype-languages")),l.a.createElement(m.e,{head:r.a.translate("application.section.initializer")},l.a.createElement("p",null,r.a.translate("application.languages.initializer")),l.a.createElement("pre",{className:"page_pre"},"import { initializer } from '@blacktoolbox/prototype-languages';\n\nimport en from '@src/assets/languages/en.js';\nimport zh from '@src/assets/languages/zh.js';\n\ninitializer([\n        { index : 'en', label : 'Eglish', dictionary : en },\n        { index : 'zh', label : '繁體中文', dictionary : zh }\n]);")),l.a.createElement(m.e,{head:r.a.translate("application.section.impletement")},l.a.createElement("p",null,r.a.translate("application.languages.impletement")),l.a.createElement("pre",{className:"page_pre"},"import Language from '@blacktoolbox/prototype-languages';\n\nconst lang = new Language()")),l.a.createElement(m.e,{head:r.a.translate("application.section.trigger")},l.a.createElement("p",null,r.a.translate("application.languages.trigger.description")),l.a.createElement(m.a,{title:"Distpatch"},l.a.createElement("p",null,r.a.translate("application.languages.trigger.dispatch"))),l.a.createElement(m.a,{title:"Key"},l.a.createElement("p",null,r.a.translate("application.languages.trigger.key")))))}));a.default=function(){return l.a.createElement(u,null)}}}]);