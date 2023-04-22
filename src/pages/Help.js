import React, { Component } from "react";
import packageJson from "../../package.json";
import "../scss/Help.scss";
import { ReactComponent as HelpSvg } from "../assets/question.svg";
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
            <div className="card shadow-sm mb-3">
              <div className="card-header px-4">
                <h2 className="card-title py-1 m-0 d-flex align-items-center justify-content-between">
                  Help <HelpSvg width="1em" height="1em" />
                </h2>
              </div>
              <div className="card-body px-4 pt-4">
                <p>
                  <b>Country Codes Lookup</b> is an Open-Source application
                  licensed under the{" "}
                  <a
                    href="https://github.com/omkartapale/iso3166-lookup/blob/main/LICENSE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MIT license
                  </a>
                  {". "}
                  It's developed to provide easy search, lookup, and
                  interconvert country codes with ISO 3166-1:2020 standard. The
                  supported country code types are <code>Alpha-2</code>,{" "}
                  <code>Alpha-3</code>, and <code>Num-3</code>. You can search
                  with Country names or lookup codes throughout the database or
                  interconvert from one type to another and copy results into
                  the clipboard, enabling you to paste them anywhere you need.
                </p>
                <p className="pt-1">
                  <span className="fw-bold">Open Source dependencies: </span>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    React
                  </a>
                  ,{" "}
                  <a
                    href="https://www.npmjs.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    NPM
                  </a>
                  ,{" "}
                  <a
                    href="https://getbootstrap.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bootstrap
                  </a>
                  ,{" "}
                  <a
                    href="https://www.npmjs.com/package/iso3166-lookup"
                    target="_blank"
                    rel="noreferrer"
                  >
                    iso3166-lookup
                  </a>
                  ,{" "}
                  <a
                    href="https://www.npmjs.com/package/copy-to-clipboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    copy-to-clipboard
                  </a>
                </p>
              </div>
            </div>
            <div className="help-footer text-center mb-2">
              <p className="copyright mb-0">
                Copyright &copy; 2022 Omkar Tapale
              </p>
              <p className="footer-app-title fw-bold mb-0">
                Country Codes Lookup
              </p>
              <p className="version">
                Version: <em>v{packageJson.version}</em>
              </p>
              <ul className="d-flex align-items-center justify-content-center gap-4 px-5">
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
                    <RaiseIssueSvg /> Issue
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
