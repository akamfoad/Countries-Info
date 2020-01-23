import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

import "./Searching.css";

export class Searching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isfilteringByCountry: false,
      countryFilterBy: ""
    };
  }

  countryFilterHandler = e => {
    const filterText = e.target.value;
    if (filterText.length > 0) {
      this.setState({ filtering: true, filterByCont: filterText });
      this.props.filter(filterText);
    } else if (this.state.filtering) {
      this.setState({ filtering: false, filterByCont: "" });
    }
  };

  render() {
    return (
      <div className="searching-container">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          className="filtering-country-ic"
          value={this.state.filterByCont}
          placeholder="search for a country..."
          onChange={this.countryFilterHandler}
        />
      </div>
    );
  }
}
