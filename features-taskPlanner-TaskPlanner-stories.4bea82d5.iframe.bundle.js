(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[558],{"./node_modules/@mui/icons-material/PushPin.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.A=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{fillRule:"evenodd",d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3"}),"PushPin")},"./node_modules/@mui/icons-material/Star.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.A=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star")},"./src/features/taskPlanner/TaskPlanner.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/features/taskPlanner/index.js"),_storybook_globals__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/features/taskPlanner/storybook/globals.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Modules/TaskPlanner",component:___WEBPACK_IMPORTED_MODULE_0__.k,parameters:{...(0,_storybook_globals__WEBPACK_IMPORTED_MODULE_1__.c)("centered")},tags:["autodocs"],decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:"600px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_0__.k,{...args})},Default={args:{TodoListData:[{id:1,title:"Learn React",completed:!1,pinned:!0,favorite:!1},{id:2,title:"Learn Redux",completed:!0,pinned:!1,favorite:!0}]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    TodoListData: [{\n      id: 1,\n      title: "Learn React",\n      completed: false,\n      pinned: true,\n      favorite: false\n    }, {\n      id: 2,\n      title: "Learn Redux",\n      completed: true,\n      pinned: false,\n      favorite: true\n    }]\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/features/taskPlanner/components/AddTask.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>AddTask});var react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/features/taskPlanner/components/Button.js"),TextInput=__webpack_require__("./src/features/taskPlanner/components/TextInput.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AddTask=_ref=>{let{todo,setTodo}=_ref;const inputRef=(0,react.useRef)("");return(0,jsx_runtime.jsxs)("div",{className:"addTodoWrapper",children:[(0,jsx_runtime.jsx)(TextInput.k,{width:60,value:inputRef.current.value,onChange:e=>{inputRef.current=e.target.value}}),(0,jsx_runtime.jsx)(Button.$,{width:30,text:"Add a Task",onClick:()=>{inputRef.current&&(setTodo([...todo,{id:todo.length+1,title:inputRef.current,completed:!1,pinned:!1,favorite:!1}]),inputRef.current="")}})]})};AddTask.__docgenInfo={description:"",methods:[],displayName:"AddTask",props:{todo:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!0},title:{name:"string",required:!0},completed:{name:"bool",required:!1},pinned:{name:"bool",required:!1},favorite:{name:"bool",required:!1}}}},required:!1},setTodo:{description:"",type:{name:"func"},required:!1}}}},"./src/features/taskPlanner/components/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{width,text,onClick}=_ref;return(0,jsx_runtime.jsx)("button",{className:"addTodoButton",style:{width:"".concat(width,"%")||0},onClick,children:text})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{width:{description:"",type:{name:"number"},required:!1},text:{description:"",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!1}}}},"./src/features/taskPlanner/components/Checkbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=_ref=>{let{id,label,onClick,defaultChecked}=_ref;const[checked,setChecked]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setChecked(defaultChecked||!1)}),[defaultChecked]);return(0,jsx_runtime.jsxs)("div",{className:"checkboxWrapper",onClick:()=>{const newValue=!checked;if(setChecked(newValue),onClick)return onClick(id,newValue)},children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",checked,readOnly:!0}),(0,jsx_runtime.jsx)("label",{children:label})]})};Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{id:{description:"",type:{name:"number"},required:!0},label:{description:"",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!1},defaultChecked:{description:"",type:{name:"bool"},required:!1}}}},"./src/features/taskPlanner/components/Pin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>Pin});var PushPin=__webpack_require__("./node_modules/@mui/icons-material/PushPin.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Pin=_ref=>{let{id,pinned,onClick,size,backgroundColor}=_ref;const pinProps={className:"pinBase",style:{fontSize:size?"".concat(size,"rem"):"1.5rem",...pinned&&{fill:backgroundColor||"teal",transform:"rotate(45deg)"},...!pinned&&{fill:"#eee"}},...onClick&&{onClick:()=>onClick(id)}};return(0,jsx_runtime.jsx)("div",{className:"pinWrapper",children:(0,jsx_runtime.jsx)(PushPin.A,{...pinProps})})};Pin.__docgenInfo={description:"Renders a pin component with the specified properties.",methods:[],displayName:"Pin",props:{id:{description:"",type:{name:"number"},required:!1},pinned:{description:"",type:{name:"bool"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},size:{description:"",type:{name:"number"},required:!1},backgroundColor:{description:"",type:{name:"string"},required:!1}}}},"./src/features/taskPlanner/components/Star.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>Star_Star});var Star=__webpack_require__("./node_modules/@mui/icons-material/Star.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Star_Star=_ref=>{let{id,favorite,onClick,size,backgroundColor}=_ref;const starProps={className:"starBase",style:{fontSize:size?"".concat(size,"rem"):"1.5rem",...favorite&&{fill:backgroundColor||"teal",transform:"rotate(45deg)"},...!favorite&&{fill:"#eee"}},...onClick&&{onClick:()=>onClick(id)}};return(0,jsx_runtime.jsx)("div",{className:"starWrapper",children:(0,jsx_runtime.jsx)(Star.A,{...starProps})})};Star_Star.__docgenInfo={description:"",methods:[],displayName:"Star",props:{id:{description:"",type:{name:"number"},required:!1},favorite:{description:"",type:{name:"bool"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},size:{description:"",type:{name:"number"},required:!1},backgroundColor:{description:"",type:{name:"string"},required:!1}}}},"./src/features/taskPlanner/components/TaskItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>TaskItem});var Pin=__webpack_require__("./src/features/taskPlanner/components/Pin.js"),Star=__webpack_require__("./src/features/taskPlanner/components/Star.js"),Checkbox=__webpack_require__("./src/features/taskPlanner/components/Checkbox.js"),ColorPallette=__webpack_require__("./src/features/theme/ColorPallette.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TaskItem=_ref=>{let{taskItem,onStarClickHandler,onPinClickHandler,onCheckboxClickHandler}=_ref;const{id,title,completed,pinned,favorite}=taskItem;return(0,jsx_runtime.jsxs)("div",{className:"todoItem",children:[(0,jsx_runtime.jsx)("div",{className:"left",children:(0,jsx_runtime.jsx)(Checkbox.S,{id,label:title,defaultChecked:completed,onClick:onCheckboxClickHandler})}),(0,jsx_runtime.jsxs)("div",{className:"right",children:[(0,jsx_runtime.jsx)(Star.F,{id,favorite,onClick:onStarClickHandler,backgroundColor:ColorPallette.z1[400]}),(0,jsx_runtime.jsx)(Pin.y,{id,pinned,onClick:onPinClickHandler,backgroundColor:ColorPallette.z1[400]})]})]})};TaskItem.__docgenInfo={description:"",methods:[],displayName:"TaskItem",props:{taskItem:{description:"",type:{name:"shape",value:{id:{name:"number",required:!0},title:{name:"string",required:!0},completed:{name:"bool",required:!0},pinned:{name:"bool",required:!0},favorite:{name:"bool",required:!0}}},required:!0},onStarClickHandler:{description:"",type:{name:"func"},required:!1},onPinClickHandler:{description:"",type:{name:"func"},required:!1},onCheckboxClickHandler:{description:"",type:{name:"func"},required:!1}}}},"./src/features/taskPlanner/components/TextInput.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>TextInput});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInput=_ref=>{let{width,value,onChange}=_ref;return(0,jsx_runtime.jsx)("input",{className:"addTodoInput",style:{width:"".concat(width,"%")||0},type:"text",value,onChange})};TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{width:{description:"",type:{name:"number"},required:!1},value:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}}},"./src/features/taskPlanner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>TaskPlanner});var react=__webpack_require__("./node_modules/react/index.js"),TaskItem=__webpack_require__("./src/features/taskPlanner/components/TaskItem.js"),AddTask=__webpack_require__("./src/features/taskPlanner/components/AddTask.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TaskPlanner=_ref=>{let{TodoListData}=_ref;const[todo,setTodo]=(0,react.useState)(TodoListData||[]),onStarClickHandler=id=>{setTodo(todo.map((todoItem=>todoItem.id===id?{...todoItem,favorite:!todoItem.favorite}:todoItem)))},onPinClickHandler=id=>{const currentItem=todo.filter((todoItem=>todoItem.id===id));if(currentItem[0].pinned)setTodo(todo.map((todoItem=>todoItem.id===id?{...todoItem,pinned:!todoItem.pinned}:todoItem)).sort(((a,b)=>a.id-b.id)));else{currentItem[0].pinned=!currentItem[0].pinned;const restItems=todo.filter((todoItem=>todoItem.id!==id));setTodo([...currentItem,...restItems])}},onCheckboxClickHandler=(id,newValue)=>{setTodo(todo.map((todoItem=>todoItem.id===id?{...todoItem,completed:newValue}:todoItem)))};return(0,jsx_runtime.jsx)("div",{className:"todoAppWrapper",children:(0,jsx_runtime.jsxs)("div",{className:"todoWrapper",children:[(0,jsx_runtime.jsx)(AddTask.R,{todo,setTodo}),(0,jsx_runtime.jsx)("div",{className:"taskPlannerWrapper",children:todo.map((taskItem=>(0,jsx_runtime.jsx)(TaskItem.L,{taskItem,onPinClickHandler,onStarClickHandler,onCheckboxClickHandler},taskItem.id)))})]})})};TaskPlanner.__docgenInfo={description:"",methods:[],displayName:"TaskPlanner"}},"./src/features/taskPlanner/storybook/globals.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>storybookSettings});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const storybookSettings=componentPosition=>({layout:componentPosition,backgrounds:{values:[{name:"white",value:"#fff"},{name:"gray",value:"#ccc"},{name:"dark",value:"#777"},{name:"black",value:"#000"}]},docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.om,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,{})]})}})},"./src/features/theme/ColorPallette.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D9:()=>yellow,T_:()=>orange,wL:()=>green,wv:()=>red,z1:()=>blue});const red={100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626"},orange={100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c"},yellow={100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04"},green={100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a"},blue={100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb"}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);