import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      {/* .navbar: Base class for Bootstrap navigation bar */}
      {/* .navbar-expand-md: Expands the navbar on medium screens and larger */}
      <div className="container-fluid">
        <h3 className="navbar-brand">Cyberbullying Tweet Detection</h3>

        {/* .navbar-toggler: Styles the button for toggling the menu on small screens */}
        <button className="navbar-toggler" type="button" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>

        {/* .collapse: Hides the menu by default */}
        {/* .navbar-collapse: Styles the collapsible menu */}
        <div className={`collapse navbar-collapse ${Mobile ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">  {/* .ms-auto: Aligns the nav items to the right */}
            <li className="nav-item">
              <Link to="/" className="nav-link text-white fs-6">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/models" className="nav-link text-white fs-6">Models</Link>
            </li>
            <li className="nav-item">
              <Link to="/dataset" className="nav-link text-white fs-6">Dataset</Link>
            </li>
            <li className="nav-item">
              <Link to="/submit-tweet" className="nav-link text-white fs-6">Tweet-Form</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;