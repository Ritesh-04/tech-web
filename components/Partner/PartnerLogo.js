import React, { Component } from 'react';
import Link from 'next/link';

class PartnerLogo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="partner-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/1.png")} alt="image" />
                                        <img src={require("../../images/partner-image/1.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/2.png")} alt="image" />
                                        <img src={require("../../images/partner-image/2.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/3.png")} alt="image" />
                                        <img src={require("../../images/partner-image/3.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/4.png")} alt="image" />
                                        <img src={require("../../images/partner-image/4.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/5.png")} alt="image" />
                                        <img src={require("../../images/partner-image/5.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/6.png")} alt="image" />
                                        <img src={require("../../images/partner-image/6.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/7.png")} alt="image" />
                                        <img src={require("../../images/partner-image/7.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/8.png")} alt="image" />
                                        <img src={require("../../images/partner-image/8.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/9.png")} alt="image" />
                                        <img src={require("../../images/partner-image/9.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/10.png")} alt="image" />
                                        <img src={require("../../images/partner-image/10.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Images */}
                    <div className="shape-img2">
                        <img src={require("../../images/shape/2.svg")} alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src={require("../../images/shape/3.svg")} alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src={require("../../images/shape/4.png")} alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src={require("../../images/shape/5.png")} alt="image" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PartnerLogo;