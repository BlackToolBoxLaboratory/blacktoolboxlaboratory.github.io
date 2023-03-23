"use strict";(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[7809],{7809:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),l=a(9704),i=a(7814),r=a(6742),o=a(2007),s=a(6520),c=a(6043),p={version:c.Z.validator.version,updated:c.Z.validator.updated,description:c.Z.validator.description,linkList:[{id:"github",fa:["fab","github"],url:c.Z.validator.link.github},{id:"npm",fa:["fab","npm"],url:c.Z.validator.link.npm}]},u=function(){return(0,l.v9)((function(e){return{languageSetting:e.language.languageSetting}})),n.createElement(s.T3,{id:"btb-app-validator"},n.createElement(s.yG,{title:r.K.translate("application.validator.name"),clickBtn:o.n,linkList:p.linkList}),n.createElement(s.$0,{head:n.createElement(n.Fragment,null,"".concat(r.K.translate("application.version_colon")).concat(p.version),n.createElement("br",null),"".concat(r.K.translate("application.release_colon")).concat(p.updated))},n.createElement("p",null,r.K.translate(p.description))),n.createElement(s.$0,{head:r.K.translate("application.section.installation")},n.createElement("p",null,r.K.translate("application.validator.installation.description"),n.createElement("a",{className:"inline-link",href:"https://blacktoolboxlaboratory.github.io/javascript/#/packages/validator",target:"_blank",rel:"noreferrer"},n.createElement(i.G,{icon:["fas","external-link-alt"],fixedWidth:!0}),n.createElement("span",null,r.K.translate("application.validator.installation.linkName")))),n.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/prototype-validator")),n.createElement(s.$0,{head:r.K.translate("application.section.initializer")},n.createElement("p",null,r.K.translate("application.validator.initializer")),n.createElement("pre",{className:"page_pre"},"import Validator from '@blacktoolbox/prototype-validator';\n\nconst validator = new Validator();\n\nconst rules = {\n        'event' : [\n                {\n                        rule    : 'strLength|min:2',\n                        message : 'Username length required 2 at least.'\n                }\n        ],\n}\n\nvalidator.init(rules);\n\nvalidator.stats(); // Show all status\nvalidator.stats('event'); // Show event's status only\n\nvalidator.reset(); // clean all status of event to null\n\nvalidator.validate('event', value) // to check the value by the rule of event\n")),n.createElement(s.$0,{head:r.K.translate("application.section.result")},n.createElement("p",null,r.K.translate("application.validator.result")),n.createElement("pre",{className:"page_pre"},"validator.stats('event') = {\n        message = '';\n        status = null;\n}")))},d=function(){return n.createElement(u,null)}}}]);