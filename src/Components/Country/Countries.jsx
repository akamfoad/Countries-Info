import React, { Component } from "react";
import { Country } from "./Country";
import "./Countries.css";

export class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.setState({ list: this.props.list });
  }

  render() {
    return (
      <div className="countries-container">
        {this.state.list
          ? this.state.list.map(country => {
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
