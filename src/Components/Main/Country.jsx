import React, { Component } from "react";
import "./Country.css";

export class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSvg: ""
    };
  }

  render() {
    return (
      <>
        <div className="country-container">
          <img src={this.props.flag} alt="svg" />
          <div className="country-info">
            <h4>{this.props.name}</h4>
            <div>Population: {this.props.population}</div>
            <div>Region: {this.props.region}</div>
            <div>Capital: {this.props.capital}</div>
          </div>
        </div>
      </>
    );
  }
}
