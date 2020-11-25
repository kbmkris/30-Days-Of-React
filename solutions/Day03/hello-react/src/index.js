import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const header = (
  <header>
    <h1>Welcome to 30 Days of React</h1>
    <h2>Getting Started</h2>
    <h3>Javascript Library</h3>
    <p>Balamuralikrishnan Krishnan</p>
    <small>{new Date().toString()}</small>
  </header>
);

const main = (
  <main>
    <p>Prerequisite to get started react.js</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
    </ul>
  </main>
);

const footer = (
  <footer>
    <p>Copyright @2020</p>
  </footer>
);

const App = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(App, rootElement);
