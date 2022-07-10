import React, { Component } from "react";
import Search from "../components/Search";
import CopyButton from "../components/common/CopyButton";
import { ReactComponent as InterconvertVerticalSvg } from "../assets/arrow-down-up.svg";

export class Interconversion extends Component {
  render() {
    return (
      <div className="Interconversion">
        <div className="card py-3 border-top-0">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-center">
              <Search placeholderText="Convert from Alpha-2 to Country name" />
              <button
                className="btn rounded-circle"
                title="Convert from Country name to Alpha-2"
              >
                <InterconvertVerticalSvg width="24" height="24" />
              </button>
            </div>
            <div className="row mt-4">
              <div className="col">
                <p className="mb-3 text-center">Country Name:</p>
                <p className="display-6 d-flex align-items-center justify-content-center gap-5">
                  India
                  <CopyButton copyContent="IN" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interconversion;
