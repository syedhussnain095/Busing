import React from "react";
import { NavLink } from "react-router-dom";
const ContactBanner = (props) => {
  return (
    <>
      <div className="container-fluid contact_banner_bg">
        <div className="contact_banner_text">
          <div className="contact_banner_main">
            <h4>{props.contact}</h4>
            <ul>
              <li>
                <NavLink to="/">{props.home}</NavLink>
              </li>
              <li>{props.us}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
