import{p}from"./packageObj-9b3e3029.js";import{_ as u,r as n,o as _,c as m,w as e,a as t,I as i,t as l,e as s}from"./index-64b23a29.js";const g='<btb-vue-list :dataList="listData"/>',k=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],D={name:"btb-pkg-list-example",data(){return{env:{version:p.list.version,updated:p.list.updated,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-list"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-list"}]},exampleRender:g,listData:k}}},E=s("br",null,null,-1),$=s("pre",null,`const listData = [
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
`,-1);function w(f,b,L,h,a,x){const o=n("module-page-head"),d=n("module-section"),B=n("btb-vue-list"),c=n("module-pre"),r=n("module-block"),v=n("module-page");return _(),m(v,{class:"btb-pkg-list-example-list"},{default:e(()=>[t(o,{title:"Example - List",btnList:a.env.btnList},null,8,["btnList"]),t(d,null,{head:e(()=>[i(l(`Version: ${a.env.version}`)+" ",1),E,i(" "+l(`Release Date: ${a.env.updated}`),1)]),default:e(()=>[s("p",null,l("Here is a very simple example for a list, if we just give a data list."),1)]),_:1}),t(d,null,{head:e(()=>[i(l("EXAMPLE"))]),default:e(()=>[t(B,{dataList:a.listData},null,8,["dataList"])]),_:1}),t(d,null,{head:e(()=>[i(l("CONFIGURATION"))]),default:e(()=>[t(r,null,{title:e(()=>[i(l("Render"))]),default:e(()=>[t(c,null,{default:e(()=>[s("pre",null,l(a.exampleRender)+`
`,1)]),_:1})]),_:1}),t(r,null,{title:e(()=>[i(l("listData"))]),default:e(()=>[t(c,null,{default:e(()=>[$]),_:1})]),_:1})]),_:1})]),_:1})}const R=u(D,[["render",w]]),T={name:"btb-pkg-list-example-list-container",components:{BTBListExampleList:R}};function N(f,b,L,h,a,x){const o=n("BTBListExampleList");return _(),m(o)}const j=u(T,[["render",N]]);export{j as default};
