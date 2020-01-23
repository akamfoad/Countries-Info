import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/";
import "./RegionFiltering.css";

export class RegionFiltering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isfilteringByReg: false,
      selectedRegion: ""
    };
  }

  render() {
    return (
      <div className="rf-container">
        <div className="rf-select-input">
          <div className="rf-selected-region">Filter By Region</div>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <ul className="region-list">
          <li className="region-item">Africa</li>
          <li className="region-item">America</li>
          <li className="region-item">Asia</li>
          <li className="region-item">Europe</li>
          <li className="region-item">Oceania</li>
        </ul>
      </div>
    );
  }
}
