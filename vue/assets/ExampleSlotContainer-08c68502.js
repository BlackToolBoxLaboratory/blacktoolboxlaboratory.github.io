import{d as T,u as v,s as $,t as I,bv as S,_ as f,r as d,o as b,c as D,w as a,a as n,M as o,f as t,e as l}from"./index-8f4f504c.js";import{p as x}from"./packageInfo-82f882b9.js";import"./packageObj-cd967c47.js";const C=[{name:"Name",id:"name"},{name:"Type",id:"devType"},{name:"OS",id:"osType"},{name:"IP",id:"ipAddr"},{name:"MAC",id:"macAddr"},{name:"Traffic(tx / rx)",id:"traffic"},{name:"Statue",id:"statusDesc"}],L=[{name:"Device 1",devType:"phone",osType:"ios",ipAddr:"192.168.0.50",macAddr:"B4:A2:07:44:55:2A",traffic:"1.7 MB / 45 KB",status:0,statusDesc:"Disconnected"},{name:"Device 2",devType:"notebook",osType:"windows",ipAddr:"192.168.0.52",macAddr:"B4:A2:07:44:DD:FF",traffic:"4.8 MB / 27 KB",status:0,statusDesc:"Disconnected"}],M=`<btb-vue-table 
        :headData="headData" 
        :bodyData="bodyData"
>
        <template #th-name>
                Device Name
        </template>
        <template #th-ipAddr>
                <span>
                        {{ 'IP Link ' }}
                        <fai :icon="['fas', 'external-link-alt']" fixedWidth />
                </span>
        </template>
        <template #td-ipAddr="{ data, column }">
                <a :href="\`http://\${data[column.id]}\`" target="_blank" rel="noreferrer">
                        {{ data[column.id] }}
                </a>
        </template>
</btb-vue-table>`,N=`const headDate = [
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
  },
  {
    name : 'Device 2',  
    devType : 'notebook',   
    osType : 'windows',      
    ipAddr : '192.168.0.52',   
    macAddr : 'B4:A2:07:44:DD:FF', 
    traffic : '4.8 MB / 27 KB', 
    status : 0, 
    statusDesc : 'Disconnected'
  }
];`,E=T({name:"btb-pkg-table-example-slot",setup(){const e=v(),{langIndex:s}=$(e);return{packageInfo:x,preRender:M,preHeadData:N,preBodyData:w,headData:C,bodyData:L,langIndex:s,translate:I,openLink:S}}}),F=l("br",null,null,-1),K=["href"];function P(e,s,_,h,g,k){const p=d("module-page-head"),r=d("module-section"),y=d("fai"),B=d("btb-vue-table"),i=d("module-pre"),c=d("module-block"),A=d("module-page");return b(),D(A,{class:"btb-pkg-table-example-slot"},{default:a(()=>[n(p,{title:e.translate(e.langIndex,"package.table.example.slot.title"),btnList:e.packageInfo.linkList,onClickBtn:e.openLink},null,8,["title","btnList","onClickBtn"]),n(r,null,{head:a(()=>[o(t(`${e.translate(e.langIndex,"package.version_colon")}${e.packageInfo.version}`),1),F,o(" "+t(`${e.translate(e.langIndex,"package.release_colon")}${e.packageInfo.updated}`),1)]),default:a(()=>[l("p",null,t(e.translate(e.langIndex,"package.table.example.slot.description")),1)]),_:1}),n(r,null,{head:a(()=>[o(t(e.translate(e.langIndex,"package.section.example")),1)]),default:a(()=>[n(B,{class:"table_sample",headData:e.headData,bodyData:e.bodyData},{"th-name":a(()=>[o(" Device Name ")]),"th-ipAddr":a(()=>[l("span",null,[o(t("IP Link ")+" "),n(y,{icon:["fas","external-link-alt"],fixedWidth:""})])]),"td-ipAddr":a(({data:m,column:u})=>[l("a",{href:`http://${m[u.id]}`,target:"_blank",rel:"noreferrer"},t(m[u.id]),9,K)]),_:1},8,["headData","bodyData"])]),_:1}),n(r,null,{head:a(()=>[o(t(e.translate(e.langIndex,"package.section.sourceCode")),1)]),default:a(()=>[n(i,null,{default:a(()=>[l("pre",null,t(e.preRender),1)]),_:1}),n(c,null,{title:a(()=>[o(t("headData"))]),default:a(()=>[n(i,null,{default:a(()=>[l("pre",null,t(e.preHeadData),1)]),_:1})]),_:1}),n(c,null,{title:a(()=>[o(t("bodyData"))]),default:a(()=>[n(i,null,{default:a(()=>[l("pre",null,t(e.preBodyData),1)]),_:1})]),_:1})]),_:1})]),_:1})}const R=f(E,[["render",P]]),V={name:"btb-pkg-table-example-slot-container",components:{BTBTableExampleSlot:R}};function H(e,s,_,h,g,k){const p=d("BTBTableExampleSlot");return b(),D(p)}const q=f(V,[["render",H]]);export{q as default};
