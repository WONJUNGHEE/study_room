import React, { useState } from "react";
import Inputmodal from "./Inputmodal";
import Notice from "./Notice";
import { sch } from "../../interfaces/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { actions } from "../../reducers/loginReducer";
import Router from "next/router";

const Schedule = () => {
  const [inputs, setInputs] = useState({ name: "", phone: "", count: "" });
  const [check, setCheck] = useState<boolean>(true);
  const { id } = useSelector((state: RootState) => state.loginReducer);
  const dispatch = useDispatch();
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const change_table = () => {
    const load_data = window.localStorage.getItem(`${id}`);
    let sch_data;
    if (load_data != null) {
      sch_data = JSON.parse(load_data);
    } else {
      return;
    }
    for (let i = 0; i < 16; i++) {
      if (sch_data[i].using === true) {
        sch_data[i].using = false;
        sch_data[i].name = inputs.name;
        sch_data[i].phone = inputs.phone;
        sch_data[i].count = inputs.count;
      }
    }
    window.localStorage.setItem(`${id}`, JSON.stringify(sch_data));
    setInputs({ name: "", phone: "", count: "" });
  };
  const schedule_delete = () => {
    if (typeof window !== "undefined") {
      const load_data = window.localStorage.getItem(`${id}`);
      let sch_data;
      if (load_data != null) {
        sch_data = JSON.parse(load_data);
      } else {
        return;
      }
      for (let i = 0; i < 16; i++) {
        if (sch_data[i].using === true) {
          sch_data[i].using = false;
          sch_data[i].name = "";
          sch_data[i].phone = "";
          sch_data[i].count = "";
        }
      }
      window.localStorage.setItem(`${id}`, JSON.stringify(sch_data));
      setInputs({ name: "", phone: "", count: "" });
    }
  };

  const handlechange = (e: any) => {
    const a = window.localStorage.getItem(`${id}`);

    let time_use;
    if (a !== null) {
      time_use = JSON.parse(a);
    } else {
      return;
    }

    time_use[e.target.id - 9].using === false
      ? (time_use[e.target.id - 9].using = true)
      : (time_use[e.target.id - 9].using = false);
    if (check) {
      setCheck(false);
    } else {
      setCheck(true);
    }
    window.localStorage.setItem(`${id}`, JSON.stringify(time_use));
  };

  const rendering = () => {
    const result = [];
    if (typeof window !== "undefined") {
      const load_data = window.localStorage.getItem(`${id}`);
      let sch_data;
      if (load_data != null) {
        sch_data = JSON.parse(load_data);
      }
      for (let i = 0; i < 16; i++) {
        result.push(
          <tr key={sch_data[i].time}>
            <th className="check1">
              <input
                type="checkbox"
                id={sch_data[i].time}
                checked={sch_data[i].using}
                onChange={handlechange}
              />
            </th>
            <th className="time1" id={`time${sch_data[i].time}`}>
              {sch_data[i].time}
            </th>
            <th>{sch_data[i].name}</th>
            <th>{sch_data[i].phone}</th>
            <th>{sch_data[i].count}</th>
          </tr>
        );
      }
    }
    return result;
  };
  const logout = () => {
    Router.push("/LoginMain");
  };

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
        <Notice />
        <button onClick={schedule_delete}>삭제</button>
        <button onClick={logout}>로그아웃</button>
      </div>
    </div>
  );
};
export default Schedule;
