import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4 text-right"></div>
        </div>
        <footer>
          <a
            href="https://github.com/KayleeMoonstone/my-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          code by Kabelo Molebalwa
        </footer>
      </div>
    </div>
  );
}

export default App;
