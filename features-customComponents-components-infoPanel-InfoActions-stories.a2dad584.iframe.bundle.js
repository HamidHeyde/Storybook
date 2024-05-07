/*! For license information please see features-customComponents-components-infoPanel-InfoActions-stories.a2dad584.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[872],{"./src/features/customComponents/components/infoPanel/InfoActions.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_InfoActions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/features/customComponents/components/infoPanel/InfoActions.js"),_storybook_globals__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/features/customComponents/storybook/globals.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Compounds/InfoPanelActions",component:_InfoActions__WEBPACK_IMPORTED_MODULE_1__.S,parameters:{...(0,_storybook_globals__WEBPACK_IMPORTED_MODULE_2__.c)("centered")},tags:["autodocs"],decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{width:"400px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",boxShadow:"0px 1px 20px 4px #eeeeee",padding:"5px 20px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_InfoActions__WEBPACK_IMPORTED_MODULE_1__.S,{...args})},Default={args:{setPanel:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    setPanel: fn()\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/features/customComponents/components/infoPanel/InfoActions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>InfoActions});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=_ref=>{let{id,label,onClick,defaultChecked}=_ref;const[checked,setChecked]=(0,react.useState)(defaultChecked||!1);return(0,jsx_runtime.jsxs)("div",{className:"checkboxWrapper",onClick:()=>{const newValue=!checked;if(setChecked(newValue),onClick)return onClick(id,newValue)},children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",checked,readOnly:!0}),(0,jsx_runtime.jsx)("label",{children:label})]})};Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const InfoActions=_ref=>{let{setPanel}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"infoActionWrapper",children:[(0,jsx_runtime.jsxs)("div",{className:"checkBoxWrapper",children:[(0,jsx_runtime.jsx)(Checkbox,{}),(0,jsx_runtime.jsx)("div",{className:"text",children:"Don't show this panel again"})]}),(0,jsx_runtime.jsx)("button",{className:"infoButton",onClick:()=>{setPanel("DataPanel")},children:"Next"})]})};InfoActions.__docgenInfo={description:"",methods:[],displayName:"InfoActions"}},"./src/features/customComponents/storybook/globals.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>storybookSettings});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const storybookSettings=componentPosition=>({layout:componentPosition,backgrounds:{values:[{name:"white",value:"#fff"},{name:"gray",value:"#ccc"},{name:"dark",value:"#777"},{name:"black",value:"#000"}]},docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.om,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,{})]})}})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);