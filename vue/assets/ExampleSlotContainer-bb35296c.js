import{p as r}from"./packageObj-ad5f4fef.js";import{o as w}from"./functions-b0e39c2c.js";import{d as v,_ as p,r as a,o as u,c as m,w as t,a as l,I as n,t as e,e as i}from"./index-7c65f873.js";const x=`<btb-vue-list :dataList="listData"/>
      <template #b2>
              {{'b2 customized by Slot'}}
      </template>
      <template #l22>
              {{ "l22 overwrited by Slot" }}
      </template>
</btb-vue-list>`,y=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],S=v({name:"btb-pkg-list-example",setup(){return{version:r.list.version,updated:r.list.updated,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-list"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-list"}],exampleRender:x,listData:y,openLink:w}}}),$=i("br",null,null,-1),D=i("pre",null,`const listData = [
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
`,-1);function E(o,b,_,f,h,L){const s=a("module-page-head"),d=a("module-section"),B=a("btb-vue-list"),c=a("module-pre"),g=a("module-block"),k=a("module-page");return u(),m(k,{class:"btb-pkg-list-example-slot"},{default:t(()=>[l(s,{title:"Example - Slot",btnList:o.btnList,onClickBtn:o.openLink},null,8,["btnList","onClickBtn"]),l(d,null,{head:t(()=>[n(e(`Version: ${o.version}`)+" ",1),$,n(" "+e(`Release Date: ${o.updated}`),1)]),default:t(()=>[i("p",null,e("Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, I show you how to customized the entry which ID is b2. For the package of list, every single ID corresponding to listdata could be customized by slot."),1)]),_:1}),l(d,null,{head:t(()=>[n(e("EXAMPLE"))]),default:t(()=>[l(B,{dataList:o.listData},{b2:t(()=>[n(e("b2 overwrited by Slot"))]),l22:t(()=>[n(e("l22 overwrited by Slot"))]),_:1},8,["dataList"])]),_:1}),l(d,null,{head:t(()=>[n(e("SOURCE CODE"))]),default:t(()=>[l(c,null,{default:t(()=>[i("pre",null,e(o.exampleRender),1)]),_:1}),l(g,null,{title:t(()=>[n(e("listData"))]),default:t(()=>[l(c,null,{default:t(()=>[D]),_:1})]),_:1})]),_:1})]),_:1})}const C=p(S,[["render",E]]),T={name:"btb-pkg-list-example-slot-container",components:{BTBListExampleSlot:C}};function z(o,b,_,f,h,L){const s=a("BTBListExampleSlot");return u(),m(s)}const N=p(T,[["render",z]]);export{N as default};
