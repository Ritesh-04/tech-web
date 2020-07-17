import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Projects/PageHeader';
import ProjectsCard from '../components/Projects/ProjectsCard';
import Footer from '../components/Layout/Footer';

class projects extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <ProjectsCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default projects;