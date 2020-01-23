import React, { Component } from "react";
import { Header } from "./Components/Main/Header";
import { Filtering } from "./Components/Main/Filtering/Filtering";
import { Countries } from "./Components/Main/Countries";
import Data from "./Data";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: true,
      regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"]
    };
  }

  render() {
    return (
      <div className="App">
        <Header darkMode={this.state.darkMode} />
        <Filtering regions={this.state.regions} filter={this.filter} />
        <Countries list={Data} />
      </div>
    );
  }
}

export default App;
