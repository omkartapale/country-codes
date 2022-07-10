import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export class Interconvert extends Component {
  render() {
    return (
      <div className="Interconvert container pb-2">
        <h2 className="text-center pb-2">Interconvert Codes</h2>

        <Outlet />
      </div>
    );
  }
}

export default Interconvert;
