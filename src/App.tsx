import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App: React.FC = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </>
);

export default App;
