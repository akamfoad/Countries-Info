import React, { Component } from "react";
import "./Details.css";

export default class Details extends Component {
  render() {
    const {
      currencies,
      languages,
      flag,
      name,
      topLevelDomain,
      capital,
      region,
      subregion,
      population,
      borders,
      nativeName
    } = this.props.country;

    if (name) {
      return (
        <div
          // className={`details-container${this.props.darkMode?"":" light-mode"}`}
          className="details-container"
        >
          <button
            className={`details-back-button${
              this.props.darkMode ? "" : " light-mode"
            }`}
            onClick={this.props.hideCountryDetails}
          >
            {" "}
            &larr; Back
          </button>
          <div className="details-info">
            <img src={flag} alt={`${name}'s-falg`} />
            <div className="details-text-infos">
              <h2 className="details-country-name">{name}</h2>
              <div className="details-detail-info">
                <div className="col1">
                  <div className="details-nativeName">
                    Native Name: {nativeName}
                  </div>
                  <div className="details-population">
                    Population: {population}
                  </div>
                  <div className="details-region">Region: {region}</div>
                  <div className="details-subregion">
                    Sub Region: {subregion}
                  </div>
                  <div className="details-capital">Capital: {capital}</div>
                </div>
                <div className="col2">
                  <div className="details-topLevelDomain">
                    Top Level Domain: {topLevelDomain}
                  </div>
                  <div className="details-topLevelDomain">
                    Currencies:{" "}
                    {currencies &&
                      currencies.map((cur, index) => (
                        <span key={cur.code}>
                          {cur.name}{" "}
                          {index === currencies.length - 1 ? "" : ", "}
                        </span>
                      ))}
                  </div>
                  <div className="details-topLevelDomain">
                    Languages:{" "}
                    {languages &&
                      languages.map((lang, index) => (
                        <span key={lang.iso639_2}>
                          {lang.name}{" "}
                          {index === languages.length - 1 ? "" : ", "}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
              <div className="details-border-country">
                {/* TODO the borders have to be link */}
                BORDER:
                {borders
                  ? borders.length > 0
                    ? borders.map(br => (
                        <span
                          className={`border-button${
                            this.props.darkMode ? "" : " light-mode"
                          }`}
                          onClick={() => this.props.showCountryDetails(br)}
                          key={br}
                        >
                          {this.props.getCountryByA3C(br).name}
                        </span>
                      ))
                    : "None"
                  : "None"}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="details-container">
          <h1>No Country Selected!</h1>;
        </div>
      );
    }
  }
}
