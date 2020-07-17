import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="why-choose-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-content">
                                    <span className="sub-title">About Us</span>
                                    <h2>Company Introduction</h2>
                                    <div className="features-text" style={{textAlign:"justify"}}>
                                        <p>Techman Solution is committed to helping organisation to increase their
                                        productivity through better use of their human resources and enable to
                                        achieve real competitive advantage. Our skills and expertise cover a wide
                                        range of HR activities and initiatives. The programmes we design are
                                        developed to meet specific organisational needs. We work across all industry
                                        sectors, employing a simple yet effective approach to each project. By
                                        developing long-term strategic partnerships with private organisations, we are
                                        well placed to offer “best of breed” solutions to our clients, whilst maintaining
                                        focus on the needs of our candidates.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-image">
                                    <img src={require("../../images/why-choose-img1.png")} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-content">
                                    <div className="features-text" style={{textAlign:"justify"}}>
                                        <p>Techman Solution is committed to helping organisation to increase their
                                        productivity through better use of their human resources and enable to
                                        achieve real competitive advantage. Our skills and expertise cover a wide
                                        range of HR activities and initiatives. The programmes we design are
                                        developed to meet specific organisational needs. We work across all industry
                                        sectors, employing a simple yet effective approach to each project. By
                                        developing long-term strategic partnerships with private organisations, we are
                                        well placed to offer “best of breed” solutions to our clients, whilst maintaining
                                        focus on the needs of our candidates.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-image">
                                    <img src={require("../../images/why-choose-img2.png")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default WhyChooseUs;