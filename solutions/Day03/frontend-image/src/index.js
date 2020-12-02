import ReactDOM from "react-dom";
import "./index.css";

const header = (
  <header className="headerWrapper">
    <h1>Front end technologies</h1>
  </header>
);

const main = (
  <main>
    <div className="imageWrapper">
      <scan className="image">
        <img
          src="https://img.icons8.com/color/480/000000/html-5.png"
          alt="HTML5"
        />
      </scan>
      <scan className="image">
        <img
          src="https://img.icons8.com/color/480/000000/css3.png"
          alt="CSS3"
        />
      </scan>
      <scan className="image">
        <img
          src="https://img.icons8.com/color/480/000000/javascript-logo-1.png"
          alt="Javascript"
        />
      </scan>
      <scan className="image">
        <img
          src="https://img.icons8.com/color/480/000000/react-native.png"
          alt="reactJS"
        />
      </scan>
    </div>
  </main>
);

const rootElement = document.getElementById("root");

const app = (
  <div className="appContainer">
    {header} {main}
  </div>
);

ReactDOM.render(app, rootElement);
