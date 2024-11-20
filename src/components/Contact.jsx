import React from "react";
import "./Contact.css";

const Contact = () => (
  <section className="contact">
    <h2>Contact Me</h2>
    <form>
      <label>
        Name:
        <input type="text" placeholder="Your Name" />
      </label>
      <label>
        Email:
        <input type="email" placeholder="Your Email" />
      </label>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;
