import "../../scss/common/AppTitle.scss";
import logo from "../../assets/worldmap.png";

function AppTitle() {
  return (
    <div className="AppTitle">
      {/* <img src={process.env.PUBLIC_URL + '/apple-touch-icon.png'} alt="worldmap" height="94" /> */}
      <img src={logo} alt="worldmap" width="94" height="94" />
      <h1 className="my-3 display-4">Country Codes Lookup</h1>
    </div>
  );
}

export default AppTitle;
