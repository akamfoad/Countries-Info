import React, { Component } from "react";
import { Searching } from "./Searching";
import { RegionFiltering } from "./RegionFiltering";
import "./Filtering.css";

export class Filtering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFiltering: false
    };
  }

  render() {
    return (
      <div className="filtering-container">
        <Searching {...this.props}/>
        <RegionFiltering {...this.props} />
      </div>
    );
  }
}
