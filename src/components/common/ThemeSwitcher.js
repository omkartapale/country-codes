import React, { Component } from "react";
import "../../scss/common/ThemeSwitcher.scss";
import { ReactComponent as DarkModeSvg } from "../../assets/moon-stars.svg";
import { ReactComponent as LightModeSvg } from "../../assets/sun.svg";
import { ReactComponent as AutoModeSvg } from "../../assets/circle-half.svg";
import { ReactComponent as CheckSvg } from "../../assets/check.svg";

export class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme:
        localStorage.getItem("theme") !== null
          ? localStorage.getItem("theme")
          : "auto",
    };

    this.switchTheme = this.switchTheme.bind(this);

    this.setTheme(this.getPreferredTheme());
  }

  componentDidMount() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        if (this.state.theme !== "light" || this.state.theme !== "dark") {
          this.setTheme(this.getPreferredTheme());
        }
      });
  }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.doSomething)
  // }

  getPreferredTheme() {
    if (this.state.theme !== null) {
      return this.state.theme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  setTheme(theme) {
    if (
      theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
    localStorage.setItem("theme", theme);
  }

  switchTheme(event) {
    const theme = event.target.getAttribute("data-bs-theme-value");
    this.setState({
      theme: theme,
    });
    this.setTheme(theme);
  }

  render() {
    return (
      <div className="ThemeSwitcher dropdown">
        <button
          id="bd-theme"
          type="button"
          className="btn rounded-circle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-offset="0,10"
          aria-label={`Toggle theme (
            ${
              this.state.theme === "dark"
                ? "Dark"
                : this.state.theme === "light"
                ? "Light"
                : "Auto"
            }
            )`}
        >
          {this.state.theme === "dark" ? (
            <DarkModeSvg width="24" height="24" />
          ) : this.state.theme === "light" ? (
            <LightModeSvg width="24" height="24" />
          ) : (
            <AutoModeSvg width="24" height="24" />
          )}
          <span className="visually-hidden-focusable" id="bd-theme-text">
            Toggle theme
          </span>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end dropdown-menu-macos mx-0 shadow w-220"
          aria-labelledby="bd-theme"
        >
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center rounded-3 ${
                this.state.theme === "light" ? "active" : ""
              }`}
              data-bs-theme-value="light"
              onClick={this.switchTheme}
            >
              <LightModeSvg className="bi me-2 opacity-50 theme-icon" /> Light
              <CheckSvg
                className={`ms-auto ${
                  this.state.theme === "light" ? "" : "d-none"
                }`}
              />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center rounded-3 ${
                this.state.theme === "dark" ? "active" : ""
              }`}
              data-bs-theme-value="dark"
              onClick={this.switchTheme}
            >
              <DarkModeSvg className="bi me-2 opacity-50 theme-icon" /> Dark
              <CheckSvg
                className={`ms-auto ${
                  this.state.theme === "dark" ? "" : "d-none"
                }`}
              />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center rounded-3 ${
                this.state.theme === "auto" ? "active" : ""
              }`}
              data-bs-theme-value="auto"
              onClick={this.switchTheme}
            >
              <AutoModeSvg className="bi me-2 opacity-50 theme-icon" /> System
              Default
              <CheckSvg
                className={`ms-auto ${
                  this.state.theme === "auto" ? "" : "d-none"
                }`}
              />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ThemeSwitcher;
