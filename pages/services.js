import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Services/PageHeader';
import WhyChooseUs from '../components/Services/WhyChooseUs';
import WhatWeDo from '../components/Services/WhatWeDo';
import Footer from '../components/Layout/Footer';

class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <WhyChooseUs />
                <WhatWeDo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services;