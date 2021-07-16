import React from "react";
import { NavLink } from "react-router-dom";

const PortfolioBanner = (props) => {
  return (
    <>
      <div className="container-fluid contact_banner_bg">
        <div className="contact_banner_text">
          <div className="contact_banner_main">
            <h4>{props.portfolio}</h4>
            <ul>
              <li>
                <NavLink to="/">{props.home}</NavLink>
              </li>
              <li>{props.portfolio}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioBanner;
