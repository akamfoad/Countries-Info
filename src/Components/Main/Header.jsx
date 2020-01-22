import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <a className="header-title" href="/">
          Where in the World?
        </a>
        <a href="/" className="header-darkMode-button">
          <FontAwesomeIcon className="header-darkMode-icon" icon={faMoon} />
          <span className="header-darkMode-text">
            {this.props.darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </a>
      </div>
    );
  }
}
