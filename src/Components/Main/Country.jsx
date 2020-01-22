import React, { Component } from "react";
import Data from "../../Data";
import "./Country.css";

export class Country extends Component {
  render() {
    return (
      <>
        <div className="country-container">
          <img src={Data.flag} alt="svg" />
          <div className="country-info">
            <h4> {Data.name}</h4>
            <div>Population: {Data.population}</div>
            <div>Region: {Data.region}</div>
            <div>Capital: {Data.capital}</div>
          </div>
        </div>
      </>
    );
  }
}
