import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../containers/Home/Home";
import Detail from "../containers/Detail/Detail";

function Routers(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/detail" component={Detail} />
    </Switch>
  );
}

export default Routers;

//home, chi tiết, danh sách, blog,....
