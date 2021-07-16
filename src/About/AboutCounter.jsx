import React from 'react';

const AboutCounter = () => {
    return (
        <>
            <section id="count">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="counter_area">
                                <strong className="counter">102</strong>
                            <div className="title">
                                <h6>Average Projects</h6>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                        <div className="counter_area">
                                <strong className="counter">5700+</strong>
                            <div className="title">
                                <h6>Projects Done</h6>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                        <div className="counter_area">
                                <strong className="counter">98%</strong>
                            <div className="title">
                                <h6>Happy Clients</h6>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                        <div className="counter_area">
                                <strong className="counter">23,045</strong>
                            <div className="title">
                                <h6>Working Hours</h6>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutCounter;
