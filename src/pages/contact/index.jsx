import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from './index.module.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  React.useEffect(() => {
    window.dispatchEvent(new Event('herosection-cursor-enter'));
    return () => {
      window.dispatchEvent(new Event('herosection-cursor-leave'));
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.contactPage}>
      <Navbar isHero={false} />
      <div className={styles.contactContainer}>
        <div className={styles.left}>
          <div className={styles.heading}>CONTACT US</div>
          <div className={styles.subtext}>Send an email</div>
          <div className={styles.email}>jarvis.society@study.iitm.ac.in</div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Type your message here..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
