import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuctionDashboard from "./pages/AuctionDashboard";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={AuctionDashboard} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
