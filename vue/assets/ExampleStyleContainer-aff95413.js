import{p as _}from"./packageObj-9b3e3029.js";import{_ as p,r as i,o as m,c as f,w as e,a as t,I as a,t as n,e as o}from"./index-64b23a29.js";const I=`<btb-vue-list 
        v-model="activeID"
        :dataList="listData"
        :defaultActiveID="defaultActiveID" 
        :styleObj="styleObj"/>`,g=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],B={container_entry:{cursor:"pointer"},"entry-active":{"background-color":"#b8dec9"}},k="l13",A={name:"btb-pkg-list-example",data(){return{env:{version:_.list.version,updated:_.list.updated,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-list"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-list"}]},exampleRender:I,listData:g,styleObj:B,defaultActiveID:k,activeID:""}}};const O=o("br",null,null,-1),j={class:"example_activeID"},w=o("pre",null,`const defaultActiveID = 'l13'
`,-1),T=o("pre",null,`const listData = [
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
`,-1),E=o("pre",null,`const _styleObj = {
        'container_entry': {
                cursor: 'pointer'
        },
        'entry-active': {
                'background-color': '#b8dec9'
        }
}
`,-1);function S(b,d,h,v,l,y){const u=i("module-page-head"),r=i("module-section"),D=i("btb-vue-list"),s=i("module-pre"),c=i("module-block"),L=i("module-page");return m(),f(L,{class:"btb-pkg-list-example-style"},{default:e(()=>[t(u,{title:"Example - Style",btnList:l.env.btnList},null,8,["btnList"]),t(r,null,{head:e(()=>[a(n(`Version: ${l.env.version}`)+" ",1),O,a(" "+n(`Release Date: ${l.env.updated}`),1)]),default:e(()=>[o("p",null,n("Here is going to show you about how to use the styleObj and the example of defaultActiveID and v-model of activeID. The activeID is used to mark focused entry, but also allowed to used defaultActiveID to mark entry as default in the begin. Then we can modify the style by the styleObj with using the node class name directly."),1)]),_:1}),t(r,null,{head:e(()=>[a(n("EXAMPLE"))]),default:e(()=>[o("p",j,n(`Active ID: ${l.activeID}`),1),t(D,{dataList:l.listData,modelValue:l.activeID,"onUpdate:modelValue":d[0]||(d[0]=x=>l.activeID=x),defaultActiveID:l.defaultActiveID,styleObj:l.styleObj},null,8,["dataList","modelValue","defaultActiveID","styleObj"])]),_:1}),t(r,null,{head:e(()=>[a(n("CONFIGURATION"))]),default:e(()=>[t(c,null,{title:e(()=>[a(n("Render"))]),default:e(()=>[t(s,null,{default:e(()=>[o("pre",null,n(l.exampleRender)+`
`,1)]),_:1})]),_:1}),t(c,null,{title:e(()=>[a(n("defaultActiveID"))]),default:e(()=>[t(s,null,{default:e(()=>[w]),_:1})]),_:1}),t(c,null,{title:e(()=>[a(n("listData"))]),default:e(()=>[t(s,null,{default:e(()=>[T]),_:1})]),_:1}),t(c,null,{title:e(()=>[a(n("styleObj"))]),default:e(()=>[t(s,null,{default:e(()=>[E]),_:1})]),_:1})]),_:1})]),_:1})}const V=p(A,[["render",S]]),R={name:"btb-pkg-list-example-style-container",components:{BTBListExampleStyle:V}};function N(b,d,h,v,l,y){const u=i("BTBListExampleStyle");return m(),f(u)}const U=p(R,[["render",N]]);export{U as default};
