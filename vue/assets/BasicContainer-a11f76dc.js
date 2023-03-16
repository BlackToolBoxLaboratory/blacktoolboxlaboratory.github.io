import{p as u}from"./packageObj-ad5f4fef.js";import{o as S}from"./functions-b0e39c2c.js";import{d as k,_ as m,r as d,o as _,c as y,w as e,a as t,I as o,t as a,e as n}from"./index-7c65f873.js";const B=`<btb-vue-table
        :headData=" Array of TableHeadObj" 
        :bodyData=" Array of TableBodyObj"
        :mode=" String "
        :identity=" String "
        :emptyText= " String "
        :styleObj= " Object "
        @clickTh=" (TableHeadObj) => {} "
        @clickTd=" (TableBodyObj, TableHeadObj) => {} "/>`,v=`TableHeadObj = {
        id: '',
        name: ''
}`,D=`dataObj = {
        [ TableHeadObj.id ] : ''
}`,A=`styleObj = {
        [ className ]: { inline CSS }
}`,w=`slotObj = {
        [ th-\${ headObj.id } ] : '',
        [ td-\${ headObj.id } ] : '',
        [ td-empty ] : '',
        [ info-empty ] : ''
}`,N=[{id:"table",title:"<div> .btb-vue-table",children:[{id:"container",title:"<table> .btb-vue-table-list",children:[{id:"head",title:"<thead> .list_head",children:[{id:"head_tr",title:"<tr> .head_tr",children:[{id:"tr_th",title:"<th> .tr_th .th-[column id]"}]}]},{id:"body",title:"<tbody> .list_body",children:[{id:"body_tr",title:"<tr> .body_tr .tr-[data order]",children:[{id:"tr_td",title:"<td> .tr_td .td-[column id]"}]}]}]}]}],H=[{id:"table",title:"<div> .btb-vue-table"}],$=[{id:"table",title:"<div> .btb-vue-table"}],L=k({name:"btb-pkg-list-basic",setup(){return{version:u.table.version,updated:u.table.updated,description:u.table.description,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-table"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-table"}],exampleRender:B,exampleHeadObj:v,exampleDataObj:D,preStyleObj:A,preSlotObj:w,tableHeadArr_property:[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],tableHeadArr_entry:[{name:"Name",id:"title"},{name:"Type",id:"type"},{name:"Notice",id:"notice"}],tableBodyArr_basic:[{title:"headData",type:"Array",default:"[]",notice:"List of TableHeadObj."},{title:"bodyData",type:"Array",default:"[]",notice:"List of TableBodyObj"},{title:"mode",type:"String",default:"'list'",notice:"Value in list, info or compare."},{title:"identity",type:"String",default:"'id'",notice:"Identity of data."},{title:"emptyText",type:"String",default:"'Empty'",notice:"Showing text when data is empty."},{title:"styleObj",type:"Object",default:"undefined",notice:"Specific style object, where key is spacific class name, value is style object. Please refer to Node Tree."},{title:"@clickTh",type:"$Emit",default:"(TableHeadObj) => {}",notice:"Table head's click function."},{title:"@clickTd",type:"$Emit",default:"(TableBodyObj, TableHeadObj) => {}",notice:"Table data's click function."}],tableBodyArr_head:[{title:"id",type:"String",default:"undefined",notice:"As an identity to column and also an index to key name of dataObj"},{title:"name",type:"String",default:"undefined",notice:"The name of table's head."}],tableBodyArr_slot:[{title:"[ th-${ headObj.id } ]",type:"String || Node",notice:"Slot for customized entry. Here is the example for slot if used. The porps will be entry corresponding the id."},{title:"[ td-${ headObj.id } ]",type:"String || Node",notice:"Slot for customized entry. Here is the example for slot if used. The porps will be entry corresponding the id."},{title:"[ td-empty ]",type:"String || Node",notice:"Slot for showing text when data is empty. This is for mode 'list' and 'compare'"},{title:"[ info-empty ]",type:"String || Node",notice:"Slot for showing text when data is empty. This is for mode 'info'"}],tableBodyArr_body:[{title:"id",type:"String",default:"undefined",notice:"Identity of entry"},{title:"title",type:"String",default:"''",notice:"Show name of entry."},{title:"children",type:"Array",default:"[]",notice:"sublist"}],nodeTree_list:N,nodeTree_info:H,nodeTree_compare:$,openLink:S}}}),x=n("br",null,null,-1),E=n("pre",null,`    $ npm install --save @blacktoolbox/vue-table

    import Vue from 'vue'

    import BTBTable from '@blacktoolbox/vue-table'
    import '@blacktoolbox/vue-table/lib/index.css'

    Vue.use(BTBTable)
            `,-1),C=n("p",null,"Any className in this module could add inline CSS by styleObj.",-1),R=n("p",null,"To vue, We can replace the default node with bodyObj.id by $slot. However we need the prefix to specify which node we want to customized th or td.",-1);function V(l,f,h,T,j,O){const b=d("module-page-head"),s=d("module-section"),r=d("module-pre"),c=d("btb-vue-table"),i=d("module-block"),p=d("btb-vue-list"),g=d("module-page");return _(),y(g,{class:"btb-pkg-table-basic"},{default:e(()=>[t(b,{title:"Table",btnList:l.btnList,onClickBtn:l.openLink},null,8,["btnList","onClickBtn"]),t(s,null,{head:e(()=>[o(a(`Version: ${l.version}`)+" ",1),x,o(" "+a(`Release Date: ${l.updated}`),1)]),default:e(()=>[n("p",null,a(l.description),1)]),_:1}),t(s,null,{head:e(()=>[o(a("INSTALLATION"))]),default:e(()=>[t(r,null,{default:e(()=>[E]),_:1})]),_:1}),t(s,null,{head:e(()=>[o(a("RENDER"))]),default:e(()=>[t(r,null,{default:e(()=>[n("pre",null,a(l.exampleRender)+`
          `,1)]),_:1})]),_:1}),t(s,null,{head:e(()=>[o(a("PARAMETERS"))]),default:e(()=>[t(c,{class:"page_table block_item",headData:l.tableHeadArr_property,bodyData:l.tableBodyArr_basic},null,8,["headData","bodyData"]),t(i,null,{title:e(()=>[o(a("TableHeadObj"))]),default:e(()=>[t(r,{class:"block_item"},{default:e(()=>[n("pre",null,a(l.exampleHeadObj),1)]),_:1}),t(c,{class:"page_table block_item",headData:l.tableHeadArr_entry,bodyData:l.tableBodyArr_head},null,8,["headData","bodyData"])]),_:1}),t(i,null,{title:e(()=>[o(a("TableBodyObj"))]),default:e(()=>[t(r,{class:"block_item"},{default:e(()=>[n("pre",null,a(l.exampleDataObj),1)]),_:1})]),_:1}),t(i,null,{title:e(()=>[o(a("styleObj"))]),default:e(()=>[C,t(r,{class:"block_item"},{default:e(()=>[n("pre",null,a(l.preStyleObj),1)]),_:1})]),_:1}),t(i,null,{title:e(()=>[o(a("slotObj"))]),default:e(()=>[R,t(r,{class:"block_item"},{default:e(()=>[n("pre",null,a(l.preSlotObj),1)]),_:1}),t(c,{class:"page_table block_item",headData:l.tableHeadArr_entry,bodyData:l.tableBodyArr_slot},null,8,["headData","bodyData"])]),_:1})]),_:1}),t(s,null,{head:e(()=>[o(a("NODE TREE"))]),default:e(()=>[t(i,null,{title:e(()=>[o(a("List Mode"))]),default:e(()=>[t(p,{class:"page_node_tree",dataList:l.nodeTree_list},null,8,["dataList"]),n("p",null,a("Note: The data order is counted base on 0."),1)]),_:1}),t(i,null,{title:e(()=>[o(a("Info Mode"))]),default:e(()=>[t(p,{class:"page_node_tree",dataList:l.nodeTree_info},null,8,["dataList"]),n("p",null,a("Note: The data order is counted base on 0."),1)]),_:1}),t(i,null,{title:e(()=>[o(a("Compare Mode"))]),default:e(()=>[t(p,{class:"page_node_tree",dataList:l.nodeTree_compare},null,8,["dataList"]),n("p",null,a("Note: The data order is counted base on 0."),1)]),_:1})]),_:1})]),_:1})}const I=m(L,[["render",V]]),M={name:"btb-pkg-table-basic-container",components:{BTBTableBasic:I}};function z(l,f,h,T,j,O){const b=d("BTBTableBasic");return _(),y(b)}const F=m(M,[["render",z]]);export{F as default};
