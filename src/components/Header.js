import HomeButton from "./HomeButton";
import MoreButton from "./MoreButton";
import AppTitle from "./AppTitle";

function Header() {
  return (
    <header className="py-3">
      <div className="container-fluid d-grid gap-3 align-items-center">
        <div className="d-flex justify-content-between">
          <HomeButton></HomeButton>
          <AppTitle></AppTitle>
          <MoreButton></MoreButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
