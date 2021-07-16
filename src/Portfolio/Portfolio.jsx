import React from 'react';
import HeaderTwo from "../Common/HeaderTwo";
import PortfolioBanner from "./PortfolioBanner";
import PortMenu from "./PortMenu";
import AnyProject from "./AnyProject";
const Portfolio = () => {
    return (
        <>
            <HeaderTwo />
            <PortfolioBanner 
            portfolio="Portfolio"
            home="Home"
            />
            <PortMenu />
            <AnyProject />
        </>
    );
};

export default Portfolio;
