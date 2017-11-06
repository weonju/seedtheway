import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import './App.css';

class App extends Component {
  render() {
    configureAnchors({offset: -150});
    const logo = require('./assets/seed-logo.png');
    
    const nav = (
      <ul>
        <a href="#home"><li>Home</li></a>
        <a href="#services"><li>Services</li></a>
        <a href="#about"><li>About</li></a>
        <a href="#contact"><li>Contact</li></a>
        <a href="#testimonials"><li>Testimonials</li></a>
        <a href="/blog"><li>Blog</li></a>
      </ul>
    )
    
    return (
      <div className="app">
        <div className="content">
          <div className="header">
            <img src={logo} alt="Seed the Way"/>
            <div className="menu">
              {nav}
            </div>
          </div>
          <ScrollableAnchor id={'home'}>
            <div className="slider section">
              <h1>slider goes here</h1>
            </div>
          </ScrollableAnchor>
          <div className="service-icons section">
            <h2>service icons go here</h2>
          </div>
          <ScrollableAnchor id={'services'}>
          <div className="services section">
              <h1>Services</h1>
          </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'about'}>
          <div className="about section">
              <h1>About</h1>
          </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'contact'}>
          <div className="contact section">
              <h1>Contact</h1>
          </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'testimonials'}>
          <div className="testimonials section">
              <h1>Testimonials</h1>
          </div>
          </ScrollableAnchor>
        </div>
      </div>
    );
  }
}

export default App;
