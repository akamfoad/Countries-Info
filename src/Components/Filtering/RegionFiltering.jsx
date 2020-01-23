import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/";
import "./RegionFiltering.css";

export class RegionFiltering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isfilteringByReg: false,
      selectedRegion: "none"
    };
  }

  regionSelectionHandler = e => {
    const selectedRegion = e.target.innerText;
    if (selectedRegion.toLowerCase() === "none") {
      //if search term is empty
      this.setState({ isfilteringByReg: false, selectedRegion: "none" });
    } else {
      this.setState({
        isfilteringByReg: true,
        selectedRegion: selectedRegion
      });
    }
  };

  toggleSelectionHandler = e => {
    document.querySelector(".region-list").classList.toggle("open");
    e.stopPropagation();
  };

  render() {
    return (
      <div className="rf-container" onClick={this.toggleSelectionHandler}>
        <div className="rf-select-input">
          <div className="rf-selected-region">
            Filter By{" "}
            {this.state.selectedRegion.toLowerCase() === "none"
              ? "Region"
              : this.state.selectedRegion}
          </div>
          <FontAwesomeIcon className="rf-select-icon" icon={faAngleDown} />
        </div>
        <ul className="region-list">
          {["None", ...this.props.regions].map(reg => {
            return (
              <li
                key={reg}
                className="region-item"
                onClick={this.regionSelectionHandler}
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
