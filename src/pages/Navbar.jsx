import { Link } from "react-router-dom";
import "../css/Navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Profile
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/Comp1" className="navbar__link">
            Projects
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/Comp2" className="navbar__link">
            Personal
          </Link>
        </li>
      </ul>
    </nav>
  );
};
