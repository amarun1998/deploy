(self.webpackChunkMyApp=self.webpackChunkMyApp||[]).push([[777],{"./components/Button/DarkLightToggle.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _Button=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Button/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_ThemeProvider=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./constants/Theme/ThemeProvider.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.default=function DarkLightToggle(){var _useTheme=(0,_ThemeProvider.useTheme)(),toggleTheme=(_useTheme.theme,_useTheme.toggleTheme);return(0,_jsxRuntime.jsxs)(_View.default,{children:[(0,_jsxRuntime.jsx)(_Text.default,{children:"DarkLightToggle"}),(0,_jsxRuntime.jsx)(_Button.default,{title:"Toggle",onPress:toggleTheme})]})},_StyleSheet.default.create({})},"./node_modules/react-native-web/dist/exports/Button/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_TouchableOpacity=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_warnOnce=__webpack_require__("./node_modules/react-native-web/dist/modules/warnOnce/index.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var Button=React.forwardRef((function(props,forwardedRef){(0,_warnOnce.warnOnce)("Button","Button is deprecated. Please use Pressable.");var accessibilityLabel=props.accessibilityLabel,color=props.color,disabled=props.disabled,onPress=props.onPress,testID=props.testID,title=props.title;return React.createElement(_TouchableOpacity.default,{accessibilityLabel,accessibilityRole:"button",disabled,focusable:!disabled,onPress,ref:forwardedRef,style:[styles.button,color&&{backgroundColor:color},disabled&&styles.buttonDisabled],testID},React.createElement(_Text.default,{style:[styles.text,disabled&&styles.textDisabled]},title))}));Button.displayName="Button";var styles=_StyleSheet.default.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});exports.default=Button},"./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js")),_objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),React=_react,_useMergeRefs=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useMergeRefs/index.js")),_usePressEvents=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/usePressEvents/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_warnOnce=__webpack_require__("./node_modules/react-native-web/dist/modules/warnOnce/index.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var _excluded=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];var styles=_StyleSheet.default.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),MemoedTouchableOpacity=React.memo(React.forwardRef((function TouchableOpacity(props,forwardedRef){(0,_warnOnce.warnOnce)("TouchableOpacity","TouchableOpacity is deprecated. Please use Pressable.");var activeOpacity=props.activeOpacity,delayPressIn=props.delayPressIn,delayPressOut=props.delayPressOut,delayLongPress=props.delayLongPress,disabled=props.disabled,focusable=props.focusable,onLongPress=props.onLongPress,onPress=props.onPress,onPressIn=props.onPressIn,onPressOut=props.onPressOut,rejectResponderTermination=props.rejectResponderTermination,style=props.style,rest=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded),hostRef=(0,_react.useRef)(null),setRef=(0,_useMergeRefs.default)(forwardedRef,hostRef),_useState=(0,_react.useState)("0s"),duration=_useState[0],setDuration=_useState[1],_useState2=(0,_react.useState)(null),opacityOverride=_useState2[0],setOpacityOverride=_useState2[1],setOpacityTo=(0,_react.useCallback)((function(value,duration){setOpacityOverride(value),setDuration(duration?duration/1e3+"s":"0s")}),[setOpacityOverride,setDuration]),setOpacityActive=(0,_react.useCallback)((function(duration){setOpacityTo(null!=activeOpacity?activeOpacity:.2,duration)}),[activeOpacity,setOpacityTo]),setOpacityInactive=(0,_react.useCallback)((function(duration){setOpacityTo(null,duration)}),[setOpacityTo]),pressConfig=(0,_react.useMemo)((function(){return{cancelable:!rejectResponderTermination,disabled,delayLongPress,delayPressStart:delayPressIn,delayPressEnd:delayPressOut,onLongPress,onPress,onPressStart:function onPressStart(event){var isGrant=null!=event.dispatchConfig?"onResponderGrant"===event.dispatchConfig.registrationName:"keydown"===event.type;setOpacityActive(isGrant?0:150),null!=onPressIn&&onPressIn(event)},onPressEnd:function onPressEnd(event){setOpacityInactive(250),null!=onPressOut&&onPressOut(event)}}}),[delayLongPress,delayPressIn,delayPressOut,disabled,onLongPress,onPress,onPressIn,onPressOut,rejectResponderTermination,setOpacityActive,setOpacityInactive]),pressEventHandlers=(0,_usePressEvents.default)(hostRef,pressConfig);return React.createElement(_View.default,(0,_extends2.default)({},rest,pressEventHandlers,{accessibilityDisabled:disabled,focusable:!disabled&&!1!==focusable,pointerEvents:disabled?"box-none":void 0,ref:setRef,style:[styles.root,!disabled&&styles.actionable,style,null!=opacityOverride&&{opacity:opacityOverride},{transitionDuration:duration}]}))})));MemoedTouchableOpacity.displayName="TouchableOpacity";exports.default=MemoedTouchableOpacity}}]);