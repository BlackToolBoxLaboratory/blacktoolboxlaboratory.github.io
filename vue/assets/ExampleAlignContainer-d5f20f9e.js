import{d as x,u as h,s as B,t as C,bv as $,_ as d,r as p,o as m,c,w as t,a as n,M as o,f as l,e as a}from"./index-262b4e22.js";import{p as I}from"./packageInfo-f63a8ab5.js";import"./packageObj-79978fe6.js";const L=`<btb-vue-popover position="top" align="begin">
        <template #trigger>
                <button>Begin</button>
        </template>

        Example: Begin
</btb-vue-popover>

<btb-vue-popover position="top" align="center">
        <template #trigger>
                <button>Center</button>
        </template>

        Example: Center
</btb-vue-popover>

<btb-vue-popover position="top" align="end">
        <template #trigger>
                <button>End</button>
        </template>

        Example: End
</btb-vue-popover>

<btb-vue-popover position="left" align="begin">
        <template #trigger>
                <button>Begin</button>
        </template>

        Example: Begin
</btb-vue-popover>

<btb-vue-popover position="left" align="center">
        <template #trigger>
                <button>Center</button>
        </template>

        Example: Center
</btb-vue-popover>

<btb-vue-popover position="left" align="end">
        <template #trigger>
                <button>End</button>
        </template>

        Example: End
</btb-vue-popover>
`,A=x({name:"btb-pkg-popover-example-align",setup(){const e=h(),{langIndex:r}=B(e);return{packageInfo:I,preRender:L,langIndex:r,translate:C,openLink:$}}});const T=a("br",null,null,-1),y={class:"align_vertical"},N=a("button",null,"Begin",-1),P=a("button",null,"Center",-1),R=a("button",null,"End",-1),S={class:"align_horizontal"},V=a("button",null,"Begin",-1),w=a("button",null,"Center",-1),z=a("button",null,"End",-1);function D(e,r,b,_,v,f){const s=p("module-page-head"),g=p("module-section"),i=p("btb-vue-popover"),u=p("module-block"),k=p("module-pre"),E=p("module-page");return m(),c(E,{class:"btb-pkg-popover-example-align"},{default:t(()=>[n(s,{title:e.translate(e.langIndex,"package.popover.example.align.title"),btnList:e.packageInfo.linkList,onClickBtn:e.openLink},null,8,["title","btnList","onClickBtn"]),n(g,null,{head:t(()=>[o(l(`${e.translate(e.langIndex,"package.version_colon")}${e.packageInfo.version}`),1),T,o(" "+l(`${e.translate(e.langIndex,"package.release_colon")}${e.packageInfo.updated}`),1)]),default:t(()=>[a("p",null,l(e.translate(e.langIndex,"package.popover.example.align.description")),1)]),_:1}),n(g,null,{head:t(()=>[o(l(e.translate(e.langIndex,"package.section.example")),1)]),default:t(()=>[n(u,null,{title:t(()=>[o(l(e.translate(e.langIndex,"package.popover.example.vertical")),1)]),default:t(()=>[a("div",y,[n(i,{position:"top",align:"begin"},{trigger:t(()=>[N]),default:t(()=>[o(" Example: Begin ")]),_:1}),n(i,{position:"top",align:"center"},{trigger:t(()=>[P]),default:t(()=>[o(" Example: Center ")]),_:1}),n(i,{position:"top",align:"end"},{trigger:t(()=>[R]),default:t(()=>[o(" Example: End ")]),_:1})])]),_:1}),n(u,null,{title:t(()=>[o(l(e.translate(e.langIndex,"package.popover.example.horizontal")),1)]),default:t(()=>[a("div",S,[n(i,{position:"left",align:"begin"},{trigger:t(()=>[V]),default:t(()=>[o(" Example: Begin ")]),_:1}),n(i,{position:"left",align:"center"},{trigger:t(()=>[w]),default:t(()=>[o(" Example: Center ")]),_:1}),n(i,{position:"left",align:"end"},{trigger:t(()=>[z]),default:t(()=>[o(" Example: End ")]),_:1})])]),_:1})]),_:1}),n(g,null,{head:t(()=>[o(l(e.translate(e.langIndex,"package.section.sourceCode")),1)]),default:t(()=>[n(k,null,{default:t(()=>[a("pre",null,l(e.preRender),1)]),_:1})]),_:1})]),_:1})}const M=d(A,[["render",D]]),j={name:"btb-pkg-popover-example-align-container",components:{BTBPopoverExampleAlign:M}};function q(e,r,b,_,v,f){const s=p("BTBPopoverExampleAlign");return m(),c(s)}const J=d(j,[["render",q]]);export{J as default};
