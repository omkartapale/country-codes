import PropTypes from "prop-types";
import React, { Component } from "react";
import "../scss/InterconvertCodes.scss";
import Interconversion from "../components/Interconversion";
import InterconvertNavTabs from "../components/InterconvertNavTabs";

export class InterconvertCodes extends Component {
  static propTypes = {
    conversionType: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      term: undefined,
      convertedTerm: undefined,
    };
  }

  render() {
    return (
      <div className="InterconvertCodes">
        <div className="row justify-content-center">
          <div className="col-md-10 py-2">
            <div className="layout shadow-sm">
              <InterconvertNavTabs conversionType={this.props.conversionType} />
              <Interconversion />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InterconvertCodes;
