import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import "./education.css";
import { Fade } from "react-awesome-reveal";

function Education() {
  return (
    <div className="edu">
      <div className="education">
        <p className="title">Education Background</p>
        <div class="wavy-line small-section"></div>
      </div>
      <Fade direction="up" duration={2000} triggerOnce="true">
        <div className="uni-div">
          <Link
            to="https://www.dal.ca/"
            target="_blank"
            className="dal-logo"
            title="Dalhouesie University"
          >
            {" "}
            <div />
          </Link>
          <div className="uni-content">
            <h1 className="prgm">Masters of Applied Computer Science</h1>
            <h2 className="uni-name">Dalhousie University (2022-2023)</h2>
            <p className="content">
              &#10020; In first term, learned topics on{" "}
              <span className="highlight">
                Advanced software development concepts, Data warehousing &
                management, and Communicating computer science ideas.
              </span>
            </p>
            <p className="content">
              &#10020;{" "}
              <span className="highlight">
                Serverless data processing, Human-computer interaction, and
                Mobile computing{" "}
              </span>
              came in second term.
            </p>
            <p className="content">
              &#10020; Currently learning{" "}
              <span className="highlight">
                Cloud computing, Advanced web services, and privacy & IT.
              </span>
            </p>
          </div>
        </div>
      </Fade>
      <Fade direction="up" duration={2000} triggerOnce="true">
        <div className="uni-div">
          <Link
            to="https://christuniversity.in/"
            target="_blank"
            className="christ-logo"
            title="Christ University"
          >
            {" "}
            <div />
          </Link>
          <div className="uni-content">
            <h1 className="prgm">Bachelors in Computer Science</h1>
            <h2 className="uni-name">Christ University (2015-2019)</h2>

            <p className="content">
              &#10020; Understood foundational concepts of{" "}
              <span className="highlight">
                Data structures, Data management, Mobile applications, Networks
                etc.
              </span>
            </p>
            <p className="content">
              &#10020; Some notable project works includes{" "}
              <span className="highlight">
                Bird image classification using convolutional neural network,
                Sign language disctionary, Voltage calculator.
              </span>
            </p>
            <p className="content">
              &#10020; Worked on several{" "}
              <span className="highlight">
                web projects, participated in project exhibitions, and several
                extra-curricular activities.
              </span>
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Education;
