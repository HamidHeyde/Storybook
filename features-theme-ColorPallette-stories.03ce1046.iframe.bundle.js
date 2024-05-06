/*! For license information please see features-theme-ColorPallette-stories.03ce1046.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[467],{"./src/features/theme/ColorPallette.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ColorPallette_stories});var dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var ColorPallette=__webpack_require__("./src/features/theme/ColorPallette.js");const ColorPallette_stories={title:"6Theme/ColorPallette",parameters:{...(componentPosition="centered",{layout:componentPosition,backgrounds:{values:[{name:"white",value:"#fff"},{name:"gray",value:"#ccc"},{name:"dark",value:"#777"},{name:"black",value:"#000"}]},docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.om,{}),(0,jsx_runtime.jsx)(dist.H2,{})]})}})},tags:["autodocs"]};var componentPosition;const getColorPalletteRow=color=>(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:Object.keys(color).map(((variety,index)=>(0,jsx_runtime.jsx)("div",{id:index,style:{width:"2rem",height:"2rem",backgroundColor:color[variety],borderRadius:"30%"}},"Star_Red_".concat(variety))))}),Default={render:args=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[getColorPalletteRow(ColorPallette.wv),getColorPalletteRow(ColorPallette.T_),getColorPalletteRow(ColorPallette.D9),getColorPalletteRow(ColorPallette.wL),getColorPalletteRow(ColorPallette.z1)]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <div style={{\n      display: "flex",\n      flexDirection: "column",\n      gap: "1rem"\n    }}>\n        {getColorPalletteRow(red)}\n        {getColorPalletteRow(orange)}\n        {getColorPalletteRow(yellow)}\n        {getColorPalletteRow(green)}\n        {getColorPalletteRow(blue)}\n      </div>;\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/features/theme/ColorPallette.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D9:()=>yellow,T_:()=>orange,wL:()=>green,wv:()=>red,z1:()=>blue});const red={100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626"},orange={100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c"},yellow={100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04"},green={100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a"},blue={100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb"}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);