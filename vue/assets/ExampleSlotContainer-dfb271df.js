import{p as r}from"./packageObj-ab89dbe7.js";import{d as v,bv as x,_ as p,r as a,o as u,c as m,w as t,a as l,M as n,f as e,e as i}from"./index-64022100.js";const $=`<btb-vue-list :dataList="listData"/>
      <template #b2>
              {{'b2 customized by Slot'}}
      </template>
      <template #l22="{item}">
              {{ \`l22 overwrited by Slot, show title: \${item.title} \` }}
      </template>
</btb-vue-list>`,y=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],S=v({name:"btb-pkg-list-example",setup(){return{version:r.list.version,updated:r.list.updated,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-list"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-list"}],exampleRender:$,listData:y,openLink:x}}}),D=i("br",null,null,-1),E=i("pre",null,`const listData = [
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
`,-1);function C(o,b,_,h,f,L){const s=a("module-page-head"),d=a("module-section"),B=a("btb-vue-list"),c=a("module-pre"),w=a("module-block"),g=a("module-page");return u(),m(g,{class:"btb-pkg-list-example-slot"},{default:t(()=>[l(s,{title:"Example - Slot",btnList:o.btnList,onClickBtn:o.openLink},null,8,["btnList","onClickBtn"]),l(d,null,{head:t(()=>[n(e(`Version: ${o.version}`)+" ",1),D,n(" "+e(`Release Date: ${o.updated}`),1)]),default:t(()=>[i("p",null,e("Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, I show you how to customized the entry which ID is b2. For the package of list, every single ID corresponding to listdata could be customized by slot."),1)]),_:1}),l(d,null,{head:t(()=>[n(e("EXAMPLE"))]),default:t(()=>[l(B,{dataList:o.listData},{b2:t(()=>[n(e("b2 overwrited by Slot"))]),l22:t(({item:k})=>[n(e(`l22 overwrited by Slot, show title: ${k.title} `),1)]),_:1},8,["dataList"])]),_:1}),l(d,null,{head:t(()=>[n(e("SOURCE CODE"))]),default:t(()=>[l(c,null,{default:t(()=>[i("pre",null,e(o.exampleRender),1)]),_:1}),l(w,null,{title:t(()=>[n(e("listData"))]),default:t(()=>[l(c,null,{default:t(()=>[E]),_:1})]),_:1})]),_:1})]),_:1})}const T=p(S,[["render",C]]),z={name:"btb-pkg-list-example-slot-container",components:{BTBListExampleSlot:T}};function R(o,b,_,h,f,L){const s=a("BTBListExampleSlot");return u(),m(s)}const N=p(z,[["render",R]]);export{N as default};
