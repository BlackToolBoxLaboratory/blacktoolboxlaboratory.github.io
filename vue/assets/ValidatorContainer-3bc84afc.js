import{d as _,u as $,s as B,t as V,bv as L,_ as c,r as i,o as v,c as f,w as n,a as l,M as o,f as e,e as t}from"./index-d83f0453.js";import{a as s}from"./applicationObj-672da7e5.js";const y={version:s.validator.version,updated:s.validator.updated,description:s.validator.description,linkList:[{id:"github",fa:["fab","github"],url:s.validator.link.github},{id:"npm",fa:["fab","npm"],url:s.validator.link.npm}]},C="$ npm install --save @blacktoolbox/prototype-validator",w=`import Validator from '@blacktoolbox/prototype-validator';

const validator = new Validator();

const rules = {
        'event' : [
                {
                        rule    : 'strLength|min:2',
                        message : 'Username length required 2 at least.'
                }
        ],
}

validator.init(rules);

validator.stats(); // Show all status
validator.stats('event'); // Show event's status only

validator.reset(); // clean all status of event to null

validator.validate('event', value) // to check the value by the rule of event
`,z=`validator.stats('event') = {
        message = '';
        status = null;
}`,S=_({name:"btb-app-validator",setup(){const a=$(),{langIndex:p}=B(a);return{packageInfo:y,preInstall:C,preInitializaer:w,preResult:z,langIndex:p,translate:V,openLink:L}}}),T=t("br",null,null,-1),N={class:"inline-link",href:"https://blacktoolboxlaboratory.github.io/javascript/#/packages/validator",target:"_blank",rel:"noreferrer"};function R(a,p,g,m,b,h){const d=i("module-page-head"),r=i("module-section"),k=i("fai"),u=i("module-pre"),I=i("module-page");return v(),f(I,{class:"btb-app-languages"},{default:n(()=>[l(d,{title:a.translate(a.langIndex,"application.validator.name"),btnList:a.packageInfo.linkList,onClickBtn:a.openLink},null,8,["title","btnList","onClickBtn"]),l(r,null,{head:n(()=>[o(e(`${a.translate(a.langIndex,"application.version_colon")}${a.packageInfo.version}`),1),T,o(" "+e(`${a.translate(a.langIndex,"application.release_colon")}${a.packageInfo.updated}`),1)]),default:n(()=>[t("p",null,e(a.translate(a.langIndex,"application.validator.description")),1)]),_:1}),l(r,null,{head:n(()=>[o(e(a.translate(a.langIndex,"application.section.installation")),1)]),default:n(()=>[t("p",null,[o(e(a.translate(a.langIndex,"application.validator.installation.description"))+" ",1),t("a",N,[l(k,{icon:["fas","external-link-alt"],fixedWidth:"",size:"xs"}),t("span",null,e(a.translate(a.langIndex,"application.validator.installation.linkName")),1)])]),l(u,null,{default:n(()=>[t("pre",null,e(a.preInstall),1)]),_:1})]),_:1}),l(r,null,{head:n(()=>[o(e(a.translate(a.langIndex,"application.section.initializer")),1)]),default:n(()=>[t("p",null,e(a.translate(a.langIndex,"application.languages.initializer")),1),l(u,null,{default:n(()=>[t("pre",null,e(a.preInitializaer),1)]),_:1})]),_:1}),l(r,null,{head:n(()=>[o(e(a.translate(a.langIndex,"application.section.result")),1)]),default:n(()=>[t("p",null,e(a.translate(a.langIndex,"application.validator.result")),1),l(u,null,{default:n(()=>[t("pre",null,e(a.preResult),1)]),_:1})]),_:1})]),_:1})}const j=c(S,[["render",R]]),q={name:"btb-app-validator-container",components:{BTBValidator:j}};function D(a,p,g,m,b,h){const d=i("BTBValidator");return v(),f(d)}const U=c(q,[["render",D]]);export{U as default};
