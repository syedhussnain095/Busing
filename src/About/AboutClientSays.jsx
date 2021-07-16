import React from 'react';
import client from "../images/client.jpg";
const AboutClientSays = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="col-10 mx-auto py-5">
                    <div className="clients">
                        <div className="clients_content">
                            <h6>Testimonial</h6>
                            <p>What our clients say</p>
                        </div>
                        <div className="testimonial">
                            <img src={client} alt={client} className="rounded_circle" />
                        </div>
                        <div className="about_client">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et magnis dis parturient montes, pharetra nec ex.</p>
                        </div>
                        <div className="client_name">
                            <span>
                                <strong>- Catherine Kitty. HasTech</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutClientSays;
