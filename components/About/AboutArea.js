import React, { Component } from 'react';

class AboutArea extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src={require("../../images/about-img1.png")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span className="sub-title">Why Choose Us</span>
                                    <h2>We Listen, You Prosper</h2>
                                    <p>Techman Solution don’t just recruit employees, Techman Solution build asset that help organisations scale new heights.</p>

                                    <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i> Recruitment</span></li>
                                        <li><span><i className="fas fa-check"></i> Skill training</span></li>
                                        <li><span><i className="fas fa-check"></i> Executive search</span></li>
                                        <li><span><i className="fas fa-check"></i> Payroll services</span></li>
                                        {/*<li><span><i className="fas fa-check"></i> Employment promoter</span></li>*/}
                                        <li><span><i className="fas fa-check"></i> Manpower consultancy</span></li>
                                        <li><span><i className="fas fa-check"></i> Hr services</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="about-inner-area">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our Vision</h3>
                                        <p>Our Vision is to be the definitive HR Consultancy and Recruitment Solutions
                                        partner for all our clients.</p>
                                        
                                        {/*<ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Activate Listening</li>
                                            <li><i className="flaticon-tick"></i> Brilliant minds</li>
                                            <li><i className="flaticon-tick"></i> Better. Best. Wow!</li>
                                            <li><i className="flaticon-tick"></i> Branding it better!</li>
                                        </ul>*/}
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our Mission</h3>
                                        <p>To provide the insight knowledge of Human Resource thereby the reason and
                                        desire to always use the best Human Resources practices.</p>
                                        
                                        {/*<ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Creating. Results.</li>
                                            <li><i className="flaticon-tick"></i> Expect more</li>
                                            <li><i className="flaticon-tick"></i> Good thinking</li>
                                            <li><i className="flaticon-tick"></i> In real we trust</li>
                                        </ul>*/}
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                    <div className="about-text">
                                        <h3>Our Values</h3>
                                        <p>We give our commitment to a service that at all times.</p>
                                        
                                        {/*<ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Stay real. Always.</li>
                                            <li><i className="flaticon-tick"></i> We have you covered</li>
                                            <li><i className="flaticon-tick"></i> We turn heads</li>
                                            <li><i className="flaticon-tick"></i> Your brand, promoted</li>
                                        </ul>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Images */}
                    <div className="shape-img3">
                        <img src={require("../../images/shape/3.svg")} alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src={require("../../images/shape/2.svg")} alt="image" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default AboutArea;