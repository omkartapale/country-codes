import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export class Interconvert extends Component {
  render() {
    return (
      <div className="Interconvert container pb-2">
        <h1 className="text-center h2 pb-2">Interconvert Codes</h1>

        <Outlet />
      </div>
    );
  }
}

export default Interconvert;
