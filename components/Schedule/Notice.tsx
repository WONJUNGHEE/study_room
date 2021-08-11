import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Notice = () => {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)

  const [ModalOpen, setModalOpen] = useState<boolean>(false);
  const [inputnotice, setInputnotice] = useState<string>("");

  const [noticelist, setNoticelist] = useState<string[]>(() => {
    if (typeof localStorage !== "undefined") {
      const init_list = localStorage.getItem("notice");
      return init_list !== null ? JSON.parse(init_list) : [];
    } else {
      return [];
    }
  });
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setInputnotice("");
  };
  const inputchange = (e: any) => {
    setInputnotice(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      list_add();
    }
  };
  const list_add = () => {
    if (inputnotice !== "") {
      if (noticelist !== null) {
        setNoticelist([...noticelist, inputnotice]);
        localStorage.setItem(
          "notice",
          JSON.stringify([...noticelist, inputnotice])
        );
      } else {
        setNoticelist([inputnotice]);
        localStorage.setItem("notice", JSON.stringify([inputnotice]));
      }
      setInputnotice("");
    }
  };
  const delete_button = (e: any) => {
    noticelist.splice(e.target.value, 1);
    setNoticelist([...noticelist]);
    localStorage.setItem("notice", JSON.stringify(noticelist));
  };
  const listrendering = () => {
    const result: any = [];
    const list: any = null;
    if (typeof localStorage !== "undefined") {
      const list: any = localStorage.getItem("notice");
    } else {
      const list: any = null;
    }
    let list_data;
    if (list !== null) {
      list_data = JSON.parse(list);
    }
    for (const index in list_data) {
      if (Object.prototype.hasOwnProperty.call(list_data, index)) {
        const data = list_data[index];
        result.push(
          <div key={index}>
            {data}{" "}
            <button
              className="notice_btn"
              value={index}
              onClick={delete_button}
            >
              X
            </button>
          </div>
        );
      }
    }

    return result;
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>전달 사항</button>
      <Modal open={ModalOpen} close={closeModal} header="전달 사항">
        <div className="input_data">
          {listrendering()}
          <input
            type="text"
            name="input_notice"
            value={inputnotice}
            placeholder="전달 사항"
            onChange={inputchange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={list_add}>추가</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Notice;
