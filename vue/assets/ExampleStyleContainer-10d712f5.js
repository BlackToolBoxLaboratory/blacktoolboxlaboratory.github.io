import{d as h,u as B,s as T,t as x,bv as A,_ as m,r as d,o as u,c as b,w as a,a as t,M as o,f as n,e as l}from"./index-8f4f504c.js";import{p as v}from"./packageInfo-82f882b9.js";import"./packageObj-cd967c47.js";const $=[{name:"Name",id:"name"},{name:"Type",id:"devType"},{name:"OS",id:"osType"},{name:"IP",id:"ipAddr"},{name:"MAC",id:"macAddr"},{name:"Traffic(tx / rx)",id:"traffic"},{name:"Statue",id:"statusDesc"}],I=[{name:"Device 1",devType:"phone",osType:"ios",ipAddr:"192.168.0.50",macAddr:"B4:A2:07:44:55:2A",traffic:"1.7 MB / 45 KB",status:0,statusDesc:"Disconnected"},{name:"Device 2",devType:"notebook",osType:"windows",ipAddr:"192.168.0.52",macAddr:"B4:A2:07:44:DD:FF",traffic:"4.8 MB / 27 KB",status:0,statusDesc:"Disconnected"}],S={"btb-vue-table-compare":{"box-shadow":"0 15px 30px -10px rgba(92, 101, 107, 0.15)","background-color":"#ffffff"},tr_th:{padding:"0.25rem 0.5rem",width:"100px","background-color":"#b8dec9"},tr_td:{padding:"0.25rem 0.5rem",width:"100px","text-align":"center","border-left":"2px solid #b8dec9"}},w=`<btb-vue-table 
        :headData="headData" 
        :bodyData="bodyData"
        :styleObj="styleObj"
        mode="comapre"
/>`,O=`const headData = [
        {name : 'Name', id : 'name' },
        {name : 'Type', id : 'devType' },
        {name : 'OS', id : 'osType' },
        {name : 'IP', id : 'ipAddr' },
        {name : 'MAC', id : 'macAddr' },
        {name : 'Traffic(tx / rx)', id : 'traffic' },
        {name : 'Statue', id : 'statusDesc'}
];`,j=`const bodyData = [
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
];`,C=`const styleObj = {
  'btb-vue-table-compare' : {
          'box-shadow' : '0 15px 30px -10px rgba(92, 101, 107, 0.15)',
          'background-color' : '#ffffff'
  },
  'tr_th' : {
          'padding' : '0.25rem 0.5rem',
          'width' : '100px',
          'background-color' : '#b8dec9'
  },
  'tr_td' : {
          'padding' : '0.25rem 0.5rem',
          'width' : '100px',
          'text-align' : 'center',
          'border-left' : '2px solid #b8dec9'
  }
};`,M=h({name:"btb-pkg-table-example-style",setup(){const e=B(),{langIndex:r}=T(e);return{packageInfo:v,preRender:w,preHeadData:O,preBodyData:j,preStyleObj:C,headData:$,bodyData:I,styleObj:S,langIndex:r,translate:x,openLink:A}}}),L=l("br",null,null,-1);function N(e,r,f,y,g,D){const p=d("module-page-head"),c=d("module-section"),_=d("btb-vue-table"),s=d("module-pre"),i=d("module-block"),k=d("module-page");return u(),b(k,{class:"btb-pkg-table-example-style"},{default:a(()=>[t(p,{title:e.translate(e.langIndex,"package.table.example.style.title"),btnList:e.packageInfo.linkList,onClickBtn:e.openLink},null,8,["title","btnList","onClickBtn"]),t(c,null,{head:a(()=>[o(n(`${e.translate(e.langIndex,"package.version_colon")}${e.packageInfo.version}`),1),L,o(" "+n(`${e.translate(e.langIndex,"package.release_colon")}${e.packageInfo.updated}`),1)]),default:a(()=>[l("p",null,n(e.translate(e.langIndex,"package.table.example.style.description")),1)]),_:1}),t(c,null,{head:a(()=>[o(n(e.translate(e.langIndex,"package.section.example")),1)]),default:a(()=>[t(_,{class:"table_sample",headData:e.headData,bodyData:e.bodyData,styleObj:e.styleObj,mode:"compare"},null,8,["headData","bodyData","styleObj"])]),_:1}),t(c,null,{head:a(()=>[o(n(e.translate(e.langIndex,"package.section.sourceCode")),1)]),default:a(()=>[t(s,null,{default:a(()=>[l("pre",null,n(e.preRender),1)]),_:1}),t(i,null,{title:a(()=>[o(n("headData"))]),default:a(()=>[t(s,null,{default:a(()=>[l("pre",null,n(e.preHeadData),1)]),_:1})]),_:1}),t(i,null,{title:a(()=>[o(n("bodyData"))]),default:a(()=>[t(s,null,{default:a(()=>[l("pre",null,n(e.preBodyData),1)]),_:1})]),_:1}),t(i,null,{title:a(()=>[o(n("styleObj"))]),default:a(()=>[t(s,null,{default:a(()=>[l("pre",null,n(e.preStyleObj),1)]),_:1})]),_:1})]),_:1})]),_:1})}const E=m(M,[["render",N]]),F={name:"btb-pkg-table-example-list-container",components:{BTBTableExampleStyle:E}};function K(e,r,f,y,g,D){const p=d("BTBTableExampleStyle");return u(),b(p)}const P=m(F,[["render",K]]);export{P as default};
