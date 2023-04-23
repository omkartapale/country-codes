import PropTypes from "prop-types";
import React, { Component } from "react";
import copy from "copy-to-clipboard";
import "../../scss/common/CopyButton.scss";

import { ReactComponent as ClipboardSvg } from "../../assets/clipboard.svg";
import { ReactComponent as CopiedSvg } from "../../assets/check.svg";

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

  static getDerivedStateFromProps(props, state) {
    return { copyContent: props.copyContent };
  }

  componentDidUpdate() {
    if (this.state.copyState === true) {
      setTimeout(() => {
        this.setState({
          copyState: false,
          buttonTitle: "Copy to clipboard",
        });
      }, 2000);
    }
  }

  setClipboard() {
    copy("");
    if (copy(this.state.copyContent, { format: "text/plain" })) {
      this.setState({
        copyState: true,
        buttonTitle: "Copied",
      });
    } else {
      console.log("Error: Couldn't use clipboard on your browser");
    }
  }

  render() {
    return (
      <div className="CopyButton">
        <button
          className="btn rounded-circle p-2"
          type="button"
          title={this.state.buttonTitle}
          onClick={this.setClipboard}
        >
          {this.state.copyState === true ? (
            <CopiedSvg width="24" height="24" />
          ) : (
            <ClipboardSvg width="24" height="24" />
          )}
        </button>
      </div>
    );
  }
}

export default CopyButton;
