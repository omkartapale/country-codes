import HomeButton from "./HomeButton";
import MoreButton from "./MoreButton";
import AppTitle from "./AppTitle";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header className="py-3">
      <div className="container-fluid d-grid gap-3 align-items-center">
        <div className="d-flex justify-content-between">
          <HomeButton />
          <AppTitle />
          <div className="d-flex">
            <ThemeSwitcher />
            <MoreButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
