import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Faq/PageHeader';
import FaqContent from '../components/Faq/FaqContent';
import ContactUs from '../components/Faq/ContactUs';
import Footer from '../components/Layout/Footer';

class faq extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <FaqContent />
                <ContactUs />
                <Footer />
            </React.Fragment>
        );
    }
}

export default faq;