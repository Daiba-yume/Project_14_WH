import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <nav className="header">
      <NavLink>
        <img className="logo" src="/WH_logo.png" alt="logo WealthHealth" />
      </NavLink>
    </nav>
  );
}

export default Header;
