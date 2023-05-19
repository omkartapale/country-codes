import React from "react";
import { NavLink } from "react-router-dom";
import "../../scss/common/MoreButton.scss";
import { ReactComponent as MoreButtonSvg } from "../../assets/more-button.svg";
import { ReactComponent as SearchSvg } from "../../assets/search.svg";
import { ReactComponent as ConvertSvg } from "../../assets/convert.svg";
import { ReactComponent as GithubSvg } from "../../assets/github.svg";
import { ReactComponent as DonateSvg } from "../../assets/coin.svg";
import { ReactComponent as RaiseIssueSvg } from "../../assets/bug.svg";
import { ReactComponent as InfoSvg } from "../../assets/info-circle.svg";
import { ReactComponent as GooglePlaySvg } from "../../assets/google-play.svg";

const MoreButton = () => {
  return (
    <div className="MoreButton dropdown">
      <button
        id="dLabel"
        type="button"
        className="btn rounded-circle "
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-offset="0,10"
        aria-label="Open more options"
      >
        <MoreButtonSvg width="24" height="24" />
      </button>
      <ul
        className="dropdown-menu dropdown-menu-macos mx-0 shadow w-220px"
        aria-labelledby="dLabel"
      >
        <li>
          <NavLink
            to="/"
            className="dropdown-item d-flex gap-2 align-items-center rounded-3"
          >
            <SearchSvg /> Lookup
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/interconvert"
            className="dropdown-item d-flex gap-2 align-items-center rounded-3"
          >
            <ConvertSvg /> Interconvert
          </NavLink>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className="dropdown-item d-flex gap-2 align-items-center rounded-3"
            href="https://github.com/omkartapale/country-codes"
            target="_blank"
            rel="noreferrer"
          >
            <GithubSvg /> Github
          </a>
        </li>
        <li>
          <a
            className="dropdown-item d-flex gap-2 align-items-center rounded-3"
            href="https://github.com/sponsors/omkartapale"
            target="_blank"
            rel="noreferrer"
          >
            <DonateSvg /> Support me!
          </a>
        </li>
        <li>
          <a
            className="dropdown-item d-flex gap-2 align-items-center rounded-3"
            href="https://github.com/omkartapale/country-codes/issues/new/choose"
            target="_blank"
            rel="noreferrer"
          >
            <RaiseIssueSvg /> Raise an Issue
          </a>
        </li>
        <li>
          <a
            className="dropdown-item d-flex gap-2 align-items-center rounded-3"
            href="https://play.google.com/store/apps/details?id=app.vercel.country_codes.twa&utm_source=website"
            target="_blank"
            rel="noreferrer"
          >
            <GooglePlaySvg /> Google Play
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <NavLink
            to="/about"
            className="dropdown-item d-flex gap-2 align-items-center rounded-3"
          >
            <InfoSvg /> About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MoreButton;
