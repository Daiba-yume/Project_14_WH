import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import "./Header.scss";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // Ouvre ou ferme le menu burger
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="header">
      {/* Lien logo vers la page d’accueil */}
      <NavLink to="/">
        <img className="logo" src="/WH_logo.png" alt="logo WealthHealth" />
      </NavLink>
      {/* Bouton burger pour ouvrir/fermer le menu en mobile */}
      <button className="burger" onClick={handleToggle} aria-label="navigation">
        <CiMenuBurger />
      </button>
      {/* Conteneur du menu (mobile + desktop) */}
      <div className={`navContainer ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className="home" onClick={() => setIsOpen(false)}>
          <button>
            <span>Home</span>
          </button>
        </NavLink>
        <NavLink to="/employee" onClick={() => setIsOpen(false)}>
          <button>
            <span>Form</span>
          </button>
        </NavLink>
        <NavLink to="/employeeList" onClick={() => setIsOpen(false)}>
          <button>
            <span>All Employees</span>
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
