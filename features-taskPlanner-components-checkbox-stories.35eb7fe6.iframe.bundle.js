/*! For license information please see features-taskPlanner-components-checkbox-stories.35eb7fe6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[633],{"./src/features/taskPlanner/components/checkbox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_Checkbox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/features/taskPlanner/components/Checkbox.js"),_storybook_globals__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/features/taskPlanner/storybook/globals.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"1Elements/Checkbox",component:_Checkbox__WEBPACK_IMPORTED_MODULE_1__.S,parameters:{...(0,_storybook_globals__WEBPACK_IMPORTED_MODULE_2__.c)("centered")},tags:["autodocs"],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_1__.S,{...args})},Default={args:{id:1,label:"",onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),defaultChecked:!1}},Checked={args:{id:1,label:"",onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),defaultChecked:!0}},WithLabel={args:{id:1,label:"Checkbox with label",onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),defaultChecked:!1},parameters:{controls:{exclude:["defaultChecked"]}},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{display:"flex",gap:"1.5rem",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_1__.S,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_1__.S,{...args,defaultChecked:!0})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: 1,\n    label: "",\n    onClick: fn(),\n    defaultChecked: false\n  }\n}',...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: 1,\n    label: "",\n    onClick: fn(),\n    defaultChecked: true\n  }\n}',...Checked.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: 1,\n    label: "Checkbox with label",\n    onClick: fn(),\n    defaultChecked: false\n  },\n  parameters: {\n    controls: {\n      exclude: ["defaultChecked"]\n    }\n  },\n  render: args => {\n    return <div style={{\n      display: "flex",\n      gap: "1.5rem",\n      flexDirection: "column"\n    }}>\n        <Checkbox {...args} />\n        <Checkbox {...args} defaultChecked={true} />\n      </div>;\n  }\n}',...WithLabel.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Checked","WithLabel"]},"./src/features/taskPlanner/components/Checkbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=_ref=>{let{id,label,onClick,defaultChecked}=_ref;const[checked,setChecked]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setChecked(defaultChecked||!1)}),[defaultChecked]);return(0,jsx_runtime.jsxs)("div",{className:"checkboxWrapper",onClick:()=>{const newValue=!checked;if(setChecked(newValue),onClick)return onClick(id,newValue)},children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",checked,readOnly:!0}),(0,jsx_runtime.jsx)("label",{children:label})]})};Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{id:{description:"",type:{name:"number"},required:!0},label:{description:"",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!1},defaultChecked:{description:"",type:{name:"bool"},required:!1}}}},"./src/features/taskPlanner/storybook/globals.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>storybookSettings});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const storybookSettings=componentPosition=>({layout:componentPosition,backgrounds:{values:[{name:"white",value:"#fff"},{name:"gray",value:"#ccc"},{name:"dark",value:"#777"},{name:"black",value:"#000"}]},docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.om,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,{})]})}})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);