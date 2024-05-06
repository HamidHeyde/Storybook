/*! For license information please see features-Layouts-LeftMenuRightContentLayout-stories.191889d8.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_with_storybook=self.webpackChunkreact_with_storybook||[]).push([[68],{"./src/features/Layouts/LeftMenuRightContentLayout.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LeftMenuRightContentLayout_stories});var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var LeftMenuRightContentLayout=__webpack_require__("./src/features/Layouts/LeftMenuRightContentLayout.js"),map=__webpack_require__("./src/features/customComponents/assets/map.svg");const LeftMenuRightContentLayout_stories={title:"4Layouts/Left Menu Right Content",component:LeftMenuRightContentLayout.s,parameters:{...(componentPosition="",{layout:componentPosition,backgrounds:{values:[{name:"white",value:"#fff"},{name:"gray",value:"#ccc"},{name:"dark",value:"#777"},{name:"black",value:"#000"}]},docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(blocks_dist.hE,{}),(0,jsx_runtime.jsx)(blocks_dist.Pd,{}),(0,jsx_runtime.jsx)(blocks_dist.VY,{}),(0,jsx_runtime.jsx)(blocks_dist.om,{}),(0,jsx_runtime.jsx)(blocks_dist.H2,{})]})}}),controls:{exclude:["selectedMenu"]}},tags:["autodocs"],decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{boxSizing:"border-box",width:"100vw",height:"100vh",display:"flex",flexDirection:"row"},children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(LeftMenuRightContentLayout.s,{...args,children:"The Content"})})};var componentPosition;const Default={args:{menuItems:[{name:"Sample Menu Item 1",icon:map.h},{name:"Sample Menu Item 2",icon:map.h}],selectedMenu:"Sample Menu Item 2",setSelectedMenu:(0,dist.fn)()}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    menuItems: [{\n      name: `Sample Menu Item 1`,\n      icon: Map\n    }, {\n      name: `Sample Menu Item 2`,\n      icon: Map\n    }],\n    selectedMenu: "Sample Menu Item 2",\n    setSelectedMenu: fn()\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/features/customComponents/assets/map.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>ForwardRef});var _path,_ellipse,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function SvgMap(_ref,svgRef){let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16.5 6.86649C16.5 10.3826 10 19.5 10 19.5C10 19.5 3.5 10.3826 3.5 6.86649C3.5 3.35038 6.41015 0.5 10 0.5C13.5899 0.5 16.5 3.35038 16.5 6.86649Z",fill:"#eee"})),_ellipse||(_ellipse=react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse",{cx:10.181,cy:6.77364,rx:2.70833,ry:2.68868,fill:"teal"})))}const ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgMap);__webpack_require__.p},"./src/features/Layouts/LeftMenuRightContentLayout.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>LeftMenuRightContentLayout});var MenuItem=__webpack_require__("./src/features/leftMenu/components/MenuItem.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LeftMenu=_ref=>{let{items,selectedMenu,menuItemClickHandler}=_ref;return(0,jsx_runtime.jsx)("div",{className:"leftMenu",children:items.map(((item,index)=>(0,jsx_runtime.jsx)(MenuItem.D,{item,selectedMenu,menuItemClickHandler},"".concat(item.name,"_").concat(index))))})};LeftMenu.__docgenInfo={description:"",methods:[],displayName:"LeftMenu"};const LeftMenuRightContentLayout=_ref=>{let{children,menuItems,selectedMenu,setSelectedMenu}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(LeftMenu,{items:menuItems,selectedMenu,menuItemClickHandler:setSelectedMenu}),(0,jsx_runtime.jsx)("div",{className:"mainContent",children})]})};LeftMenuRightContentLayout.__docgenInfo={description:"",methods:[],displayName:"LeftMenuRightContentLayout"}},"./src/features/leftMenu/components/MenuItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>MenuItem});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuItem=_ref=>{let{item,selectedMenu,menuItemClickHandler}=_ref;const{name,icon}=item,Component=icon;return(0,jsx_runtime.jsxs)("div",{className:["menuItem","".concat(selectedMenu===name?"menuItemActive":"menuItemDeActive")].join(" "),onClick:()=>menuItemClickHandler(name),children:[(0,jsx_runtime.jsx)(Component,{className:"menuIcon"}),(0,jsx_runtime.jsx)("div",{className:"menuText",children:name})]})};MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem"}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);