import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../images/logo.png";
const HeaderOne = () => {
    const [one,setOne] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 200) {
            setOne(true);
        }
        else{
            setOne(false);
        }
    };
  
    window.addEventListener('scroll', changeBackground);

    const [img,setImg] = useState(false);

    const changeImage = () => {
        if (window.scrollY >= 200) {
          setImg(true);
        }
        else{
          setImg(false);
        }
    };
  
    window.addEventListener('scroll', changeImage);
    
    return (
        <>
          <div className={one ? 'one move' : 'one'}>
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg">
            <NavLink className={img ? 'img chang' : 'img'} to="/">
              <img src={logo} alt={logo} className="logoone" />
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
                  <NavLink className="nav-link for_change_clr" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link for_change_clr" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link for_change_clr" to="/services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link for_change_clr" to="/portfolio">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link for_change_clr" to="/contact">
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

export default HeaderOne;
