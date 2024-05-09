"use strict";(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[4611],{"./src/features/customComponents/components/newPanel/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/features/customComponents/components/newPanel/index.js"),_storybook_globals__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/features/customComponents/storybook/globals.js"),_Layouts_MapsMainPanelLayout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/features/Layouts/MapsMainPanelLayout.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Modules/NewPanel",component:___WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{...(0,_storybook_globals__WEBPACK_IMPORTED_MODULE_2__.c)("centered"),controls:{exclude:["showAlert","setShowAlert"]}},tags:["autodocs"],decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{width:"465px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Layouts_MapsMainPanelLayout__WEBPACK_IMPORTED_MODULE_3__.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Story,{})})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args})},Default={args:{maps:[],setMaps:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),showAlert:!1,setShowAlert:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),setPanel:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    maps: [],\n    setMaps: fn(),\n    showAlert: false,\n    setShowAlert: fn(),\n    setPanel: fn()\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/features/Layouts/MapsMainPanelLayout.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>MapsMainPanelLayout});var PanelHeader=__webpack_require__("./src/features/customComponents/components/mainPanel/PanelHeader.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MapsMainPanelLayout=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"panelWrapper",children:[(0,jsx_runtime.jsx)(PanelHeader.a,{}),(0,jsx_runtime.jsx)("div",{className:"panelContent",children})]})};MapsMainPanelLayout.__docgenInfo={description:"",methods:[],displayName:"MapsMainPanelLayout",props:{children:{description:"",type:{name:"node"},required:!0}}}},"./src/features/customComponents/components/MapTextArea.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>MapTextArea});var MapLabel=__webpack_require__("./src/features/customComponents/components/MapLabel.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MapTextArea=_ref=>{let{width,name,value,onChange,placeholder,disabled,readonly}=_ref;const textAreaProps={style:{width:"".concat(width||"100%"),maxWidth:"".concat(width||"100%"),minWidth:"".concat(width||"100%")},type:"text",className:"mapTextAreaWrapper",...name&&{name},...placeholder&&{placeholder},...disabled&&{disabled},...value&&{value},...onChange&&{onChange}},labelProps={style:{width:"".concat(width||"100%")},...value&&{text:value},type:"normal"};return readonly?(0,jsx_runtime.jsx)(MapLabel.L,{...labelProps}):(0,jsx_runtime.jsx)("textarea",{...textAreaProps})};MapTextArea.__docgenInfo={description:"",methods:[],displayName:"MapTextArea",props:{width:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},readonly:{description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}}},"./src/features/customComponents/components/MapTextField.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>MapTextField});var MapLabel=__webpack_require__("./src/features/customComponents/components/MapLabel.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MapTextField=_ref=>{let{width,name,value,onChange,placeholder,disabled,readonly}=_ref;const textFieldProps={style:{width:"".concat(width||"100%")},type:"text",className:"mapTextFieldWrapper",...name&&{name},...placeholder&&{placeholder},...disabled&&{disabled},...value&&{value},...onChange&&{onChange}},labelProps={style:{width:"".concat(width||"100%")},...value&&{text:value},type:"normal"};return readonly?(0,jsx_runtime.jsx)(MapLabel.L,{...labelProps}):(0,jsx_runtime.jsx)("input",{...textFieldProps})};MapTextField.__docgenInfo={description:"",methods:[],displayName:"MapTextField",props:{width:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},readonly:{description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}}},"./src/features/customComponents/components/mainPanel/PanelHeader.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>PanelHeader});var noData=__webpack_require__("./src/features/customComponents/assets/noData.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PanelHeader=()=>(0,jsx_runtime.jsx)("div",{className:"panelHeader",children:(0,jsx_runtime.jsxs)("div",{className:"headerContent",children:[(0,jsx_runtime.jsx)(noData.h,{}),"Maps"]})});PanelHeader.__docgenInfo={description:"",methods:[],displayName:"PanelHeader"}},"./src/features/customComponents/components/newPanel/NewPanelActions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>NewPanelActions});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NewPanelActions=_ref=>{let{onAdd,onCancel}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"newPanelActionsWrapper",children:[(0,jsx_runtime.jsx)("button",{className:"actionButton",onClick:onCancel,children:"Go Back"}),(0,jsx_runtime.jsx)("button",{className:"actionButton",onClick:onAdd,children:"Add Map"})]})};NewPanelActions.__docgenInfo={description:"",methods:[],displayName:"NewPanelActions"}},"./src/features/customComponents/components/newPanel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>NewPanel});var react=__webpack_require__("./node_modules/react/index.js"),WSpacer=__webpack_require__("./src/features/customComponents/components/WSpacer.js"),MapLabel=__webpack_require__("./src/features/customComponents/components/MapLabel.js"),MapTextField=__webpack_require__("./src/features/customComponents/components/MapTextField.js"),MapTextArea=__webpack_require__("./src/features/customComponents/components/MapTextArea.js"),AutoComplete=__webpack_require__("./src/features/customComponents/components/AutoComplete.js"),MapBubbleSlider=__webpack_require__("./src/features/customComponents/components/MapBubbleSlider.js"),MapColorSlider=__webpack_require__("./src/features/customComponents/components/MapColorSlider.js"),MapShadowSlider=__webpack_require__("./src/features/customComponents/components/MapShadowSlider.js"),utils=__webpack_require__("./src/features/customComponents/components/utils/utils.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NewPanelContent=_ref=>{let{onChange}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"newPanelContentWrapper",children:[(0,jsx_runtime.jsxs)("div",{className:["panelRow","borderBottom"].join(" "),children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"35%",text:"Map Name"}),(0,jsx_runtime.jsx)(MapTextField.S,{width:"65%",type:"text",name:"name",placeholder:"",onChange,value:void 0})]}),(0,jsx_runtime.jsxs)("div",{className:["panelRow","borderBottom"].join(" "),children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"35%",text:"Map Description"}),(0,jsx_runtime.jsx)(MapTextArea.B,{width:"65%",type:"text",name:"description",placeholder:"",onChange,value:void 0})]}),(0,jsx_runtime.jsx)("div",{className:["panelRow","borderBottom"].join(" "),children:(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:"Number"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"45%",name:"numberField",options:utils.dp,onChange}),(0,jsx_runtime.jsx)(WSpacer.G,{width:"5%"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"30%",name:"numberCalc",options:utils.nU,onChange})]})}),(0,jsx_runtime.jsxs)("div",{className:["panelMultiRow","borderBottom"].join(" "),children:[(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:"Size"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"45%",name:"sizeField",options:utils.dp,onChange}),(0,jsx_runtime.jsx)(WSpacer.G,{width:"5%"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"30%",name:"sizeCalc",options:utils.nU,onChange})]}),(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:""}),(0,jsx_runtime.jsx)(MapBubbleSlider.M,{width:"80%",name:"sizeSlider",onChange})]})]}),(0,jsx_runtime.jsxs)("div",{className:["panelMultiRow","borderBottom"].join(" "),children:[(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:"Color"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"45%",name:"colorField",options:utils.dp,onChange}),(0,jsx_runtime.jsx)(WSpacer.G,{width:"5%"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"30%",name:"colorCalc",options:utils.nU,onChange})]}),(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:""}),(0,jsx_runtime.jsx)(MapColorSlider.N,{width:"80%",name:"colorSlider",onChange})]})]}),(0,jsx_runtime.jsxs)("div",{className:["panelMultiRow","borderBottom"].join(" "),children:[(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:"Shadow"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"45%",name:"shadowField",options:utils.dp,onChange}),(0,jsx_runtime.jsx)(WSpacer.G,{width:"5%"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"30%",name:"shadowCalc",options:utils.nU,onChange})]}),(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:""}),(0,jsx_runtime.jsx)(MapShadowSlider.y,{width:"80%",name:"shadowSlider",onChange})]})]})]})};NewPanelContent.__docgenInfo={description:"",methods:[],displayName:"NewPanelContent"};var NewPanelActions=__webpack_require__("./src/features/customComponents/components/newPanel/NewPanelActions.js");const NewPanel=_ref=>{let{setPanel,maps,setMaps,showAlert,setShowAlert}=_ref;const[formFields,setFormFields]=(0,react.useState)({numberSlider:[],sizeSlider:[0,25,50,75,100],colorSlider:[0,35,100],shadowSlider:[0,35,65,100]});return(0,jsx_runtime.jsxs)("div",{className:"newPanelWrapper",children:[(0,jsx_runtime.jsx)(NewPanelContent,{onChange:e=>{const fieldName=e.target.name,fieldValue=e.target.value,fieldLabel=e.target.text;setFormFields((prev=>({...prev,[fieldName]:fieldValue,...!!fieldLabel&&{["".concat(fieldName,"Label")]:fieldLabel}})))}}),(0,jsx_runtime.jsx)(NewPanelActions.i,{onAdd:()=>{const validationMessage=(0,utils.XV)(formFields);if(console.log(validationMessage),validationMessage)setShowAlert({type:"error",message:validationMessage,visible:!0});else if(!validationMessage){const requestData={...(0,utils.cn)(formFields),id:maps.length+1,pin:!1,favorite:!1,visible:!0};setMaps([...maps,{...requestData}]),setShowAlert({type:"success",message:"New Panel Added Successfully",visible:!0}),setPanel("DataPanel")}},onCancel:()=>{setPanel("DataPanel")}})]})};NewPanel.__docgenInfo={description:"",methods:[],displayName:"NewPanel"}},"./src/features/customComponents/storybook/globals.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>storybookSettings});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const storybookSettings=componentPosition=>({layout:componentPosition,backgrounds:{values:[{name:"white",value:"#fff"},{name:"gray",value:"#ccc"},{name:"dark",value:"#777"},{name:"black",value:"#000"}]},docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.om,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,{})]})}})}}]);