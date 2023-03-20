import{p as u}from"./packageObj-7a57e3cd.js";import{d as B,aJ as k,bv as O,_,r as a,o as b,c as m,w as e,a as l,M as i,f as n,e as o}from"./index-bd8b578a.js";const j=`<btb-vue-list 
        v-model:activeID="activeID"
        :dataList="listData"
        :styleObj="styleObj"/>`,x=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],I={container_entry:{cursor:"pointer"},"entry-active":{"background-color":"#41b883"}},$=B({name:"btb-pkg-list-example",data(){const t=k("l13");return{version:u.list.version,updated:u.list.updated,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-list"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-list"}],exampleRender:j,listData:x,styleObj:I,activeID:t,openLink:O}}});const w=o("br",null,null,-1),E={class:"example_activeID"},C=o("pre",null,`const listData = [
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
          `,-1),S=o("pre",null,`const _styleObj = {
        'container_entry': {
                cursor: 'pointer'
        },
        'entry-active': {
                'background-color': '#41b883'
        }
}
`,-1);function T(t,s,f,h,y,v){const d=a("module-page-head"),c=a("module-section"),L=a("btb-vue-list"),r=a("module-pre"),p=a("module-block"),D=a("module-page");return b(),m(D,{class:"btb-pkg-list-example-style"},{default:e(()=>[l(d,{title:"Example - Style",btnList:t.btnList,onClickBtn:t.openLink},null,8,["btnList","onClickBtn"]),l(c,null,{head:e(()=>[i(n(`Version: ${t.version}`)+" ",1),w,i(" "+n(`Release Date: ${t.updated}`),1)]),default:e(()=>[o("p",null,n("Here is going to show you about how to use the styleObj and the example v-model of activeID. The activeID is used to mark focused entry. Then we can modify the style by the styleObj with using the node class name directly."),1)]),_:1}),l(c,null,{head:e(()=>[i(n("EXAMPLE"))]),default:e(()=>[o("p",E,n(`Active ID: ${t.activeID}`),1),l(L,{dataList:t.listData,activeID:t.activeID,"onUpdate:activeID":s[0]||(s[0]=g=>t.activeID=g),styleObj:t.styleObj},null,8,["dataList","activeID","styleObj"])]),_:1}),l(c,null,{head:e(()=>[i(n("SOURCE CODE"))]),default:e(()=>[l(r,null,{default:e(()=>[o("pre",null,n(t.exampleRender),1)]),_:1}),l(p,null,{title:e(()=>[i(n("listData"))]),default:e(()=>[l(r,null,{default:e(()=>[C]),_:1})]),_:1}),l(p,null,{title:e(()=>[i(n("styleObj"))]),default:e(()=>[l(r,null,{default:e(()=>[S]),_:1})]),_:1})]),_:1})]),_:1})}const R=_($,[["render",T]]),V={name:"btb-pkg-list-example-style-container",components:{BTBListExampleStyle:R}};function N(t,s,f,h,y,v){const d=a("BTBListExampleStyle");return b(),m(d)}const U=_(V,[["render",N]]);export{U as default};
