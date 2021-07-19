import React, { useState } from "react";
import Modal from "./Modal";

function Inputmodal(props: any) {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)

  const [modalOpen, setModalOpen] = useState(false);
  const { onChange, change_table } = props;
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    change_table();
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>Change</button>
      <Modal open={modalOpen} close={closeModal} header="스케줄 관리">
        <div className="input_data">
          <input
            name="name"
            type="text"
            placeholder="이름"
            onChange={onChange}
          />
          <input
            name="phone"
            type="text"
            placeholder="전화번호"
            onChange={onChange}
          />
          <input
            name="count"
            type="text"
            placeholder="인원"
            onChange={onChange}
          />
          <button onClick={closeModal}>변경</button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default Inputmodal;
