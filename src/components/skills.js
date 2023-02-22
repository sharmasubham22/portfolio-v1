 import '../App.css';
import React from 'react';
import './skills.css';
 
 function Skills(){
    return (
      <>
        <div className="skills">
          <p className="title">My Skills</p>
          <div class="wavy-line small-section"></div>
        </div>
        
          <div class="row1-container">
            <div class="box box-down skill-type">
              <h2>Languages</h2>
              <p>Java , JavaScript , C , Kotlin</p>
            </div>
            <div class="box box-down skill-type">
              <h2>Web Technologies</h2>
              <p>HTML5 , CSS3 , ReactJS , NodeJS , MVC , SpringBoot</p>
            </div>
            <div class="box box-down skill-type">
              <h2>Databases</h2>
              <p>
                SQL , Firestore , DynamoDB , MongoDB , Neo4j , Google Cloud
                Storage
              </p>
            </div>
          </div>

        <div class="row1-container">
          <div class="box box-down skill-type">
            <h2>Cloud Services</h2>
            <p>Amazon Web Services & Google Cloud Platform</p>
          </div>
          <div class="box box-down skill-type">
            <h2>Project Management</h2>
            <p>Agile methodology & Scrum</p>
          </div>
          <div class="box box-down skill-type">
            <h2>Others</h2>
            <p>OOPS , TDD , Android Studio , Git , JIRA , MS Office</p>
          </div>
        </div>
      </>
    );
 }
    export default Skills;