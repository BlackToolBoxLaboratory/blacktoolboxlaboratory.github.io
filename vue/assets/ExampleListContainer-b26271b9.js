import{p}from"./packageObj-15dea63c.js";import{o as x}from"./functions-b0e39c2c.js";import{d as $,_ as r,r as a,o as u,c as m,w as e,a as t,I as i,t as n,e as o}from"./index-95f06f98.js";const v='<btb-vue-list :dataList="listData"/>',D=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],E=$({name:"btb-pkg-list-example",setup(){return{version:p.list.version,updated:p.list.updated,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-list"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-list"}],exampleRender:v,listData:D,openLink:x}}}),C=o("br",null,null,-1),w=o("pre",null,`const listData = [
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
]
          `,-1);function R(l,_,f,b,L,h){const s=a("module-page-head"),d=a("module-section"),B=a("btb-vue-list"),c=a("module-pre"),k=a("module-block"),g=a("module-page");return u(),m(g,{class:"btb-pkg-list-example-list"},{default:e(()=>[t(s,{title:"Example - List",btnList:l.btnList,onClickBtn:l.openLink},null,8,["btnList","onClickBtn"]),t(d,null,{head:e(()=>[i(n(`Version: ${l.version}`)+" ",1),C,i(" "+n(`Release Date: ${l.updated}`),1)]),default:e(()=>[o("p",null,n("Here is a very simple example for a list, if we just give a data list."),1)]),_:1}),t(d,null,{head:e(()=>[i(n("EXAMPLE"))]),default:e(()=>[t(B,{dataList:l.listData},null,8,["dataList"])]),_:1}),t(d,null,{head:e(()=>[i(n("SOURCE CODE"))]),default:e(()=>[t(c,null,{default:e(()=>[o("pre",null,n(l.exampleRender),1)]),_:1}),t(k,null,{title:e(()=>[i(n("listData"))]),default:e(()=>[t(c,null,{default:e(()=>[w]),_:1})]),_:1})]),_:1})]),_:1})}const T=r(E,[["render",R]]),V={name:"btb-pkg-list-example-list-container",components:{BTBListExampleList:T}};function j(l,_,f,b,L,h){const s=a("BTBListExampleList");return u(),m(s)}const S=r(V,[["render",j]]);export{S as default};
