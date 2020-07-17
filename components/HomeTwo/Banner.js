import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="main-banner">
                    <div className="container">
                        <div className="main-banner-content">
                            <span className="sub-title">Welcome to Aronix</span>
                            <h1>Creative & Strategic Digital Marketing Agency</h1>

                            <div className="btn-box">
                                <Link href="#">
                                    <a className="default-btn">
                                        Get Started <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="main-banner-image">
                            <img src={require("../../images/banner-image/1.png")} alt="image" />
                        </div>
                    </div>

                    {/* Animation shape Images */}
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
                    <div className="shape-img6">
                        <img src={require("../../images/shape/6.png")} alt="image" />
                    </div>
                    <div className="shape-img7">
                        <img src={require("../../images/shape/7.png")} alt="image" />
                    </div>
                    <div className="shape-img8">
                        <img src={require("../../images/shape/8.png")} alt="image" />
                    </div>
                    <div className="shape-img9">
                        <img src={require("../../images/shape/9.png")} alt="image" />
                    </div>
                    <div className="shape-img10">
                        <img src={require("../../images/shape/10.png")} alt="image" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Banner;