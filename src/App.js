import React, {Component} from "react";
import { Header } from "./Components/Main/Header";
import { Country } from "./Components/Main/Country";
import "./App.css";

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      darkMode: true
    };
  }

  render(){
    return (
      <div className="App">
        <Header darkMode={this.state.darkMode} />
        <Country darkMode={this.state.darkMode} />
      </div>
    );
  }
}

export default App;
