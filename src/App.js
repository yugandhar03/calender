import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import TodoList from "./pages/TodoList";
import Scheduler from "./pages/Scheduler";
import Messages from "./pages/Messages";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Events" component={Events} />
            <Route path="/TodoList" component={TodoList} />
            <Route path="/Scheduler" component={Scheduler} />
            <Route path="/Messages" component={Messages} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
