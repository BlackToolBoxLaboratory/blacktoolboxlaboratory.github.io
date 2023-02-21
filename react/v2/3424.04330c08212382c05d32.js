"use strict";(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[3424],{3424:function(e,n,l){l.r(n),l.d(n,{default:function(){return s}});var a=l(7294),i=l(9704),t=l(7770),c=l(6742),r=l(2007),o=l(6520),u=l(402);function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,i,t,c,r=[],o=!0,u=!1;try{if(t=(l=l.call(e)).next,0===n){if(Object(l)!==l)return;o=!1}else for(;!(o=(a=t.call(l)).done)&&(r.push(a.value),r.length!==n);o=!0);}catch(e){u=!0,i=e}finally{try{if(!o&&null!=l.return&&(c=l.return(),Object(c)!==c))return}finally{if(u)throw i}}return r}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return k(e,n);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return k(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,n){(null==n||n>e.length)&&(n=e.length);for(var l=0,a=new Array(n);l<n;l++)a[l]=e[l];return a}var B=function(){(0,i.v9)((function(e){return{languageSetting:e.language.languageSetting}}));var e=m((0,a.useState)([]),2),n=e[0],l=e[1],k=function(e,n){l(e),console.log("value",e),console.log("clickedValue",n)};return a.createElement(o.T3,{id:"btb-pkg-form-example"},a.createElement(o.yG,{title:c.K.translate("package.form.example.checkbox.title"),clickBtn:r.n,linkList:u.Z.linkList}),a.createElement(o.$0,{head:a.createElement(a.Fragment,null,"".concat(c.K.translate("package.version_colon")).concat(u.Z.version),a.createElement("br",null),"".concat(c.K.translate("package.release_colon")).concat(u.Z.updated))},a.createElement("p",null,c.K.translate("package.form.example.checkbox.description"))),a.createElement(o.$0,{head:c.K.translate("package.section.example")},a.createElement(o.gO,{title:"props"},a.createElement("div",{className:"form_example"},a.createElement(t.XZ,{value:"inline_1"},"block 1"),a.createElement(t.XZ,{value:"inline_2"},"block 2"),a.createElement(t.XZ,{value:"inline_3"},"block 3")),a.createElement("div",{className:"form_example"},a.createElement(t.XZ,{value:"inline_4",inline:!0},"inline 1"),a.createElement(t.XZ,{value:"inline_5",inline:!0},"inline 2"),a.createElement(t.XZ,{value:"inline_6",inline:!0},"inline 3")),a.createElement("div",{className:"form_example"},a.createElement(t.XZ,{value:"inline_7",color:"red",inline:!0,checked:!0},"Red"),a.createElement(t.XZ,{value:"inline_8",color:"blue",inline:!0},"Blue")),a.createElement("div",{className:"form_example"},a.createElement(t.XZ,{value:"inline_9",inline:!0,disabled:!0},"Disabled"),a.createElement(t.XZ,{value:"inline_10",inline:!0,disabled:!0,checked:!0},"Disabled"),a.createElement(t.XZ,{value:"inline_11",inline:!0,disabled:!0,color:"green",checked:!0},"Disabled Green")),a.createElement("div",{className:"form_example"},a.createElement(t.XZ,{value:"inline_12",size:"0.5rem",inline:!0},"0.5rem"),a.createElement(t.XZ,{value:"inline_13",size:"1rem",inline:!0},"1rem"),a.createElement(t.XZ,{value:"inline_14",size:"1.5rem",inline:!0},"1.5rem"))),a.createElement(o.gO,{title:"useState"},a.createElement(t.XZ,{className:"form_example",value:"state_1",inline:!0,formValue:n,onClick:k},"1"),a.createElement(t.XZ,{className:"form_example",value:"state_2",inline:!0,formValue:n,onClick:k},"2"),a.createElement(t.XZ,{className:"form_example",value:"state_3",inline:!0,formValue:n,onClick:k},"3"),a.createElement(t.XZ,{className:"form_example",value:"state_4",inline:!0,formValue:n,onClick:k},"4"))),a.createElement(o.$0,{head:c.K.translate("package.section.sourceCode")},a.createElement("pre",{className:"page_pre"},'<BTBCheckbox value="inline_1">block 1</BTBCheckbox>\n<BTBCheckbox value="inline_2">block 2</BTBCheckbox>\n<BTBCheckbox value="inline_3">block 3</BTBCheckbox>\n\n<BTBCheckbox value="inline_4" inline>inline 1</BTBCheckbox>\n<BTBCheckbox value="inline_5" inline>inline 2</BTBCheckbox>\n<BTBCheckbox value="inline_6" inline>inline 3</BTBCheckbox>\n\n<BTBCheckbox value="inline_7" color="red" inline checked>Red</BTBCheckbox>\n<BTBCheckbox value="inline_8" color="blue" inline>Blue</BTBCheckbox>\n\n<BTBCheckbox value="inline_9" inline disabled>Disabled</BTBCheckbox>\n<BTBCheckbox value="inline_10" inline disabled checked>Disabled</BTBCheckbox>\n<BTBCheckbox value="inline_11" inline disabled color="green" checked>Disabled Green</BTBCheckbox>\n\n<BTBCheckbox value="inline_12" size="0.5rem" inline>0.5rem</BTBCheckbox>\n<BTBCheckbox value="inline_13" size="1rem" inline>1rem</BTBCheckbox>\n<BTBCheckbox value="inline_14" size="1.5rem" inline>1.5rem</BTBCheckbox>\n\n<BTBCheckbox name="example" value="name_1" inline>1</BTBCheckbox>\n<BTBCheckbox name="example" value="name_2" inline>2</BTBCheckbox>\n<BTBCheckbox name="example" value="name_3" inline>3</BTBCheckbox>\n<BTBCheckbox name="example" value="name_4" inline>4</BTBCheckbox>\n\n<BTBCheckbox value="state_1" inline formValue={radioValue} onClick={_clickRadio}>1</BTBCheckbox>\n<BTBCheckbox value="state_2" inline formValue={radioValue} onClick={_clickRadio}>2</BTBCheckbox>\n<BTBCheckbox value="state_3" inline formValue={radioValue} onClick={_clickRadio}>3</BTBCheckbox>\n<BTBCheckbox value="state_4" inline formValue={radioValue} onClick={_clickRadio}>4</BTBCheckbox>\n'),a.createElement(o.gO,{title:"useState"},a.createElement("pre",{className:"page_pre"},"const [checkboxValue, updateCheckboxValue] = useState([]);\n\nconst _clickCheckbox = (value, clickedValue) => {\n        updateCheckboxValue(value)\n}"))))},s=function(){return a.createElement(B,null)}}}]);