import '../App.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import res from '../files/Subham sharma resume.pdf';
import './navbar.css';
import switchTheme from '../App.js';

function Nav() {
  
    return (
      <div className="navbar">
        <nav>
          <div className="logo"></div>

          <ul className="list">
            {/* <li>
                <Link
                  smooth
                  spy
                  to="/"
                  activeClass="active"
                  className="item"
                  title="Home"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  spy
                  to="educa"
                  activeClass="active"
                  className="item"
                  title="Education"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  spy
                  to="experience"
                  activeClass="active"
                  className="item"
                  title="Experience"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  spy
                  to="prjects"
                  activeClass="active"
                  className="item"
                  title="Projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  spy
                  to="skill"
                  activeClass="active"
                  className="item"
                  title="Skills"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  spy
                  to="testimonial"
                  activeClass="active"
                  className="item"
                  title="Testimonials"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  spy
                  to="contact"
                  activeClass="active"
                  className="item"
                  title="Contact"
                >
                  Contact
                </Link>
              </li> */}

            <li>
              <Link to={res} target="_blank" title="Resume">
                <span className="resume">Resume</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
    }
    
    export default Nav;
    