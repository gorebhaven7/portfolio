// ContactMe.js

import React from 'react';
import './ContactMe.css'; // Make sure to create this CSS file for styling

const ContactMe = () => {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
