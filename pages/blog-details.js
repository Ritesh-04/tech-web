import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/BlogDetails/PageHeader';
import BlogDetailsContent from '../components/BlogDetails/BlogDetailsContent';
import Footer from '../components/Layout/Footer';

class BlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <BlogDetailsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default BlogDetails;