import React from 'react';
import HeaderTwo from "../Common/HeaderTwo";
import ServiceBanner from "./ServiceBanner";
import ServicesData from "./ServicesData";
import AnyProject  from "../Portfolio/AnyProject";
const Service = () => {
    return (
        <>
            <HeaderTwo />
            <ServiceBanner 
            service="Services"
            home="Home"
            />
            <ServicesData />
            <AnyProject />
        </>
    );
};

export default Service;
