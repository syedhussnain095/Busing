import React from "react";

const ContactInfo = (props) => {
  return (
    <>
      <div className="container-fluid for_Header_two_bg">
        <div className="col-10 mx-auto py-5">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-5">
              <div className="info">
                <div className="info_icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div className="info_context">
                  <h5>{props.location}</h5>
                  <span>
                    {props.address}
                    <br />
                    {props.addresstwo}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-5">
              <div className="info">
                <div className="info_icon">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div className="info_context">
                  <h5>{props.call}</h5>
                  <span>
                    {props.number}
                    <br />
                    {props.number}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-5">
              <div className="info">
                <div className="info_icon">
                  <i class="far fa-envelope"></i>
                </div>
                <div className="info_context">
                  <h5>{props.email}</h5>
                  <span>
                    {props.emailaddress}
                    <br />
                    {props.emailaddresstwo}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
