import React, { Component } from 'react';

class FeaturedServices extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="featured-services-area ptb-100 pt-0">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Services</span>
                            <h2>Our Featured Services</h2>
                            <p>Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-featured-box">
                                    <div className="icon">
                                        <i className="flaticon-recruitment"></i>
                                    </div>

                                    <h3>Recruitment</h3>

                                    {/* <a href="#" className="default-btn">Read More <span></span></a> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-featured-box">
                                    <div className="icon color-facd60">
                                        <i className="flaticon-training"></i>
                                    </div>

                                    <h3>Skill training</h3>

                                    {/* <a href="#" className="default-btn">Read More <span></span></a> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                        <i className="flaticon-research"></i>
                                    </div>

                                    <h3>Executive search</h3>

                                    {/* <a href="#" className="default-btn">Read More <span></span></a> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                        <i className="flaticon-payment"></i>
                                    </div>

                                    <h3>Payroll services</h3>

                                    {/* <a href="#" className="default-btn">Read More <span></span></a> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                        <i className="flaticon-group-1"></i>
                                    </div>

                                    <h3>Manpower consultancy</h3>

                                    {/* <a href="#" className="default-btn">Read More <span></span></a> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                        <i className="flaticon-executive"></i>
                                    </div>

                                    <h3>Hr services</h3>

                                    {/* <a href="#" className="default-btn">Read More <span></span></a> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default FeaturedServices;