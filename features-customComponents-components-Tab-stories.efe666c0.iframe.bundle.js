/*! For license information please see features-customComponents-components-Tab-stories.efe666c0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[901],{"./src/features/customComponents/components/Tab.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorVariety:()=>ColorVariety,Default:()=>Default,TextLengthVariety:()=>TextLengthVariety,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Tab__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/features/customComponents/components/Tab.js"),_storybook_globals__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/features/customComponents/storybook/globals.js"),_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/features/theme/ColorPallette.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/Tab",component:_Tab__WEBPACK_IMPORTED_MODULE_0__.o,parameters:{...(0,_storybook_globals__WEBPACK_IMPORTED_MODULE_1__.c)("centered")},tags:["autodocs"]},Default={args:{children:"Some text"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_0__.o,{...args})},TextLengthVariety={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_0__.o,{children:"Some Text"},"Tab1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_0__.o,{children:"Some Text Text"},"Tab2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_0__.o,{children:"Some Text Text Text"},"Tab3"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_0__.o,{children:"Some Text Text Text"},"Tab4"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_0__.o,{children:"Some Text Text Text Text"},"Tab5")]})},getTabRow=color=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:Object.keys(color).map(((variety,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_0__.o,{backgroundColor:color[variety],children:"Some Text"},"Tab_".concat(variety,"_").concat(index))))}),ColorVariety={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[getTabRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_2__.wv),getTabRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_2__.T_),getTabRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_2__.D9),getTabRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_2__.wL),getTabRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_2__.z1)]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Some text"\n  },\n  render: args => <Tab {...args} />\n}',...Default.parameters?.docs?.source}}},TextLengthVariety.parameters={...TextLengthVariety.parameters,docs:{...TextLengthVariety.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <div style={{\n      display: "flex",\n      flexDirection: "row",\n      gap: "1rem"\n    }}>\n        <Tab key={`Tab1`}>Some Text</Tab>\n        <Tab key={`Tab2`}>Some Text Text</Tab>\n        <Tab key={`Tab3`}>Some Text Text Text</Tab>\n        <Tab key={`Tab4`}>Some Text Text Text</Tab>\n        <Tab key={`Tab5`}>Some Text Text Text Text</Tab>\n      </div>;\n  }\n}',...TextLengthVariety.parameters?.docs?.source}}},ColorVariety.parameters={...ColorVariety.parameters,docs:{...ColorVariety.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <div style={{\n      display: "flex",\n      flexDirection: "column",\n      gap: "1rem"\n    }}>\n        {getTabRow(red)}\n        {getTabRow(orange)}\n        {getTabRow(yellow)}\n        {getTabRow(green)}\n        {getTabRow(blue)}\n      </div>;\n  }\n}',...ColorVariety.parameters?.docs?.source}}};const __namedExportsOrder=["Default","TextLengthVariety","ColorVariety"]},"./src/features/customComponents/components/Tab.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>Tab_Tab});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tab_Tab=_ref=>{let{children,backgroundColor}=_ref;return(0,jsx_runtime.jsx)("div",{className:"headerTab",style:{backgroundColor:backgroundColor||"teal",borderColor:backgroundColor||"teal"},children})};Tab_Tab.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{children:{description:"",type:{name:"node"},required:!0},backgroundColor:{description:"",type:{name:"string"},required:!1}}}},"./src/features/customComponents/storybook/globals.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>storybookSettings});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const storybookSettings=componentPosition=>({layout:componentPosition,backgrounds:{values:[{name:"white",value:"#fff"},{name:"gray",value:"#ccc"},{name:"dark",value:"#777"},{name:"black",value:"#000"}]},docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.om,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,{})]})}})},"./src/features/theme/ColorPallette.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D9:()=>yellow,T_:()=>orange,wL:()=>green,wv:()=>red,z1:()=>blue});const red={100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626"},orange={100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c"},yellow={100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04"},green={100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a"},blue={100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb"}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);