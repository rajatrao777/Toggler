import React from "react";
import ReactDOM from "react-dom";
import Background from "./Background.js";
import "./styles.css";

function App() {
  return (
    <div>
      <Background />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
