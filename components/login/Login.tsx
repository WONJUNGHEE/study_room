import React, { useState, useEffect } from "react";
import Router from "next/router";
import { sch } from "../../interfaces/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { actions } from "../../reducers/loginReducer";

function Login(): JSX.Element {
  const { id } = useSelector((state: RootState) => state.loginReducer);
  const [inputId, setInputId] = useState<string>("");
  const [inputPw, setInputPw] = useState<string>("");

  const dispatch = useDispatch();

  function data_init() {
    // 새로고침이후 데이터 유지하기 위해
    if (window.localStorage.getItem(`${inputId}`) !== null) {
      return;
    }
    let init = [];
    for (let i = 9; i < 25; i++) {
      const data: sch = {
        using: false,
        name: "",
        phone: "",
        count: "",
      };
      let initdata = data;
      initdata.time = `${i}`;
      init.push(initdata);
    }
    window.localStorage.setItem(`${inputId}`, JSON.stringify(init));
  }
  const handleInputId = (e: any) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e: any) => {
    setInputPw(e.target.value);
  };
  const onClickLogin = () => {
    if (sessionStorage.getItem(inputId)) {
      if (sessionStorage.getItem(inputId) === inputPw) {
        alert("로그인 성공");
        dispatch(actions.loginStart({ id: inputId }));
        data_init();
        Router.push("/Schedule");
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } else {
      alert("없는 아이디입니다.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  return (
    <div>
      <h2>TOP 독서실 로그인</h2>
      <form className="login-form">
        <div className="field">
          <input
            className="login_input"
            type="text"
            name="input_id"
            value={inputId}
            placeholder="아이디"
            onChange={handleInputId}
            onKeyPress={handleKeyPress}
          />
          <label htmlFor="input_id">아이디를 입력하세요.</label>
        </div>
        <div className="field">
          <input
            className="login_input"
            type="password"
            name="input_pw"
            value={inputPw}
            placeholder="비밀번호"
            onChange={handleInputPw}
            onKeyPress={handleKeyPress}
          />
          <label htmlFor="input_pw">비밀번호를 입력하세요.</label>
        </div>
      </form>
      <div className="field">
        <button className="login-button" onClick={onClickLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
