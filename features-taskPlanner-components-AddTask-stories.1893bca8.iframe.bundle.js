/*! For license information please see features-taskPlanner-components-AddTask-stories.1893bca8.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[472],{"./src/features/taskPlanner/components/AddTask.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AddTask_stories});var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/features/taskPlanner/components/Button.js"),TextInput=__webpack_require__("./src/features/taskPlanner/components/TextInput.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AddTask=_ref=>{let{todo,setTodo}=_ref;const inputRef=(0,react.useRef)("");return(0,jsx_runtime.jsxs)("div",{className:"addTodoWrapper",children:[(0,jsx_runtime.jsx)(TextInput.k,{width:60,value:inputRef.current.value,onChange:e=>{inputRef.current=e.target.value}}),(0,jsx_runtime.jsx)(Button.$,{width:30,text:"Add a Task",onClick:()=>{inputRef.current&&(setTodo([...todo,{id:todo.length+1,title:inputRef.current,completed:!1,pinned:!1,favorite:!1}]),inputRef.current="")}})]})};AddTask.__docgenInfo={description:"",methods:[],displayName:"AddTask",props:{todo:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!0},title:{name:"string",required:!0},completed:{name:"bool",required:!1},pinned:{name:"bool",required:!1},favorite:{name:"bool",required:!1}}}},required:!1},setTodo:{description:"",type:{name:"func"},required:!1}}};var globals=__webpack_require__("./src/features/taskPlanner/storybook/globals.js");const AddTask_stories={title:"2Compounds/AddTask",component:AddTask,parameters:{...(0,globals.c)("centered")},tags:["autodocs"],decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"500px"},children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(AddTask,{...args})},Default={args:{todo:[],setTodo:(0,dist.fn)()}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    todo: [],\n    setTodo: fn()\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/features/taskPlanner/components/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{width,text,onClick}=_ref;return(0,jsx_runtime.jsx)("button",{className:"addTodoButton",style:{width:"".concat(width,"%")||0},onClick,children:text})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{width:{description:"",type:{name:"number"},required:!1},text:{description:"",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!1}}}},"./src/features/taskPlanner/components/TextInput.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>TextInput});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInput=_ref=>{let{width,value,onChange}=_ref;return(0,jsx_runtime.jsx)("input",{className:"addTodoInput",style:{width:"".concat(width,"%")||0},type:"text",value,onChange})};TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{width:{description:"",type:{name:"number"},required:!1},value:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}}},"./src/features/taskPlanner/storybook/globals.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>storybookSettings});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const storybookSettings=componentPosition=>({layout:componentPosition,backgrounds:{values:[{name:"white",value:"#fff"},{name:"gray",value:"#ccc"},{name:"dark",value:"#777"},{name:"black",value:"#000"}]},docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.om,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,{})]})}})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);