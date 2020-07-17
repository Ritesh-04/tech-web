import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/About/PageHeader';
import AboutArea from '../components/About/AboutArea';
import WhyChooseUs from '../components/About/WhyChooseUs';
import Solution from '../components/Common/Solution';
import SubscribeFluid from '../components/Common/SubscribeFluid';
import Footer from '../components/Layout/Footer';

class about extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <WhyChooseUs />
                <AboutArea />
                <Solution />
                <SubscribeFluid />
                <Footer />
            </React.Fragment>
        );
    }
}

export default about;