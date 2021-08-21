(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 915:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(544);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
// EXTERNAL MODULE: ./reducers/loginReducer.ts
var loginReducer = __webpack_require__(966);
;// CONCATENATED MODULE: ./reducers/index.ts


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  loginReducer: loginReducer/* default */.ZP
});
/* harmony default export */ var reducers = (rootReducer);
;// CONCATENATED MODULE: ./reducers/configureStore.ts


// store 생성
function configureStore() {
  const composeEnhancers = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || external_redux_namespaceObject.compose;
  const store = (0,external_redux_namespaceObject.createStore)(reducers, composeEnhancers());
  return store;
}
;// CONCATENATED MODULE: ./pages/_app.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // store 설정파일 로드

const store = configureStore();

const TestApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
};

TestApp.getInitialProps = async appContext => {
  const appProps = await app.default.getInitialProps(appContext);
  return _objectSpread({}, appProps);
};

/* harmony default export */ var _app = (TestApp);

/***/ }),

/***/ 966:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nw": function() { return /* binding */ actions; }
/* harmony export */ });
/* unused harmony exports LOGIN_START, LOGOUT_START, loginStart, logoutStart */
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(802);
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);

// 상태 초기화
const initialState = {
  id: ""
}; // 액션타입 선언

const LOGIN_START = "loginReducer/LOGIN_START";
const LOGOUT_START = "loginReducer/LOGOUT_START"; // 액션함수 선언

const loginStart = (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.createAction)(LOGIN_START)();
const logoutStart = (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.createAction)(LOGOUT_START)(); // 액션 객체타입

const actions = {
  loginStart,
  logoutStart
};
// 리듀서 추가
const loginReducer = (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, {
  [LOGOUT_START]: () => ({
    id: ""
  }),
  [LOGIN_START]: (state, action) => {
    console.log(state.id);
    return {
      id: action.payload.id
    };
  }
});
/* harmony default export */ __webpack_exports__["ZP"] = (loginReducer);

/***/ }),

/***/ 579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 802:
/***/ (function(module) {

"use strict";
module.exports = require("typesafe-actions");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [544], function() { return __webpack_exec__(915); });
module.exports = __webpack_exports__;

})();