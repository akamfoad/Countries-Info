import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
export class Header extends Component {
  render() {
    return (
      <div
        className={`header-container${
          this.props.darkMode ? "" : " light-mode"
        }`}
      >
        <a
          className={`header-title${this.props.darkMode ? "" : " light-mode"}`}
          href="/"
        >
          Where in the World?
        </a>

        <button
          className={`header-mode-button${
            this.props.darkMode ? "" : " light-mode"
          }`}
          onClick={this.props.toggleDarkMode}
        >
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
