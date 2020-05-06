import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import About from "./containers/About";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
      {/* Finally, catch all unmatched routes */}
    <Route>
        <NotFound />
    </Route>
    </Switch>
  );
}