(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[126],{"./node_modules/@mui/icons-material/Star.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.A=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star")},"./src/features/taskPlanner/components/Star.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorVariety:()=>ColorVariety,Default:()=>Default,Favorite:()=>Favorite,SizeVariety:()=>SizeVariety,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_Star__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/features/taskPlanner/components/Star.js"),_storybook_globals__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/features/taskPlanner/storybook/globals.js"),_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/features/theme/ColorPallette.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"1Elements/Star",component:_Star__WEBPACK_IMPORTED_MODULE_1__.F,parameters:{...(0,_storybook_globals__WEBPACK_IMPORTED_MODULE_2__.c)("centered"),controls:{exclude:["size"]}},tags:["autodocs"],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Star__WEBPACK_IMPORTED_MODULE_1__.F,{...args})},Default={args:{id:1,favorite:!1,onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),size:5,backgroundColor:"#18a2ff"}},Favorite={args:{...Default.args,favorite:!0}},getStarRow=(color,args)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:Object.keys(color).map(((variety,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Star__WEBPACK_IMPORTED_MODULE_1__.F,{id:index,backgroundColor:color[variety],size:3,favorite:!0,onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()},"Star_Red_".concat(variety))))}),ColorVariety={parameters:{controls:{exclude:["id","favorite","size","backgroundColor","onClick"]}},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[getStarRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__.wv),getStarRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__.T_),getStarRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__.D9),getStarRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__.wL),getStarRow(_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__.z1)]})},SizeVariety={parameters:ColorVariety.parameters,render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:[6,5,4,3,2,1].map(((size,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Star__WEBPACK_IMPORTED_MODULE_1__.F,{id:index,backgroundColor:_theme_ColorPallette__WEBPACK_IMPORTED_MODULE_3__.z1["".concat(100*size)],size,favorite:!0,onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()},"Star_Size_".concat(size))))})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: 1,\n    favorite: false,\n    onClick: fn(),\n    size: 5,\n    backgroundColor: "#18a2ff"\n  }\n}',...Default.parameters?.docs?.source}}},Favorite.parameters={...Favorite.parameters,docs:{...Favorite.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    favorite: true\n  }\n}",...Favorite.parameters?.docs?.source}}},ColorVariety.parameters={...ColorVariety.parameters,docs:{...ColorVariety.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    controls: {\n      exclude: ["id", "favorite", "size", "backgroundColor", "onClick"]\n    }\n  },\n  render: args => {\n    return <div style={{\n      display: "flex",\n      flexDirection: "column",\n      gap: "1rem"\n    }}>\n        {getStarRow(red, args)}\n        {getStarRow(orange, args)}\n        {getStarRow(yellow, args)}\n        {getStarRow(green, args)}\n        {getStarRow(blue, args)}\n      </div>;\n  }\n}',...ColorVariety.parameters?.docs?.source}}},SizeVariety.parameters={...SizeVariety.parameters,docs:{...SizeVariety.parameters?.docs,source:{originalSource:'{\n  parameters: ColorVariety.parameters,\n  render: args => {\n    return <div style={{\n      display: "flex",\n      flexDirection: "row",\n      gap: "1rem"\n    }}>\n        {[6, 5, 4, 3, 2, 1].map((size, index) => <Star key={`Star_Size_${size}`} id={index} backgroundColor={blue[`${size * 100}`]} size={size} favorite={true} onClick={fn()} />)}\n      </div>;\n  }\n}',...SizeVariety.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Favorite","ColorVariety","SizeVariety"]},"./src/features/taskPlanner/components/Star.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>Star_Star});var Star=__webpack_require__("./node_modules/@mui/icons-material/Star.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Star_Star=_ref=>{let{id,favorite,onClick,size,backgroundColor}=_ref;const starProps={className:"starBase",style:{fontSize:size?"".concat(size,"rem"):"1.5rem",...favorite&&{fill:backgroundColor||"teal",transform:"rotate(45deg)"},...!favorite&&{fill:"#eee"}},...onClick&&{onClick:()=>onClick(id)}};return(0,jsx_runtime.jsx)("div",{className:"starWrapper",children:(0,jsx_runtime.jsx)(Star.A,{...starProps})})};Star_Star.__docgenInfo={description:"",methods:[],displayName:"Star",props:{id:{description:"",type:{name:"number"},required:!1},favorite:{description:"",type:{name:"bool"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},size:{description:"",type:{name:"number"},required:!1},backgroundColor:{description:"",type:{name:"string"},required:!1}}}},"./src/features/taskPlanner/storybook/globals.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>storybookSettings});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const storybookSettings=componentPosition=>({layout:componentPosition,backgrounds:{values:[{name:"white",value:"#fff"},{name:"gray",value:"#ccc"},{name:"dark",value:"#777"},{name:"black",value:"#000"}]},docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.om,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,{})]})}})},"./src/features/theme/ColorPallette.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D9:()=>yellow,T_:()=>orange,wL:()=>green,wv:()=>red,z1:()=>blue});const red={100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626"},orange={100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c"},yellow={100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04"},green={100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a"},blue={100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb"}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);