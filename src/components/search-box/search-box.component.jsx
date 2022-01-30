import React from "react";

import "./search-box.styles.css";

export const SearchBox = (props) => (
  <input
    className="search-box"
    type="search"
    placeholder="Search Monsters"
    onChange={props.onSearchChange}
  />
);
