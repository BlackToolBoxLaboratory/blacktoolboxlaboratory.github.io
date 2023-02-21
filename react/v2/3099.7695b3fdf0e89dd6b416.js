"use strict";(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[3099],{3099:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),c=a(9704),r=a(7814),d=a(1719),s=a(6742),i=a(2007),l=a(6520),o=a(9092),m=[{name:"Name",id:"name"},{name:"Type",id:"devType"},{name:"OS",id:"osType"},{name:"IP",id:"ipAddr"},{name:"MAC",id:"macAddr"},{name:"Traffic(tx / rx)",id:"traffic"},{name:"Statue",id:"statusDesc"}],p=[{name:"Device 1",devType:"phone",osType:"ios",ipAddr:"192.168.0.50",macAddr:"B4:A2:07:44:55:2A",traffic:"1.7 MB / 45 KB",status:0,statusDesc:"Disconnected"},{name:"Device 2",devType:"notebook",osType:"windows",ipAddr:"192.168.0.52",macAddr:"B4:A2:07:44:DD:FF",traffic:"4.8 MB / 27 KB",status:0,statusDesc:"Disconnected"}],u={"th-name":"Device Name","th-ipAddr":n.createElement("span",null,"IP Link ",n.createElement(r.G,{className:"item_button",icon:["fas","external-link-alt"],fixedWidth:!0})),"td-ipAddr":function(e,t){return n.createElement("a",{href:"http://".concat(e[t.id]),target:"_blank",rel:"noreferrer"},e[t.id])}},h=function(){return(0,c.v9)((function(e){return{languageSetting:e.language.languageSetting}})),n.createElement(l.T3,{id:"btb-pkg-table-example-slot"},n.createElement(l.yG,{title:s.K.translate("package.table.example.slot.title"),clickBtn:i.n,linkList:o.Z.linkList}),n.createElement(l.$0,{head:n.createElement(n.Fragment,null,"".concat(s.K.translate("package.version_colon")).concat(o.Z.version),n.createElement("br",null),"".concat(s.K.translate("package.release_colon")).concat(o.Z.updated))},n.createElement("p",null,s.K.translate("package.table.example.slot.description"))),n.createElement(l.$0,{head:s.K.translate("package.section.example")},n.createElement(d.Z,{className:"table_sample",mode:"compare",headData:m,bodyData:p,slotObj:u})),n.createElement(l.$0,{head:s.K.translate("package.section.sourceCode")},n.createElement("pre",{className:"page_pre"},'<BTBTable \n        mode="compare" \n        headData={headData} \n        bodyData={bodyData}\n        slotObj={slotObj}/>'),n.createElement(l.gO,{title:"headData"},n.createElement("pre",{className:"page_pre"},"const headDate = [\n        {name : 'Name', id : 'name' },\n        {name : 'Type', id : 'devType' },\n        {name : 'OS', id : 'osType' },\n        {name : 'IP', id : 'ipAddr' },\n        {name : 'MAC', id : 'macAddr' },\n        {name : 'Traffic(tx / rx)', id : 'traffic' },\n        {name : 'Statue', id : 'statusDesc'}\n];")),n.createElement(l.gO,{title:"bodyData"},n.createElement("pre",{className:"page_pre"},"const bodyData = [\n  {\n    name : 'Device 1',  \n    devType : 'phone',   \n    osType : 'ios',      \n    ipAddr : '192.168.0.50',   \n    macAddr : 'B4:A2:07:44:55:2A', \n    traffic : '1.7 MB / 45 KB', \n    status : 0, \n    statusDesc : 'Disconnected'\n  },\n  {\n    name : 'Device 2',  \n    devType : 'notebook',   \n    osType : 'windows',      \n    ipAddr : '192.168.0.52',   \n    macAddr : 'B4:A2:07:44:DD:FF', \n    traffic : '4.8 MB / 27 KB', \n    status : 0, \n    statusDesc : 'Disconnected'\n  }\n];")),n.createElement(l.gO,{title:"slotObj"},n.createElement("p",null,"'th-name' shows the customized slot with pure string. 'th-ipAddr' shows how to customized with Node. And 'td-ipAddr' shows how to customized with function."),n.createElement("pre",{className:"page_pre"},"const slotObj = {\n        'th-name'   : 'Device Name',\n        'th-ipAddr' : (\n                <span>\n                        {'IP Link '}\n                        <FAI className=\"item_button\" icon={['fas', 'external-link-alt']} fixedWidth />\n                </span>\n        ),\n        'td-ipAddr' : (data, column) => {\n                return (\n                        <a href={`http://${data[column.id]}`} target=\"_blank\" rel=\"noreferrer\">\n                                {data[column.id]}\n                        </a>\n                );\n        }\n};"))))},f=function(){return n.createElement(h,null)}}}]);