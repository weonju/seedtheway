import React from 'react';

class Nav extends React.Component {
  render() {

    return (
        <ul className="nav">
          <a href="#home"><li>Home</li></a>
          <a href="#services"><li>Services</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#testimonials"><li>Testimonials</li></a>
          <a href="#contact"><li>Contact</li></a>
          <a href="/blog"><li>Blog</li></a>
        </ul>
    );
  }
}

export default Nav;