import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as InterconvertSvg } from "../assets/arrow-left-right.svg";

export class InterconvertNavTabs extends Component {
  static propTypes = {
    conversionType: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="InterconvertNavTabs">
        <nav className="nav nav-tabs nav-justified">
          {this.props.conversionType === "a2toc" ? (
            <NavLink to="/interconvert/alpha2-to-country" className="nav-link">
              Alpha-2 <InterconvertSvg /> Country
            </NavLink>
          ) : (
            <NavLink to="/interconvert/country-to-alpha2" className="nav-link">
              Country <InterconvertSvg /> Alpha-2
            </NavLink>
          )}
          {this.props.conversionType === "a3toc" ? (
            <NavLink to="/interconvert/alpha3-to-country" className="nav-link">
              Alpha-3 <InterconvertSvg /> Country
            </NavLink>
          ) : (
            <NavLink to="/interconvert/country-to-alpha3" className="nav-link">
              Country <InterconvertSvg /> Alpha-3
            </NavLink>
          )}
          {this.props.conversionType === "n3toc" ? (
            <NavLink to="/interconvert/num3-to-country" className="nav-link">
              Num-3 <InterconvertSvg /> Country
            </NavLink>
          ) : (
            <NavLink to="/interconvert/country-to-num3" className="nav-link">
              Country <InterconvertSvg /> Num-3
            </NavLink>
          )}
          {this.props.conversionType === "a3toa2" ? (
            <NavLink to="/interconvert/alpha3-to-alpha2" className="nav-link">
              Alpha-3 <InterconvertSvg /> Alpha-2
            </NavLink>
          ) : (
            <NavLink to="/interconvert/alpha2-to-alpha3" className="nav-link">
              Alpha-2 <InterconvertSvg /> Alpha-3
            </NavLink>
          )}
          {this.props.conversionType === "n3toa2" ? (
            <NavLink to="/interconvert/num3-to-alpha2" className="nav-link">
              Num-2 <InterconvertSvg /> Alpha-2
            </NavLink>
          ) : (
            <NavLink to="/interconvert/alpha2-to-num3" className="nav-link">
              Alpha-2 <InterconvertSvg /> Num-3
            </NavLink>
          )}
          {this.props.conversionType === "n3toa3" ? (
            <NavLink to="/interconvert/num3-to-alpha3" className="nav-link">
              Num-3 <InterconvertSvg /> Alpha-3
            </NavLink>
          ) : (
            <NavLink to="/interconvert/alpha3-to-num3" className="nav-link">
              Alpha-3 <InterconvertSvg /> Num-3
            </NavLink>
          )}
        </nav>
      </div>
    );
  }
}

export default InterconvertNavTabs;
