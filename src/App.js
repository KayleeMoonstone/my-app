import React from "react";
import "./App.css";

import Background from "./Background";
import SearchEngine from "./SearchEngine";
import City from "./City";
import Dailyforecast from "./Dailyforecast";
import Weeklyforecast from "./Weeklyforecast";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <div className="App">
      <div className="container">
        <Background />
        <SearchEngine />
        <div className="row">
          <div className="col-md-8">
            <City />
            <Dailyforecast />
          </div>
          <div className="col-md-4 text-right">
            <Weeklyforecast />
          </div>
        </div>
        <footer>
          <a href="">Open-source</a> code by Kabelo Molebalwa
        </footer>
      </div>
    </div>
  );
}

export default App;
