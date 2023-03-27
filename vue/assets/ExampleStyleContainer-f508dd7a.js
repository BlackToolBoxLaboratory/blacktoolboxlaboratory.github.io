import{d as I,u as h,s as D,aJ as B,t as $,bv as j,_ as m,r as n,o as f,c as b,w as t,a,M as o,f as l,e as s}from"./index-eb68d8c1.js";import{p as O}from"./packageInfo-b17e17ce.js";import"./packageObj-2fa2689f.js";const S=`<btb-vue-list 
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
}`,x=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],E={container_entry:{cursor:"pointer"},"entry-active":{"background-color":"#41b883"}},N=I({name:"btb-pkg-list-example-style",data(){const e=h(),{langIndex:i}=D(e),r=B("l13");return{packageInfo:O,exampleRender:S,preListData:C,preStyleObj:T,listData:x,styleObj:E,activeID:r,langIndex:i,translate:$,openLink:j}}});const R=s("br",null,null,-1),V={class:"example_activeID"};function w(e,i,r,_,g,y){const d=n("module-page-head"),c=n("module-section"),L=n("btb-vue-list"),p=n("module-pre"),u=n("module-block"),k=n("module-page");return f(),b(k,{class:"btb-pkg-list-example-style"},{default:t(()=>[a(d,{title:e.translate(e.langIndex,"package.list.example.style.title"),btnList:e.packageInfo.linkList,onClickBtn:e.openLink},null,8,["title","btnList","onClickBtn"]),a(c,null,{head:t(()=>[o(l(`${e.translate(e.langIndex,"package.version_colon")}${e.packageInfo.version}`),1),R,o(" "+l(`${e.translate(e.langIndex,"package.release_colon")}${e.packageInfo.updated}`),1)]),default:t(()=>[s("p",null,l(e.translate(e.langIndex,"package.list.example.style.description")),1)]),_:1}),a(c,null,{head:t(()=>[o(l(e.translate(e.langIndex,"package.section.example")),1)]),default:t(()=>[s("p",V,l(`Active ID: ${e.activeID}`),1),a(L,{dataList:e.listData,activeID:e.activeID,"onUpdate:activeID":i[0]||(i[0]=v=>e.activeID=v),styleObj:e.styleObj},null,8,["dataList","activeID","styleObj"])]),_:1}),a(c,null,{head:t(()=>[o(l(e.translate(e.langIndex,"package.section.sourceCode")),1)]),default:t(()=>[a(p,null,{default:t(()=>[s("pre",null,l(e.exampleRender),1)]),_:1}),a(u,null,{title:t(()=>[o(l("listData"))]),default:t(()=>[a(p,null,{default:t(()=>[s("pre",null," "+l(e.preListData),1)]),_:1})]),_:1}),a(u,null,{title:t(()=>[o(l("styleObj"))]),default:t(()=>[a(p,null,{default:t(()=>[s("pre",null,l(e.preStyleObj)+" ",1)]),_:1})]),_:1})]),_:1})]),_:1})}const A=m(N,[["render",w]]),J={name:"btb-pkg-list-example-style-container",components:{BTBListExampleStyle:A}};function M(e,i,r,_,g,y){const d=n("BTBListExampleStyle");return f(),b(d)}const F=m(J,[["render",M]]);export{F as default};
