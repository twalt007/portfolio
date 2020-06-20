import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faTools, faUsers } from '@fortawesome/free-solid-svg-icons'

class Resume extends Component {
  render() {

    if(this.props.data){
      // var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        if(education.description){
          return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree}</p>
          <p>{education.description}</p></div>
        } 
        else {
            return <div key={education.school}><h3>{education.school}</h3>
            <p className="info">{education.degree}</p></div>
        }
      })
      var work = this.props.data.work.map(function(work){
        console.log("work.description", work.description);
        var descriptionList = work.description.map( (item)=> {
          return <li classname="resume-bullet">{item}</li>
        });
        return <div key={work.company}><h3>{work.company}</h3>
            <p>{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <ul>
              {descriptionList}
            </ul>
            <br></br>
        </div>
      })
      //var skills = this.props.data.skills.map(function(skill){
      //   var className = 'bar-expand '+skills.name.toLowerCase();
      //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      //})
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Professional Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
      </div>
    



      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="skill-table">
            <div className="skill-column">
              <div className="icon-container" ><FontAwesomeIcon icon={faCode} className="faIcon"/></div>
              {/* <div className="section-title"> Language | Framework </div> */}
              <div className="skills">
                <div className="skill">React.js</div>
                <div className="skill">Redux</div>
                <div className="skill">Node JS</div>
                <div className="skill">MySQL</div>
                <div className="skill">JavaScript (ES5/ES6)</div>
                <div className="skill">JQuery</div>
                <div className="skill">HTML5</div>
                <div className="skill">CSS3</div>
                <div className="skill">Regex</div>
                <div className="skill">Bootstrap</div>
                <div className="skill">API: Axios | Ajax</div>
                <div className="skill">Flexbox</div>
              </div>
            </div>
            <div className="skill-column">
              <div className="icon-container" ><FontAwesomeIcon icon={faTools} className="faIcon shrink"/></div>
              {/* <div className="section-title"> Tool | Principle </div> */}
              <div className="skills">
                <div className="skill">AWS</div>
                <div className="skill">OOP</div>
                <div className="skill">Git/Github</div>
                <div className="skill">Mobile-first</div>
                <div className="skill">WordPress</div>
                <div className="skill">Postman</div>
                <div className="skill">Figma</div>
                <div className="skill">MeisterTask</div>
                <div className="skill">DB Desiger</div>
                <div className="skill">Gantt Charts</div>
              </div>
            </div>
            <div className="skill-column">
              <div className="icon-container" ><FontAwesomeIcon icon={faUsers} className="faIcon"/></div>
              {/* <div className="section-title"> Business | Team </div> */}
              <div className="skills">
                <div className="skill">Mandarin Chinese</div>
                <div className="skill">Spanish</div>
                <div className="skill">Planning</div>
                <div className="skill">Project Management</div>
                <div className="skill">Oral Presentations</div>
                <div className="skill">Written Communication</div>
                <div className="skill">Customer Relationship Management</div>
                <div className="skill">Training</div>
                <div className="skill">Negotiations</div>
                <div className="skill">Intl/Remote Teams</div>
                <div className="skill">Quality Assurance</div>
              </div>
            </div>              
          </div>            
			  </div>
      </div>
   </section>
    );
  }
}

export default Resume;
