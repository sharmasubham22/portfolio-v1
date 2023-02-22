import '../App.css';
import React from 'react';
// import Nav from './navbar';
import { Link } from 'react-router-dom';
import profile from '../images/profileimg.png';
import Social from './social';
import './contact.css'

function Contact() {
    return (
      <div className="contact-div">
        <p className="title">Write to me</p>
        <div class="wavy-line small-section"></div>
        <div className="contact">
          <div className="p-pic" />
          <div className="form">
            <div className="con-head">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
              />
              <textarea placeholder="Your Message" className="form-message" />
              <button type="submit" className="form-submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    }
    
    export default Contact;
    