import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../images/logo.png"
const HeaderTwo = () => {
  const [main,setMain] = useState(false);

  const changeBackground = () => {
      if (window.scrollY >= 200) {
          setMain(true);
      }
      else{
          setMain(false);
      }
  };

  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <div className={main ? 'main scrolled' : 'main'}>
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt={logo}/>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <MenuIcon className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/portfolio">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderTwo;
