(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[4725],{"./node_modules/@mui/base/utils/appendOwnerState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>appendOwnerState});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_isHostComponent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/base/utils/isHostComponent.js");function appendOwnerState(elementType,otherProps,ownerState){return void 0===elementType||(0,_isHostComponent__WEBPACK_IMPORTED_MODULE_0__.g)(elementType)?otherProps:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.A)({},otherProps,{ownerState:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.A)({},otherProps.ownerState,ownerState)})}},"./node_modules/@mui/base/utils/extractEventHandlers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function extractEventHandlers(object,excludeKeys=[]){if(void 0===object)return{};const result={};return Object.keys(object).filter((prop=>prop.match(/^on[A-Z]/)&&"function"==typeof object[prop]&&!excludeKeys.includes(prop))).forEach((prop=>{result[prop]=object[prop]})),result}__webpack_require__.d(__webpack_exports__,{h:()=>extractEventHandlers})},"./node_modules/@mui/base/utils/isHostComponent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isHostComponent(element){return"string"==typeof element}__webpack_require__.d(__webpack_exports__,{g:()=>isHostComponent})},"./node_modules/@mui/base/utils/mergeSlotProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>mergeSlotProps});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),extractEventHandlers=__webpack_require__("./node_modules/@mui/base/utils/extractEventHandlers.js");function omitEventHandlers(object){if(void 0===object)return{};const result={};return Object.keys(object).filter((prop=>!(prop.match(/^on[A-Z]/)&&"function"==typeof object[prop]))).forEach((prop=>{result[prop]=object[prop]})),result}function mergeSlotProps(parameters){const{getSlotProps,additionalProps,externalSlotProps,externalForwardedProps,className}=parameters;if(!getSlotProps){const joinedClasses=(0,clsx.A)(null==additionalProps?void 0:additionalProps.className,className,null==externalForwardedProps?void 0:externalForwardedProps.className,null==externalSlotProps?void 0:externalSlotProps.className),mergedStyle=(0,esm_extends.A)({},null==additionalProps?void 0:additionalProps.style,null==externalForwardedProps?void 0:externalForwardedProps.style,null==externalSlotProps?void 0:externalSlotProps.style),props=(0,esm_extends.A)({},additionalProps,externalForwardedProps,externalSlotProps);return joinedClasses.length>0&&(props.className=joinedClasses),Object.keys(mergedStyle).length>0&&(props.style=mergedStyle),{props,internalRef:void 0}}const eventHandlers=(0,extractEventHandlers.h)((0,esm_extends.A)({},externalForwardedProps,externalSlotProps)),componentsPropsWithoutEventHandlers=omitEventHandlers(externalSlotProps),otherPropsWithoutEventHandlers=omitEventHandlers(externalForwardedProps),internalSlotProps=getSlotProps(eventHandlers),joinedClasses=(0,clsx.A)(null==internalSlotProps?void 0:internalSlotProps.className,null==additionalProps?void 0:additionalProps.className,className,null==externalForwardedProps?void 0:externalForwardedProps.className,null==externalSlotProps?void 0:externalSlotProps.className),mergedStyle=(0,esm_extends.A)({},null==internalSlotProps?void 0:internalSlotProps.style,null==additionalProps?void 0:additionalProps.style,null==externalForwardedProps?void 0:externalForwardedProps.style,null==externalSlotProps?void 0:externalSlotProps.style),props=(0,esm_extends.A)({},internalSlotProps,additionalProps,otherPropsWithoutEventHandlers,componentsPropsWithoutEventHandlers);return joinedClasses.length>0&&(props.className=joinedClasses),Object.keys(mergedStyle).length>0&&(props.style=mergedStyle),{props,internalRef:internalSlotProps.ref}}},"./node_modules/@mui/base/utils/resolveComponentProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function resolveComponentProps(componentProps,ownerState,slotState){return"function"==typeof componentProps?componentProps(ownerState,slotState):componentProps}__webpack_require__.d(__webpack_exports__,{Y:()=>resolveComponentProps})},"./src/features/customComponents/components/AppAlert.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Info:()=>Info,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _AppAlert__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/features/customComponents/components/AppAlert.js"),_storybook_globals__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/features/customComponents/storybook/globals.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const WithState=_ref2=>{let{children}=_ref2;const[showAlert,setShowAlert]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({visible:!1});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:children(showAlert,setShowAlert)})},AppAlertWithState=_ref4=>{let{type,message}=_ref4;const backgroundColors={success:"#00C851",info:"#0091EA",warning:"#FFC107",error:"#FF3D00"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(WithState,{children:(showAlert,setShowAlert)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(null==showAlert?void 0:showAlert.visible)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_AppAlert__WEBPACK_IMPORTED_MODULE_0__.m,{type,message,visible:showAlert.visible,onclose:()=>setShowAlert({...showAlert,visible:!1})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{style:{backgroundColor:backgroundColors[type],color:"white",padding:"5px 15px",borderRadius:"5px",border:"none"},onClick:()=>setShowAlert({...showAlert,visible:!0}),children:"Click to see the alert"})]})})})},__WEBPACK_DEFAULT_EXPORT__={title:"Elements/AppAlert",component:_AppAlert__WEBPACK_IMPORTED_MODULE_0__.m,parameters:{...(0,_storybook_globals__WEBPACK_IMPORTED_MODULE_1__.c)("centered"),controls:{exclude:["onclose","visible"]}},tags:["autodocs"],decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{width:"420px",display:"flex",justifyContent:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AppAlertWithState,{...args})},Success={args:{type:"success",message:"This is a success message"}},Info={args:{type:"info",message:"This is an info message"}},Warning={args:{type:"warning",message:"This is a warning message"}},Error={args:{type:"error",message:"This is an error message"}};Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "success",\n    message: "This is a success message"\n  }\n}',...Success.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "info",\n    message: "This is an info message"\n  }\n}',...Info.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "warning",\n    message: "This is a warning message"\n  }\n}',...Warning.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "error",\n    message: "This is an error message"\n  }\n}',...Error.parameters?.docs?.source}}};const __namedExportsOrder=["Success","Info","Warning","Error"]},"./src/features/customComponents/components/AppAlert.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>AppAlert});var react=__webpack_require__("./node_modules/react/index.js"),Alert=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AppAlert=_ref=>{let{type,message,visible,onclose}=_ref;const[visibleState,setVisibleState]=(0,react.useState)(visible);return(0,react.useEffect)((()=>{setVisibleState&&setTimeout((()=>{setVisibleState(!1),setTimeout((()=>{onclose()&&onclose()}),1e3)}),2e3)}),[setVisibleState]),(0,jsx_runtime.jsx)("div",{className:"alertWrapper",style:{opacity:visibleState?1:0},children:(0,jsx_runtime.jsx)(Alert.A,{style:{width:"97%"},severity:type,children:message})})};AppAlert.__docgenInfo={description:"",methods:[],displayName:"AppAlert",props:{type:{description:"",type:{name:"enum",value:[{value:'"success"',computed:!1},{value:'"info"',computed:!1},{value:'"warning"',computed:!1},{value:'"error"',computed:!1}]},required:!0},message:{description:"",type:{name:"string"},required:!0},visible:{description:"",type:{name:"bool"},required:!0},onclose:{description:"",type:{name:"func"},required:!1}}}},"./src/features/customComponents/storybook/globals.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>storybookSettings});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const storybookSettings=componentPosition=>({layout:componentPosition,backgrounds:{values:[{name:"white",value:"#fff"},{name:"gray",value:"#ccc"},{name:"dark",value:"#777"},{name:"black",value:"#000"}]},docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.om,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,{})]})}})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);