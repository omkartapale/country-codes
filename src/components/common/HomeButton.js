import React from "react";
import { useNavigate } from "react-router-dom";
import "../../scss/common/HomeButton.scss";
import { ReactComponent as HomeButtonSvg } from "../../assets/home-button.svg";

const HomeButton = () => {
  const navigate = useNavigate();
  const navigateToHome = (e) => {
    e.currentTarget.blur();
    navigate("/");
  };
  return (
    <div className="HomeButton dropdown">
      <button
        type="button"
        className="btn rounded-circle"
        onClick={navigateToHome}
        aria-label="Navigate to home"
      >
        <HomeButtonSvg width="24" height="24" />
      </button>
    </div>
  );
};

export default HomeButton;
