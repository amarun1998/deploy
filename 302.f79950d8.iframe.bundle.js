(self.webpackChunkMyApp=self.webpackChunkMyApp||[]).push([[302],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i},module.exports.__esModule=!0,module.exports.default=module.exports},"./components/Button/Paginator.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_Dimensions=(_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js"))),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_reactNativeSnapCarousel=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react-native-snap-carousel/lib/module/index.js")),_GlobalStyles=__webpack_require__("./constants/GlobalStyles.js"),_ThemeProvider=__webpack_require__("./constants/Theme/ThemeProvider.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var screenWidth=_Dimensions.default.get("window").width,styles=_StyleSheet.default.create({});exports.default=function Paginator(props){console.log("data..11111",props);var theme=(0,_ThemeProvider.useTheme)().theme,_React$useState=_react.default.useState(0),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),activeIndex=_React$useState2[0],setActiveIndex=_React$useState2[1],renderItem=function renderItem(_ref){_ref.item;return(0,_jsxRuntime.jsx)(_View.default,{style:styles.itemContainer})};return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsxs)(_View.default,{style:styles.container,children:[(0,_jsxRuntime.jsx)(_reactNativeSnapCarousel.default,{data:props.data,renderItem,sliderWidth:screenWidth,itemWidth:screenWidth,onSnapToItem:function onSnapToItem(index){return setActiveIndex(index)}}),(0,_jsxRuntime.jsx)(_reactNativeSnapCarousel.Pagination,{dotsLength:props.data.length,activeDotIndex:activeIndex,dotStyle:[_GlobalStyles.globalStyles.activeDot,{color:theme.primaryblack}],inactiveDotStyle:[_GlobalStyles.globalStyles.inactiveDot,{color:theme.primaryblack}],inactiveDotOpacity:.4,inactiveDotScale:1,containerStyle:_GlobalStyles.globalStyles.paginationContainer})]}),(0,_jsxRuntime.jsxs)(_View.default,{style:styles.container,children:[(0,_jsxRuntime.jsx)(_reactNativeSnapCarousel.default,{data:props.subdata,renderItem,sliderWidth:screenWidth,itemWidth:screenWidth,onSnapToItem:function onSnapToItem(index){return setActiveIndex(index)}}),(0,_jsxRuntime.jsx)(_reactNativeSnapCarousel.Pagination,{dotsLength:props.subdata.length,activeDotIndex:activeIndex,dotStyle:[_GlobalStyles.globalStyles.subactiveDot,{color:theme.primaryred}],inactiveDotStyle:[_GlobalStyles.globalStyles.subinactiveDot,{color:theme.primaryblack}],inactiveDotOpacity:.4,inactiveDotScale:1,containerStyle:_GlobalStyles.globalStyles.paginationContainer})]})]})}},"./constants/Fonts.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _I18nManager=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/I18nManager/index.js"));exports.default={Light_En:"UniversNextforHSBC-Light",Bold_En:"UniversNextforHSBC-Bold",Regular_En:"UniversNextforHSBC-Regular",Medium_En:"UniversNextforHSBC-Medium",Light_Ar:"Univers Arabic forHSBC Light",Bold_Ar:"Univers Arabic forHSBC Bold",Regular_Ar:"Univers Arabic forHSBC",Thin_Ar:"Univers Arabic forHSBC Thin",Light:_I18nManager.default.isRTL?"Univers Arabic forHSBC Light":"UniversNextforHSBC-Light",Regular:_I18nManager.default.isRTL?"Univers Arabic forHSBC":"UniversNextforHSBC-Regular",Bold:_I18nManager.default.isRTL?"Univers Arabic forHSBC Bold":"UniversNextforHSBC-Bold"}},"./constants/GlobalStyles.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.globalStyles=void 0;var _I18nManager=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/I18nManager/index.js")),_Fonts=_interopRequireDefault(__webpack_require__("./constants/Fonts.js")),_PixelScaling=__webpack_require__("./constants/PixelScaling.js"),_Size=__webpack_require__("./constants/Size.js");exports.globalStyles={optioncontainer:{flexDirection:"row",justifyContent:"center",alignItems:"center",borderRadius:_Size.radiusS,padding:_Size.spacingXS},optioncontainertxt:{alignSelf:"center",fontSize:(0,_PixelScaling.actuatedNormalize)(12),lineHeight:(0,_PixelScaling.actuatedNormalize)(16),fontFamily:_Fonts.default.Regular_En},svgStyle:{width:"80",height:"40"},inputLabelStyle:{fontSize:"14px",paddingBottom:_Size.spacingXS,fontFamily:_Fonts.default.Regular_En,fontSize:(0,_PixelScaling.actuatedNormalize)(14)},billDetailInputView:{width:"100%",justifyContent:"center",height:(0,_PixelScaling.actuatedNormalize)(44),fontSize:(0,_PixelScaling.actuatedNormalize)(14),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Bold_Ar:_Fonts.default.Bold_En},screenInitialStyle:{},TextComponentLabelstyle:{fontSize:(0,_PixelScaling.actuatedNormalize)(16),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Bold_Ar:_Fonts.default.Bold_En,paddingBottom:_Size.spacingXS},TextComponentDisclaimerstyle:{paddingBottom:_Size.spacingM,fontSize:(0,_PixelScaling.actuatedNormalize)(14),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Light_Ar:_Fonts.default.Light_En},TextInputComponenttextstyle:{fontWeight:"bold",fontSize:(0,_PixelScaling.actuatedNormalize)(16)},NoneditableInputstyle:{backgroundColor:"rgba(234, 234, 234, 0.6)",width:"100%"},inititalStyle:{marginHorizontal:_Size.spacingS,marginVertical:_Size.spacingM},tncTextStyle:{fontFamily:_I18nManager.default.isRTL?_Fonts.default.Bold_Ar:_Fonts.default.Bold_En,fontSize:(0,_PixelScaling.actuatedNormalize)(14)},DividerStyle:{backgroundColor:"rgba(118, 118, 118, 0.2)",height:1,overflow:"hidden",alignSelf:"stretch"},primaryFlexBoxLarge:{paddingBottom:(0,_PixelScaling.actuatedNormalize)(13),paddingTop:(0,_PixelScaling.actuatedNormalize)(11),borderRadius:_Size.radiusS,justifyContent:"center",flexDirection:"row",paddingHorizontal:_Size.spacingS,alignItems:"center"},primaryFlexBoxSmall:{borderRadius:_Size.radiusS,paddingHorizontal:_Size.spacingS,paddingVertical:(0,_PixelScaling.actuatedNormalize)(7),justifyContent:"center",flexDirection:"row",alignItems:"center"},primaryTextLarge:{textAlign:"center",lineHeight:(0,_PixelScaling.actuatedNormalize)(21),fontSize:(0,_PixelScaling.actuatedNormalize)(16),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},primaryTextSmall:{fontSize:(0,_PixelScaling.actuatedNormalize)(14),lineHeight:(0,_PixelScaling.actuatedNormalize)(18),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En,textAlign:"center"},secondaryFlexBoxLarge:{borderRadius:_Size.radiusS,borderStyle:"solid",borderWidth:1,paddingHorizontal:_Size.spacingS,paddingTop:(0,_PixelScaling.actuatedNormalize)(11),paddingBottom:(0,_PixelScaling.actuatedNormalize)(13)},preloginRedButton:{paddingHorizontal:_Size.spacingL,paddingVertical:(0,_PixelScaling.actuatedNormalize)(9),justifyContent:"center",alignItems:"center"},quickActionButtonBox:{borderRadius:_Size.radiusS,alignSelf:"center",alignItems:"center",justifyContent:"center",paddingHorizontal:_Size.spacingXXS,paddingVertical:(0,_PixelScaling.actuatedNormalize)(12),overflow:"hidden"},quickActionButtonTxt:{alignSelf:"stretch",width:(0,_PixelScaling.actuatedNormalize)(110),fontSize:(0,_PixelScaling.actuatedNormalize)(12),paddingBottom:_Size.spacingXS,lineHeight:(0,_PixelScaling.actuatedNormalize)(16),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En,textAlign:"center",marginTop:_Size.spacingXS},quickActionButtonBox1:{borderRadius:_Size.radiusS,overflow:"hidden",flexDirection:"row",paddingHorizontal:_Size.spacingS,paddingVertical:_Size.spacingXS,alignItems:"center",alignSelf:"center"},quickActionButtonTxt1:{fontSize:(0,_PixelScaling.actuatedNormalize)(14),lineHeight:(0,_PixelScaling.actuatedNormalize)(18),textAlign:"left",marginLeft:_Size.spacingXS,fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},quickActionButtonBox2:{borderRadius:_Size.radiusS,flexDirection:"row",alignItems:"flex-start",padding:(0,_PixelScaling.actuatedNormalize)(12)},quickActionButtonTxt2:{fontSize:(0,_PixelScaling.actuatedNormalize)(12),lineHeight:(0,_PixelScaling.actuatedNormalize)(16),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},linkTextsmall:{fontSize:(0,_PixelScaling.actuatedNormalize)(12),lineHeight:(0,_PixelScaling.actuatedNormalize)(16),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En,textAlign:"left"},linkTextlarge:{fontSize:(0,_PixelScaling.actuatedNormalize)(14),lineHeight:(0,_PixelScaling.actuatedNormalize)(18),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En,textAlign:"left"},activeDot:{width:(0,_PixelScaling.actuatedNormalize)(16),height:(0,_PixelScaling.actuatedNormalize)(3),borderRadius:(0,_PixelScaling.actuatedNormalize)(100),paddingHorizontal:_Size.spacingXS},subactiveDot:{width:(0,_PixelScaling.actuatedNormalize)(40),height:(0,_PixelScaling.actuatedNormalize)(3),borderRadius:(0,_PixelScaling.actuatedNormalize)(100),backgroundColor:"#db0011"},inactiveDot:{width:(0,_PixelScaling.actuatedNormalize)(16),height:(0,_PixelScaling.actuatedNormalize)(3),borderRadius:(0,_PixelScaling.actuatedNormalize)(100)},subinactiveDot:{width:(0,_PixelScaling.actuatedNormalize)(16),height:(0,_PixelScaling.actuatedNormalize)(3),borderRadius:(0,_PixelScaling.actuatedNormalize)(100),backgroundColor:"#000000"},togglelabel:{fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},badgestatus:{flex:1,width:"100%"},badgenotification:{alignItems:"center",justifyContent:"center",flex:1},notificationbadgetext:{lineHeight:17,fontFamily:"Univers Next for HSBC",textAlign:"center",fontSize:12},iconOverflowContainerRadio1:{backgroundColor:"#FFFFFF",marginTop:_Size.spacingXS,borderRadius:5,shadowColor:"#40d3d1",borderColor:"green",width:"80%",borderWidth:1,marginHorizontal:_Size.spacingS},iconOverflowContainerRadio2:{backgroundColor:"#FFFFFF",borderRadius:5,shadowColor:"#40d3d1",borderColor:"green",width:"80%",borderWidth:1,paddingBottom:_Size.spacingXS,marginHorizontal:_Size.spacingS},iconOverflowContainerRadio3:{backgroundColor:"#FFFFFF",marginTop:_Size.spacingXS,borderRadius:5,shadowColor:"#40d3d1",borderColor:"green",width:"45%",borderWidth:1},Radiobtnv2:{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"},Radiobtnerrmsg:{marginHorizontal:_Size.spacingS,paddingBottom:_Size.spacingXS,color:"red"},listButtonSmall:{borderRadius:_Size.radiusS,overflow:"hidden",paddingHorizontal:_Size.spacingS,paddingVertical:_Size.spacingXS,alignItems:"center",alignSelf:"center",flexDirection:"row"},listButtonLarge:{borderRadius:_Size.radiusS,overflow:"hidden",paddingHorizontal:_Size.spacingS,paddingVertical:_Size.spacingS,alignItems:"center",alignSelf:"center",flexDirection:"row"},listButtonTxtSmall:{width:(0,_PixelScaling.actuatedNormalize)(279),justifyContent:"center",marginLeft:_Size.spacingXS,alignSelf:"center",fontSize:(0,_PixelScaling.actuatedNormalize)(14),lineHeight:(0,_PixelScaling.actuatedNormalize)(18),textAlign:"left",fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},listButtonTxtLarge:{width:(0,_PixelScaling.actuatedNormalize)(279),justifyContent:"center",marginLeft:_Size.spacingXS,alignSelf:"center",fontSize:(0,_PixelScaling.actuatedNormalize)(16),lineHeight:(0,_PixelScaling.actuatedNormalize)(21),textAlign:"left",fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},listButtonDashboard:{borderRadius:_Size.radiusS,overflow:"hidden",paddingHorizontal:_Size.spacingS,paddingVertical:_Size.spacingS,alignItems:"center",justifyContent:"center",alignSelf:"center",flexDirection:"row"},listButtonDashboard1:{borderRadius:_Size.radiusS,justifyContent:"center",alignItems:"center",alignSelf:"stretch",flexDirection:"row",padding:_Size.spacingS},listButtonTxt:{width:(0,_PixelScaling.actuatedNormalize)(279),justifyContent:"center",marginLeft:_Size.spacingXS,alignSelf:"center",fontSize:(0,_PixelScaling.actuatedNormalize)(14),lineHeight:(0,_PixelScaling.actuatedNormalize)(15),textAlign:"left",fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},listButtonTxt1:{justifyContent:"center",alignSelf:"center",fontSize:(0,_PixelScaling.actuatedNormalize)(14),lineHeight:(0,_PixelScaling.actuatedNormalize)(15),textAlign:"left",fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},floatingButton:{borderRadius:_Size.radiusS,backgroundColor:"#db0011",width:(0,_PixelScaling.actuatedNormalize)(56),height:(0,_PixelScaling.actuatedNormalize)(56),overflow:"hidden",flexDirection:"row",alignItems:"center",justifyContent:"center"}}},"./constants/PixelScaling.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.actuatedNormalize=function actuatedNormalize(size){var newSize=size*scale;return"ios"===_Platform.default.OS?Math.round(_PixelRatio.default.roundToNearestPixel(newSize)):Math.round(_PixelRatio.default.roundToNearestPixel(newSize))-1},exports.actuatedNormalizeVertical=function actuatedNormalizeVertical(size){var newSize=size*scaleVertical;return"ios"===_Platform.default.OS?Math.round(_PixelRatio.default.roundToNearestPixel(newSize)):Math.round(_PixelRatio.default.roundToNearestPixel(newSize))-1},exports.isTab=function isTab(){return SCREEN_WIDTH>550};var _Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js")),_Platform=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js")),_PixelRatio=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/PixelRatio/index.js")),_Dimensions$get=_Dimensions.default.get("window"),SCREEN_WIDTH=_Dimensions$get.width,SCREEN_HEIGHT=_Dimensions$get.height,scale=SCREEN_WIDTH/375,scaleVertical=SCREEN_HEIGHT/812},"./constants/Size.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.spacingXXS=exports.spacingXXL=exports.spacingXS=exports.spacingXL=exports.spacingS=exports.spacingM=exports.spacingL=exports.radiusXS=exports.radiusXL=exports.radiusS=exports.radiusM=exports.radiusL=exports.progressIndicatorStep3Width=exports.progressIndicatorStep2Width=exports.progressIndicatorStep1Width=exports.progressIndicatorBarHeight=void 0;var _PixelScaling=__webpack_require__("./constants/PixelScaling.js");exports.spacingXXS=(0,_PixelScaling.actuatedNormalize)(4),exports.spacingXS=(0,_PixelScaling.actuatedNormalize)(8),exports.spacingS=(0,_PixelScaling.actuatedNormalize)(16),exports.spacingM=(0,_PixelScaling.actuatedNormalize)(24),exports.spacingL=(0,_PixelScaling.actuatedNormalize)(32),exports.spacingXL=(0,_PixelScaling.actuatedNormalize)(48),exports.spacingXXL=(0,_PixelScaling.actuatedNormalize)(64),exports.radiusXS=(0,_PixelScaling.actuatedNormalize)(4),exports.radiusS=(0,_PixelScaling.actuatedNormalize)(8),exports.radiusM=(0,_PixelScaling.actuatedNormalize)(12),exports.radiusL=(0,_PixelScaling.actuatedNormalize)(16),exports.radiusXL=(0,_PixelScaling.actuatedNormalize)(24),exports.progressIndicatorBarHeight=(0,_PixelScaling.actuatedNormalize)(4),exports.progressIndicatorStep1Width=(0,_PixelScaling.actuatedNormalize)(85),exports.progressIndicatorStep2Width=(0,_PixelScaling.actuatedNormalize)(170),exports.progressIndicatorStep3Width=(0,_PixelScaling.actuatedNormalize)(255)},"./node_modules/react-native-web/dist/exports/ActivityIndicator/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js")),_objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var _excluded=["animating","color","hidesWhenStopped","size","style"],createSvgCircle=function createSvgCircle(style){return React.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style})},ActivityIndicator=React.forwardRef((function(props,forwardedRef){var _props$animating=props.animating,animating=void 0===_props$animating||_props$animating,_props$color=props.color,color=void 0===_props$color?"#1976D2":_props$color,_props$hidesWhenStopp=props.hidesWhenStopped,hidesWhenStopped=void 0===_props$hidesWhenStopp||_props$hidesWhenStopp,_props$size=props.size,size=void 0===_props$size?"small":_props$size,style=props.style,other=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded),svg=React.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},createSvgCircle({stroke:color,opacity:.2}),createSvgCircle({stroke:color,strokeDasharray:80,strokeDashoffset:60}));return React.createElement(_View.default,(0,_extends2.default)({},other,{"aria-valuemax":1,"aria-valuemin":0,ref:forwardedRef,role:"progressbar",style:[styles.container,style]}),React.createElement(_View.default,{children:svg,style:["number"==typeof size?{height:size,width:size}:indicatorSizes[size],styles.animation,!animating&&styles.animationPause,!animating&&hidesWhenStopped&&styles.hidesWhenStopped]}))}));ActivityIndicator.displayName="ActivityIndicator";var styles=_StyleSheet.default.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),indicatorSizes=_StyleSheet.default.create({small:{width:20,height:20},large:{width:36,height:36}});exports.default=ActivityIndicator},"./node_modules/react-native-web/dist/exports/I18nManager/index.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={allowRTL:function allowRTL(){},forceRTL:function forceRTL(){},getConstants:function getConstants(){return{isRTL:!1}}}}}]);