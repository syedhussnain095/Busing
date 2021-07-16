import React from "react";

const ContactForm = (props) => {
  return (
    <>
      <div className="container-fluid form_bg_clr for_margin">
        <div className="col-10 mx-auto py-5 contact-form">
          <div className="offset-lg-2 col-lg-8">
            <div className="input-group">
              <div className="col-md-6 col-12 mb-6 py-2">
                <input type="text" placeholder="Name*" />
              </div>
              <div className="col-md-6 col-12 mb-6 py-2">
                <input type="text" placeholder="Email*" />
              </div>
              <div className="col-12 mb-6 py-2">
                <input type="text" placeholder="Subject*" />
              </div>
              <div className="col-12 mb-6 py-2">
                <textarea
                  className="textarea-item"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary btn-hover-dark">
                  {props.submit}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
