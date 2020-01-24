import React, { Component } from "react";
import { Header } from "../Header/Header";
import { Filtering } from "../Filtering/Filtering";
import { Countries } from "../Country/Countries";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: true,
      countryFilterBy: "",
      selectedRegion: "none",
      countriesCtxData: {
        countries: [],
        regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"]
      }
    };
  }

  setCountries = async () => {
    const CTR = await fetch(
      "https://restcountries.eu/rest/v2/all?fields=flag;name;alpha3Code;capital;region;population"
    ).then(res => res.json());
    this.setState(state => (state.countriesCtxData.countries = CTR));
  };

  componentDidMount() {
    this.setCountries();
  }

  countryFilterHandler = e => {
    const searchTerm = e.target.value.trim();
    if (searchTerm.length > 0) {
      this.setState({
        countryFilterBy: searchTerm
      });
    } else {
      this.setState({
        countryFilterBy: ""
      });
    }
  };

  regionSelectionHandler = e => {
    const REGION = e.target.innerText.toLowerCase();
    this.setState({ selectedRegion: REGION });
  };

  render() {
    return (
      <div className="Home">
        <Header darkMode={this.state.darkMode} />
        <Filtering
          countryFilterBy={this.state.countryFilterBy}
          countryFilterHandler={this.countryFilterHandler}
          selectedRegion={this.state.selectedRegion}
          regionSelectionHandler={this.regionSelectionHandler}
          regions={this.state.countriesCtxData.regions}
        />
        <Countries
          isFilterByCountry={this.state.countryFilterBy === "" ? false : true}
          isFilterByRegion={this.state.selectedRegion === "none" ? false : true}
          selectedRegion={this.state.selectedRegion}
          countryFilterBy={this.state.countryFilterBy}
          list={this.state.countriesCtxData.countries}
        />
      </div>
    );
  }
}
