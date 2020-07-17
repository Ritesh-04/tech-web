import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Link from 'next/link';
import Footer from '../components/Layout/Footer';

const validEmailRegex = RegExp(
/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
let valid = true;
Object.values(errors).forEach(val => val.length > 0 && (valid = false));
return valid;
};

class contact extends Component {
    state = {
        location: "Bangalore",
        address: "#36, 6th cross, BTM 2nd Stage, Bangalore, Karnataka, 560068",
        locationOne: "Bangalore",
        addressOne: "#36, 6th cross, BTM 2nd Stage, Bangalore, Karnataka, 560068",
        locationTwo: "Patna",
        addressTwo: "#607, Block- B,Jyotipuram Apartment Bailley Road, Patna, 800014",
      // SelectedLocation: this.state.location,
            name: '',
            email: '',
            phone_number:'',
            msg_subject: '',
            message: '',
            errors: {
                name: '',
            email: '',
            phone_number:'',
            msg_subject: '',
            message: ''
            }

    };

    handleLoctionChange = (e) => {
        const { location, address, locationOne, addressOne, locationTwo, addressTwo } = this.state;
        if(e.target.value !== location){
            if(e.target.value === "Bangalore"){
                this.setState({location : locationOne, address: addressOne}, () => {console.log()})
            }
            else if(e.target.value === "Patna"){
                this.setState({location : locationTwo, address: addressTwo}, () => {console.log()})
            }
        }
    }

    handleInputChange = (e) => {
        event.preventDefault();
        // const {name, value} = e.target;
        // this.setState({[name]: value}, ()=> {console.log("this.state.name", this.state.name)})

        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
        case 'name': 
            errors.name = value.length < 5 ? 'Full Name must be at least 5 characters long!' : '';
            break;
        case 'email': 
            errors.email = validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
        case 'phone_number': 
        errors.phone_number = value.length === 10
            ? ''
            : 'Phone number is not valid!';
        break;
        case 'msg_subject': 
            errors.msg_subject = 
            value.length < 15
                ? 'Subject must be at least 15 characters long!'
                : '';
            break;
        case 'message': 
        errors.message = 
        value.length < 30
            ? 'Message must be at least 30 characters long!'
            : '';
        break;
        default:
            break;
        }

        this.setState({errors, [name]: value});
    }

    handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    };

    render() {
        const {errors} = this.state;
        return (
            <React.Fragment>
                <Navbar />

                {/* Page Header */}
                <div className="page-title-area page-title-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>Contact</h2>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Image */}
                    <div className="shape-img2">
                        <img src={require("../images/shape/2.svg")} alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src={require("../images/shape/3.svg")} alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src={require("../images/shape/4.png")} alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src={require("../images/shape/5.png")} alt="image" />
                    </div>
                    <div className="shape-img7">
                        <img src={require("../images/shape/7.png")} alt="image" />
                    </div>
                    <div className="shape-img8">
                        <img src={require("../images/shape/8.png")} alt="image" />
                    </div>
                    <div className="shape-img9">
                        <img src={require("../images/shape/9.png")} alt="image" />
                    </div>
                    <div className="shape-img10">
                        <img src={require("../images/shape/10.png")} alt="image" />
                    </div>
                </div>
                {/* End Page Header */}

                {/* Contact Area */}
                <section className="contact-area ptb-100">
                    <div className="container">
                        {/* Contact Info */}
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="form-group" style={{visibility: "hidden"}}>
                                    <select className="form-control">
                                    </select>
                                </div>
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="flaticon-email"></i>
                                    </div>
                                    <h3>Email</h3>
                                    <p><a href="mailto:info@techmansolution.in">info@techmansolution.in</a></p>
                                    <p>&nbsp;</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="form-group">
                                    {/* <label htmlFor="FormControlSelect">Select Location</label> */}
                                    <select className="form-control" id="FormControlSelect" name="location" onChange={this.handleLoctionChange}>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Patna">Patna</option>
                                    </select>
                                </div>
                                <div className="contact-info-box">
                                    <div className="icon">
                                    <i className="flaticon-marker"></i>
                                    </div>
                                    <h3>Location</h3>
                                    <p>{this.state.address}</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="form-group" style={{visibility: "hidden"}}>
                                    <select className="form-control">
                                    </select>
                                </div>
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="flaticon-phone-call"></i>
                                    </div>
                                    <h3>Call</h3>
                                    <p><a href="tel:+91-9097604400">+91-9097604400</a></p>
                                    <p>&nbsp;</p>
                                </div>
                            </div>
                        </div>
                        {/* End Contact Info */}

                        <div className="section-title">
                            <span className="sub-title">Contact Us</span>
                            <h2>Drop us Message for any Query</h2>
                            <p>To give you a better insight into our industry experience and specific areas of expertise in Human Resources Recruitment Services, please contact us using any form of communication as shown above. Our Consultant will be in touch with you within 24 hours..</p>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <div className="contact-image">
                                    <img src={require("../images/contact.png")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className="contact-form">
                                    <form id="contactForm" onSubmit={this.handleSubmit} noValidate>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" value={this.state.name} name="name" id="name" className="form-control"  placeholder="Name" onChange={this.handleInputChange}/>
                                                    {errors.name.length > 0 && <span className='error'>{errors.name}</span>}
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input type="email" value={this.state.email} name="email" id="email" className="form-control"  placeholder="Email" onChange={this.handleInputChange}/>
                                                    {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input type="number" value={this.state.phone_number} name="phone_number" id="phone_number"  className="form-control" placeholder="Phone" onChange={this.handleInputChange}/>
                                                    {errors.phone_number.length > 0 && <span className='error'>{errors.phone_number}</span>}
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" value={this.state.msg_subject} name="msg_subject" id="msg_subject" className="form-control" placeholder="Subject" onChange={this.handleInputChange}/>
                                                    {errors.msg_subject.length > 0 && <span className='error'>{errors.msg_subject}</span>}
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" value={this.state.message} className="form-control" id="message" rows="5" placeholder="Your Message" onChange={this.handleInputChange}></textarea>
                                                    {errors.message.length > 0 && <span className='error'>{errors.message}</span>}
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn">
                                                    Send Message <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Contact Area */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default contact;