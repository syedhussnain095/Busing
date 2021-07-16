import React from "react";
import { NavLink } from "react-router-dom";
const AboutBanner = (props) => {
  return (
    <>
      <div className="container-fluid contact_banner_bg">
        <div className="contact_banner_text">
          <div className="contact_banner_main">
            <h4>{props.about}</h4>
            <ul>
              <li>
                <NavLink to="/">{props.home}</NavLink>
              </li>
              <li>{props.about}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
