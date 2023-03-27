import{d as k,u as T,s as A,t as h,bv as v,_ as m,r as o,o as u,c as f,w as a,a as n,M as d,f as t,e as s}from"./index-8f4f504c.js";import{p as I}from"./packageInfo-82f882b9.js";import"./packageObj-cd967c47.js";const $=[{name:"Name",id:"name"},{name:"Type",id:"devType"},{name:"OS",id:"osType"},{name:"IP",id:"ipAddr"},{name:"MAC",id:"macAddr"},{name:"Traffic(tx / rx)",id:"traffic"},{name:"Statue",id:"statusDesc"}],C=[{name:"Device 1",devType:"phone",osType:"ios",ipAddr:"192.168.0.50",macAddr:"B4:A2:07:44:55:2A",traffic:"1.7 MB / 45 KB",status:0,statusDesc:"Disconnected"},{name:"Device 2",devType:"notebook",osType:"windows",ipAddr:"192.168.0.52",macAddr:"B4:A2:07:44:DD:FF",traffic:"4.8 MB / 27 KB",status:0,statusDesc:"Disconnected"}],M=`<btb-vue-table 
        :headData="headData" 
        :bodyData="bodyData"
        mode="info"
/>`,S=`const headData = [
        {name : 'Name', id : 'name'},
        {name : 'Type', id : 'devType'},
        {name : 'OS', id : 'osType'},
        {name : 'IP', id : 'ipAddr'},
        {name : 'MAC', id : 'macAddr'},
        {name : 'Traffic(tx / rx)', id : 'traffic'},
        {name : 'Statue', id : 'statusDesc'}
];`,w=`const bodyData = [
        {
                name : 'Device 1',  
                devType : 'phone',   
                osType : 'ios',      
                ipAddr : '192.168.0.50',   
                macAddr : 'B4:A2:07:44:55:2A', 
                traffic : '1.7 MB / 45 KB', 
                status : 0, 
                statusDesc : 'Disconnected'
        }, {
                name : 'Device 2',  
                devType : 'notebook',   
                osType : 'windows',      
                ipAddr : '192.168.0.52',   
                macAddr : 'B4:A2:07:44:DD:FF', 
                traffic : '4.8 MB / 27 KB', 
                status : 0, 
                statusDesc : 'Disconnected'
        }
];`,x=k({name:"btb-pkg-table-example-info",setup(){const e=T(),{langIndex:l}=A(e);return{packageInfo:I,preRender:M,preHeadData:S,preBodyData:w,headData:$,bodyData:C,langIndex:l,translate:h,openLink:v}}}),L=s("br",null,null,-1);function N(e,l,b,D,_,g){const p=o("module-page-head"),c=o("module-section"),y=o("btb-vue-table"),i=o("module-pre"),r=o("module-block"),B=o("module-page");return u(),f(B,{class:"btb-pkg-table-example-info"},{default:a(()=>[n(p,{title:e.translate(e.langIndex,"package.table.example.info.title"),btnList:e.packageInfo.linkList,onClickBtn:e.openLink},null,8,["title","btnList","onClickBtn"]),n(c,null,{head:a(()=>[d(t(`${e.translate(e.langIndex,"package.version_colon")}${e.packageInfo.version}`),1),L,d(" "+t(`${e.translate(e.langIndex,"package.release_colon")}${e.packageInfo.updated}`),1)]),default:a(()=>[s("p",null,t(e.translate(e.langIndex,"package.table.example.info.description")),1)]),_:1}),n(c,null,{head:a(()=>[d(t(e.translate(e.langIndex,"package.section.example")),1)]),default:a(()=>[n(y,{class:"table_sample",headData:e.headData,bodyData:e.bodyData,mode:"info"},null,8,["headData","bodyData"])]),_:1}),n(c,null,{head:a(()=>[d(t(e.translate(e.langIndex,"package.section.sourceCode")),1)]),default:a(()=>[n(i,null,{default:a(()=>[s("pre",null,t(e.preRender),1)]),_:1}),n(r,null,{title:a(()=>[d(t("headData"))]),default:a(()=>[n(i,null,{default:a(()=>[s("pre",null,t(e.preHeadData),1)]),_:1})]),_:1}),n(r,null,{title:a(()=>[d(t("bodyData"))]),default:a(()=>[n(i,null,{default:a(()=>[s("pre",null,t(e.preBodyData),1)]),_:1})]),_:1})]),_:1})]),_:1})}const E=m(x,[["render",N]]),F={name:"btb-pkg-table-example-info-container",components:{BTBTableExampleInfo:E}};function K(e,l,b,D,_,g){const p=o("BTBTableExampleInfo");return u(),f(p)}const O=m(F,[["render",K]]);export{O as default};
