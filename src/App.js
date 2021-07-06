import React from "react";
import styled from "styled-components";
import Schedule from "./components/Schedule";
import Weather from "./components/Weather";
import ClockContainer from "./components/ClockContainer";

function App() {
  return (
    <div className="App">
      <Title>TOP 독서실 Study Room Schedule </Title>
      <Headtimertemp>
        <ClockContainer />
        <Weather />
      </Headtimertemp>
      <Schedule />
    </div>
  );
}

const Headtimertemp = styled.div`
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

export default App;
