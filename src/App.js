import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="App">
      {open ? (
        <Users />
      ) : (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" data-testid="image" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={handleClick}>Fetch</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      )}
    </div>
  );
}

export default App;
