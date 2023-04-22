import React, { Component } from "react";
import Search from "../components/Search";
import CopyButton from "../components/common/CopyButton";
import { ReactComponent as InterconvertVerticalSvg } from "../assets/arrow-down-up.svg";
import iso3166Lookup from "iso3166-lookup";

export class Interconversion extends Component {
  // conversionData = [placholder, from, to, interconvert-button-text]
  conversionData = {
    ctoa2: [
      "Convert Country name to Alpha-2",
      "Country name",
      "Alpha-2 code",
      "Convert Alpha-2 to Country name",
    ],
    ctoa3: [
      "Convert Country name to Alpha-3",
      "Country name",
      "Alpha-3 code",
      "Convert Alpha-3 to Country name",
    ],
    cton3: [
      "Convert Country name to Num-3",
      "Country name",
      "Num-3 code",
      "Convert Num-3 to Country name",
    ],
    a2toc: [
      "Convert Alpha-2 to Country name",
      "Alpha-2 code",
      "Country name",
      "Convert Country name to Alpha-2",
    ],
    a2toa3: [
      "Convert Alpha-2 to Alpha-3",
      "Alpha-2 code",
      "Alpha-3 code",
      "Convert Alpha-3 to Alpha-2",
    ],
    a2ton3: [
      "Convert Alpha-2 to Num-3",
      "Alpha-2 code",
      "Num-3 code",
      "Convert Num-3 to Alpha-2",
    ],
    a3toc: [
      "Convert Alpha-3 to Country name",
      "Alpha-3 code",
      "Country name",
      "Convert Country name to Alpha-3",
    ],
    a3toa2: [
      "Convert Alpha-3 to Alpha-2",
      "Alpha-3 code",
      "Alpha-2 code",
      "Convert Alpha-2 to Alpha-3",
    ],
    a3ton3: [
      "Convert Alpha-3 to Num-3",
      "Alpha-3 code",
      "Num-3 code",
      "Convert Num-3 to Alpha-3",
    ],
    n3toc: [
      "Convert Num-3 to Country name",
      "Num-3 code",
      "Country name",
      "Convert Country name to Num-3",
    ],
    n3toa2: [
      "Convert Num-3 to Alpha-2",
      "Num-3 code",
      "Alpha-2 code",
      "Convert Alpha-2 to Num-3",
    ],
    n3toa3: [
      "Convert Num-3 to Alpha-3",
      "Num-3 code",
      "Alpha-3 code",
      "Convert Alpha-3 to Num-3",
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      convertedTerm: null,
    };
    this.convert = this.convert.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.conversionType !== prevProps.conversionType) {
      this.convert(this.state.searchTerm);
    }
  }

  handleChange(e) {
    let searchTerm = e.target.value.trim();
    this.convert(searchTerm);
  }

  convert = (searchTerm) => {
    let result;
    switch (this.props.conversionType) {
      case "ctoa2":
        result = this.convertCountry(searchTerm, "alpha2");
        break;
      case "ctoa3":
        result = this.convertCountry(searchTerm, "alpha3");
        break;
      case "cton3":
        result = this.convertCountry(searchTerm, "num3");
        break;
      case "a2toc":
        result = this.convertAlpha2(searchTerm, "name");
        break;
      case "a2toa3":
        result = this.convertAlpha2(searchTerm, "alpha3");
        break;
      case "a2ton3":
        result = this.convertAlpha2(searchTerm, "num3");
        break;
      case "a3toc":
        result = this.convertAlpha3(searchTerm, "name");
        break;
      case "a3toa2":
        result = this.convertAlpha3(searchTerm, "alpha2");
        break;
      case "a3ton3":
        result = this.convertAlpha3(searchTerm, "num3");
        break;
      case "n3toc":
        result = this.convertNum3(searchTerm, "name");
        break;
      case "n3toa2":
        result = this.convertNum3(searchTerm, "alpha2");
        break;
      case "n3toa3":
        result = this.convertNum3(searchTerm, "alpha3");
        break;
      default:
        result = null;
    }
    this.setState({
      searchTerm: searchTerm,
      convertedTerm: result,
    });
  };

  regexAlpha = new RegExp("^[a-zA-Z]+$");
  regexNum = new RegExp("^[0-9]+$");
  regexNumExist = new RegExp("[0-9]+");

  convertCountry(name, output) {
    if (name !== null) {
      if (name.length === 0) {
        return null;
      } else if (this.regexNumExist.test(name)) {
        return false;
      } else if (name.length < 4) {
        return null;
      } else {
        return iso3166Lookup.findCountry(name, output);
      }
    }
    return null;
  }

  convertAlpha2(code, output) {
    if (code !== null) {
      if (code.length === 0) {
        return null;
      } else if (!this.regexAlpha.test(code) || code.length > 2) {
        return false;
      } else if (code.length < 2) {
        return null;
      } else {
        return iso3166Lookup.findAlpha2(code, output);
      }
    }
    return null;
  }

  convertAlpha3(code, output) {
    if (code !== null) {
      if (code.length === 0) {
        return null;
      } else if (!this.regexAlpha.test(code) || code.length > 3) {
        return false;
      } else if (code.length < 3) {
        return null;
      } else {
        return iso3166Lookup.findAlpha3(code, output);
      }
    }
    return null;
  }

  convertNum3(code, output) {
    if (code !== null) {
      if (code.length === 0) {
        return null;
      } else if (!this.regexNum.test(code) || code.length > 3) {
        return false;
      } else if (code.length < 3) {
        return null;
      } else {
        return iso3166Lookup.findNum3(code, output);
      }
    }
    return null;
  }

  render() {
    let resultBlock;
    switch (this.state.convertedTerm) {
      case undefined:
        resultBlock = (
          <p className="fs-4 mb-0">
            Sorry, No matching{" "}
            {this.conversionData[this.props.conversionType][1]} found!
          </p>
        );
        break;
      case false:
        resultBlock = (
          <p className="fs-4 mb-0 text-warning">
            Invalid {this.conversionData[this.props.conversionType][1]}!
          </p>
        );
        break;
      case null:
        resultBlock = (
          <p className="fs-4 mb-0 text-muted">
            Enter {this.conversionData[this.props.conversionType][1]} to convert
            into {this.conversionData[this.props.conversionType][2]}
          </p>
        );
        break;
      default:
        resultBlock = (
          <>
            <p className="fs-4 mb-0">
              {this.conversionData[this.props.conversionType][2]}:
            </p>
            <p className="fs-4 mb-0">{this.state.convertedTerm}</p>
            <CopyButton copyContent={this.state.convertedTerm} />
          </>
        );
    }
    return (
      <div className="Interconversion">
        <div className="card py-3 px-md-3 border-top-0">
          <div className="card-body">
            <Search
              placeholderText={
                this.conversionData[this.props.conversionType][0]
              }
              onChange={this.handleChange}
            />

            <div className="mt-4 px-4 d-flex align-items-center justify-content-center gap-3 flex-wrap">
              {resultBlock}
            </div>

            <div className="text-center mt-4">
              <button
                className="btn btn-lg"
                title={this.conversionData[this.props.conversionType][3]}
              >
                <InterconvertVerticalSvg width="24" height="24" />{" "}
                {this.conversionData[this.props.conversionType][3]}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interconversion;
