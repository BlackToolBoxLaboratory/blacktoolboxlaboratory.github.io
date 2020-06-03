(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65dfa530"],{"46fb":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BTBTableBasic")},n=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("module-page",{staticClass:"btb-pkg-table-basic"},[a("module-page-head",{attrs:{title:"Table",btnList:e.env.btnList},on:{clickBtn:e.openLink}}),a("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("Version: "+e.env.version)+" "),a("br"),e._v(" "+e._s("Release Date: "+e.env.updated)+" ")]},proxy:!0}])},[a("p",[e._v(" "+e._s(e.env.description)+" ")])]),a("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("INSTALLATION")+" ")]},proxy:!0}])},[a("module-pre",[a("pre",[e._v("$ npm install --save @blacktoolbox/vue-table\n\n"),a("code",{staticClass:"pre_notice"},[e._v("// create a plugin for vue to use table")]),e._v("\nimport Vue from 'vue'\n\nimport BTBTable from '@blacktoolbox/vue-table'\nimport '@blacktoolbox/vue-table/lib/index.css'\n\nVue.use(BTBTable)\n")])])],1),a("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("RENDER")+" ")]},proxy:!0}])},[a("module-pre",[a("pre",[e._v(e._s(e.exampleRender)+"\n")])])],1),a("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("PARAMETERS")+" ")]},proxy:!0}])},[a("module-block",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s("Basic")+" ")]},proxy:!0}])},[a("btb-vue-table",{staticClass:"page_table block_item",attrs:{headData:e.tableHeadArr_property,bodyData:e.tableBodyArr_basic,xScrollable:""}})],1),a("module-block",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s("headObj")+" ")]},proxy:!0}])},[a("module-pre",{staticClass:"block_item"},[a("pre",[e._v(e._s(e.exampleEntryObj)+"\n")])]),a("btb-vue-table",{staticClass:"page_table block_item",attrs:{headData:e.tableHeadArr_property,bodyData:e.tableBodyArr_head,xScrollable:""}})],1),a("module-block",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s("dataObj")+" ")]},proxy:!0}])},[a("p",[e._v(" "+e._s("It's avaliable to use original data or revised data. But the key name need to be corresponding to id of headObj from headData.")+" ")])])],1),a("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("NODE TREE")+" ")]},proxy:!0}])},[a("btb-vue-list",{staticClass:"page_node_tree",attrs:{dataList:e.nodeTree}}),a("p",[e._v(" "+e._s("Note: The data order is counted base on 0.")+" ")])],1)],1)},i=[],r=(a("a4d3"),a("e01a"),a("fc08")),d='<btb-vue-table\n        :headData=" Array " \n        :bodyData=" Array " \n        :bodyWidth=" String || Number"\n        :xScrollable=" Boolean "/>',s="entryObj = {\n        id: '',\n        name: ''\n}",b=[{id:"table",title:"<div> .btb-vue-table .table-x-scrollable",children:[{id:"container",title:"<table> .table_container",children:[{id:"head",title:"<thead> .container_head",children:[{id:"head_tr",title:"<tr> .head_tr",children:[{id:"tr_th",title:"<th> .tr_th .th-[column id]"}]}]},{id:"body",title:"<tbody> .container_body",children:[{id:"body_tr",title:"<tr> .body_tr .tr-[data order]",children:[{id:"tr_td",title:"<td> .tr_td .td-[column id]"}]}]}]}]}],c={name:"btb-pkg-list-basic",data:function(){return{env:{version:r["a"].table.version,updated:r["a"].table.updated,description:r["a"].table.description,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-table"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-table"}]},exampleRender:d,exampleEntryObj:s,tableHeadArr_property:[{name:"Property Name",index:"title"},{name:"Type",index:"type"},{name:"Default",index:"default"},{name:"Notice",index:"notice"}],tableBodyArr_basic:[{title:"headData",type:"Array",default:"[]",notice:"List of headObj for table."},{title:"bodyData",type:"Array",default:"[]",notice:"List of dataObj for table"},{title:"bodyWidth",type:"String || Number",default:"undefined",notice:"Width of table."},{title:"xScrollable",type:"Boolean",default:"undefined",notice:"Active's table x scroll bar.."}],tableBodyArr_head:[{title:"index",type:"String",default:"undefined",notice:"As an identity to column and also an index to key name of dataObj"},{title:"name",type:"String",default:"undefined",notice:"The name of table's head."}],tableBodyArr_body:[{title:"id",type:"String",default:"undefined",notice:"Identity of entry"},{title:"title",type:"String",default:"''",notice:"Show name of entry."},{title:"defaultCollapsed",type:"String",default:"undefined",notice:"Default value to collapsed of extend."},{title:"children",type:"Array",default:"[]",notice:"sublist"}],nodeTree:b}}},u=c,p=a("2877"),f=Object(p["a"])(u,l,i,!1,null,null,null),_=f.exports,m={name:"btb-pkg-table-basic-container",components:{BTBTableBasic:_}},y=m,h=Object(p["a"])(y,o,n,!1,null,null,null);t["default"]=h.exports},fc08:function(e,t,a){"use strict";var o={list:{name:"List",routename:"packages.list.basic",description:"This module of list creator based on VueJS can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.",version:"1.4.3",updated:"May. 24, 2020"},table:{name:"Table",routename:"packages.table.basic",description:"This module of table creator based on VueJS can do the help to make a table component to our page.",version:"0.1.0",updated:"Apr. 27, 2020"}};t["a"]=o}}]);
//# sourceMappingURL=chunk-65dfa530.ee26c853.js.map