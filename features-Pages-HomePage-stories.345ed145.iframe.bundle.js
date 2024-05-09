"use strict";(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[622],{"./src/features/Pages/HomePage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HomePage_stories});var react=__webpack_require__("./node_modules/react/index.js"),LeftMenuRightContentLayout=__webpack_require__("./src/features/Layouts/LeftMenuRightContentLayout.js"),taskPlanner=__webpack_require__("./src/features/taskPlanner/index.js"),MapsData=__webpack_require__("./src/features/customComponents/data/MapsData.js"),infoPanel=__webpack_require__("./src/features/customComponents/components/infoPanel/index.js"),dataPanel=__webpack_require__("./src/features/customComponents/components/dataPanel/index.js"),newPanel=__webpack_require__("./src/features/customComponents/components/newPanel/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PanelContent=_ref=>{let{maps,setMaps,showAlert,setShowAlert}=_ref;const[panel,setPanel]=(0,react.useState)("InfoPanel"),Component=(panel=>({InfoPanel:infoPanel.j,DataPanel:dataPanel.t,NewPanel:newPanel.Z}[panel]||infoPanel.j))(panel),panelProperties={setPanel,..."NewPanel"===panel&&{maps,setMaps,showAlert,setShowAlert},..."DataPanel"===panel&&{maps,setMaps}};return(0,jsx_runtime.jsx)(Component,{...panelProperties})};PanelContent.__docgenInfo={description:"",methods:[],displayName:"PanelContent"};var AppAlert=__webpack_require__("./src/features/customComponents/components/AppAlert.js"),MapsMainPanelLayout=__webpack_require__("./src/features/Layouts/MapsMainPanelLayout.js");const CustomComponents=()=>{const[maps,setMaps]=(0,react.useState)(MapsData.h||[]),[showAlert,setShowAlert]=(0,react.useState)({type:"success",message:"Operation completed successfully",visible:!1});return(0,jsx_runtime.jsx)("div",{className:"customComponentsAppWrapper",children:(0,jsx_runtime.jsx)("div",{className:"customComponentsWrapper",children:(0,jsx_runtime.jsxs)(MapsMainPanelLayout.p,{children:[(0,jsx_runtime.jsx)(PanelContent,{maps,setMaps,showAlert,setShowAlert}),(null==showAlert?void 0:showAlert.visible)&&(0,jsx_runtime.jsx)(AppAlert.m,{type:showAlert.type,message:showAlert.message,visible:showAlert.visible,onclose:()=>setShowAlert({...showAlert,visible:!1})})]})})})};CustomComponents.__docgenInfo={description:"",methods:[],displayName:"CustomComponents"};var _path,_path2,map=__webpack_require__("./src/features/customComponents/assets/map.svg");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function SvgTodo(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:20,height:20,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M15.7652 2.28314C15.266 0.755765 13.5664 -0.0169884 12.0874 0.610962C11.2653 0.959948 10.3249 0.886761 9.56676 0.41481C8.20263 -0.4344 6.40395 0.066118 5.67454 1.49789C5.26917 2.29361 4.50169 2.84206 3.61757 2.96784C2.02673 3.19415 0.97058 4.73374 1.33215 6.2994C1.53309 7.16952 1.29771 8.08299 0.701282 8.74764C-0.371904 9.94358 -0.191329 11.8019 1.09203 12.7688C1.80527 13.3062 2.21212 14.1572 2.18246 15.0498C2.12909 16.6558 3.46189 17.9632 5.06655 17.879C5.95834 17.8322 6.81706 18.2226 7.36804 18.9254C8.35946 20.19 10.2209 20.3348 11.396 19.2389C12.049 18.6298 12.9578 18.3769 13.8316 18.5611C15.4039 18.8925 16.923 17.807 17.1187 16.2121C17.2275 15.3257 17.7611 14.5479 18.5489 14.1273C19.9664 13.3705 20.4322 11.5626 19.557 10.215C19.0706 9.46607 18.9793 8.52718 19.3125 7.69863C19.9119 6.20775 19.1066 4.52331 17.57 4.05361C16.7159 3.79257 16.0426 3.13199 15.7652 2.28314Z",fill:"#eee"})),_path2||(_path2=react.createElement("path",{d:"M14.9335 6.06372L8.11659 12.9678L4.96094 9.76706",stroke:"teal",strokeWidth:2.35324})))}const ForwardRef=react.forwardRef(SvgTodo),HomePageComponents=(__webpack_require__.p,[{name:"HeatMaps",icon:map.h,Component:CustomComponents,Props:{}},{name:"TaskPlanner",icon:ForwardRef,Component:taskPlanner.k,Props:{TodoListData:[{id:1,title:"Learn React",completed:!1,pinned:!0,favorite:!1},{id:2,title:"Learn Redux",completed:!1,pinned:!1,favorite:!0},{id:3,title:"Learn React Router",completed:!0,pinned:!1,favorite:!1}]}}]),HomePage=()=>{const[selectedMenu,setSelectedMenu]=(0,react.useState)("HeatMaps"),{Component,Props}=(name=selectedMenu,(null==HomePageComponents?void 0:HomePageComponents.filter((page=>page.name===name)))[0]);var name;return(0,jsx_runtime.jsx)("div",{className:"appWrapper",children:(0,jsx_runtime.jsx)(LeftMenuRightContentLayout.s,{menuItems:HomePageComponents.map((page=>({name:page.name,icon:page.icon}))),selectedMenu,setSelectedMenu,children:(0,jsx_runtime.jsx)(Component,{...Props})})})};HomePage.__docgenInfo={description:"",methods:[],displayName:"HomePage"};var dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const HomePage_stories={title:"Pages/HomePage",component:HomePage,parameters:{...(componentPosition="",{layout:componentPosition,backgrounds:{values:[{name:"white",value:"#fff"},{name:"gray",value:"#ccc"},{name:"dark",value:"#777"},{name:"black",value:"#000"}]},docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.om,{}),(0,jsx_runtime.jsx)(dist.H2,{})]})}})},tags:["autodocs"],render:args=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(HomePage,{...args,children:"The Content"})})};var componentPosition;const Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/features/customComponents/assets/map.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ForwardRef});var _path,_ellipse,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function SvgMap(_ref,svgRef){let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16.5 6.86649C16.5 10.3826 10 19.5 10 19.5C10 19.5 3.5 10.3826 3.5 6.86649C3.5 3.35038 6.41015 0.5 10 0.5C13.5899 0.5 16.5 3.35038 16.5 6.86649Z",fill:"#eee"})),_ellipse||(_ellipse=react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse",{cx:10.181,cy:6.77364,rx:2.70833,ry:2.68868,fill:"teal"})))}const ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgMap);__webpack_require__.p},"./src/features/Layouts/LeftMenuRightContentLayout.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>LeftMenuRightContentLayout});var MenuItem=__webpack_require__("./src/features/leftMenu/components/MenuItem.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LeftMenu=_ref=>{let{items,selectedMenu,menuItemClickHandler}=_ref;return(0,jsx_runtime.jsx)("div",{className:"leftMenu",children:items.map(((item,index)=>(0,jsx_runtime.jsx)(MenuItem.D,{item,selectedMenu,menuItemClickHandler},"".concat(item.name,"_").concat(index))))})};LeftMenu.__docgenInfo={description:"",methods:[],displayName:"LeftMenu",props:{items:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{name:{name:"string",required:!0},icon:{name:"element",required:!0}}}},required:!0},selectedMenu:{description:"",type:{name:"string"},required:!0},menuItemClickHandler:{description:"",type:{name:"func"},required:!0}}};const LeftMenuRightContentLayout=_ref=>{let{children,menuItems,selectedMenu,setSelectedMenu}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(LeftMenu,{items:menuItems,selectedMenu,menuItemClickHandler:setSelectedMenu}),(0,jsx_runtime.jsx)("div",{className:"mainContent",children})]})};LeftMenuRightContentLayout.__docgenInfo={description:"",methods:[],displayName:"LeftMenuRightContentLayout",props:{children:{description:"",type:{name:"node"},required:!0},menuItems:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{name:{name:"string",required:!0},icon:{name:"element",required:!0}}}},required:!0},selectedMenu:{description:"",type:{name:"string"},required:!0},setSelectedMenu:{description:"",type:{name:"func"},required:!0}}}},"./src/features/customComponents/components/AppAlert.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>AppAlert});var react=__webpack_require__("./node_modules/react/index.js"),Alert=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AppAlert=_ref=>{let{type,message,visible,onclose}=_ref;const[visibleState,setVisibleState]=(0,react.useState)(visible);return(0,react.useEffect)((()=>{setVisibleState&&setTimeout((()=>{setVisibleState(!1),setTimeout((()=>{onclose()&&onclose()}),1e3)}),2e3)}),[setVisibleState]),(0,jsx_runtime.jsx)("div",{className:"alertWrapper",style:{opacity:visibleState?1:0},children:(0,jsx_runtime.jsx)(Alert.A,{style:{width:"97%"},severity:type,children:message})})};AppAlert.__docgenInfo={description:"",methods:[],displayName:"AppAlert",props:{type:{description:"",type:{name:"enum",value:[{value:'"success"',computed:!1},{value:'"info"',computed:!1},{value:'"warning"',computed:!1},{value:'"error"',computed:!1}]},required:!0},message:{description:"",type:{name:"string"},required:!0},visible:{description:"",type:{name:"bool"},required:!0},onclose:{description:"",type:{name:"func"},required:!1}}}},"./src/features/customComponents/components/infoPanel/InfoActions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>InfoActions});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=_ref=>{let{id,label,onClick,defaultChecked}=_ref;const[checked,setChecked]=(0,react.useState)(defaultChecked||!1);return(0,jsx_runtime.jsxs)("div",{className:"checkboxWrapper",onClick:()=>{const newValue=!checked;if(setChecked(newValue),onClick)return onClick(id,newValue)},children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",checked,readOnly:!0}),(0,jsx_runtime.jsx)("label",{children:label})]})};Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const InfoActions=_ref=>{let{setPanel}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"infoActionWrapper",children:[(0,jsx_runtime.jsxs)("div",{className:"checkBoxWrapper",children:[(0,jsx_runtime.jsx)(Checkbox,{}),(0,jsx_runtime.jsx)("div",{className:"text",children:"Don't show this panel again"})]}),(0,jsx_runtime.jsx)("button",{className:"infoButton",onClick:()=>{setPanel("DataPanel")},children:"Next"})]})};InfoActions.__docgenInfo={description:"",methods:[],displayName:"InfoActions"}},"./src/features/customComponents/components/infoPanel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>InfoPanel});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InfoText=()=>(0,jsx_runtime.jsxs)("div",{className:"infoWrapper",children:[(0,jsx_runtime.jsx)("p",{className:"title",children:"Instructions"}),(0,jsx_runtime.jsx)("p",{className:"text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit:"}),(0,jsx_runtime.jsx)("span",{className:"text",children:(0,jsx_runtime.jsx)("ol",{children:(0,jsx_runtime.jsx)("li",{children:"Aliquam urna sapien, tempus ac metus nec, bibendum venenatis lacus Maecenas ultrices libero quis lacus auctor convallis. Curabitur eu turpis, gravida gravida eros. Aliquam ornare a ante vel dapibus."})})}),(0,jsx_runtime.jsxs)("span",{className:"text",children:[(0,jsx_runtime.jsx)("ol",{start:"2",children:(0,jsx_runtime.jsx)("li",{children:"Phasellus facilisis, neque et maximus posuere:"})}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{className:"textSpacer",children:"Mauris ex volutpat dui, a pharetra ipsum lorem sit amet metus Maecenas gravida orci ac risus ultricies, at pellentesque sapien."}),(0,jsx_runtime.jsx)("li",{className:"textSpacer",children:"Morbi ex dui, congue in pretium et, tempus non nulla. Duis sagittis vitae orci sit amet lobortis."}),(0,jsx_runtime.jsx)("li",{className:"textSpacer",children:"Morbi ex dui, congue in pretium et, tempus non nulla. Duis sagittis vitae orci sit amet lobortis."})]})]}),(0,jsx_runtime.jsx)("span",{className:"text",children:(0,jsx_runtime.jsx)("ol",{start:"3",children:(0,jsx_runtime.jsx)("li",{children:"Please note that Morbi ex dui, congue in pretium."})})})]});InfoText.__docgenInfo={description:"",methods:[],displayName:"InfoText"};var InfoActions=__webpack_require__("./src/features/customComponents/components/infoPanel/InfoActions.js");const InfoPanel=_ref=>{let{setPanel}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"infoPanelWrapper",children:[(0,jsx_runtime.jsx)(InfoText,{}),(0,jsx_runtime.jsx)(InfoActions.S,{setPanel})]})};InfoPanel.__docgenInfo={description:"",methods:[],displayName:"InfoPanel"}},"./src/features/customComponents/components/newPanel/NewPanelActions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>NewPanelActions});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NewPanelActions=_ref=>{let{onAdd,onCancel}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"newPanelActionsWrapper",children:[(0,jsx_runtime.jsx)("button",{className:"actionButton",onClick:onCancel,children:"Go Back"}),(0,jsx_runtime.jsx)("button",{className:"actionButton",onClick:onAdd,children:"Add Map"})]})};NewPanelActions.__docgenInfo={description:"",methods:[],displayName:"NewPanelActions"}},"./src/features/customComponents/components/newPanel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>NewPanel});var react=__webpack_require__("./node_modules/react/index.js"),WSpacer=__webpack_require__("./src/features/customComponents/components/WSpacer.js"),MapLabel=__webpack_require__("./src/features/customComponents/components/MapLabel.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MapTextField=_ref=>{let{width,name,value,onChange,placeholder,disabled,readonly}=_ref;const textFieldProps={style:{width:"".concat(width||"100%")},type:"text",className:"mapTextFieldWrapper",...name&&{name},...placeholder&&{placeholder},...disabled&&{disabled},...value&&{value},...onChange&&{onChange}},labelProps={style:{width:"".concat(width||"100%")},...value&&{text:value},type:"normal"};return readonly?(0,jsx_runtime.jsx)(MapLabel.L,{...labelProps}):(0,jsx_runtime.jsx)("input",{...textFieldProps})};MapTextField.__docgenInfo={description:"",methods:[],displayName:"MapTextField"};const MapTextArea=_ref=>{let{width,name,value,onChange,placeholder,disabled,readonly}=_ref;const textAreaProps={style:{width:"".concat(width||"100%"),maxWidth:"".concat(width||"100%"),minWidth:"".concat(width||"100%")},type:"text",className:"mapTextAreaWrapper",...name&&{name},...placeholder&&{placeholder},...disabled&&{disabled},...value&&{value},...onChange&&{onChange}},labelProps={style:{width:"".concat(width||"100%")},...value&&{text:value},type:"normal"};return readonly?(0,jsx_runtime.jsx)(MapLabel.L,{...labelProps}):(0,jsx_runtime.jsx)("textarea",{...textAreaProps})};MapTextArea.__docgenInfo={description:"",methods:[],displayName:"MapTextArea"};var AutoComplete=__webpack_require__("./src/features/customComponents/components/AutoComplete.js"),MapBubbleSlider=__webpack_require__("./src/features/customComponents/components/MapBubbleSlider.js"),MapColorSlider=__webpack_require__("./src/features/customComponents/components/MapColorSlider.js"),MapShadowSlider=__webpack_require__("./src/features/customComponents/components/MapShadowSlider.js"),utils=__webpack_require__("./src/features/customComponents/components/utils/utils.js");const NewPanelContent=_ref=>{let{onChange}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"newPanelContentWrapper",children:[(0,jsx_runtime.jsxs)("div",{className:["panelRow","borderBottom"].join(" "),children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"35%",text:"Map Name"}),(0,jsx_runtime.jsx)(MapTextField,{width:"65%",type:"text",name:"name",placeholder:"",onChange,value:void 0})]}),(0,jsx_runtime.jsxs)("div",{className:["panelRow","borderBottom"].join(" "),children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"35%",text:"Map Description"}),(0,jsx_runtime.jsx)(MapTextArea,{width:"65%",type:"text",name:"description",placeholder:"",onChange,value:void 0})]}),(0,jsx_runtime.jsx)("div",{className:["panelRow","borderBottom"].join(" "),children:(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:"Number"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"45%",name:"numberField",options:utils.dp,onChange}),(0,jsx_runtime.jsx)(WSpacer.G,{width:"5%"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"30%",name:"numberCalc",options:utils.nU,onChange})]})}),(0,jsx_runtime.jsxs)("div",{className:["panelMultiRow","borderBottom"].join(" "),children:[(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:"Size"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"45%",name:"sizeField",options:utils.dp,onChange}),(0,jsx_runtime.jsx)(WSpacer.G,{width:"5%"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"30%",name:"sizeCalc",options:utils.nU,onChange})]}),(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:""}),(0,jsx_runtime.jsx)(MapBubbleSlider.M,{width:"80%",name:"sizeSlider",onChange})]})]}),(0,jsx_runtime.jsxs)("div",{className:["panelMultiRow","borderBottom"].join(" "),children:[(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:"Color"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"45%",name:"colorField",options:utils.dp,onChange}),(0,jsx_runtime.jsx)(WSpacer.G,{width:"5%"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"30%",name:"colorCalc",options:utils.nU,onChange})]}),(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:""}),(0,jsx_runtime.jsx)(MapColorSlider.N,{width:"80%",name:"colorSlider",onChange})]})]}),(0,jsx_runtime.jsxs)("div",{className:["panelMultiRow","borderBottom"].join(" "),children:[(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:"Shadow"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"45%",name:"shadowField",options:utils.dp,onChange}),(0,jsx_runtime.jsx)(WSpacer.G,{width:"5%"}),(0,jsx_runtime.jsx)(AutoComplete.L,{width:"30%",name:"shadowCalc",options:utils.nU,onChange})]}),(0,jsx_runtime.jsxs)("div",{className:"panelRow",children:[(0,jsx_runtime.jsx)(MapLabel.L,{type:"normal",width:"20%",text:""}),(0,jsx_runtime.jsx)(MapShadowSlider.y,{width:"80%",name:"shadowSlider",onChange})]})]})]})};NewPanelContent.__docgenInfo={description:"",methods:[],displayName:"NewPanelContent"};var NewPanelActions=__webpack_require__("./src/features/customComponents/components/newPanel/NewPanelActions.js");const NewPanel=_ref=>{let{setPanel,maps,setMaps,showAlert,setShowAlert}=_ref;const[formFields,setFormFields]=(0,react.useState)({numberSlider:[],sizeSlider:[0,25,50,75,100],colorSlider:[0,35,100],shadowSlider:[0,35,65,100]});return(0,jsx_runtime.jsxs)("div",{className:"newPanelWrapper",children:[(0,jsx_runtime.jsx)(NewPanelContent,{onChange:e=>{const fieldName=e.target.name,fieldValue=e.target.value,fieldLabel=e.target.text;setFormFields((prev=>({...prev,[fieldName]:fieldValue,...!!fieldLabel&&{["".concat(fieldName,"Label")]:fieldLabel}})))}}),(0,jsx_runtime.jsx)(NewPanelActions.i,{onAdd:()=>{const validationMessage=(0,utils.XV)(formFields);if(console.log(validationMessage),validationMessage)setShowAlert({type:"error",message:validationMessage,visible:!0});else if(!validationMessage){const requestData={...(0,utils.cn)(formFields),id:maps.length+1,pin:!1,favorite:!1,visible:!0};setMaps([...maps,{...requestData}]),setShowAlert({type:"success",message:"New Panel Added Successfully",visible:!0}),setPanel("DataPanel")}},onCancel:()=>{setPanel("DataPanel")}})]})};NewPanel.__docgenInfo={description:"",methods:[],displayName:"NewPanel"}},"./src/features/leftMenu/components/MenuItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>MenuItem});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuItem=_ref=>{let{item,selectedMenu,menuItemClickHandler}=_ref;const{name,icon}=item,Component=icon;return(0,jsx_runtime.jsxs)("div",{className:["menuItem","".concat(selectedMenu===name?"menuItemActive":"menuItemDeActive")].join(" "),onClick:()=>menuItemClickHandler(name),children:[(0,jsx_runtime.jsx)(Component,{className:"menuIcon"}),(0,jsx_runtime.jsx)("div",{className:"menuText",children:name})]})};MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{item:{description:"",type:{name:"shape",value:{name:{name:"string",required:!0},icon:{name:"element",required:!0}}},required:!0},selectedMenu:{description:"",type:{name:"string"},required:!0},menuItemClickHandler:{description:"",type:{name:"func"},required:!0}}}},"./src/features/taskPlanner/components/AddTask.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>AddTask});var react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/features/taskPlanner/components/Button.js"),TextInput=__webpack_require__("./src/features/taskPlanner/components/TextInput.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AddTask=_ref=>{let{todo,setTodo}=_ref;const inputRef=(0,react.useRef)("");return(0,jsx_runtime.jsxs)("div",{className:"addTodoWrapper",children:[(0,jsx_runtime.jsx)(TextInput.k,{width:60,value:inputRef.current.value,onChange:e=>{inputRef.current=e.target.value}}),(0,jsx_runtime.jsx)(Button.$,{width:30,text:"Add a Task",onClick:()=>{inputRef.current&&(setTodo([...todo,{id:todo.length+1,title:inputRef.current,completed:!1,pinned:!1,favorite:!1}]),inputRef.current="")}})]})};AddTask.__docgenInfo={description:"",methods:[],displayName:"AddTask",props:{todo:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!0},title:{name:"string",required:!0},completed:{name:"bool",required:!1},pinned:{name:"bool",required:!1},favorite:{name:"bool",required:!1}}}},required:!1},setTodo:{description:"",type:{name:"func"},required:!1}}}},"./src/features/taskPlanner/components/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{width,text,onClick}=_ref;return(0,jsx_runtime.jsx)("button",{className:"addTodoButton",style:{width:"".concat(width,"%")||0},onClick,children:text})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{width:{description:"",type:{name:"number"},required:!1},text:{description:"",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!1}}}},"./src/features/taskPlanner/components/Checkbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=_ref=>{let{id,label,onClick,defaultChecked}=_ref;const[checked,setChecked]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setChecked(defaultChecked||!1)}),[defaultChecked]);return(0,jsx_runtime.jsxs)("div",{className:"checkboxWrapper",onClick:()=>{const newValue=!checked;if(setChecked(newValue),onClick)return onClick(id,newValue)},children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",checked,readOnly:!0}),(0,jsx_runtime.jsx)("label",{children:label})]})};Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{id:{description:"",type:{name:"number"},required:!0},label:{description:"",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!1},defaultChecked:{description:"",type:{name:"bool"},required:!1}}}},"./src/features/taskPlanner/components/Pin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Pin});var PushPin=__webpack_require__("./node_modules/@mui/icons-material/PushPin.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Pin=_ref=>{let{id,pinned,onClick,size,backgroundColor}=_ref;const pinProps={className:"pinBase",style:{fontSize:size?"".concat(size,"rem"):"1.5rem",...pinned&&{fill:backgroundColor||"teal",transform:"rotate(45deg)"},...!pinned&&{fill:"#eee"}},...onClick&&{onClick:()=>onClick(id)}};return(0,jsx_runtime.jsx)("div",{className:"pinWrapper",children:(0,jsx_runtime.jsx)(PushPin.A,{...pinProps})})};Pin.__docgenInfo={description:"Renders a pin component with the specified properties.",methods:[],displayName:"Pin",props:{id:{description:"",type:{name:"number"},required:!1},pinned:{description:"",type:{name:"bool"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},size:{description:"",type:{name:"number"},required:!1},backgroundColor:{description:"",type:{name:"string"},required:!1}}}},"./src/features/taskPlanner/components/Star.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>Star_Star});var Star=__webpack_require__("./node_modules/@mui/icons-material/Star.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Star_Star=_ref=>{let{id,favorite,onClick,size,backgroundColor}=_ref;const starProps={className:"starBase",style:{fontSize:size?"".concat(size,"rem"):"1.5rem",...favorite&&{fill:backgroundColor||"teal",transform:"rotate(45deg)"},...!favorite&&{fill:"#eee"}},...onClick&&{onClick:()=>onClick(id)}};return(0,jsx_runtime.jsx)("div",{className:"starWrapper",children:(0,jsx_runtime.jsx)(Star.A,{...starProps})})};Star_Star.__docgenInfo={description:"",methods:[],displayName:"Star",props:{id:{description:"",type:{name:"number"},required:!1},favorite:{description:"",type:{name:"bool"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},size:{description:"",type:{name:"number"},required:!1},backgroundColor:{description:"",type:{name:"string"},required:!1}}}},"./src/features/taskPlanner/components/TaskItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>TaskItem});var Pin=__webpack_require__("./src/features/taskPlanner/components/Pin.js"),Star=__webpack_require__("./src/features/taskPlanner/components/Star.js"),Checkbox=__webpack_require__("./src/features/taskPlanner/components/Checkbox.js"),ColorPallette=__webpack_require__("./src/features/theme/ColorPallette.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TaskItem=_ref=>{let{taskItem,onStarClickHandler,onPinClickHandler,onCheckboxClickHandler}=_ref;const{id,title,completed,pinned,favorite}=taskItem;return(0,jsx_runtime.jsxs)("div",{className:"todoItem",children:[(0,jsx_runtime.jsx)("div",{className:"left",children:(0,jsx_runtime.jsx)(Checkbox.S,{id,label:title,defaultChecked:completed,onClick:onCheckboxClickHandler})}),(0,jsx_runtime.jsxs)("div",{className:"right",children:[(0,jsx_runtime.jsx)(Star.F,{id,favorite,onClick:onStarClickHandler,backgroundColor:ColorPallette.z1[400]}),(0,jsx_runtime.jsx)(Pin.y,{id,pinned,onClick:onPinClickHandler,backgroundColor:ColorPallette.z1[400]})]})]})};TaskItem.__docgenInfo={description:"",methods:[],displayName:"TaskItem",props:{taskItem:{description:"",type:{name:"shape",value:{id:{name:"number",required:!0},title:{name:"string",required:!0},completed:{name:"bool",required:!0},pinned:{name:"bool",required:!0},favorite:{name:"bool",required:!0}}},required:!0},onStarClickHandler:{description:"",type:{name:"func"},required:!1},onPinClickHandler:{description:"",type:{name:"func"},required:!1},onCheckboxClickHandler:{description:"",type:{name:"func"},required:!1}}}},"./src/features/taskPlanner/components/TextInput.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>TextInput});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInput=_ref=>{let{width,value,onChange}=_ref;return(0,jsx_runtime.jsx)("input",{className:"addTodoInput",style:{width:"".concat(width,"%")||0},type:"text",value,onChange})};TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{width:{description:"",type:{name:"number"},required:!1},value:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}}},"./src/features/taskPlanner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>TaskPlanner});var react=__webpack_require__("./node_modules/react/index.js"),TaskItem=__webpack_require__("./src/features/taskPlanner/components/TaskItem.js"),AddTask=__webpack_require__("./src/features/taskPlanner/components/AddTask.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TaskPlanner=_ref=>{let{TodoListData}=_ref;const[todo,setTodo]=(0,react.useState)(TodoListData||[]),onStarClickHandler=id=>{setTodo(todo.map((todoItem=>todoItem.id===id?{...todoItem,favorite:!todoItem.favorite}:todoItem)))},onPinClickHandler=id=>{const currentItem=todo.filter((todoItem=>todoItem.id===id));if(currentItem[0].pinned)setTodo(todo.map((todoItem=>todoItem.id===id?{...todoItem,pinned:!todoItem.pinned}:todoItem)).sort(((a,b)=>a.id-b.id)));else{currentItem[0].pinned=!currentItem[0].pinned;const restItems=todo.filter((todoItem=>todoItem.id!==id));setTodo([...currentItem,...restItems])}},onCheckboxClickHandler=(id,newValue)=>{setTodo(todo.map((todoItem=>todoItem.id===id?{...todoItem,completed:newValue}:todoItem)))};return(0,jsx_runtime.jsx)("div",{className:"todoAppWrapper",children:(0,jsx_runtime.jsxs)("div",{className:"todoWrapper",children:[(0,jsx_runtime.jsx)(AddTask.R,{todo,setTodo}),(0,jsx_runtime.jsx)("div",{className:"taskPlannerWrapper",children:todo.map((taskItem=>(0,jsx_runtime.jsx)(TaskItem.L,{taskItem,onPinClickHandler,onStarClickHandler,onCheckboxClickHandler},taskItem.id)))})]})})};TaskPlanner.__docgenInfo={description:"",methods:[],displayName:"TaskPlanner",props:{TodoListData:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!0},title:{name:"string",required:!0},completed:{name:"bool",required:!1},pinned:{name:"bool",required:!1},favorite:{name:"bool",required:!1}}}},required:!1}}}},"./src/features/theme/ColorPallette.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D9:()=>yellow,T_:()=>orange,wL:()=>green,wv:()=>red,z1:()=>blue});const red={100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626"},orange={100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c"},yellow={100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04"},green={100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a"},blue={100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb"}}}]);