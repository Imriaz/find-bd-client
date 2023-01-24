import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Header start</h3>
        <h3>Header menu start done</h3>
        <h3>Header menu complete</h3>
        <h3>Header complete</h3>
        <h3>Header done</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Edit by Tasnuba <code>src/App.tsx</code> and save to reload.
        </p>

        <p>New changes</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tempora
          porro, maiores cupiditate perferendis asperiores!
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
