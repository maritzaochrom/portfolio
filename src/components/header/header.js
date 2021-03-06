import React, { Component } from 'react';
export default class Header extends Component {
  render() {

    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

        <header id='home' className="s-header">
          <h1 className="responsive-headline">I am {resumeData.name}.</h1>
          <h3>I am a {resumeData.role}.{resumeData.roleDescription} </h3>
            <div className="row s-header__nav-wrap">
            <nav className="s-header__nav">
                <ul>
                <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                <li><a className="smoothscroll" href="#contact">Say Hello</a></li>
                </ul>
            </nav>
            </div> 
            <a className="s-header__menu-toggle" href="#0" title="Menu">
            <span className="s-header__menu-icon" />
            </a>
        </header>
                 
      </React.Fragment>
    );
  }
}