import React from "react";
import "./SearchEngine.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Searchbar() {
  return (
    <div className="Searchbar">
      <form id="searchBar">
        <button type="submit" id="searchButton">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-location" />
        </button>
        <input
          id="search"
          type="text"
          autoComplete="off"
          placeholder="Search City"
        />
        <button type="submit" id="homeButton">
          <FontAwesomeIcon icon="fa-solid fa-house" />
        </button>
      </form>
    </div>
  );
}
