(self.webpackChunkMyApp=self.webpackChunkMyApp||[]).push([[521],{"./components/Button/TextComponent.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js"));var _Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_Fonts=(_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/I18nManager/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js")),_interopRequireDefault(__webpack_require__("./constants/Fonts.js"))),_jsxRuntime=(__webpack_require__("./constants/PixelScaling.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),styles={defaultTextStyle:{textAlign:"left"}};exports.default=function TextComponent(props){console.log("propsnewwww",props);props.children;return(0,_jsxRuntime.jsx)(_Text.default,{testID:props.testID,accessibilityLabel:props.accessibilityLabel,style:[styles.defaultTextStyle,{color:props.textColor,fontSize:props.fontSize,fontFamily:"Bold"===props.fontFamily?_Fonts.default.Bold:"Regular"===props.fontFamily?_Fonts.default.Regular:"Light"===props.fontFamily?_Fonts.default.Light:_Fonts.default.Regular,fontWeight:"null"===props.fontWeight?null:props.fontWeight},props.style],onPress:props.onPress,numberOfLines:props.numberOfLines,textTransform:props.textTransform,selectable:!1,suppressHighlighting:!0,children:function transformText(text,transformType){switch(transformType){case"capitalize":return text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();case"uppercase":return text.toUpperCase();case"lowercase":return text.toLowerCase();default:return text}}(props.children,props.textTransform)})}},"./components/OptionButton.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_TouchableOpacity=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_TextComponent=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./components/Button/TextComponent.js"))),_PixelScaling=__webpack_require__("./constants/PixelScaling.js"),_SvgIconList=_interopRequireDefault(__webpack_require__("./constants/SvgIconList.js")),_GlobalStyles=__webpack_require__("./constants/GlobalStyles.js"),_ThemeProvider=(_interopRequireDefault(__webpack_require__("./constants/Fonts.js")),__webpack_require__("./constants/Theme/ThemeProvider.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.default=function OptionButton(props){var theme=(0,_ThemeProvider.useTheme)().theme,Component=_TouchableOpacity.default;return(0,_jsxRuntime.jsx)(Component,{testID:props.testID?props.testID:"primaryCTA",accessibilityLabel:props.accessibilityLabel?props.accessibilityLabel:"primaryCTA",onPress:props.onPress,children:(0,_jsxRuntime.jsxs)(_View.default,{style:[{backgroundColor:theme.optionbg},props.containerStyle,_GlobalStyles.globalStyles.optioncontainer],children:[(0,_jsxRuntime.jsx)(_View.default,{children:(0,_jsxRuntime.jsx)(_TextComponent.default,{style:[{alignSelf:"center"},props.containertxt,_GlobalStyles.globalStyles.optioncontainertxt],children:props.label})}),(0,_jsxRuntime.jsx)(_View.default,{children:props.enableArrow?(0,_jsxRuntime.jsx)(_SvgIconList.default,{icon:"Iconright",width:(0,_PixelScaling.actuatedNormalize)(25),height:(0,_PixelScaling.actuatedNormalize)(25)}):null})]})})}},"./constants/Fonts.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _I18nManager=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/I18nManager/index.js"));exports.default={Light_En:"UniversNextforHSBC-Light",Bold_En:"UniversNextforHSBC-Bold",Regular_En:"UniversNextforHSBC-Regular",Medium_En:"UniversNextforHSBC-Medium",Light_Ar:"Univers Arabic forHSBC Light",Bold_Ar:"Univers Arabic forHSBC Bold",Regular_Ar:"Univers Arabic forHSBC",Thin_Ar:"Univers Arabic forHSBC Thin",Light:_I18nManager.default.isRTL?"Univers Arabic forHSBC Light":"UniversNextforHSBC-Light",Regular:_I18nManager.default.isRTL?"Univers Arabic forHSBC":"UniversNextforHSBC-Regular",Bold:_I18nManager.default.isRTL?"Univers Arabic forHSBC Bold":"UniversNextforHSBC-Bold"}},"./constants/GlobalStyles.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.globalStyles=void 0;var _I18nManager=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/I18nManager/index.js")),_Fonts=_interopRequireDefault(__webpack_require__("./constants/Fonts.js")),_PixelScaling=__webpack_require__("./constants/PixelScaling.js"),_Size=__webpack_require__("./constants/Size.js");exports.globalStyles={optioncontainer:{flexDirection:"row",justifyContent:"center",alignItems:"center",borderRadius:_Size.radiusS,padding:_Size.spacingXS},optioncontainertxt:{alignSelf:"center",fontSize:(0,_PixelScaling.actuatedNormalize)(12),lineHeight:(0,_PixelScaling.actuatedNormalize)(16),fontFamily:_Fonts.default.Regular_En},svgStyle:{width:"80",height:"40"},inputLabelStyle:{fontSize:"14px",paddingBottom:_Size.spacingXS,fontFamily:_Fonts.default.Regular_En,fontSize:(0,_PixelScaling.actuatedNormalize)(14)},billDetailInputView:{width:"100%",justifyContent:"center",height:(0,_PixelScaling.actuatedNormalize)(44),fontSize:(0,_PixelScaling.actuatedNormalize)(14),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Bold_Ar:_Fonts.default.Bold_En},screenInitialStyle:{},TextComponentLabelstyle:{fontSize:(0,_PixelScaling.actuatedNormalize)(16),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Bold_Ar:_Fonts.default.Bold_En,paddingBottom:_Size.spacingXS},TextComponentDisclaimerstyle:{paddingBottom:_Size.spacingM,fontSize:(0,_PixelScaling.actuatedNormalize)(14),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Light_Ar:_Fonts.default.Light_En},TextInputComponenttextstyle:{fontWeight:"bold",fontSize:(0,_PixelScaling.actuatedNormalize)(16)},NoneditableInputstyle:{backgroundColor:"rgba(234, 234, 234, 0.6)",width:"100%"},inititalStyle:{marginHorizontal:_Size.spacingS,marginVertical:_Size.spacingM},tncTextStyle:{fontFamily:_I18nManager.default.isRTL?_Fonts.default.Bold_Ar:_Fonts.default.Bold_En,fontSize:(0,_PixelScaling.actuatedNormalize)(14)},DividerStyle:{backgroundColor:"rgba(118, 118, 118, 0.2)",height:1,overflow:"hidden",alignSelf:"stretch"},primaryFlexBoxLarge:{paddingBottom:(0,_PixelScaling.actuatedNormalize)(13),paddingTop:(0,_PixelScaling.actuatedNormalize)(11),borderRadius:_Size.radiusS,justifyContent:"center",flexDirection:"row",paddingHorizontal:_Size.spacingS,alignItems:"center"},primaryFlexBoxSmall:{borderRadius:_Size.radiusS,paddingHorizontal:_Size.spacingS,paddingVertical:(0,_PixelScaling.actuatedNormalize)(7),justifyContent:"center",flexDirection:"row",alignItems:"center"},primaryTextLarge:{textAlign:"center",lineHeight:(0,_PixelScaling.actuatedNormalize)(21),fontSize:(0,_PixelScaling.actuatedNormalize)(16),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},primaryTextSmall:{fontSize:(0,_PixelScaling.actuatedNormalize)(14),lineHeight:(0,_PixelScaling.actuatedNormalize)(18),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En,textAlign:"center"},secondaryFlexBoxLarge:{borderRadius:_Size.radiusS,borderStyle:"solid",borderWidth:1,paddingHorizontal:_Size.spacingS,paddingTop:(0,_PixelScaling.actuatedNormalize)(11),paddingBottom:(0,_PixelScaling.actuatedNormalize)(13)},preloginRedButton:{paddingHorizontal:_Size.spacingL,paddingVertical:(0,_PixelScaling.actuatedNormalize)(9),justifyContent:"center",alignItems:"center"},quickActionButtonBox:{borderRadius:_Size.radiusS,alignSelf:"center",alignItems:"center",justifyContent:"center",paddingHorizontal:_Size.spacingXXS,paddingVertical:(0,_PixelScaling.actuatedNormalize)(12),overflow:"hidden"},quickActionButtonTxt:{alignSelf:"stretch",width:(0,_PixelScaling.actuatedNormalize)(110),fontSize:(0,_PixelScaling.actuatedNormalize)(12),paddingBottom:_Size.spacingXS,lineHeight:(0,_PixelScaling.actuatedNormalize)(16),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En,textAlign:"center",marginTop:_Size.spacingXS},quickActionButtonBox1:{borderRadius:_Size.radiusS,overflow:"hidden",flexDirection:"row",paddingHorizontal:_Size.spacingS,paddingVertical:_Size.spacingXS,alignItems:"center",alignSelf:"center"},quickActionButtonTxt1:{fontSize:(0,_PixelScaling.actuatedNormalize)(14),lineHeight:(0,_PixelScaling.actuatedNormalize)(18),textAlign:"left",marginLeft:_Size.spacingXS,fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},quickActionButtonBox2:{borderRadius:_Size.radiusS,flexDirection:"row",alignItems:"flex-start",padding:(0,_PixelScaling.actuatedNormalize)(12)},quickActionButtonTxt2:{fontSize:(0,_PixelScaling.actuatedNormalize)(12),lineHeight:(0,_PixelScaling.actuatedNormalize)(16),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},linkTextsmall:{fontSize:(0,_PixelScaling.actuatedNormalize)(12),lineHeight:(0,_PixelScaling.actuatedNormalize)(16),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En,textAlign:"left"},linkTextlarge:{fontSize:(0,_PixelScaling.actuatedNormalize)(14),lineHeight:(0,_PixelScaling.actuatedNormalize)(18),fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En,textAlign:"left"},activeDot:{width:(0,_PixelScaling.actuatedNormalize)(16),height:(0,_PixelScaling.actuatedNormalize)(3),borderRadius:(0,_PixelScaling.actuatedNormalize)(100),paddingHorizontal:_Size.spacingXS},subactiveDot:{width:(0,_PixelScaling.actuatedNormalize)(40),height:(0,_PixelScaling.actuatedNormalize)(3),borderRadius:(0,_PixelScaling.actuatedNormalize)(100),backgroundColor:"#db0011"},inactiveDot:{width:(0,_PixelScaling.actuatedNormalize)(16),height:(0,_PixelScaling.actuatedNormalize)(3),borderRadius:(0,_PixelScaling.actuatedNormalize)(100)},subinactiveDot:{width:(0,_PixelScaling.actuatedNormalize)(16),height:(0,_PixelScaling.actuatedNormalize)(3),borderRadius:(0,_PixelScaling.actuatedNormalize)(100),backgroundColor:"#000000"},togglelabel:{fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},badgestatus:{flex:1,width:"100%"},badgenotification:{alignItems:"center",justifyContent:"center",flex:1},notificationbadgetext:{lineHeight:17,fontFamily:"Univers Next for HSBC",textAlign:"center",fontSize:12},iconOverflowContainerRadio1:{backgroundColor:"#FFFFFF",marginTop:_Size.spacingXS,borderRadius:5,shadowColor:"#40d3d1",borderColor:"green",width:"80%",borderWidth:1,marginHorizontal:_Size.spacingS},iconOverflowContainerRadio2:{backgroundColor:"#FFFFFF",borderRadius:5,shadowColor:"#40d3d1",borderColor:"green",width:"80%",borderWidth:1,paddingBottom:_Size.spacingXS,marginHorizontal:_Size.spacingS},iconOverflowContainerRadio3:{backgroundColor:"#FFFFFF",marginTop:_Size.spacingXS,borderRadius:5,shadowColor:"#40d3d1",borderColor:"green",width:"45%",borderWidth:1},Radiobtnv2:{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"},Radiobtnerrmsg:{marginHorizontal:_Size.spacingS,paddingBottom:_Size.spacingXS,color:"red"},listButtonSmall:{borderRadius:_Size.radiusS,overflow:"hidden",paddingHorizontal:_Size.spacingS,paddingVertical:_Size.spacingXS,alignItems:"center",alignSelf:"center",flexDirection:"row"},listButtonLarge:{borderRadius:_Size.radiusS,overflow:"hidden",paddingHorizontal:_Size.spacingS,paddingVertical:_Size.spacingS,alignItems:"center",alignSelf:"center",flexDirection:"row"},listButtonTxtSmall:{width:(0,_PixelScaling.actuatedNormalize)(279),justifyContent:"center",marginLeft:_Size.spacingXS,alignSelf:"center",fontSize:(0,_PixelScaling.actuatedNormalize)(14),lineHeight:(0,_PixelScaling.actuatedNormalize)(18),textAlign:"left",fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},listButtonTxtLarge:{width:(0,_PixelScaling.actuatedNormalize)(279),justifyContent:"center",marginLeft:_Size.spacingXS,alignSelf:"center",fontSize:(0,_PixelScaling.actuatedNormalize)(16),lineHeight:(0,_PixelScaling.actuatedNormalize)(21),textAlign:"left",fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},listButtonDashboard:{borderRadius:_Size.radiusS,overflow:"hidden",paddingHorizontal:_Size.spacingS,paddingVertical:_Size.spacingS,alignItems:"center",justifyContent:"center",alignSelf:"center",flexDirection:"row"},listButtonDashboard1:{borderRadius:_Size.radiusS,justifyContent:"center",alignItems:"center",alignSelf:"stretch",flexDirection:"row",padding:_Size.spacingS},listButtonTxt:{width:(0,_PixelScaling.actuatedNormalize)(279),justifyContent:"center",marginLeft:_Size.spacingXS,alignSelf:"center",fontSize:(0,_PixelScaling.actuatedNormalize)(14),lineHeight:(0,_PixelScaling.actuatedNormalize)(15),textAlign:"left",fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},listButtonTxt1:{justifyContent:"center",alignSelf:"center",fontSize:(0,_PixelScaling.actuatedNormalize)(14),lineHeight:(0,_PixelScaling.actuatedNormalize)(15),textAlign:"left",fontFamily:_I18nManager.default.isRTL?_Fonts.default.Regular_Ar:_Fonts.default.Regular_En},floatingButton:{borderRadius:_Size.radiusS,backgroundColor:"#db0011",width:(0,_PixelScaling.actuatedNormalize)(56),height:(0,_PixelScaling.actuatedNormalize)(56),overflow:"hidden",flexDirection:"row",alignItems:"center",justifyContent:"center"}}},"./constants/Size.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.spacingXXS=exports.spacingXXL=exports.spacingXS=exports.spacingXL=exports.spacingS=exports.spacingM=exports.spacingL=exports.radiusXS=exports.radiusXL=exports.radiusS=exports.radiusM=exports.radiusL=exports.progressIndicatorStep3Width=exports.progressIndicatorStep2Width=exports.progressIndicatorStep1Width=exports.progressIndicatorBarHeight=void 0;var _PixelScaling=__webpack_require__("./constants/PixelScaling.js");exports.spacingXXS=(0,_PixelScaling.actuatedNormalize)(4),exports.spacingXS=(0,_PixelScaling.actuatedNormalize)(8),exports.spacingS=(0,_PixelScaling.actuatedNormalize)(16),exports.spacingM=(0,_PixelScaling.actuatedNormalize)(24),exports.spacingL=(0,_PixelScaling.actuatedNormalize)(32),exports.spacingXL=(0,_PixelScaling.actuatedNormalize)(48),exports.spacingXXL=(0,_PixelScaling.actuatedNormalize)(64),exports.radiusXS=(0,_PixelScaling.actuatedNormalize)(4),exports.radiusS=(0,_PixelScaling.actuatedNormalize)(8),exports.radiusM=(0,_PixelScaling.actuatedNormalize)(12),exports.radiusL=(0,_PixelScaling.actuatedNormalize)(16),exports.radiusXL=(0,_PixelScaling.actuatedNormalize)(24),exports.progressIndicatorBarHeight=(0,_PixelScaling.actuatedNormalize)(4),exports.progressIndicatorStep1Width=(0,_PixelScaling.actuatedNormalize)(85),exports.progressIndicatorStep2Width=(0,_PixelScaling.actuatedNormalize)(170),exports.progressIndicatorStep3Width=(0,_PixelScaling.actuatedNormalize)(255)},"./constants/SvgIconList.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./constants/PixelScaling.js");var _SvgLocations=__webpack_require__("./constants/SvgLocations.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.default=function SvgIconList(_ref){var icon=_ref.icon,width=_ref.width,height=_ref.height,transform=_ref.transform;switch(icon){case"backIcon":return(0,_jsxRuntime.jsx)(_SvgLocations.BackArrowNew,{width,height,transform});case"closeIcon":return(0,_jsxRuntime.jsx)(_SvgLocations.CloseIconNew,{width,height});case"AddBene":return(0,_jsxRuntime.jsx)(_SvgLocations.AddBene,{width,height});case"Iconright":return(0,_jsxRuntime.jsx)(_SvgLocations.RightArrow,{width,height});case"ChangeLang":return(0,_jsxRuntime.jsx)(_SvgLocations.ChangeLang,{fill:"black",width,height});case"AccountAction":return(0,_jsxRuntime.jsx)(_SvgLocations.AccountAction,{width,height});case"InfoIconRed":return(0,_jsxRuntime.jsx)(_SvgLocations.InfoIconRed,{width,height});default:return null}}},"./node_modules/react-native-web/dist/exports/Dimensions/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js")),_invariant=_interopRequireDefault(__webpack_require__("./node_modules/fbjs/lib/invariant.js")),_canUseDom=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/canUseDom/index.js")),dimensions={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},listeners={},shouldInit=_canUseDom.default;function update(){if(_canUseDom.default){var height,width,win=window;if(win.visualViewport){var visualViewport=win.visualViewport;height=Math.round(visualViewport.height*visualViewport.scale),width=Math.round(visualViewport.width*visualViewport.scale)}else{var docEl=win.document.documentElement;height=docEl.clientHeight,width=docEl.clientWidth}dimensions.window={fontScale:1,height,scale:win.devicePixelRatio||1,width},dimensions.screen={fontScale:1,height:win.screen.height,scale:win.devicePixelRatio||1,width:win.screen.width}}}function handleResize(){update(),Array.isArray(listeners.change)&&listeners.change.forEach((function(handler){return handler(dimensions)}))}exports.default=(0,_createClass2.default)((function Dimensions(){(0,_classCallCheck2.default)(this,Dimensions)}),null,[{key:"get",value:function get(dimension){return shouldInit&&(shouldInit=!1,update()),(0,_invariant.default)(dimensions[dimension],"No dimension set for key "+dimension),dimensions[dimension]}},{key:"set",value:function set(initialDimensions){initialDimensions&&(_canUseDom.default?(0,_invariant.default)(!1,"Dimensions cannot be set in the browser"):(null!=initialDimensions.screen&&(dimensions.screen=initialDimensions.screen),null!=initialDimensions.window&&(dimensions.window=initialDimensions.window)))}},{key:"addEventListener",value:function addEventListener(type,handler){var _this=this;return listeners[type]=listeners[type]||[],listeners[type].push(handler),{remove:function remove(){_this.removeEventListener(type,handler)}}}},{key:"removeEventListener",value:function removeEventListener(type,handler){Array.isArray(listeners[type])&&(listeners[type]=listeners[type].filter((function(_handler){return _handler!==handler})))}}]);_canUseDom.default&&(window.visualViewport?window.visualViewport.addEventListener("resize",handleResize,!1):window.addEventListener("resize",handleResize,!1))},"./node_modules/react-native-web/dist/exports/I18nManager/index.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={allowRTL:function allowRTL(){},forceRTL:function forceRTL(){},getConstants:function getConstants(){return{isRTL:!1}}}},"./node_modules/react-native-web/dist/exports/PixelRatio/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js")),_Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js"));exports.default=function(){function PixelRatio(){(0,_classCallCheck2.default)(this,PixelRatio)}return(0,_createClass2.default)(PixelRatio,null,[{key:"get",value:function get(){return _Dimensions.default.get("window").scale}},{key:"getFontScale",value:function getFontScale(){return _Dimensions.default.get("window").fontScale||PixelRatio.get()}},{key:"getPixelSizeForLayoutSize",value:function getPixelSizeForLayoutSize(layoutSize){return Math.round(layoutSize*PixelRatio.get())}},{key:"roundToNearestPixel",value:function roundToNearestPixel(layoutSize){var ratio=PixelRatio.get();return Math.round(layoutSize*ratio)/ratio}}])}()},"./node_modules/react-native-web/dist/exports/Platform/index.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var Platform={OS:"web",select:function select(obj){return"web"in obj?obj.web:obj.default},get isTesting(){return!1}};exports.default=Platform},"./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js")),_objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),React=_react,_useMergeRefs=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useMergeRefs/index.js")),_usePressEvents=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/usePressEvents/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_warnOnce=__webpack_require__("./node_modules/react-native-web/dist/modules/warnOnce/index.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var _excluded=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];var styles=_StyleSheet.default.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),MemoedTouchableOpacity=React.memo(React.forwardRef((function TouchableOpacity(props,forwardedRef){(0,_warnOnce.warnOnce)("TouchableOpacity","TouchableOpacity is deprecated. Please use Pressable.");var activeOpacity=props.activeOpacity,delayPressIn=props.delayPressIn,delayPressOut=props.delayPressOut,delayLongPress=props.delayLongPress,disabled=props.disabled,focusable=props.focusable,onLongPress=props.onLongPress,onPress=props.onPress,onPressIn=props.onPressIn,onPressOut=props.onPressOut,rejectResponderTermination=props.rejectResponderTermination,style=props.style,rest=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded),hostRef=(0,_react.useRef)(null),setRef=(0,_useMergeRefs.default)(forwardedRef,hostRef),_useState=(0,_react.useState)("0s"),duration=_useState[0],setDuration=_useState[1],_useState2=(0,_react.useState)(null),opacityOverride=_useState2[0],setOpacityOverride=_useState2[1],setOpacityTo=(0,_react.useCallback)((function(value,duration){setOpacityOverride(value),setDuration(duration?duration/1e3+"s":"0s")}),[setOpacityOverride,setDuration]),setOpacityActive=(0,_react.useCallback)((function(duration){setOpacityTo(null!=activeOpacity?activeOpacity:.2,duration)}),[activeOpacity,setOpacityTo]),setOpacityInactive=(0,_react.useCallback)((function(duration){setOpacityTo(null,duration)}),[setOpacityTo]),pressConfig=(0,_react.useMemo)((function(){return{cancelable:!rejectResponderTermination,disabled,delayLongPress,delayPressStart:delayPressIn,delayPressEnd:delayPressOut,onLongPress,onPress,onPressStart:function onPressStart(event){var isGrant=null!=event.dispatchConfig?"onResponderGrant"===event.dispatchConfig.registrationName:"keydown"===event.type;setOpacityActive(isGrant?0:150),null!=onPressIn&&onPressIn(event)},onPressEnd:function onPressEnd(event){setOpacityInactive(250),null!=onPressOut&&onPressOut(event)}}}),[delayLongPress,delayPressIn,delayPressOut,disabled,onLongPress,onPress,onPressIn,onPressOut,rejectResponderTermination,setOpacityActive,setOpacityInactive]),pressEventHandlers=(0,_usePressEvents.default)(hostRef,pressConfig);return React.createElement(_View.default,(0,_extends2.default)({},rest,pressEventHandlers,{accessibilityDisabled:disabled,focusable:!disabled&&!1!==focusable,pointerEvents:disabled?"box-none":void 0,ref:setRef,style:[styles.root,!disabled&&styles.actionable,style,null!=opacityOverride&&{opacity:opacityOverride},{transitionDuration:duration}]}))})));MemoedTouchableOpacity.displayName="TouchableOpacity";exports.default=MemoedTouchableOpacity},"./node_modules/fbjs/lib/invariant.js":module=>{"use strict";var validateFormat=function(format){};module.exports=function invariant(condition,format){for(var _len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++)args[_key-2]=arguments[_key];if(validateFormat(format),!condition){var error;if(void 0===format)error=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var argIndex=0;(error=new Error(format.replace(/%s/g,(function(){return String(args[argIndex++])})))).name="Invariant Violation"}throw error.framesToPop=1,error}}}}]);