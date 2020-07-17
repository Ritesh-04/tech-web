import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Blog/PageHeader';
import Footer from '../components/Layout/Footer';
import BlogCard from '../components/Blog/BlogCard';

class blog extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <BlogCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default blog;