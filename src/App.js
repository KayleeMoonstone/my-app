import React from "react";
import "./App.css";

import Background from "./Background";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Background />
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4 text-right"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
