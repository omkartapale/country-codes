import React, { Component } from "react";

export class NotFound extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-10 py-2">
            <h1 className="display-1 mt-5">404</h1>
            <h2 className="mb-5">Page Not Found!</h2>
            <p>
              The page you are looking for does not exist. How you got here is a
              mystery.
              <br />
              But you can click the Home button to go back to the homepage.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
