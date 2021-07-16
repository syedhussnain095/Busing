import React from 'react';
import HeaderOne from "../Common/HeaderOne";
import HomeBanner from  "./HomeBanner";
import AboutTeamEfforts from "../About/AboutTeamEfforts";
import OurServices from "../Extra/OurServices";
import PortHeading from "../Extra/PortHeading";
import ServicesData from "../Service/ServicesData";
import AboutCounter from "../About/AboutCounter";
import PortMenu from "../Portfolio/PortMenu";
import AboutClientSays from "../About/AboutClientSays";
import AnyProject from "../Portfolio/AnyProject";

const Home = () => {
    return (
        <>
            <HeaderOne />
            <HomeBanner />
            <AboutTeamEfforts />
            <OurServices />
            <ServicesData />
            <AboutCounter />
            <PortHeading />
            <PortMenu />
            <AboutClientSays />
            <AnyProject />
        </>
    );
};

export default Home;
