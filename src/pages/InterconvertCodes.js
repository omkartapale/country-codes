import React, { Component } from "react";
import "../scss/InterconvertCodes.scss";
import Interconversion from "../components/Interconversion";
import InterconvertNavTabs from "../components/InterconvertNavTabs";

export class InterconvertCodes extends Component {
  render() {
    return (
      <div className="InterconvertCodes">
        <div className="row justify-content-center">
          <div className="col-md-10 py-2">
            <div className="layout shadow-sm">
              <InterconvertNavTabs />
              <Interconversion />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InterconvertCodes;
