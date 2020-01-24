import React, { Component } from "react";
import { Country } from "./Country";
import "./Countries.css";

export class Countries extends Component {
  render() {
    let COUNTRIES;

    if (this.props.isFilterByRegion) {
      COUNTRIES = this.props.list.filter(
        country => country.region.toLowerCase() === this.props.selectedRegion
      );
    } else {
      COUNTRIES = this.props.list;
    }

    if (this.props.isFilterByCountry) {
      COUNTRIES = COUNTRIES.filter(country =>
        country.name
          .toLowerCase()
          .includes(this.props.countryFilterBy.toLowerCase())
      );
    }

    return (
      <div className="countries-container">
        {COUNTRIES
          ? COUNTRIES.map(country => {
              return (
                <Country
                  key={country.alpha3Code}
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              );
            })
          : "No Country"}
      </div>
    );
  }
}
