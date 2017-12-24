import React from 'react';
import './style.css';

class Contact extends React.Component {
  render() {

    // const image = require('../../assets/table.png');

    return (
      <div className="contact">
        <h1>Contact Seed the Way</h1>
        <div className="contact-content">
          <p className="contact-intro">For more information, to request a proposal, or to inquire about 
          rates and availability, please email <a href="mailto:rebecca@seedtheway.com">rebecca@seedtheway.com</a> or use the form. </p>
          {/* <img className="contact-image" src={image} height="300" width="500" alt="happy clients"/> */}
        </div>
        <div className="form-container">
          <iframe title="contact-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfnux8K5jhw0ndqPyLFwq18Ezmc80DiuiYl41VGhm3mieQMUQ/viewform?embedded=true" width="760" height="1250" >Loading...</iframe>
        </div>
      </div>
    )
  }
}

export default Contact;