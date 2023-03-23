import{d as B,u as $,s as I,t as D,bv as v,_ as c,r as n,o as u,c as m,w as t,a,M as i,f as l,e as s}from"./index-e8161bd7.js";import{p as C}from"./packageInfo-68ee8365.js";import"./packageObj-964ab5b0.js";const x='<btb-vue-list :dataList="listData"/>',T=`const listData = [
        { id: 'b1', title: 'Branch: 1', children: [
                { id: 'l11', title: 'Leaf: 1-1' },
                { id: 'b12', title: 'Branch: 1-2', children: [
                        { id: 'l121', title: 'Leaf: 1-2-1' },
                        { id: 'l122', title: 'Leaf: 1-2-2' }
                ]},
                { id: 'l13', title: 'Leaf: 1-3' }
        ]},
        { id: 'b2', title: 'Branch: 2', children: [
                { id: 'l21', title: 'Leaf: 2-1' },
                { id: 'l22', title: 'Leaf: 2-2' }
        ]}
]`,E=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],N=B({name:"btb-pkg-list-example",setup(){const e=$(),{langIndex:o}=I(e);return{packageInfo:C,exampleRender:x,preListData:T,listData:E,langIndex:o,translate:D,openLink:v}}}),R=s("br",null,null,-1);function S(e,o,f,L,_,g){const d=n("module-page-head"),r=n("module-section"),b=n("btb-vue-list"),p=n("module-pre"),k=n("module-block"),h=n("module-page");return u(),m(h,{class:"btb-pkg-list-example-list"},{default:t(()=>[a(d,{title:e.translate(e.langIndex,"package.list.example.list.title"),btnList:e.packageInfo.linkList,onClickBtn:e.openLink},null,8,["title","btnList","onClickBtn"]),a(r,null,{head:t(()=>[i(l(`${e.translate(e.langIndex,"package.version_colon")}${e.packageInfo.version}`),1),R,i(" "+l(`${e.translate(e.langIndex,"package.release_colon")}${e.packageInfo.updated}`),1)]),default:t(()=>[s("p",null,l(e.translate(e.langIndex,"package.list.example.list.description")),1)]),_:1}),a(r,null,{head:t(()=>[i(l(e.translate(e.langIndex,"package.section.example")),1)]),default:t(()=>[a(b,{dataList:e.listData},null,8,["dataList"])]),_:1}),a(r,null,{head:t(()=>[i(l(e.translate(e.langIndex,"package.section.sourceCode")),1)]),default:t(()=>[a(p,null,{default:t(()=>[s("pre",null,l(e.exampleRender),1)]),_:1}),a(k,null,{title:t(()=>[i(l("listData"))]),default:t(()=>[a(p,null,{default:t(()=>[s("pre",null," "+l(e.preListData),1)]),_:1})]),_:1})]),_:1})]),_:1})}const V=c(N,[["render",S]]),w={name:"btb-pkg-list-example-list-container",components:{BTBListExampleList:V}};function y(e,o,f,L,_,g){const d=n("BTBListExampleList");return u(),m(d)}const z=c(w,[["render",y]]);export{z as default};
