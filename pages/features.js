import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Features/PageHeader';
import OurFeatures from '../components/Features/OurFeatures';
import OurFeaturesTab from '../components/Common/OurFeaturesTab';
import FunFacts from '../components/Common/FunFacts';
import PartnerWithTitle from '../components/Common/Partner/PartnerWithTitle';
import Footer from '../components/Layout/Footer';

class features extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <OurFeatures />
                <OurFeaturesTab />
                <FunFacts />
                <PartnerWithTitle />
                <Footer />
            </React.Fragment>
        );
    }
}

export default features;