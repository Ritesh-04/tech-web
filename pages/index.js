import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/HoneOne/Banner';
import FeaturedServices from '../components/HoneOne/FeaturedServices';
import Solution from '../components/Common/Solution';
import SubscribeFluid from '../components/Common/SubscribeFluid';
import Footer from '../components/Layout/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment> 
                <Navbar />
                <Banner />
                <FeaturedServices />
                <Solution />
                <SubscribeFluid />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
