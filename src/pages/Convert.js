import React, { Component } from "react";
import Search from "../components/Search";
import CopyButton from "../components/common/CopyButton";

export class Convert extends Component {
  render() {
    return (
      <div className="Convert container">
        <div className="row mt-3 mt-md-4 justify-content-center">
          <div className="col-md-10">
            <div className="switches text-center">
              <h2 className="text-center mb-4">Interconvert Codes</h2>
              <ul className="list-inline text-center">
                <li className="list-inline-item">Country -> Alpha2</li>
                <li className="list-inline-item">Country -> Alpha3</li>
                <li className="list-inline-item">Country -> Num3</li>
                <li className="list-inline-item">Alpha2 -> Country</li>
                <li className="list-inline-item">Alpha2 -> Alpha3</li>
                <li className="list-inline-item">Alpha2 -> Num3</li>
                <li className="list-inline-item">Alpha3 -> Country</li>
                <li className="list-inline-item">Alpha3 -> Alpha2</li>
                <li className="list-inline-item">Alpha3 -> Num3</li>
                <li className="list-inline-item">Num3 -> Country</li>
                <li className="list-inline-item">Num3 -> Alpha2</li>
                <li className="list-inline-item">Num3 -> Alpha3</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-4 pb-3 justify-content-center">
          <div className="col-md-10">
            <div className="card px-4 pb-3 shadow-sm">
              <div className="card-body">
                <Search placeholderText="Convert from Alpha-2 to Country name"/>
                <div className="row mt-4 text-center">
                  <div className="col align-self-center">
                    <p className="mb-3">Country Name:</p>
                    <p className="display-6 d-flex align-items-center justify-content-center gap-5">
                      United States of America United States of America
                      <CopyButton copyContent="IN" />
                    </p>
                  </div>
                </div>
                <div className="row mt-4 text-center">
                  <div className="col align-self-center">
                    <p className="mb-3">Country Name:</p>
                    <p className="display-6 d-flex align-items-center justify-content-center gap-5">
                      IND
                      <CopyButton copyContent="IN" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Convert;
