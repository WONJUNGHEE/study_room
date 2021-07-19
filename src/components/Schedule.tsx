import React, { useState, useEffect } from "react";
import Inputmodal from "./Modal/Inputmodal";
import Payer from "./Modal/Payer";

const Schedule = () => {
  interface sch {
    using: Boolean;
    name: String;
    phone: String;
    count: String;
    time?: String;
  }
  const [check, setcheck] = useState(data_init);
  const [inputs, setInputs] = useState({ name: "", phone: "", count: "" });
  function data_init() {
    const data: sch = {
      using: false,
      name: "",
      phone: "",
      count: "",
    };
    //새로고침이후 데이터 유지하기 위해
    if (window.localStorage.getItem("10") !== null) {
      return console.log("이미 데이터가 존재 합니다.");
    }
    for (let i = 9; i < 25; i++) {
      data["time"] = `${i}`;
      window.localStorage.setItem(`${i}`, JSON.stringify(data));
    }
  }
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const change_table = () => {
    for (let i = 9; i < 25; i++) {
      const a = window.localStorage.getItem(i.toString());
      let sch_data: sch;
      if (a != null) {
        sch_data = JSON.parse(a);
      } else {
        return;
      }

      if (sch_data.using === true) {
        sch_data["using"] = false;
        sch_data["name"] = inputs.name;
        sch_data["phone"] = inputs.phone;
        sch_data["count"] = inputs.count;
        window.localStorage.setItem(`${i}`, JSON.stringify(sch_data));
      }
    }
    setInputs({ name: "", phone: "", count: "" });
  };
  const schedule_delete = () => {
    for (let i = 9; i < 25; i++) {
      const a = window.localStorage.getItem(i.toString());
      let sch_data: sch;
      if (a != null) {
        sch_data = JSON.parse(a);
      } else {
        return;
      }

      if (sch_data.using === true) {
        sch_data["using"] = false;
        sch_data["name"] = "";
        sch_data["phone"] = "";
        sch_data["count"] = "";
        window.localStorage.setItem(`${i}`, JSON.stringify(sch_data));
      }
    }
    setInputs({ name: "", phone: "", count: "" });
  };

  const handlechange = (e: any) => {
    const a = window.localStorage.getItem(e.target.id);
    let time_use: sch;
    if (a != null) {
      time_use = JSON.parse(a);
    } else {
      return;
    }
    time_use.using === false
      ? (time_use.using = true)
      : (time_use.using = false);
    window.localStorage.setItem(e.target.id, JSON.stringify(time_use));
  };

  const rendering = () => {
    const result = [];
    for (let i = 9; i < 25; i++) {
      const a = window.localStorage.getItem(i.toString());
      let sch_data;
      if (a != null) {
        sch_data = JSON.parse(a);
      } else {
      }
      result.push(
        <tr key={sch_data.time}>
          <th className="check1">
            <input
              type="checkbox"
              id={sch_data.time}
              checked={sch_data.using}
              onChange={handlechange}
            />
          </th>
          <th className="time1" id={`time${sch_data.time}`}>
            {sch_data.time}
          </th>
          <th>{sch_data.name}</th>
          <th>{sch_data.phone}</th>
          <th>{sch_data.count}</th>
        </tr>
      );
    }
    return result;
  };

  useEffect(() => {
    data_init();
  }, []);
  return (
    <div className="schedule_body">
      <table>
        <thead>
          <tr>
            <th className="check">체크</th>
            <th className="time">시간</th>
            <th>이름</th>
            <th>핸드폰 번호</th>
            <th>인원</th>
          </tr>
        </thead>
        <tbody>{rendering()}</tbody>
      </table>
      <div className="change_button">
        <Inputmodal onChange={onChange} change_table={change_table} />
        <Payer />
        <button onClick={schedule_delete}>삭제</button>
      </div>
    </div>
  );
};
export default Schedule;
