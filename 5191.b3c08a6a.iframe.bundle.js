(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[5191],{"./node_modules/@mui/icons-material/ArrowDropDown.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.A=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown")},"./node_modules/@mui/icons-material/ArrowDropUp.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.A=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp")},"./node_modules/@mui/icons-material/Search.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.A=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},"./node_modules/@mui/icons-material/utils/createSvgIcon.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _utils.createSvgIcon}});var _utils=__webpack_require__("./node_modules/@mui/material/utils/index.js")},"./node_modules/@mui/material/utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{capitalize:()=>capitalize.A,createChainedFunction:()=>utils_createChainedFunction,createSvgIcon:()=>createSvgIcon.A,debounce:()=>utils_debounce,deprecatedPropType:()=>utils_deprecatedPropType,isMuiElement:()=>utils_isMuiElement,ownerDocument:()=>utils_ownerDocument,ownerWindow:()=>utils_ownerWindow,requirePropFactory:()=>utils_requirePropFactory,setRef:()=>utils_setRef,unstable_ClassNameGenerator:()=>unstable_ClassNameGenerator,unstable_useEnhancedEffect:()=>utils_useEnhancedEffect,unstable_useId:()=>utils_useId,unsupportedProp:()=>utils_unsupportedProp,useControlled:()=>utils_useControlled,useEventCallback:()=>useEventCallback.A,useForkRef:()=>useForkRef.A,useIsFocusVisible:()=>useIsFocusVisible.A});var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js");const utils_createChainedFunction=function createChainedFunction(...funcs){return funcs.reduce(((acc,func)=>null==func?acc:function chainedFunction(...args){acc.apply(this,args),func.apply(this,args)}),(()=>{}))};var createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js");const utils_debounce=function debounce(func,wait=166){let timeout;function debounced(...args){clearTimeout(timeout),timeout=setTimeout((()=>{func.apply(this,args)}),wait)}return debounced.clear=()=>{clearTimeout(timeout)},debounced};const utils_deprecatedPropType=function deprecatedPropType(validator,reason){return()=>null};var react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2);const utils_isMuiElement=function isMuiElement(element,muiNames){var _muiName,_element$type;return react.isValidElement(element)&&-1!==muiNames.indexOf(null!=(_muiName=element.type.muiName)?_muiName:null==(_element$type=element.type)||null==(_element$type=_element$type._payload)||null==(_element$type=_element$type.value)?void 0:_element$type.muiName)};var ownerDocument=__webpack_require__("./node_modules/@mui/utils/ownerDocument/ownerDocument.js");const utils_ownerDocument=ownerDocument.A;const utils_ownerWindow=function ownerWindow(node){return(0,ownerDocument.A)(node).defaultView||window};__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");const utils_requirePropFactory=function requirePropFactory(componentNameInError,Component){return()=>null};const utils_setRef=__webpack_require__("./node_modules/@mui/utils/setRef/setRef.js").A;const utils_useEnhancedEffect=__webpack_require__("./node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.js").A;let globalId=0;const maybeReactUseId=react_namespaceObject["useId".toString()];const utils_useId=function useId(idOverride){if(void 0!==maybeReactUseId){const reactId=maybeReactUseId();return null!=idOverride?idOverride:reactId}return function useGlobalId(idOverride){const[defaultId,setDefaultId]=react.useState(idOverride),id=idOverride||defaultId;return react.useEffect((()=>{null==defaultId&&(globalId+=1,setDefaultId(`mui-${globalId}`))}),[defaultId]),id}(idOverride)};const utils_unsupportedProp=function unsupportedProp(props,propName,componentName,location,propFullName){return null};const utils_useControlled=__webpack_require__("./node_modules/@mui/utils/useControlled/useControlled.js").A;var useEventCallback=__webpack_require__("./node_modules/@mui/material/utils/useEventCallback.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),useIsFocusVisible=__webpack_require__("./node_modules/@mui/material/utils/useIsFocusVisible.js");const unstable_ClassNameGenerator={configure:generator=>{ClassNameGenerator.A.configure(generator)}}},"./src/features/customComponents/assets/noData.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>ForwardRef});var _g,_g2,_g3,_defs,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function SvgNoData(_ref,svgRef){let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:106,height:90,viewBox:"0 0 106 90",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{filter:"url(#filter0_d_1176_48614)"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse",{cx:53.0001,cy:44.8456,rx:34.1793,ry:45.7113,transform:"rotate(75 53.0001 44.8456)",fill:"#D9D8D8"}))),_g2||(_g2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{filter:"url(#filter1_d_1176_48614)"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse",{cx:55.3677,cy:52.1195,rx:19.8461,ry:30.2768,transform:"rotate(54.806 55.3677 52.1195)",fill:"#888888"}))),_g3||(_g3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{filter:"url(#filter2_d_1176_48614)"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse",{cx:52.4871,cy:60.0849,rx:9.67103,ry:16.3307,transform:"rotate(54.806 52.4871 60.0849)",fill:"#4B4B4B"}))),_defs||(_defs=react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("filter",{id:"filter0_d_1176_48614",x:6.84097,y:8.92638,width:92.8775,height:72.9576,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feOffset",{dx:.279747,dy:.559494}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feGaussianBlur",{stdDeviation:.699367}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1176_48614"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1176_48614",result:"shape"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("filter",{id:"filter1_d_1176_48614",x:26.9836,y:27.4576,width:57.3277,height:50.443,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feOffset",{dx:.279747,dy:.559494}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feGaussianBlur",{stdDeviation:.699367}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1176_48614"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1176_48614",result:"shape"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("filter",{id:"filter2_d_1176_48614",x:36.9015,y:47.7939,width:31.1716,height:26.819,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feOffset",{dy:1.11899}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feGaussianBlur",{stdDeviation:.559494}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1176_48614"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1176_48614",result:"shape"})))))}const ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgNoData);__webpack_require__.p},"./src/features/customComponents/components/AutoComplete.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>MapAutoComplete});var react=__webpack_require__("./node_modules/react/index.js"),MapLabel=__webpack_require__("./src/features/customComponents/components/MapLabel.js"),Search=__webpack_require__("./node_modules/@mui/icons-material/Search.js"),ArrowDropUp=__webpack_require__("./node_modules/@mui/icons-material/ArrowDropUp.js"),ArrowDropDown=__webpack_require__("./node_modules/@mui/icons-material/ArrowDropDown.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MapAutoComplete=_ref=>{let{width,options,name,selectedOption,setSelectedOption,readonly,onChange}=_ref;const[settings,setSettings]=(0,react.useState)({selectedItem:{text:void 0,value:void 0,index:void 0},selectedIndex:0,filteredOptions:options&&[...options]||[],open:!1,inputValue:""});(0,react.useEffect)((()=>{const selectedItem=selectedOption&&options.filter((item=>item.text.toLowerCase()===selectedOption.text.toLowerCase()));selectedItem&&selectedItem.length&&setSettings({...settings,selectedItem:{...selectedItem},inputValue:selectedOption.text,filteredOptions:options.filter((item=>item.text.toLowerCase().includes(selectedOption.text.toLowerCase())))})}),[]);const handleOnClick=e=>{const idx=e.target.getAttribute("data-index");setSettings({...settings,filteredOptions:[{...options[idx]}],selectedIndex:idx,selectedItem:{...options[idx]},open:!1,inputValue:options[idx].text}),setSelectedOption&&setSelectedOption(name,{...options[idx]}),onChange&&onChange({target:{...options[idx],name}})};return(0,jsx_runtime.jsx)("div",{name:"".concat(name,"AutoComplete"),className:"autoCompWrapper",style:{width},children:readonly?(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"100%",text:selectedOption&&selectedOption.text}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"selectWrapper",children:[(0,jsx_runtime.jsx)(Search.A,{className:"iconButton"}),(0,jsx_runtime.jsx)("input",{type:"text",name:"".concat(name,"SearchBox"),className:"searchBox",onChange:e=>{const val=e.target.value,res=val?options.filter((item=>item.text.toLowerCase().includes(val.toLowerCase()))):[...options];setSettings({...settings,filteredOptions:res,open:!!val,inputValue:val})},value:settings.inputValue,onKeyDown:e=>{if(13===e.keyCode){const val=e.target.value,theItem=settings.filteredOptions[0];val&&theItem?(setSettings({...settings,filteredOptions:[{...theItem}],selectedIndex:theItem.index,selectedItem:{...theItem},open:!1,inputValue:theItem.text}),setSelectedOption&&setSelectedOption(name,{...theItem}),onChange&&onChange({target:{...theItem,name}})):(setSettings({...settings,open:!1,inputValue:"",filteredOptions:[...options]}),setSelectedOption&&setSelectedOption(name,{text:void 0,value:void 0,index:void 0}),onChange&&onChange({target:{text:void 0,value:void 0,index:void 0,name}}))}},onBlur:e=>{e.target.value||(setSettings({...settings,open:!1,inputValue:"",filteredOptions:[...options]}),setSelectedOption&&setSelectedOption(name,{text:void 0,value:void 0,index:void 0}),onChange&&onChange({target:{text:void 0,value:void 0,index:void 0,name}}))}}),settings.open?(0,jsx_runtime.jsx)(ArrowDropUp.A,{className:"iconButton",onClick:()=>{setSettings({...settings,open:!1})}}):(0,jsx_runtime.jsx)(ArrowDropDown.A,{className:"iconButton",onClick:()=>{setSettings({...settings,open:!0})}})]}),(0,jsx_runtime.jsx)("div",{className:"optionsWrapper",children:settings.open&&settings.filteredOptions.map((item=>(0,jsx_runtime.jsx)("div",{name:"".concat(name,"Option").concat(item.index),"data-index":item.index,value:"".concat(item.value||item.index),className:"option",onClick:handleOnClick,children:item.text},"".concat(item.value||item.index,"_").concat(item.index))))})]})})};MapAutoComplete.__docgenInfo={description:"Sample Code \n \nconst [fields, setFields] = useState({\n  auto1: { text: undefined, value: undefined, index: undefined }, <== ** Default value **\n})\n\nconst setFieldValue = (name, value) => {\n  setFields({\n      ...fields,\n      [`${name}`]: value\n  })\n}\n\n <HMapAutoComplete\n    width={'30%'}\n    selectedOption={fields.auto1}\n    setSelectedOption={setFieldValue}\n    name={'auto1'} <== ** name equals to the one on the field mentioned above **\n    options={[\n        {value: 'value 0', text: 'text 0', index: 0},\n        {value: 'value 1', text: 'text 1', index: 1},\n        {value: 'value 2', text: 'text 2', index: 2},\n        {value: 'value 3', text: 'text 3', index: 3},\n        {value: 'value 4', text: 'text 4', index: 4},\n        {value: 'value 5', text: 'text 5', index: 5},\n    ]}\n    readonly={true}\n/>",methods:[],displayName:"MapAutoComplete"}},"./src/features/customComponents/components/MapBubbleSlider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>MapBubbleSlider});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/system/esm/Box/Box.js"),Slider=__webpack_require__("./node_modules/@mui/base/Slider/Slider.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MapBubbleSlider=_ref=>{let{width,name,defaultValues,onChange,disabled}=_ref;const[value,setValue]=(0,react.useState)([]);return(0,react.useEffect)((()=>{setValue(!!defaultValues&&[...defaultValues]||[0,25,50,75,100])}),[defaultValues]),(0,jsx_runtime.jsx)(Box.A,{className:"bubbleSliderWrapper",style:{...width?{width}:{width:"100%"}},children:(0,jsx_runtime.jsx)(Slider.A,{className:["bubbleSlider"].join(" "),name,value,onChange:(event,newValue)=>{const res=newValue.map(((val,idx)=>1===idx?val<10?10:val>value[2]?val-5:val:2===idx?val>95?95:val<value[1]?val+5:val:val));setValue([...res]),onChange&&onChange({target:{value:[...res],name}})},getAriaLabel:()=>"Temperature range",min:0,max:100,slots:{valueLabel:_ref2=>{let{index,children}=_ref2;return(0,jsx_runtime.jsx)("span",{"data-index":"".concat(index),className:"label",children:"".concat(children,"%")})}},disabled:!!disabled})})};MapBubbleSlider.__docgenInfo={description:"",methods:[],displayName:"MapBubbleSlider"}},"./src/features/customComponents/components/MapColorSlider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>MapColorSlider});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/system/esm/Box/Box.js"),Slider=__webpack_require__("./node_modules/@mui/base/Slider/Slider.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MapColorSlider=_ref=>{let{width,name,defaultValues,onChange,disabled}=_ref;const[value,setValue]=(0,react.useState)([]);return(0,react.useEffect)((()=>{setValue(!!defaultValues&&[...defaultValues]||[0,35,100])}),[defaultValues]),(0,jsx_runtime.jsx)(Box.A,{className:"colorSliderWrapper",style:{...width?{width}:{width:"100%"}},children:(0,jsx_runtime.jsx)(Slider.A,{className:"colorSlider",name,value,onChange:(event,newValue)=>{const res=newValue.map(((val,idx)=>1===idx?val<10?10:val>value[2]?val-5:val:val));setValue([...res]),onChange&&onChange({target:{value:[...res],name}})},getAriaLabel:()=>"Temperature range",min:0,max:100,slots:{valueLabel:_ref2=>{let{index,children}=_ref2;return(0,jsx_runtime.jsx)("span",{"data-index":"".concat(index),className:"label",children:"".concat(children,"%")})}},disabled:!!disabled,slotProps:{rail:{style:{background:["linear-gradient(to right","rgb(84, 159, 245) 0%","rgb(84, 159, 245) ".concat(value[0],"%"),"rgb(29, 190, 29) ".concat(value[0],"%"),"rgb(29, 190, 29) ".concat(value[1],"%"),"rgb(253, 215, 26) ".concat(value[1],"%"),"rgb(253, 215, 26) ".concat(value[2],"%"),"rgb(237, 28, 36) ".concat(value[2],"%"),"rgb(237, 28, 36) 100%)"].join(",")}}}})})};MapColorSlider.__docgenInfo={description:"",methods:[],displayName:"MapColorSlider"}},"./src/features/customComponents/components/MapLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>MapLabel});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MapLabel=_ref=>{let{type,width,text}=_ref;return(0,jsx_runtime.jsx)("div",{className:"title"===type?"titleText":"normalText",style:{width},children:text})};MapLabel.__docgenInfo={description:"",methods:[],displayName:"MapLabel",props:{type:{description:"",type:{name:"string"},required:!1},width:{description:"",type:{name:"string"},required:!1},text:{description:"",type:{name:"string"},required:!1}}}},"./src/features/customComponents/components/MapShadowSlider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>MapShadowSlider});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/system/esm/Box/Box.js"),Slider=__webpack_require__("./node_modules/@mui/base/Slider/Slider.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MapShadowSlider=_ref=>{let{width,name,defaultValues,onChange,disabled}=_ref;const[value,setValue]=(0,react.useState)([]);return(0,react.useEffect)((()=>{setValue(!!defaultValues&&[...defaultValues]||[0,35,65,100])}),[defaultValues]),(0,jsx_runtime.jsx)(Box.A,{className:"shadowSliderWrapper",style:{...width?{width}:{width:"100%"}},children:(0,jsx_runtime.jsx)(Slider.A,{className:"shadowSlider",name,value,onChange:(event,newValue)=>{const res=newValue.map(((val,idx)=>1===idx?val<10?10:val>value[2]?val-5:val:2===idx?val>95?95:val<value[1]?val+5:val:val));setValue([...res]),onChange&&onChange({target:{value:[...res],name}})},getAriaLabel:()=>"Temperature range",min:0,max:100,slots:{valueLabel:_ref2=>{let{index,children}=_ref2;return(0,jsx_runtime.jsx)("span",{"data-index":"".concat(index),className:"label",children:"".concat(children,"%")})}},disabled:!!disabled})})};MapShadowSlider.__docgenInfo={description:"",methods:[],displayName:"MapShadowSlider",props:{width:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},defaultValues:{description:"",type:{name:"arrayOf",value:{name:"number"}},required:!1},onChange:{description:"",type:{name:"func"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}}},"./src/features/customComponents/components/WSpacer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>WSpacer});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const WSpacer=_ref=>{let{width}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"".concat(width||"0%"),height:"100%"}})};WSpacer.__docgenInfo={description:"",methods:[],displayName:"WSpacer"}},"./src/features/customComponents/components/utils/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$6:()=>getMetric,$E:()=>getOptions,XV:()=>getFormValidationMessage,cn:()=>getRequestData,dp:()=>dynamicFieldsOptions,nU:()=>operationsOptions});const dynamicFieldsOptions=[{value:"50a85cc7-1602-4d8a-872b-40d0a27ad725",text:"incident records ",index:0},{value:"31e63d5c-dbc2-43a0-bb8e-aa57961fecab",text:"Production Capacity",index:1},{value:"21664875-8697-4459-a61f-974aa8f2e845",text:"Upgrade Schedule",index:2},{value:"71675fd5-334c-4add-ae9c-b13432f64fdc",text:"Mining Sites",index:3},{value:"4b1f1e15-58c1-4e39-9b0e-078b758435b7",text:"Expenses",index:4},{value:"3f7aa830-51d5-4462-b9d2-33a1daf9bb4d",text:"Revenue",index:5},{value:"5e7e6990-5280-4be4-ae53-46634637e58f",text:"Number of employees",index:6},{value:"a75c55ac-a01d-447e-aed3-d0d8972e6502",text:"Number of Assets",index:7}],operationsOptions=[{value:"count",text:"Count",index:0},{value:"avg",text:"Average",index:1},{value:"min",text:"Minimum",index:2},{value:"max",text:"Maximum",index:3}],getMetric=(metrics,ref,key)=>{const theMetric=metrics.filter((metric=>metric.ref===ref));return null!=theMetric&&theMetric.length?theMetric[0][key]:void 0},getOptions=(optionsList,metrics,ref,key)=>{const metricValue=getMetric(metrics,ref,key),optionItem=optionsList.filter((option=>{var _option$text,_option$value;return(null==option||null===(_option$text=option.text)||void 0===_option$text?void 0:_option$text.toLowerCase())===(null==metricValue?void 0:metricValue.toLowerCase())||(null==option||null===(_option$value=option.value)||void 0===_option$value?void 0:_option$value.toLowerCase())===(null==metricValue?void 0:metricValue.toLowerCase())}));return null!=optionItem&&optionItem.length?optionItem[0]:void 0},checkAMetric=(fieldName,dynamicfield,calc)=>dynamicfield||calc?fieldName.includes("number")?dynamicfield?!calc&&"Please select pin value for Number":"Please select pin data for Number":fieldName.includes("size")?dynamicfield?!calc&&"Please select pin value for Size":"Please select pin data for Size":fieldName.includes("color")?dynamicfield?!calc&&"Please select pin value for color":"Please select pin data for color":!!fieldName.includes("shadow")&&(dynamicfield?!calc&&"Please select pin value for shadow":"Please select pin data for shadow"):"Both Empty",validationFunctions=formFields=>({name:()=>!formFields.name&&"Please assign a heatmap name",metrics:()=>(metricsFields=>{const numberValidationMessage=checkAMetric("number",metricsFields.number.field,metricsFields.number.calc);if(numberValidationMessage&&"Both Empty"!==numberValidationMessage)return numberValidationMessage;const sizeValidationMessage=checkAMetric("size",metricsFields.size.field,metricsFields.size.calc);if(sizeValidationMessage&&"Both Empty"!==sizeValidationMessage)return sizeValidationMessage;const colorValidationMessage=checkAMetric("color",metricsFields.color.field,metricsFields.color.calc);if(colorValidationMessage&&"Both Empty"!==colorValidationMessage)return colorValidationMessage;const shadowValidationMessage=checkAMetric("shadow",metricsFields.shadow.field,metricsFields.shadow.calc);return shadowValidationMessage&&"Both Empty"!==shadowValidationMessage?shadowValidationMessage:"Both Empty"===numberValidationMessage&&"Both Empty"===sizeValidationMessage&&"Both Empty"===colorValidationMessage&&"Both Empty"===shadowValidationMessage&&"Please Choose at least 1 metric"})({number:{field:formFields.numberField,calc:formFields.numberCalc},size:{field:formFields.sizeField,calc:formFields.sizeCalc},color:{field:formFields.colorField,calc:formFields.colorCalc},shadow:{field:formFields.shadowField,calc:formFields.shadowCalc}})}),getFormValidationMessage=formFields=>{const mandatoryFields=["name","metrics"],validationFuncs=validationFunctions(formFields);for(const field of mandatoryFields){const func=validationFuncs[field],validationMessage=func&&func()||void 0;if(validationMessage)return validationMessage}return!1},getRequestData=formFields=>({name:formFields.name,description:formFields.description||null,group_ids:[],metrics:["number","size","color","shadow"].map((item=>formFields["".concat(item,"Field")]&&{field_id:formFields["".concat(item,"Field")]||null,label:formFields["".concat(item,"FieldLabel")]||"",ref:item,calc:formFields["".concat(item,"Calc")]||null,ranges:formFields["".concat(item,"Slider")]||[]})).filter((item=>!!item))})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);