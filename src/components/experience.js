import "../App.css";
import React from "react";
// import { Link } from "react-router-dom";
import "./experience.css";
import ts from '../images/ts-logo.svg';
import ss from '../images/ss.png';
import { Fade } from "react-awesome-reveal";

function Experience() {
  return (
    <div className="exp">
      <div className="experience">
        <p className="title">Work Experience</p>
        <div class="wavy-line small-section"></div>
      </div>
      <div class="container1">
        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <Fade direction="right" duration={2000} triggerOnce="true">
              <h3 className="position">Customer Success Executive</h3>
              <span>Townscript - a BookMyShow Enterprise (2019-2021)</span>
              <p>
                Performed analysis of large datasets to provide strategies for
                the company's growth which helped the company generate revenue
                of 20 million CAD. Acquired data from the customers and cleaned
                on MS Excel and transformed, which was sent to the analysis team
                for their input. Performed efficient pivoting of the data and
                presented it on the PowerBI tool. Handled several website
                updates and product-related updates. Presented data to the
                stakeholders and provided valid inputs. Worked with customers
                and business partners to develop great relationships. Worked
                closely with the development team to provide user requirements
                and designed the interface for certain features like event
                announcements, tax split, and UI updates. Followed Agile
                methodology to complete the given task. Used Git and Jira for
                version control and bug management
              </p>
            </Fade>
          </div>
        </div>

        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content">
            <Fade direction="left" duration={2000} triggerOnce="true">
              <h3 className="position">Web Design Intern</h3>
              <span>SkillSanta (2018)</span>
              <p>
                Worked on full-stack development to create an invoice bill
                generator for the company. For the backend, Java was used.
                Determined technical requirements by analyzing user needs.
                Created several REST APIs for the website pages. Designed and
                Developed a landing page for the company's website.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
