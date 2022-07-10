import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../scss/InterconvertMenu.scss";
import { ReactComponent as InterconvertVerticalSvg } from "../assets/arrow-down-up.svg";

export class InterconvertMenu extends Component {
  render() {
    return (
      <div className="InterconvertMenu">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-6 col-lg-4 py-2 d-grid">
                <NavLink
                  to="country-to-alpha2"
                  className="btn bg-white border py-4"
                >
                  <p className="d-flex flex-column align-items-center gap-2 mb-0 fs-4 fw-light">
                    Country <InterconvertVerticalSvg /> Alpha-2
                  </p>
                </NavLink>
              </div>
              <div className="col-6 col-lg-4 py-2 d-grid">
                <NavLink
                  to="country-to-alpha3"
                  className="btn bg-white border py-4"
                >
                  <p className="d-flex flex-column align-items-center gap-2 mb-0 fs-4 fw-light">
                    Country <InterconvertVerticalSvg /> Alpha-3
                  </p>
                </NavLink>
              </div>
              <div className="col-6 col-lg-4 py-2 d-grid">
                <NavLink
                  to="country-to-num3"
                  className="btn bg-white border py-4"
                >
                  <p className="d-flex flex-column align-items-center gap-2 mb-0 fs-4 fw-light">
                    Country <InterconvertVerticalSvg /> Num-3
                  </p>
                </NavLink>
              </div>
              <div className="col-6 col-lg-4 py-2 d-grid">
                <NavLink
                  to="alpha2-to-alpha3"
                  className="btn bg-white border py-4"
                >
                  <p className="d-flex flex-column align-items-center gap-2 mb-0 fs-4 fw-light">
                    Alpha-2 <InterconvertVerticalSvg /> Alpha-3
                  </p>
                </NavLink>
              </div>
              <div className="col-6 col-lg-4 py-2 d-grid">
                <NavLink
                  to="alpha2-to-num3"
                  className="btn bg-white border py-4"
                >
                  <p className="d-flex flex-column align-items-center gap-2 mb-0 fs-4 fw-light">
                    Alpha-2 <InterconvertVerticalSvg /> Num-3
                  </p>
                </NavLink>
              </div>
              <div className="col-6 col-lg-4 py-2 d-grid">
                <NavLink
                  to="alpha3-to-num3"
                  className="btn bg-white border py-4"
                >
                  <p className="d-flex flex-column align-items-center gap-2 mb-0 fs-4 fw-light">
                    Alpha-3 <InterconvertVerticalSvg /> Num-3
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InterconvertMenu;
