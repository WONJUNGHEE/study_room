import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import styled from "styled-components";
function ClockContainer() {
  const timer: { current: NodeJS.Timeout | null } = useRef(null);
  const [be_time, setBe_time] = useState(9);
  const [time, setTime] = useState(moment());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(moment());
      if (
        document.getElementById(`time${moment().hour()}`) &&
        be_time !== moment().hour()
      ) {
        if (moment().hour() === 0) {
          const timecur: HTMLElement | null = document.getElementById("time24");
          if (timecur !== null) {
            timecur.style.background = "red";
          }
        } else {
          const timeb: HTMLElement | null = document.getElementById(
            `time${moment().hour()}`
          );
          if (timeb !== null) {
            timeb.style.background = "cadetblue";
          }
        }
        const settime: HTMLElement | null = document.getElementById(
          `time${be_time}`
        );
        if (settime) {
          settime.style.background = "white";
          setBe_time(moment().hour());
        }
      }
    }, 1000);
    timer.current = id;
    return () => {
      clearInterval(timer.current as NodeJS.Timeout);
    };
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
