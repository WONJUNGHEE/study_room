import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import styled from "styled-components";
function ClockContainer() {
  let timer = useRef(1);
  const [be_time, setBe_time] = useState(0);
  const [time, setTime] = useState(moment());
  useEffect(() => {
    timer.current = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  useEffect(() => {
    if (
      document.getElementById(`time${moment().hour()}`) &&
      be_time !== moment().hour()
    ) {
      document.getElementById(`time${moment().hour()}`).style.background =
        "red";
      if (document.getElementById(`time${be_time}`)) {
        document.getElementById(`time${be_time}`).style.background = "blue";
        setBe_time(moment().hour());
      }
    }
  }, [be_time]);
  return (
    <TimerArea>
      <Area>{time.format("YYYY 년 MM 월 DD 일")}</Area>
      <Area>{time.format("HH시 mm분 ss초")}</Area>
    </TimerArea>
  );
}

const TimerArea = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Area = styled.div`
  width: 140px;
  margin-right: 10px;
`;
export default ClockContainer;
