import React, { useState } from 'react';
import '../styles/Contact.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const ContactPage: React.FC = () => {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state to true while sending the request

    try {
      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Use formData object directly
      });

      const result = await response.json();
      console.log(result);


      if (response.ok) {
        setResponseMessage(result.message || 'Thank you for your message!');
        Swal.fire({
          title: "Thank you for reaching out! ",
          text: "Your message has been successfully sent. We'll get back to you as soon as possible!",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: 'Go to Home',
          cancelButtonText: 'Send Another Message'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/');
          } else {
            setFormData({ name: '', email: '', message: '' }); // Clear form
          }
        });;

      } else {
        setResponseMessage(result.message || "Something went wrong.");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Make sure you enetered correct credentials",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Failed to submit the form");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });

    } finally {
      setIsLoading(false); // Set loading state to false once request is done
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder='Min length=10'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" id="submit-btn" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Submit'}
        </button>
      </form>
      {responseMessage && <div className="response-message">{responseMessage}</div>}
    </div>
  );
};

export default ContactPage;
