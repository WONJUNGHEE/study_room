import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [inputId, setInputId] = useState<string>("");
  const [inputPw, setInputPw] = useState<string>("");
  const history = useHistory();
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
        history.push("/schedule");
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } else {
      alert("없는 아이디입니다.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form className="login-form">
        <div className="field">
          <input
            className="login_input"
            type="text"
            name="input_id"
            value={inputId}
            placeholder="아이디"
            onChange={handleInputId}
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
          />
          <label htmlFor="input_pw">비밀번호를 입력하세요.</label>

          <button onClick={onClickLogin}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
