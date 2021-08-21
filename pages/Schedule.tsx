import React from "react";
import styled from "styled-components";
import Schedule from "../components/Schedule/Schedule";
import Weather from "../components/Schedule/Weather";
import ClockContainer from "../components/Schedule/ClockContainer";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

function Schedule_main() {
  const { id } = useSelector((state: RootState) => state.loginReducer);
  return (
    <div className="App">
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <Title>TOP 독서실 Study Room Schedule </Title>
      <Welcome> 📔 {id} 님 반갑습니다. 📔</Welcome>
      <HeadTimerTemp>
        <ClockContainer />
        <Weather />
      </HeadTimerTemp>
      <Schedule />
    </div>
  );
}
const Welcome = styled.div`
  color: #999;
  margin-bottom: 10px;
`;
const HeadTimerTemp = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%
  font-size: 15px;
  margin-right: 30px;
  margin-left: 30px;
`;
const Title = styled.h2`
  text-align: center;
  margin-top: 50px;
`;

export default Schedule_main;
