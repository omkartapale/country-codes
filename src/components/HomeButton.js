import "../scss/HomeButton.scss";
import { ReactComponent as HomeButtonSvg } from "../assets/home-button.svg";

const HomeButton = () => {
  return (
    <div className="HomeButton dropdown">
      <button className="btn rounded-circle">
        <HomeButtonSvg width="24" height="24" />
      </button>
    </div>
  );
};

export default HomeButton;
