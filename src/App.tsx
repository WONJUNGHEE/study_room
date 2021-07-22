import React from "react";
import { Route } from "react-router-dom";
import Schedule_main from "./components/Schedule/Schedule_main";
import LoginMain from "./components/login/LoginMain";
const App: React.FC = () => {
  return (
    <div>
      <Route exact path="/" component={LoginMain} />
      <Route path="/schedule" component={Schedule_main} />
    </div>
  );
};

export default App;
