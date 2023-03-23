import{d as I,u as h,s as D,aJ as B,t as $,bv as j,_ as m,r as n,o as f,c as b,w as t,a as l,M as o,f as a,e as s}from"./index-e8161bd7.js";import{p as O}from"./packageInfo-68ee8365.js";import"./packageObj-964ab5b0.js";const S=`<btb-vue-list 
        v-model:activeID="activeID"
        :dataList="listData"
        :styleObj="styleObj"/>`,C=`const listData = [
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
]`,T=`const styleObj = {
        'container_entry': {
                cursor: 'pointer'
        },
        'entry-active': {
                'background-color': '#41b883'
        }
}`,x=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],E={container_entry:{cursor:"pointer"},"entry-active":{"background-color":"#41b883"}},N=I({name:"btb-pkg-list-example",data(){const e=h(),{langIndex:i}=D(e),r=B("l13");return{packageInfo:O,exampleRender:S,preListData:C,preStyleObj:T,listData:x,styleObj:E,activeID:r,langIndex:i,translate:$,openLink:j}}});const R=s("br",null,null,-1),V={class:"example_activeID"};function w(e,i,r,_,g,y){const d=n("module-page-head"),c=n("module-section"),L=n("btb-vue-list"),p=n("module-pre"),u=n("module-block"),k=n("module-page");return f(),b(k,{class:"btb-pkg-list-example-style"},{default:t(()=>[l(d,{title:e.translate(e.langIndex,"package.list.example.style.title"),btnList:e.packageInfo.linkList,onClickBtn:e.openLink},null,8,["title","btnList","onClickBtn"]),l(c,null,{head:t(()=>[o(a(`${e.translate(e.langIndex,"package.version_colon")}${e.packageInfo.version}`),1),R,o(" "+a(`${e.translate(e.langIndex,"package.release_colon")}${e.packageInfo.updated}`),1)]),default:t(()=>[s("p",null,a(e.translate(e.langIndex,"package.list.example.style.description")),1)]),_:1}),l(c,null,{head:t(()=>[o(a(e.translate(e.langIndex,"package.section.example")),1)]),default:t(()=>[s("p",V,a(`Active ID: ${e.activeID}`),1),l(L,{dataList:e.listData,activeID:e.activeID,"onUpdate:activeID":i[0]||(i[0]=v=>e.activeID=v),styleObj:e.styleObj},null,8,["dataList","activeID","styleObj"])]),_:1}),l(c,null,{head:t(()=>[o(a(e.translate(e.langIndex,"package.section.sourceCode")),1)]),default:t(()=>[l(p,null,{default:t(()=>[s("pre",null,a(e.exampleRender),1)]),_:1}),l(u,null,{title:t(()=>[o(a("listData"))]),default:t(()=>[l(p,null,{default:t(()=>[s("pre",null," "+a(e.preListData),1)]),_:1})]),_:1}),l(u,null,{title:t(()=>[o(a("styleObj"))]),default:t(()=>[l(p,null,{default:t(()=>[s("pre",null,a(e.preStyleObj)+" ",1)]),_:1})]),_:1})]),_:1})]),_:1})}const A=m(N,[["render",w]]),J={name:"btb-pkg-list-example-style-container",components:{BTBListExampleStyle:A}};function M(e,i,r,_,g,y){const d=n("BTBListExampleStyle");return f(),b(d)}const F=m(J,[["render",M]]);export{F as default};
