import React from 'react';
import './style.css';

class Contact extends React.Component {
  render() {

    const image = require('../../assets/table.png');

    return (
      <div className="contact-form">
        <div className="contact-content">
          <div className="contact-left">
          <h1>Contact Seed the Way</h1>
            <p className="contact-intro">For more information, to request a proposal, or to inquire about 
            rates and availability, please email <a href="mailto:rebecca@seedtheway.com">rebecca@seedtheway.com</a> or use the form. </p>
            <img className="shadow" src={image} height="300" width="500" />
          </div>
          <div className="contact-right">
            <div className="contact-image-placeholder">
              <p>form goes here</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;