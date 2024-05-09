/*! For license information please see features-customComponents-components-ArrowIcon-stories.a63b59f2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[344],{"./src/features/customComponents/components/ArrowIcon.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Close:()=>Close,ColorVariety:()=>ColorVariety,Open:()=>Open,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_ArrowIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/features/customComponents/components/ArrowIcon.js"),_storybook_globals__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/features/customComponents/storybook/globals.js"),_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/features/theme/ColorPallette.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Decoration=_ref=>{let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{width:"50px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 0px 10px 0px #c6c3c3bf"},children})},__WEBPACK_DEFAULT_EXPORT__={title:"Elements/ArrowIcon",component:_ArrowIcon__WEBPACK_IMPORTED_MODULE_1__.H,parameters:{...(0,_storybook_globals__WEBPACK_IMPORTED_MODULE_2__.c)("centered"),controls:{exclude:["backgroundColor"]}},tags:["autodocs"],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ArrowIcon__WEBPACK_IMPORTED_MODULE_1__.H,{...args})},Close={args:{isOpen:!1,setIsOpen:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Decoration,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Story,{})})]},Open={args:{isOpen:!0,setIsOpen:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Decoration,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Story,{})})]},getStarRow=color=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:Object.keys(color).map(((variety,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ArrowIcon__WEBPACK_IMPORTED_MODULE_1__.H,{isOpen:!1,setIsOpen:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),backgroundColor:color[variety]},"ArrowIcon_".concat(variety,"_").concat(index))))}),ColorVariety={parameters:{controls:{exclude:["open","isOpen"]}},decorators:[],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[getStarRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__.wv),getStarRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__.T_),getStarRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__.D9),getStarRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__.wL),getStarRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__.z1)]})};Close.parameters={...Close.parameters,docs:{...Close.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: false,\n    setIsOpen: fn()\n  },\n  decorators: [Story => <Decoration>\n        <Story />\n      </Decoration>]\n}",...Close.parameters?.docs?.source}}},Open.parameters={...Open.parameters,docs:{...Open.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    setIsOpen: fn()\n  },\n  decorators: [Story => <Decoration>\n        <Story />\n      </Decoration>]\n}",...Open.parameters?.docs?.source}}},ColorVariety.parameters={...ColorVariety.parameters,docs:{...ColorVariety.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    controls: {\n      exclude: ["open", "isOpen"]\n    }\n  },\n  decorators: [],\n  render: args => {\n    return <div style={{\n      display: "flex",\n      flexDirection: "column",\n      gap: "1rem"\n    }}>\n        {getStarRow(red)}\n        {getStarRow(orange)}\n        {getStarRow(yellow)}\n        {getStarRow(green)}\n        {getStarRow(blue)}\n      </div>;\n  }\n}',...ColorVariety.parameters?.docs?.source}}};const __namedExportsOrder=["Close","Open","ColorVariety"]},"./src/features/customComponents/components/ArrowIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>ArrowIcon});var _path,react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function SvgArrowDown(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:"24px",height:"24px",viewBox:"0 0 24 24",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})))}const ForwardRef=react.forwardRef(SvgArrowDown);__webpack_require__.p;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ArrowIcon=_ref=>{let{isOpen,setIsOpen,backgroundColor}=_ref;return(0,jsx_runtime.jsx)(ForwardRef,{className:["arrowDownIcon",isOpen?"arrowDownIconOpen":""].join(" "),onClick:()=>setIsOpen((prev=>!prev)),style:{fill:backgroundColor||"teal"}})};ArrowIcon.__docgenInfo={description:"",methods:[],displayName:"ArrowIcon"}},"./src/features/customComponents/storybook/globals.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>storybookSettings});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const storybookSettings=componentPosition=>({layout:componentPosition,backgrounds:{values:[{name:"white",value:"#fff"},{name:"gray",value:"#ccc"},{name:"dark",value:"#777"},{name:"black",value:"#000"}]},docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.om,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,{})]})}})},"./src/features/theme/ColorPallette.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D9:()=>yellow,T_:()=>orange,wL:()=>green,wv:()=>red,z1:()=>blue});const red={100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626"},orange={100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c"},yellow={100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04"},green={100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a"},blue={100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb"}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);