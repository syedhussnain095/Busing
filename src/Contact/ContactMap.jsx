import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="col-10 mx-auto">
                    <div className="for_map">
                    <iframe className="map" title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.7912499045847!2d-0.0685895683000957!3d51.524229327278626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cc8c1b5f29f%3A0x86923aa0860f738b!2sThe%20Atrium!5e0!3m2!1sen!2s!4v1626259505045!5m2!1sen!2s" loading="lazy" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMap;
