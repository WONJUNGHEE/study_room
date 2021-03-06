exports.id = 10;
exports.ids = [10];
exports.modules = {

/***/ 10:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_LoginMain; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./reducers/loginReducer.ts
var loginReducer = __webpack_require__(966);
;// CONCATENATED MODULE: ./components/login/Login.tsx







function Login() {
  const {
    id
  } = (0,external_react_redux_.useSelector)(state => state.loginReducer);
  const {
    0: inputId,
    1: setInputId
  } = (0,external_react_.useState)("");
  const {
    0: inputPw,
    1: setInputPw
  } = (0,external_react_.useState)("");
  const dispatch = (0,external_react_redux_.useDispatch)();

  function data_init() {
    // 새로고침이후 데이터 유지하기 위해
    if (window.localStorage.getItem(`${inputId}`) !== null) {
      return;
    }

    let init = [];

    for (let i = 9; i < 25; i++) {
      const data = {
        using: false,
        name: "",
        phone: "",
        count: ""
      };
      let initdata = data;
      initdata.time = `${i}`;
      init.push(initdata);
    }

    window.localStorage.setItem(`${inputId}`, JSON.stringify(init));
  }

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    if (sessionStorage.getItem(inputId)) {
      if (sessionStorage.getItem(inputId) === inputPw) {
        alert("로그인 성공");
        dispatch(loginReducer/* actions.loginStart */.Nw.loginStart({
          id: inputId
        }));
        data_init();
        router_default().push("/Schedule");
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } else {
      alert("없는 아이디입니다.");
    }
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "TOP \uB3C5\uC11C\uC2E4 \uB85C\uADF8\uC778"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "login-form",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "field",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "login_input",
          type: "text",
          name: "input_id",
          value: inputId,
          placeholder: "\uC544\uC774\uB514",
          onChange: handleInputId,
          onKeyPress: handleKeyPress
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "input_id",
          children: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "field",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "login_input",
          type: "password",
          name: "input_pw",
          value: inputPw,
          placeholder: "\uBE44\uBC00\uBC88\uD638",
          onChange: handleInputPw,
          onKeyPress: handleKeyPress
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "input_pw",
          children: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694."
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "field",
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "login-button",
        onClick: onClickLogin,
        children: "Login"
      })
    })]
  });
}

/* harmony default export */ var login_Login = (Login);
// EXTERNAL MODULE: ./components/Modal/Modal.tsx
var Modal = __webpack_require__(867);
;// CONCATENATED MODULE: ./components/login/Signup.tsx





function Signup() {
  const {
    0: ModalOpen,
    1: setModalOpen
  } = (0,external_react_.useState)(false);
  const {
    0: inputId,
    1: setInputId
  } = (0,external_react_.useState)("");
  const {
    0: inputPw,
    1: setInputPw
  } = (0,external_react_.useState)("");

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      sign();
    }
  };

  const sign = () => {
    if (inputId === "" || inputPw === "") {
      alert("회원가입 정보를 입력해주세요.");
    } else if (sessionStorage.getItem(inputId)) {
      alert("이미 사용중인 아이디입니다.");
    } else {
      sessionStorage.setItem(inputId, inputPw);
      closeModal();
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "field",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "login-button",
      onClick: openModal,
      children: "\uD68C\uC6D0\uAC00\uC785"
    }), /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
      open: ModalOpen,
      className: "login-button",
      close: closeModal,
      header: "\uD68C\uC6D0\uAC00\uC785",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "input_data",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            className: "login_input",
            id: "username",
            type: "name",
            placeholder: "\uC544\uC774\uB514",
            onChange: handleInputId,
            onKeyPress: handleKeyPress
          }), /*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "username",
            children: "\uC544\uC774\uB514"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            className: "login_input",
            id: "password",
            type: "password",
            placeholder: "\uBE44\uBC00\uBC88\uD638",
            onChange: handleInputPw,
            onKeyPress: handleKeyPress
          }), /*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "password",
            children: "\uBE44\uBC00\uBC88\uD638"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "login-button",
          onClick: sign,
          title: "login",
          children: "\uD68C\uC6D0\uAC00\uC785"
        })]
      })
    })]
  });
}

/* harmony default export */ var login_Signup = (Signup);
;// CONCATENATED MODULE: ./pages/LoginMain.tsx







function LoginMain() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(login_Login, {}), /*#__PURE__*/jsx_runtime_.jsx(login_Signup, {})]
  });
}

/* harmony default export */ var pages_LoginMain = (LoginMain);

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

/***/ })

};
;