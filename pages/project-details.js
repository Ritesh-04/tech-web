import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/ProjectDetails/PageHeader';
import ProjectDetailsContent from '../components/ProjectDetails/ProjectDetailsContent';
import Footer from '../components/Layout/Footer';
 
class ProjectDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <ProjectDetailsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProjectDetails;