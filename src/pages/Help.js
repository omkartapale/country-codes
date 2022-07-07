import React, { Component } from "react";
import packageJson from "../../package.json";
import "../scss/Help.scss";
import { ReactComponent as GithubSvg } from "../assets/github.svg";
import { ReactComponent as ContributeSvg } from "../assets/git.svg";
import { ReactComponent as DonateSvg } from "../assets/coin.svg";
import { ReactComponent as RaiseIssueSvg } from "../assets/incognito.svg";

export class Help extends Component {
  render() {
    return (
      <div className="Help container">
        <div className="row mt-3 mt-md-4 justify-content-center">
          <div className="col-md-10">
            <div className="card px-4 pt-4 mb-3 shadow-sm">
              <div className="card-body">
                <h2 className="text-center pb-4 text-uppercase">Help</h2>
                <p>
                  <b>Contry Codes Lookup</b> is a open source application
                  licensed under{" "}
                  <a
                    href="https://github.com/omkartapale/iso3166-lookup/blob/main/LICENSE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MIT license
                  </a>
                  {". "}
                  It is developed to provide ease to search, lookup and
                  interconvert country codes with ISO 3166-1:2020 standard. The
                  supported country code types are <code>Alpha-2</code>,{" "}
                  <code>Alpha-3</code> and <code>Num-3</code>. You can search
                  with Country name, or lookup for codes throughout database and
                  the same type copy results into your clipboard enabling you to
                  paste it anywhere you want.
                </p>
                <p className="fw-bold text-center pt-2">
                  Open Source dependencies:
                </p>
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      React
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://nodejs.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Nodejs
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.npmjs.com/package/iso3166-lookup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      iso3166-lookup
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.npmjs.com/package/copy-to-clipboard"
                      target="_blank"
                      rel="noreferrer"
                    >
                      copy-to-clipboard
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://getbootstrap.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bootstrap
                    </a>
                  </li>
                  <li>and others...</li>
                </ul>
              </div>
            </div>
            <div className="help-footer text-center mb-3">
              <p className="copyright mb-0">
                Copyright &copy; 2022 Omkar Tapale
              </p>
              <p className="footer-app-title fw-bold mb-0">
                Country Codes Lookup
              </p>
              <p className="version">Version: v{packageJson.version}</p>
              <ul className="d-flex align-items-center justify-content-center gap-4">
                <li className="d-flex gap-2 align-items-center">
                  <a
                    href="https://github.com/omkartapale"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubSvg /> Github
                  </a>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <a
                    href="https://github.com/omkartapale"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ContributeSvg /> Contribute
                  </a>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <a
                    href="https://github.com/sponsors/omkartapale"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <DonateSvg /> Donate
                  </a>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <a
                    href="https://github.com/omkartapale/country-codes/issues/new/choose"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RaiseIssueSvg /> Raise an Issue
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Help;
