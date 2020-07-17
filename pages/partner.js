import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Partner/PageHeader';
import PartnerLogo from '../components/Partner/PartnerLogo';
import Footer from '../components/Layout/Footer';


class partner extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <PartnerLogo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default partner;