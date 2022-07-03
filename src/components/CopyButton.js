import PropTypes from "prop-types";
import React, { Component } from "react";

import { ReactComponent as ClipboardSvg } from "../assets/clipboard.svg";
import { ReactComponent as CopiedSvg } from "../assets/check.svg";

//todo: check if can apply React lifecycle or hooks to change icons dependent on copyState
export class CopyButton extends Component {
  static propTypes = {
    copyContent: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      copyState: <ClipboardSvg width="24" height="24" />,
      copyContent: props.copyContent,
      buttonTitle: "Copy to clipboard",
    };
    this.setClipboard = this.setClipboard.bind(this);
  }

  setClipboard() {
    this.setState({
      copyState: <CopiedSvg width="24" height="24" />,
      buttonTitle: "Copied",
    });
    setTimeout(
      () =>
        this.setState({
          copyState: <ClipboardSvg width="24" height="24" />,
          buttonTitle: "Copy to clipboard",
        }),
      2000
    );
    // copy to Clipboard logic
  }

  render() {
    return (
      <button
        className="btn-clipboard"
        type="button"
        title={this.state.buttonTitle}
        onClick={this.setClipboard}
      >
        {this.state.copyState}
      </button>
    );
  }
}

export default CopyButton;
