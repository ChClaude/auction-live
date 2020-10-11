import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
