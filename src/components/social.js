import '../App.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
// import Fade from 'react-reveal/Fade';

function Social() {
    return (
      <>
        {/* <Fade bottom> */}
        <Container>
          <div className="s-icons">
            {/* <Link className="social" target="_blank" to="#" title="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </Link> */}
            <Link
              className="social"
              target="_blank"
              to="https://www.linkedin.com/in/subham-sharma-137985128/"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              className="social"
              target="_blank"
              to="https://github.com/sharmasubham22"
              title="Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              className="social"
              target="_blank"
              to="https://www.instagram.com/subh.sharma22/"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className="social"
              target="_blank"
              to="https://twitter.com/subh_sharma22"
              title="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
        </Container>
        {/* </Fade> */}
      </>
    );
    }
    
    export default Social;