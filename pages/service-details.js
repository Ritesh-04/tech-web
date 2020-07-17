import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/ServiceDetails/PageHeader';
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent';
import Footer from '../components/Layout/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <ServiceDetailsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;