import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Headroom from 'react-headroom';

// Components
import Nav from './components/nav';
import Contact from './components/contact';
import Services from './components/services';
import About from './components/about';
import Testimonials from './components/testimonials';

import './App.css';

class App extends Component {
  render() {
    configureAnchors({offset: -60});
    const logo = require('./assets/logo.png');
    const circles = require('./assets/greencircles.png');

    return (
      <div className="app">
        <div className="content">
          <Headroom>
            <nav className="menu" ref="menu">
              <Nav />
            </nav>
          </Headroom>
          <ScrollableAnchor id={'home'}>
            <div className="home">
              <a href="/">
                <img className="logo" src={logo} height="250" width="570" alt="Seed the Way"/>
              </a>
              <a href="#services">
                <img className="circles" src={circles} height="200" alt="Seed the Way"/>
              </a>
            </div>
          </ScrollableAnchor>
          <div className="non-home">
            <ScrollableAnchor id={'services'}>
            <div className="section">
              <Services />
            </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'about'}>
              <div className="section">
                <About />
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'testimonials'}>
              <div className="section">
                <Testimonials />
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'contact'}>
              <div className="section">
                <Contact />
              </div>
            </ScrollableAnchor>
          </div>
          <footer className="footer" />
        </div>
      </div>
    );
  }
}

export default App;
