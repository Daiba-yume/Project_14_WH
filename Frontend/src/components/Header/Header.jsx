import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <nav className="header">
      <NavLink to="/">
        <img className="logo" src="/WH_logo.png" alt="logo WealthHealth" />
      </NavLink>
      <div className="navContainer">
        <NavLink to="/" className="home">
          <button>
            <span>Home</span>
          </button>
        </NavLink>
        <NavLink to="/employee">
          <button>
            <span>Employee</span>
          </button>
        </NavLink>
        <NavLink to="/employeeList">
          <button>
            <span>Current Employees</span>
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
