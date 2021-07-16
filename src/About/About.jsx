import React from 'react';
import HeaderTwo from "../Common/HeaderTwo";
import AboutBanner from "./AboutBanner";
import AboutTeamEfforts from "./AboutTeamEfforts";
import AboutCounter from "./AboutCounter";
import AboutClientSays from "./AboutClientSays";
import AnyProject from "../Portfolio/AnyProject";
const About = () => {
    return (
        <>
            <HeaderTwo />
            <AboutBanner 
            about="About Us"
            home="Home"
            />
            <AboutTeamEfforts />
            <AboutCounter />
            <AboutClientSays />
            <AnyProject />
        </>
    );
};

export default About;
