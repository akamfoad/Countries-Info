import React, { Component } from "react";
import { Searching } from "./Searching";
import { RegionFiltering } from "./RegionFiltering";
import "./Filtering.css";

export class Filtering extends Component {
  render() {
    return (
      <div
        className={`filtering-container${
          this.props.darkMode ? "" : " light-mode"
        }`}
      >
        <Searching {...this.props} />
        <RegionFiltering {...this.props} />
      </div>
    );
  }
}
