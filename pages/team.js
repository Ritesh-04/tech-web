import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Team/PageHeader';
import TeamCard from '../components/Team/TeamCard';
import Footer from '../components/Layout/Footer';

class team extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <TeamCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default team;