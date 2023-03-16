import{p}from"./packageObj-ad5f4fef.js";import{o as k}from"./functions-b0e39c2c.js";import{d as j,_ as b,r as i,o as y,c as m,w as e,a as t,I as n,t as a,e as o}from"./index-7c65f873.js";const O=`<btb-vue-list 
        :dataList=" Array " 
        :activeID=" String "
        :collapseEnable=" Boolean "
        :styleObj=" Object "
        @clickEntry=" function(ListItemObj){} "
        @toggleCollapsed=" function(ListItemObj){} "/>`,D=`ListItemObj = {
        id: '',
        title: '',
        href: '',
        defaultCollapsed: false,
        children: [...]
}`,S=`styleObj = {
        [ className ]: { inline CSS }
}`,A=[{id:"list",title:"<div> .btb-vue-list",children:[{id:"layer",title:"<ul> .btb-vue-list-layer .layer-[layer count]",children:[{id:"container",title:"<li> .layer-container .layer-[layer count]",children:[{id:"entry",title:"<div> .container_entry .entry-[id] .entry-active",children:[{id:"title",title:"<div> .entry_title"},{id:"collapseBtn",title:"<div> .entry_collapseBtn .collapseBtn-default",children:[{id:"arrow",title:"<div> .collapseBtn_arrow"}]}]},{id:"sublayer",title:"<div>.list_sublayer",children:[{id:"next",title:"<ul>.btb-vue-list-layer.layer-[layer count + 1]"}]}]}]}]}],E=j({name:"btb-pkg-list-basic",setup(){return{version:p.list.version,updated:p.list.updated,description:p.list.description,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-list"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-list"}],exampleRender:O,exampleEntryObj:D,preStyleObj:S,tableHeadArr_property:[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],tableHeadArr_slot:[{name:"Name",id:"title"},{name:"Props",id:"props"},{name:"Notice",id:"notice"}],tableBodyArr_basic:[{title:"dataList",type:"Array",default:"[]",notice:"List of ListItemObj."},{title:"collapseEnable",type:"Boolean",default:"false",notice:"Enable collapse feature."},{title:"activeID (v-model)",type:"String",default:"undefined",notice:"Active entry's ID which is v-model's value."},{title:"styleObj",type:"Object",default:"undefined",notice:"Specific style object, where key is spacific class name, value is style object. Please refer to Node Tree."},{title:"@clickEntry",type:"$Emit",default:"function(ListItemObj){}",notice:"List entry's click function."},{title:"@toggleCollapsed",type:"$Emit",default:"function(ListItemObj){}",notice:"List entry's toggle function."}],tableBodyArr_entry:[{title:"id",type:"String",default:"undefined",notice:"Identity of entry"},{title:"title",type:"String",default:"''",notice:"Show name of entry."},{title:"href",type:"String",default:"''",notice:"For link."},{title:"defaultCollapsed",type:"String",default:"undefined",notice:"Default value to collapsed of extend."},{title:"children",type:"Array",default:"[]",notice:"sublist"}],tableBodyArr_slot:[{title:"[ id of ListItemObj ]",props:"-",notice:"Slot for customized entry."}],nodeTree:A,openLink:k}}}),T=o("br",null,null,-1),I=o("pre",null,`$ npm install --save @blacktoolbox/vue-list

import Vue from 'vue'

import BTBList from '@blacktoolbox/vue-list'
import '@blacktoolbox/vue-list/lib/index.css'

Vue.use(BTBList)
        `,-1),N=o("p",null,"Any className in this module could add inline CSS by styleObj.",-1);function $(l,_,f,h,v,B){const d=i("module-page-head"),s=i("module-section"),r=i("module-pre"),c=i("btb-vue-table"),u=i("module-block"),L=i("btb-vue-list"),g=i("module-page");return y(),m(g,{class:"btb-pkg-list-basic"},{default:e(()=>[t(d,{title:"List",btnList:l.btnList,onClickBtn:l.openLink},null,8,["btnList","onClickBtn"]),t(s,null,{head:e(()=>[n(a(`Version: ${l.version}`)+" ",1),T,n(" "+a(`Release Date: ${l.updated}`),1)]),default:e(()=>[o("p",null,a(l.description),1)]),_:1}),t(s,null,{head:e(()=>[n(a("INSTALLATION"))]),default:e(()=>[t(r,null,{default:e(()=>[I]),_:1})]),_:1}),t(s,null,{head:e(()=>[n(a("RENDER"))]),default:e(()=>[t(r,null,{default:e(()=>[o("pre",null,a(l.exampleRender),1)]),_:1})]),_:1}),t(s,null,{head:e(()=>[n(a("PARAMETERS"))]),default:e(()=>[t(c,{class:"page_table block_item",headData:l.tableHeadArr_property,bodyData:l.tableBodyArr_basic,identity:"title"},null,8,["headData","bodyData"]),t(u,null,{title:e(()=>[n(a("ListItemObj"))]),default:e(()=>[t(r,{class:"block_item"},{default:e(()=>[o("pre",null,a(l.exampleEntryObj),1)]),_:1}),t(c,{class:"page_table block_item",headData:l.tableHeadArr_property,bodyData:l.tableBodyArr_entry,xScrollable:""},null,8,["headData","bodyData"])]),_:1}),t(u,null,{title:e(()=>[n(a("styleObj"))]),default:e(()=>[N,t(r,{class:"block_item"},{default:e(()=>[o("pre",null,a(l.preStyleObj),1)]),_:1})]),_:1}),t(u,null,{title:e(()=>[n(a("slots"))]),default:e(()=>[t(c,{class:"page_table block_item",headData:l.tableHeadArr_slot,bodyData:l.tableBodyArr_slot,xScrollable:""},null,8,["headData","bodyData"])]),_:1})]),_:1}),t(s,null,{head:e(()=>[n(a("NODE TREE"))]),default:e(()=>[t(L,{class:"page_node_tree",dataList:l.nodeTree},null,8,["dataList"]),o("p",null,a("Note: The layer count is counted base on 0."),1)]),_:1})]),_:1})}const C=b(E,[["render",$]]),w={name:"btb-pkg-list-basic-container",components:{BTBListBasic:C}};function R(l,_,f,h,v,B){const d=i("BTBListBasic");return y(),m(d)}const P=b(w,[["render",R]]);export{P as default};
