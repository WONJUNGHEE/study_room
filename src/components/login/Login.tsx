import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [inputId, setInputId] = useState<string>("");
  const [inputPw, setInputPw] = useState<string>("");

  const handleInputId = (e: any) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e: any) => {
    setInputPw(e.target.value);
  };
  const onClickLogin = () => {
    console.log("click login");
  };

  useEffect(() => {
    axios
      .get("/user_inform/login")
      .then((res) => console.log(res))
      .catch();
  }, []);

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="input_id">ID : </label>
        <input
          type="text"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
        />
        <label htmlFor="input_pw">PW : </label>
        <input
          type="text"
          name="input_pw"
          value={inputPw}
          onChange={handleInputPw}
        />
        <button onClick={onClickLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
