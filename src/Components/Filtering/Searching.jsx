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
  // TODO add a method in parent @Filtering to and take it from props to handleChanges
  countryFilterHandler = e => {
    let searchTerm = e.target.value;
    if (searchTerm.trim().length < 1) {
      //if search term is empty
      this.setState({ isfilteringByCountry: false, countryFilterBy: "" });
    } else {
      this.setState({
        isfilteringByCountry: true,
        countryFilterBy: searchTerm
      });
    }
  };

  render() {
    return (
      <div className="searching-container">
        <FontAwesomeIcon size="lg" className="sc-icon" icon={faSearch} />
        <input
          type="text"
          className="filtering-country-ic"
          value={this.state.countryFilterBy}
          placeholder="search for a country..."
          onChange={this.countryFilterHandler}
        />
      </div>
    );
  }
}
