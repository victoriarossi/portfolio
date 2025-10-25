import React from 'react';
import './css/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>Email: <a href="mailto:victoria_rossi2@outlook.com">victoria_rossi2@outlook.com</a></p>
        <p>Phone: (312) 678 0716</p>
      </div>
      <div className="social-links">
        <a href="https://wa.me/5491168994849?text=Hello%20Victoria,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '24px' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/victoriarossi2/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin" style={{ color: '#0A66C2', fontSize: '24px' }}></i>
        </a>
        <a href="https://github.com/victoriarossi" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github" style={{ color: '#181717', fontSize: '24px' }}></i>
        </a>
      </div>
      <form className="contact-form" action="https://formspree.io/f/xayrzpjz" method="POST">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
