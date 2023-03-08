import{p as u}from"./packageObj-9b3e3029.js";import{_ as p,r as o,o as m,c as _,w as t,a as e,I as n,t as l,e as i}from"./index-64b23a29.js";const v=`<btb-vue-list :dataList="listData"/>
      <template #b2>
              {{'Branch 2 customized by slot'}}
      </template>
</btb-vue-list>`,w=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],k={name:"btb-pkg-list-example",data(){return{env:{version:u.list.version,updated:u.list.updated,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-list"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-list"}]},exampleRender:v,listData:w}}},y=i("br",null,null,-1),D=i("pre",null,`const listData = [
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
`,-1);function T(b,h,f,L,a,x){const s=o("module-page-head"),c=o("module-section"),B=o("btb-vue-list"),d=o("module-pre"),r=o("module-block"),g=o("module-page");return m(),_(g,{class:"btb-pkg-list-example-slot"},{default:t(()=>[e(s,{title:"Example - Slot",btnList:a.env.btnList},null,8,["btnList"]),e(c,null,{head:t(()=>[n(l(`Version: ${a.env.version}`)+" ",1),y,n(" "+l(`Release Date: ${a.env.updated}`),1)]),default:t(()=>[i("p",null,l("Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, I show you how to customized the entry which ID is b2. For the package of list, every single ID corresponding to listdata could be customized by slot."),1)]),_:1}),e(c,null,{head:t(()=>[n(l("EXAMPLE"))]),default:t(()=>[e(B,{dataList:a.listData},{b2:t(()=>[n(l("Branch 2 customized by slot"))]),_:1},8,["dataList"])]),_:1}),e(c,null,{head:t(()=>[n(l("CONFIGURATION"))]),default:t(()=>[e(r,null,{title:t(()=>[n(l("Render"))]),default:t(()=>[e(d,null,{default:t(()=>[i("pre",null,l(a.exampleRender)+`
`,1)]),_:1})]),_:1}),e(r,null,{title:t(()=>[n(l("listData"))]),default:t(()=>[e(d,null,{default:t(()=>[D]),_:1})]),_:1})]),_:1})]),_:1})}const E=p(k,[["render",T]]),S={name:"btb-pkg-list-example-slot-container",components:{BTBListExampleSlot:E}};function $(b,h,f,L,a,x){const s=o("BTBListExampleSlot");return m(),_(s)}const R=p(S,[["render",$]]);export{R as default};
