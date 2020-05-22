import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      // var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

            </div>

            <div className="ten columns">

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
                     <h1>Get In Touch</h1> 
                     <h4>Check out more with the icons below, and - - </h4>
                     <h4>Feel free to send me a message!</h4>
            </div>

            <aside className="four columns">
               <div >
					   <h4>Contact Info</h4>
					   <p className="address">
						   {name}<br />
						   <span><a href="tel:+17143906091"target="_blank" rel="noopener noreferrer">{phone}</a></span> <br />
               <span><a href="mailto:tatumnwalter@gmail.com? subject=MESSAGE FROM TWALT007" target="_blank" rel="noopener noreferrer">{email}</a></span>
					   </p>
				   </div>
            </aside>

      </div>
   </section>
    );
  }
}

export default Contact;


