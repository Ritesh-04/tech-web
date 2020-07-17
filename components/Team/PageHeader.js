import React, { Component } from 'react';
import Link from 'next/link';

class PageHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-title-area page-title-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>Team</h2>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>Team</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Image */}
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

export default PageHeader;