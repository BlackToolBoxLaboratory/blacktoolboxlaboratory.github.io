import{d as k,u as x,s as B,t as $,bv as E,_ as m,r as l,o as d,c,w as o,a as t,M as n,f as a,e as p}from"./index-262b4e22.js";import{p as I}from"./packageInfo-f63a8ab5.js";import"./packageObj-79978fe6.js";const L=`<btb-vue-popover position="left">
        <template #trigger>
                <button>Left</button>
        </template>

        Example: Left
</btb-vue-popover>

<btb-vue-popover position="top">
        <template #trigger>
                  <button>Top</button>
        </template>

        Example: Top
</btb-vue-popover>

<btb-vue-popover position="bottom">
        <template #trigger>
                <button>Bottom</button>
        </template>

        Example: Bottom
</btb-vue-popover>

<btb-vue-popover position="right">
        <template #trigger>
                <button>Right</button>
        </template>

        Example: Right
</btb-vue-popover>
`,T=k({name:"btb-pkg-popover-example-position",setup(){const e=x(),{langIndex:i}=B(e);return{packageInfo:I,preRender:L,langIndex:i,translate:$,openLink:E}}});const P=p("br",null,null,-1),C={class:"position_example"},R=p("button",null,"Left",-1),y=p("button",null,"Top",-1),N=p("button",null,"Bottom",-1),S=p("button",null,"Right",-1);function V(e,i,g,_,b,v){const r=l("module-page-head"),u=l("module-section"),s=l("btb-vue-popover"),f=l("module-pre"),h=l("module-page");return d(),c(h,{class:"btb-pkg-popover-example-position"},{default:o(()=>[t(r,{title:e.translate(e.langIndex,"package.popover.example.position.title"),btnList:e.packageInfo.linkList,onClickBtn:e.openLink},null,8,["title","btnList","onClickBtn"]),t(u,null,{head:o(()=>[n(a(`${e.translate(e.langIndex,"package.version_colon")}${e.packageInfo.version}`),1),P,n(" "+a(`${e.translate(e.langIndex,"package.release_colon")}${e.packageInfo.updated}`),1)]),default:o(()=>[p("p",null,a(e.translate(e.langIndex,"package.popover.example.position.description")),1)]),_:1}),t(u,null,{head:o(()=>[n(a(e.translate(e.langIndex,"package.section.example")),1)]),default:o(()=>[p("div",C,[t(s,{position:"left"},{trigger:o(()=>[R]),default:o(()=>[n(" Example: Left ")]),_:1}),t(s,{position:"top"},{trigger:o(()=>[y]),default:o(()=>[n(" Example: Top ")]),_:1}),t(s,{position:"bottom"},{trigger:o(()=>[N]),default:o(()=>[n(" Example: Bottom ")]),_:1}),t(s,{position:"right"},{trigger:o(()=>[S]),default:o(()=>[n(" Example: Right ")]),_:1})])]),_:1}),t(u,null,{head:o(()=>[n(a(e.translate(e.langIndex,"package.section.sourceCode")),1)]),default:o(()=>[t(f,null,{default:o(()=>[p("pre",null,a(e.preRender),1)]),_:1})]),_:1})]),_:1})}const w=m(T,[["render",V]]),D={name:"btb-pkg-popover-example-position-container",components:{BTBPopoverExamplePostion:w}};function M(e,i,g,_,b,v){const r=l("BTBPopoverExamplePostion");return d(),c(r)}const A=m(D,[["render",M]]);export{A as default};
