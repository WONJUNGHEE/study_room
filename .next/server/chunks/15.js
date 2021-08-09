exports.id = 15;
exports.ids = [15];
exports.modules = {

/***/ 15:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FC": function() { return /* binding */ RESET_TEXT; },
/* harmony export */   "Nw": function() { return /* binding */ actions; }
/* harmony export */ });
/* unused harmony exports ADD_TEXT, REMOVE_TEXT, resetText, addText, removeText */
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(802);
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);
 // 상태의 타입 선언

// 상태 초기화
const initialState = {
  no: 0,
  text: "hello"
}; // 액션타입 선언

const RESET_TEXT = "testReducer/RESET_TEXT";
const ADD_TEXT = "testReducer/ADD_TEXT";
const REMOVE_TEXT = "testReducer/REMOVE_TEXT"; // 액션함수 선언

const resetText = (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.createAction)(RESET_TEXT)();
const addText = (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.createAction)(ADD_TEXT)();
const removeText = (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.createAction)(REMOVE_TEXT)(); // 액션 객체타입

const actions = {
  resetText,
  addText,
  removeText
};
// 리듀서 추가
const testReducer = (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, {
  [RESET_TEXT]: () => ({
    no: 0,
    text: ""
  }),
  [ADD_TEXT]: (state, action) => {
    console.log(state.text);
    return {
      no: action.payload.no,
      text: action.payload.text
    };
  },
  [REMOVE_TEXT]: state => ({
    no: state.no,
    text: ""
  })
});
/* harmony default export */ __webpack_exports__["ZP"] = (testReducer);

/***/ })

};
;