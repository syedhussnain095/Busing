import React from "react";
import PortSdata from "./PortSdata";
import PortMenuData from "./PortMenuData";
const PortMenu = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row py-4">
              {PortSdata.map((val, ind) => {
                return <PortMenuData key={ind} 
                imgsrc={val.imgsrc} 
                heading={val.heading}
                paraone={val.paraone}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortMenu;
