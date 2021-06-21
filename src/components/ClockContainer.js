import React, { useState, useEffect ,useRef} from 'react';
import moment from 'moment';
import styled from "styled-components";
function ClockContainer() {
  let timer =useRef(1);
  const [time, setTime] = useState(moment());
  useEffect(() => {
    timer.current = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <TimerArea>
      <Area>{time.format('YYYY년 MM월 DD일')}</Area>
      <Area> {time.format('HH시 mm분 ss초')}</Area>
    </TimerArea>
  );
}

const TimerArea = styled.div
`
  display : flex;
  justify-content:space-around;
`;
const Area = styled.div`width:110px; padding-right:10px`;
export default ClockContainer;