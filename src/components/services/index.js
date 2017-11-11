import React from 'react';
import './style.css';

class Services extends React.Component {
  render() {

    const imageLeft = require('../../assets/service-1.jpeg');
    const imageRight = require('../../assets/service-2.jpg');

    return (
      <div className="services">
        <h1>Services</h1>
        <div className="services-content">
          <div className="services-left">
          <p className="services-headings">Professional Development, Training & Consulting</p>
            <img className="shadow" src={imageLeft} height="180" width="200" />
          </div>
          <div className="services-right">
          <p className="services-headings">Educational Resources</p>
          <img className="shadow" src={imageRight} height="180" width="200" />

          </div>
        </div>
      </div>
    )
  }
}

export default Services;