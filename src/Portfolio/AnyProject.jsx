import React from 'react';
import {NavLink} from "react-router-dom";
const AnyProject = () => {
    return (
        <>
         <div className="container-fluid any_project_bg">
        <div className="contact_banner_text">
          <div className="contact_banner_main for_any_Project">
            <h4>Do you have any Projects ?</h4>
            <p>Whether you want to work with us or are interested in learning more about what we do, we’d love to hear from you.</p>
                <div className="buttn_for_project mt-3">
            <NavLink to="/contact"><button className="for_any_project_btn">Contact Us</button></NavLink>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default AnyProject
