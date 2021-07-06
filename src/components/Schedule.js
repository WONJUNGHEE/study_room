import React, { useState, useEffect } from "react";

const Schedule = () => {
  const [inputs, setInputs] = useState({ name: "", phone: "", count: "" });
  const [check, setcheck] = useState(data_init);

  function data_init() {
    const data = {
      using: false,
      name: "",
      phone: "",
      count: "",
    };
    //새로고침이후 데이터 유지하기 위해
    if (window.localStorage.getItem(10) !== null) {
      return console.log("이미 데이터가 존재 합니다.");
    }
    for (let i = 9; i < 25; i++) {
      data["time"] = `${i}`;
      window.localStorage.setItem(`${i}`, JSON.stringify(data));
    }
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const change_table = () => {
    for (let i = 9; i < 25; i++) {
      const sch_data = JSON.parse(window.localStorage.getItem(i));

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
      const sch_data = JSON.parse(window.localStorage.getItem(i));

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

  const handlechange = (e) => {
    const time_use = JSON.parse(window.localStorage.getItem(e.target.id));
    time_use.using === false
      ? (time_use.using = true)
      : (time_use.using = false);
    window.localStorage.setItem(e.target.id, JSON.stringify(time_use));
    check === 1 ? setcheck(0) : setcheck(1);
  };

  const rendering = () => {
    const result = [];
    for (let i = 9; i < 25; i++) {
      const sch_data = JSON.parse(window.localStorage.getItem(i));
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
      <div className="input_data">
        <input
          name="name"
          type="text"
          placeholder="이름"
          onChange={onChange}
          value={inputs.name}
        />
        <input
          name="phone"
          type="text"
          placeholder="전화번호"
          onChange={onChange}
          value={inputs.phone}
        />
        <input
          name="count"
          type="text"
          placeholder="인원"
          onChange={onChange}
          value={inputs.count}
        />
        <button onClick={change_table}>변경</button>
        <button onClick={schedule_delete}>삭제</button>
      </div>
    </div>
  );
};
export default Schedule;
