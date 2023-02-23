import '../App.css';
import React,{useState, useEffect} from 'react';
import Nav from './navbar';
import { Link } from 'react-router-dom';
import Social from './social';
import Contact from './contact'; 
import Education from './education';
import Experience from './experience';
import Skills from './skills';


function PHome() {
    return (
      <div className="p-home">
        <div className="home">
          <div className="fix-nav">
            <Nav />
          </div>

          <div className="intro">
              <p className="ss-intro">
                <span className="ss">Hi, I am</span>
                <br />
                <span className="subh">Subham Sharma.</span> <br />I am a
                Developer.
              </p>
            
            <div class="wavy-line small"></div>
            <p className="desc">
              Graduate student at{" "}
              <Link to="https://www.dal.ca/" target="_blank" className="items">
                Dalhousie University, Halifax.
              </Link>
              <br></br> A software developer, a web developer and a part time
              designer.
            </p>

            <Social />
            <div style={{ marginTop: "60px" }}>
              <Link to="mailto:subham@dal.ca" className="connect">
                Let's Connect!
              </Link>
            </div>
            <div class="box1">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <section id="educa">
          <Education />
        </section>
        <Experience />
        <section id="skill">
          <Skills />
        </section>

//         <Contact />

        <p className="madeby">
          Made with <span style={{ color: "red" }}>&#9829;</span> by Subham
        </p>
      </div>
    );
    }
    
    export default PHome;
    
