import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <div className="header-inner">
        <Logo />
        <Navigation />
        <Search />
      </div>
    </header>
  );
}

export default Header;
