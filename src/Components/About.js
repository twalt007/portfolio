import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var aboutmepp1 = this.props.data.aboutme.pp1;
      var aboutmepp2 = this.props.data.aboutme.pp2;
      var aboutmepp3 = this.props.data.aboutme.pp3;
      var aboutmepp4 = this.props.data.aboutme.pp4;
      // var aboutmepp5 = this.props.data.aboutme.pp5;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tatumn Walter Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{aboutmepp1}</p>
            <p>{aboutmepp2}</p>
            <p>{aboutmepp3}</p>
            <p>{aboutmepp4}</p>
            {/* <p>{aboutmepp5}</p> */}
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city}, {state} {zip}
                   </span><br />
						   <span><a href="tel:+17143906091"target="_blank" rel="noopener noreferrer">{phone}</a></span><br />
                     <span><a href="mailto:tatumnwalter@gmail.com? subject=MESSAGE FROM TWALT007" target="_blank" rel="noopener noreferrer">{email}</a></span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
