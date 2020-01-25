import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import "./Searching.css";

export class Searching extends Component {
  render() {
    return (
      <div
        className={`searching-container${
          this.props.darkMode ? "" : " light-mode"
        }`}
      >
        <FontAwesomeIcon size="lg" className="sc-icon" icon={faSearch} />
        <input
          type="text"
          className="filtering-country-ic"
          value={this.props.countryFilterBy}
          placeholder="search for a country..."
          onChange={this.props.countryFilterHandler}
        />
      </div>
    );
  }
}
