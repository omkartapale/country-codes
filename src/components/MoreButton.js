import "../scss/MoreButton.scss";
import { ReactComponent as MoreButtonSvg } from "../assets/more-button.svg";
import { ReactComponent as SearchSvg } from "../assets/search.svg";
import { ReactComponent as ConvertSvg } from "../assets/convert.svg";
import { ReactComponent as GithubSvg } from "../assets/github.svg";
import { ReactComponent as DonateSvg } from "../assets/coin.svg";
import { ReactComponent as RaiseIssueSvg } from "../assets/incognito.svg";
import { ReactComponent as HelpSvg } from "../assets/question.svg";

const MoreButton = () => {
  return (
    <div className="MoreButton dropdown">
      <button
        id="dLabel"
        className="btn rounded-circle "
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-offset="0,10"
      >
        <MoreButtonSvg />
      </button>
      <ul
        className="dropdown-menu dropdown-menu-da1rk dropdown-menu-macos mx-0 shadow w-220px"
        aria-labelledby="dLabel"
      >
        <li>
          <a
            className="dropdown-item d-flex gap-2 align-items-center rounded-3 active"
            href="#"
          >
            <SearchSvg />
            Lookup
          </a>
        </li>
        <li>
          <a
            className="dropdown-item d-flex gap-2 align-items-center rounded-3"
            href="#"
          >
            <ConvertSvg />
            Convert
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className="dropdown-item d-flex gap-2 align-items-center rounded-3"
            href="https://github.com/omkartapale"
          >
            <GithubSvg />
            Github
          </a>
        </li>
        <li>
          <a
            className="dropdown-item d-flex gap-2 align-items-center rounded-3"
            href="https://github.com/sponsors/omkartapale"
          >
            <DonateSvg />
            Support me!
          </a>
        </li>
        <li>
          <a
            className="dropdown-item d-flex gap-2 align-items-center rounded-3"
            href="https://github.com/omkartapale/country-codes/issues/new/choose"
          >
            <RaiseIssueSvg />
            Raise an Issue
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className="dropdown-item d-flex gap-2 align-items-center rounded-3"
            href="#"
          >
            <HelpSvg />
            Help
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MoreButton;
