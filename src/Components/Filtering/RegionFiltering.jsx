import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/";
import "./RegionFiltering.css";

export class RegionFiltering extends Component {
  toggleSelectionHandler = () => {
    document.querySelector(".region-list").classList.toggle("open");
  };

  render() {
    return (
      <div
        className={`rf-container${this.props.darkMode ? "" : " light-mode"}`}
        onClick={this.toggleSelectionHandler}
      >
        <div
          className={`rf-select-input${
            this.props.darkMode ? "" : " light-mode"
          }`}
        >
          <div className="rf-selected-region">
            Filter By{" "}
            {this.props.selectedRegion.toLowerCase() === "none"
              ? "Region"
              : this.props.selectedRegion}
          </div>
          <FontAwesomeIcon className="rf-select-icon" icon={faAngleDown} />
        </div>
        <ul
          className={`region-list${this.props.darkMode ? "" : " light-mode"}`}
        >
          {["None", ...this.props.regions].map(reg => {
            return (
              <li
                key={reg}
                className="region-item"
                onClick={this.props.regionSelectionHandler}
              >
                {reg}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
