import React, { Component } from "react";
import { Header } from "../Header/Header";
import { Filtering } from "../Filtering/Filtering";
import { Countries } from "../Country/Countries";
import Details from "./Details";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: true,
      page: "BROWSING",
      selectedCountryA3C: "",
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
      "https://restcountries.eu/rest/v2/all?fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;alpha3Code"
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

  showCountryDetails = a3c => {
    const FILTPANE = document.querySelector(".filtering-container");
    const COUNTRIESPANE = document.querySelector(".countries-container");
    const DETAILSPANE = document.querySelector(".details-container");

    DETAILSPANE.classList.add("open");
    if (!this.state.darkMode) {
      DETAILSPANE.classList.add("light-mode");
    }

    if (!FILTPANE.classList.contains("hide")) {
      FILTPANE.classList.add("hide");
    }
    if (!COUNTRIESPANE.classList.contains("hide")) {
      COUNTRIESPANE.classList.add("hide");
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    this.setState({ page: "DETAILS", selectedCountryA3C: a3c });
  };

  hideCountryDetails = () => {
    const FILTPANE = document.querySelector(".filtering-container");
    const COUNTRIESPANE = document.querySelector(".countries-container");
    const DETAILSPANE = document.querySelector(".details-container");
    DETAILSPANE.classList.remove("open");
    FILTPANE.classList.remove("hide");
    COUNTRIESPANE.classList.remove("hide");
    this.setState({ page: "BROWSING", selectedCountryA3C: "" });
  };

  getCountryByA3C = a3c => {
    return this.state.countriesCtxData.countries.find(
      c => c.alpha3Code === a3c
    );
  };

  getSelectedCountry = () => {
    // TODO i'll uncomment it when implemented Details
    if (this.state.selectedCountryA3C === "") {
      return {};
    } else {
      return this.state.countriesCtxData.countries.find(
        e => e.alpha3Code === this.state.selectedCountryA3C
      );
    }
  };

  toggleDarkMode = () => {
    if (!this.state.darkMode) {
      const LMEs = document.querySelectorAll(".light-mode");
      LMEs.forEach(e => e.classList.remove("light-mode"));
    }

    if (this.state.selectedCountryA3C !== "") {
      const detailContainer = document.querySelector(".details-container");
      detailContainer.classList.remove("open");
    }

    this.setState({ darkMode: !this.state.darkMode });
  };

  render() {
    return (
      <div className="Home">
        <Header
          toggleDarkMode={this.toggleDarkMode}
          darkMode={this.state.darkMode}
        />
        <Filtering
          darkMode={this.state.darkMode}
          countryFilterBy={this.state.countryFilterBy}
          countryFilterHandler={this.countryFilterHandler}
          selectedRegion={this.state.selectedRegion}
          regionSelectionHandler={this.regionSelectionHandler}
          regions={this.state.countriesCtxData.regions}
        />
        <Countries
          darkMode={this.state.darkMode}
          showCountryDetails={this.showCountryDetails}
          isFilterByCountry={this.state.countryFilterBy === "" ? false : true}
          isFilterByRegion={this.state.selectedRegion === "none" ? false : true}
          selectedRegion={this.state.selectedRegion}
          countryFilterBy={this.state.countryFilterBy}
          list={this.state.countriesCtxData.countries}
        />
        <Details
          darkMode={this.state.darkMode}
          showCountryDetails={this.showCountryDetails}
          getCountryByA3C={this.getCountryByA3C}
          country={this.getSelectedCountry()}
          hideCountryDetails={this.hideCountryDetails}
        />
      </div>
    );
  }
}
