import React, { useState } from 'react';
import './help.css';

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is doping?',
      answer: 'Doping refers to the use of prohibited substances or methods to enhance athletic performance.',
    },
    {
      question: 'How do you ensure fair testing?',
      answer: 'We conduct random tests, maintain strict protocols, and follow international standards to ensure fairness.',
    },
    {
      question: 'What substances are prohibited?',
      answer: 'The list of prohibited substances is maintained by the World Anti-Doping Agency (WADA) and is updated regularly.',
    },
    {
      question: 'What should I do if I have a complaint?',
      answer: 'Please contact our support team using the form below, and we will address your concern promptly.',
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="help-container">
      <h1 style={{color:"black", fontWeight:"bold"}}>Help & Support</h1>

      <div className="help-content">
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <strong>{faq.question}</strong>
                  <span className="toggle-icon">{openIndex === index ? '−' : '+'}</span>
                </div>
                {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form">
          <h2 >Contact the Anti-Doping Testing Team</h2>
          <form onSubmit={handleSubmit}>
            <div>
             
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Name'
              />
            </div>
            <div>
             
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='Email'
              />
            </div>
            <div>
             
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder='Message'
                style={{width:"100%", height:"30%"}}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
