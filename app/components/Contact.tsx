"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_lfc2ont', // Replace with your EmailJS Service ID
        'template_ge7787f', // Replace with your EmailJS Template ID
        form.current,
        'r9T3Aec4JJcL4klkb' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Your message has been sent successfully!');
          form.current?.reset(); // Reset form after successful submission
        },
        (error) => {
          console.error(error.text);
          setMessage('An error occurred. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p className="text-center mb-6">
          Feel free to reach out for collaboration or just to say hi!
        </p>
        {message && (
          <p
            className={`text-center mb-4 ${
              message.includes('successfully')
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            {message}
          </p>
        )}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name" /* This matches the {{name}} in your EmailJS template */
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email" /* This matches the {{email}} in your EmailJS template */
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message" /* This matches the {{message}} in your EmailJS template */
              rows={5}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
