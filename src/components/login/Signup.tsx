import React, { useState } from 'react';
import Modal from '../Modal/Modal';

function Signup() {
  const [ModalOpen, setModalOpen] = useState(false);

  const [inputId, setInputId] = useState<string>('');
  const [inputPw, setInputPw] = useState<string>('');

  const handleInputId = (e: any) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e: any) => {
    setInputPw(e.target.value);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const sign = () => {
    if (inputId === '' || inputPw === '') {
      alert('회원가입 정보를 입력해주세요.');
    } else if (sessionStorage.getItem(inputId)) {
      alert('이미 사용중인 아이디입니다.');
    } else {
      sessionStorage.setItem(inputId, inputPw);
      closeModal();
    }
  };
  return (
    <div className="field">
      <button onClick={openModal}>회원가입</button>
      <Modal open={ModalOpen} close={closeModal} header="회원가입">
        <div className="input_data">
          <div className="field">
            <input
              className="signinput"
              id="username"
              type="name"
              placeholder="아이디"
              onChange={handleInputId}
            />
            <label htmlFor="username">아이디</label>
          </div>
          <div className="field">
            <input
              className="signinput"
              id="password"
              type="password"
              placeholder="비밀번호"
              onChange={handleInputPw}
            />
            <label htmlFor="password">비밀번호</label>
          </div>
          <button className="login-button" onClick={sign} title="login">
            회원가입
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Signup;
