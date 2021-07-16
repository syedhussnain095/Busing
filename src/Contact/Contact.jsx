import React from 'react';
import HeaderTwo from "../Common/HeaderTwo";
import ContactBanner from "./ContactBanner";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";
const Contact = () => {
    return (
        <>
            <HeaderTwo />
            <ContactBanner 
            contact="Contact Us"
            home="Home"
            us="contact"
            />
            <ContactInfo 
            location="Our Location"
            address="110 W 34th St, NYC."
            addresstwo="67 Madison Avenue"
            call="Give Us A Call"
            number="(+1) 012-345-6789"
            email="Help Desk"
            emailaddress="sales@hasthemes.com"
            emailaddresstwo="hello@hasthemes.com"
            />
            <ContactMap />
            <ContactForm 
            submit="Submit"
            />
        </>
    );
};

export default Contact;
