import React from 'react';
import "./ContactComponent.css"

function ContactComponent() {
  return(
    <div id="contactContainer">  
        <form id="contact" action method="post">
          <h3>Contact Us</h3>
          <h4>to find your dream Home</h4>
          <fieldset>
            <input placeholder="Your name" type="text" tabIndex={1} required autofocus />
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" type="email" tabIndex={2} required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number (optional)" type="tel" tabIndex={3} required />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your message here...." tabIndex={5} required defaultValue={""} />
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send</button>
          </fieldset>
        </form>
      </div>
    );
  };

export default ContactComponent;