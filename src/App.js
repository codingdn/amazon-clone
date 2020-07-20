import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from './Login';

//following Clever Programmer tutorial https://www.youtube.com/watch?v=1_IYL9ZMR_Y
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

        {/**localhost.com/ */}
        {/**localhost.com/checkout */}
        {/**localhost.com/login */}
      </div>
    </Router>
  );
}

export default App;
