import React from "react";

const PortMenuData = (props) => {
  return (
    <>
      <div className="col-lg-4 col-sm-6 py-3">
        <div className="card">
          <img src={props.imgsrc} alt={props.imgsrc} />
          <div className="card_text">
            <h3>{props.heading}</h3>
            <h5>{props.paraone}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortMenuData;
