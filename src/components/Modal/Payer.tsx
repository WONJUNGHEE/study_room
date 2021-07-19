import React, { useState } from "react";
import Modal from "./Modal";

const Payer = () => {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)

  const [ModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>미결제자</button>
      <Modal open={ModalOpen} close={closeModal} header="미결제자">
        <div className="input_data">
          <button onClick={closeModal}>변경</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Payer;
