import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <a className="header-title" href="/">
          Where in the World?
        </a>

        <button className="header-darkMode-button">
          <FontAwesomeIcon
            className="header-darkMode-icon"
            icon={this.props.darkMode ? faSun : faMoon}
          />
          {this.props.darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    );
  }
}
