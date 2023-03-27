import{d as k,u as T,s as A,t as h,bv as v,_ as i,r as o,o as u,c as f,w as a,a as t,M as d,f as n,e as s}from"./index-eb68d8c1.js";import{p as $}from"./packageInfo-7b6d605e.js";import"./packageObj-2fa2689f.js";const C=[{name:"Name",id:"name"},{name:"Type",id:"devType"},{name:"OS",id:"osType"},{name:"IP",id:"ipAddr"},{name:"MAC",id:"macAddr"},{name:"Traffic(tx / rx)",id:"traffic"},{name:"Statue",id:"statusDesc"}],I=[{name:"Device 1",devType:"phone",osType:"ios",ipAddr:"192.168.0.50",macAddr:"B4:A2:07:44:55:2A",traffic:"1.7 MB / 45 KB",status:0,statusDesc:"Disconnected"},{name:"Device 2",devType:"notebook",osType:"windows",ipAddr:"192.168.0.52",macAddr:"B4:A2:07:44:DD:FF",traffic:"4.8 MB / 27 KB",status:0,statusDesc:"Disconnected"}],M=`<btb-vue-table 
        :headData="headData" 
        :bodyData="bodyData"
        mode="compare"
/>`,S=`const headDate = [
        {name : 'Name', id : 'name' },
        {name : 'Type', id : 'devType' },
        {name : 'OS', id : 'osType' },
        {name : 'IP', id : 'ipAddr' },
        {name : 'MAC', id : 'macAddr' },
        {name : 'Traffic(tx / rx)', id : 'traffic' },
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
];`,x=k({name:"btb-pkg-table-example-compare",setup(){const e=T(),{langIndex:l}=A(e);return{packageInfo:$,preRender:M,preHeadData:S,preBodyData:w,headData:C,bodyData:I,langIndex:l,translate:h,openLink:v}}}),L=s("br",null,null,-1);function N(e,l,b,D,_,g){const p=o("module-page-head"),r=o("module-section"),y=o("btb-vue-table"),c=o("module-pre"),m=o("module-block"),B=o("module-page");return u(),f(B,{class:"btb-pkg-table-example-compare"},{default:a(()=>[t(p,{title:e.translate(e.langIndex,"package.table.example.compare.title"),btnList:e.packageInfo.linkList,onClickBtn:e.openLink},null,8,["title","btnList","onClickBtn"]),t(r,null,{head:a(()=>[d(n(`${e.translate(e.langIndex,"package.version_colon")}${e.packageInfo.version}`),1),L,d(" "+n(`${e.translate(e.langIndex,"package.release_colon")}${e.packageInfo.updated}`),1)]),default:a(()=>[s("p",null,n(e.translate(e.langIndex,"package.table.example.compare.description")),1)]),_:1}),t(r,null,{head:a(()=>[d(n(e.translate(e.langIndex,"package.section.example")),1)]),default:a(()=>[t(y,{class:"table_sample",headData:e.headData,bodyData:e.bodyData,mode:"compare"},null,8,["headData","bodyData"])]),_:1}),t(r,null,{head:a(()=>[d(n(e.translate(e.langIndex,"package.section.sourceCode")),1)]),default:a(()=>[t(c,null,{default:a(()=>[s("pre",null,n(e.preRender),1)]),_:1}),t(m,null,{title:a(()=>[d(n("headData"))]),default:a(()=>[t(c,null,{default:a(()=>[s("pre",null,n(e.preHeadData),1)]),_:1})]),_:1}),t(m,null,{title:a(()=>[d(n("bodyData"))]),default:a(()=>[t(c,null,{default:a(()=>[s("pre",null,n(e.preBodyData),1)]),_:1})]),_:1})]),_:1})]),_:1})}const E=i(x,[["render",N]]),F={name:"btb-pkg-table-example-compare-container",components:{BTBTableExampleCompare:E}};function K(e,l,b,D,_,g){const p=o("BTBTableExampleCompare");return u(),f(p)}const O=i(F,[["render",K]]);export{O as default};
