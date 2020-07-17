import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Pricing/PageHeader';
import PricingCard from '../components/Pricing/PricingCard';
import Footer from '../components/Layout/Footer';

class pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <PricingCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default pricing;