import React from "react";
import {
  Switch,
  Link,
  Route,
  withRouter,
  HashRouter as Router,
} from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import "./App.css";
import About from "./About";

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/users">Users</Link>
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users" component={Users} />
        </Switch>
        <LocationDisplay />
      </div>
    </Router>
  );
}

export default App;
