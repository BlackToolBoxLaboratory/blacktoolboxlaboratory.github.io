import{d as $,u as v,s as I,t as S,bv as D,_ as c,r as o,o as m,c as u,w as t,a,M as n,f as l,e as i}from"./index-d83f0453.js";import{p as w}from"./packageInfo-0260da02.js";import"./packageObj-d1ee65fd.js";const C=`<btb-vue-list :dataList="listData"/>
      <template #b2>
              {{'b2 customized by Slot'}}
      </template>
      <template #l22="{item}">
              {{ \`l22 overwrited by Slot, show title: \${item.title} \` }}
      </template>
</btb-vue-list>`,x=`const listData = [
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
]`,y=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],T=$({name:"btb-pkg-list-example",setup(){const e=v(),{langIndex:s}=I(e);return{packageInfo:w,exampleRender:C,preListData:x,listData:y,langIndex:s,translate:S,openLink:D}}}),E=i("br",null,null,-1);function N(e,s,f,b,_,g){const d=o("module-page-head"),r=o("module-section"),L=o("btb-vue-list"),p=o("module-pre"),h=o("module-block"),k=o("module-page");return m(),u(k,{class:"btb-pkg-list-example-slot"},{default:t(()=>[a(d,{title:e.translate(e.langIndex,"package.list.example.slot.title"),btnList:e.packageInfo.linkList,onClickBtn:e.openLink},null,8,["title","btnList","onClickBtn"]),a(r,null,{head:t(()=>[n(l(`${e.translate(e.langIndex,"package.version_colon")}${e.packageInfo.version}`),1),E,n(" "+l(`${e.translate(e.langIndex,"package.release_colon")}${e.packageInfo.updated}`),1)]),default:t(()=>[i("p",null,l(e.translate(e.langIndex,"package.list.example.slot.description")),1)]),_:1}),a(r,null,{head:t(()=>[n(l(e.translate(e.langIndex,"package.section.example")),1)]),default:t(()=>[a(L,{dataList:e.listData},{b2:t(()=>[n(l("b2 overwrited by Slot"))]),l22:t(({item:B})=>[n(l(`l22 overwrited by Slot, show title: ${B.title} `),1)]),_:1},8,["dataList"])]),_:1}),a(r,null,{head:t(()=>[n(l(e.translate(e.langIndex,"package.section.sourceCode")),1)]),default:t(()=>[a(p,null,{default:t(()=>[i("pre",null,l(e.exampleRender),1)]),_:1}),a(h,null,{title:t(()=>[n(l("listData"))]),default:t(()=>[a(p,null,{default:t(()=>[i("pre",null," "+l(e.preListData),1)]),_:1})]),_:1})]),_:1})]),_:1})}const R=c(T,[["render",N]]),V={name:"btb-pkg-list-example-slot-container",components:{BTBListExampleSlot:R}};function z(e,s,f,b,_,g){const d=o("BTBListExampleSlot");return m(),u(d)}const A=c(V,[["render",z]]);export{A as default};
