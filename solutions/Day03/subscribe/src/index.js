import ReactDOM from "react-dom";
import "./index.css";

const rootElement = document.getElementById("root");

const headerElement = (
  <header className="headerWrapper">
    <h1>SUBSCRIBE</h1>
    <h5>Sign up with your email address to receive news and updates</h5>
  </header>
);

const inputElement = (
  <main className="mainWrapper">
    <div className="inputWrapper">
      <input
        id="firstName"
        className="input"
        type="text"
        placeholder="First name"
      />
      <input
        id="lastName"
        className="input"
        type="text"
        placeholder="Last name"
      />
      <input id="email" className="input" type="text" placeholder="Email" />
    </div>
    <div className="buttonWrapper">
      <button id="submit" className="button" type="button">
        Subscribe
      </button>
    </div>
  </main>
);

const appElement = (
  <div className="rootWrapper">
    {headerElement}
    {inputElement}
  </div>
);

ReactDOM.render(appElement, rootElement);
