import PropTypes from "prop-types";
import React, { Component } from "react";

import { ReactComponent as ClipboardSvg } from "../assets/clipboard.svg";
import { ReactComponent as CopiedSvg } from "../assets/check.svg";

export class CopyButton extends Component {
  static propTypes = {
    copyContent: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      copyState: false,
      copyContent: props.copyContent,
      buttonTitle: "Copy to clipboard",
    };
    this.setClipboard = this.setClipboard.bind(this);
  }

  componentDidUpdate = () => {
    if (this.state.copyState === true) {
      setTimeout(() => {
        this.setState({
          copyState: false,
          buttonTitle: "Copy to clipboard",
        });
      }, 2000);
    }
  };

  setClipboard() {
    this.setState({
      copyState: true,
      buttonTitle: "Copied",
    });
    // copy to Clipboard logic
  }

  render() {
    // check for copyState before returning render to DOM
    let btnSvg =
      this.state.copyState === true ? (
        <CopiedSvg width="24" height="24" />
      ) : (
        <ClipboardSvg width="24" height="24" />
      );
    return (
      <button
        className="btn-clipboard"
        type="button"
        title={this.state.buttonTitle}
        onClick={this.setClipboard}
      >
        {btnSvg}
      </button>
    );
  }
}

export default CopyButton;
