import React, { Component } from "react";
import { Header } from "./Components/Header/Header";
import { Filtering } from "./Components/Filtering/Filtering";
import { Countries } from "./Components/Country/Countries";
import CountriesContext from "./Components/Contexts/CountriesContext";
import Data from "./Data";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: true,
      countriesCtxData: {
        countries: [],
        setCountries: this.setCountries
      },
      regions: ["Africa", "America", "Asia", "Europe", "Oceania"]
    };
  }

  setCountries = countries => {
    this.setState(state => (state.countriesCtxData.countries = countries));
  };

  componentDidMount() {
    //FIXME calling from internal data  
    //TODO fetch data here and set it to the state
    this.setCountries(Data);
  }

  render() {
    return (
      <div className="App">
        <Header darkMode={this.state.darkMode} />
        <CountriesContext.Provider value={this.state.countriesCtxData}>
          <Filtering regions={this.state.regions} />
          <Countries list={Data} />
        </CountriesContext.Provider>
      </div>
    );
  }
}

export default App;
