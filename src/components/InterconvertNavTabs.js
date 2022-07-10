import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as InterconvertSvg } from "../assets/arrow-left-right.svg";

export class InterconvertNavTabs extends Component {
  render() {
    // const pathname = window.location.pathname;
    // todo check pathname for current route and display replacement tabs for existing one
    // if route is Alpha2 to Country then replace Country to Alpha2 and show active
    return (
      <div className="InterconvertNavTabs">
        <nav className="nav nav-tabs nav-justified">
          <NavLink to="/interconvert/country-to-alpha2" className="nav-link">
            Country <InterconvertSvg /> Alpha-2
          </NavLink>
          <NavLink to="/interconvert/country-to-alpha3" className="nav-link">
            Country <InterconvertSvg /> Alpha-3
          </NavLink>
          <NavLink to="/interconvert/country-to-num3" className="nav-link">
            Country <InterconvertSvg /> Num-3
          </NavLink>
          <NavLink to="/interconvert/alpha2-to-alpha3" className="nav-link">
            Alpha-2 <InterconvertSvg /> Alpha-3
          </NavLink>
          <NavLink to="/interconvert/alpha2-to-num3" className="nav-link">
            Alpha-2 <InterconvertSvg /> Num-3
          </NavLink>
          <NavLink to="/interconvert/alpha3-to-num3" className="nav-link">
            Alpha-3 <InterconvertSvg /> Num-3
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default InterconvertNavTabs;
